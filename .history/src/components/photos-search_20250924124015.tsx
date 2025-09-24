import InputText from "./input-text";
import SearchIcon from "../assets/icons/search.svg?react";
import React from "react";
import { debounce } from "../helpers/utils";
import usePhotos from "../contexts/photos/hooks/use-photos";

export default function PhotosSearch() {
    const [inputValue, setInputValue] = React.useState("");
    const {filters} = usePhotos();

    const debouncedSetValue = React.useCallback(
        debounce((value: string) => {
            filters.setQ(value)
        },200),[]
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
