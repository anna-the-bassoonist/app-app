import React, {Component} from "react";

class Counter extends Component {
    constructor (props){
        super(props);
        
        this.state = {
            counter:0
        }
    }
    
    zwiekszLicznik = () => {
        this.setState( {
            counter: this.state.counter +1
        })
    }
    
    zerujLicznik = () => {
        this.setState( {
            counter: this.state.counter = 0
        })
    };
//    metoda render powoduje wyswitlanie czegos na ekranie, gdy np na liczniku cos zmienilismy, odswieza TYLKO komponent ktory sie zmienil
    render() {
        return(
        <div id="counter">
        <h1>Counter</h1>
        <p>Aktualna wartość: {this.state.counter}</p>
        <button onClick={this.zwiekszLicznik}>Zwiększ o 1 :)</button>
        <button onClick={this.zerujLicznik}>Zeruj licznik</button>
        </div>
        );
    }
    
}

export default Counter;