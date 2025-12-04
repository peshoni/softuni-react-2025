import './Log.css';
import { ListItemAvatar, Avatar, Typography, IconButton, useTheme, TextField, Box, Tooltip } from "@mui/material";
import type { Requests_Logs, Users } from "../../../../graphql/generated";
import DeleteIcon from '@mui/icons-material/Delete';
import type { JSX } from "react";
import UpdateIcon from '@mui/icons-material/Update';
import { fromIsoDate } from "../../../utils/dateUtils";
/**
 * Stateless component to display a single log entry in the repair requests section.
 * @param props { log: Requests_Logs; isFromCurrentUser: boolean }
 * @returns {JSX.Element}     
 */
export default function Log({ log, isFromCurrentUser }: { readonly log: Requests_Logs; readonly isFromCurrentUser: boolean; }): JSX.Element {
    // TODO reverse only the current user logs
    // TODO - set/use editable flag

    const theme = useTheme();
    const editable = isFromCurrentUser;
    const rowDirection: string = isFromCurrentUser ? 'row-reverse' : 'row';
    const currentUserColor = isFromCurrentUser ? theme.palette.primary.main : theme.palette.grey[700];

    const handleRowAction = (action: string, id: string) => {
        console.log(`Action: ${action} on log id: ${log.id}`);
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: rowDirection, border: '1px solid lightGray', margin: 1, padding: 1 }}>
            <ListItemAvatar sx={{ display: 'flex', alignItems: (isFromCurrentUser ? 'flex-end' : 'flex-start'), flexDirection: 'column' }}>
                <Avatar alt={`${log.user.first_name}`} src="/static/images/avatar/2.jpg" sx={{ backgroundColor: currentUserColor }} />
                {isFromCurrentUser &&
                    <>
                        <Tooltip title="Промени" disableInteractive>
                            {/* disabled={true}  */}
                            <IconButton
                                size="small"
                                sx={{ color: theme.palette.primary.main }}
                                onClick={() => handleRowAction('update', log.id)}  >
                                <UpdateIcon />
                            </IconButton>
                        </Tooltip>
                        {/* <IconButton size="small" sx={{ color: theme.palette.primary.light }} ><EditIcon />  </IconButton> */}
                        <Tooltip title="Изтрий" disableInteractive>
                            <IconButton
                                size="small"
                                sx={{ color: theme.palette.warning.light }}
                                onClick={() => handleRowAction('update', log.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                    </>
                }
            </ListItemAvatar>

            <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column', width: '100%' }}>
                <Typography sx={{ color: currentUserColor, fontWeight: '700', fontSize: '18px', textAlign: isFromCurrentUser ? 'right' : 'left', borderBottom: '1px solid lightGray' }} >
                    {getUserPreview(log.user)}
                </ Typography>
                <Typography className={"created-at " + (isFromCurrentUser ? 'right' : 'left')} sx={{ color: currentUserColor }}>
                    {log.created_at && <span>създаден: {fromIsoDate(log.created_at)}</span>}
                    {log.updated_at && <span>променен: {fromIsoDate(log.updated_at)}</span>}
                </ Typography>

                {editable ? (
                    <TextField
                        key={log.id}
                        style={{ width: '100%', maxWidth: '100%' }}
                        variant='outlined'
                        disabled={!isFromCurrentUser}
                        multiline
                        // onChange={handleChange} 
                        // minRows={5}
                        defaultValue={log.message}
                    />

                ) : (<Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary.dark', fontSize: 18, textAlign: isFromCurrentUser ? 'right' : 'left' }}
                >
                    {log.message}
                </Typography>)}
            </Box>

            <ListItemAvatar>
                {/* Placeholder */}
            </ListItemAvatar>
        </Box>
    );
}

function getUserPreview(user: Users) {
    return `${user.first_name} ${user.last_name} (${user.user_role.name})`;
}