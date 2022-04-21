import React from 'react'
import { Card, Image, Row, Col, Button, Badge } from 'react-bootstrap';
import { DivContainer } from '../tags/Tags';
import Collection1 from '../../assets/images/collection1.png'
import RaffleTicketImg from '../../assets/images/raffle_ticket.jpg'
import {FaCheck} from "react-icons/fa"


export function CollectionCard () {
    return(
        <Card className='CollectionCard my-3'>            
            <Card.Body>
                <DivContainer className="card-body-image p-3 text-center">
                    <Row>
                        <Col className='d-flex flex-column'>
                            <span className='text-muted'>MoonRank</span>
                            <span className='raking-value'><strong>1239</strong></span>
                        </Col>
                        <Col className='d-flex flex-column'>
                            <span className='text-muted'>HowRare.is Rank</span>
                            <span className='raking-value'><strong>1862</strong></span>
                        </Col>
                    </Row>
                    <DivContainer className="card-image mt-2">
                        <Image src={Collection1}/>
                    </DivContainer>
                </DivContainer>
                <DivContainer className="card-body-price d-flex flex-row justify-content-between text-muted my-2">
                    <DivContainer><span><strong className='text-white'>Price : </strong>5642.3 sol</span></DivContainer>
                    <DivContainer><span>($ 1,512.48)</span></DivContainer>
                </DivContainer>
                <DivContainer className="card-body-info text-center py-2">
                    <h2><strong>Drako #2634</strong></h2>
                    <p>Drakos Unchained ™ - The Eruption</p>
                </DivContainer>
            </Card.Body>
        </Card>
    );
}

export function RaffleTickets () {
    return (
        <Card className='RaffleTickets'>
            <Image src={RaffleTicketImg} alt="RaffleTickets"/>
        </Card>
    )
}

export function RaffleStateCard () {
    return (
        <Card className='StateCard text-center'>            
            <Card.Body>
                <DivContainer className="card-image">
                    <Card.Img variant="top" src={Collection1} />
                </DivContainer>
                <Card.Title>Drako @2364</Card.Title>
                <Card.Text className='text-muted d-flex flex-row justify-content-between'>
                    <span>936 sold</span><span>170 winners</span>
                </Card.Text>
                <Card.Subtitle className='mb-2'>● Raffle open !</Card.Subtitle>
                <Button className='BtnSkyOpen'>View Raffle</Button>
            </Card.Body>
        </Card>
    )
}

export function AuctionStateCard () {
    return (
        <Card className='StateCard text-center state-live'>            
            <Card.Body>
                <DivContainer className="card-image p-2">
                    <h3 className='mb-0'><strong>Drako #2603</strong></h3>
                    <span>Drakos Unchained ™ - The Eruption</span>
                    <DivContainer className="card-image-body">
                        <Card.Img variant="top" src={Collection1} />
                    </DivContainer>
                </DivContainer>
                <Card.Title>Drako @2364</Card.Title>
                <Card.Text className='text-muted d-flex flex-row justify-content-between'>
                    <span>Current Bid</span><span>950 $</span>
                </Card.Text>
                <Card.Subtitle className='mb-2'>● Ends in: 0d 13h 44m 52s</Card.Subtitle>
                <DivContainer>
                    <Button className='StateCardBtn'>View Auction</Button>
                </DivContainer>                
            </Card.Body>
        </Card>
    )
}

export function BurnDrakoCard () {
    return(
        <Card className='BurnDrakoCard my-3'>            
            <Card.Body>
                <DivContainer className="card-image-body">
                    <Card.Img variant="top" src={Collection1} />
                </DivContainer>                
                <Button className='BurnBtn mt-3'>Burn Drako</Button>
            </Card.Body>
        </Card>
    )
}

export function TradeCollectionSmCard () {
    return (
        <Card className='TradeCollectionSmCard'>            
            <Card.Body>
                <DivContainer className="card-image-body">
                    <Card.Img variant="top" src={Collection1} />
                    <Badge><FaCheck/></Badge>
                </DivContainer>
                <Card.Subtitle className='text-center mt-2'>Drako #2364</Card.Subtitle>
            </Card.Body>
        </Card>
    )
}

export function RemoveCard () {
    return(
        <Card className='RemoveCard'>
            <Card.Body>
                <DivContainer className="d-flex flex-row align-item-center">
                    <DivContainer><Image src={Collection1}/></DivContainer>
                    <DivContainer className="d-flex flex-column justify-content-center ml-2">
                        <span>Solana</span>
                        <span><strong>0.01</strong></span>
                    </DivContainer>                    
                </DivContainer>
                <DivContainer><Button>Remove</Button></DivContainer>
            </Card.Body>            
        </Card>
    )
}