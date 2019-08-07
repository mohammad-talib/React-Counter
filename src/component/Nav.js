import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Nav extends Component {
    render() { 
        return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Navbar &nbsp;

                <span className="badge badge-pill badge-secondary">
                    {this.props.totalCounters}
                </span>
                
                </span>

            </nav>
        </div> );
    }
}
 
export default Nav;