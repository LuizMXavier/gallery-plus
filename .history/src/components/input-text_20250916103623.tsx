import { tv } from "tailwind-variants";

export const inputTextContainerVariants = tv({
    base: "flex flex-col gap-1"
})

export const inputTextWrapperVariants = tv({
    base:`
        border border-solid border-border-primary
        focus:border-border-active bg-transparent
        rounded flex items-center gap-3
    `
})

export default function InputText({})