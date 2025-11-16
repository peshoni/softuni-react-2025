import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import type { UserFragment } from '../../../graphql/generated';
import { Grid } from '@mui/material';
import { PathSegments } from '../../routes/enums';
import { useNavigate } from 'react-router';
import { buildUrl } from '../../routes/routes-util';

const menuHeight = 40;
type ACTIONS = 'logout' | 'edit';
// export type UnMutable<T> = {
//   readonly [K in keyof T]: T[K];
// };
export default function UserContextMenu({ id, first_name, last_name, user_role }: UserFragment) {

    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const openUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        console.log(event);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (actionType?: ACTIONS) => {
        setAnchorEl(null);
        switch (actionType) {
            case 'logout':
                navigate(buildUrl(PathSegments.LOGIN));
                break;
            case 'edit':
                navigate(buildUrl(PathSegments.USERS, PathSegments.DETAILS, id));
                break;
            default:
                break;
        }
    };

    return (
        <>
            <Grid container rowSpacing={0} columnSpacing={0} columns={{ xs: 2, sm: 2, md: 2 }}>
                <Grid size={1} fontSize={18}>{first_name}</Grid>
                <Grid size={1} fontSize={18}>{last_name}</Grid>
                <Grid size={2}>({user_role.name})</Grid>
            </Grid>

            <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
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

