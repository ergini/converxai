/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export function Form() {
    return (
        <Tabs defaultValue="account" className="max-[400px]: mt-20">
            <TabsList className="grid w-full grid-cols-2" style={{ background: '#121212' }}>
                <TabsTrigger value="account">Want to know more</TabsTrigger>
                <TabsTrigger value="password">Interested for AI A.</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <form
                    action="https://formspree.io/f/xvojwqvz"
                    method="POST"
                >
                    <Card style={{ backgroundColor: '#121212', color: 'whitesmoke', border: 'none' }}>
                        <CardHeader>
                            <CardTitle>I want to know more</CardTitle>
                            <CardDescription style={{ marginTop: 15, marginBottom: -20, color: 'rgba(255,255,255,0.6', fontSize: 14 }}>
                                If you're interested to know more about us & what we're offering, please enter requested details below.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1 text-black">
                                <Input name="name" id="name" placeholder="Enter your name" />
                            </div>
                            <div className="space-y-1 text-black">
                                <Input name="email" id="email" placeholder="Enter your email" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button type="submit" variant="outline" className="text-black"
                            >
                                Save changes
                            </Button>
                        </CardFooter>
                    </Card>
                </form>
            </TabsContent>
            <TabsContent value="password">
                <Card>
                    <CardHeader>
                        <CardTitle>Interested for AI Asisstant</CardTitle>
                        <CardDescription style={{ marginTop: 15, marginBottom: -20, color: 'rgba(0,0,0,0.7', fontSize: 14 }}>
                            If you're interested to have our services for your business, please enter requested details below.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Input placeholder="Enter your name" id="name" name="name"/>
                        </div>
                        <div className="space-y-1">
                            <Input placeholder="Enter your email" id="email" name="email" type="email" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save password</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
