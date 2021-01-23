import React,{Component, createRef} from 'react';

class InputTodo extends Component {
   constructor(props) {
       super(props);
       this.state ={
           handleEdit: false
       }
}

  handleEdit = () =>{
      this.setState({
          handleEdit: true
      })
    }
    handleSave = () => {
        this.setState({
            handleEdit: false
        })
    }

    handleRemove = () =>{
        alert('Delete')
    }
   rendNorm = () =>{
       return(
           <div>
               <input type={'text'} placeholder={'text'}/>
               <button>show</button>
               <button onClick={this.handleEdit}>edit</button>
           </div>
       );
   }
    rendEdit = () =>{
        return(
            <div>
                <textarea  placeholder={'text'}/>
                <button onClick={this.handleSave}>save</button>
            </div>
        );
    }


 render() {
  if(this.state.handleEdit){
     return this.rendEdit();
  }else{
      return this.rendNorm();
  }
 }
}
export default InputTodo;