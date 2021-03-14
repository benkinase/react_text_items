import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";
import { SearchBar, Unavailable } from "./components";
import { textItems, textArray } from "./Texts";

export default function App() {
  const [items, setItems] = useState([]);
  const [term, setTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // load items
  useEffect(() => {
    loadData();
  }, [isLoading]);

  // set state to imported text items
  function loadData() {
    setIsLoading(true);
    setItems(textItems);
    setIsLoading(false);
  }

  // generate random text
  const random_text = textArray[Math.floor(Math.random() * textArray.length)];

  // add random text to list
  function addRandomText() {
    const newText = {
      id: uuidv4(),
      title: random_text,
    };
    // set state, adding the new text
    setItems((state) => [newText, ...state]);
  }

  // get search term, and filter text items
  const handleChange = ({ target }) => {
    setTerm(target.value);
    filterData(target.value);
  };

  // filter text items by search term
  function filterData(value) {
    const lowerCased = value.toLowerCase().trim();

    // if no item matches a lowerCased search term,
    // set state to initial state
    if (!lowerCased) setItems(textItems);

    const filteredItems = textItems.filter((item) => {
      return Object.keys(item).some((key) =>
        item[key].toString().toLowerCase().includes(lowerCased)
      );
    });
    // otherwise, set state to filtered data
    setItems(filteredItems);
  }
  return (
    <div className='app'>
      <SearchBar
        term={term}
        handleChange={handleChange}
        addRandomText={addRandomText}
      />
      <div className='items-container'>
        {isLoading ? (
          <Unavailable title='Loading texts...' />
        ) : items.length < 1 ? (
          <Unavailable className='empty' title='No text matches search term!' />
        ) : (
          items.map((item) => (
            <ul key={item.id}>
              <li>{item.title}</li>
            </ul>
          ))
        )}
      </div>
    </div>
  );
}
