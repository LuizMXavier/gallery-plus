import Button from "../../../components/button";
import { Dialog, DialogBody, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "../../../components/dialog";
import InputText from "../../../components/input-text";
import Text from "../../../components/text";
import type { Photo } from "../../photos/models/photo";

interface AlbumNewDialogProps {
    trigger: React.ReactNode;
}

export default function AlbumNewDialog({trigger}: AlbumNewDialogProps) {
    const isLoadingPhoto = false;
    const photos:Photo[] = [];
    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent>
                <DialogHeader>Criar álbum</DialogHeader>
                <DialogBody className="flex flex-col gap-5">
                    <InputText placeholder="Adicione um título"/>
                    <div className="space-y-3">
                        <Text>Fotos cadastradas</Text>
                        {!isLoadingPhoto && photos.length === 0 && (
                            <div className="w-full flex flex-col justify-center items-center gap-3">
                                    
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
    )
}