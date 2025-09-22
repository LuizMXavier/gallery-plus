import * as DialogPrimitive from "@radix-ui/react-dialog";
import cn from "classnames";
import Card from "./card";

export const Dialog = DialogPrimitive.Root;

export const DialogTrigger = DialogPrimitive.Trigger;

export const DialogClose = DialogPrimitive.Close;

export function DialogOverlay({
    className, 
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
    return <DialogPrimitive.Overlay
        className={cn(`
            fixed inset-0 z-50 bg-background-secondary/60
            backdrop-blur-sm
            data-[state=open]:animate-in
            data-[state=close]:animate-out
            data-[state=open]:fada-in-0
            data-[state=closed]:fade-out-0
        `, className)}
        {...props}
        />

}

export function DialogContent({
  className,
  ref,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPrimitive.Portal>
      <DialogOverlay/>  
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          ` fixed left=[50%] top-[50%] w-full max-w-[32rem]
                      z-[60] translate-x-[50%] translate-y-[-50%]
                      data-[state=open]:animate-in
                      data-[state=open]:fade-in-0 
                      data-[state=open]:slide-in-from-bottom-[48%]
                      data-[state=closed]:animate-out
                      data-[state=closed]:fade-in-0
                      data-[state=closed]:slide-in-from-bottom-[48%]     
                    `,
          className
        )}
        {...props}
      >
        <Card size="lg" variant="primary">
          {children}
        </Card>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}


export function DialogHeader({
    children,
    className,
    ...props
}: React.ComponentProps<"div">) {
    return <>
        <header className={cn(`
           flex items-center justify-between     
            `, className)}>
            <DialogPrimitive.Title>
                <Text variant="heading-medium" className="flex-1">
                </Text>    
            </DialogPrimitive.Title>   

        </header>
    
    </>
}