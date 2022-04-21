import React from 'react'
import { DivContainer, Layout, Section, SectionSubTitle, SectionTitle, TimeDown } from '../tags/Tags'
import '../../App.css'
import { Container, Row, Col } from 'react-bootstrap'
import { LandingCarousel } from '../carousels/Carousels'
import { AuctionStateCard, CollectionCard, RaffleStateCard, RaffleTickets} from '../cards/Cards'
import MultiCarousel from '../carousels/MultiCarousel'

export default function LandingPage() {
    return (
        <DivContainer className="LandingPage">
            <Layout>
                <Container >
                    <Section>
                        <SectionTitle>Brun, Auction, Raffle and Trade</SectionTitle>
                        <SectionSubTitle>from leading creators and brands</SectionSubTitle>
                        <LandingCarousel/>
                        <TimeDown><span>0d</span>:<span>12h</span>:<span>51m</span>:<span>42s</span></TimeDown>
                    </Section>
                    <Section>
                        <SectionTitle>Top Collections</SectionTitle>
                        <DivContainer className="Top-Collections">
                            <Row>
                                <Col lg="4" md="4" sm="12">
                                    <CollectionCard/>
                                </Col>
                                <Col lg="4" md="4" sm="12">
                                    <CollectionCard/>
                                </Col>
                                <Col lg="4" md="4" sm="12">
                                    <CollectionCard/>
                                </Col>
                                <Col lg="4" md="4" sm="12">
                                    <CollectionCard/>
                                </Col>
                                <Col lg="4" md="4" sm="12">
                                    <CollectionCard/>
                                </Col>
                                <Col lg="4" md="4" sm="12">
                                    <CollectionCard/>
                                </Col>
                                <Col lg="4" md="4" sm="12">
                                    <CollectionCard/>
                                </Col>
                                <Col lg="4" md="4" sm="12">
                                    <CollectionCard/>
                                </Col>
                                <Col lg="4" md="4" sm="12">
                                    <CollectionCard/>
                                </Col>
                            </Row>
                        </DivContainer>
                    </Section>
                    <Section>
                        <SectionTitle>Raffle Tickets</SectionTitle>
                        <DivContainer className="Raffle-Tickets-carousel my-3 py-3">
                            <MultiCarousel>
                                <RaffleTickets/>
                                <RaffleTickets/>
                                <RaffleTickets/>
                                <RaffleTickets/>
                                <RaffleTickets/>
                                <RaffleTickets/>
                                <RaffleTickets/>
                                <RaffleTickets/>
                                <RaffleTickets/>
                            </MultiCarousel>
                        </DivContainer>
                    </Section>
                    <Section>
                        <SectionTitle>Raffle State</SectionTitle>
                        <MultiCarousel>
                            <RaffleStateCard/>
                            <RaffleStateCard/>
                            <RaffleStateCard/>
                            <RaffleStateCard/>
                            <RaffleStateCard/>
                            <RaffleStateCard/>
                            <RaffleStateCard/>
                            <RaffleStateCard/>
                            <RaffleStateCard/>
                        </MultiCarousel>
                    </Section>
                    <Section>
                        <SectionTitle>Auction State</SectionTitle>
                        <MultiCarousel>
                            <AuctionStateCard/>
                            <AuctionStateCard/>
                            <AuctionStateCard/>
                            <AuctionStateCard/>
                            <AuctionStateCard/>
                            <AuctionStateCard/>
                            <AuctionStateCard/>
                            <AuctionStateCard/>
                            <AuctionStateCard/>
                        </MultiCarousel>
                    </Section>
                </Container>
            </Layout>
        </DivContainer>
    )
}