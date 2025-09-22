import * as DialogPrimitive from "@radix-ui/react-dialog";

export const Dialog = DialogPrimitive.Root;

export const DialogTrigger = DialogPrimitive.Trigger;

export const DialogClose = DialogPrimitive.Close;

export function DialogContent({className, ref, children, ...props}: 
    React.ComponentProps<typeof DialogPrimitive.Content>) {
        return (
            <DialogPrimitive.Portal>
                <DialogPrimitive.Content ref={ref} className={
                    ` fixed left=[50%] top-[50%] w-full max-w-[32rem]`
                }>
                    {children}
                </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
        );
        
    }