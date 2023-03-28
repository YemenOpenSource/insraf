"use client";
import { useState, useId } from "react";
import Select from "react-select";

export default function SearchBox() {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
    { value: "strawberry", label: "Strawberry" },
  ];

  const handleInputChange = (inputValue) => {
    setInputValue(inputValue);
    setSearchResults(
      options.filter((option) =>
        option.label.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  };

  const handleSelectChange = (selectedOption) => {
    // console.log(selectedOption);
    // handle selecting the option
  };

  return (
    <div>
      <div>
        <Select
          instanceId={useId()}
          inputValue={inputValue}
          onInputChange={handleInputChange}
          onChange={handleSelectChange}
          options={searchResults}
          placeholder="Search"
        />
      </div>
    </div>
  );
}
