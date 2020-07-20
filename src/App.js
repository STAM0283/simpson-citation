import React from 'react';
import './App.css';
import QuoteCard from "./components/QuoteCard";
import axios from 'axios';

const citationSimpson = {
  quote: "By chilling my loins I increase the chances of impregnating my wife.",
  character: "Apu Nahasapeemapetilon",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  characterDirection: "Left"
};
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      citation : citationSimpson,
    }
    this.getQuote = this.getQuote.bind(this);
  }
  getQuote() {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
        .then(response => response.data)
        .then(data => {
            this.setState({
                citation: data['0'],
            });
        });
}
  render(){  
    return(
      <div className="App">
                <QuoteCard citation={this.state.citation} />
                <button type="button" onClick={this.getQuote} style = {{cursor: "pointer"}}>Afficher une nouvelle citation</button>
            </div>
    
    );
  }
}

export default App;


