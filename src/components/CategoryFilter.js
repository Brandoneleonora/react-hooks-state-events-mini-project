import React, { useState } from "react";

function CategoryFilter({ setCurrentCategory, CurrentCategory }) {
   

  return (
    <div className="categories">
      <h5>Category filters</h5>
        <button className={CurrentCategory === 'All'? 'selected' : ''} onClick={(e) => setCurrentCategory(e.target.innerHTML)}>All</button>
        <button className={CurrentCategory === 'Code'? 'selected' : ''} onClick={(e) => setCurrentCategory(e.target.innerHTML)}>Code</button>
        <button className={CurrentCategory === 'Food'? 'selected' : ''} onClick={(e) => setCurrentCategory(e.target.innerHTML)}>Food</button>
        <button className={CurrentCategory === 'Money'? 'selected' : ''} onClick={(e) => setCurrentCategory(e.target.innerHTML)}>Money</button>
        <button className={CurrentCategory === 'Misc'? 'selected' : ''} onClick={(e) => setCurrentCategory(e.target.innerHTML)}>Misc</button>
    </div>
  );
}


export default CategoryFilter;
