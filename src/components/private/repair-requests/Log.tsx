import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography, TextareaAutosize, Divider } from "@mui/material";
import React from "react";
import type { Requests_Logs } from "../../../../graphql/generated";

export default function Log({ log, isFromCurrentUser }: { readonly log: Requests_Logs; readonly isFromCurrentUser: boolean; }) {
    // TODO reverse only the current user logs
    // TODO - set/use editable flag

    const editable = true;
    const rowDirection: string = isFromCurrentUser ? 'row-reverse' : 'row';
    return (
        <>
            <ListItem alignItems="flex-start" sx={{ display: 'flex', flexDirection: rowDirection }}>
                <ListItemAvatar sx={{display:'flex', justifyContent:'center'}}>
                    <Avatar alt={`${log.user.name}`} src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>

                <ListItemText
                    primary={log.short_description}
                    secondary={
                        <>
                            {editable ? (
                                <TextareaAutosize
                                    minRows={3}
                                    disabled={false}
                                    contentEditable={true}
                                    maxRows={10}
                                    defaultValue={log.long_description}
                                    style={{ width: '100%', maxWidth: '100%' }}
                                />
                            ) : (<Typography
                                component="span"
                                variant="body2"
                                sx={{ color: 'text.primary', display: 'inline' }}
                            >
                                {log.long_description}
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