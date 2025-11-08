import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const menuHeight = 40;

export default function UserContextMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const openUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        console.log(event);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // const handleMenuClick = (value: string) => {
    //     console.log(value);
    // };

    return (
        <>
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
                onClose={handleClose}
                sx={[
                    { top: `${menuHeight}px` },
                ]}
            >
                <MenuItem sx={[{ height: `${menuHeight}px` }]} onClick={handleClose}>
                    <IconButton size="medium" color="inherit">
                        <AccountCircleIcon />
                    </IconButton>
                    <p>my account</p>
                </MenuItem>

                <MenuItem sx={[{ height: `${menuHeight}px` }]} onClick={handleClose}>
                    <IconButton size="medium" color="inherit">
                        <LogoutIcon />
                    </IconButton>
                    <p>logout</p>
                </MenuItem>
            </Menu>
        </>
    );
}