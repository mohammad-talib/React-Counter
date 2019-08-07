import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';



class Conuter extends Component {
    // state = {
    //     value : this.props.counter.value,
    //     // tags : ["tag1","tag2","tag3"]
    // };

    formatCount=()=>{
        let {value: count} = this.props.counter;
        return count===0 ? "zero":count;
        // let con = this.state.count===0 ? "zero":this.state.count;
    }

    // handleIncrement = () =>{
    //     this.setState({
    //         value : this.state.value+1
    //     })
    // }

    render() { 
        let classes = "badge m-2 badge-";
        classes+= this.props.counter.value === 0 ? "warning" : "primary";

        return ( 
            <div>
                <span className={classes}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary">Increment</button>
                {/* <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul> */}
                <button className="btn btn-danger m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>
         );
    }


}
 
export default Conuter;