import { EventInfo } from "./eventInfo";

export interface Event {
    id: string,
    name: string,
    slug: string,
    data: EventInfo
}