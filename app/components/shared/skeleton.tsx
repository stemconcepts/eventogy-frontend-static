"use client"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

export function SkeletonCard() {
  return (
    <Card className="p-4 col-span-4 sm:col-span-1">
      <CardContent className="p-0">
        <Skeleton className="h-[125px] w-100 rounded-xl mb-3" />
        <Skeleton className="h-4 w-100 mb-3" />
        <Skeleton className="h-4 w-100" />
      </CardContent>
    </Card>
  )
}

export function GenerateSkeletonGrid(props: { rowAmount: number, cardAmount: number }) {

  return <div className={`grid grid-cols-${props.rowAmount} gap-4`}>
    {Array(props.cardAmount).fill(true).map((_, i) => <SkeletonCard key={i} />)}
  </div>
}