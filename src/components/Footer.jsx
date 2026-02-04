import React, { useState } from 'react';
import Tooltip from './Tooltip';
import './Footer.css';

const Footer = () => {
    const [clickCount, setClickCount] = useState(0);
    const year = new Date().getFullYear();

    const handleYearClick = () => {
        setClickCount(prev => prev + 1);
    };

    const getTooltipContent = () => {
        if (clickCount >= 2) {
            return (
                <>
                    <p>Founded during a global pandemic, fueled by too much coffee, and still going strong. Thanks for scrolling this far.</p>
                    <span className="tooltip-hint">Easter egg 4 of 5</span>
                </>
            );
        }
        return <p>Click again for a secret</p>;
    };

    return (
        <footer className="footer">
            <div className="container">
                <p>
                    <Tooltip content={getTooltipContent()} position="top">
                        <span className="footer-year" onClick={handleYearClick}>
                            &copy; {year}
                        </span>
                    </Tooltip>
                    {' '}Adakin Digital. Software Development Studio.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
