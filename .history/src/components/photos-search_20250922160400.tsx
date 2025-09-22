import InputText from "./input-text";
import SearchIcon from "../assets/icons/search.svg?react";
import React from "react";
import { debounce } from "../helpers/utils";

export default function PhotosSearch() {
    const [inputValue, setInputValue] = React.useState("");

    const debouncedSetValue = React.useCallback(
        debounce((value: string) => {
            console.log("Valor com debounce", value);
        },1000),[]
    )

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;

        
        setInputValue(value);
        debouncedSetValue(value);
    }
  return (
    <div className="relative flex-grow">
      <InputText icon={SearchIcon} placeholder="Buscar foto" value={inputValue} onChange={handleInputChange} />
    </div>
  );
}
