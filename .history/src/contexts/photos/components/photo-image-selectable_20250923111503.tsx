import { tv } from "tailwind-variants";
import ImageFilePreview from "../../../components/image-preview";
import type { BlobOptions } from "buffer";
import React from "react";

export const photoImageSelectableVariants = tv({
    base: "cursor-pointer relative rounded-lg",
    variants: {
        select:{
            true: "outline-2 outline-accent-brand",
        }
    },
});

interface PhotoImageSectableProps extends React.ComponentProps<typeof ImageFilePreview> {
    select?:boolean,
}

export default function PhotoImageselectable({
    className,
    selected,
    ...props
}: PhotoImageSectableProps) {
    const [isSelected, setIsSelected] = React.useState(selected);

    function handleSelect() {
        const newValue = !isSelected;

        setIsSelected(newValue);
        onSelectImage?.(newValue);
    }
    return(
        <label className={photoImageSelectableVariants({className, select: isSelected})}>
            <Input
            <ImageFilePreview {...props}/>
        </label>
    )
}