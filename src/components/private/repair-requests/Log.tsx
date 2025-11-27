import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography, TextareaAutosize, Divider, IconButton, useTheme } from "@mui/material";
import type { Requests_Logs, Users } from "../../../../graphql/generated";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
export default function Log({ log, isFromCurrentUser }: { readonly log: Requests_Logs; readonly isFromCurrentUser: boolean; }) {
    // TODO reverse only the current user logs
    // TODO - set/use editable flag

    const theme = useTheme();

    const editable = true;
    const rowDirection: string = isFromCurrentUser ? 'row-reverse' : 'row';
    const currentUserColor = isFromCurrentUser ? theme.palette.primary.main : theme.palette.grey[700];
    return (
        <>
            <ListItem alignItems="flex-start" sx={{ display: 'flex', gap: 1, flexDirection: rowDirection }}>

                <ListItemAvatar sx={{ display: 'flex', alignItems: (isFromCurrentUser ? 'flex-end' : 'flex-start'), flexDirection: 'column' }}>

                    <Avatar alt={`${log.user.first_name}`} src="/static/images/avatar/2.jpg" sx={{ backgroundColor: currentUserColor }} />

                    {isFromCurrentUser &&
                        <>
                            <IconButton size="small" sx={{ color: theme.palette.primary.light }}  ><EditIcon />  </IconButton>
                            <IconButton size="small" sx={{ color: theme.palette.warning.light }} ><DeleteIcon />  </IconButton>
                        </>
                    }
                </ListItemAvatar>

                <ListItemText
                    primary={(<Typography sx={{ color: currentUserColor, fontWeight: '700', fontSize: '18px' }} >
                        {getUserPreview(log.user)}
                    </ Typography>)}
                    secondary={
                        <>
                            {editable ? (
                                <TextareaAutosize
                                    minRows={3}
                                    disabled={false}
                                    contentEditable={true}
                                    maxRows={10}
                                    defaultValue={log.message}
                                    style={{ width: '100%', maxWidth: '100%' }}
                                />
                            ) : (<Typography
                                component="span"
                                variant="body2"
                                sx={{ color: 'text.primary', display: 'inline' }}
                            >
                                {log.message}
                            </Typography>)}
                        </>
                    }
                />

                <ListItemAvatar>
                    {/* Placeholder */}
                </ListItemAvatar>
            </ListItem>
            <Divider variant="middle" component="li" />
        </>
    );
}

function getUserPreview(user: Users) {
    return `${user.first_name} ${user.last_name} (${user.user_role.name})`;
}