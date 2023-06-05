import React, { useState } from 'react';
import { addExpense, updateExpense } from './api';

const ExpenseForm = ({ expenseToUpdate, setExpenseToUpdate }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newExpense = {
      title,
      amount: parseFloat(amount),
    };

    if (expenseToUpdate) {
      // Updating existing expense
      await updateExpense(expenseToUpdate.id, newExpense);
      setExpenseToUpdate(null);
    } else {
      // Adding new expense
      await addExpense(newExpense);
    }

    // Reset form inputs
    setTitle('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">{expenseToUpdate ? 'Update Expense' : 'Add Expense'}</button>
    </form>
  );
};

export default ExpenseForm;
