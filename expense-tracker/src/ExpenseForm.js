import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an expense object
    const expense = {
      date,
      amount: parseFloat(amount),
      category,
      description,
    };

    // Call the addExpense function from props to add the expense
    addExpense(expense);

    // Reset the form fields
    setDate('');
    setAmount('');
    setCategory('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Expense</h2>
      <div>
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <div>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      </div>
      <div>
        <label>Category:</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
