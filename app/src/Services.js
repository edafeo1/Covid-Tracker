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

}

export default new Services();