import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { AlignRightIcon } from "lucide-react"
import { Navigation } from "./Navigation"
import Link from "next/link"

export function MobNavigation() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline"><AlignRightIcon /></Button>
            </SheetTrigger>
            <SheetContent style={{
                display: "flex",
                flexDirection: "column",
            }}>
                <Link href="/">
                    <Button variant="outline">Use cases</Button>
                </Link>
                <Link href="/">
                    <Button variant="outline">Pricing</Button>
                </Link>
            </SheetContent>
        </Sheet>
    )
}
