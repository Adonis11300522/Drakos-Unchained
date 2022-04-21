import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { AuctionStateCard } from '../cards/Cards'
import { DivContainer, Layout, Section, SectionTitle } from '../tags/Tags'

export default function EggAuctionPage() {
    return (
        <DivContainer>
            <Layout>
                <Container>
                    <Section>
                        <SectionTitle>$Egg Auction</SectionTitle>
                        <DivContainer className="Auction-list">
                            <Row>
                                <Col lg="4" md="4" sm="12">
                                    <AuctionStateCard/>
                                </Col>
                                <Col lg="4" md="4" sm="12">
                                    <AuctionStateCard/>
                                </Col>
                                <Col lg="4" md="4" sm="12">
                                    <AuctionStateCard/>
                                </Col>
                                <Col lg="4" md="4" sm="12">
                                    <AuctionStateCard/>
                                </Col>
                                <Col lg="4" md="4" sm="12">
                                    <AuctionStateCard/>
                                </Col>
                                <Col lg="4" md="4" sm="12">
                                    <AuctionStateCard/>
                                </Col>
                                <Col lg="4" md="4" sm="12">
                                    <AuctionStateCard/>
                                </Col>
                                <Col lg="4" md="4" sm="12">
                                    <AuctionStateCard/>
                                </Col>
                                <Col lg="4" md="4" sm="12">
                                    <AuctionStateCard/>
                                </Col>
                            </Row>
                        </DivContainer>
                    </Section>
                </Container>
            </Layout>
        </DivContainer>
    )
}
