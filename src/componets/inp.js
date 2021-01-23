import React, { Component,createRef } from 'react';
import Task from "./component2But";

class Tasks extends Component {

    state = {
        edit: false
    }


    newText = createRef();

    editFile = () => {
        this.setState({
            edit: true
        })
    }
    saveFile = () => {

        let value = this.newText.current.value
        // let value = this.refs.newText.value;
        // alert(value)
        this.props.updateText(this.newText.current.value, this.props.index);
        console.log(value)
        this.setState({

            edit: false
        })
    }

    deleteFile = () => {
        // alert('Кнопка Delete')
        this.props.deleteBlock(this.props.index);
    }

    rendNorm = () => {
        return (
            <div className={'block'}>
                <div className={'text'}><h3>{this.props.children}</h3></div>
                <button onClick={this.editFile} className={'btn light'}>Редагувати</button>
                <button onClick={this.deleteFile} className={'btn red'}>Видалити</button>

            </div>
        )
    }
    rendEdit = () => {
        return (
            <div className={'block'}>

                <textarea ref={this.newText} className={'textarea'} placeholder={"завдання"}> </textarea>
                <button onClick={this.saveFile} className={'btn primary'}>Зберегти</button>

            </div>
        )
    }

    render() {
        // if (this.state.edit){
        //     return this.rendEdit()
        // }else {
        //     return this.rendNorm()
        // }
        return (
            this.state.edit ? this.rendEdit() : this.rendNorm()
        )

    }

    // class Fields extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [
                // 'Перший Блок',
                // 'Другий Блок',
                // 'Третій Блок'
            ]
        }
    }


    addFile = (text) => {
        let arr = this.state.tasks
        arr.push(text);
        this.setState({tasks: arr})
    }

    deleteBlock = (i) => {
        let arr = this.state.tasks;
        arr.splice(i, 1);
        this.setState({task: arr});
    }

    updateText = (text, i) => {
        let arr = this.state.tasks;
        arr[i] = text;
        this.setState({tasks: arr})
    }

    render() {
        return (

            <div className={'field'}>
                <button onClick={this.addFile.bind(null, 'Інші завдання')} className={'btn new'}>Нове завдання</button>
                {this.state.tasks.map((item, i) => {
                    return (
                        <Task key={i} index={i} updateText={this.updateText} deleteBlock={this.deleteBlock}>
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



export  default Tasks;








// import React, { Component } from 'react';
//
//
// class Form extends Component {
//
//
//   state={
//       input : ''
//      }
//       addTask = () => {
//       const { input } = this.state;
//       if( input) {
//            this.addTask(input);
//           this.setState({input:''});
//       }
//      }
//
//     inputChange = event => {
//       this.setState({input: event.target.value})
//     }
//   //   onSearchChange = this.onSearchChange.bind(this);
//     render() {
//         const { input } = this.state
//         return (
//
//             <div>
//                 <h2>Запишіть завдання</h2>
//             <form onSubmit={event => event.preventDefault()}>
//                 <label>
//                 <input  onChange={this.inputChange}
//                     type='text'
//                        placeholder='введіть текст'
//                         value = {input}
//                 />
//                 </label>
//             </form>
//              <button onClick={this.addTask()} >Додати завдання</button>
//             </div>
//
//         )
//     }
//
// }
//
//
// export default Form;