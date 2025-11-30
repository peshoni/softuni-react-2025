import { useContext, useState } from "react";
import { Container, Box, TextField, Button, Typography, Paper, Link, FormControl, FormHelperText, InputLabel, MenuItem, OutlinedInput, Select, type FormControlProps, } from "@mui/material";
import Grid from '@mui/material/Grid';
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { PathSegments } from "../../routes/enums";
import PasswordInput from "../private/common/forms/PasswordInput";
import { useRegisterMutation, type Edit_UserFragment, type Users_Insert_Input } from "../../../graphql/generated";
import type { FilterFields } from "../private/common/tables/table-interfaces";
import useEnums from "../private/hooks/useEnums";
import TextInput from "../private/common/forms/StringInput";
import type { FormControlError } from "../private/common/interfaces";
import { isFullString } from "is-what";
import UserContext from "../private/contexts/UserContext";
import { buildUrl } from "../../routes/routes-util";

//#region Form Types 
const omitUserProperties = ['id', 'created_at', 'updated_at', 'gender', 'user_role'] as const;
type FilteredUserProperties = Pick<Edit_UserFragment, typeof omitUserProperties[number]>;
type FormUserProps = Omit<Edit_UserFragment, keyof FilteredUserProperties> & { /*role: string, */genderCode: string; };
//#endregion Form Types
export default function RegisterForm() {

    const phoneRegexp: RegExp = /\+359[1-9]{3}\d{6}$/; // simple validation for the BG gsm numbers
    const navigate = useNavigate();
    const { genders, userRoles } = useEnums();
    let gendersOptions: FilterFields[] = Object.values(genders.map(e => ({ id: e.id, code: e.code, name: e.name })));

    const [errors, setErrors] = useState<FormControlError[]>([]);
    const [touchedFields, setTouchedFields] = useState<Set<keyof FormUserProps>>(new Set<keyof FormUserProps>());

    const [registerUser] = useRegisterMutation();
    const { onLogin, userMenu } = useContext(UserContext);

    // console.error(touchedFields.size);

    const [formData, setFormData] = useState<FormUserProps>({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        phone: '', // \+359[1-9]{3}\d{6} 
        genderCode: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        console.log([e.target.name], e.target.value);

        setTouchedFields(s => s.add(e.target.name));
        if (!isFullString(e.target.value)) {
            setTouchedFields(s => { s.delete(e.target.name); return s; });
        }
        //    touchedFields.add(e.target.name)
        if (e.target.name === 'phone' && !phoneRegexp.test(e.target.value)) {
            //             console.log( phoneRegexp.test(e.target.value))
            // console.log('INVALID NUMBER : ' + e.target.value)
            if (!errors.some(c => c.controlName === e.target.name)) {

                errors.push({ controlName: e.target.name });
            }
        } else {
            const index = errors.findIndex(c => c.controlName === e.target.name);
            if (index > -1) { // only splice array when item is found
                console.log(index);
                console.log(errors.splice(index, 1)); // 2nd parameter means remove one item only
                console.log(errors);
                setErrors(old => [...old.filter(c => c.controlName === e.target.name)]);
            }
        }
        // console.log(formData); 

        setFormData({
            ...formData,// clone form data and replace property with event origin
            [e.target.name]: e.target.value,
        });
        // console.log(formData);
    };

    const handleSelectChange = (event: any) => {
        const selectedOptionCode = event.target.value;
        console.log(event.target.name, selectedOptionCode);
        setTouchedFields(s => s.add(event.target.name));

        if (!isFullString(event.target.value)) {
            setTouchedFields(s => { s.delete(event.target.name); return s; });
        }
        setFormData({
            ...formData,// clone form data and replace property with event origin
            [event.target.name]: event.target.value,
        });
        // const selectedOptionCode: string = innerOptions.find(e=>e.code === code);
        // const selectedFilter: FilterFields | undefined = innerOptions.find(o => o.code === selectedOptionCode);
        // if (selectedFilter) {
        //     setSelected(selectedFilter.code);
        //     filterSelectedHandler(selectedFilter);
        // }
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {

        e.preventDefault();

        //console.log(formData);

        const userInput: Users_Insert_Input = {
            first_name: formData.first_name,
            last_name: formData.last_name,
            email: formData.email,
            password: formData.password,
            phone: formData.phone,
            gender_id: genders.find(g => g.code === formData.genderCode)?.id,
            role_id: userRoles.find(e => e.code === 'customer')?.id
        };

        registerUser({
            variables: {
                user: userInput
            }
        }).then(({ data, errors }) => {
            if (errors) {
                if (errors[0].message.includes('duplicate key')) {
                    setErrors(old => {
                        old.push({ controlName: 'email' });
                        return [...old];
                    });

                } else {
                    console.log(errors);
                    console.log('Show error toast');
                }
            } else {
                const user = data?.insert_users_one;
                if (!user) {
                    console.log('User wasn\'t created');
                    return;
                }
                console.log(data?.insert_users_one);
                console.log('Регистрацията премина успешно.');
                onLogin(user);
                setTimeout(() => {
                    navigate(buildUrl(userMenu[0].path));
                }, 1000);
                // navigate('/' + PathSegments.LOGIN); 
            }
        });
    };

    return (
        <Container maxWidth="md">
            <Box
                component={motion.div}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                sx={{ mt: 8 }}
            >
                <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        Регистрация
                    </Typography>

                    {/* <CustomerDetails mode="register" /> */}
                    <Grid
                        component="form"
                        container
                        autoComplete="off"
                        columns={{ xs: 1, md: 2, lg: 2 }}
                        columnSpacing={3}
                        rowGap={3}
                        onSubmit={handleSubmit} >

                        <Grid size={1}>
                            <TextInput
                                key='first_name'
                                value={formData['first_name']}
                                propName={'first_name'}
                                changeCallback={handleChange}
                                errors={errors}
                                label="Име" />
                        </Grid>

                        <Grid size={1}>
                            <TextInput
                                key='last_name'
                                value={formData.last_name}
                                changeCallback={handleChange}
                                errors={errors}
                                propName={'last_name'}
                                label="Фамилия" />
                        </Grid>

                        <Grid size={1}>
                            <FormControl sx={{ margin: '8px 0', width: '100%' }} variant="outlined">
                                <InputLabel htmlFor="email" error={errors.some(e => e.controlName === 'email')} >email</InputLabel>
                                <OutlinedInput
                                    id="email"
                                    label="email"
                                    name='email'
                                    type='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    error={errors.some(e => e.controlName === 'email')}
                                />
                            </FormControl>
                        </Grid>

                        <Grid size={1}>
                            <PasswordInput
                                key={'password'}
                                value={formData.password}
                                errors={errors}
                                changeCallback={handleChange}
                            />
                        </Grid>

                        <Grid size={1}>

                            <TextField
                                fullWidth
                                label="Phone"
                                name="phone"
                                type="text"
                                margin="normal"
                                value={formData.phone}
                                onChange={handleChange}
                                error={errors.some(e => e.controlName === 'phone')}
                                required
                                sx={{ margin: '8px 0', width: '100%' }}
                            />

                        </Grid>
                        <Grid size={1}>
                            <FormControl sx={{ margin: '8px 0', width: '100%' }} variant="outlined">
                                <InputLabel id="tableFilterOne">Gender</InputLabel>
                                <Select
                                    labelId="tableFilterOne"
                                    label="Gender"
                                    name="genderCode"
                                    value={formData.genderCode}
                                    onChange={handleSelectChange}
                                    sx={{ textAlign: 'start' }}
                                >
                                    {gendersOptions.map(element => <MenuItem
                                        value={element.code} key={element.id}>{element.name}
                                    </MenuItem>)}
                                </Select>
                                <FormHelperText>Select option</FormHelperText>
                            </FormControl>
                        </Grid>

                        <Grid size={{ xs: 3, md: 6, lg: 9 }} container justifyContent="flex-end" >
                            <Grid size={{ xs: 3, md: 3, lg: 2 }}   >
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    size="large"
                                    // disabled={
                                    //     (touchedFields.size === 0 || (touchedFields.size > 0 && errors.length > 0))
                                    //     || (touchedFields.size !== Object.keys(formData).length)

                                    // }
                                    sx={{ mt: 2, borderRadius: 2 }}
                                >
                                    Запази
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid container justifyContent="center" sx={{ mt: 2 }}>
                        <Grid size={"auto"}>
                            <Link
                                component="button"
                                variant="body2"
                                onClick={() => navigate('/' + PathSegments.LOGIN)}
                            >
                                Вече имате акунт? Вход
                            </Link>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </Container>
    );
}
