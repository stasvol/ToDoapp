import React, {Component}  from "react"

class Block extends Component {

    render() {

        return (
            <div >
                <h2>Hello <b>REACT</b></h2>
                <Game name={'Forza'} age={'18+'}/>
                <Game name={'Combat'} age={'16+'}/>
                <Game name={'Pref'} age={'21+'}/>
            </div>
        )
    }
}
class Game extends Component{
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <h4>{this.props.age}</h4>

            </div>
        )
   }
}


    export default Block;