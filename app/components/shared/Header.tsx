"use client"
import React, { useContext } from "react";
import { Input } from "@/components/ui/input"
import { User } from "lucide-react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { SearchContext } from "@/app/providers/searchContextProvider";

export default function Header(props : { pageTitle : string }){

    const search = useContext(SearchContext);

    const handleSearch = (e : FormData) => {
        let value = e.get("searchEvent")?.toString();
        if(search){
            search.setQuery(value);
        }
    }

    return <header className="sm:mb-5" data-testid="header">
                <div className="px-3 sm:px-0 bg-gray-200 mx-auto">
                    <div className="container flex justify-between px-0 py-2 items-center">
                        <div>
                            Logo
                        </div>
                        <div className="w-1/2 rounded-full bg-white flex flex-row p-2">
                            <MagnifyingGlassIcon className="w-7 h-7 rounded-full" />
                            <form action={handleSearch} className="w-5/6 h-7">
                                <Input type="search"
                                    name="searchEvent"
                                    className="border-0 p-x-0 bg-transparent h-7"
                                    placeholder="Search Events, Attendess, Venues" />
                            </form>
                        </div>
                        <div>
                            <User className="bg-white rounded-full w-8 h-8 p-1" />
                        </div>
                    </div>
                </div>

                <div className="px-3 sm:px-0 bg-white mx-auto">
                    <div className="container px-0 py-4">
                        <h1>{props.pageTitle}</h1>
                    </div>
                </div>
            </header>
}