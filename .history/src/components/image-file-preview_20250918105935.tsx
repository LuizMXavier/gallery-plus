
export const imageFilePreviewVariants = tv({
    base:`
        rounded-lg overflow-hidden
    `
});

interface Ima

export default function ImageFilePreview({
    className,
    ...props
}: React.ComponentProps<"image">) {
    return (
        <div className={imageFilePreviewVariants({className})}>
            <img className="w-full h-full object-cover" {...props} />

        </div>
    )
}