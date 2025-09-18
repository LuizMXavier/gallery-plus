import Icon from "./icon";
import Text, { textVariants } from "./text";
import { tv, type VariantProps } from "tailwind-variants";
import UploadFileIcon from "../assets/icons/upload-file.svg?react";
import FileImageIcon from "../assets/icons/image.svg?react";

export const inputSingleFileVariants = tv({
  base: `
        flex flex-col items-center justify-center w-full
        border border-solid border-border-primary
        group-hover:border-border-active rounded-lg
        gap-1 transition
    `,
  variants: {
    size: {
      md: "px-5 py-6",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const inputSingleFileIconVariants = tv({
  base: "fill-placeholder",
  variants: {
    size: {
      md: "w-8 h-8",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface InputSingleFileProps
  extends VariantProps<typeof inputSingleFileVariants>,
    React.ComponentProps<"input"> {
  error?: React.ReactNode;
}

export default function InputSingleFile({ size, error }: InputSingleFileProps) {
  return (
    <div className={inputSingleFileVariants({ size })}>
      <div className="w-full relative group cursor-pointer">
        <input
          type="file"
          className={`absolute top-0 w-full h-full opacity-0 cursor-pointer`}
        />
        <div className={inputSingleFileVariants()}>
          <Icon
            svg={UploadFileIcon}
            className={inputSingleFileIconVariants({ size })}
          />
          <Text variant="label-medium" className="text-placeholder text-center">
            Arraste o arquivo arqui
            <br />
            ou clique para selecionar
          </Text>
        </div>
        {error && (
          <Text variant="label-small" className="text-accent-red">
            Erro no campo
          </Text>
        )}
        <div className="flex gap-3 items-center">
            <Icon svg={FileImageIcon} className="fill-white w-6 h-6"/>
            <div className="flex flex-col">
                <Text variant="label-medium" className="text-placeholder">
                    Nome do arquivo.png
                </Text>
            </div>
            <div>
                <button
                    type="submit"
                    className={textVariants({
                        variant:"label-small",
                        className:"text-ac"
                    })}
                />
            </div>

        </div>
      </div>
    </div>
  );
}
