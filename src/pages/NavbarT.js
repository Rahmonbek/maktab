import { Row } from 'react-bootstrap'
import React, { Component } from 'react'
import style from '../css/Navbar.module.css'
import logo from '../images/logo.jpg'
import { NavLink } from 'react-router-dom'
export default class NavbarT extends Component {
    render() {
        return (
            <div>
                <div className={style.navbar}>
                  
                    <div className={style.brand}>
                        <img src={logo}/>
                    </div>
                    <div className={style.nav}>
                    <ul>
                            <li>
                                <a className={style.lik} activeStyle={{color:"gold"}} href="#">Bosh sahifa</a>
                            </li>
                            <li>
                                <a className={style.lik} activeStyle={{color:"gold"}} href="#fotolar">Foto lavhalar</a>
                            </li>
                            <li>
                                <a className={style.lik} activeStyle={{color:"gold"}} href="#yangilik">Yangiliklar</a>
                            </li>
                         
                            <li>
                                <a className={style.lik} activeStyle={{color:"gold"}} href="#video">Video lavhalar</a>
                            </li>
                           
                            <li>
                                <a className={style.lik} activeStyle={{color:"gold"}} href="#bog'lanish">Bog'lanish</a>
                            </li>
                        </ul>
                        </div>
                </div>
            </div>
        )
    }
}
