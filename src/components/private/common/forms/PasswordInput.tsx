import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { useState } from "react";
import type { FormControlError } from "../../../public/LoginForm";

export default function PasswordInput({ value, errors, changeCallback }: {
    readonly value: string,
    readonly errors: FormControlError[],
    readonly changeCallback: (e: { target: { name: any; value: any; }; }) => void;
}) {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <FormControl sx={{ margin: '8px 0', width: '100%' }} variant="outlined">
            <InputLabel htmlFor="password-field-id" error={errors.some(e => e.controlName === 'email')}>Password</InputLabel>
            <OutlinedInput
                id="password-field-id"
                name='password'
                type={showPassword ? 'text' : 'password'}
                value={value}
                onChange={changeCallback}
                required
                error={errors.some(e => e.controlName === 'password')}

                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label={
                                showPassword ? 'hide the password' : 'display the password'
                            }
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                label="Password"
            />
        </FormControl>
    );
}

