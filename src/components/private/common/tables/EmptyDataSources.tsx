import { Paper, styled } from "@mui/material";

const MyPaper = styled(Paper)(({ theme }) => ({
    fontSize: 'x-large',
    height: '200px',
    margin: '10px',
    fontWeight: 'bold',
    color: theme.palette.grey[500],
    alignContent: 'center' 
}));
export default function EmptyDatasource() {
    return (
        <MyPaper>
            No records were found
        </MyPaper>
    );
}