import axios from 'axios';

const apiUrl = 'https://covid19.mathdro.id/api';

class Services {

    fetchCovidData = async () =>{

        try{
            const { data } = await axios.get(apiUrl);
    
            const updatedData = {
                confirmed: data.confirmed.value,
                deaths: data.deaths.value,
                lastUpdate: data.lastUpdate,
                recovered: data.recovered.value
            }
    
            return updatedData;
            
        } catch (err){
    
    }

    }

    fetchDailyData = async()=>{
        try{
            const { data } = await axios.get(`${apiUrl}/daily` );

            const modifiedData = data.map((dailyData) => ({
                confirmed: dailyData.confirmed.total,
                deaths: dailyData.deaths.total,
                date: dailyData.reportDate
            }));
            return modifiedData;
            
        } catch (err){
            console.log(err);
    } 
    }

    fetchcountries = async () => {
        try{
            const { data:{countries} } = await axios.get(`${apiUrl}/countries` );

            return countries.map((country)=> country.name);
            
        } catch (err){
            console.log(err);
    } 
     }

}

export default new Services();