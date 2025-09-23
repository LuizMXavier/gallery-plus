import Button from "../../../components/button";
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
                <DialogBody className="">

                </DialogBody>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="secondary">Cancelar</Button>
                    </DialogClose>
                    <Button>Adicionar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}