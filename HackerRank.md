import React, { useState } from "react";
import './App.css';
import AppHeader from "./components/AppHeader";
import Dropdown from "./components/dropdown";

const title = "Employee Information";

function App({ countryOptions, languageOptions }) {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  return (
    <div>
      <AppHeader title={title} />
      <div className="layout-row align-items-centre justify-content-center mt-50">
        <section className="layout-column">
          
          <div data-testid="country-options">
            <Dropdown 
              options={countryOptions} 
              labelText="Select Country" 
              onChange={(e) => setSelectedCountry(e.target.value)} 
            />
          </div>
          
          <div data-testid="language-options">
            <Dropdown 
              options={languageOptions} 
              labelText="Select Language" 
              onChange={(e) => setSelectedLanguage(e.target.value)} 
            />
          </div>
          
          <label className="mt-50 text-align-center">
            Final Selections:
          </label>
          
          <label className="mt-10 finalText" data-testid="country-selected">
            Country Selected: {selectedCountry}
          </label>
          
          <label className="mt-10 finalText" data-testid="language-selected">
            Language Selected: {selectedLanguage}
          </label>
          
        </section>
      </div>
    </div>
  );
}

export default App;
