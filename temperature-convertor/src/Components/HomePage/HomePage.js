import React from 'react';
import video from '../../Images/pexels-lutz-rolke-6852158 (1080p).mp4';
import './HomePage.css';

const HomePage = () => {

    const solve = (e) => {
        const celciusInput = document.getElementById("celcius");
        const fahrenheitInput = document.getElementById("fahrenheit");
        const kelvinInput = document.getElementById("kelvin");

        let value = e.target.value;

        let name = e.target.name;

        switch (name) {
            case "celcius":
                fahrenheitInput.value = (value * 1.8) + 32;
                kelvinInput.value = value + 273.15;
                break;
            case "fahrenheit":
                celciusInput.value = (value - 32) / 1.8;
                kelvinInput.value = ((value - 32) / 1.8) + 273.15;
                break;
            case "kelvin":
                celciusInput.value = value - 273.15;
                fahrenheitInput.value = ((value - 273.15) * 1.8) + 32;
                break;
            default:
                celciusInput.value = 0;
                fahrenheitInput.value = 0;
                kelvinInput.value = 0;
        }
    };

    return (

        <main>
            <video autoPlay muted loop src={video}></video>

            <header className="header" id="header">
                <h1>TEMPERATURE CONVERTER</h1>
            </header>

            <div className="inputs">
                <input type="number" name="celcius" id="celcius" className="input" placeholder="Celcius" onChange={solve} />
                <input type="number" name="fahrenheit" id="fahrenheit" className="input" placeholder="Fahrenheit" onChange={solve} />
                <input type="number" name="kelvin" id="kelvin" className="input" placeholder="Kelvin" onChange={solve} />
            </div>

        </main>
    );
};

export default HomePage;