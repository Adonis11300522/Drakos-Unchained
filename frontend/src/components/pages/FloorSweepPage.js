import React from 'react'
import { Container, Row, Form, Button, Col } from 'react-bootstrap'
import { CollectionCard } from '../cards/Cards'
import { DivContainer, Layout, Section, SectionTitle } from '../tags/Tags'

export default function FloorSweepPage() {
    return (
        <DivContainer className="FloorSweepPage">
            <Layout>
                <Container>
                    <Section>
                        <SectionTitle>Floor Sweep</SectionTitle>
                        <DivContainer className="opacity-panel p-3 mt-3">
                            <Form>
                                <Row className="mb-3 align-items-end">
                                    <Form.Group as={Col} md="10" sm="10" className='my-2'  controlId="validationCustom03">
                                        <Form.Control type="text" placeholder="Drako" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid city.
                                        </Form.Control.Feedback>
                                    </Form.Group>    
                                    <Form.Group as={Col} md="2" sm="2" className='my-2' controlId="validationCustom05">
                                        <Button className='BtnSkyOpen'>Mint</Button>
                                    </Form.Group>                                                                     
                                </Row>
                            </Form>
                            <DivContainer className="collection-list">
                                <Row>
                                    <Col lg="4" md="4" sm="12"><CollectionCard/></Col>
                                    <Col lg="4" md="4" sm="12"><CollectionCard/></Col>
                                    <Col lg="4" md="4" sm="12"><CollectionCard/></Col>
                                    <Col lg="4" md="4" sm="12"><CollectionCard/></Col>
                                    <Col lg="4" md="4" sm="12"><CollectionCard/></Col>
                                    <Col lg="4" md="4" sm="12"><CollectionCard/></Col>
                                    <Col lg="4" md="4" sm="12"><CollectionCard/></Col>
                                    <Col lg="4" md="4" sm="12"><CollectionCard/></Col>
                                    <Col lg="4" md="4" sm="12"><CollectionCard/></Col>
                                </Row>
                            </DivContainer>
                        </DivContainer>
                    </Section>
                </Container>
            </Layout>
        </DivContainer>
    )
}
