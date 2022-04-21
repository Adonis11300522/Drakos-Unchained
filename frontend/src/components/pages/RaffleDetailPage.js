import React from 'react'
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap'
import { DivContainer, Layout } from '../tags/Tags'
import { Section } from '../tags/Tags'
import RaffleTicketCard from '../../assets/images/raffle_ticket.jpg'

export default function RaffleDetailPage() {
    return (
        <DivContainer className="RaffleDetailPage">
            <Layout>
                <Container>
                    <Section>
                        <Row>
                            <Col lg="8" md="8" sm="12" className='p-3 '>
                                <DivContainer className='opacity-panel p-5 text-center'>
                                    <DivContainer className="opacity-panel-image-body">
                                        <Image src={RaffleTicketCard}/>
                                    </DivContainer>
                                </DivContainer>                                
                            </Col>
                            <Col lg="4" md="4" sm="12" className='p-3'>
                                <DivContainer className="opacity-panel text-center p-3">
                                    <DivContainer className="opacity-panel-title text-center">User Info</DivContainer>
                                    <DivContainer className="opacity-panel-body">
                                        <DivContainer className="d-flex flex-row justify-content-between my-2  align-items-end"><span><strong>Your Balance : </strong></span><span><strong>10,023</strong></span></DivContainer>
                                        <Form>
                                            <DivContainer className="d-flex flex-row justify-content-between my-2  align-items-end">
                                                <span><strong>Your Bid : </strong></span>
                                                <span>                                            
                                                    <Form.Group className="" controlId="exampleForm.ControlInput1">                                                    
                                                        <Form.Control type="email" placeholder="Bid Price" />
                                                    </Form.Group>
                                                </span>
                                            </DivContainer>
                                            <DivContainer><Button type="submit" className='my-2 BtnSkyOpen'>Submit Bid</Button></DivContainer>
                                        </Form>                                        
                                    </DivContainer>
                                    <hr/>
                                    <DivContainer className="opacity-panel-title text-center my-5">Bid Info</DivContainer>
                                    <DivContainer className="opacity-panel-body">
                                        <DivContainer className="opacity-panel-body-subtitle">Current Bid : <span className='pr-2 text-success'>●</span>Live</DivContainer>
                                        <DivContainer className="opacity-panel-body-title">250 $EGG</DivContainer>
                                        <DivContainer className="opacity-panel-body-subtitle">Auction End In : </DivContainer>
                                        <DivContainer className="opacity-panel-body-title">24 : 44 : 18</DivContainer>
                                    </DivContainer>
                                </DivContainer>
                            </Col>
                        </Row>
                    </Section> 
                </Container>
            </Layout>
        </DivContainer>
    )
}
