import React from 'react';
import DeviceButtons from './DeviceButtons';
const MobilePreview = ({activeTheme}) => {
  return (
    <>
            <div class="mt-1" st>
                <div class="tablet">
                <div class="content"> 
                <iframe src={`/${activeTheme}`}  width="600" height="960" frameBorder="0" />
                </div>
            </div>
            </div>
           {/*  <DeviceButtons/> */}
    </>
  );
};

export default MobilePreview;