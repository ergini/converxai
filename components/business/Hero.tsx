/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Container } from "@mui/material";
import { Button } from "../ui/button";
import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { ArrowDown01Icon, ArrowDownIcon } from "lucide-react";
import { Form } from "../ui/form";
import { ContactForm } from "../Form";

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    font-weight: 600;
    width: 100%;
    font-family: 'Poppins', sans-serif;
    text-align: center;

    p {
        background-color: rgba(132, 94, 194, 0.5);
        padding: 8px 20px;
        border-radius: 20px;
        border: 2px solid #845ec2;
        color: #fff;
    }
    
    .why {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 8px 20px;
        margin-top: 25px;
        gap: 5px;
        background-color: rgba(69, 6, 170, 0.3);
        border-radius: 20px;
        border: 2px solid #845ec2;
        color: #fff;

        svg {
            animation: pulseArrow 2s infinite;
        }
    }

    @keyframes pulseArrow {
        50% {
            transform: translate(0, 0);
        }
        75% {
            transform: translate(0, 2px);
        }
        100% {
            transform: translate(0, 0);
        }
    }

    @media (max-width: 768px) {
        h1{
            font-size: 1.6rem;
        }

        p {
            font-size: 12px;
        }
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
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

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const Card = styled.div`
    display: flex;
    align-items: start;
    justify-content: start;
    background-color: #1e1e1e;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 30px;
`;

const CardLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100%;
    margin-right: 20px;

    h2{
        font-size: 20px;
        font-weight: bold;
        color: #be95ff;

        span {
            position: absolute;
            right: 55px;
            font-size: 80px;
            font-weight: bold;
            color: #845ec2;
            opacity: 0.4;
            margin-top: -35px;

            @media (max-width: 600px) {
                right: 35px;
            }
        }
    }

    p{
        font-size: 13px;
        text-align: left;
        color: #fff;
        z-index: 1;
    }
`;

export default function Hero() {
    const [smallDevice, setSmallDevice] = useState(false);

    const matches = useMediaQuery('(max-width:900px)');

    useEffect(() => {
        setSmallDevice(matches);
    }, [matches]);

    return (
        <>
            <Container>
                <Title>
                    <p>
                        Why your business needs automation?
                    </p>
                </Title>
                <Content>
                    <CardWrapper>
                        <Card>
                            <CardLeft>
                                <h2>
                                    <span>1</span>Productivity Boost
                                </h2>
                                <p>
                                    Imagine a workplace where mundane tasks are handled seamlessly, giving your team the time and mental space to focus on strategic initiatives. Our business automation service is not just about efficiency; it's a revolution in workflow. By automating repetitive processes, we liberate your workforce, enabling them to channel their efforts towards creativity, innovation, and the growth of your business. It's time to redefine how work gets done.
                                </p>
                            </CardLeft>
                        </Card>
                        <Card>
                            <CardLeft>
                                <h2>
                                    <span>2</span>Business Automation in Operational Excellence
                                </h2>
                                <p>
                                    Business automation is not merely a cost-cutting tool; it's a strategic advantage that propels your business into the realm of operational excellence. In a landscape where staying ahead is crucial, our solutions not only trim expenses but strategically enhance every facet of your operations. It's about more than the bottom line; it's about positioning your business as a leader in your industry, ready to navigate the challenges of tomorrow.
                                </p>
                            </CardLeft>
                        </Card>
                        <Card>
                            <CardLeft>
                                <h2>
                                    <span>3</span>Business Automation's Cost Efficiency
                                </h2>
                                <p>
                                    Unleash the true potential of your resources with our business automation solutions. While cutting operational costs is a key feature, what sets us apart is our commitment to maximizing the utilization of your valuable assets. It's a holistic approach to efficiency that ensures you're not just saving money but optimizing every resource at your disposal for maximum impact.
                                </p>
                            </CardLeft>
                        </Card>
                        <Card>
                            <CardLeft>
                                <h2>
                                    <span>4</span>Order from Chaos: Simplifying Processes with Automation
                                </h2>
                                <p>
                                    Complexity in business processes doesn't have to result in chaos. Our business automation service is the architect of order, transforming intricate processes into seamlessly organized systems. Picture a workplace where every task flows seamlessly, saving time and reducing stress. It's about simplifying complexity and creating an environment where efficiency and clarity reign.
                                </p>
                            </CardLeft>
                        </Card>
                        <Card>
                            <CardLeft>
                                <h2>
                                    <span>5</span>Tangible Returns: Calculating the Impact of Automation
                                </h2>
                                <p>
                                    Let's talk numbers—the real return on investment that our business automation solutions bring to the table. It's not just about upfront savings; it's about securing a financially sound future for your business. Our solutions are designed to deliver tangible, measurable results, ensuring that every dollar invested in automation translates into long-term financial benefits for your organization.
                                </p>
                            </CardLeft>
                        </Card>
                        <Card>
                            <CardLeft>
                                <h2>
                                    <span>6</span>Elevating Standards with Automation
                                </h2>
                                <p>
                                    Quality is the bedrock of your brand, and our business automation solutions are the guardians of that quality. By ensuring precision and consistency in every process, from production to customer service, we elevate your brand to new heights. It's not just about meeting standards; it's about setting the standard for unwavering quality in your industry.
                                </p>
                            </CardLeft>
                        </Card>
                        <Card>
                            <CardLeft>
                                <h2>
                                    <span>7</span>Building Lasting Relationships
                                </h2>
                                <p>
                                    In a world where customer experience is paramount, our business automation solutions take center stage. Imagine a scenario where every interaction is personalized, and responses are swift. It's not just about transactions; it's about building lasting relationships. Our solutions are designed to create a customer-centric environment, ensuring that every touchpoint with your brand leaves a positive and memorable impression.
                                </p>
                            </CardLeft>
                        </Card>
                        <Card>
                            <CardLeft>
                                <h2>
                                    <span>8</span>Flexible Business Automation Systems
                                </h2>
                                <p>
                                    Change is inevitable, and our business automation systems are designed with adaptability at their core. They aren't rigid; they're agile. In a dynamic business landscape, our solutions empower your organization to adapt swiftly to market shifts, industry trends, and emerging challenges. It's about future-proofing your business and ensuring that you're always one step ahead.
                                </p>
                            </CardLeft>
                        </Card>
                        <Card>
                            <CardLeft>
                                <h2>
                                    <span>9</span>Unleashing Creativity with Automation
                                </h2>
                                <p>
                                    Your team is the heartbeat of your organization, and our business automation solutions are the catalyst for unleashing their full potential. By automating repetitive tasks, we liberate time, creating space for creativity and innovation to flourish. It's about empowering your team to not just meet expectations but exceed them, positioning your organization as a hub of positive change and forward-thinking initiatives.
                                </p>
                            </CardLeft>
                        </Card>
                    </CardWrapper>
                    <Title
                        style={{
                            marginTop: -10,
                            marginBottom: 30,
                        }}
                    >
                        <p style={{ color: 'white' }}>
                            Do you see this as a solution for your business?
                        </p>
                    </Title>
                </Content>
                <ContactForm />
            </Container>
        </>
    )
}