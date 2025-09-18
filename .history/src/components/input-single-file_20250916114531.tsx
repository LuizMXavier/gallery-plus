
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
            <div className="w-full relative group curs">

            </div>
        </div>
    )
}