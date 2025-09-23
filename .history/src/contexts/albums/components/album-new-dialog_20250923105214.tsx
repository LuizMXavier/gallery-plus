import Button from "../../../components/button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../../../components/dialog";
import InputText from "../../../components/input-text";
import Text from "../../../components/text";
import type { Photo } from "../../photos/models/photo";
import SelectCheckboxIlustration from "../../../assets/images/select-checkbox.svg?react";
import Skeleton from "../../../components/skeleton";

interface AlbumNewDialogProps {
  trigger: React.ReactNode;
}

export default function AlbumNewDialog({ trigger }: AlbumNewDialogProps) {
  const isLoadingPhoto = false;
  const photos: Photo[] = [
    {
      id: "123",
      title: "Olá mundo",
      imageId: "portrait-tower.png",
      albums: [
        { id: "3421", title: "Album1" },
        { id: "123", title: "Album2" },
        { id: "456", title: "Album3" },
      ],
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>Criar álbum</DialogHeader>
        <DialogBody className="flex flex-col gap-5">
          <InputText placeholder="Adicione um título" />
          <div className="space-y-3">
            <Text>Fotos cadastradas</Text>
            {isLoadingPhoto && (
                <div className="flex flex-wrap gap-2">
                    {Array.from({length: 4}).map((_, index) => (
                        <Skeleton key={`photo-loading-&{}`}/>
                    ))}

                </div>
            )}
            {!isLoadingPhoto && photos.length === 0 && (
              <div className="w-full flex flex-col justify-center items-center gap-3">
                <SelectCheckboxIlustration />
                <Text variant="paragraph-medium" className="text-center">
                  Nenhuma foto disponivel para seleção
                </Text>
              </div>
            )}
          </div>
        </DialogBody>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancelar</Button>
          </DialogClose>
          <Button>Criar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
