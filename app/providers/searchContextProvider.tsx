"use client"
import { createContext, ReactNode, useState } from "react";

interface searchContextProp {
    query? : string;
    setQuery : (query : string | undefined) => void;
}

export const SearchContext = createContext<searchContextProp | null>(null);

export default function SearchContextProvider({children} : { children : ReactNode}){
    const [query, setQuery] = useState<string | undefined>(undefined);

    return <SearchContext.Provider value={{
        query : query,
        setQuery : (value : string | undefined) => setQuery(value)
    }}>
        {children}
    </SearchContext.Provider>
}