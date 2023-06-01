import React, {useState, useEffect} from 'react'; 
import Dropdown from './components/Dropdown/DropDown'; 
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss"; 
import axios from "axios";
 
const App = () => { 
  
  const [dropdownItems, setDropdownItems] = useState([]);

  useEffect(() => {

    const getDropDownItems = async () => {
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
      setDropdownItems(data);
      
    }

    getDropDownItems();
  }, [])
 
  return ( 
    <div className="app-container"> 
      <Header />
      <Dropdown items={dropdownItems} />
      <Footer /> 
    </div> 
  ); 
}; 
 
export default App;