import React from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import { DivContainer, Layout, Section, SectionSubTitle, SectionTitle } from '../tags/Tags'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { RemoveCard, TradeCollectionSmCard } from '../cards/Cards'

export default function P2PTradingPage() {
    return (
        <DivContainer className="P2PTradingPage">
            <Layout>
                <Container>
                    <Section>
                        <SectionTitle>P2P Trade</SectionTitle>
                        <DivContainer>
                            <Row>
                                <Col lg="7" md="7" sm="12" className='p-2'>
                                    <SectionSubTitle><span className='text-warning'>STEP1</span>- Select NFT(s) to offer</SectionSubTitle>
                                    <DivContainer className="opacity-panel">
                                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 d-flex flex-row justify-content-around">
                                            <Tab eventKey="home" title="NFT (0)">
                                                <DivContainer className="p-3 text-center">
                                                    <h4>Connect Your Wallet to Start Trading</h4>
                                                    <Button className='BtnSkyOpen'>Connect Wallet</Button>
                                                </DivContainer>
                                            </Tab>
                                            <Tab eventKey="profile" title="Whitelist Tokens (0)">
                                                <DivContainer className="p-3">
                                                    <DivContainer className="p-3 text-center">
                                                        <h4>Connect Your Wallet to Start Trading</h4>
                                                        <Button className='BtnSkyOpen'>Connect Wallet</Button>
                                                    </DivContainer>
                                                </DivContainer>
                                            </Tab>
                                            <Tab eventKey="contact" title="Utility Tokens (0)">
                                                <DivContainer className="p-3">
                                                    <DivContainer className="p-3 text-center">
                                                        <h4>Connect Your Wallet to Start Trading</h4>
                                                        <Button className='BtnSkyOpen'>Connect Wallet</Button>
                                                    </DivContainer>
                                                </DivContainer>
                                            </Tab>
                                        </Tabs>                                        
                                    </DivContainer>
                                    <DivContainer className="opacity-panel mt-3 p-3">
                                        <Row className="mb-3 align-items-end">
                                            <Form.Group as={Col} md="8" controlId="validationCustom03">
                                                <Form.Label>Add SPL to your offer (optional)</Form.Label>
                                                <Form.Control type="text" placeholder="" required />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a valid city.
                                                </Form.Control.Feedback>
                                            </Form.Group>    
                                            <Form.Group as={Col} md="4" controlId="validationCustom05">
                                                <Button className='BtnSkyOpen'>Add SPL</Button>
                                            </Form.Group>                                                                                    
                                        </Row>                          
                                    </DivContainer>
                                </Col>
                                <Col lg="5" md="5" sm="12" className='p-2'>
                                    <SectionSubTitle><span className='text-warning'>STEP2</span>- Your offer(s)</SectionSubTitle>
                                    <DivContainer className="opacity-panel p-3">
                                        <Row>
                                            <Col lg="6" md="6" sm="6" className="TradeCollectionSmCard-left">
                                                <DivContainer className="TradeCollectionSmCard-list">
                                                    <TradeCollectionSmCard/>
                                                </DivContainer>
                                            </Col>
                                            <Col lg="6" md="6" sm="6">
                                                <RemoveCard/>
                                            </Col>
                                        </Row>
                                    </DivContainer>
                                    <SectionSubTitle><span className='text-warning'>STEP3</span>- Add the counterparty wallet address</SectionSubTitle>
                                    <DivContainer className="opacity-panel p-3">
                                        <Form.Group as={Row} className="" controlId="formPlaintextPassword">
                                            <Form.Label column sm="2">
                                            Password
                                            </Form.Label>
                                            <Col sm="10">
                                            <Form.Control type="password" placeholder="Password" />
                                            </Col>
                                        </Form.Group>
                                    </DivContainer>
                                    <DivContainer className="mt-3"><Button className="BtnSkyOpen">Create Trade</Button></DivContainer>
                                </Col>
                            </Row>
                        </DivContainer>
                    </Section>
                </Container>
            </Layout>
        </DivContainer>
    )
}
