import { Paper, styled } from "@mui/material";

const MyPaper = styled(Paper)(({ theme }) => ({
    fontSize: 'x-large',
    height: '200px',
    margin: '10px',
    fontWeight: 'bold',
    color: theme.palette.warning.dark,
    alignContent: 'center' 
}));
export default function DatasourceError() {
    return (
        <MyPaper >
            Service is temporary unavailable
        </MyPaper>
    );
}