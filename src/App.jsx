import './App.css';
import { Button } from "./components/Button.jsx";
import { useState } from 'react';
function App() {
  let state = {
    buttonValue: "Переключаем на список",
    products: [
      {
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg",
        id: "product 1"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg",
        id: "product 2"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg",
        id: "product 3"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg",
        id: "product 4"
      }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg",
        id: "product 5"
      }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg",
        id: "product 6"
      }
    ]
  };

  const [stateSwitch, setStateSwitch] = useState(state);

  function chooseView(){
    if(stateSwitch.buttonValue === "Переключаем на список"){
      setStateSwitch({...stateSwitch}, stateSwitch.buttonValue = "Переключаем на карточки");
      console.log(stateSwitch);
    } else {
      setStateSwitch({...stateSwitch}, stateSwitch.buttonValue = "Переключаем на список");
    }
  };

  return (
    <div>
      <button className="switch__btn" onClick={chooseView}>  
        {stateSwitch.buttonValue}
      </button>
    <div>  
      <Button data={stateSwitch}/>;
    </div>
    </div>
  );
}

export default App;
