import React from 'react';

import '../../styles/exercise2.css';

const Exercise2 = () => {
  return (
    <div>
    <ul className='nav'>
        <li><a href="#explanation">Home</a></li>
        <li><a href="#about_blue">About blue</a></li>
        <li><a href="#about_yellow">About yellow</a></li>
    </ul>

    <div id='page_content'>

        <h1>All about colours</h1>

        <div id='explanation'>
            <p>This is a page about colours. You need to fix it so that:</p>
            <ul>
                <li>The sections about blue and yellow have 3px solid black borders.</li>
                <li>The &#39;About blue&#39; has a light blue (#6495ED) background.</li>
                <li>The &#39;About yellow&#39; has a light yellow (#FFEBCD) background.</li>
                <li>The list of points in the &#39;About blue&#39; section should be in blue text (but the paragraph text shouldn&#39;t be).</li>
                <li>The list of points in the &#39;About yellow&#39; section should be in orange text (but the paragraph text shouldn&#39;t be).</li>
                <li>The final item in both colour section lists is the most important. It should be in font size 16px, with font weight bold.</li>
                <li>The navigation at the top should have a red background with white text.</li>
            </ul>

        </div>

        <div id='about_blue' className='color-info'>
            <h2>About blue</h2>

            <p>This section is all about the colour blue. This text should be black.</p>

            <ul>
                <li>This is an unordered list.</li>
                <li>It contains some stuff about the colour blue.</li>
                <li>The text should be blue.</li>
                <li className='important'>The biggest blue animal in the world is the blue whale.</li>
            </ul>

        </div>

        <br/>

        <div id='about_yellow' className='color-info'>
            <h2>About yellow</h2>

            <p>The section is all about the colour yellow. This text should be black.</p>

            <ul>
                <li>This is an unordered list.</li>
                <li>It contains some stuff about the colour yellow.</li>
                <li>The text should be orange.</li>
                <li className='important'>The tastiest yellow fruit is the banana - much nicer than lemons.</li>
            </ul>

        </div>
    </div>
    </div>
  )
}

export default Exercise2;