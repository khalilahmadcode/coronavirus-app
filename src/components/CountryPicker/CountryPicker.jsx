import React, {useEffect, useState} from 'react'
import { fetchCountries } from '../../api'; 

const CountryPicker = ({handleChnageCountry}) => {
    const [country, setCountry] = useState([])
    useEffect(() => {
        const fetchAPI = async () => {
            setCountry(await fetchCountries());
        }
    
        fetchAPI();
    }, [setCountry])

    return (
        <div className="container mt-4 mb-5">
            <div className="form-group">
                <select className="form-control" defaultValue="" onChange={(e) => handleChnageCountry(e.target.value)}>
                    <option value="">Global</option>
                    {country.map((country)=>{
                        return (
                        <option value={country} key={country}>{country}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default CountryPicker
