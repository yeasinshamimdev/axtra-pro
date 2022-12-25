import Head from 'next/head';
import React from 'react';
import Footer from '../components/common/footer';
import CtaArea from '../components/common/ctaArea';
import OffcanvasDark from '../components/common/offcanvasDark';
import SwitcherAreaDark from '../components/common/switcherAreaDark';
import Link from 'next/link'; 
import PortfolioMain from '../components/portfolio/portfolio';

const PortfolioDark = () => {
    return (
        <div>
            <PortfolioMain dark={true} number={1}/>
        </div> 
    );
};

export default PortfolioDark;