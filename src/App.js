import React, { useState } from 'react'

import uid from 'uid';

import './App.css'

import ListViewer from './components/listViewer/listViewer.component'
import AddToDo from './components/addToDo/addToDo.component'

import todosData from './todosData';

const App = () => {
  const [toDoList, setToDoList] = useState(todosData)

  const addTODO = todo => {
    todo.id = uid();
    todo.completed = false;
    setToDoList([...toDoList, todo])

  }

  const deleteItem = (id) => {
    setToDoList(toDoList.filter(todo => todo.id !== id))
  }

  return (
    <div className='container'>
      <h1>TODO LIST </h1>
      <AddToDo addTODO={addTODO} />
      <ListViewer toDoList={toDoList} deleteItem={deleteItem} />

    </div>
  )


}


export default App;


