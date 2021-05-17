import React from 'react'

function TodoItem(props) {
    const divStyle = {
        padding : "15px 10px",
        margin:"20px auto",
        background:"#ffde7d" , 
        display : "block",
        width:"500px" , 
        borderRadius: "15px",
        position : "relative"
    }
    const titleStyle = {
        margin:"5px 10px",
        textDecoration:"underline",
        textAlign:"left"
    }
    const contentStyle = {
        margin:"5px 10px",
        textAlign:"left"
    }
    const buttonStyle = {
        position: "absolute",
        lineHeight:"1.3",
        right: "10px",
        bottom : "10px"
    }
    return (
        <div style={divStyle}>
            <h6 style={titleStyle}>{props.title}</h6>
            <p style={contentStyle}> {props.content}</p>
            <button className="btn btn-warning" style={buttonStyle} onClick={() => props.removeHandler(props.id)}> Remove </button>
        </div>
    )
}

export default TodoItem
