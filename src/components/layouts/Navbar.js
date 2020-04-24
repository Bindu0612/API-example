import React,{Component} from 'react';

class Navbar extends Component {
    constructor(){
        super();
    }

    render(){
    
        return(
            <nav>
            <div className="nav-wrapper">
        <a href="#" className="brand-logo">{this.props.appName}</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
               
              </ul>
            </div>
          </nav>
                
        )
    }
}

export default Navbar;