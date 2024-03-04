"use client";
import React, { useContext, useMemo } from "react";
import { EventCard } from "./EventCard";
import { Event } from "@/app/types/event";
import { SearchContext } from "../providers/searchContextProvider";

export default function EventsList( props : { events : Event[]}){
    const search = useContext(SearchContext);

    const filterEvents = useMemo(() => {
        if(props.events && search?.query && search.query != "" ){
            const finalQuery = search.query.toLowerCase();
            const finalResult = props.events.reduce((events : Event[], event : Event) => {
                if(event.name.toLowerCase().includes(finalQuery) || event.data.timezone.toLowerCase().includes(finalQuery)){
                    events.push(event);
                }
                return events;
            }, []);
            return finalResult
        } else {
            return props.events;
        }
    }, [search?.query]);

    return <div data-testid="events" className="grid grid-cols-4 gap-4">
                {filterEvents?.map(event => 
                    <EventCard key={event.id} event={event} />  
                )}
            </div>
}