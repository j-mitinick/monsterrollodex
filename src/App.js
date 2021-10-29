import {Component} from 'react';
import './App.css';
import { CardList } from './Component/card-list/card-list.component';
import {SearchField} from './Component/search/search.component';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters:[],
      searchField:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=>this.setState({monsters:users}));
  }

  handleChange = (e)=>{
    this.setState({searchField:e.target.value})
  }

  render(){
    const filteredMonsters = this.state.monsters.filter(monster=>monster.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
    return (
      <div className="app">
        <h1>Monster Rollodex</h1>
        <SearchField placeholder="Buscar por um monstro" handleChange={this.handleChange}  />
        <CardList monsters={filteredMonsters}/>

      </div>
    );
  }
}

export default App;
