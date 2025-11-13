import { useParams } from 'react-router';
import List from '@mui/material/List';
import type { Requests_Logs } from '../../../../graphql/generated';
import Log from './Log';

export default function RepairRequestDetails() {
    let { id } = useParams<{ id: string }>();
    // const loc = useLocation();
    console.log('RepairRequestDetails id=', id);

    const currentUserId = 'uuuy';
    const logs: Requests_Logs[] = [
        //         {
        //             id: 'asd',
        //             created_at: '',
        //             updated_at: '',
        //             author_role_id:'',
        //             // repair_request:{

        //             // } as any as Repair_RequestFragment,
        // user_role


        //             message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate omnis corrupti quos, quisquam tempora mollitia iure repudiandae magnam! Magnam repellendus blanditiis saepe tempore dignissimos accusantium ad rerum atque cupiditate soluta?',
        //             request_id: '11',
        //             author_id: 's',
        //             user: {} as any as Users

        //         },
        // {
        //     id: 'uuuy',
        //     created_at: '',
        //     updated_at: '',

        //     short_description: 'short note',
        //     long_description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate omnis corrupti quos, quisquam tempora mollitia iure repudiandae magnam! Magnam repellendus blanditiis saepe tempore dignissimos accusantium ad rerum atque cupiditate soluta?',
        //     repair_request_id: '11',
        //     created_by: 's',
        //     user: {} as any as Users

        // }
    ];
    console.log(logs);

    return (

        <List sx={{ width: '100%', maxWidth: 1000, bgcolor: 'background.paper', border: '1px solid #bdbdbd' }}>
            {logs.map(l => <Log log={l} isFromCurrentUser={l.id === currentUserId} key={l.id} />)}
        </List>
    );
}