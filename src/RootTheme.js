import React, { useState } from 'react';
import WidgetAll from './WidgetAll';
import MobilePreview from './MobilePreview';
import TabletPreview from './TabletPreview';
import TabletPreviewLands from './TabletPreviewLands';

const RootTheme = () => {
  const [activeTheme, setActiveTheme] = useState('yellow');
  document.body.classList.add(`theme-${activeTheme}`);

  const handleButtonClick = (theme) => {
    document.body.classList.remove(`theme-${activeTheme}`);
    setActiveTheme(theme);
    document.body.classList.add(`theme-${theme}`);
  };

  
  const [selectedOption, setSelectedOption] = useState('desktop');
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

const renderSelectedComponent = () => {
  switch (selectedOption) {
    case 'mobile':
      return <MobilePreview key={`mobile-${activeTheme}`} activeTheme={activeTheme} />;
    case 'tablet':
      return <TabletPreview key={`tablet-${activeTheme}`} activeTheme={activeTheme} />;
    case 'tablet-landscape':
      return <TabletPreviewLands key={`tablet-landscape-${activeTheme}`} activeTheme={activeTheme} />;
    case 'desktop':
      return <WidgetAll key={`desktop-${activeTheme}`} activeTheme={activeTheme} />;
    default:
      return null;
  }
};

  return (
    <div>
        <div className='wrapper'>    
              
              {renderSelectedComponent()}
              <div className='invoice-wrap'>
              <div className='rounded t-c p-1 flex-center'>
                  <select value={selectedOption} onChange={handleSelectChange} style={{ padding: '0.5em', borderRadius: '0' }}>                        
                        <option value="desktop">Desktop</option>
                        <option value="tablet">Tablet Portrait</option>
                        <option value="tablet-landscape">Tablet Landscape</option>
                        <option value="mobile">Mobile</option>
                        
                  </select>
                  <div class='flex-center ms-1 bg-white rounded ' style={{backgroundColor:'#ffffff91', padding:'0.5em 1.5em'}}>
                      <span>Theme:</span>
                      <span>
                        <span className={`theme-btn ${activeTheme === 'yellow' ? 'active' : ''}`} style={{backgroundColor:'#FFA100'}} onClick={() => handleButtonClick('yellow')}></span>
                        <span className={`theme-btn ${activeTheme === 'blue' ? 'active' : ''}`} style={{backgroundColor:'#55d2ff'}} onClick={() => handleButtonClick('blue')}></span>
                        <span className={`theme-btn ${activeTheme === 'green' ? 'active' : ''}`} style={{backgroundColor:'#80CC20'}} onClick={() => handleButtonClick('green')}></span>
                      </span>                 
                  </div>
              </div>
              </div>
          
        </div>
      <footer className='t-c'>
            <p>&copy; {new Date().getFullYear()}, All rights reserved by <a href="https://www.invotools.io" target="_blank" rel="noopener noreferrer"><u>www.Invotools.io</u></a></p>
      </footer>
    </div>
  );
};

export default RootTheme;