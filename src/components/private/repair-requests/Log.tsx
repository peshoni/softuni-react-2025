import './Log.css';
import { ListItemAvatar, Avatar, Typography, IconButton, useTheme, TextField, Box, Tooltip } from "@mui/material";
import type { Requests_Logs, Users } from "../../../../graphql/generated";
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState, type JSX } from "react";
import UpdateIcon from '@mui/icons-material/Update';
import { fromIsoDate } from "../../../utils/dateUtils";
import UndoIcon from '@mui/icons-material/Undo';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

export type COMMENT_ACTIONS = 'create' | 'delete' | 'update' | 'undo' | 'none';
/**
 * A component to display a single log entry in the repair requests section.
 * @param props { log: Requests_Logs; isFromCurrentUser: boolean }
 * @returns {JSX.Element}     
 */
export default function Log({ log, isFromCurrentUser, isPreview, callBack, isCreateMode = false }: {
    readonly log: Requests_Logs;
    readonly isFromCurrentUser: boolean;
    readonly isPreview: boolean;
    readonly isCreateMode?: boolean;
    readonly callBack: (action: COMMENT_ACTIONS, entity: Requests_Logs) => void;
}): JSX.Element {
    const theme = useTheme();
    const [message, setMessage] = useState<string>(log.message || '');
    const [updatedMessage, setUpdatedMessage] = useState<string>(log.message || '');
    // Controllers variables
    const rowDirection: string = isFromCurrentUser ? 'row-reverse' : 'row';
    const currentUserColor = isFromCurrentUser ? theme.palette.primary.main : theme.palette.grey[700];
    const undoDisabled: boolean = updatedMessage === log.message;
    const updateDisabled: boolean = updatedMessage === log.message;
    const deleteDisabled: boolean = message !== log.message;

    useEffect(() => {
        setMessage(log.message || '');
        setUpdatedMessage(log.message || '');
    }, [log.message]);

    /**
     * Handles actions performed on the log entry.
     * @param action {COMMENT_ACTIONS}  The action to perform (create, delete, update, undo, none).
     */
    const handleRowAction = (action: COMMENT_ACTIONS) => {
        if (action === 'undo') {
            // Reset message to original and do nothing else
            setMessage(log.message || '');
            setUpdatedMessage(log.message || '');
        } else if (action === 'update') {
            //Handle update action and notify parent 
            callBack('update', { ...log, message: updatedMessage });
        } else if (action === 'delete') {
            // Handle delete action 
            callBack('delete', { ...log });
        } else if (action === 'create') {
            // Handle create action 
            if (updatedMessage.trim().length === 0) {
                return;
            }
            callBack('create', { ...log, message: message });
        } else if (action === 'none') {
            // Handle none action - used to close the create log form without action
            callBack('none', { ...log });
        }
    };

    const handleMessageChange = (e: { target: { name: string; value: string; }; }) => {
        setMessage(e.target.value);
        setUpdatedMessage(e.target.value);
    };

    return (
        <>
            {isCreateMode &&
                <Box sx={{ display: 'flex', gap: 1, flexDirection: 'row', border: '1px solid lightGray', margin: "12px 0", padding: 1 }}>

                    <TextField
                        key={log.id}
                        style={{ width: '100%', maxWidth: '100%' }}
                        variant='outlined'
                        disabled={isPreview}
                        multiline
                        onChange={handleMessageChange}
                        // minRows={5}
                        value={message}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Tooltip title="Добави" disableInteractive>
                            <span>
                                <IconButton
                                    size="small"
                                    sx={{ color: theme.palette.primary.main }}
                                    disabled={updatedMessage.trim().length === 0}
                                    onClick={() => handleRowAction('create')}>
                                    <AddIcon />
                                </IconButton>
                            </span>
                        </Tooltip>
                        <Tooltip title="Затвори" disableInteractive>
                            <span>
                                <IconButton
                                    size="small"
                                    sx={{ color: theme.palette.warning.dark }}
                                    onClick={() => !undoDisabled && handleRowAction('none')}  >
                                    <CloseIcon />
                                </IconButton>
                            </span>
                        </Tooltip>
                    </Box>
                </Box>
            }

            {!isCreateMode &&
                <Box sx={{ display: 'flex', flexDirection: rowDirection, border: '1px solid lightGray', margin: 1, padding: 1 }}>

                    <ListItemAvatar sx={{ display: 'flex', alignItems: (isFromCurrentUser ? 'flex-end' : 'flex-start'), flexDirection: 'column' }}>
                        <Avatar alt={`${log.user.first_name}`} src="/static/images/avatar/2.jpg" sx={{ backgroundColor: currentUserColor }} />
                        {(isFromCurrentUser && !isPreview) &&
                            <>
                                <Tooltip title="Премахни промените" disableInteractive>
                                    <span>
                                        <IconButton
                                            size="small"
                                            disabled={undoDisabled}
                                            sx={{ color: theme.palette.primary.main }}
                                            onClick={() => !undoDisabled && handleRowAction('undo')}>
                                            <UndoIcon />
                                        </IconButton>
                                    </span>
                                </Tooltip>
                                <Tooltip title="Промени" disableInteractive>
                                    <span>
                                        <IconButton
                                            size="small"
                                            disabled={updateDisabled}
                                            sx={{ color: theme.palette.primary.main }}
                                            onClick={() => !updateDisabled && handleRowAction('update')}>
                                            <UpdateIcon />
                                        </IconButton>
                                    </span>
                                </Tooltip>
                                <Tooltip title="Изтрий" disableInteractive>
                                    <span>
                                        <IconButton
                                            size="small"
                                            sx={{ color: theme.palette.warning.light }}
                                            disabled={deleteDisabled}
                                            onClick={() => handleRowAction('delete')}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </span>
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

                        {isFromCurrentUser ? (
                            <TextField
                                key={log.id}
                                style={{ width: '100%', maxWidth: '100%' }}
                                variant='outlined'
                                disabled={isPreview}
                                multiline
                                onChange={handleMessageChange}
                                // minRows={5}
                                value={message}
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
            }
        </>
    );
}

function getUserPreview(user: Users) {
    return `${user.first_name} ${user.last_name} (${user.user_role.name})`;
}