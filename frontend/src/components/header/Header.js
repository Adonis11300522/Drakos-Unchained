import React from 'react'
import { DivContainer } from '../tags/Tags'
import { Navbar, Container, Nav, NavDropdown, Image} from 'react-bootstrap'
import Logo from "../../assets/images/logo.png"

export  function Header() {
    return (
       <DivContainer className="Header">
           <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"><Image src={Logo} alt="Logo" width="50"/><span className="text-muted"><strong className="text-white pl-3">Drakos</strong> | NFT</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
                        <Nav
                            className="my-2 my-lg-0"
                            navbarScroll
                        >
                            <Nav.Link href="/burndrako">Burn a Drako</Nav.Link>
                            <Nav.Link href="/eggauction">$Egg Auction</Nav.Link>
                            <Nav.Link href="/raffleticket">Raffle Tickets</Nav.Link>
                            <NavDropdown title="More" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/p2ptrading">P2P Trading</NavDropdown.Item>
                                <NavDropdown.Item href="/floorsweep">Floor Sweep</NavDropdown.Item>
                                <NavDropdown.Item href="/mintnft">Mint your own NFT</NavDropdown.Item>
                                <NavDropdown.Item href="#action14">$Egg Trade</NavDropdown.Item>
                            </NavDropdown>   
                            <Nav.Link href="#action4" className='connect-wallet'>Connect Wallet</Nav.Link>                       
                        </Nav>                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
       </DivContainer>
    )
}
