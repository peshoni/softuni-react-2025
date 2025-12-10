import { useLocation, useNavigate, useParams } from "react-router";
import { useGetUserByIdLazyQuery, useUpdateUserMutation, type UserFragment, type Users_Set_Input } from "../../../../graphql/generated";
import DatasourceEmptyResult from "../common/tables/DataSourceEmptyResult";
import DetailsHeader from "../common/forms/DetailsHeader";
import { useEffect, useState } from "react";
import { Box, Paper, TextField, Button, FormControl, OutlinedInput, InputLabel, Grid, Select, MenuItem, FormHelperText } from "@mui/material";
import { motion } from "framer-motion";
import type { FilterFields } from "../common/tables/table-interfaces";
import useEnums from "../hooks/useEnums";
import type { FormControlError } from "../common/interfaces";
import { PathSegments } from "../../../routes/enums";
import { useSnackbar } from "../providers/SnackbarContext";
import { buildUrl } from "../../../routes/routes-util";

//#region Form Types 
const omitUserProperties = ['id', 'created_at', 'updated_at', 'gender', 'user_role'] as const;
type FilteredUserProperties = Pick<UserFragment, typeof omitUserProperties[number]>;
type FormUserProps = Omit<UserFragment, keyof FilteredUserProperties> & { role: string, genderCode: string; };
//#endregion Form Types
export default function CustomerDetails() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { id: userId } = useParams();
    const action = state?.action;
    const [isPreview] = useState(action === 'preview');
    const { genders, userRoles, } = useEnums();
    const [errors, setErrors] = useState<FormControlError[]>([]);
    const { showSnackbar } = useSnackbar();

    //Graphql hooks
    const [updateUser] = useUpdateUserMutation();

    let user: UserFragment | undefined | null;
    const phoneRegexp: RegExp = /\+359[1-9]{3}\d{6}$/; // simple validation for the BG gsm numbers

    let gendersOptions: FilterFields[] = Object.values(genders.map(e => ({ id: e.id, code: e.code, name: e.name })));
    let rolesOptions: FilterFields[] = Object.values(userRoles.map(e => ({ id: e.id, code: e.code, name: e.name })));

    const [formData, setFormData] = useState<FormUserProps>({
        first_name: '',
        last_name: '',
        email: '',
        phone: '', // \+359[1-9]{3}\d{6}
        role: '',
        genderCode: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        if (e.target.name === 'phone' && !phoneRegexp.test(e.target.value)) {
            if (!errors.some(c => c.controlName === e.target.name)) {
                errors.push({ controlName: e.target.name });
            }
        } else {
            const index = errors.findIndex(c => c.controlName === e.target.name);
            if (index > -1) {
                setErrors(old => old.filter(c => c.controlName === e.target.name));
            }
        }

        setFormData({
            ...formData,// clone form data and replace property with event origin
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const input: Users_Set_Input = {
            first_name: formData.first_name,
            last_name: formData.last_name,
            phone: formData.phone
        };

        updateUser({ variables: { id: userId, input } })
            .then(({ errors }) => {
                if (!errors) {
                    const timeout = 2000;
                    showSnackbar('Добавянето е успешно', 'success', timeout);
                    setTimeout(() => {
                        navigate(buildUrl(PathSegments.CUSTOMERS));
                    }, timeout);
                }
            }).catch(() => {
                showSnackbar('Възникна грешка', 'error', 2000);
            });
    };

    const [performGetUser /*,{data,loading }*/] = useGetUserByIdLazyQuery();

    useEffect(() => {
        if (userId) {
            performGetUser({ variables: { id: userId } }).then(({ data }) => {
                user = data?.users_by_pk;
                if (user) {
                    setFormData({
                        first_name: user.first_name,
                        last_name: user.last_name,
                        role: user.user_role.code,
                        genderCode: user.gender.code,
                        email: user.email,
                        phone: user.phone,
                    });
                }
            });
        }

        return () => { //on destroy
        };
    }, []);

    return (
        <>
            <DetailsHeader mode={action} parentSegment={PathSegments.CUSTOMERS} />

            {!formData && <DatasourceEmptyResult />}

            {formData && <Box
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
                        columns={{ xs: 3, md: 6, lg: 9 }}
                        columnSpacing={2}
                        rowGap={1}
                        onSubmit={handleSubmit} >

                        {/* <Box component="form" onSubmit={handleSubmit} autoComplete="off"> */}

                        <Grid size={3}>
                            <FormControl sx={{ margin: '8px 0', width: '100%' }} variant="outlined">
                                <InputLabel htmlFor="email" error={errors.some(e => e.controlName === 'email')} >Email</InputLabel>
                                <OutlinedInput
                                    id="email"
                                    name='email'
                                    type='email'
                                    disabled={true}
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    error={errors.some(e => e.controlName === 'email')}
                                    label="Email"
                                />
                            </FormControl>
                        </Grid>

                        <Grid size={3}>
                            <TextField
                                fullWidth
                                label="Име"
                                name="first_name"
                                type="text"
                                margin="normal"
                                disabled={isPreview}
                                value={formData.first_name}
                                onChange={handleChange}
                                required
                                sx={{ margin: '8px 0', width: '100%' }}
                            />
                        </Grid>

                        <Grid size={3}>
                            <TextField
                                fullWidth
                                label="фамилия"
                                name="last_name"
                                type="text"
                                margin="normal"
                                disabled={isPreview}
                                value={formData.last_name}
                                onChange={handleChange}
                                required
                                sx={{ margin: '8px 0', width: '100%' }}
                            />
                        </Grid>

                        <Grid size={3}>
                            <TextField
                                fullWidth
                                label="Телефон"
                                name="phone"
                                type="text"
                                margin="normal"
                                disabled={isPreview}
                                value={formData.phone}
                                onChange={handleChange}
                                error={errors.some(e => e.controlName === 'phone')}
                                required
                                sx={{ margin: '8px 0', width: '100%' }}
                            />
                        </Grid>
                        <Grid size={3}>
                            <FormControl sx={{ margin: '8px 0', width: '100%' }} variant="outlined">
                                <InputLabel id="tableFilterOne">Пол</InputLabel>
                                <Select
                                    labelId="tableFilterOne"
                                    label="Пол"
                                    name="genderCode"
                                    disabled={true}
                                    value={formData.genderCode}
                                    sx={{ textAlign: 'start' }}
                                >
                                    {gendersOptions.map(element => <MenuItem
                                        value={element.code} key={element.id}>{element.name}
                                    </MenuItem>)}
                                </Select>
                                {!isPreview && <FormHelperText> {userId ? 'Избери пол' : ''}</FormHelperText>}
                            </FormControl>
                        </Grid>

                        <Grid size={3}>
                            <FormControl sx={{ margin: '8px 0', width: '100%' }} variant="outlined">
                                <InputLabel id="tableFilterOne">Роля</InputLabel>
                                <Select
                                    labelId="roleSelect"
                                    label="Роля"
                                    name="role"
                                    disabled={true}
                                    value={formData.role}
                                    sx={{ textAlign: 'start' }}
                                >
                                    {rolesOptions.map(element => <MenuItem
                                        value={element.code} key={element.id}>{element.name}
                                    </MenuItem>)}
                                </Select>
                                {!isPreview && <FormHelperText> {userId ? 'Избери роля' : ''}</FormHelperText>}
                            </FormControl>
                        </Grid>


                        <Grid size={{ xs: 3, md: 6, lg: 9 }} container justifyContent="flex-end" >
                            <Grid size={{ xs: 3, md: 3, lg: 2 }}   >
                                {!isPreview && userId && <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    size="large"
                                    sx={{ mt: 2, borderRadius: 2 }}
                                >
                                    Промени
                                </Button>
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
            }
        </>
    );
}