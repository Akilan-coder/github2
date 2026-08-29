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
