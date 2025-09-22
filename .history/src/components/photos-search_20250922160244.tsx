import InputText from "./input-text";
import SearchIcon from "../assets/icons/search.svg?react";
import React from "react";

export default function PhotosSearch() {
    const [inputValue, setInputValue] = React.useState("");

    const debouncedSetValue = React.useCallback(
        debounce((value: string) => {
            console.log("Valor com debounce")
        })
    )

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;

        console.log(value);
        setInputValue(value);
    }
  return (
    <div className="relative flex-grow">
      <InputText icon={SearchIcon} placeholder="Buscar foto" value={inputValue} onChange={handleInputChange} />
    </div>
  );
}
