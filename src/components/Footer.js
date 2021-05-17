import React from 'react'

function Footer() {
    const footerStyle = {
        fontSize: "22px",
        background : "#564a4a",
        width : "100%",
        color : "white",
        padding : "10px 0",
        display:"flex",
        justifySelf:"flex-end"
    }
    return (
            <footer style={footerStyle}>Samarth Gaikwad &#169; 2021</footer>
    )
}

export default Footer
