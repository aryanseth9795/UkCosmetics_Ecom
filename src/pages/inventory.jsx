import { useState, useCallback , useEffect } from "react";
import debounce from 'lodash/debounce';
import axios from 'axios';
export default function Inventory() {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
  
    // Debounce the fetchSuggestions function
    const debouncedFetchSuggestions = useCallback(
      debounce(async (searchTerm) => {
        try {
          const response = await axios.get(`http://localhost:5000/search?q=${searchTerm}`);
          setSuggestions(response.data);
        } catch (error) {
          console.error("Error fetching suggestions:", error);
        }
      }, 300), []
    );
  
    const handleInputChange = (e) => {
      const searchTerm = e.target.value;
      setQuery(searchTerm);~
  
      if (searchTerm.length > 1) {
        debouncedFetchSuggestions(searchTerm);
      } else {
        setSuggestions([]);
      }
    };
  
    const handleSuggestionClick = (suggestion) => {
      setQuery(suggestion);
      setSuggestions([]);
    };
  
    useEffect(() => {
      // Cleanup debounce function on component unmount
      return () => {
        debouncedFetchSuggestions.cancel();
      };
    }, [debouncedFetchSuggestions]);
  
    useEffect(()=>{
        if(setQuery){
            // make call for product details and store in again a state 
        }
    })
    return (
      <div className="App">
        <h1>Search For a Product</h1>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
        />
        <ul>
          {suggestions.map((item, index) => (
            <li key={index} onClick={() => handleSuggestionClick(item.name)}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    );
}
