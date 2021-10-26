import { Row } from 'react-bootstrap'
import React, { Component } from 'react'
import style from '../css/Navbar.module.css'
import logo from '../images/logo.jpg'
import { NavLink } from 'react-router-dom'
export default class NavbarT extends Component {
 state={
     id:0
 }

 
    Tool =()=>{
 if(this.state.id===0){
    document.querySelector('#navb').style.display="none"

 }
        if(document.querySelector('#navb').style.display==="none"){
        document.querySelector('#navb').style.display="flex"
    }else{
        document.querySelector('#navb').style.display="none"

    }
    this.setState({id:1})
    
   }
    render() {

        return (
            <div>
                <div className={style.navbar}>
                  <div className={style.tool} onClick={this.Tool}>
                      <i className="fa fa-bars"></i>
                  </div>
                    <div className={style.brand}>
                        <img src={logo}/>
                    </div>
                    <div className={style.nav}>
                    <ul id="navb">
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
