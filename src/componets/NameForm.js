import React, {Component, createRef} from 'react';

class NameForm extends Component {
    state = {
        value: '',
        array: [
            {
            checked: true,
            value: 'need to byu milk!!!!!!',
        },
            {
                checked: false,
                value: 'need to byu for father!!!!!!',
            }
        ],
    };

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.value) {
            const arr = this.state.array;
            const obj = {
                value: this.state.value,
                checked: false
            };

            arr.push(obj);

            this.setState({
                value: '',
                array: arr,
            });

            // this.setState({
            //     array: [
            //         ...arr,
            //         { value: '', array: arr },
            //     ],
            //     value: '',
            // });
        }
    }

    deleteItem = i => {
        const arr = this.state.array;
        arr.splice(i, 1);
        this.setState({array: arr});
    };

    saveText = (value, i) => {
        const arr = this.state.array;
        arr[i].value = value;

        this.setState({array: arr});

        // this.setState((prevState) => {
        //
        //     return {
        //         bool: !prevState.bool
        //     };
        // });

    };
    handleCheck = (i) =>{
        const arr = this.state.array;
        arr[i].checked = !arr[i].checked;

        this.setState({
             array: arr
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input  type="submit" value="Отправить"/>
                </form>

                {/*<b>{this.state.value}</b>*/}

                <ul>
                    {this.state.array.map((obj, i ) => {

                        // const id = `${value}_${++i}`;

                        return (
                            <li key={i} >
                                <ListItemElement value={obj.value} checked={obj.checked} i={i} saveText={this.saveText}
                                                 deleteItem={this.deleteItem} handleCheck={this.handleCheck}/>
                            </li>

                        )
                    })
                    }

                </ul>
                <div className={'btn_block'}>
                    <span  className={'count_sp'}>{this.state.array.length}tasks</span>
                    <button id={'all'}>All</button>
                    <button id={'active'}>Active</button>
                    <button id={'completed'}>Completed</button>
                </div>

            </div>
        )
    }
}

class ListItemElement extends Component {

    newText = createRef();

    state = {
        handleEdit: false
    };

    // handleCheck = () =>{
    //
    //     this.setState({
    //         checked: !this.state.checked
    //     })
    //
    // }

    handleEdit = () => {
        this.setState({
            handleEdit: true,
        });
    }

    handleSave = (i) => {
        const value = this.newText.current.value;
        this.props.saveText(value, i);

        this.setState({
            handleEdit: false,
            checked: false,
        });
    }

    rendNorm = () => {
        return (
            <div>
                <span style={ this.props.checked ? { textDecoration: 'line-through'} : {textDecoration : 'none'} } className={'checkbox'}>
                    <input onClick={() => this.props.handleCheck(this.props.i)} defaultChecked={this.props.checked} type={'checkbox'} />
                    {this.props.value}</span>
                <button className={'edit'} onClick={this.handleEdit}>
                    edit
                </button>
                <button onClick={() => this.props.deleteItem(this.props.i)}>x</button>

            </div>
        );
    }

    rendEdit = () => {
        return (
            <div>
                <textarea  id={'obj'} ref={this.newText} defaultValue={this.props.value} placeholder={'text'}/>
                <button onClick={() => this.handleSave(this.props.i)}>save</button>
            </div>
        );
    }

    render() {
        return this.state.handleEdit ? this.rendEdit() : this.rendNorm();
    }
}


export default NameForm;

// {
//     id: 'all',
//         text: 'All',
// },
// {
//     id: 'active',
//         text: 'Active',
// },
// {
//     id: 'completed',
//         text: 'Completed',
// },