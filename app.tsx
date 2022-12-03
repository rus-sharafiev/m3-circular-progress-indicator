import './css/styles.css';

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { CircularProgressIndicator } from './src/cpi';

const App = () => {
    const [height, setHeight] = useState(96);
    const [width, setWidth] = useState(96);
    const [radius, setRadius] = useState(36);
    const [stroke, setStroke] = useState(8);

    return ( 
        <>
            <main>
                <CircularProgressIndicator />
            </main>
            <div id='tools'>
                <div className='tools-title headline-medium'>Settings</div>
                <div className='tools-dimensions'>
                    <div className='tools-dimensions-title headline-small'>Dimentions</div>

                    <img src='img/icons/height.svg' width={100} height={100} className='tools-dimensions-height-logo' alt='height' />
                    <label htmlFor='height' className='body-large tools-dimensions-height-title'>Height</label>
                    <input type={'number'} name='height' id='height' value={height} className='tools-dimensions-height' />

                    <img src='img/icons/width.svg' width={100} height={100} className='tools-dimensions-width-logo' alt='width' />
                    <label htmlFor='width' className='body-large tools-dimensions-width-title'>Width</label>
                    <input type={'number'} name='width' id='width' value={width} className='tools-dimensions-width' />

                    <img src='img/icons/radius.svg' width={100} height={100} className='tools-dimensions-radius-logo' alt='radius' />
                    <label htmlFor='radius' className='body-large tools-dimensions-radius-title'>Radius</label>
                    <input type={'number'} name='radius' id='radius' value={radius} className='tools-dimensions-radius' />

                    <img src='img/icons/stroke.svg' width={100} height={100} className='tools-dimensions-stroke-logo' alt='stroke' />
                    <label htmlFor='stroke' className='body-large tools-dimensions-stroke-title'>Stroke width</label>
                    <input type={'number'} name='stroke' id='stroke' value={stroke} className='tools-dimensions-stroke' />

                </div>
                <div className='tools-bottom'>
                </div>
            </div>
            <header>
                <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42">
                    <path d="M21,2A19,19,0,1,1,2,21" style={{fill:'none', strokeMiterlimit: '10', strokeWidth: '4px'}}/>
                </svg>
                <div className='subtitle headline-small'>React module of the Material Design 3</div>
                <div className='title display-large'>Circular Progress Indicator</div>
            </header>
            <footer>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.58 31.77">
                    <path d="M16.29,0a16.29,16.29,0,0,0-5.15,31.75c.82.15,1.11-.36,1.11-.79s0-1.41,0-2.77C7.7,29.18,6.74,26,6.74,26a4.36,4.36,0,0,0-1.81-2.39c-1.47-1,.12-1,.12-1a3.43,3.43,0,0,1,2.49,1.68,3.48,3.48,0,0,0,4.74,1.36,3.46,3.46,0,0,1,1-2.18c-3.62-.41-7.42-1.81-7.42-8a6.3,6.3,0,0,1,1.67-4.37,5.94,5.94,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.41,15.41,0,0,1,8.16,0c3.11-2.11,4.47-1.67,4.47-1.67A5.91,5.91,0,0,1,25,11.07a6.3,6.3,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.85,3.85,0,0,1,1.11,3c0,2.18,0,3.94,0,4.47s.29.94,1.12.78A16.29,16.29,0,0,0,16.29,0Z" style={{fillRule: 'evenodd'}}/>
                </svg>
                <a className='footer-title headline-medium' href='https://github.com/rus-sharafiev/circularProgressIndicator' target={'_blank'}>&lt; / &gt; &nbsp;Source Code</a>
                <div className='footer-subtitle body-medium'>
                    code and design made by&nbsp;
                    <a className='footer-subtitle-span' href='https://github.com/rus-sharafiev' target={'_blank'}>rus-sharafiev</a>
                </div>
            </footer>
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);