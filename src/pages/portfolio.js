import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import CtaArea from '../components/common/ctaArea';
import Footer from '../components/common/footer';
import PageHelmet from '../components/common/helmet';
import Offcanvas from '../components/common/offcanvas';
import SwitcherArea from '../components/common/switcherArea';
import PortfolioMain from '../components/portfolio/portfolio';

const Portfolio = () => {
    return (
        <div>
            <PortfolioMain dark={false} number={1}/> 
        </div>
    );
};

export default Portfolio;