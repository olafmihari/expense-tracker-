import React from 'react';
import ExpenseItem from './ExpenseItem';
import { deleteExpense } from './api';

const ExpenseList = ({ expenses }) => {
  const handleDeleteExpense = async (expenseId) => {
    await deleteExpense(expenseId);
    // Implement logic to update the expenses list (e.g., refetch from API or update state)
  };

  return (
    <ul>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} deleteExpense={handleDeleteExpense} />
      ))}
    </ul>
  );
};

export default ExpenseList;
