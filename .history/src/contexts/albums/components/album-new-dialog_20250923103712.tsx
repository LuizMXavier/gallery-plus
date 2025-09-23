import { Dialog, DialogBody, DialogContent, DialogHeader, DialogTrigger } from "../../../components/dialog";
import InputText from "../../../components/input-text";

interface AlbumNewDialogProps {
    trigger: React.ReactNode;
}

export default function AlbumNewDialog({trigger}: AlbumNewDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent>
                <DialogHeader>Criar álbum</DialogHeader>
                <DialogBody className="flex flex-col gap-5">
                    <InputText placeholder="Adicione um t"/>

                </DialogBody>
            </DialogContent>
        </Dialog>
    )
}