import { Dialog, DialogBody, DialogContent, DialogHeader, DialogTrigger } from "../../../components/dialog";
import InputText from "../../../components/input-text";
import Text from "../../../components/text";

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
                    <InputText placeholder="Adicione um título"/>
                    <div className="space-y-3">
                        <Text>Fotos</Text>
                    </div>

                </DialogBody>
            </DialogContent>
        </Dialog>
    )
}