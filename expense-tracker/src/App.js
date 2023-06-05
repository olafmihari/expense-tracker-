import React, { useState } from 'react';
import Header from './Header';
import ExpenseForm from './ExpenseForm';
import ExpenseItem from './ExpenseItem';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    // Implement logic to add the expense to the API or state
    console.log('Adding expense:', expense);
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="App">
      <Header />
      <ExpenseForm addExpense={addExpense} />
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
      {/* Rest of your application */}
    </div>
  );
}

export default App;
