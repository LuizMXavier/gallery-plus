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
import { photoNewFormSchema, type PhotoNewFormSchema } from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import ImagePreview from "../../../components/image-preview";
import usePhoto from "../hooks/use-photo";

interface PhotoNewDialogProps {
  trigger: React.ReactNode;
}

export default function PhotoNewDialog({ trigger }: PhotoNewDialogProps) {
  
  const [modalOpen, setModalOpen] = React.useState(false)
  const form = useForm<PhotoNewFormSchema>({
    resolver: zodResolver(photoNewFormSchema),
  });
  const { albums, isLoadingAlbums } = useAlbums();
  const {createPhoto} = usePhoto();
  const [isCreatingPhoto, setIsCreatingPhoto] = React.useTransition() 
  const file = form.watch("file");
  const fileSource = file?.[0] ? URL.createObjectURL(file[0]): undefined;

  const albumsIds = form.watch("albumsIds");

  React.useEffect(() => {
    if(!modalOpen) {
      form.reset();
    }
  },[modalOpen, form])

  function handleToggerAlbum(albumId: string) {
    const albumIds = form.getValues("albumsIds") || [];
    const albumsSet = new Set(albumIds);

    if(albumsSet.has(albumId)) {
      albumsSet.delete(albumId)
    } else {
      albumsSet.add(albumId)
    }

    form.setValue("albumsIds", Array.from(albumsSet))
  }

  function handleSubmit(payload: PhotoNewFormSchema) {
    setIsCreatingPhoto()
  }
  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <DialogHeader>Adicionar foto</DialogHeader>
          <DialogBody className="flex flex-col gap-5">
            <InputText placeholder="Adicione um título"
              maxLength={255}
              error={form.formState.errors.title?.message}
              {...form.register("title")}
            />
            <Alert>
              Tamanho máximo: 50MB
              <br />
              Você pode selecionar arquivos em PNG, JPG ou JPEG
            </Alert>
            <InputSingleFile
              form={form}
              allowedExtensions={["png", "jpg", "jpeg"]}
              maxFileSizeInMB={50}
              replaceBy={<ImagePreview src={fileSource} className="w-full h-56" />}
              error={form.formState.errors.file?.message}
              {...form.register("file")}
            />
            
            <div className="space-y-3">
              <Text variant="label-small">Selecionar álbuns</Text>
              <div className="flex flex-wrap gap-3">
                {!isLoadingAlbums &&
                  albums.length > 0 &&
                  albums.map((album) => (
                    <Button
                      key={album.id}
                      variant={albumsIds?.includes(album.id) ? "primary" : "ghost"}
                      size="sm"
                      className="truncate"
                      onClick={() => handleToggerAlbum(album.id)}
                    >
                      {album.title}
                    </Button>
                  ))}
              </div>
              {isLoadingAlbums &&
                Array.from({ length: 5 }).map((_, index) => (
                  <Skeleton
                    key={`album-loading-${index}`}
                    className="w-20 h-7"
                  />
                ))}
            </div>
          </DialogBody>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary">Cancelar</Button>
            </DialogClose>
            <Button type="submit">Adicionar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
