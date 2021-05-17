import React,{useState} from 'react'
import TodoItem from "./TodoItem"


function Todo() {
    //to store values of title and content
   const [values ,setValues] = useState({
    title : "",
    content : ""
   }); 
   //to store all the todos in todo array
  const [todo , setTodo] = useState([]);

  //changle handler
  function changeHandler(event){
      const {name , value} = event.target;
      setValues({...values , [name] : value}); 
  }
  //adding object to todo array
  function clickHandler(){
      setTodo([...todo,values]);
      setValues({title:"" , content:""});
  }
  function removeHandler(id){

    setTodo(prevTodo => {
        return prevTodo.filter((item,index) => {
            return index !== id;
        });
    })


  }

    const divStyle = {
        
        marginTop : "15px",
        color : "black",
        textAlign: "center"
    }
    const childDivStyle = {
        padding : "10px 5px",
        margin:"20px auto",
        background:"#ffde7d" , 
        display : "flex",
        flexDirection:"column",
        width:"500px" , 
        height:"fit-content",
        borderRadius: "15px"
    }
    const h1Style = {
        color: "white",
        textAlign: "center",
        textDecoration: "underline"
    }
    const inputStyle = {
        margin:"5px 10px",
        textAlign:"left"
    }
    const buttonStyle = {
        textAlign:"right",
        borderRadius:"50%",
        float:"right",
        width:'fit-content',
        marginLeft:'auto',
        marginTop : "5px",
        marginRight : "5px",
    }

    return (
        <div style={divStyle}>
            
            <h1 style={h1Style}>Todo's Remaining</h1>
            
          {
              todo.map((item , index) => {
                  return <TodoItem key={index} id={index} title={item.title} content={item.content} removeHandler ={removeHandler} />
                  })
          }
            
            <div style={childDivStyle}>
                <input type="text" style={inputStyle} name="title" placeholder="Title" value={values.title} onChange={changeHandler} />
                <textarea class="form-control" name="content" aria-label="With textarea" value={values.content} onChange={changeHandler} placeholder="Enter Content"></textarea>
                <button className="btn btn-warning" style={buttonStyle} onClick={clickHandler}> +</button>
            </div>
            
        </div>
    )
}

export default Todo
