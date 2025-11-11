import { Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Paper, Select, Tooltip, type SelectChangeEvent } from "@mui/material";
import { useState } from "react";

export interface TableNavbarProps {
    readonly preselectedOption?: string;
    readonly options: string[];
    readonly label: string;
    readonly shouldShowAddButton: boolean; //TODO add object for enable disabe filtering
    readonly addClickedHandler: () => void;
    readonly filterSelectedHandler: (arg: string) => void;
}

export default function TableNavbar({ preselectedOption, options, label, shouldShowAddButton, filterSelectedHandler, addClickedHandler }: TableNavbarProps) {
    const innerOptions = ['select', ...options];
    const [selected, setSelected] = useState(preselectedOption);

    const handleSelectChange = (event: SelectChangeEvent) => {
        const selectedOption: string = event.target.value;
        console.log(event.target.value);
        setSelected(selectedOption);
        filterSelectedHandler(selectedOption);
    };

    return (
        // sx={ {backgroundColor:'#e8e8e8'} }
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
            <Grid size={{ xs: 1, sm: 2, md: 2 }}>
                {innerOptions.length > 1
                    && <FormControl sx={{ m: 1, width: '100%', margin: '16px' }}>
                        <InputLabel id="tableFilterOne">Property</InputLabel>
                        <Select
                            labelId="tableFilterOne"
                            id="tableSelectId"
                            value={selected}
                            label="Property"
                            onChange={handleSelectChange}
                            sx={{ textAlign: 'start' }}
                        >
                            {innerOptions.map(element => <MenuItem value={element} key={element}>{element}</MenuItem>)}
                        </Select>
                        <FormHelperText>filter by</FormHelperText>
                    </FormControl>
                }
            </Grid>

            <Grid size={{ xs: 2, sm: 2, md: 8 }}>
                <Paper sx={{ width: '100%', height: '60px', fontSize: 'x-large', fontWeight: 'bold', boxShadow: 'none', alignContent: 'center' }}>
                    {label}
                </Paper>
            </Grid>
            {/* Display add button according to the User permissions */}
            {shouldShowAddButton &&
                <Grid size={{ xs: 1, sm: 2, md: 2 }} sx={{
                    display: 'flex', justifyContent: 'end', paddingTop: '16px',
                    paddingRight: '16px'
                }}>
                    <Tooltip title="Add data" disableInteractive>
                        <Button variant="contained" sx={{ lineHeight: '20px', fontSize: '24px', height: '60px', width: '60px' }}
                            onClick={addClickedHandler}>+
                        </Button>
                    </Tooltip>
                </Grid>
            }
        </Grid>
    );
}

