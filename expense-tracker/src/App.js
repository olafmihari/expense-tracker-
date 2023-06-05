import React, { useState, useEffect } from 'react';
import Header from './Header';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import Summary from './Summary';
import Filter from './Filter';
import Loader from './Loader';
import { fetchExpenses, addExpense, updateExpense, deleteExpense } from './api';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [expenseToUpdate, setExpenseToUpdate] = useState(null);
  const [error, setError] = useState(null);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExpenses()
      .then((data) => {
        setExpenses(data);
        setFilteredExpenses(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleAddExpense = async (newExpense) => {
    try {
      const addedExpense = await addExpense(newExpense);
      setExpenses([...expenses, addedExpense]);
      setFilteredExpenses([...filteredExpenses, addedExpense]);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleUpdateExpense = async (updatedExpense) => {
    try {
      const updated = await updateExpense(expenseToUpdate.id, updatedExpense);
      const updatedExpenses = expenses.map((expense) =>
        expense.id === expenseToUpdate.id ? updated : expense
      );
      setExpenses(updatedExpenses);
      setFilteredExpenses(updatedExpenses);
      setExpenseToUpdate(null);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDeleteExpense = async (expenseId) => {
    try {
      await deleteExpense(expenseId);
      const updatedExpenses = expenses.filter((expense) => expense.id !== expenseId);
      setExpenses(updatedExpenses);
      setFilteredExpenses(updatedExpenses);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleFilter = (filterCriteria) => {
    const { startDate, endDate, category } = filterCriteria;

    let filteredExpenses = expenses;

    if (startDate) {
      filteredExpenses = filteredExpenses.filter(
        (expense) => expense.date >= startDate
      );
    }

    if (endDate) {
      filteredExpenses = filteredExpenses.filter(
        (expense) => expense.date <= endDate
      );
    }

    if (category) {
      filteredExpenses = filteredExpenses.filter(
        (expense) => expense.category.toLowerCase() === category.toLowerCase()
      );
    }

    setFilteredExpenses(filteredExpenses);
  };

  return (
    <div className="App">
      <Header />
      <ExpenseForm expenseToUpdate={expenseToUpdate} setExpenseToUpdate={setExpenseToUpdate} />
      <Summary expenses={expenses} />
      <Filter handleFilter={handleFilter} />
      {loading ? (
        <Loader />
      ) : (
        <ExpenseList expenses={filteredExpenses} deleteExpense={handleDeleteExpense} />
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default App;
