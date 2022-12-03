import circularProgressIndicator from './cpi.js';

const main = document.createElement('main');
const header = document.createElement('header');
const footer = document.createElement('footer');
const tools = document.createElement('div'); tools.id = 'tools';

document.body.append(main, header, footer, tools);

const titleLogo = document.createElementNS("http://www.w3.org/2000/svg", "svg"); titleLogo.setAttribute('viewBox', '0 0 42 42');
    const arc = document.createElementNS("http://www.w3.org/2000/svg", 'path');
        arc.setAttribute('d','M21,2A19,19,0,1,1,2,21'); titleLogo.append(arc);
const subTitle = document.createElement('div'); subTitle.classList.add('subtitle', 'headline-small'); subTitle.innerHTML = 'SVG implementation of the Material Design';
const title = document.createElement('div'); title.classList.add('title', 'display-large'); title.innerHTML = 'Circular progress indicator';
header.append(titleLogo, subTitle, title);

const footerLogo = document.createElementNS("http://www.w3.org/2000/svg", "svg"); footerLogo.setAttribute('viewBox', '0 0 32.58 31.77');
    const path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    path.setAttribute('d','M16.29,0a16.29,16.29,0,0,0-5.15,31.75c.82.15,1.11-.36,1.11-.79s0-1.41,0-2.77C7.7,29.18,6.74,26,6.74,26a4.36,4.36,0,0,0-1.81-2.39c-1.47-1,.12-1,.12-1a3.43,3.43,0,0,1,2.49,1.68,3.48,3.48,0,0,0,4.74,1.36,3.46,3.46,0,0,1,1-2.18c-3.62-.41-7.42-1.81-7.42-8a6.3,6.3,0,0,1,1.67-4.37,5.94,5.94,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.41,15.41,0,0,1,8.16,0c3.11-2.11,4.47-1.67,4.47-1.67A5.91,5.91,0,0,1,25,11.07a6.3,6.3,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.85,3.85,0,0,1,1.11,3c0,2.18,0,3.94,0,4.47s.29.94,1.12.78A16.29,16.29,0,0,0,16.29,0Z'); 
    footerLogo.append(path);
const footerTitle = document.createElement('a'); 
    footerTitle.classList.add('footer-title', 'headline-medium'); 
    footerTitle.innerHTML = '&lt; / &gt; &nbsp;Source Code'; 
    footerTitle.href = 'https://github.com/rus-sharafiev/circularProgressIndicator';
    footerTitle.target = "_blank";
const footerSubTitle = document.createElement('div');
    footerSubTitle.classList.add('footer-subtitle', 'body-medium'); 
    footerSubTitle.innerHTML = `code and design made by `;
    const footerSubTitleSpan = document.createElement('a'); 
        footerSubTitleSpan.classList.add('footer-subtitle-span', 'body-medium'); 
        footerSubTitleSpan.innerHTML = 'rus-sharafiev';
        footerSubTitleSpan.href = 'https://github.com/rus-sharafiev'; 
        footerSubTitleSpan.target = "_blank";
    footerSubTitle.append(footerSubTitleSpan);
footer.append(footerLogo, footerTitle, footerSubTitle);

const toolsTitle = document.createElement('div'); toolsTitle.classList.add('tools-title', 'headline-medium'); toolsTitle.innerHTML = 'Settings';
const toolsDimentions = document.createElement('div'); toolsDimentions.classList.add('tools-dimensions');
const toolsDimentionsTitle = document.createElement('div'); toolsDimentionsTitle.classList.add('tools-dimensions-title', 'headline-small'); toolsDimentionsTitle.innerHTML = 'Dimentions';

    const heightLogo = new Image (100, 100); heightLogo.src = 'img/icons/height.svg'; heightLogo.classList.add('tools-dimensions-height-logo');
    const heightTitle = document.createElement('label'); heightTitle.innerHTML = heightLogo.alt = 'Height'; 
        heightTitle.setAttribute('for', 'height'); heightTitle.classList.add('body-large', 'tools-dimensions-height-title');
    const height = document.createElement('input'); height.classList.add('tools-dimensions-height'); 
        height.type = 'number';
        height.value = 96;
        height.name = height.id = 'height';
        height.onchange = () => { loadSVG() }
    
    const widthLogo = new Image (100, 100); widthLogo.src = 'img/icons/width.svg'; widthLogo.classList.add('tools-dimensions-width-logo'); 
    const widthTitle = document.createElement('label'); widthTitle.innerHTML = widthLogo.alt = 'Width'; 
        widthTitle.setAttribute('for', 'width'); widthTitle.classList.add('body-large', 'tools-dimensions-width-title');
    const width = document.createElement('input'); width.classList.add('tools-dimensions-width');
        width.type = 'number';
        width.value = 96;
        width.name = width.id = 'width';
        width.onchange = () => { loadSVG() }

    const radiusLogo = new Image (100, 100); radiusLogo.src = 'img/icons/radius.svg'; radiusLogo.classList.add('tools-dimensions-radius-logo'); 
    const radiusTitle = document.createElement('label'); radiusTitle.innerHTML = radiusLogo.alt = 'Radius'; 
        radiusTitle.setAttribute('for', 'radius'); radiusTitle.classList.add('body-large', 'tools-dimensions-radius-title');
    const radius = document.createElement('input'); radius.classList.add('tools-dimensions-radius');
        radius.type = 'number';
        radius.value = 36;
        radius.name = radius.id = 'radius';
        radius.onchange = () => { loadSVG() }

    const strokeLogo = new Image (100, 100); strokeLogo.src = 'img/icons/stroke.svg'; strokeLogo.classList.add('tools-dimensions-stroke-logo'); 
    const strokeTitle = document.createElement('label'); strokeTitle.innerHTML = strokeLogo.alt = 'Stroke width'; 
        strokeTitle.setAttribute('for', 'stroke'); strokeTitle.classList.add('body-large', 'tools-dimensions-stroke-title');
    const stroke = document.createElement('input'); stroke.classList.add('tools-dimensions-stroke');
        stroke.type = 'number';
        stroke.value = 8;
        stroke.name = stroke.id = 'stroke';
        stroke.onchange = () => { loadSVG() }

    toolsDimentions.append(toolsDimentionsTitle, heightLogo, heightTitle, height, widthLogo, widthTitle, width, radiusLogo, radiusTitle, radius, strokeLogo, strokeTitle, stroke);

    
const toolsBottom = document.createElement('div'); toolsBottom.classList.add('tools-bottom');
    const styleTitle = document.createElement('div'); styleTitle.classList.add('style-title', 'headline-small'); styleTitle.innerHTML = 'Use inline color';
    const styleSwitch = document.createElement('label'); styleSwitch.classList.add('switch');
        const styleSwitchInput = document.createElement('input'); 
            styleSwitchInput.type = 'checkbox';
            styleSwitchInput.onchange = () => {
                switchStyle();
            }
        const styleSwitchSlider = document.createElement('span'); styleSwitchSlider.classList.add('slider');
    styleSwitch.append(styleSwitchInput, styleSwitchSlider);

    const styleContainer = document.createElement('div'); styleContainer.classList.add('style-container');
    
toolsBottom.append(styleTitle, styleSwitch, styleContainer);

const colorTitle = document.createElement('div'); colorTitle.classList.add('color-title', 'body-large'); colorTitle.innerHTML = 'Color';
const color = document.createElement('input');
    color.type = 'color';
    color.value = '#7F67BE';
    color.id = color.title = 'color';
    color.addEventListener("input", loadSVG, false); 
function customColor() {
    styleContainer.innerHTML = ''; styleContainer.append(colorTitle, color)
}

const noColorTitle = document.createElement('div'); noColorTitle.classList.add('no-color-title', 'body-medium'); noColorTitle.innerHTML = 'In this case you have to use CSS to style the stroke color';
const noColor = document.createElement('div'); noColor.classList.add('no-color');
noColor.innerHTML = 
`<pre style="color: var(--md-sys-color-outline);">.circular-progress-indicator {
    stroke: #7F67BE;
}</pre>`;
function cssColor() {
    styleContainer.innerHTML = ''; styleContainer.append(noColorTitle, noColor)
}
function switchStyle() {
    switch (styleSwitchInput.checked) {
        case true: customColor(); loadSVG(); break;
        case false: cssColor(); loadSVG(); break;
    }
}
switchStyle();

const download = document.createElement('div'); download.classList.add('download');
const downloadBtn = document.createElement('input'); downloadBtn.classList.add('label-large');
    downloadBtn.type = 'button';
    downloadBtn.id = 'download-btn';
    downloadBtn.value = 'Download SVG';
    downloadBtn.onclick = () => {
        saveSVG();
    }
download.append(downloadBtn);

tools.append(toolsTitle, toolsDimentions, toolsBottom, download);

var svg;
function loadSVG() {
    main.innerHTML = '';
    switch (styleSwitchInput.checked) {
        case true: 
            svg = circularProgressIndicator(radius.value, width.value, height.value, stroke.value, color.value);
            break;
        case false: 
            svg = circularProgressIndicator(radius.value, width.value, height.value, stroke.value);
            break;
    }
    main.append(svg);
}
loadSVG();

function saveSVG() {
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    var svgData = svg.outerHTML;
    var preface = '<?xml version="1.0" standalone="no"?>\r\n';
    var svgBlob = new Blob([preface, svgData], {type:"image/svg+xml;charset=utf-8"});
    var svgUrl = URL.createObjectURL(svgBlob);
    var downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = "circular_progress_indicator.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}