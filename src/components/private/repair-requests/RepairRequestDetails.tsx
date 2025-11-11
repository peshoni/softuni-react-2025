// export default function RepairRequestDetails(){
//     return (
//         <div>
//             Repair request details
//         </div>
//     );
// }

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import type { Requests_Logs, UserFragment, Users } from '../../../../graphql/generated';
import { TextareaAutosize } from '@mui/material';
import Log from './Log';

export default function RepairRequestDetails() {
    const currentUserId = 'uuuy';
    const logs: Requests_Logs[] = [
        {
            id: 'asd',
            created_at: '',
            updated_at: '',
            editable: true,
            short_description: 'short note',
            long_description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate omnis corrupti quos, quisquam tempora mollitia iure repudiandae magnam! Magnam repellendus blanditiis saepe tempore dignissimos accusantium ad rerum atque cupiditate soluta?',
            repair_request_id: '11',
            created_by: 's',
            user: {} as any as Users

        },
        {
            id: 'uuuy',
            created_at: '',
            updated_at: '',
            editable: true,
            short_description: 'short note',
            long_description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate omnis corrupti quos, quisquam tempora mollitia iure repudiandae magnam! Magnam repellendus blanditiis saepe tempore dignissimos accusantium ad rerum atque cupiditate soluta?',
            repair_request_id: '11',
            created_by: 's',
            user: {} as any as Users

        }
    ];
    console.log(logs);

    return (

        <List sx={{ width: '100%', maxWidth: 1000, bgcolor: 'background.paper', border: '1px solid #bdbdbd' }}>
            {logs.map(l => <Log log={l} isFromCurrentUser={l.id === currentUserId} key={l.id} />)}
        </List>
    );
}