import { useMemo } from "react";
import Image from 'next/image'
import { Event } from "../types/event";
import {
    Card,
    CardContent,
    CardFooter,
  } from "@/components/ui/card"
import { Star } from "lucide-react";
import gig from "@/app/images/gig.jpg";

export const EventCard = (props : { event : Event }) => {

    /* Logic gets next date - added in error
    const latestDateMemo = useMemo(() => {
        const orderedDates = [...props.event.data.scheduled_dates]
            .sort((a,b) => new Date(a).getTime() - new Date(b).getTime());
        return new Date(orderedDates[0]).toDateString();
    }, [props.event.data.scheduled_dates]);*/

    const orderedDates = useMemo(() => {
        const orderedDates = [...props.event.data.scheduled_dates]
            .sort((a,b) => new Date(a).getTime() - new Date(b).getTime());
        return orderedDates;
    }, [props.event.data.scheduled_dates]);

    return <Card className="p-4 col-span-4 sm:col-span-1" data-testid="eventItem">
                <CardContent className="p-0">
                    <Image className="rounded-md mb-3" src={gig} alt={props.event.slug} />
                    <p>{props.event.name}</p>
                    {orderedDates.map((date,i) => <p key={i}>{new Date(date).toDateString()}</p>)}
                    <p className="py-3"><strong>{props.event.data.timezone}</strong></p>
                </CardContent>
                <CardFooter className="px-0 py-3">
                    <Star className="w-5 h-5" />
                </CardFooter>
            </Card>
}