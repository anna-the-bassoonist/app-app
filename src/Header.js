import React from "react";

//komponent funkcyjne ES5:
//const Header = function(props){
//    return <h1>Licznik klikięć</h1>
//}

//komponent funkcyjny ES6:
const Header = (props) => {
    return <h1>Licznik kliknięć {props.counter} {props.imie} {props.pogoda}</h1>;
}

export default Header;