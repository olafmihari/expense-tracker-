import React from 'react';

const ExpenseItem = ({ expense }) => {
  const { id, date, amount, category, description } = expense;

  return (
    <li>
      <div>
        <strong>Date:</strong> {date}
      </div>
      <div>
        <strong>Amount:</strong> {amount}
      </div>
      <div>
        <strong>Category:</strong> {category}
      </div>
      <div>
        <strong>Description:</strong> {description}
      </div>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </li>
  );
};

export default ExpenseItem;
