import { Paper, Grid, Tooltip, IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
/**
 * 
 * @param param0 Determines label of the Header
 * @returns react element
 */
export default function DetailsHeader({ isCreateMode }: { readonly isCreateMode: boolean; }) {
    return (
        <Paper elevation={1} sx={{ p: 2, borderRadius: 1, fontSize: '18px', fontWeight: 500, width: '100%' }}>
            <Grid size={{ xs: 2, sm: 2, md: 2 }}
                sx={{ display: 'flex', width: '100%' }}>
                <Tooltip title="Go back" disableInteractive>
                    <IconButton
                        size="large" sx={{ width: '60px' }} onClick={() => history.back()}>
                        <ArrowBackIcon />
                    </IconButton>
                </Tooltip>
                <Paper elevation={0} sx={{ p: 2, width: '100%' }}>
                    {(isCreateMode ? 'Добавяне' : 'Редактиране') + ' на данни'}
                </Paper>
            </Grid>
        </Paper>
    );
}
