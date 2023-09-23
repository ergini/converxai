/* eslint-disable react/no-unescaped-entities */
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Link from "next/link"

export default function Hero() {
    return (
        <>
            <AlertDialog open>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>This page is still on development process</AlertDialogTitle>
                        <AlertDialogDescription>
                            We're working hard to bring you the best experience possible with our services. Come back later.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <Link href="/#sales">
                            <AlertDialogCancel>Contact Sales</AlertDialogCancel>
                        </Link>
                        <Link href="/">
                            <AlertDialogAction>Home</AlertDialogAction>
                        </Link>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}