import type { ApolloError } from "@apollo/client";
import { Box, Button, FormControl, FormHelperText, Grid, InputLabel, LinearProgress, MenuItem, Paper, Select, Tooltip } from "@mui/material";
import { useState } from "react";
import type { FilterFields } from "./table-interfaces";
import type { UserFragment } from "../../../../../graphql/generated";

export interface TableNavbarProps {
    readonly options: FilterFields[];
    readonly label: string;
    readonly user: UserFragment | undefined;
    readonly error: ApolloError | undefined;
    readonly loading: boolean;
    readonly addClickedHandler: () => void;
    readonly filterSelectedHandler: (arg: FilterFields) => void;
}

export default function TableNavbar({ options, label, user, error, loading, filterSelectedHandler, addClickedHandler }: TableNavbarProps) {
    const innerOptions: FilterFields[] = error ? [] : [{ id: '', code: 'all', name: 'Всички' }, ...options];
    const [selected, setSelected] = useState(innerOptions[0]?.code ?? '');
    const isAddButtonVisible = checkAddButtonVisibility(user);

    const handleSelectChange = (event: any) => {
        const selectedOptionCode = event.target.value;
        console.log(event);
        // const selectedOptionCode: string = innerOptions.find(e=>e.code === code);
        const selectedFilter: FilterFields | undefined = innerOptions.find(o => o.code === selectedOptionCode);
        if (selectedFilter) {
            setSelected(selectedFilter.code);
            filterSelectedHandler(selectedFilter);
        }
    };

    return (
        <>
            <Box sx={{ width: '100%' }}>
                {loading && <LinearProgress color="primary" />}
            </Box>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                <Grid size={{ xs: 1, sm: 2, md: 2 }}>
                    {innerOptions.length > 1
                        && <FormControl sx={{ m: 1, width: '100%' }}>
                            <InputLabel id="tableFilterOne">Property</InputLabel>
                            <Select
                                labelId="tableFilterOne"
                                id="tableSelectId"
                                value={selected}
                                label="Property"
                                onChange={handleSelectChange}
                                sx={{ textAlign: 'start' }}
                            >
                                {innerOptions.map(element => <MenuItem
                                    value={element.code} key={element.id}>{element.name}
                                </MenuItem>)}
                            </Select>
                            <FormHelperText>filter by</FormHelperText>
                        </FormControl>
                    }
                </Grid>
                {/* If error then select and add button is hidden */}
                <Grid size={error ? { xs: 4, sm: 8, md: 12 } : { xs: 2, sm: 4, md: 8 }}>
                    <Paper sx={{ width: '100%', height: '100%', fontSize: 'x-large', fontWeight: 'bold', boxShadow: 'none', alignContent: 'center', minHeight: '70px' }}>
                        {label}
                    </Paper>
                </Grid>
                {/* Display add button according to the User permissions */}
                {!error && isAddButtonVisible &&
                    <Grid size={{ xs: 1, sm: 2, md: 2 }}
                        sx={{
                            display: 'flex', justifyContent: 'end'
                        }}>
                        <Tooltip title="Add data" disableInteractive>
                            <Button variant="contained" sx={{ lineHeight: '20px', fontSize: '24px', height: '50px', width: '50px', margin: '10px' }}
                                onClick={addClickedHandler}>+
                            </Button>
                        </Tooltip>
                    </Grid>
                }
            </Grid>
        </>
    );
}

function checkAddButtonVisibility(user: UserFragment | undefined) {
    if (user) {
        if (user.user_role.code === 'autoMechanic') {
            return false;
        }

        if (user.user_role.code === 'serviceSpecialist') {
            return false;
        }


        return true;
    } else {
        return false;
    }
}

