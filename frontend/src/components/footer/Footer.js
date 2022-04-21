import React from 'react'
import {Container,Nav} from 'react-bootstrap'
import '../../App.css'
import { DivContainer, SectionTitle} from '../tags/Tags'
import { FaInstagram, FaDiscord, FaTwitter } from "react-icons/fa";
import { OutLineBtnSky } from '../buttons/Button';

export default function Footer() {
    return (
        <DivContainer className="Footer">
            <DivContainer className="Footer-Top py-4">
                <Container>
                    <SectionTitle>FOLLOW US</SectionTitle>
                    <DivContainer className="d-flex flex-row justify-content-center">
                        <Nav.Link href="#action1"><FaInstagram/></Nav.Link>
                        <Nav.Link href="#action2"><FaDiscord/></Nav.Link>
                        <Nav.Link href="#action3"><FaTwitter/></Nav.Link>
                    </DivContainer>
                    <OutLineBtnSky>JOIN DISCORD</OutLineBtnSky>
                </Container>
            </DivContainer>
            <DivContainer className="Footer-Bottom">
                <Container className='text-center py-3 text-muted'>Drakos Unchained © 2022 All rights reserved</Container>
            </DivContainer>
        </DivContainer>
    )
}