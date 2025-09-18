import { tv, type VariantProps } from "tailwind-variants";
import Icon from "./icon";
import Text from "./text";

export const inputTextContainerVariants = tv({
    base: "flex flex-col gap-1"
})

export const inputTextWrapperVariants = tv({
    base:`
        border border-solid border-border-primary
        focus:border-border-active bg-transparent
        rounded flex items-center gap-3
    `,
    variants: {
        size: {
            md:"h-10 p-3"
        },
        disabled: {
            true:"pointer-events-none"
        }
    },
    defaultVariants: {
        size:"md",
        disabled: false
    }
});

interface InputTextProps
    extends VariantProps<typeof inputTextWrapperVariants>,
    Omit<React.ComponentProps<"input">,"size" | "disabled"> {
        icon?: React.ComponentProps<typeof Icon>['svg'],
        error?: React.ReactNode;
    }

export default function InputText({
    size,
    disabled,
    className,
    icon,
    error,
}: InputTextProps) {
    return (
        <div className={inputTextContainerVariants(className)}>
            <div className={inputTextContainerVariants({size, disabled})}>
                <{icon && Icon svg={icon}}/>
                <input/>
            </div>
            <Text variant="label-small" className="text-accent-red">
                Um erro no campo
            </Text>
        </div>
    )
}