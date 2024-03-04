import { Button } from "@/components/ui/button"
import { Archive } from "lucide-react"
import { ReactNode } from "react"

export default function RoundedButton( { children } : { children : ReactNode }){
    return <Button className="rounded-full text-gray-900 border-gray-900 border-2 bg-white hover:border-blue-600 hover:bg-blue-600 hover:border-2 hover:text-white">
        {children}
    </Button>
}