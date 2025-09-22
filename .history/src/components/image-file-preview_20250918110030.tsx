
export const imageFilePreviewVariants = tv({
    base:`
        rounded-lg overflow-hidden
    `
});

interface ImageFilePreviewProps extends React.ComponentProps<"image"> {
    imageClassName: str
}

export default function ImageFilePreview({
    className,
    ...props
}: ) {
    return (
        <div className={imageFilePreviewVariants({className})}>
            <img className="w-full h-full object-cover" {...props} />

        </div>
    )
}