import { tv } from "tailwind-variants";

export const imageFilePreviewVariants = tv({
    base:`
        rounded-lg overflow-hidden
    `
});

export const imageFilePreviewImageVariants = tv ({
    base: 
})

interface ImageFilePreviewProps extends React.ComponentProps<"image"> {
    imageClassName?: string;
}

export default function ImageFilePreview({
    className,
    imageClassName,
    ...props
}: ImageFilePreviewProps) {
    return (
        <div className={imageFilePreviewVariants({className})}>
            <img {...props} />

        </div>
    )
}