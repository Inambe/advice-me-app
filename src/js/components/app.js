import React from 'react';
import axios from "axios";
import Footer from './footer';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            advice: null
        }
    }
    componentDidMount(){
        axios.get("https://api.adviceslip.com/advice")
        .then((res) => {
            this.setState({
                advice: res.data.slip.advice.replace(".", "")
            });
        }).catch((e) => {
            console.log(e);
        });
    }
    render() {
        return (
            <React.Fragment>
                <div className="mb-1 mt-5">
                {this.state.advice ? (
                    <p className="advice">{this.state.advice}</p>
                ) : (
                    <div className="advice-app--loader">Loading ...</div>
                )}
                </div>
                <Footer />
            </React.Fragment>
        );
    }
};

export default App;