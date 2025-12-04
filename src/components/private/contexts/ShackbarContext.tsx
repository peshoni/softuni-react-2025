import { createContext, useCallback, useContext, useMemo, useState, type ReactNode, } from "react";
import Snackbar, { type SnackbarCloseReason } from '@mui/material/Snackbar';
import { Alert } from "@mui/material";

// Toast type definition
export type ToastType = "info" | "success" | "error" | "warning";

export interface ToastData {
    message: string;
    type: ToastType;
    duration?: number;
}

interface SnackbarContextType {
    showSnackbar: (message: string, type?: ToastType, duration?: number) => void;
}

const SnackbarContext = createContext<SnackbarContextType | null>(null);

export const SnackbarProvider = ({ children }: { children: ReactNode; }) => {

    const [toast, setToast] = useState<ToastData | null>(null);

    const showSnackbar = useCallback(
        (message: string, type: ToastType = "info", duration: number = 3000) => {
            setToast({ message, type });
            setTimeout(() => setToast(null), duration);
        },
        []
    );

    const handleCloseToastMessage = (event?: React.SyntheticEvent | Event, reason?: SnackbarCloseReason,) => {
        console.log(event);
        if (reason === 'clickaway') {
            return;
        }
        // setToastState({ open: false, alertType: undefined, message: '', duration });
    };

    const contextValue = useMemo(() => ({ showSnackbar }), [showSnackbar]);

    return (

        <SnackbarContext.Provider value={contextValue}>

            {children}

            {toast && <Snackbar
                open={true}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                autoHideDuration={toast.duration || 3000}
                onClose={handleCloseToastMessage}
                sx={{ minWidth: '300px' }}
            >
                <Alert severity={toast.type} sx={{ width: '100%' }}>
                    {toast.message}
                </Alert>
            </Snackbar>
            }
        </SnackbarContext.Provider>
    );
};

export const useSnackbar = (): SnackbarContextType => {
    const ctx = useContext(SnackbarContext);
    if (!ctx) {
        throw new Error("useSnackbar must be used inside SnackbarProvider");
    }
    return ctx;
};
