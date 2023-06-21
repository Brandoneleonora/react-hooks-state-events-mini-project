import React from "react";

function NewTaskForm({ categories, form, handleChange,onTaskFormSubmit }) {



  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={form.name} onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" value={form.name} onChange={handleChange}>
          {categories.map((gory, index) => <option key={index}>{gory === 'All'? null : gory}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
