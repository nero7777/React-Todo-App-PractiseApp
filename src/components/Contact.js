import React from 'react'
import Header from "./Header";
function Contact() {
    return (
        <div>
        <Header />
        <div className="container-fluid" style={{textAlign:"center",fontSize : "36px" , color: "white"}}>
        <h1 style={{textDecoration: "underline", margin :"20px auto"}}>Contact Me</h1>
            <p><span style={{textDecoration:"underline"}}>Email</span> : samarthgaikwad38@gmail.com</p>
            <p><span style={{textDecoration:"underline"}}>Github</span> : nero7777</p>
            <p><span style={{textDecoration:"underline"}}>Mobile</span> : 9503092018</p>
            <p><span style={{textDecoration:"underline"}}>Address</span> : Sr no 89 Kalas , Alandi Road ,Near Dutta Temple ,Pune 15</p>
        </div>
           
            
        </div>
    )
}

export default Contact
