import React,{Component}  from "react";

class Array extends Component {
    render() {

        const persons = ['Andre','David','Alla'];
        const listItem = persons.map(person => <li key={person}>{person}</li>);
        return <div>
             <ul>{listItem}</ul>
             <Greed greting={'Hello'}/>

             </div>

    }
}
class Greed extends Component {
    render() {
        return <h3>{this.props.greting} World!</h3>

    }
}
export default Array
