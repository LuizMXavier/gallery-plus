import InputText from "./input-text";
import SearchIcon from "../assets/icons/search.svg?react";

export default function PhotosSearch() {
    const [inputValue, set]
  return (
    <div className="relative flex-grow">
      <InputText icon={SearchIcon} placeholder="Buscar foto" />
    </div>
  );
}
