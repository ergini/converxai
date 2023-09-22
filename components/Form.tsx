import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
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

export function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState<Date>();
    const [error, setError] = useState('');
    // const [showData, setShowData] = useState(false);
    // const [dataForm, setDataForm] = useState<any>({});
    const { register, handleSubmit, formState: { errors } } = useForm();
    const form = useForm();

    const formData = {
        name: name,
        email: email,
        date: date
    }

    const onSubmit = async (data: any) => {
        if (name !== '' && email !== '' && date !== undefined) {
            try {
                const response = await axios({
                    url: '/api/formSubmit',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: formData
                })
                console.log(response.data);
                toast.success('Form Submitted Successfully, we will be in touch with you soon');
            } catch (error) {
                console.log(error);
            }
        } else {
            toast.error('Please fill all the fields');
        }
    }

    // const getData = async () => {
    //     try {
    //         const response = await axios({
    //             url: '/api/formSubmit',
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //         setShowData(true);
    //         setDataForm(response.data.data.map((item: any) => {
    //             return {
    //                 name: item.name,
    //                 email: item.email,
    //                 Date: item.Date
    //             }
    //         }));
    //         console.log(dataForm);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    return (
        <>
            <Toaster richColors/>
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
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
            {/* <Button onClick={getData}>Get Data</Button>
            <div>
                {showData && dataForm.map((item: any) => {
                    return (
                        <div className="flex flex-col items-start" key={item.id}>
                            <p>Name: {item.name}</p>
                            <p>Email: {item.email}</p>
                            <p>Date: {item.Date}</p>
                        </div>
                    )
                })}
            </div> */}
        </>
    )
}
