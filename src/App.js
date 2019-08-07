import React,{Component} from 'react';
import './App.css';
import Counter from './component/Counter';
import Nav from './component/Nav';


class App extends Component {
  state = {
    counters:[
     {id:1 , value:0},
     {id:2 , value:0},
     {id:3 , value:0},
     {id:4 , value:0}
    ]
  }

  handleReset = () =>{
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({counters});
  }

  handleIncrement = (counter)=>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index]= {...counter};
    counters[index].value++;
    this.setState({counters});
  }

  handleDelete = (counterId)=>{
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
}

  render() { 
    return ( 
      <React.Fragment>
      <Nav totalCounters ={this.state.counters.filter(c => c.value>0).length}/>
      <div className="App-header">
        <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
        {
          this.state.counters.map(counter => <Counter 
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}/>)
        }
      </div>
      </React.Fragment>
     );
  }
}
 
export default App;

