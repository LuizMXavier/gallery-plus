import { tv } from "tailwind-variants";

export const imageFilePreviewVariants = tv({
    base:`
        rounded-lg overflow-hidden
    `
});

interface ImageFilePreviewProps extends React.ComponentProps<"image"> {
    imageClassName?: string;
}

export default function ImageFilePreview({
    className,
    ...props
}: ImageFilePreviewProps) {
    return (
        <div className={imageFilePreviewVariants({className})}>
            <img className={...props} />

        </div>
    )
}