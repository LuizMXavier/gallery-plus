
export const imageFilePreviewVariants = tv({
    base:`
        rounded-lg overflow-hidden
    `
});

export default function ImageFilePreview({
    className,
    ...props
}: React.ComponentProps<"image">) {
    return (
        <div className={imageFilePreviewVariants({})}>

        </div>
    )
}