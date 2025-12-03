import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, } from "@mui/material";

/**
 * The result of the confirmation dialog.
 */
export type ConfirmationDialogResult = "confirmed" | "canceled" | "closed";

export interface ConfirmationDialogOptions {
    title?: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    /** Called when dialog opens */
    onOpen?: () => void;
}

interface InternalDialogState extends ConfirmationDialogOptions {
    resolve: (value: ConfirmationDialogResult) => void;
}
/**
 * The context value for the confirmation dialog.
 */
interface ConfirmationDialogContextValue {
    confirm: (options: ConfirmationDialogOptions) => Promise<ConfirmationDialogResult>;
}
/**
 * The confirmation dialog context.
 */
const ConfirmationDialogContext = createContext<ConfirmationDialogContextValue | undefined>(
    undefined
);

/**
 *  A provider component that manages confirmation dialogs.
 * @param param0 
 * @returns 
 */
export function ConfirmationDialogProvider({ children }: { readonly children: ReactNode; }) {
    const [dialogState, setDialogState] = useState<InternalDialogState | null>(null);

    const confirm = useCallback(
        (options: ConfirmationDialogOptions) => {
            return new Promise<ConfirmationDialogResult>((resolve) => {
                const state: InternalDialogState = {
                    title: options.title ?? "Диалог за потвърждение",
                    message: options.message,
                    confirmText: options.confirmText ?? "Потвърждавам",
                    cancelText: options.cancelText ?? "Отмени",
                    onOpen: options.onOpen,
                    resolve,
                };
                options.onOpen?.();
                setDialogState(state);
            });
        },
        []
    );

    const handleClose = useCallback(() => {
        if (dialogState) dialogState.resolve("closed");
        setDialogState(null);
    }, [dialogState]);

    const handleCancel = useCallback(() => {
        if (dialogState) dialogState.resolve("canceled");
        setDialogState(null);
    }, [dialogState]);

    const handleConfirm = useCallback(() => {
        if (dialogState) dialogState.resolve("confirmed");
        setDialogState(null);
    }, [dialogState]);

    return (
        <ConfirmationDialogContext.Provider value={{ confirm }}>
            {children}

            {/* Render dialog only when called */}
            <Dialog open={dialogState !== null}
                // sx={{ minWidth: '300px' }}

                onClose={handleClose}>
                <DialogTitle>{dialogState?.title}</DialogTitle>
                <DialogContent sx={{ minWidth: '400px' }}>
                    <DialogContentText>{dialogState?.message}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel}>{dialogState?.cancelText}</Button>
                    <Button onClick={handleConfirm} autoFocus>
                        {dialogState?.confirmText}
                    </Button>
                </DialogActions>
            </Dialog>
        </ConfirmationDialogContext.Provider>
    );
}

/**
 *  A hook to access the confirmation dialog context.
 * @returns The confirmation dialog context value.  {@see ConfirmationDialogContextValue    }                 
 */
export function useConfirmationDialog(): ConfirmationDialogContextValue {
    const ctx = useContext(ConfirmationDialogContext);
    if (!ctx) {
        throw new Error(
            "useConfirmationDialog must be used within a ConfirmationDialogProvider"
        );
    }
    return ctx;
}

// -----------------------------
// Usage Example (not rendered here)
// ----------------------------- 
// export function SomeComponent() {
//   const { confirm } = useConfirmationDialog();
//   const handleDelete = async () => {
//     const result = await confirm({ message: "Delete this item?" });
//     console.log(result);
//   };
//   return <Button onClick={handleDelete}>Delete</Button>;
// }
