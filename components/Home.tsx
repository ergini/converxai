"use client"
import styled from '@emotion/styled';
import { Container } from '@mui/material';
import Image from 'next/image';
import { Navigation } from './Navigation';
import Link from 'next/link';

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: transparent;
    width: 100%;
    height: 100%;
    padding: 15px;
    margin-top: 10px;
    border-radius: 15px;
    font-size: 1.5rem;
    color: #333;
    text-align: center;

    .blur {
        position: absolute;
        width: 1240px;
        height: 90px;
        right: 0;
        left: 0;
        top: 10px;
        transform: translateX(14%);
        background: rgba(255, 255, 255, 0.1);
        filter: blur(10px);
        z-index: -1;
    }
`;

const Logo = styled.div`
    margin-right: 20px;
    a{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        width: 100%;
        height: 100%;
        padding: 0 0.8rem;
        font-size: 1.5rem;
        text-align: center;

        img{
            margin-right: 5px;
        }
    }
`;

export default function Home() {
    return (
        <Container style={{ maxWidth: 1240 }}>
            <Nav>
                <div className="blur"></div>
                <Logo>
                    <Link href="/" passHref>
                        <Image src="/images/logo.svg" alt="logo" width={35} height={35} />
                        <h1>Converx <span>AI</span></h1>
                    </Link>
                </Logo>
                <Navigation />
            </Nav>
        </Container>
    )
}