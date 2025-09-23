import { tv } from "tailwind-variants";
import type ImageFilePreview from "../../../components/image-preview";

export const photoImageSelectableVariants = tv({
    base: "cursor-pointer relative rounded-lg",
    variants: {
        select:{
            true: "outline-2 outline-accent-brand",
        }
    },
});

interface PhotoImageSectableProps extends React.ComponentProps<typeof ImageFilePreview>