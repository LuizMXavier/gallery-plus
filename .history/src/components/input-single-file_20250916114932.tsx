import Icon from "./icon"

export const inputSingleFileVariants = tv({
    base:`
        flex flex-col items-center justify-center w-full
        border border-solid border-border-primary
        group-hover:border-border-active rounded-lg
    `
})

export default function InputSingleFile(){
    return (
        <div>
            <div className="w-full relative group cursor-pointer">
                <input type="file" className={`absolute top-0 w-full h-full opacity-0 cursor-pointer`} />
                <div className={inputSingleFileVariants()}>
                    <Icon svg={UploadFileIcon} className="w"/>

                </div>
            </div>
        </div>
    )
}