import React from 'react';

const Summary = ({ expenses }) => {
  // Calculate aggregate data or statistics based on the expenses
  const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
  const averageAmount = totalAmount / expenses.length;

  return (
    <div className="summary">
      <h2>Summary</h2>
      <p>Total Amount: {totalAmount}</p>
      <p>Average Amount: {averageAmount}</p>
      {/* Add more summary information as needed */}
    </div>
  );
};

export default Summary;
