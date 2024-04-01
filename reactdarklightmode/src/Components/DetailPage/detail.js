import React from 'react'
import numeral from "numeral";
export default function Detail({ countries }) {
    return (
        <div>
              {countries.map((country) => (
                    // <MenuItem value={country.value}>{country.name}</MenuItem>
                    <div className="info-container">
                    <div className="info-flag" style={{ backgroundImage: `url(${country.countryInfo.flag})` }} />
                    <div className="info-confirmed">Cases: {numeral(country.cases).format("0,0")}</div>
                    <div className="info-recovered">Recovered: {numeral(country.recovered).format("0,0")}</div>
                    <div className="info-deaths">Deaths: {numeral(country.deaths).format("0,0")}</div>
                    <div></div>
                </div>

                ))}

          


        </div>
    )
}
