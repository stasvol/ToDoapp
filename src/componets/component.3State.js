import React , {Component} from "react"

class Check extends Component {

     state = {
         checked: true
     }
     handleCheck = () => {
         this.setState({
             checked: !this.state.checked
         });
     }

    render() {
         let message;
         // if (this.state.checked){
         //     message = "вибранно";
         // }else {
         //     message = "не вибранно";
         // }
        this.state.checked ? message="вибрано":message = "не вибрано " ;

       return (
           <div>
               <input onClick={this.handleCheck} type={'checkbox'} defaultChecked={this.state.checked}/>
               <p>Чекбокс {message}</p>
           </div>

       )

    }


}


  export default Check
