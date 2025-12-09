import { isNullOrUndefined } from "is-what";
import { useLocation, useNavigate, useParams } from "react-router";
import { useGetVehicleByIdLazyQuery, useInsertVehicleMutation, useUpdateVehicleMutation, type VehicleFragment, type Vehicles_Insert_Input } from "../../../../graphql/generated";
import DetailsHeader from "../common/forms/DetailsHeader";
import DatasourceEmptyResult from "../common/tables/DataSourceEmptyResult";
import { useContext, useEffect, useState } from "react";
import { Paper, Grid, FormControl, InputLabel, OutlinedInput, Select, MenuItem, FormHelperText, Button } from "@mui/material";
import type { FormControlError } from "../common/interfaces";
import TextInput from "../common/forms/TextInput";
import useEnums from "../hooks/useEnums";
import type { FilterFields } from "../common/tables/table-interfaces";
import UserContext from "../providers/UserContext";
import { useSnackbar } from "../providers/SnackbarContext";
import { buildUrl } from "../../../routes/routes-util";
import { PathSegments } from "../../../routes/enums";

//#region Form Types 
const omitVehicleProperties = ['id', 'created_at', 'updated_at', 'fuel_type', 'vehicle_status'] as const;
type FilteredProperties = Pick<VehicleFragment, typeof omitVehicleProperties[number]>;
type FormVehicleProps = Omit<VehicleFragment, keyof FilteredProperties> & { fuel: string; /*, status: string;*/ };
//#endregion Form Types

export default function VehicleDetails() {
    const parentSegment = PathSegments.VEHICLES;
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    const { fuelTypes /*, vehicleStatuses*/ } = useEnums();
    const { showSnackbar } = useSnackbar();
    const [id, setId] = useState(undefined);
    const [formData, setFormData] = useState<FormVehicleProps>({
        make: '',
        model: '',
        plate_number: '',
        vin: '',
        year: 1980,
        fuel: ''
    });
    /**
     * Retrieves the current user from the UserContext.
     */
    const { userSettings } = useContext(UserContext);

    const fuelTypesFilters: FilterFields[] = fuelTypes?.map(vs => ({ id: vs.id, name: vs.name, code: vs.code })) ?? [];
    // const vehicleStatusesFilters: FilterFields[] = vehicleStatuses?.map(vs => ({ id: vs.id, name: vs.name, code: vs.code })) ?? []; 

    const [errors, setErrors] = useState<FormControlError[]>([]);

    // GraphQL hooks
    const [getVehicle] = useGetVehicleByIdLazyQuery();
    const [insertVehicleMutation] = useInsertVehicleMutation();
    const [updateVehicleMutation] = useUpdateVehicleMutation();  

    const isFormDisabled = location.state?.action === 'preview';
    const isCreateMode = isNullOrUndefined(params) || isNullOrUndefined(params?.id);

    let vehicle: VehicleFragment | undefined | null;

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const fieldName = e.target.name;
        let fieldValue = e.target.value;
        if (fieldName === 'year') {
            fieldValue = Number(fieldValue);
            if ((fieldValue < 1980 || fieldValue > 2025) && !errors.some(c => c.controlName === fieldName)) {
                errors.push({ controlName: fieldName });
            } else if (fieldValue >= 1980 && fieldValue < 2025) {
                setErrors(err => err.filter(e => e.controlName !== fieldName));
            }
        } else {
            const index = errors.findIndex(c => c.controlName === fieldName);

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

        const input: Vehicles_Insert_Input = {
            make: formData.make,
            model: formData.model,
            plate_number: formData.plate_number,
            vin: formData.vin,
            year: formData.year,
            fuel_type_id: fuelTypes.find(t => t.code === formData.fuel)?.id,
            owner_id: userSettings?.user?.id
        };

        const awaitTime: number = 2000;
        if (id) {
            updateVehicleMutation({ variables: { id: id, input: input } })
                .then((_result) => {
                    showSnackbar('Промяната на данни беше успешна', 'success', awaitTime);
                    setTimeout(() => {
                        navigate(buildUrl(parentSegment));
                    }, awaitTime);
                }
                ).catch((err) => {
                    console.log(err);
                });
        } else {
            insertVehicleMutation({ variables: { vehicle: input } })
                .then((_result) => {
                    showSnackbar('Добавянето на ново превозно средство беше успешно', 'success', awaitTime);
                    setTimeout(() => {
                        navigate(buildUrl(parentSegment));
                    }, awaitTime);
                }
                ).catch((err) => {
                    console.log(err);
                });
        }
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

                setId(vehicle?.id);
                if (vehicle) {
                    setFormData(
                        {
                            year: vehicle.year,
                            make: vehicle.make,
                            model: vehicle.model,
                            plate_number: vehicle.plate_number,
                            vin: vehicle.vin,
                            fuel: vehicle.fuel_type?.code ?? ''
                        }
                    );
                }
            });
        }
    }, []);

    useEffect(() => {
        /**
         * Sets the allowed controls based on the user's role.
         */ 
        if (location.state?.action === 'preview' || isNullOrUndefined(location.state?.action)) {
            // DISABLE FORM 
        }
        switch (userSettings?.user?.user_role.code) {
            case 'customer':
                break;
            case 'serviceSpecialist':
                break;
            case 'autoMechanic':
                if (location.state?.action === 'preview' || isNullOrUndefined(location.state?.action)) {
                    // setIsFormDisabled(true);
                    // setIsLogsDisabled(true); 
                    // setIsAddLogEnabled(false); 
                }
                break;
            default:
                // setIsFormDisabled(true);
                break;
        } 
    }, [userSettings]);

    return (
        <>
            <DetailsHeader isCreateMode={isCreateMode} parentSegment={parentSegment} />

            {!formData && <DatasourceEmptyResult />}
            {formData &&
                <Paper elevation={1} sx={{ p: 4, borderRadius: 1, marginTop: 1 }}>
                    <Grid
                        component="form"
                        container
                        autoComplete="off"
                        columns={{ xs: 3, md: 6, lg: 9 }}
                        columnSpacing={2}
                        rowGap={1}
                        onSubmit={handleSubmit}>

                        <Grid size={3}>
                            <FormControl sx={{ margin: '8px 0', width: '100%' }} variant="outlined">

                                <InputLabel htmlFor="yearId" error={errors.some(e => e.controlName === 'year')} >Year</InputLabel>
                                <OutlinedInput
                                    id="yearId"
                                    name='year'
                                    type='number'
                                    inputProps={{ inputprops: { min: 1980, max: 2025 } }}
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
                                value={formData['plate_number'] ?? ''}
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
                                disabled={isFormDisabled || !isCreateMode}
                                changeCallback={handleChange}
                                errors={errors}
                                label="ВИН номер" />
                        </Grid>

                        <Grid size={3}>
                            <FormControl sx={{ margin: '8px 0', width: '100%' }} variant="outlined">
                                <InputLabel id="tableFilterOne">Гориво</InputLabel>
                                <Select
                                    labelId="tableFilterOne"
                                    label="fuel"
                                    name="fuel"
                                    disabled={isFormDisabled}
                                    value={formData.fuel}
                                    onChange={handleSelectChange}
                                    sx={{ textAlign: 'start' }}
                                >
                                    {fuelTypesFilters.map(element =>
                                        <MenuItem
                                            value={element.code} key={element.id}>{element.name}
                                        </MenuItem>
                                    )}
                                </Select>
                                <FormHelperText>Select option</FormHelperText>
                            </FormControl>
                        </Grid>

                        {/* Actions */}
                        <Grid size={{ xs: 3, md: 6, lg: 9 }} container justifyContent="flex-end" >
                            <Grid size={{ xs: 3, md: 3, lg: 2 }}>

                                {!isFormDisabled && <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    size="large"
                                    sx={{ mt: 2, borderRadius: 2 }}>
                                    Запази
                                </Button>
                                }
                                {isFormDisabled && <Button
                                    type="button"
                                    fullWidth
                                    variant="contained"
                                    size="large"
                                    sx={{ mt: 2, borderRadius: 2 }}
                                    onClick={() => navigate(buildUrl(parentSegment))}>
                                    Назад
                                </Button>
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            }
        </>
    );
}