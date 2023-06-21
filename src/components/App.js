import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  const [CurrentCategory, setCurrentCategory] = useState('All')
  const [form, setForm] = useState({
    text:'',
    category: '',
  })

  const filteredTasks = CurrentCategory === 'All' ? tasks : tasks.filter(l => l.category === CurrentCategory)

  function handleChange(event){
    const name = event.target.name
    const value = event.target.value

    setForm({...form,[name]: value})
  }

  function onTaskFormSubmit(event){
    event.preventDefault()
    setTasks([...tasks, form])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter setCurrentCategory={setCurrentCategory} CurrentCategory={CurrentCategory}/>
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={categories} form={form} handleChange={handleChange} />
      <TaskList tasks={filteredTasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
