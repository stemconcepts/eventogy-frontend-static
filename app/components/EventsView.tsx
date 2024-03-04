import EventsList from "./EventsList";
import { Event } from "@/app/types/event";
import { useEffect, useState } from "react";

export default async function EventsView() {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        GetEvents();
    }, []);

    const GetEvents = async () => {
        const response = await fetch(`http://localhost:3000/api/events`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const result: Event[] = await response.json();
        setEvents(result)
    }

    return <main>
        <EventsList events={events} />
    </main>;
}