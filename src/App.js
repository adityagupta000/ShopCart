// App.js
import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './home'; 
import Cart from "./cart";
import SearchBar from './SearchBar';
import { CartProvider } from "react-use-cart";
import './SearchBar.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    // Implement your search logic here
    console.log(`Searching for: ${query}`);
    // You can add additional logic such as filtering data or making API calls here
    setSearchQuery(query);
  };

  return (
    <>
      <CartProvider>
        <SearchBar onSearch={handleSearch} />
        <Home searchQuery={searchQuery} />
        <Cart />
      </CartProvider>
    </>
  );
}

export default App;
