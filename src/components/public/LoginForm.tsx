import { useContext, useState } from "react";
import { Container, Box, Button, Typography, Paper, Link, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import Grid from '@mui/material/Grid';
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { PathSegments } from "../../routes/enums";
import { useLoginLazyQuery, type LoginQueryVariables, type UserFragment } from "../../../graphql/generated";
import PasswordInput from "../private/common/forms/PasswordInput";
import UserContext from "../private/providers/UserContext";
import type { FormControlError } from "../private/common/interfaces";
import { useSnackbar } from "../private/providers/SnackbarContext";
import { buildUrl } from "../../routes/routes-util";

export default function LoginForm( /*{ setUser }: { readonly setUser: (event: SetStateAction<UserFragment | undefined>) => void; } */) {
    const navigate = useNavigate();
    const { showSnackbar } = useSnackbar();

    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState<FormControlError[]>([]);
    const [touchedFields, setTouchedFields] = useState<Set<keyof LoginQueryVariables>>(new Set<keyof LoginQueryVariables>());
    const { onLogin } = useContext(UserContext);
    //(?=.*[0-9])
    const passRegex: RegExp = /(?=.*[A-Z])(?=.*[a-z])(?=.*[\#\$\%\=\@\!\{\}\,\`\~\&\*\(\)\<\>\?\.\:\;\_\|\^\/\+\t\[\]\"\-])[\da-zA-Z\#\$\%\=\@\!\{\}\,\`\~\&\*\(\)\<\>\?\.\:\;\_\|\^\/\+\t\[\]\"\-]{6,128}/g;
    const [login /* { called, loading, data }*/] = useLoginLazyQuery();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const controlName: keyof LoginQueryVariables = e.target.name;
        const value: string = e.target.value.trim();
        setTouchedFields(s => s.add(controlName));
        if (controlName === 'password') {
            if (!passRegex.test(value) || value.length < 1) {
                if (!errors.some(c => c.controlName === controlName)) {
                    errors.push({ controlName });
                }
            } else if (errors.some(er => er.controlName === controlName)) {
                setErrors(errors.filter(er => er.controlName !== controlName));
            }
        }
        if (controlName === 'email') {
            if (value.length < 1) {
                if (!errors.some(c => c.controlName === controlName)) {
                    errors.push({ controlName });
                }
            } else if (errors.some(er => er.controlName === controlName)) {
                setErrors(errors.filter(er => er.controlName !== controlName));
            }
        }
        setFormData({
            ...formData,
            [controlName]: e.target.value,
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        setErrors([]);
        e.preventDefault();
        setSubmitted(true);

        login({ variables: { email: formData.email, password: formData.password } }).then((result) => {
            let user: UserFragment | undefined = result.data?.users[0];

            if (user) {
                const awaitTime: number = 2000;
                const settings = onLogin(user);

                showSnackbar('Login was successfully', 'success', awaitTime);
                setTimeout(() => {
                    setSubmitted(false);
                    if (settings) {
                        navigate(buildUrl(settings.userMenu[0].path));
                    }
                }, awaitTime);
            } else {

                onLogin(undefined);
                showSnackbar('Потребителят не беше намерен.', 'error', 4000);
                setErrors([{ controlName: 'email' }, { controlName: 'password' }]);
                setSubmitted(false);
            }
        });
    };

    return (
        <Container maxWidth="xs">
            <Box
                component={motion.div}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                sx={{ mt: 8 }}
            >
                <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        Вход
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} autoComplete="off">

                        <FormControl sx={{ margin: '8px 0', width: '100%' }} variant="outlined">
                            <InputLabel htmlFor="email" error={errors.some(e => e.controlName === 'email')} >Email</InputLabel>
                            <OutlinedInput
                                id="email"
                                name='email'
                                type='email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                                error={errors.some(e => e.controlName === 'email')}
                                label="Email"
                            />
                        </FormControl>

                        <PasswordInput
                            key={'password'}
                            value={formData.password}
                            errors={errors}
                            changeCallback={handleChange}
                        />

                        {/* Submit button */}
                        <Button
                            type="submit"
                            disabled={submitted || touchedFields.size !== Object.keys(formData).length || errors.length > 0}
                            fullWidth
                            variant="contained"
                            size="large"
                            sx={{ mt: 2, borderRadius: 2 }}
                        >
                            Въведи
                        </Button>
                    </Box>

                    <Grid container justifyContent="center" sx={{ mt: 2 }}>
                        <Grid size={"auto"}>
                            <Link
                                component="button"
                                variant="body2"
                                onClick={() => navigate('/' + PathSegments.REGISTER)}
                            >
                                Нямате акаунт? Регистрация
                            </Link>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </Container>
    );
}
