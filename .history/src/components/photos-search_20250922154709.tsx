import InputText from "./input-text";
import SearchIcon from "../assets/icons/search.svg?react";
import React from "react";

export default function PhotosSearch() {
    const [inputValue, setInputValue] = React.useState("");

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        
    }
  return (
    <div className="relative flex-grow">
      <InputText icon={SearchIcon} placeholder="Buscar foto" />
    </div>
  );
}
