import  React,{Component, createRef} from 'react';
import '../index.css';

class Task extends Component {

    state = {
        edit: false
    }


    newText = createRef();

     editFile = () =>{
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
  return(
      this.state.edit ? this.rendEdit(): this.rendNorm()
  )

}

}


export  default Task;

// state = {
//     edit: false
// }
// newText = createRef();
//
// editFile = () =>{
//     this.setState({
//         edit: true
//     })
// }
//
//
// deleteFile = () => {
//     // alert('Кнопка Delete')
//     this.props.deleteBlock(this.props.index);
// }
//
// rendNorm = () => {
//     return (
//         <div >
//
//             <button onClick={this.editFile} >Редагувати</button>
//             <button onClick={this.deleteFile} >X</button>
//
//         </div>
//     )
// }
// rendEdit = () => {
//     return (
//         <div >
//
//             <input   placeholder={"завдання"}/>
//             <button onClick={this.saveFile}>Зберегти</button>
//
//         </div>
//     )
// }
//
// render() {
//     // if (this.state.edit){
//     //     return this.rendEdit()
//     // }else {
//     //     return this.rendNorm()
//     // }
//     return(
//         this.state.edit ? this.rendEdit(): this.rendNorm()
//     )
//
// }
//
//
//
// }