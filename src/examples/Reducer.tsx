import { useReducer } from "react";

function dataReducer(state: { id: number, name?: string }[], action: { type: any; payload: { id: number, name?: string } }) {
    switch (action.type) {
        case 'push':
            return state.concat([action.payload]);
        case 'pop':
            return [...state, action.payload];
        case 'delete':
            return state.filter((element: { id: number, name?: string }) => element.id !== action.payload.id);
        default:
            return state;
    }
}

export default function Redo() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [data, dispatch] = useReducer(dataReducer, [] as any[]);
    return (
        <>
            <h2>Reducer Example</h2>
            <button onClick={() => dispatch({ type: 'push', payload: { id: data.length + 1, name: `Item ${data.length + 1}` } })}>
                Push Item
            </button>
            <button onClick={() => dispatch({ type: 'pop', payload: data.pop() })} disabled={data.length === 0}>
                Pop Item
            </button>
            <button onClick={() => dispatch({ type: 'delete', payload: { id: data.length - 1 } })} disabled={data.length === 0}>
                Delete Last Item
            </button>
            <ul>
                {data.map((item: { id: number; name: string }) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </>
    );
}


//  export const [data, dispatch] = useReducer(dataReducer, []);