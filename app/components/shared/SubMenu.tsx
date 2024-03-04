import { Button } from "@/components/ui/button"
import { Archive, Calendar, ChevronDown, Grid, LayoutTemplate, List, SlidersHorizontal } from "lucide-react"
import RoundedButton from "./roundedButton"

export default function SubMenu(){
    return <div data-testid="subMenu" className="hidden sm:flex flex-row">
            <div className="basis-3/4 flex flex-row gap-3">
                <RoundedButton>
                    <Calendar className="mr-2 h-4 w-4" /> Events
                </RoundedButton>
                <RoundedButton>
                    <LayoutTemplate className="mr-2 h-4 w-4" /> Templates
                </RoundedButton>
                <RoundedButton>
                    <Archive className="mr-2 h-4 w-4" /> Archive
                </RoundedButton>
            </div>

        <div className="basis-1/4 flex flex-row-reverse">
            <Button className="bg-blue-600">
                Create New
                <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="ghost">
                <SlidersHorizontal className="h-4 w-4" />
            </Button>
            <Button variant="ghost">
                <List className="h-4 w-4" />
            </Button>
            <Button variant="ghost">
                <Grid className="h-4 w-4" />
            </Button>
        </div>
    </div>
}