import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState, type JSX } from "react";
import EditIcon from '@mui/icons-material/Edit';
import PreviewIcon from '@mui/icons-material/Preview';
import DeleteIcon from '@mui/icons-material/Delete';
import CarRepairIcon from '@mui/icons-material/CarRepair';

const menuHeight = 40;
export type ROW_ACTIONS = 'edit' | 'delete' | 'preview' | 'repair';
export type RowContextFunctionType = (event: ROW_ACTIONS, id: string) => void;

interface TableRowContext {
  id: string;
  allowedActions: ROW_ACTIONS[];
  callback: RowContextFunctionType;
}

export default function TableRowContextMenu({ id, allowedActions = ['preview'], callback }: Readonly<TableRowContext>) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const options: Map<ROW_ACTIONS, { label: string, icon: JSX.Element; }> =
    new Map([
      ['edit', { label: 'редакция', icon: <EditIcon /> }],
      ['preview', { label: 'преглед', icon: <PreviewIcon /> }],
      ['delete', { label: 'изтриване', icon: < DeleteIcon /> }],
      ['repair', { label: 'заяви ремонт', icon: < CarRepairIcon /> }]
    ]);

  const openContextMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (actionType?: ROW_ACTIONS) => {
    setAnchorEl(null);
    if (actionType) {
      callback(actionType, id);
    }
  };

  return (
    <>
      {
        allowedActions?.length > 0 &&
        <IconButton size="small" color="inherit" onClick={openContextMenu}>
          <MoreVertIcon />
        </IconButton>
      }
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
        {
          allowedActions.map(allowedAction =>
            <MenuItem sx={[{ height: `${menuHeight}px` }]} onClick={() => handleClose(allowedAction)} key={allowedAction}>
              <IconButton size="medium" color="inherit">
                {options.get(allowedAction)?.icon}
              </IconButton>
              <p>{options.get(allowedAction)?.label}</p>
            </MenuItem>
          )
        }
      </Menu>
    </>
  );
}