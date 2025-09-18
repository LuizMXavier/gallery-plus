import Icon from "./icon";
import Text from "./text";
import { tv, type VariantProps } from "tailwind-variants";
import UploadFileIcon from "../assets/icons/upload-file.svg?react";

export const inputSingleFileVariants = tv({
    base:`
        flex flex-col items-center justify-center w-full
        border border-solid border-border-primary
        group-hover:border-border-active rounded-lg
    `,
    variants: {
        size: {
            md:"px-5 py-6"
        }
    },
    defaultVariants: {
        size:"md"
    }
})

interface InputSingleFileProps extends VariantProps<typeof inputSingleFileVariants>,
    React.ComponentProps<"input">{}

export default function InputSingleFile(){
    return (
        <div className={inp}>
            <div className="w-full relative group cursor-pointer">
                <input type="file" className={`absolute top-0 w-full h-full opacity-0 cursor-pointer`} />
                <div className={inputSingleFileVariants()}>
                    <Icon svg={UploadFileIcon} className="w-8 h-8 fill-placeholder"/>
                    <Text variant="label-medium" className="text-placeholder">
                        Arraste o arquivo arqui
                        <br/>
                        ou clique para selecionar
                    </Text>   
                </div>
            </div>
        </div>
    )
}