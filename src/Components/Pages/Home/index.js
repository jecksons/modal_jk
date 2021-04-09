import React, {Component} from 'react';
import Modal2 from '../../Controls/Modal2';


class Home extends Component{

    constructor(props) {
        super(props);
        this.showModal = this.showModal.bind(this);
        this.state = {show: false};
        /*
        this.state = {showModal: false};
        this.mostraModal = this.mostraModal.bind(this);
        this.escondeModal = this.escondeModal.bind(this);
        */
    }

    showModal(){
        this.setState({show: !this.state.show});
    }

    /*
    mostraModal(){
        this.setState({showModal: true});
    }

    escondeModal(){
        this.setState({showModal: false});

    }
    

    render() {
        const modal = this.state.showModal ? (
            <Modal>
                <div>
                   Olá eu sou um modal 
                </div>
                <button onClick={this.escondeModal}>Hide</button>
            </Modal>
        ) : null;

        return (
            <div>
                <h1>Home</h1> <br/>
                <button onClick={this.mostraModal}>Show Modal</button>
                {modal}
            </div>
        );
    }
    */

    render() {
    
        return (
            <div>
                <h1>Home</h1> <br/>
                <button  className="toggle-button" onClick={this.showModal}>Show Modal</button>                
                <Modal2 show={this.state.show} onClose={this.showModal} > Mensagem </Modal2>
            </div>
        );
    }


}

export default Home;