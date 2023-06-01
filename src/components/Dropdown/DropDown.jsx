import React, { useState } from 'react'; 
import "./DropDown.scss";
import {IoMdArrowDropdown} from "react-icons/io";
import {BiUserPin} from "react-icons/bi";
 
const Dropdown = ({items }) => { 

  console.log(items)

  const [isOpen, setIsOpen] = useState(false); 
  const [selectedItem, setSelectedItem] = useState(null); 
 
  const handleItemClick = (item) => { 
    setSelectedItem(item.name); 
    setIsOpen(false); 
  }; 
 
  return ( 
 
     
    <div className="dropdown"> 

    <h1>Select the Name from dropdown?</h1>
 
{selectedItem && ( 
        <p className="dropdown__selectedItem"> 
          Selected Name: <span>{selectedItem}</span>
        </p> 
      )} 
      <button 
        className="dropdown__toggle" 
        onMouseEnter={() => setIsOpen(true)} 
 
      > 
     Select
     <IoMdArrowDropdown className='dropdown-icon' />
      </button> 
      {isOpen && ( 
        <ul className="dropdown__menu"> 
          {items.map((item, index) => ( 
            <li 
              key={index} 
              className="dropdown__item" 
              onClick={() => handleItemClick(item)} 
            > 
              <BiUserPin style={{marginRight: 20}} /> {item.name} 
            </li> 
          ))} 
        </ul> 
      )} 
      
    </div> 
  ); 
}; 
 
export default Dropdown;