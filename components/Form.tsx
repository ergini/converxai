import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import axios from "axios"
import { useState } from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Toaster, toast } from 'sonner'
import { useMediaQuery } from "@mui/material"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function ContactForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState<Date>();
    const [budget, setBudget] = useState('');
    const isMobile = useMediaQuery('(max-width: 768px)');
    const form = useForm();

    const formData = {
        name: name,
        email: email,
        date: date,
        budget: budget
    }

    const currentDate = new Date();

    const onSubmit = async (data: any) => {
        if (name !== '' && email !== '' && budget !== '' && date !== undefined && date > currentDate) {
            try {
                const response = await axios({
                    url: '/api/formSubmit',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: formData
                })
                toast.success('Form Submitted Successfully, we will be in touch with you soon');
            } catch (error) {
                toast.error('Something went wrong, please try again later');
            }
        } else if (date !== undefined && date < currentDate) {
            toast.error('Please select a date in the future');
        } else {
            toast.error('Please fill all the fields');
        }
    }

    return (
        <>
            {isMobile ? <Toaster richColors position="top-center" /> : <Toaster richColors />}
            <Form {...form}>
                <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Your Name..." onChange={(e: any) => setName(e.target.value)} value={name} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input onChange={(e: any) => setEmail(e.target.value)} value={email} type="text" placeholder="Your Email..." />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <>
                                <div className="flex flex-col items-start">
                                    <FormLabel style={{ marginBottom: 5 }}>Meeting Date</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-[280px] justify-start text-left font-normal",
                                                    !date && "text-muted-foreground"
                                                )}
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                                mode="single"
                                                selected={date}
                                                onSelect={setDate}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                            <>
                                <div className="flex flex-col items-start">
                                    <FormLabel style={{ marginBottom: 5 }}>Your potential budget</FormLabel>
                                    <Select onValueChange={(value) => setBudget(value)}>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Select your budget" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="< 1000$">{`< 1000$`}</SelectItem>
                                            <SelectItem value="1000$ - 5000$">{`1000$ - 5000$`}</SelectItem>
                                            <SelectItem value="5000$+">{`5000$+`}</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </>
    )
}
