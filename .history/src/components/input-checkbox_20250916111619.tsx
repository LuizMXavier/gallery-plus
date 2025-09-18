import Icon from "./icon";
import CheckIcon from "../assets/icons/check.svg?react";
import { tv } from "tailwind-variants";

export const inputCheckboxWrapperVariants = tv({
    base: `
        inline-flex items-center justify-center relative group
    `
})

export const inputCheckboxVariants = tv({
    base: `
        apa
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