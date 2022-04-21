import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './components/pages/LandingPage'
import './App.css'
import EggAuctionPage from './components/pages/EggAuctionPage'
import RaffleTicketsPage from './components/pages/RaffleTicketsPage'
import BurnDrakoPage from './components/pages/BurnDrakoPage'
import EggAuctionDetailPage from './components/pages/EggAuctionDetailPage'
import FloorSweepPage from './components/pages/FloorSweepPage'
import MintNFTPage from './components/pages/MintNFTPage'
import P2PTradingPage from './components/pages/P2PTradingPage'
import RaffleDetailPage from './components/pages/RaffleDetailPage'
import RaffleWinnerPage from './components/pages/RaffleWinnerPage'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/raffleticket" component={ RaffleTicketsPage } />
                    <Route path="/eggauction" component={ EggAuctionPage } />
                    <Route path="/burndrako" component={ BurnDrakoPage } />
                    <Route path="/eggauctiondetail" component={ EggAuctionDetailPage } />
                    <Route path="/floorsweep" component={ FloorSweepPage } />
                    <Route path="/p2ptrading" component={ P2PTradingPage } />
                    <Route path="/raffledetail" component={ RaffleDetailPage } />
                    <Route path="/rafflewinner" component={ RaffleWinnerPage } />
                    <Route path="/mintnft" component={ MintNFTPage } />
                </Switch>
            </div>
        </Router>
    )
}

