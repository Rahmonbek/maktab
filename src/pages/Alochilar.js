import axios from 'axios';
import React, { Component } from 'react';
import style  from '../css/Dashboard.module.css'

import { url, user  } from '../host/Host';
import Carousel from "react-multi-carousel";

export default class Alochilar extends Component {
  state={
      excellent:[]
  }
    getExcellents = () => {
        axios.get(`${url}/school-by-admin/${user}/`).then((res) => {
          this.setState({ data: res.data });
          axios.get(`${url}/excellent/`).then((res1) => {
           var v=[]
           res1.data.map(item=>{
             if(item.school===res.data.id){
               v.push(item)
             }
           })
           console.log(res.data, res1.data)
            this.setState({ excellent: v });
            setInterval(() => {
              this.setState({
                loader: false,
              });
            }, 2000);
         
          });
        });
      
       };
    
     
      componentDidMount() {
       this.getExcellents();
       
      }
    
    render() {
        const responsive2 = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 3,
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
            },
          };
      
    return (
      <div>
<div className={style.ustoz} style={{marginTop:"0px"}}>
  <div id="yangilik"></div>

      <h1 className={style.sarlavha}>Maktab a'lochilari</h1>
<br/>
      <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive2}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={3000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={100}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
{this.state.excellent.length!==0?this.state.excellent.map((item)=>{
    return(
    <div>
      <div className={style.alo_item}> 
      <div>
      <img src={item.image}/>
          <h4>{item.full_name}</h4>
          <p className={style.cl}>{item.clas}</p>
          <p className={style.date}><i className="fa fa-calendar"></i>{item.birth_day}</p>

          </div>
      </div>
  </div>)
  }):<div></div>}
</Carousel>
<br/>
       <br/>
              <br/>


      </div>
  
      </div>
    );
  }
}
