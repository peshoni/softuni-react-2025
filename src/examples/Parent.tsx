import { useEffect, useState, type SetStateAction } from "react";
import Child from "./Child"; 


export default function Parent() {
    const [childEvent, setChildEvent] = useState('');
    const [childData, setChildData] = useState('Init label');

    const onChildEmit = (event: SetStateAction<string>) => {
        console.log('child->parent')
        setChildEvent(event);
    }

    const notifyChild = (event: SetStateAction<string>) => {
        console.log(' parent -> child')
        setChildData(event);
    }

    useEffect(() => {
        console.log('MOUNT...'); 
    }, []);

    useEffect(() => { //useless in  
        console.log('UPDATE...' + childData); 
    }, [childEvent]);

    useEffect(() => {
        return () => {
            console.log('UNMOUNT...');
            //globalThis.removeEventListener('keypress', keyPressHandler);
        };
    },[]);

 
    return (
        <section>
            <h2>Parent</h2>
            <p>Data from child:  { childEvent ? childEvent : 'empty'}</p>

            <button onClick={() => notifyChild('Set from parent: ' + new Date().toISOString())}> Modify child</button> 
            <Child label={childData} callback={onChildEmit} />
   
        </section>
    );
}