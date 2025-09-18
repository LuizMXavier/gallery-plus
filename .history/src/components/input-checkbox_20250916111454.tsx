import Icon from "./icon";
import CheckIcon from "../assets/icons/check.svg?react";

export const inputCheckboxWrapperVariants = tv({
    base: `
        inline-flex items-center justify
    `
})

export default function InputCheckbox({...props}) {
    return (
        <label>
            <input type="checkbox" {...props} />
            <Icon svg={CheckIcon}/>
        </label>
    )
}