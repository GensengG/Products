import './App.css';
import { IconSwitch } from "./components/IconSwitch.jsx";
import { Button } from "./components/Button.jsx";
import { useState } from 'react';

function App() {
  let state = "Переключаем на список";
  let btnValue = "Переключаем на список";

  let [stateSwitch, setStateSwitch] = useState(state);

  function chooseView(){
    if(stateSwitch === "Переключаем на список"){
      setStateSwitch(stateSwitch= "Переключаем на карточки");
      btnValue = "Переключаем на карточки";
    } else {
      setStateSwitch(stateSwitch = "Переключаем на список");
      btnValue = "Переключаем на список";
    }
  };

  return (
    <div>
      <button className="btn__svg" onClick={chooseView}>  
        <IconSwitch stateBtn={stateSwitch}/>
      </button> 
      <Button btnTextContent={stateSwitch}/>
    </div>
  );
}

export default App;
