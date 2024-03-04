"use server"
import { Event } from "@/app/types/event"
import { NextResponse } from "next/server";
import EventogyResponse from "../../types/eventogyResponse";

const apiUrl = process.env.API_URL || "https://www.eventogy.com/api";

export async function GET(){
    try {
        const result = await fetch(`${apiUrl}/events.json`, {
            method : "GET",
            mode : "no-cors",
            headers : {
                "Content-Type" : "application/json"
            }
        });

        if(result.status != 200 && result.status != 201){
            throw result.statusText;
        }

        const response : EventogyResponse<Event[]> = await result.json();

        if(!response.success){
            throw response.message;
        }

        return NextResponse.json(response.data);
    } catch (error : any) {
        throw error.message;
    }
}