import React,{Component} from 'react';

class Navbar extends Component {
    constructor(){
        super();
    }

    render(){
    
        return(
            <nav>
            <div class="nav-wrapper">
        <a href="#" class="brand-logo">{this.props.appName}</a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
               
              </ul>
            </div>
          </nav>
                
        )
    }
}

export default Navbar;