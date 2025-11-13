// ##################################
// const [open, setOpen] = useState(false);
// // let anchorRef = useRef<HTMLButtonElement>(null);

import { IconButton } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';

// const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
// const handleClose = (event: Event | React.SyntheticEvent) => {
//   // if (anchorEl?. .current?.contains(event.target as HTMLElement)) {
//   //   console.log('RETURN......');
//   //   return;
//   // }
//   // anchorEl?.current = null;
//   setOpen(false);
// };

// function handleListKeyDown(event: React.KeyboardEvent) {
//   if (event.key === 'Tab') {
//     event.preventDefault();
//     setOpen(false);
//   } else if (event.key === 'Escape') {
//     setOpen(false);
//   }
// }
// const handleToggle = () => {
//   setOpen((prevOpen) => !prevOpen);
// };
export default function RowContextMenu() {
  return (
    <div>
      <IconButton
        size="small"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        // onClick={handleToggle}
        color="inherit"

      // color="inherit"
      // onClick={handleDrawerOpen}
      // edge="start"
      // ref={anchorEl}
      // id="composition-button"
      // aria-controls={open ? 'composition-menu' : undefined}
      // aria-expanded={open ? 'true' : undefined}
      // aria-haspopup="true"
      // onClick={handleToggle}
      >
        <MoreVertIcon />
      </IconButton>
    </div>
    // <section>
    //     <hr />
    //     <h2>Child</h2>
    //     <p>{label}</p>

    //     <button onClick={handleClick.bind(null, 'child: ' + new Date().toISOString())}> Click</button>
    //     <hr />
    // </section>
  );
}
//   <IconButton
//                           size="small"
//                           aria-controls="menu-appbar"
//                           aria-haspopup="true"
//                           // onClick={handleToggle}
//                           color="inherit"

// color="inherit"
// onClick={handleDrawerOpen}
// edge="start"
// ref={anchorEl}
// id="composition-button"
// aria-controls={open ? 'composition-menu' : undefined}
// aria-expanded={open ? 'true' : undefined}
// aria-haspopup="true"
// onClick={handleToggle}
// >
{/* <MoreVertIcon />
                        </IconButton> */}

{/* <Menu
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
                            { top: `${40}px` },
                          ]}
                        >
                          <MenuItem sx={[{ height: `${40}px` }]} onClick={handleClose}>
                            <IconButton size="medium" color="inherit">
                        <AccountCircleIcon />
                    </IconButton>
                            <p>my account</p>
                          </MenuItem>

                          <MenuItem sx={[{ height: `${40}px` }]} onClick={handleClose}>
                            <IconButton size="medium" color="inherit">
                        <LogoutIcon />
                    </IconButton>
                            <p>logout</p>
                          </MenuItem>
                        </Menu> */}

{
                        /* <Menu
                          id="fade-menu"
                          slotProps={{
                            list: {
                              'aria-labelledby': 'fade-button',
                            },
                          }}
                          slots={{ transition: Fade }}
                          anchorEl={anchorRef.current}
                          open={open}
                          onClose={handleClose}
                        >
                          <MenuItem onClick={handleClose}>Profile</MenuItem>
                          <MenuItem onClick={handleClose}>My account</MenuItem>
                          <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu> */}

{/* <Popper
                          open={open}
                          anchorEl={anchorRef.current}
                          role={undefined}
                          placement="bottom-start"
                          transition
                          disablePortal
                        >
                          {({ TransitionProps, placement }) => (
                            <Grow
                              {...TransitionProps}
                              style={{
                                zIndex: 100,
                                transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
                              }}
                            >
                              <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                  <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                  >
                                    <MenuItem onClick={handleClose}>Edit</MenuItem>
                                    <MenuItem onClick={handleClose}>Delete</MenuItem>
                                    <MenuItem onClick={handleClose}>Preview</MenuItem>
                                  </MenuList>
                                </ClickAwayListener>
                              </Paper>
                            </Grow>
                          )}
                        </Popper> */}