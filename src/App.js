import React from 'react';
import './App.sass';
import Hero from "./Components/Hero";
import Title from "./Components/Title";
import Subtitle from "./Components/Subtitle";
import FormInput from "./Components/FormInput";
import Logo from "./Components/Logo";

function App() {
    return (
        <div className="App">
            <Hero>
                    <Logo/>
                    <Title title="Wilks Calculator (kg)"/>
                    <Subtitle subtitle="Calculate your Wilks"/>
                <FormInput/>
            </Hero>
        </div>
    );
}

export default App;
