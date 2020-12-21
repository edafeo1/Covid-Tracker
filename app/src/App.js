import React from 'react'

import Services from './components/Services';
import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';
import CountryPicker from './components/CountryPicker/CountryPicker';

export default class App extends React.Component {
    state ={
        AppData: {}, 
    }

   async componentDidMount(){
        const rawData = await Services.fetchCovidData();

        this.setState({AppData: rawData});
    }
    render() {
        
        const { AppData } = this.state;
        console.log( AppData);
        

        return (
            <div>
                <Cards data={AppData}/>
                <CountryPicker/>
                <Charts/>
            </div>
        );
    }
}