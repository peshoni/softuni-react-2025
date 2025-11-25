import { useParams } from "react-router";
import { useGetEnumsQuery, useGetUserByIdLazyQuery, type Edit_UserFragment, type GenderFragment, type GetEnumsQuery, type RoleFragment, type Vehicle_StatusFragment } from "../../../../graphql/generated";
import DatasourceEmptyResult from "../common/tables/DataSourceEmptyResult";
import { isNullOrUndefined } from "is-what";
import DetailsHeader from "../common/forms/DetailsHeader";
import { useEffect, useState } from "react";
import { Box, Paper, TextField, Button, FormControl, OutlinedInput, InputLabel, Grid, Select, MenuItem, FormHelperText } from "@mui/material";
import { motion } from "framer-motion";
import PasswordInput from "../common/forms/PasswordInput";
import type { FormControlError } from "../../public/LoginForm";
import type { FilterFields } from "../common/tables/table-interfaces";

//#region Form Types 
const omitUserProperties = ['id', 'created_at', 'updated_at', 'gender', 'user_role'] as const;
type FilteredUserProperties = Pick<Edit_UserFragment, typeof omitUserProperties[number]>;
type FormUserProps = Omit<Edit_UserFragment, keyof FilteredUserProperties> & { role: string, genderCode: string; };
//#endregion Form Types
export default function CustomerDetails() {
    const [errors /*, setErrors*/] = useState<FormControlError[]>([]);
    const params = useParams();
    const isCreateMode = isNullOrUndefined(params?.id);
    let user: Edit_UserFragment | undefined | null;

    const getEnums = useGetEnumsQuery();
    let genders: GenderFragment[] = [];
    let userRoles: RoleFragment[] = [];
    // let vehicleStatuses: Vehicle_StatusFragment[] = [];
    if (getEnums.data) {
        // vehicleStatuses = getEnums.data.vehicle_statuses;
        userRoles = getEnums.data.user_roles;
        genders = getEnums.data.genders;
    }

    let gendersOptions: FilterFields[] = Object.values(genders.map(e => ({ id: e.id, code: e.code, name: e.name })));
    let rolesOptions: FilterFields[] = Object.values(userRoles.map(e => ({ id: e.id, code: e.code, name: e.name })));

    const [formData, setFormData] = useState<FormUserProps>({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        phone: '',
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
        //   setErrors([{ controlName: 'confirmPassword', message: 'Passwords do not match' }]);
        //   return;
        // }
        // Simulate login/register action
        alert('Submit');
    };

    const handleSelectChange = (event: any) => {
        const selectedOptionCode = event.target.value;
        console.log(event.target.name, selectedOptionCode);

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

    const [performGetUser, { }] = useGetUserByIdLazyQuery();

    useEffect(() => {
        if (!isCreateMode) {
            performGetUser({ variables: { id: params.id } }).then(({ data }) => {
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
                    });
                }
            });
        }
    }, []);

    useEffect(() => {
        console.log(genders, userRoles);

    }, [genders, userRoles]);

    useEffect(() => {
        // Create a new AbortController when the component mounts
        // abortControllerRef.current = new AbortController();
        // Return a cleanup function to abort the request when the component unmounts 

        return () => {
            console.log('UNLOAD');
            // abortControllerRef.current?.abort();
        };
    }, []);

    return (
        <>
            <DetailsHeader isCreateMode={isCreateMode} />

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
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    error={errors.some(e => e.controlName === 'email')}
                                    label="Email"
                                />
                            </FormControl>
                        </Grid>

                        <Grid size={3}>
                            <PasswordInput
                                key={'password'}
                                value={formData.password}
                                errors={errors}
                                changeCallback={handleChange}
                            />
                        </Grid>

                        <Grid size={3}>
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

                        <Grid size={3}>
                            <TextField
                                fullWidth
                                label="Last name"
                                name="last_name"
                                type="text"
                                margin="normal"
                                value={formData.last_name}
                                onChange={handleChange}
                                required
                                sx={{ margin: '8px 0', width: '100%' }}
                            />
                        </Grid>

                        <Grid size={3}>
                            <TextField
                                fullWidth
                                label="Phone"
                                name="phone"
                                type="text"
                                margin="normal"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                sx={{ margin: '8px 0', width: '100%' }}
                            />
                        </Grid>
                        <Grid size={3}>
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

                        <Grid size={3}>
                            <FormControl sx={{ margin: '8px 0', width: '100%' }} variant="outlined">
                                <InputLabel id="tableFilterOne">Role</InputLabel>
                                <Select
                                    labelId="roleSelect"
                                    label="Role"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleSelectChange}
                                    sx={{ textAlign: 'start' }}
                                >
                                    {rolesOptions.map(element => <MenuItem
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
                                    sx={{ mt: 2, borderRadius: 2 }}
                                >
                                    Запази
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
            }
        </>
    );
}