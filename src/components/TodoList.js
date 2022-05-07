import React, { useEffect, useState } from "react";
import CreateTask from "../modals/CreateTask";
import Card from "./Card";
import DoneCard from "./DoneCard";

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);
    const [doneList, setDoneList] = useState([]);
    
    useEffect(() => {
        let arr = localStorage.getItem("taskList")
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])

    useEffect(() => {
        let arr = localStorage.getItem("doneList")

        if(arr){
            let obj = JSON.parse(arr)
            setDoneList(obj)
        }
    }, [])
    
    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        setModal(false)
    }

    const uncheckTask = (indexd) => {
        let tempList = taskList
        let tempListd = doneList
        tempList.push(tempListd[indexd])
        tempListd.splice(indexd, 1)
        localStorage.setItem("doneList", JSON.stringify(tempListd))
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setDoneList(tempListd)
        setTaskList(tempList)
        window.location.reload()
    }

    const checkTask = (index) => {
        let tempList = taskList
        let tempListd = doneList
        tempListd.push(tempList[index])
        tempList.splice(index, 1)
        localStorage.setItem("doneList", JSON.stringify(tempListd))
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setDoneList(tempListd)
        setTaskList(tempList)
        window.location.reload()
    }

    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }
    const deleteTaskd = (indexd) => {
        let tempList = doneList
        tempList.splice(indexd, 1)
        localStorage.setItem("doneList", JSON.stringify(tempList))
        setDoneList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }


    return (
        <>
            <div className="header text-center">
                <h3>Todo List</h3>
                <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>Create Task</button>
            </div>
            <div  className="task-container">
                {taskList.map((obj, index) => <Card taskObj={obj} index={index} checkTask={checkTask} deleteTask={deleteTask} updateListArray={updateListArray}/>)}
            </div>
            <div className="task-container">
                {doneList.map((obj, index) => <DoneCard taskObj={obj} index={index} uncheckTask={uncheckTask} deleteTask={deleteTaskd}/>)}
            
            </div>
            <CreateTask toggle = {toggle} modal = {modal} save={saveTask}/>
        </>
        
    );
};

export default TodoList;