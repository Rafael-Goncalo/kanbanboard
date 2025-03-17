import React, {useState, useEffect} from 'react'
import {DatePickerInput} from '@mantine/dates';
import {v4 as uuidv4} from 'uuid';
import dayjs from 'dayjs';

export const FormTask = (props) => {
  const {data, setKanbanData, taskDataUpdate, setTaskDataUpdate, setShowAddTask} = props;

  
  const [newTask, setNewTask] = useState({
    id: uuidv4(),
    title: "",
    description: "",
    assignee: "",
    status: "To Do",
    priority: "Low",
    createdDate: new Date(),
    dueDate: new Date()
  })
  useEffect(() => {
  if(taskDataUpdate){
      setNewTask({
        id: taskDataUpdate.id,
        title: taskDataUpdate.title,
        description: taskDataUpdate.description,
        assignee: taskDataUpdate.assignee,
        status: taskDataUpdate.status,
        priority: taskDataUpdate.priority,
        createdDate: taskDataUpdate.createdDate,
        dueDate: dayjs(new Date(taskDataUpdate.dueDate)).add(-1, 'day')
      })
    }
  }, [taskDataUpdate])

  function resetForm()
  {
    setNewTask({
      id: uuidv4(),
      title: "",
      description: "",
      assignee: "",
      status: "To Do",
      priority: "Low",
      createdDate: new Date(),
      dueDate: new Date()
    })
  }
  
// e.preventDefault() // Somewhere here.
  function handleOnChange(e) {
    const name= e.target.name;
    const value = e.target.value;
    setNewTask({...newTask, [name] : value})
    
    
  }
  function handleFormSubmit(e) {
    // console.log(newTask)
    // setNewTask({...newTask, ["id"] : uuidv4(), ["createdDate"] : new Date()})
    // console.log(newTask)
    e.preventDefault();
    // update part
    if(taskDataUpdate){
      // i create a copy of data and update one task with this id
      const updatedData = data.map(task => 
        task.id === taskDataUpdate.id ? 
        // {...task, ...newTask} =
        {
          id: task.id,
          title: newTask.title,
          description: newTask.description,
          assignee: newTask.assignee,
          status: newTask.status,
          priority: newTask.priority,
          createdDate: newTask.createdDate,
          dueDate: dayjs(newTask.dueDate).add(1, 'day').toDate(),
        } : task
      )
      // i change data with the new array
      setKanbanData(updatedData)
     console.log(updatedData)
      // i have nothing to update now so taskDataUpdate need to be null
      setTaskDataUpdate(null)
      
// create part
    }else{
      setKanbanData([...data, {...newTask, dueDate: dayjs(newTask.dueDate).add(1, 'day').toDate()}])
    }
     //  i set all input value with default value
      resetForm()
      // close the form
      setShowAddTask(false)

  }
  return (
    <form className='form-container' onSubmit={handleFormSubmit}>
      <h3>{taskDataUpdate ? `Update ${taskDataUpdate.title}` : 'Create new Task' }</h3>
      <div> 

        <label> Title 
          <input type="text" name="title" placeholder="task title" value={newTask.title} onChange={handleOnChange}/>
        </label>
        <label> assignee
            <input type="text" name="assignee" placeholder="name assignee" value={newTask.assignee} onChange={handleOnChange}/>
        </label>
        <DatePickerInput value={newTask.dueDate} onChange={(date) => setNewTask({...newTask, dueDate: date || new Date()})}  label="Deadline" placeholder='Due date' />
    
    </div>

      <div>

        <label>Status
          <select name="status" value={newTask.status} onChange={handleOnChange}>
            <option value="To Do">To Do</option>
            <option value="In Progress">Doing</option>
            <option value="Done">Done</option>
          </select>
        </label>

        <label>Priority
          <select name="priority" value={newTask.priority} onChange={handleOnChange}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>

      </div>
{/* id="text-area" */}
      <div>
        <label>
            <input type="textarea" name="description" placeholder="describe your task here" value={newTask.description} onChange={handleOnChange}/>
        </label>
      </div>

      <button type="submit">{taskDataUpdate ? 'Update' : 'Create'}</button>
      
    </form>
  )
}
