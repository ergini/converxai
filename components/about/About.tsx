"use client"
import styled from '@emotion/styled';
import { Container, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { Navigation } from '../Navigation';
import Link from 'next/link';
import Hero from './Hero';
import { MobNavigation } from '../MobNavigation';

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: transparent;
    width: 100%;
    height: 100%;
    padding: 15px;
    margin-top: 10px;
    font-size: 1.5rem;
    color: #333;
    text-align: center;

    .gradient {
        position: absolute;
        top: 0;
        right: 0;
        align-items: center;
        justify-content: center;
        transform: translate(-50%, 40%);
        z-index: -1;
        width: 50vw;
        height: 50vh;
        opacity: 0.2;
        filter: blur(50px);
        border-radius: 30%;
        background-image: linear-gradient(to right top, #845ec2, #9d64d3, #b86ae3, #d46ef2, #f272ff);
    }

    .white-square-grid {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100vh;
        opacity: 0.4;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect width='40' height='40' fill='%23fff' /%3E%3Crect x='50%' width='1' height='100%' fill='%23ddd' /%3E%3Crect y='50%' width='100%' height='1' fill='%23ddd' /%3E%3C/svg%3E%0A");
        background-size: 20px 20px;
    }
`;

const Logo = styled.div`
        width: 100%;
        height: 100%;
        a{
            display: flex;
            font-family: 'Azonix', sans-serif;
            flex-direction: row;
            align-items: center;
            color: #333;
        }

        img{
            margin-right: 7px;
        }
    span {
        color: #5f44f6;
    }
`;

export default function About() {
    const smallDevice = useMediaQuery('(max-width:700px)');

    return (
        <Container style={{ maxWidth: 1240 }}>
            <Nav>
                <div className="gradient"></div>
                <div className="white-square-grid"></div>
                <Logo>
                    <Link href="/" passHref>
                        <Image src="/images/logo.svg" alt="logo" width={35} height={35} />
                        <h1>Converx<span>AI</span></h1>
                    </Link>
                </Logo>
                {!smallDevice ? <Navigation /> : <MobNavigation />}
            </Nav>
            <Hero />
        </Container>
    )
}