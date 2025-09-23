import { DialogContent, DialogTrigger, Dialog, DialogHeader, DialogBody, DialogFooter, DialogClose } from "../../../components/dialog";

interface PhotoNewDialogProps {
    trigger: React.ReactNode;
}

export default function PhotoNewDialog({trigger}: PhotoNewDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent>
                <DialogHeader>Adicionar foto</DialogHeader>
                <DialogBody>

                </DialogBody>
                <DialogFooter>
                    <DialogClose>
                        
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}