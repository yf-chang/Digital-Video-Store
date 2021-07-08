import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedMovies from '../components/FeaturedMovies';
import FeaturedTV from '../components/FeaturedTV';
import ContentSection from '../components/ContentSection';

const HomePage = () => {
    return (
        <div>
            <main>
                <HeroSection/>
                <FeaturedMovies/>
                <FeaturedTV/>
                <ContentSection/>
            </main>
        </div>
    )
}

export default HomePage
