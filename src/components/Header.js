import React from 'react'
import {Link} from "react-router-dom"

function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#" style={{color: "white",textDecoration:"none"}}>Todo APP</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" href="#" style={{textDecoration:"underline" ,color: "white"}}><Link to="/">Home</Link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" style={{textDecoration:"underline" ,color: "white"}} href="#"><Link to="/about">About</Link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" style={{textDecoration:"underline" ,color: "white"}} href="#"><Link to="/contact">Contact</Link></a>
                            </li>
                        </ul>
                    </div>
                </div>
        </nav>
    </div>
    )
}

export default Header
