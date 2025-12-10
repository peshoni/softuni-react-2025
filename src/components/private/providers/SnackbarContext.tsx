import { createContext, useCallback, useContext, useMemo, useState, type ReactNode, } from "react";
import Snackbar, { type SnackbarCloseReason, type SnackbarOrigin } from '@mui/material/Snackbar';
import { Alert } from "@mui/material";

// Toast type definition
export type ToastType = "info" | "success" | "error" | "warning";

export interface ToastData {
    message: string;
    type: ToastType;
    duration?: number;
    anchor: SnackbarOrigin
}

interface SnackbarContextType {
    showSnackbar: (message: string, type?: ToastType, duration?: number, anchor?: SnackbarOrigin) => void;
}
//, anchorOrigin: SnackbarOrigin =  { vertical: 'bottom', horizontal: 'center' }
const SnackbarContext = createContext<SnackbarContextType | null>(null);

export const SnackbarProvider = ({ children }: { children: ReactNode; }) => {

    const defaultPosition: SnackbarOrigin = { vertical: 'bottom', horizontal: 'center' };

    const [toast, setToast] = useState<ToastData | null>(null);
    /**
     * 
     */
    const showSnackbar = useCallback(
        (message: string, type: ToastType = "info", duration: number = 3000, anchor: SnackbarOrigin = defaultPosition) => {
            setToast({ message, type, anchor });
            setTimeout(() => setToast(null), duration);
        },
        []
    );

    const handleCloseToastMessage = (_event?: React.SyntheticEvent | Event, reason?: SnackbarCloseReason,) => {
        if (reason === 'clickaway') {
            return;
        }
    };

    const contextValue = useMemo(() => ({ showSnackbar }), [showSnackbar]);

    return (
        <SnackbarContext.Provider value={contextValue}>

            {children}

            {toast && <Snackbar
                open={true}
                anchorOrigin={toast.anchor}
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
