import Alert from "../../../components/alert";
import Button from "../../../components/button";
import {
  DialogContent,
  DialogTrigger,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogClose,
} from "../../../components/dialog";
import ImageFilePreview from "../../../components/image-preview";
import InputSingleFile from "../../../components/input-single-file";
import InputText from "../../../components/input-text";
import type { Album } from "../../albums/models/album";
import Text from "../../../components/text";
import Skeleton from "../../../components/skeleton";
import { useForm } from "react-hook-form";
import useAlbums from "../../albums/hooks/use-albums";
import type { PhotoNewFormSchema } from "../schemas";
import {zodResolver} from "@hookform/resolvers/zod"

interface PhotoNewDialogProps {
  trigger: React.ReactNode;
}

export default function PhotoNewDialog({ trigger }: PhotoNewDialogProps) {
  const form = useForm<PhotoNewFormSchema>();  
  const {albums, isLoadingAlbums} = useAlbums();

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>Adicionar foto</DialogHeader>
        <DialogBody className="flex flex-col gap-5">
          <InputText placeholder="Adicione um título" maxLength={255} />
          <Alert>
            Tamanho máximo: 50MB
            <br />
            Você pode selecionar arquivos em PNG, JPG ou JPEG
          </Alert>
          <InputSingleFile
            form={form}
            maxFileSizeInMB={50}
            allowedExtensions={["png", "jpg", "jpeg"]}
            replaceBy={<ImageFilePreview className="w-full h-56" />}
          />
          <div className="space-y-3">
            <Text variant="label-small">Selecionar álbuns</Text>
            <div className="flex flex-wrap gap-3">
              {!isLoadingAlbums &&
                albums.length > 0 &&
                albums.map((album) => (
                  <Button
                    key={album.id}
                    variant="ghost"
                    size="sm"
                    className="truncate"
                  >
                    {album.title}
                  </Button>
                ))}
            </div>
            {isLoadingAlbums &&
              Array.from({ length: 5 }).map((_, index) => (
                <Skeleton key={`album-loading-${index}`} className="w-20 h-7" />
              ))}
          </div>
        </DialogBody>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancelar</Button>
          </DialogClose>
          <Button>Adicionar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
