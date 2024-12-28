import "../App";
import { useState } from "react";

export const Button = (stateSwitch) => {

    const {data} = stateSwitch;
    const dataValue = data.buttonValue;
    const dataProducts = data.products;

    let result = [];

    if(dataValue === "Переключаем на список"){
        result = dataProducts.map((item) => {
            <div key={item.id} className="list__item">
              <img src={item.img} className="list__image" /> 
              <div className="list__name">{item.name}</div> 
              <div className="list__color">{item.color}</div> 
              <div className="list__price">{item.price}</div> 
            </div>
        })
    } else {
        result = dataProducts.map((item) => {
            <div key={item.id} className="cards__item">
              <img src={item.img} className="cards__image" /> 
              <div className="cards__name">{item.name}</div> 
              <div className="cards__color">{item.color}</div> 
              <div className="cards__price">{item.price}</div> 
            </div>
          })
    }

    return (
        <div className="button">
            {result}
        </div>
    );

}
