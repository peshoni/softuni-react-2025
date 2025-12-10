import { Paper, Grid, Tooltip, IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router";
import { buildUrl } from "../../../../routes/routes-util";
export type HEADER_MODES = 'create' | 'update' | 'preview';
/**
 * Stateless component for Details Header
 * @param param0 Determines label of the Header
 * @returns react element
 */
export default function DetailsHeader({ mode, parentSegment }: { readonly mode: HEADER_MODES; readonly parentSegment: string; }) {
    const navigate = useNavigate();
    function getByLabelText(mode: HEADER_MODES): string {
        switch (mode) {
            case "create":
                return 'Добавяне на данни';
            case "update":
                return 'Промяна на данни';
            case "preview":
                return 'Преглед на данни';
            default:
                return '';
        }
    }

    return (
        <Paper elevation={1} sx={{ p: 2, borderRadius: 1, fontSize: '18px', fontWeight: 500, width: '100%' }}>
            <Grid size={{ xs: 2, sm: 2, md: 2 }}
                sx={{ display: 'flex', width: '100%' }}>
                <Tooltip title="Go back" disableInteractive>
                    <IconButton
                        size="large" sx={{ width: '60px' }} onClick={() => navigate(buildUrl(parentSegment))}>
                        <ArrowBackIcon />
                    </IconButton>
                </Tooltip>
                <Paper elevation={0} sx={{ p: 2, width: '100%' }}>
                    {getByLabelText(mode)}
                </Paper>
            </Grid>
        </Paper>
    );
}
