import "../App.jsx";

export const Button = (stateSwitch) => {
    let products = [
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

    let {btnTextContent} = stateSwitch;

    let result = [];

    if(btnTextContent === "Переключаем на карточки"){
        result = products.map(item => (
          <div className="list__item">
            <img src={item.img} className="list__image" /> 
            <h2 className="list__name">{item.name}</h2> 
            <div className="list__color">{item.color}</div> 
            <div className="list__price">${item.price}</div> 
            <button className="list__btn">{"ADD TO CART"}</button>
          </div>
        ))
    } else {
        result = products.map(item => (
          <div className="cards__item">
            <h2 className="cards__name">{item.name}</h2> 
            <div className="cards__color">{item.color}</div> 
            <img src={item.img} className="cards__image" /> 
            <div className="cards__price">${item.price}</div> 
            <button className="cards__btn">{"ADD TO CART"}</button>
          </div>
        ))
    }

    return (
      <div className="container">
        {result}
      </div>
    );
}
