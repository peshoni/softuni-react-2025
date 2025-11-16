import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';

const menuHeight = 40;
export type ROW_ACTIONS = 'edit' | 'delete' | 'info';
export type RowContextFunctionType = (event: ROW_ACTIONS, id: string) => void;
export default function TableRowContextMenu({ id, callback }: { readonly id: string; readonly callback: RowContextFunctionType; }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const openContextMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (actionType?: ROW_ACTIONS) => {
    setAnchorEl(null);
    switch (actionType) {
      case 'edit':
        callback('edit', id);
        break;
      // case 'edit':
      //   navigate(buildUrl(PathSegments.USERS, PathSegments.DETAILS, id));
      //   break;
      default:

        break;
    }
  };

  return (
    <>
      <IconButton
        size="small"
        color="inherit"
        onClick={openContextMenu}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        id={'menu-' + id}
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
            <EditIcon />
          </IconButton>
          <p>редактирай</p>
        </MenuItem>

        {/* <MenuItem sx={[{ height: `${menuHeight}px` }]} onClick={() => handleClose('info')}>
          <IconButton size="medium" color="inherit">

          </IconButton>
          <p>преглед</p>
        </MenuItem> */}
      </Menu>
    </>
  );
}