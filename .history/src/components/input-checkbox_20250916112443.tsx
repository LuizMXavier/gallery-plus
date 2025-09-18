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
        appearance-none peer flex items-center justify-center
        cursor-pinter transition overflow-hidden
    `,
    variants: {
        variant:{
            default: `
                border-2 border-solid
                border-border-primary hover:border-border-active
                checked:border-accent-brand checked:bg-accent-brand
                group-hover:checked:border-accent-brand-light
                group-hover:checked:bg-accent-brand-light
            `
        },
        size: {
            sm:"w-3 h-3 rounded-sm",
            md:"w-5 h-5 rounded-sm"
        },
        disabled: {
            true: "pointer-events-none"
        }
    },
    defaultVariants: {
        variant: "default",
        size:"md",
        disabled:false
    }
});

export const inputCheckboxIconVariants = tv({
    base: `
        
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