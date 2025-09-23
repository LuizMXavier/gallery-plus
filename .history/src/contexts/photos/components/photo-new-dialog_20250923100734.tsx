import { DialogContent, DialogTrigger, Dialog } from "../../../components/dialog";

interface PhotoNewDialogProps {
    trigger: React.ReactNode;
}

export default function PhotoNewDialog({trigger}: PhotoNewDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent>
                
            </DialogContent>
        </Dialog>
    )
}