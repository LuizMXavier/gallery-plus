import * as DialogPrimitive from "@radix-ui/react-dialog";

export const Dialog = DialogPrimitive.Root;

export const DialogTrigger = DialogPrimitive.Trigger;

export const DialogClose = DialogPrimitive.Close;

export function DialogContent({className, ref, children, ...props}: 
    React.ComponentProps<typeof DialogPrimitive.Content>) {
        return (
            <DialogPrimitive.Portal>
                <DialogPrimitive.Content ref={ref} className={
                    ` fixed left=[50%] top-[50%] w-full max-w-[32rem]
                      z-[60] translate-x-[50%] translate-y-[-50%]
                      data-[]
                      data-[state=open]:fade-in-0 
                      data-[state=open]:slide-in-from-bottom-[48%]
                      data-[state=closed]:fade-in-0
                      data-[state=closed]:slide-in-from-bottom-[48%]     
                    `
                }>
                    {children}
                </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
        );
        
    }