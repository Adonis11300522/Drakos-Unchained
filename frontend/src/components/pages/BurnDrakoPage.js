import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { BurnDrakoCard } from '../cards/Cards'
import { DivContainer, Layout, SectionTitle, Section } from '../tags/Tags'

export default function BurnDrakoPage() {
    return (
        <DivContainer className="BurnDrakoPage">
            <Layout>
                <Container>
                    <Section>
                        <SectionTitle>Burn Drako NFTs and Get $EGG Back!</SectionTitle>
                        <Row>
                            <Col lg="8" md="8" sm="12" className='p-3 '>
                                <DivContainer className='opacity-panel text-center p-3 '>
                                    <DivContainer className="walletaddress"> GgwiMh6NhqmXA6t8tYFsDLJm7t5uC1te9ei4TkGAxaqz</DivContainer>
                                    <Button className="BtnSkyOpen my-3">Show Drakos</Button>
                                    <Row>
                                        <Col lg="4" md="4" sm="12"><BurnDrakoCard/></Col>
                                        <Col lg="4" md="4" sm="12"><BurnDrakoCard/></Col>
                                        <Col lg="4" md="4" sm="12"><BurnDrakoCard/></Col>
                                        <Col lg="4" md="4" sm="12"><BurnDrakoCard/></Col>
                                    </Row>
                                </DivContainer>                                
                            </Col>
                            <Col lg="4" md="4" sm="12" className='p-3'>
                                <DivContainer className="opacity-panel text-center p-3">
                                    <DivContainer className="opacity-panel-title text-center">User Info</DivContainer>
                                    <DivContainer className="opacity-panel-body">
                                        <DivContainer className="d-flex flex-row justify-content-between my-1  align-items-end"><span><strong>Your Balance : </strong></span><span><strong>10,023</strong></span></DivContainer>
                                        <DivContainer className="d-flex flex-row justify-content-between my-1  align-items-end"><span><strong>Total Drakos Burned : </strong></span><span><strong>157</strong></span></DivContainer>
                                    </DivContainer>
                                    <hr/>
                                    <DivContainer className="opacity-panel-title text-center">Burn Info</DivContainer>
                                    <DivContainer className="opacity-panel-body">
                                        <DivContainer className="d-flex flex-row justify-content-between my-1  align-items-end"><span><strong>1 OF 1 = </strong></span><span><strong>3,000 $EGG</strong></span></DivContainer>
                                        <DivContainer className="d-flex flex-row justify-content-between my-1  align-items-end"><span><strong>LEGENDARY =</strong></span><span><strong>1,500 $EGG</strong></span></DivContainer>
                                        <DivContainer className="d-flex flex-row justify-content-between my-1  align-items-end"><span><strong>EPIC =</strong></span><span><strong>1,200 $EGG</strong></span></DivContainer>
                                        <DivContainer className="d-flex flex-row justify-content-between my-1  align-items-end"><span><strong>RARE =</strong></span><span><strong>900 $EGG</strong></span></DivContainer>
                                        <DivContainer className="d-flex flex-row justify-content-between my-1  align-items-end"><span><strong>UNCOMMON =</strong></span><span><strong>600 $EGG</strong></span></DivContainer>
                                        <DivContainer className="d-flex flex-row justify-content-between my-1  align-items-end"><span><strong>COMMON =</strong></span><span><strong>300 $EGG</strong></span></DivContainer>
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
