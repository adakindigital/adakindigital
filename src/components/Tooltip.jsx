import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Tooltip.css';

const Tooltip = ({
    children,
    content,
    actionText,
    onAction,
    onOpen,
    position = 'top',
    trigger = 'click'
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [coords, setCoords] = useState({ top: 0, left: 0 });
    const triggerRef = useRef(null);
    const tooltipRef = useRef(null);

    const updatePosition = () => {
        if (!triggerRef.current) return;

        const rect = triggerRef.current.getBoundingClientRect();
        const scrollY = window.scrollY;
        const scrollX = window.scrollX;

        let top, left;

        switch (position) {
            case 'bottom':
                top = rect.bottom + scrollY + 12;
                left = rect.left + scrollX + rect.width / 2;
                break;
            case 'left':
                top = rect.top + scrollY + rect.height / 2;
                left = rect.left + scrollX - 12;
                break;
            case 'right':
                top = rect.top + scrollY + rect.height / 2;
                left = rect.right + scrollX + 12;
                break;
            default: // top
                top = rect.top + scrollY - 12;
                left = rect.left + scrollX + rect.width / 2;
        }

        setCoords({ top, left });
    };

    const handleClick = (e) => {
        if (trigger === 'click') {
            e.preventDefault();
            e.stopPropagation();
            const willOpen = !isVisible;
            setIsVisible(willOpen);
            updatePosition();
            if (willOpen && onOpen) {
                onOpen();
            }
        }
    };

    const handleMouseEnter = () => {
        if (trigger === 'hover') {
            setIsVisible(true);
            updatePosition();
        }
    };

    const handleMouseLeave = () => {
        if (trigger === 'hover') {
            setIsVisible(false);
        }
    };

    // Close on outside click
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (
                isVisible &&
                triggerRef.current &&
                !triggerRef.current.contains(e.target) &&
                tooltipRef.current &&
                !tooltipRef.current.contains(e.target)
            ) {
                setIsVisible(false);
            }
        };

        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setIsVisible(false);
            }
        };

        if (isVisible) {
            document.addEventListener('click', handleOutsideClick);
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isVisible]);

    // Update position on scroll/resize
    useEffect(() => {
        if (isVisible) {
            window.addEventListener('scroll', updatePosition);
            window.addEventListener('resize', updatePosition);
        }
        return () => {
            window.removeEventListener('scroll', updatePosition);
            window.removeEventListener('resize', updatePosition);
        };
    }, [isVisible]);

    const handleActionClick = (e) => {
        e.stopPropagation();
        if (onAction) {
            onAction();
        }
        setIsVisible(false);
    };

    const tooltipContent = isVisible && createPortal(
        <div
            ref={tooltipRef}
            className={`tooltip tooltip-${position}`}
            style={{
                top: coords.top,
                left: coords.left
            }}
        >
            <div className="tooltip-content">
                {typeof content === 'string' ? <p>{content}</p> : content}
                {actionText && (
                    <button
                        className="tooltip-action"
                        onClick={handleActionClick}
                    >
                        {actionText}
                    </button>
                )}
            </div>
            <div className="tooltip-arrow" />
        </div>,
        document.body
    );

    return (
        <>
            <div
                ref={triggerRef}
                className="tooltip-trigger"
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </div>
            {tooltipContent}
        </>
    );
};

export default Tooltip;
