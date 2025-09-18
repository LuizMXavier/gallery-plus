import Icon from "./icon";
import CheckIcon from "../assets/icons/check.svg?react";

export const inputCheckboxWrapperVariants = tv

export default function InputCheckbox({...props}) {
    return (
        <label>
            <input type="checkbox" {...props} />
            <Icon svg={CheckIcon}/>
        </label>
    )
}