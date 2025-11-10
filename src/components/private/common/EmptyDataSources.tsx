import { Paper } from "@mui/material";

export default function EmptyDatasource() {
    return (
        <Paper sx={{ width: '100%', height: '60px', fontSize: 'x-large', fontWeight: 'bold', boxShadow: 'none',alignContent: 'center', color:'#524a3d' }}>
            No records were found
        </Paper>
    );
}