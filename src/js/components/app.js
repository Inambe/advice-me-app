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
            <div className="advice-app">
                <h1 className="advice-app--title">Advice Me🎉</h1>
                <div className="advice-app--wrapper">
                {this.state.advice ? (
                    <p
                        style={{fontSize: this.state.advice.length > 50 ? "1.6rem" : null }}
                        className="advice-app--advice">
                    {this.state.advice}
                    </p>
                ) : (
                    <div className="advice-app--loader">Loading ...</div>
                )}
                </div>
                <Footer />
            </div>
        );
    }
};

export default App;