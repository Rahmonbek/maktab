
import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import style from '../css/Footer.module.css'
import logo from '../images/logo.jpg'
export default class Footer extends Component {
    render() {
        return (
            <div className={style.foot}>
                <Row>
                <Col lg={4} md={12} sm={12}>
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
                </Col>
                        <Col className={style.colImg} lg={4} md={12} sm={12}>
                        <img src={logo}/>
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                        <p><b>Ishonch telefonlari : </b>+998-93-082-03-72<br/>
                        +998-71-234-56-78</p>
                        <p><b>Email : </b>xorazm5gurlan@gmail.com</p>
                        <p><b>Manzil : </b>Xorazm viloyati Gurlan tumani Buxoriy mahallasi 1-maktab</p>
                        <div className={style.icons}>
                        <a href="#">
                                <i className="fa fa-telegram"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-youtube"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-facebook"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}