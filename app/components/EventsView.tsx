"use server"
import EventsList from "./EventsList";
import { Event } from "@/app/types/event";

export default async function EventsView() {
    const response = await fetch(`http://localhost:3000/api/events`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const result: Event[] = await response.json();

    return <main>
        <EventsList events={result} />
    </main>;
}