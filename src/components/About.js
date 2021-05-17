import React from 'react'
import Header from "./Header";
function About() {
    const AboutStyle = {
        textAlign : "center",
        color : "white",
        fontSize : "30px",
        display : "block",
        justifyContent : "vertical",
        lineHeight :"2"
    }
    return (
        <div>
        <Header />
        <div className="container-fluid" style={AboutStyle}>
        <h1 style={{textDecoration: "underline"}}>Todo App</h1>
          <p>
            This is Simple Web App built to test out My React Skills,
            It includes the use of React-Dom,Components,Props,Hooks and 
            react-router-dom !!
            This can be used to make a list of your daily todos and 
            remove or add new todos according to the work flow .
          </p>
          <p style={{textDecoration:"underline"}}>For More Updates and to contact Subscribe to my NewsLetter !!</p>
        </div>
        
    <div className="container-fluid" style={{textAlign:"center"}}>
      <input type="email" style={{width:"60%" , borderRadius:"8px" ,display:"block" , padding:"5px 15px",margin:"60px auto 15px auto"}} placeholder="Email Address" required />
      <button type="button" style={{borderRadius:"20px",marginTop:"5px"}} class="btn btn-danger">Subscribe</button>
        </div>

    </div>
    )
}

export default About
