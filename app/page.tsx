"use client"
import "@/app/globals.css";
import { Suspense } from "react";
import EventsView from "./components/EventsView";
import { GenerateSkeletonGrid } from "./components/shared/skeleton";

export default function Home() {

  return <main>
    <Suspense fallback={<GenerateSkeletonGrid rowAmount={4} cardAmount={16} />}>
      {/* @ts-expect-error */}
      <EventsView />
    </Suspense>
  </main>;
}