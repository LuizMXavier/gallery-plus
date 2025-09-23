import { tv } from "tailwind-variants";
import ImageFilePreview from "../../../components/image-preview";
import type { BlobOptions } from "buffer";

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
    return(
        <div className={photoImageSelectableVariants({className,})}>
            <ImageFilePreview {...props}/>
        </div>
    )
}