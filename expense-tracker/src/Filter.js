import React, { useState } from 'react';

const Filter = ({ handleFilter }) => {
  const [filterCriteria, setFilterCriteria] = useState({
    startDate: '',
    endDate: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterCriteria((prevCriteria) => ({ ...prevCriteria, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFilter(filterCriteria);
  };

  return (
    <div className="filter">
      <h2>Filter</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={filterCriteria.startDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={filterCriteria.endDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={filterCriteria.category}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Apply Filter</button>
      </form>
    </div>
  );
};

export default Filter;
