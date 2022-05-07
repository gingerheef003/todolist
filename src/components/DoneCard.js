import React from "react";
const DoneCard = ({taskObj, indexd, uncheckTask, deleteTask}) => {

    const handleUncheck = () => {
        uncheckTask(indexd)
    }
    const handleDelete = () => {
        deleteTask(indexd)
    }
    
    return (
        <div class = "done-card-wrapper mr-5">
            <div class = "card-top" style={{"background-color": "#A9A9A9" }}></div>
            <div class = "task-holder">
                <span class = "card-header" style={{textDecoration: "line-through",  "background-color": "#D3D3D3", "border-radius": "10px"}}>{taskObj.Name}</span>

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i class = "fa-solid fa-check" style={{"margin-right": "7px", "color" : "#34b233", "cursor" : "pointer"}} onClick = {handleUncheck}></i>
                    <i class="fas fa-trash-alt" style = {{"color" : "#F00E0E", "cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div>
            </div>
        </div>
    );
};

export default DoneCard;