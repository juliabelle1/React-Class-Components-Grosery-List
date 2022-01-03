import { Component } from 'react'

export default class GroceryList extends Component {
    state = {
        inputUser:'',
        groceryList: []
    }

    onChangeEvent(e) {
        this.setState({inputUser: e})
    }


        addItem(input){
            let listArray = this.state.groceryList;
            if(this.state.inputUser.trim() !== ''){
                listArray.push(input);
                this.setState({groceryList: listArray, inputUser: ''})
            }
        }

        crossWord(e){
            const li = e.target;
            li.classList.toggle('crossed');
        }

        deleteItem(listArray){
            listArray = [];
            this.setState({groceryList: listArray})
        }

        onFormSubmit(e){
            e.preventDefault()
        }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <input type='text' 
                        placeholder='What do you want to buy'
                        onChange={(e) => {this.onChangeEvent(e.target.value)}}
                        value={this.state.inputUser} />
                    </div>
                    <div>
                        <button className='btn btn-add' onClick={() => this.addItem(this.state.inputUser)}>Add</button>
                    </div>
                    <div>
                        <ul>
                            {this.state.groceryList.map((item, index) => (
                                <li onClick={this.crossWord} key={index}>{ item }</li>
                            ))}
                        </ul>
                    </div>
                    <button className='btn btn-delete' onClick={() => this.deleteItem()}>Delete</button>
                </form>
            </div>
        )
    }
}
