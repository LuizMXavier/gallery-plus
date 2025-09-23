import Alert from "../../../components/alert";
import Button from "../../../components/button";
import { DialogContent, DialogTrigger, Dialog, DialogHeader, DialogBody, DialogFooter, DialogClose } from "../../../components/dialog";
import InputText from "../../../components/input-text";

interface PhotoNewDialogProps {
    trigger: React.ReactNode;
}

export default function PhotoNewDialog({trigger}: PhotoNewDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent>
                <DialogHeader>Adicionar foto</DialogHeader>
                <DialogBody className="flex flex-col gap-5">
                    <InputText placeholder="Adicione um título" maxLength={255}/>
                    <Alert>
                        Tamanho máximo: 50MB
                        <br/>
                        Você pode selecionar arquivos em PNG, JPG ou JPEG
                    </Alert>
                    <Input
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