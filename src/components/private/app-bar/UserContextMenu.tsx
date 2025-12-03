import React, { useContext } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Grid } from '@mui/material';
import { PathSegments } from '../../../routes/enums';
import { useNavigate } from 'react-router';
import { buildUrl } from '../../../routes/routes-util';
import UserContext from '../contexts/UserContext';

const menuHeight = 40;
type ACTIONS = 'logout' | 'edit';

export default function UserContextMenu() {
    const { userSettings, onLogout } = useContext(UserContext);
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const openUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (actionType?: ACTIONS) => {
        setAnchorEl(null);

        switch (actionType) {
            case 'logout':
                localStorage.clear();
                onLogout();
                navigate(buildUrl(PathSegments.LOGIN));
                break;
            case 'edit':
                if (userSettings?.user) {
                    navigate(buildUrl(PathSegments.CUSTOMERS, PathSegments.DETAILS, userSettings.user.id));
                }
                break;
            default:
                break;
        }
    };

    return (
        userSettings?.user && <>
            <Grid container rowSpacing={0} columnSpacing={0} columns={{ xs: 2, sm: 2, md: 2 }} sx={{ textAlign: 'right' }}>
                <Grid size={2} fontSize={18}>{userSettings.user?.first_name} {userSettings.user?.last_name}</Grid>
                <Grid size={2} fontSize={14}>({userSettings.user?.user_role.name})</Grid>
            </Grid>

            <IconButton
                size="large"
                onClick={openUserMenu}
                color="inherit"
            >
                <AccountCircleIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={() => handleClose()}
                sx={[
                    { top: `${menuHeight}px` },
                ]}
            >
                <MenuItem sx={[{ height: `${menuHeight}px` }]} onClick={() => handleClose('edit')}>
                    <IconButton size="medium" color="inherit">
                        <AccountCircleIcon />
                    </IconButton>
                    <p>моите данни</p>
                </MenuItem>

                <MenuItem sx={[{ height: `${menuHeight}px` }]} onClick={() => handleClose('logout')}>
                    <IconButton size="medium" color="inherit">
                        <LogoutIcon />
                    </IconButton>
                    <p>изход</p>
                </MenuItem>
            </Menu>
        </>
    );
}

