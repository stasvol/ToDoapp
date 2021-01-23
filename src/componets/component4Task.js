import React , {Component} from 'react';
import Task from "./component2But";


 class Field extends Component {

     state = {
         tasks: [
             // 'Перший Блок',
             // 'Другий Блок',
             // 'Третій Блок'
         ]
     }

     addFile = (text) => {
         let arr = this.state.tasks
         arr.push(text);
         this.setState({tasks:arr})
     }

     deleteBlock = (i) => {
         let arr = this.state.tasks;
         arr.splice(i,1);
         this.setState({task:arr});
     }

     updateText = (text, i) =>{
         let arr =this.state.tasks;
         arr[i] = text;
         this.setState({tasks:arr})
     }

     render() {
         return (

             <div className={'field'}>
                 <button onClick={this.addFile.bind(null,'Інші завдання')} className={'btn new'}>Нове завдання</button>
                 { this.state.tasks.map( (item,i) =>{
                    return (
                        <Task key = {i} index = {i} updateText = {this.updateText} deleteBlock = {this.deleteBlock}>
                            {item} </Task>
                        );
                     })
                 }
                 {/*<Task>1 - BLOCK</Task>,*/}
                 {/*<Task>2 - BLOCK</Task>,*/}
                 {/*<Task>3 - BLOCK</Task>*/}
             </div>
         )
     }

 }
 export default Field