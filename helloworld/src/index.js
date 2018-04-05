/*First component in React JS */

import React from 'react';
import ReactDom from 'react-dom'

class HelloWorld extends React.Component{
    render(){
        return (
            <h1>Hello Himanshu</h1>
        )
    }
}
ReactDom.render(<HelloWorld />, document.getElementById('root'))

/* End First component in React JS */

/* Two different component call in one component */

class Himanshu extends React.Component{
    render(){
        return (
            <h1>Hello Himanshu</h1>
        )
    }
}
/*------------------------------------second component -------------- */

class Joshi extends React.Component{
    render(){
        return(
            <h2>Hello Joshi</h2>
        )
    }
}

/*---------------- Call first and second componnet ---------- */

class HimanshuJoshi extends React.Component{
    render(){
        return(
            <div>
                <Himanshu />
                <Joshi />
            </div>
        )
    }
}
ReactDom.render(<HimanshuJoshi />, document.getElementById('root'));

/* ------------------------- constructor ---------- -- */

class ReactConstructor extends React.Component{
    constructor(){
        super();  //calling super method bcz this method can extend react component
        this.name = "himansu" 
    }
    render(){
        return(
            <section>
                 {this.name}  
            </section>
        )
    }
}

/* ------------------------- End constructor ---------- -- */

ReactDom.render(<ReactConstructor />, document.getElementById('root-Constructor'))

/*-----------------------Props and state----------*/

class StateProp extends React.Component{
    constructor(){
        super();
        this.state= {
            names:["hem","jos","yes", "veer"]
        };
    }
    render(){
        let {name} = this.state; 
        return(
            <ul>{
                this.state.names.map(function(name){
                return <Card name={name} />
              })
            }
            </ul>
        )
    }
}
class Card extends React.Component {
    render(){
      return (
          <li>{this.props.name}</li>
      )
    }
  }
ReactDom.render(<StateProp />, document.getElementById('state-pro'))