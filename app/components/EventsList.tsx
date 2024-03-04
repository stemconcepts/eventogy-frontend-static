"use client";
import React, { useContext, useMemo } from "react";
import { EventCard } from "./EventCard";
import { Event } from "@/app/types/event";
import { SearchContext } from "../providers/searchContextProvider";

// Logic gets next date - added in error
    const LatestDate = (dates : Date[]) => {
        const orderedDates = dates.sort((a,b) => new Date(a).getTime() - new Date(b).getTime());
        return new Date(orderedDates[0]);
    };

export default function EventsList( props : { events : Event[]}){
    const search = useContext(SearchContext);

    const filterEvents = useMemo(() => {
        const orderedResult = props.events.sort((a,b) => LatestDate(a.data.scheduled_dates).getTime() - LatestDate(b.data.scheduled_dates).getTime());

        if(search?.query && search.query != "" ){
            const finalQuery = search.query.toLowerCase();
            const finalResult = orderedResult.reduce((events : Event[], event : Event) => {
                if(event.name.toLowerCase().includes(finalQuery) || event.data.timezone.toLowerCase().includes(finalQuery)){
                    events.push(event);
                }
                return events;
            }, []);
            return finalResult
        } else {
            return orderedResult;
        }
    }, [search?.query, props.events]);

    return <div data-testid="events" className="grid grid-cols-4 gap-4">
                {filterEvents?.map(event => 
                    <EventCard key={event.id} event={event} />  
                )}
            </div>
}