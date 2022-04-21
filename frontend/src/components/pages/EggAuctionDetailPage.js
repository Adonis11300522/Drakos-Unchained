import React from 'react'
import { DivContainer, Layout, SectionTitle } from '../tags/Tags'
import { Section } from '../tags/Tags'
import { Row, Col, Button, Container, Image, Form, Table } from 'react-bootstrap'
import Collection from '../../assets/images/collection1.png'

export default function EggAuctionDetailPage() {
    return (
        <DivContainer className="EggAuctionDetailPage">
           <Layout>
                <Container>
                    <Section>
                        <Row>
                            <Col lg="8" md="8" sm="12" className='p-3 '>
                                <DivContainer className='opacity-panel p-3 '>
                                    <Row>
                                        <Col lg="6" md="6" sm="12">
                                            <DivContainer className="opacity-panel-image"><Image src={Collection}/></DivContainer>
                                        </Col>
                                        <Col lg="6" md="6" sm="12" className='text-center'>
                                            <DivContainer className="opacity-panel-body-subtitle">NFT Name : </DivContainer>
                                            <DivContainer className="opacity-panel-body-title">Drako #2634</DivContainer>
                                            <DivContainer className="opacity-panel-body-subtitle">Project Name : </DivContainer>
                                            <DivContainer className="opacity-panel-body-title">ABCDEFGHISsdfsdfDLSKSDFSASDSF</DivContainer>
                                            <DivContainer className="opacity-panel-body-subtitle">Winners : </DivContainer>
                                            <DivContainer className="opacity-panel-body-title">145</DivContainer>
                                            <DivContainer className="opacity-panel-body-subtitle">NFTs : </DivContainer>
                                            <DivContainer className="opacity-panel-body-title">1</DivContainer>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <DivContainer className="opacity-panel-body-subtitle">Description : </DivContainer>
                                        <DivContainer className="opacity-panel-body-subtitle">DeGods and DeadGods were already perfect to begin with. But what does a transformation from one to the other actually look like? Magnum AI has the answer you have been looking for, behold the legendary DeGodnum</DivContainer>
                                    </Row>
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
                    <Section>
                        <SectionTitle className="mb-5">Bid History</SectionTitle>
                        <DivContainer className="Bid-list">
                            <Table size="sm">
                                <tbody>
                                    <tr>
                                        <td>4Tzr....w8rA</td>
                                        <td>16 hours ago</td>
                                        <td>30 $EGG</td>
                                    </tr>
                                    <tr>
                                        <td>4Tzr....w8rA</td>
                                        <td>16 hours ago</td>
                                        <td>30 $EGG</td>
                                    </tr>
                                    <tr>
                                        <td>4Tzr....w8rA</td>
                                        <td>16 hours ago</td>
                                        <td>30 $EGG</td>
                                    </tr>
                                    <tr>
                                        <td>4Tzr....w8rA</td>
                                        <td>16 hours ago</td>
                                        <td>30 $EGG</td>
                                    </tr>
                                    <tr>
                                        <td>4Tzr....w8rA</td>
                                        <td>16 hours ago</td>
                                        <td>30 $EGG</td>
                                    </tr>
                                    <tr>
                                        <td>4Tzr....w8rA</td>
                                        <td>16 hours ago</td>
                                        <td>30 $EGG</td>
                                    </tr>
                                    <tr>
                                        <td>4Tzr....w8rA</td>
                                        <td>16 hours ago</td>
                                        <td>30 $EGG</td>
                                    </tr>
                                    <tr>
                                        <td>4Tzr....w8rA</td>
                                        <td>16 hours ago</td>
                                        <td>30 $EGG</td>
                                    </tr>
                                    <tr>
                                        <td>4Tzr....w8rA</td>
                                        <td>16 hours ago</td>
                                        <td>30 $EGG</td>
                                    </tr>
                                    <tr>
                                        <td>4Tzr....w8rA</td>
                                        <td>16 hours ago</td>
                                        <td>30 $EGG</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </DivContainer>
                    </Section>
                </Container> 
           </Layout>
        </DivContainer>
    )
}
