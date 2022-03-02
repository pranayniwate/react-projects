import React, { useState } from 'react'
import {menuData} from './Data'

function Menu() {
  document.body.style = `background:aliceblue ;`;
    const [list, setList] = useState(menuData);
    let uniqueCategory = menuData.map((item) =>{ return item.category})
    uniqueCategory = [...new Set(uniqueCategory)]

  const handles = (item)=>{
    const filterList = menuData.filter((val) => val.category === item)
    setList(filterList);
  }

    return (
    <section className="menu-container">
        <article className="menu-btns">
          <button onClick={() => setList(menuData)}  className="menu-btn" >All</button>
        {uniqueCategory.map((item,index) =>{
          return(
            
              <button onClick={() => {handles(item)}} 
              className="menu-btn" key={index}>{item}</button>
            
          )
        })}
        </article>
        {list.map((item) =>{
          const {id,category,title,img,price,features} = item;
          return (<article className="menu-info" key={id}>
            <div className="product-img">
              <img src={img} alt={title} />
              <h3>Rs. {price}</h3>
              
            </div>
            <div className="product-info">
              <h2>{title}</h2>
              <h3><pre>{features}</pre></h3>
            </div>
          </article>)
        })}
      
    </section>
  )
}

export default Menu
