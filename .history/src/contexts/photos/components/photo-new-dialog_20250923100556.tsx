import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";

interface PhotoNewDialogProps {
    trigger: React.ReactNode;
}

export default function PhotoNewDialog({trigger}: PhotoNewDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild></DialogTrigger>
        </Dialog>
    )
}