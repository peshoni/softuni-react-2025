import { isNullOrUndefined } from "is-what";
import { useLocation, useParams } from "react-router";
import { useGetVehicleByIdLazyQuery, type VehicleFragment } from "../../../../graphql/generated";
import DetailsHeader from "../common/forms/DetailsHeader";
import DatasourceEmptyResult from "../common/tables/DataSourceEmptyResult";
import { useEffect, useState } from "react";
import { Paper, Grid, FormControl, InputLabel, OutlinedInput, Select, MenuItem, FormHelperText, Button } from "@mui/material";
import type { FormControlError } from "../common/interfaces";
import TextInput from "../common/forms/TextInput";
import useEnums from "../hooks/useEnums";
import type { FilterFields } from "../common/tables/table-interfaces";

//#region Form Types 
const omitVehicleProperties = ['id', 'created_at', 'updated_at', 'fuel_type', 'vehicle_status'] as const;
type FilteredProperties = Pick<VehicleFragment, typeof omitVehicleProperties[number]>;
type FormVehicleProps = Omit<VehicleFragment, keyof FilteredProperties> & { fuel: string, status: string; };
//#endregion Form Types

export default function VehicleDetails() {
    const { fuelTypes, vehicleStatuses } = useEnums();
    const location = useLocation();
    console.log(location.state);

    const isFormDisabled = location.state?.action === 'preview';

    const fuelTypesFilters: FilterFields[] = fuelTypes?.map(vs => ({ id: vs.id, name: vs.name, code: vs.code })) ?? [];
    const vehicleStatusesFilters: FilterFields[] = vehicleStatuses?.map(vs => ({ id: vs.id, name: vs.name, code: vs.code })) ?? [];

    const [errors, setErrors] = useState<FormControlError[]>([]);
    const [getVehicle] = useGetVehicleByIdLazyQuery();
    // const aaaaa = useGetVehicleByIdSuspenseQuery
    const params = useParams();

    // console.log('------------------------------------------------'); 
    // const user: object = memoryService.get(MemoryKeys.USER);
    // console.log(user);

    const [formData, setFormData] = useState<FormVehicleProps>({
        make: '',
        model: '',
        plate_number: '',
        vin: '',
        year: 0,
        fuel: '',
        status: ''
    });

    const isCreateMode = isNullOrUndefined(params?.id);
    let vehicle: VehicleFragment | undefined | null;

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        console.log([e.target.name], e.target.value);

        const fieldName = e.target.name;
        let fieldValue = e.target.value;
        if (fieldName === 'year') {


            console.log(fieldValue);
            // console.log('INVALID NUMBER : ' + e.target.value)
            if (!errors.some(c => c.controlName === fieldName)) {

                errors.push({ controlName: fieldName });
            }
        } else {
            const index = errors.findIndex(c => c.controlName === fieldName);
            console.log(index);
            if (index > -1) { // only splice array when item is found

                console.log(errors.splice(index, 1)); // 2nd parameter means remove one item only
                console.log(errors);
                setErrors(old => old.filter(c => c.controlName === fieldName));
            }
        }

        setFormData({
            ...formData,// clone form data and replace property with event origin
            [fieldName]: e.target.value,
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

    useEffect(() => {
        if (!isCreateMode) {
            getVehicle({ variables: { id: params.id } }).then(({ data }) => {
                vehicle = data?.vehicles_by_pk;
                if (vehicle) {
                    console.log(vehicle);
                    setFormData(
                        {
                            year: vehicle.year,
                            make: vehicle.make,
                            model: vehicle.model,
                            plate_number: vehicle.plate_number,
                            vin: vehicle.vin,
                            status: vehicle.vehicle_status?.code ?? '',
                            fuel: vehicle.fuel_type?.code ?? ''
                        }
                    );
                }
            }
            );
            // vehicle = useGetVehicleByIdQuery({ variables: { id: params.id } }).data?.vehicles_by_pk;
        }
    }, []);

    return (
        <>
            <DetailsHeader isCreateMode={isCreateMode} />
            {!formData && <DatasourceEmptyResult />}
            {formData &&
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

                                <InputLabel htmlFor="yearId" error={errors.some(e => e.controlName === 'year')} >Year</InputLabel>
                                <OutlinedInput
                                    id="yearId"
                                    name='year'
                                    type='number'
                                    label='Year'
                                    disabled={isFormDisabled}
                                    value={formData.year}
                                    onChange={handleChange}
                                    required
                                    error={errors.some(e => e.controlName === 'year')}
                                />
                            </FormControl>
                        </Grid>

                        <Grid size={3}>
                            <TextInput
                                key='make'
                                value={formData['make']}
                                propName={'make'}
                                disabled={isFormDisabled}
                                changeCallback={handleChange}
                                errors={errors}
                                label="Производител" />
                        </Grid>

                        <Grid size={3}>
                            <TextInput
                                key='model'
                                value={formData['model']}
                                propName={'model'}
                                disabled={isFormDisabled}
                                changeCallback={handleChange}
                                errors={errors}
                                label="Модел" />
                        </Grid>


                        <Grid size={3}>
                            <TextInput
                                key='plate_number'
                                value={formData['plate_number']}
                                propName={'plate_number'}
                                changeCallback={handleChange}
                                disabled={isFormDisabled}
                                errors={errors}
                                label="Регистрационен номер" />
                        </Grid>
                        <Grid size={3}>
                            <TextInput
                                key='vin'
                                value={formData['vin']}
                                propName={'vin'}
                                disabled={isFormDisabled}
                                changeCallback={handleChange}
                                errors={errors}
                                label="vin" />
                        </Grid>

                        <Grid size={3}>
                            <FormControl sx={{ margin: '8px 0', width: '100%' }} variant="outlined">
                                <InputLabel id="tableFilterOne">fuel</InputLabel>
                                <Select
                                    labelId="tableFilterOne"
                                    label="fuel"
                                    name="fuel"

                                    disabled={isFormDisabled}
                                    value={formData.fuel}
                                    onChange={handleSelectChange}
                                    sx={{ textAlign: 'start' }}
                                >
                                    {fuelTypesFilters.map(element => <MenuItem
                                        value={element.code} key={element.id}>{element.name}
                                    </MenuItem>)}
                                </Select>
                                <FormHelperText>Select option</FormHelperText>
                            </FormControl>
                        </Grid>

                        <Grid size={3}>
                            <FormControl sx={{ margin: '8px 0', width: '100%' }} variant="outlined">
                                <InputLabel id="tableFilterOne">status</InputLabel>
                                <Select
                                    labelId="roleSelect"
                                    label="status"
                                    name="status"
                                    disabled={isFormDisabled}
                                    value={formData.status}
                                    onChange={handleSelectChange}
                                    sx={{ textAlign: 'start' }}
                                >
                                    {vehicleStatusesFilters.map(element => <MenuItem
                                        value={element.code} key={element.id}>{element.name}
                                    </MenuItem>)}
                                </Select>
                                <FormHelperText>Select option</FormHelperText>
                            </FormControl>
                        </Grid>


                        <Grid size={{ xs: 3, md: 6, lg: 9 }} container justifyContent="flex-end" >
                            <Grid size={{ xs: 3, md: 3, lg: 2 }}>

                                {!isFormDisabled &&
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        size="large"
                                        sx={{ mt: 2, borderRadius: 2 }}
                                    >
                                        Запази
                                    </Button>
                                }
                                {isFormDisabled &&
                                    <Button
                                        type="button"
                                        fullWidth
                                        variant="contained"
                                        size="large"
                                        sx={{ mt: 2, borderRadius: 2 }}
                                        onClick={() => history.back()}
                                    >
                                        Назад
                                    </Button>
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            }
        </>
    )
}