import { type SetStateAction } from "react";

export default function Child({ label, callback }
    : { readonly label: string; readonly callback: (event: SetStateAction<string>) => void; }) {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClick = (event: any) => {
        console.log('Child button clicked');
        callback?.(event); // Optionally call parent's onClick handler if provided
    };

    return (
        <section>
            <hr />
            <h2>Child</h2>
            <p>{label}</p>

            <button onClick={handleClick.bind(null, 'child: ' + new Date().toISOString())}> Click</button>
            <hr />
        </section>
    );
}