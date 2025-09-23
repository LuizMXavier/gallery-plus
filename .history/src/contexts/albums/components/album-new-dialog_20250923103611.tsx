import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "../../../components/dialog";

interface AlbumNewDialogProps {
    trigger: React.ReactNode;
}

export default function AlbumNewDialog({trigger}: AlbumNewDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent>
                <DialogHeader>Criar </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}