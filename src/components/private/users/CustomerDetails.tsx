import { useParams } from "react-router";
import { useGetUserByIdLazyQuery, type Edit_UserFragment } from "../../../../graphql/generated";
import DatasourceEmptyResult from "../common/tables/DataSourceEmptyResult";
import { isNullOrUndefined } from "is-what";
import DetailsHeader from "../common/forms/DetailsHeader";
import { useEffect, useState } from "react";
import { Box, Paper, TextField, Button, FormControl, OutlinedInput, InputLabel, Grid } from "@mui/material";
import { motion } from "framer-motion";
import PasswordInput from "../common/forms/PasswordInput";
import type { FormControlError } from "../../public/LoginForm";

//#region Form Types 
const omitUserProperties = ['id', 'created_at', 'updated_at', 'gender', 'user_role'] as const;
type FilteredUserProperties = Pick<Edit_UserFragment, typeof omitUserProperties[number]>;
type FormUserProps = Omit<Edit_UserFragment, keyof FilteredUserProperties> & { role: string, genderCode: string; };
//#endregion Form Types
export default function CustomerDetails() {
    const [errors, setErrors] = useState<FormControlError[]>([]);

    const params = useParams();
    const isCreateMode = isNullOrUndefined(params?.id);
    let user: Edit_UserFragment | undefined | null;

    const [formData, setFormData] = useState<FormUserProps>({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: '',
        role: '',
        genderCode: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        console.log([e.target.name], e.target.value);
        setFormData({
            ...formData,// clone form data and replace property with event origin
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(formData);
        // if (!isLogin && formData.password !== formData.confirmPassword) {
        //   alert("Passwords do not match!");
        //   return;
        // }
        // Simulate login/register action
        alert('Submit');
    };
    const [performGetUser, { }] = useGetUserByIdLazyQuery();


    useEffect(() => {
        // Create a new AbortController when the component mounts
        // abortControllerRef.current = new AbortController();
        // Return a cleanup function to abort the request when the component unmounts

        if (!isCreateMode) {
            performGetUser({ variables: { id: params.id } }).then(({ data }) => {

                console.log(data);
                user = data?.users_by_pk;
                if (user) {

                    setFormData({
                        first_name: user.first_name,
                        last_name: user.last_name,
                        password: user.password,
                        role: user.user_role.code,
                        genderCode: user.gender.code,
                        email: user.email,
                        phone: user.phone,

                        // phone: user. ,
                        // role: 'customer',
                        // gender: '' 
                    });
                }
            });

            // if (user) {
            //     setFormData({ email: user.email, first_name: user.first_name });
            // }
        }

        return () => {
            // abortControllerRef.current?.abort();
        };
    }, []);



    return (
        <>
            <DetailsHeader isCreateMode={isCreateMode} />
            {!formData && <DatasourceEmptyResult />}
            {formData &&
                // <Container maxWidth="lg">
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    sx={{ mt: '8px' }}
                >
                    <Paper elevation={1} sx={{ p: 4, borderRadius: 1 }}>
                        <Grid
                            component="form"
                            container

                            autoComplete="off"
                            sx={{ mt: 2 }}
                            columns={{ xs: 1, md: 2, lg: 2 }}
                            columnGap={1}
                            rowGap={1}
                            onSubmit={handleSubmit} >

                            {/* <Box component="form" onSubmit={handleSubmit} autoComplete="off"> */}

                            <Grid size={{ xs: 1, md: 1 }}>

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
                            </Grid>

                            <Grid size={{ xs: 1, md: 1 }}>
                                <TextField
                                    fullWidth
                                    label="First name"
                                    name="first_name"
                                    type="text"
                                    margin="normal"
                                    value={formData.first_name}
                                    onChange={handleChange}
                                    required
                                    sx={{ margin: '8px 0', width: '100%' }}
                                />
                            </Grid>

                            <Grid size={{ xs: 1, md: 1 }}>

                                <PasswordInput
                                    key={'password'}
                                    value={formData.password}
                                    errors={errors}
                                    changeCallback={handleChange}
                                />
                            </Grid>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                size="large"
                                sx={{ mt: 2, borderRadius: 2 }}
                            >
                                Запази
                            </Button>
                        </Grid>

                        {/* <Grid container justifyContent="center" sx={{ mt: 2 }}>
                                <Grid size={"auto"}>
                                    <Link
                                        component="button"
                                        variant="body2"
                                        onClick={() => setIsLogin(!isLogin)}
                                    >
                                        {isLogin
                                            ? "Don't have an account? Register"
                                            : "Already have an account? Login"}
                                    </Link>
                                </Grid>
                            </Grid> */}
                    </Paper>
                </Box>
                // </Container>
            }
        </>
    );
}