 
export function arrayReducer<T extends { id: string; }>(state: T[], action: { type: string; payload: T[]; }) { 
    switch (action.type) {
        case 'load':
            return [...action.payload];
        case 'push': 
            return state.concat(action.payload);
        case 'delete': 
            return state.filter((element: { id: string; }) => element.id !== action.payload?.[0].id);
        default:
            return state;
    }
} 
