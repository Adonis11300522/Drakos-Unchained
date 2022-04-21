import React from 'react'
import BannerBottom from '../banners/Banners';
import Footer from '../footer/Footer';
import { Header } from '../header/Header';

export  function DivContainer({className, children}) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}


export function Layout ({children}) {
    return(
        <DivContainer className="Layout">
            <Header/>
            {children}
            <BannerBottom/>
            <Footer/>
        </DivContainer>
    );
}

export function SectionTitle ({children}){
    return(
        <DivContainer className="SectionTitle text-center">{children}</DivContainer>
    );
}

export function SectionSubTitle ({children}){
    return(
        <DivContainer className="SectionSubTitle text-center my-3">{children}</DivContainer>
    );
}

export function Section ({children}){
    return(
        <DivContainer className="Section py-5 mb-3">
            {children}
        </DivContainer>
    );
}

export function CarouselBadge ({children}){
    return(
        <DivContainer className="CarouselBadge">
            {children}
        </DivContainer>
    );
}

export function TimeDown ({children}){
    return(
        <DivContainer className="TimeDown text-center my-3">
            {children}
        </DivContainer>
    );
}