import { FormControl, InputLabel, OutlinedInput } from "@mui/material"; 
import type { FormControlError } from "../interfaces";

export default function TextInput({ value, propName, label, errors, changeCallback }: {
    readonly value: string,
    readonly propName: string,
    readonly label: string;
    readonly errors: FormControlError[],
    readonly changeCallback: (e: { target: { name: any; value: any; }; }) => void;
}) {

    const hasError = errors.some(e => e.controlName === propName);

    return (
        <FormControl sx={{ margin: '8px 0', width: '100%' }} variant="outlined">
            <InputLabel htmlFor={propName} error={hasError}>{label}</InputLabel>
            <OutlinedInput
                id={propName}
                name={propName}
                label={label}
                type='text'
                value={value}
                required
                onChange={changeCallback}
                error={hasError}
            />
        </FormControl>
    );
}