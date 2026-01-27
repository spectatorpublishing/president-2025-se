import React from 'react';
import TopNavigation from '../components/TopNavigation';
import Hero from '../components/Hero';
import WritingSection from '../components/WritingSection';
import WritingData from '../data/WritingData';
import Credits from '../components/Credits';

const Home = () => {
  // Assume the first article of the 'university' section is the main story/hero
  const heroArticle = WritingData["The University's next permanent president"] ? WritingData["The University's next permanent president"][0] : null;

  return (
    <div>
        <TopNavigation />
        <Hero article={heroArticle} />
        
        {Object.keys(WritingData).map((key, index) => {
            // If this is the university section, skip the first article as it's in the Hero
            const articles = (key === "The University's next permanent president" && heroArticle) 
                ? WritingData[key].slice(1) 
                : WritingData[key];
            
            // Alternating backgrounds: Start with White (index 0)
            const isDark = index % 2 !== 0;
            const backgroundColor = isDark ? '#002B5C' : 'white';
            const textColor = isDark ? 'white' : '#424242';

            return (
                <WritingSection
                    key={key}
                    title={key}
                    articles={articles}
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                />
            );
        })}
        <Credits/>
    </div>
  )
};

export default Home;