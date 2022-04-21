import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import { DivContainer} from '../tags/Tags'
import BannerCoin from '../../assets/images/bannercoin.gif'

export default function BannerBottom() {
    return (
        <DivContainer className="BannerBottom py-5 text-center">
            <Container>
                <DivContainer className="BannerBottom-header">
                    <DivContainer className="BannerBottom-header-title">UNIQUE PRODUCT</DivContainer>
                    <DivContainer className="BannerBottom-header-text">When you buy a Drakos, you don't buy only an avatar or a piece of art. You’re becoming part of a new era of the digital world with an asset whose benefits and offerings will increase over time.</DivContainer>
                </DivContainer>
                <DivContainer className="BannerBottom-main pt-5">
                    <Row>
                        <Col lg="1" md="1" sm="12"><Image src={BannerCoin} width="100" alt="banner-image"/></Col>
                        <Col lg="10" md="10" sm="12">
                            <h1>$Egg Token</h1>
                            <p>Start earning passive income simply by holding your Drakos NFT and monetizing your gaming experiences by joining a Drakos battle.</p>
                        </Col>
                        <Col lg="1" md="1" sm="12"><Image src={BannerCoin} width="100" alt="banner-image"/></Col>
                    </Row>
                </DivContainer>
            </Container>
        </DivContainer>
    )
}