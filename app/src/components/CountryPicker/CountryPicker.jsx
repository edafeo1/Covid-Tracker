import React, { useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import Services from '../Services';

const CountryPicker = () =>{

const [fetchedCountries, setFetchedCountries] = useState([]);

useEffect(()=>{
    const fetchApi = async () => {
        setFetchedCountries(await Services.fetchcountries());
    }
    fetchApi();
}, [setFetchedCountries]);

console.log(fetchedCountries);



    return(
       <FormControl>
           <NativeSelect>
               <option value="global"> Global </option>
               {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
           </NativeSelect>
       </FormControl>
    )

}

export default CountryPicker;