import React, {Component} from 'react';
import './modal2.css';

class Modal2 extends Component {

    constructor(props){
        super(props);        
        this.onClose = this.onClose.bind(this);
    }

    /*
    onClose(e){
        this.props.show = false;
    }
    */
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
      };



    
    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div  class="modal" id="modal">
                <h2>Modal window</h2>
                <div class="content">
                {this.props.children}
                </div>
                <div class="actions">
                    <button  
                        onClick={e => {this.onClose(e);}}
                        class="toggle-button"
                    > 
                        Close
                    </button>
                </div>                            
            </div>
        )
    }

}

export default Modal2;