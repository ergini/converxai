/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Container } from "@mui/material";
import { Button } from "./ui/button";
import styled from "@emotion/styled";
import { ActivitySquareIcon, AlarmClockOffIcon, ArrowRightIcon, BotIcon, BrainCircuitIcon, FilePieChartIcon, FlameIcon, HelpCircleIcon, LayoutPanelLeftIcon, PartyPopperIcon, ScatterChartIcon, TrendingUpIcon, UsersIcon } from "lucide-react";
import { useMediaQuery } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import WhatsappIcon from "./../public/images/whatsapp.svg";
import MicrosoftTeamsIcon from "./../public/images/microsoft-teams.svg";
import { ContactForm } from "./Form";
import TextTransition, { presets } from 'react-text-transition';
import '../app/chat.css'
import Link from "next/link";

const processes = [
    {
        id: 1,
        title: "Requirement Analysis",
        description: "Understand your business needs and objectives to shape the chatbot's strategy.",
    },
    {
        id: 2,
        title: "Design & Brainstorm",
        description: "Plan conversational flow, AI capabilities, and user experience for the chatbot.",
    },
    {
        id: 3,
        title: "Development & Integration",
        description: "Build, integrate, and customize the chatbot to fit seamlessly into your operations.",
    },
    {
        id: 4,
        title: "Testing & Quality Assurance",
        description: "Rigorously test to eliminate glitches and ensure the chatbot responds accurately.",
    },
    {
        id: 5,
        title: "Performance Optimization",
        description: "Continuously monitor and optimize the chatbot to enhance user engagement."
    },
    {
        id: 6,
        title: "Deployment & Support",
        description: "Launch the chatbot and provide ongoing support to meet evolving business needs."
    }
]

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 90px;
    font-family: 'Poppins', sans-serif;
    text-align: center;

    h1{
        font-size: 3rem;
        font-weight: bold;
        color: #1e1e1e;
    }

    p {
        font-size: 17px;
        color: #333;
        margin-top: 20px;
        margin-bottom: 30px;
    }

    span {
        font-weight: 600;
        color: #845ec2;
    }

    @media (max-width: 768px) {
        h1{
            font-size: 1.6rem;
        }

        p {
            font-size: 15px;
        }
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;

    @media (max-width: 768px) {
        /* flex-direction: column; */
        button {
            margin-bottom: 20px;
        }
    }

    a svg {
        margin-left: 5px;
        animation: pulse 3s ease-in-out infinite;
    }

    @keyframes pulse {
        0% {
            transform: translate(0, 0);
        }
        50% {
            transform: translate(5px, 0);
        }
        100% {
            transform: translate(0, 0);
        }
    }

`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 90px;
    font-family: 'Poppins', sans-serif;
    text-align: center;

    .line {
        width: 20px;
        height: 3px;
        background-color: #845ec2;
        border-radius: 10px;
    }

    h1{
        font-size: 3rem;
        font-weight: bold;
        color: #1e1e1e;
        margin-top: 20px;
    }

    p {
        font-weight: 600;
        color: #845ec2;
        font-size: 16px;
        margin-top: 10px;
    }

    .steps{
        font-size: 17px;
        font-weight: 500;
        color: #333;
        opacity: 0.8;
        max-width: 800px;

        span {
            font-weight: 600;
            color: #845ec2;
        }
    }

    .gradient {
        position: absolute;
        right: 0;
        align-items: center;
        justify-content: center;
        transform: translate(-50%, 40%);
        z-index: -10;
        width: 50vw;
        height: 50vh;
        opacity: 0.3;
        filter: blur(30px);
        border-radius: 30%;
        background-image: linear-gradient(to right top, #845ec2, #9d64d3, #b86ae3, #d46ef2, #f272ff);
    }

    .white-square-grid {
        position: absolute;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100vh;
        opacity: 0.4;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect width='40' height='40' fill='%23fff' /%3E%3Crect x='50%' width='1' height='100%' fill='%23ddd' /%3E%3Crect y='50%' width='100%' height='1' fill='%23ddd' /%3E%3C/svg%3E%0A");
        background-size: 20px 20px;
    }

    .footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h1{
            font-size: 2.2rem;
            font-weight: bold;
        }
    }

    @media (max-width: 768px) {
        align-items: start;
        text-align: left;
        h1{
            margin-left: 0;
            font-size: 2.2rem;
        }
        p{
            margin-left: 0;
            font-size: 14px;
        }
    }
`;

const VideoWrapper = styled.div`
    overflow: hidden;
    margin-top: 30px;
    padding: 20px;
    border: 1px solid #ddd;
    background-color: #fefefe;
    border-radius: 20px;
    margin-top: 50px;

    video {
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 10px;
    }

    .white-square-grid {
        position: absolute;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100vh;
        transform: translate(0, 25.25%);
        opacity: 0.4;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect width='40' height='40' fill='%23fff' /%3E%3Crect x='50%' width='1' height='100%' fill='%23ddd' /%3E%3Crect y='50%' width='100%' height='1' fill='%23ddd' /%3E%3C/svg%3E%0A");
        background-size: 20px 20px;
    }
`;

const ProcessWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    width: 100%;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Process = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    font-family: 'Poppins', sans-serif;
    width: 360px;
    height: 100%;
    border-radius: 10px;
    background-color: rgba(255,255,255,0.5);
    padding: 20px;
    border: 1px solid #ddd;
    margin-left: 20px;
    cursor: default;
    transition: all 0.3s ease-in-out;

    h1{
        font-size: 20px;
        font-weight: 600;
        color: #1e1e1e;
        margin-top: 20px;
        text-align: left;
    }

    p {
        font-weight: 500;
        color: #1e1e1e;
        font-size: 14px;
        opacity: 0.7;
        margin-top: 10px;
        text-align: left;
        width: 100%;
    }

    &:hover {
        transform: translate(0, -10px);
    }

    @media (max-width: 900px) {
        width: 100%;
        margin-left: 0;


    }
`;
const ServicesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 50px;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Service = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    font-family: 'Poppins', sans-serif;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    margin-bottom: 20px;
    background-color: rgba(255,255,255,0.5);
    padding: 20px;
    border: 1px solid #ddd;
    margin-left: 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    .title{
        display: flex;
        flex-direction: row;
        align-items: center;
        transition: all 0.3s ease-in-out;
    }

    .title .icon {
        margin-top: 20px;
        margin-left: 5px;
        animation: pulse 3s ease-in-out infinite;
    }

    h1{
        font-size: 20px;
        font-weight: 600;
        color: #1e1e1e;
        margin-top: 20px;
        text-align: left;
    }

    p {
        font-weight: 500;
        color: #1e1e1e;
        font-size: 14px;
        opacity: 0.7;
        margin-top: 10px;
        text-align: left;
    }

    @keyframes pulse {
        0% {
            transform: translate(0, 0);
        }
        50% {
            transform: translate(5px, 0);
        }
        100% {
            transform: translate(0, 0);
        }
    }

    @media (max-width: 768px) {
        margin-left: 0;
    }
`;

const Team = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    margin-top: 40px;
    margin-left: 20px;

    img{
        border-radius: 10px;
        max-width: 800px;
        object-fit: cover;
    }

    @media (max-width: 900px) {
        flex-direction: column;
        margin-left: 0;
        margin-right: 0;

        img{
            margin-top: 20px;
            max-width: 100%;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        margin-left: 0;
        margin-right: 0;
        img{
            margin-top: 20px;
            max-width: 100%;
        }
    }
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 15px;
    max-width: 560px;
    height: 100%;
    border-radius: 10px;
    background-color: rgba(255,255,255,0.5);
    padding: 20px;
    border: 1px solid #ddd;
    margin-right: 20px;
    cursor: default;
    transition: all 0.3s ease-in-out;

    h1{
        font-size: 20px;
        font-weight: 600;
        color: #1e1e1e;
        margin-top: 15px;
    }

    @media (max-width: 768px) {
        margin-right: 0;
    }
`;

const Languages = styled.div`
    position: sticky;
    top: 20px;
    bottom: 20px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: rgba(132, 94, 194, 0.8);
    background-blend-mode: overlay;
    box-shadow: rgba(60, 64, 67, 0.1) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    padding: 10px;
    border-radius: 10px;
    font-weight: 600;
    color: #fefefe;
    max-width: 350px;

    @media (max-width: 768px) {
        margin-top: -70px;
        margin-bottom: 20px;
    }

    span {
        color: rgba(255, 255, 255, 0.6);
    }
`;

declare global {
    interface Window {
        voiceflow: any;
    }
}

export default function Hero() {
    const ref = useRef<any>(null);
    const languages = ["English", "German", "Turkish", "Arabic"];
    const otherLanguages = "30 other languages..."
    const [index, setIndex] = useState(0);
    const [smallDevice, setSmallDevice] = useState(false);

    const matches = useMediaQuery('(max-width:900px)');

    useEffect(() => {
        setSmallDevice(matches);
    }, [matches]);

    const handleClick = () => {
        ref?.current?.scrollIntoView({
            behavior: 'smooth',
        });
    }

    // const showChat = () => {
    //     window.voiceflow.chat.open();
    // }

    // useEffect(() => {
    //     // Define the script element
    //     const script = document.createElement('script');
    //     script.type = 'text/javascript';

    //     script.onload = function () {
    //         window.voiceflow.chat.load({
    //             verify: { projectID: '650ed3ebd39f2b0008e59764' },
    //             url: 'https://general-runtime.voiceflow.com',
    //             versionID: 'production',
    //         });
    //     };

    //     script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';

    //     // Append the script to the document
    //     document.head.appendChild(script);

    //     // Clean up the script when the component unmounts
    //     return () => {
    //         document.head.removeChild(script);
    //     };
    // }, []);

    // useEffect(() => {
    //     const intervalId = setInterval(
    //         () => setIndex((index) => index + 1),
    //         7000, // every 3 seconds
    //     );
    //     return () => clearTimeout(intervalId);
    // }, []);

    return (
        <>
            <Container>
                <Title>
                    <Languages className="backdrop-blur-md">
                        <TextTransition direction="up" springConfig={presets.wobbly}>{languages[index % languages.length]}</TextTransition>
                        <span className="text-white/30">&nbsp;+&nbsp;</span>
                        <span>
                            {otherLanguages}
                        </span>
                    </Languages>
                    <h1>
                        The most powerful way <br />to take your business to <span>another level</span>
                    </h1>
                    <p>
                        Our innovative solution significantly <span>boosts the quality of work,</span> resulting in more satisfying and engaging user experiences.
                    </p>
                </Title>
                <ButtonWrapper>
                    <Link
                        href="/business"
                        passHref
                    >
                        <Button
                            variant={"default"}
                            style={{
                                marginRight: "20px"
                            }}
                        >
                            Why do u need it?
                            <ArrowRightIcon className="icon" size={25} color="#fff" />
                        </Button>
                    </Link>
                    {/* <Button
                        variant={"default"}
                        style={{
                            marginRight: "20px"
                        }}
                        onClick={showChat}
                    >
                        Test AI Assistant &nbsp;<span className="text-white/30">-&nbsp;for free</span>
                    </Button> */}
                    <Button
                        variant={"outline"}
                        onClick={handleClick}
                    >
                        Contact Sales
                    </Button>
                </ButtonWrapper>
                {/*
                <VideoWrapper>
                    <div className="gradient"></div>
                    <div className="white-square-grid"></div>
                    <div className="bg-blur"></div>
                    <video width="100%" height="100%" autoPlay loop muted>
                        <source src="/videos/converxaii.mp4" type="video/mp4" />
                    </video>
                </VideoWrapper>
                */}
                <Content>
                    <div className="gradient"></div>
                    <div className="white-square-grid"></div>
                    <div className="line"></div>
                    <p>
                        The Process
                    </p>
                    <h1 className="bg-bl">
                        How do we do it?
                    </h1>
                    <p className="steps">
                        After we receive your request and we make a deal, these are steps that we follow to bring you <span>a masterpiece for your business.</span>
                    </p>
                    {!smallDevice ? (
                        <ProcessWrapper>
                            {processes.slice(0, 1).map((process) => (
                                <Process className="backdrop-blur-md" key={process.id}>
                                    <FilePieChartIcon size={35} color="#333" />
                                    <h1>{process.title}</h1>
                                    <p>{process.description}</p>
                                </Process>
                            ))}
                            {processes.slice(1, 2).map((process) => (
                                <Process className="backdrop-blur-md" style={{ marginTop: 30 }} key={process.id}>
                                    <BrainCircuitIcon size={35} color="#333" />
                                    <h1>{process.title}</h1>
                                    <p>{process.description}</p>
                                </Process>
                            ))}
                            {processes.slice(2, 3).map((process) => (
                                <Process className="backdrop-blur-md" style={{ marginTop: 60 }} key={process.id}>
                                    <BotIcon size={35} color="#333" />
                                    <h1>{process.title}</h1>
                                    <p>{process.description}</p>
                                </Process>
                            ))}
                            {processes.slice(3, 4).map((process) => (
                                <Process className="backdrop-blur-md" key={process.id}>
                                    <ScatterChartIcon size={35} color="#333" />
                                    <h1>{process.title}</h1>
                                    <p>{process.description}</p>
                                </Process>
                            ))}
                            {processes.slice(4, 5).map((process) => (
                                <Process className="backdrop-blur-md" style={{ marginTop: 30 }} key={process.id}>
                                    <TrendingUpIcon size={35} color="#333" />
                                    <h1>{process.title}</h1>
                                    <p>{process.description}</p>
                                </Process>
                            ))}
                            {processes.slice(5, 6).map((process) => (
                                <Process className="backdrop-blur-md" style={{ marginTop: 60, background: 'rgba(132, 94, 194, 0.7)' }} key={process.id}>
                                    <PartyPopperIcon size={35} color="white" />
                                    <h1 style={{ color: 'white' }}>{process.title}</h1>
                                    <p style={{ color: 'white' }}>{process.description}</p>
                                </Process>
                            ))}
                        </ProcessWrapper>
                    ) : (
                        <ProcessWrapper>
                            {processes.slice(0, 5).map((process) => (
                                <Process style={{ marginBottom: 20 }} key={process.id}>
                                    <FilePieChartIcon size={35} color="#333" />
                                    <h1>{process.title}</h1>
                                    <p>{process.description}</p>
                                </Process>
                            ))}
                            {processes.slice(5, 6).map((process) => (
                                <Process style={{ background: 'rgba(132, 94, 194, 0.7)' }} key={process.id}>
                                    <PartyPopperIcon size={35} color="white" />
                                    <h1 style={{ color: 'white' }}>{process.title}</h1>
                                    <p style={{ color: 'white' }}>{process.description}</p>
                                </Process>
                            ))}
                        </ProcessWrapper>
                    )}
                </Content>
                <Content className="items-start lg:ml-5 text-left">
                    <div
                        className="gradient"
                        style={{
                            transform: 'translate(-50%, 90%)',
                            opacity: 0.2
                        }}></div>
                    <div className="line"></div>
                    <p>
                        The Reason Why
                    </p>
                    <h1 className="bg-bl">
                        Why would you choose us?
                    </h1>
                    <p className="steps text-left">
                        You may need a reason to collaborate with us, <br />but there are many reasons why <span>we are the best choice for you.</span>
                    </p>
                </Content>

                <Team>
                    <CardWrapper>
                        <Card className="backdrop-blur-md">
                            <UsersIcon size={35} color="#333" />
                            <h1>Our team</h1>
                            <p>
                                A team of experts in their fields, <br />ready to help you with anything.
                            </p>
                        </Card>
                        <Card
                            className="backdrop-blur-md"
                            style={{
                                background: 'rgba(132, 94, 194, 0.2)'
                            }}
                        >
                            <FlameIcon size={35} color="#333" />
                            <h1>You're one of the first...</h1>
                            <p>
                                Your competitor don't stand a chance, how would they when u have the power of AI?!
                            </p>
                        </Card>
                        <Card
                            className="backdrop-blur-md"
                            style={{
                                background: 'rgba(192, 154, 255, 0.5)'
                            }}
                        >
                            <AlarmClockOffIcon size={35} color="#333" />
                            <h1>We will make it easy for you!</h1>
                            <p>
                                Why let something take you so much time, when we can automate it for you?! It's your opportunity!
                            </p>
                        </Card>
                    </CardWrapper>
                    <img src="/images/team.jpeg" alt="team" />
                </Team>
                <Content>
                    <div
                        className="gradient"
                        style={{
                            transform: 'translate(-50%, 30%)'
                        }}></div>
                    <div className="white-square-grid"></div>
                    <div className="line"></div>
                    <p>
                        We guarantee
                    </p>
                    <h1 className="bg-bl">
                        What services do we offer?
                    </h1>
                    <p className="steps">
                        You may need a reason to collaborate with us, <br />but there are many reasons why <span>we are the best choice for you.</span>
                    </p>
                    <ServicesWrapper>
                        <Service className="backdrop-blur-md bg-slate-600/80 text-white">
                            <ActivitySquareIcon size={35} color="#fff" />
                            <Link href="/business" passHref>
                                <div className="title">
                                    <h1 style={{ color: 'white' }}>Business Automation</h1>
                                    <ArrowRightIcon className="icon" size={25} color="#fff" />
                                </div>
                            </Link>
                            <p style={{ color: 'white' }}>
                                We can automate your business processes that are consuming your time more than needed. So you can take care of other things.
                            </p>
                        </Service>
                        <Service className="backdrop-blur-md">
                            <LayoutPanelLeftIcon size={35} color="#333" />
                            <h1>Web AI Assistant</h1>
                            <p>
                                A customized AI assistant for your website trained with the given data to take care of your customers.
                            </p>
                        </Service>
                        <Service className="backdrop-blur-md" style={{
                            border: '1px solid rgb(7, 94, 84)'
                        }}>
                            <img src={WhatsappIcon.src} alt="whatsapp" width={35} height={35} />
                            <h1>Whatsapp AI Assistant</h1>
                            <p>
                                A customized AI assistant for your whatsapp business trained with the given data to take care of your customers.
                            </p>
                        </Service>
                        <Service className="backdrop-blur-md" style={{
                            border: '1px solid rgb(80, 89, 201)'
                        }}>
                            <img src={MicrosoftTeamsIcon.src} alt="microsoft-teams" width={35} height={35} />
                            <h1>Microsoft Teams AI Assistant</h1>
                            <p>
                                A customized AI assistant for your Microsoft Teams trained with the given data to take care of your customers.
                            </p>
                        </Service>
                        <Service className="opacity-30 backdrop-blur-md">
                            <HelpCircleIcon size={35} color="#333" />
                            <h1>Coming soon...</h1>
                            <p>
                                Coming Soon...
                            </p>
                        </Service>
                        <Service className="opacity-30 backdrop-blur-md">
                            <HelpCircleIcon size={35} color="#333" />
                            <h1>Coming soon...</h1>
                            <p>
                                Coming Soon...
                            </p>
                        </Service>
                        <Service className="opacity-30 backdrop-blur-md">
                            <HelpCircleIcon size={35} color="#333" />
                            <h1>Coming soon...</h1>
                            <p>
                                Coming Soon...
                            </p>
                        </Service>
                    </ServicesWrapper>
                </Content>
            </Container>
            <Content style={{
                marginTop: 20,
                marginBottom: 30,
                padding: 40,
                background: '#1e1e1e',
                borderRadius: 10,
                alignItems: 'center',
                textAlign: 'center'
            }}>
                <h1 style={{ color: 'whitesmoke', marginTop: 0, fontSize: 31 }}>
                    Interested in our services?
                </h1>
                <p style={{ color: 'whitesmoke', maxWidth: 800, fontSize: 15 }}>
                    We invite you to schedule an online meeting where we can explore your requirements and offer our assistance. Please complete the form below, and we will promptly reach out to you.
                </p>
            </Content>
            <div id="sales" ref={ref} style={{ padding: 10, marginTop: -22 }}>
                <ContactForm />
            </div>
        </>
    )
}