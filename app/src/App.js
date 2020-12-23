import React from 'react'

import Services from './components/Services';
import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './app.module.css'
import Title from './components/Title';

export default class App extends React.Component {
    state ={
        AppData: {}, 
        country: ''
    }

   async componentDidMount(){
        const rawData = await Services.fetchCovidData();

        this.setState({AppData: rawData});
    }

    handleCountryChange = async (country) => {
       
        const countryData = await Services.fetchCovidData(country);
        console.log(countryData);
        this.setState({AppData: countryData, country: country})
    }

    render() {
        
        const { AppData, country } = this.state;
       // console.log( AppData);
        

        return (
            <div className={styles.container}>
                <Title title="Covid Updates"/>
                <Cards data={AppData}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Charts data={AppData} country={country}/>
            </div>
        );
    }
}