import { useState } from "react";

export default function useLocalStorage(key: string, initialValue: unknown): {
    value: unknown;
    setValue: React.Dispatch<React.SetStateAction<unknown>>;
} {
    const [value, setValue] = useState<unknown>(
        () => {
            try {
                // TODO:
                // Use map here, please!
                const item = globalThis.localStorage.getItem(key);
                return item ? JSON.parse(item) : initialValue;
            } catch (error) {
                console.log(error);
                return initialValue;
            }
        }

    );

    return { value, setValue };
}