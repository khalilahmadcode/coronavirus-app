import React from 'react'
import style from './App.module.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import coronaImage from './images/CoronaVirusHeader.jpg'

import {Cards, Chart, CountryPicker} from './components'
import { fetchData } from './api'

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount () {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  // handle country change 
  handleChnageCountry = async (country) => {
    const fetchedData  = await fetchData(country); 
    this.setState({country: country, data: fetchedData});
  }

  render() {
    return (
      <div>
        <img alt="coronaimage" src={coronaImage} className={style.coronaImage}/>
        <CountryPicker handleChnageCountry={this.handleChnageCountry} />
        <Cards data={this.state.data}/>
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    )
  }
  
}

export default App
