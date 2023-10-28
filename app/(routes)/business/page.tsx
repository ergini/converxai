"use client"
import styled from '@emotion/styled';
import { Container, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { Navigation } from '../../../components/Navigation';
import Link from 'next/link';
import { MobNavigation } from '../../../components/MobNavigation';
import Layout from '../../../components/Layout';
import Hero from '@/components/business/Hero';

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
    color: #fff;
    text-align: center;
`;

const Logo = styled.div`
        width: 100%;
        height: 100%;
        a{
            display: flex;
            font-family: 'Azonix', sans-serif;
            flex-direction: row;
            align-items: center;
            color: #fff;
        }

        img{
            margin-right: 7px;
        }
    span {
        color: #5f44f6;
    }
`;

export default function Home() {
    const smallDevice = useMediaQuery('(max-width:700px)');

    return (
        <Layout>
            <Container style={{ maxWidth: 1240 }}>
                <Nav>
                    <Logo>
                        <Link href="/" passHref>
                            <Image src="/images/logo.svg" alt="logo" width={35} height={35} />
                            <h1>Converx<span>AI</span></h1>
                        </Link>
                    </Logo>
                    {!smallDevice ? <Navigation /> : <MobNavigation />}
                </Nav>
                <Hero/>
            </Container>
        </Layout>
    )
}