import { useState } from 'react';


export default function usePersistedState(key, defaultValue) {
    const [state, setState] = useState(() => {
        const persistedValue = localStorage.getItem(key);

        if (persistedValue) {
            return JSON.parse(persistedValue);
        }

        return defaultValue;
    });

    const setPersistedState = (value) => {
        setState(value);

        let jsonValue;

        if (typeof(value) === 'function') {
            jsonValue = JSON.stringify(value(state));
        } 
        else {
            jsonValue = JSON.stringify(value);
        }

        localStorage.setItem(key, jsonValue);
    };

    return [
        state,
        setPersistedState
    ];
};