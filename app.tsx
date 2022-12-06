import './css/styles.css';

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { useFormik } from 'formik';
import { CircularProgressIndicator } from './src/cpi';

const iconsLoaded = (event: any) => {
    event.fontfaces.map( (font: any) => {
        if (font.family == 'Material Symbols Rounded') {
            document.getElementById("root")?.classList.remove('icons-hidden');
        }
    })
}
document.fonts.addEventListener("loadingdone", iconsLoaded);

const App = () => {
    const [formIsEmpty, SetFormIsEmpty] = useState(true);
    const [reload, setReload] = useState(1);

    const formik = useFormik({
        initialValues: {
            height: '',
            width: '',
            radius: '',
            stroke: '',
            color: '#79747e',
            dur: '',
            timeout: ''
        },
        onSubmit: values => {
            saveSVG();
        },
    });

    useEffect(() => {
        if (Object.values(formik.values).every(val => val === '' || val === '#79747e')) {
            SetFormIsEmpty(true)
        } else {
            SetFormIsEmpty(false)
        }
    }, [formik.values]);

    const saveSVG = () => {
        let svg = document.getElementsByClassName('circular-progress-indicator')[0];
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        var svgData = svg.outerHTML;
        var preface = '<?xml version="1.0" standalone="no"?>\r\n';
        var svgBlob = new Blob([preface, svgData], {type:"image/svg+xml;charset=utf-8"});
        var svgUrl = URL.createObjectURL(svgBlob);
        var downloadLink = document.createElement("a");
        downloadLink.href = svgUrl;
        downloadLink.download = "m3-circular-progress-indicator.svg";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    return (
        <>
            <main>
                <div className='svg-container'>
                    <div>
                        <CircularProgressIndicator
                            height={Number(formik.values.height)}
                            width={Number(formik.values.width)}
                            r={Number(formik.values.radius)}
                            strokeWidth={Number(formik.values.stroke)}
                            dur={Number(formik.values.dur)}
                            timeout={Number(formik.values.timeout)}
                            stroke={formik.values.color}
                            key={reload}
                        />
                    </div>
                </div>
                <div className='react-info-container body-large'>
                    <div>                    
                        <div>
                            <img src='/img/icons/react-logo.svg' alt='react-logo' /> 
                            <span className='headline-large'>React component props</span>
                            <span className='title-large'>Most props looks like SVG attributes:</span>
                        </div>
                        <ul>
                            <li><span className='mono'>height</span> - vertical length of the element <span className='defaults body-medium'>{`(default: 50)`}</span></li>
                            <li><span className='mono'>width</span> - horizontal length of the element <span className='defaults body-medium'>{`(default: 50)`}</span></li>
                            <li><span className='mono'>r</span> - radius of the circle <span className='defaults body-medium'>{`(default: 18)`}</span></li>
                            <li><span className='mono'>strokeWidth</span> - width of the stroke <span className='defaults body-medium'>{`(default: 4)`}</span></li>
                            <li><span className='mono'>dur</span> - duration of the animation <span className='defaults body-medium'>{`(default: 4.1)`}</span></li>
                            <li><span className='mono'>stroke</span> - color used to paint the outline of the circle <span className='defaults body-medium'>{`(default: undefined)`}</span></li>
                            <li><span className='mono'>timeout</span> - describes the delay before showing the component <span className='defaults body-medium'>{`(default: 200)`}</span>
                                <ul>
                                    <li className='body-small defaults'>click the refresh button inside the timeout field to see a result</li>
                                </ul>
                            </li>
                            <li><span className='mono'>className</span> - class name to assign to the component <span className='defaults body-medium'>{`(default: undefined)`}</span></li>
                            <li><span className='mono'>onClick</span> - pass onClick to the svg element of the component</li>
                        </ul>
                    </div>
                    <pre className='react-props mono'>
                    const <span className='y'>CircularProgressIndicator</span> <span className='b'>=</span> <span className='v'>{`((`} </span>props: <span className='v'>{`{`}</span><br />
                    {`  `}height?: <span className='n'>number</span><span className='v'>;</span><br />
                    {`  `}width?: <span className='n'>number</span><span className='v'>;</span><br />
                    {`  `}r?: <span className='n'>number</span><span className='v'>;</span><br />
                    {`  `}strokeWidth?: <span className='n'>number</span><span className='v'>;</span><br />
                    {`  `}dur?: <span className='n'>number</span><span className='v'>;</span><br />
                    {`  `}stroke?: <span className='n'>string</span><span className='v'>;</span><br />
                    {`  `}timeout?: <span className='n'>number</span><span className='v'>;</span><br />
                    {`  `}className?: <span className='n'>string</span><span className='v'>;</span><br />
                    {`  `}<span className='n'>onClick</span>?: <span className='v'>{`()`}</span> <span className='b'>{`=>`}</span> void<br />
                    <span className='v'>{`})`}</span> <span className='b'>{`=>`}</span> <span className='v'>{`{`}</span><br />
                    {`  `}// ...<br />
                    <span className='v'>{`}`}</span>
                    </pre>          
                </div>         
            </main>
            <form onSubmit={formik.handleSubmit} className='tools'>
                <span className='tools-dimensions-title display-small'>Customize</span>

                <img src='img/icons/height.svg' alt='height' />
                <div>
                    <input className={formik.touched.height && formik.errors.height ? 'error' : undefined}
                        id="height"
                        name="height"
                        type="number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.height}
                        placeholder={' '}
                    />
                    <label htmlFor="height">SVG height</label>
                    {formik.touched.height && formik.errors.height ? (
                        <>
                            <div className='error-label'>{formik.errors.height}</div>
                            <div className='material-symbols-rounded error-icon'>error</div>
                        </>
                    ) : formik.values.height ? ( <button className='material-symbols-rounded' onClick={() => formik.setFieldValue('height', '', false)}>cancel</button> ) : null }
                </div>

                <img src='img/icons/width.svg' alt='width' />        
                <div>
                    <input className={formik.touched.width && formik.errors.width ? 'error' : undefined}
                        id="width"
                        name="width"
                        type="number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.width}
                        placeholder={' '}
                    />
                    <label htmlFor="width">SVG width</label>
                    {formik.touched.width && formik.errors.width ? (
                        <>
                            <div className='error-label'>{formik.errors.width}</div>
                            <div className='material-symbols-rounded error-icon'>error</div>
                        </>
                    ) : formik.values.width ? ( <button className='material-symbols-rounded' onClick={() => formik.setFieldValue('width', '', false)}>cancel</button> ) : null }
                </div>

                <img src='img/icons/radius.svg' alt='radius' />            
                <div>
                    <input className={formik.touched.radius && formik.errors.radius ? 'error' : undefined}
                        id="radius"
                        name="radius"
                        type="number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.radius}
                        placeholder={' '}
                    />
                    <label htmlFor="radius">Radius</label>
                    {formik.touched.radius && formik.errors.radius ? (
                        <>
                            <div className='error-label'>{formik.errors.radius}</div>
                            <div className='material-symbols-rounded error-icon'>error</div>
                        </>
                    ) : formik.values.radius ? ( <button className='material-symbols-rounded' onClick={() => formik.setFieldValue('radius', '', false)}>cancel</button> ) : null }
                </div>

                <img src='img/icons/stroke.svg' alt='stroke' />           
                <div>
                    <input className={formik.touched.stroke && formik.errors.stroke ? 'error' : undefined}
                        id="stroke"
                        name="stroke"
                        type="number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.stroke}
                        placeholder={' '}
                    />
                    <label htmlFor="stroke">Stroke width</label>
                    {formik.touched.stroke && formik.errors.stroke ? (
                        <>
                            <div className='error-label'>{formik.errors.stroke}</div>
                            <div className='material-symbols-rounded error-icon'>error</div>
                        </>
                    ) : formik.values.stroke ? ( <button className='material-symbols-rounded' onClick={() => formik.setFieldValue('stroke', '', false)}>cancel</button> ) : null }
                </div>
            
                <img src='img/icons/duration.svg' alt='duration' />           
                <div>
                    <input className={formik.touched.dur && formik.errors.dur ? 'error' : undefined}
                        id="dur"
                        name="dur"
                        type="number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.dur}
                        placeholder={' '}
                    />
                    <label htmlFor="dur">Duration*</label>
                    {formik.touched.dur && formik.errors.dur ? (
                        <div className='material-symbols-rounded error-icon'>error</div>
                    ) : formik.values.dur ? 
                        <button className='material-symbols-rounded' onClick={() => formik.setFieldValue('dur', '', false)}>cancel</button> : null }
                    {formik.touched.dur && formik.errors.dur ? (
                        <div className='error-label'>{formik.errors.dur}</div>
                    ) : <div className='supporting-text'>*set duration in seconds</div> }
                </div>
                
                <img src='img/icons/timeout.svg' alt='timeout' />           
                <div>
                    <input className={formik.touched.timeout && formik.errors.timeout ? 'error' : undefined}
                        id="timeout"
                        name="timeout"
                        type="number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.timeout}
                        placeholder={' '}
                    />
                    <label htmlFor="timeout">Timeout*</label>
                    {formik.touched.timeout && formik.errors.timeout ? (
                        <div className='material-symbols-rounded error-icon'>error</div>
                    ) : formik.values.timeout ?
                        <>
                            <button className='material-symbols-rounded' onClick={() => formik.setFieldValue('timeout', '', false)}>cancel</button> 
                            <button type='button' className='material-symbols-rounded reload-svg' onClick={ () => setReload(Math.random()) }>refresh</button>
                        </>
                    : null }
                    {formik.touched.timeout && formik.errors.timeout ? (
                        <div className='error-label'>{formik.errors.timeout}</div>
                    ) : <div className='supporting-text'>*set timeout in milliseconds</div> }
                </div>

                <img src='img/icons/color.svg' alt='color' />           
                <div>
                    <input className={formik.touched.color && formik.errors.color ? 'error' : undefined}
                        id="color"
                        name="color"
                        type="color"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.color}
                        placeholder={' '}
                    />
                    <label htmlFor="color">Stroke color</label>
                    {formik.touched.color && formik.errors.color ? (
                        <>
                            <div className='error-label'>{formik.errors.color}</div>
                            <div className='material-symbols-rounded error-icon'>error</div>
                        </>
                    ) : formik.values.color != '#79747e' ? ( <button className='material-symbols-rounded' onClick={() => formik.setFieldValue('color', '#79747e', false)}>cancel</button> ) : null }
                </div>

                <button className='outlined' type='button' 
                    onClick={() => formik.resetForm()}
                    disabled={formIsEmpty}
                >Reset to Material 3 defaults</button>
                <button className='filled' type='submit'>Download SVG</button>

            </form>
            <header>
                <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42">
                    <path d="M21,2A19,19,0,1,1,2,21" style={{fill:'none', strokeMiterlimit: '10', strokeWidth: '4px'}}/>
                </svg>
                <div className='headline-small'>SVG implementation of the Material Design 3</div>
                <div className='display-large'>Circular Progress Indicator</div>
                <div className='title-large'>Also available as React component</div>
            </header>
            <footer>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.58 31.77">
                    <path d="M16.29,0a16.29,16.29,0,0,0-5.15,31.75c.82.15,1.11-.36,1.11-.79s0-1.41,0-2.77C7.7,29.18,6.74,26,6.74,26a4.36,4.36,0,0,0-1.81-2.39c-1.47-1,.12-1,.12-1a3.43,3.43,0,0,1,2.49,1.68,3.48,3.48,0,0,0,4.74,1.36,3.46,3.46,0,0,1,1-2.18c-3.62-.41-7.42-1.81-7.42-8a6.3,6.3,0,0,1,1.67-4.37,5.94,5.94,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.41,15.41,0,0,1,8.16,0c3.11-2.11,4.47-1.67,4.47-1.67A5.91,5.91,0,0,1,25,11.07a6.3,6.3,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.85,3.85,0,0,1,1.11,3c0,2.18,0,3.94,0,4.47s.29.94,1.12.78A16.29,16.29,0,0,0,16.29,0Z" style={{fillRule: 'evenodd'}}/>
                </svg>
                <a className='footer-title headline-medium' href='https://github.com/rus-sharafiev/m3-circular-progress-indicator' target={'_blank'}>&lt; / &gt; &nbsp;Source Code</a>
                <div className='footer-subtitle body-medium'>
                    code and design made by&nbsp;
                    <a className='footer-subtitle-span' href='https://github.com/rus-sharafiev' target={'_blank'}>rus-sharafiev</a>
                </div>
            </footer>
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);