import React from 'react'
import { Col, Container, Image, Row, Table } from 'react-bootstrap'
import { DivContainer, Layout, Section, SectionTitle } from '../tags/Tags'
import Collection from '../../assets/images/collection1.png'

export default function RaffleWinnerPage() {
    return (
        <DivContainer className="RaffleWinnerPage">
            <Layout>
                <Container>
                    <Section>
                        <Row className="justify-content-center">
                            <Col lg="4" md="4" sm="12" className='justify-contents-center'>
                                <Image src={Collection}/>
                            </Col>
                        </Row>
                    </Section>
                    <Section>
                        <SectionTitle className="mb-5">Raffle Winners</SectionTitle>
                        <DivContainer className="Bid-list">
                            <Table size="sm">
                                <tbody>
                                    <tr>
                                        <td>HrHhngqF5DPZZbg9MaoCcbhrnbqyvqRRuP1zXnrxeUe2</td>
                                        <td>1</td>
                                        <td>Claimed</td>
                                    </tr>
                                    <tr>
                                        <td>HrHhngqF5DPZZbg9MaoCcbhrnbqyvqRRuP1zXnrxeUe2</td>
                                        <td>1</td>
                                        <td>Claimed</td>
                                    </tr>
                                    <tr>
                                        <td>HrHhngqF5DPZZbg9MaoCcbhrnbqyvqRRuP1zXnrxeUe2</td>
                                        <td>4</td>
                                        <td>Claimed</td>
                                    </tr>
                                    <tr>
                                        <td>HrHhngqF5DPZZbg9MaoCcbhrnbqyvqRRuP1zXnrxeUe2</td>
                                        <td>11</td>
                                        <td>Claimed</td>
                                    </tr>
                                    <tr>
                                        <td>HrHhngqF5DPZZbg9MaoCcbhrnbqyvqRRuP1zXnrxeUe2</td>
                                        <td>6</td>
                                        <td>Claimed</td>
                                    </tr>
                                    <tr>
                                        <td>HrHhngqF5DPZZbg9MaoCcbhrnbqyvqRRuP1zXnrxeUe2</td>
                                        <td>3</td>
                                        <td>Claimed</td>
                                    </tr>
                                    <tr>
                                        <td>HrHhngqF5DPZZbg9MaoCcbhrnbqyvqRRuP1zXnrxeUe2</td>
                                        <td>12</td>
                                        <td>Claimed</td>
                                    </tr>
                                    <tr>
                                        <td>HrHhngqF5DPZZbg9MaoCcbhrnbqyvqRRuP1zXnrxeUe2</td>
                                        <td>11</td>
                                        <td>Claimed</td>
                                    </tr>
                                    <tr>
                                        <td>HrHhngqF5DPZZbg9MaoCcbhrnbqyvqRRuP1zXnrxeUe2</td>
                                        <td>7</td>
                                        <td>Claimed</td>
                                    </tr>
                                    <tr>
                                        <td>HrHhngqF5DPZZbg9MaoCcbhrnbqyvqRRuP1zXnrxeUe2</td>
                                        <td>6</td>
                                        <td>Claimed</td>
                                    </tr>
                                    <tr>
                                        <td>HrHhngqF5DPZZbg9MaoCcbhrnbqyvqRRuP1zXnrxeUe2</td>
                                        <td>4</td>
                                        <td>Claimed</td>
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
