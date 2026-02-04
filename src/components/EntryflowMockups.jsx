import React from 'react';
import { FiType, FiMail, FiPhone, FiCalendar, FiCheckSquare, FiMenu, FiBarChart2, FiUsers, FiTrendingUp } from 'react-icons/fi';
import './EntryflowMockups.css';

// Form Builder Mockup
export const FormBuilderMockup = () => {
    return (
        <div className="ef-mockup ef-builder">
            <div className="ef-builder-sidebar">
                <div className="ef-sidebar-header">Field Types</div>
                <div className="ef-field-type">
                    <FiType />
                    <span>Text Input</span>
                </div>
                <div className="ef-field-type">
                    <FiMail />
                    <span>Email</span>
                </div>
                <div className="ef-field-type">
                    <FiPhone />
                    <span>Phone</span>
                </div>
                <div className="ef-field-type">
                    <FiCalendar />
                    <span>Date</span>
                </div>
                <div className="ef-field-type">
                    <FiCheckSquare />
                    <span>Checkbox</span>
                </div>
                <div className="ef-field-type">
                    <FiMenu />
                    <span>Dropdown</span>
                </div>
            </div>
            <div className="ef-builder-canvas">
                <div className="ef-canvas-header">
                    <div className="ef-form-title">Event Registration Form</div>
                    <div className="ef-preview-badge">Preview Mode</div>
                </div>
                <div className="ef-question-card ef-active">
                    <div className="ef-question-number">Question 1</div>
                    <div className="ef-question-text">What's your full name?</div>
                    <input type="text" className="ef-input" placeholder="Enter your answer..." />
                    <div className="ef-question-settings">
                        <span className="ef-setting-badge">Required</span>
                        <span className="ef-setting-badge">Text validation</span>
                    </div>
                </div>
                <div className="ef-question-card">
                    <div className="ef-question-number">Question 2</div>
                    <div className="ef-question-text">What's your email address?</div>
                    <input type="email" className="ef-input" placeholder="name@example.com" />
                </div>
                <div className="ef-add-question">
                    + Add Question
                </div>
            </div>
        </div>
    );
};

// Respondent View Mockup
export const RespondentViewMockup = () => {
    return (
        <div className="ef-mockup ef-respondent">
            <div className="ef-progress-bar">
                <div className="ef-progress-fill" style={{ width: '33%' }}></div>
            </div>
            <div className="ef-gradient-bg">
                <div className="ef-gradient-blob ef-blob-1"></div>
                <div className="ef-gradient-blob ef-blob-2"></div>
                <div className="ef-gradient-blob ef-blob-3"></div>
            </div>
            <div className="ef-survey-content">
                <div className="ef-question-counter">Question 2 of 6</div>
                <h2 className="ef-survey-question">What industry do you work in?</h2>
                <input
                    type="text"
                    className="ef-survey-input"
                    placeholder="Type your answer here..."
                />
                <button className="ef-next-button">
                    Next
                    <span className="ef-keyboard-hint">Press Enter ↵</span>
                </button>
            </div>
        </div>
    );
};

// Analytics Dashboard Mockup
export const AnalyticsDashboardMockup = () => {
    return (
        <div className="ef-mockup ef-dashboard">
            <div className="ef-dashboard-header">
                <h3>Event Registration Analytics</h3>
                <div className="ef-date-range">Last 7 days</div>
            </div>
            <div className="ef-stats-grid">
                <div className="ef-stat-card">
                    <div className="ef-stat-label">Total Responses</div>
                    <div className="ef-stat-value">1,247</div>
                    <div className="ef-stat-change ef-positive">
                        <FiTrendingUp /> +12.5%
                    </div>
                </div>
                <div className="ef-stat-card">
                    <div className="ef-stat-label">Completion Rate</div>
                    <div className="ef-stat-value">87%</div>
                    <div className="ef-stat-change ef-positive">
                        <FiTrendingUp /> +5.2%
                    </div>
                </div>
                <div className="ef-stat-card">
                    <div className="ef-stat-label">Avg. Time</div>
                    <div className="ef-stat-value">1:42</div>
                    <div className="ef-stat-change ef-neutral">
                        <FiBarChart2 /> -0.3s
                    </div>
                </div>
            </div>
            <div className="ef-chart-container">
                <div className="ef-chart-header">
                    <span>Responses Over Time</span>
                    <FiUsers className="ef-chart-icon" />
                </div>
                <div className="ef-chart">
                    <div className="ef-chart-bar" style={{ height: '45%' }}></div>
                    <div className="ef-chart-bar" style={{ height: '62%' }}></div>
                    <div className="ef-chart-bar" style={{ height: '38%' }}></div>
                    <div className="ef-chart-bar" style={{ height: '71%' }}></div>
                    <div className="ef-chart-bar" style={{ height: '55%' }}></div>
                    <div className="ef-chart-bar" style={{ height: '83%' }}></div>
                    <div className="ef-chart-bar" style={{ height: '92%' }}></div>
                </div>
                <div className="ef-chart-labels">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                </div>
            </div>
        </div>
    );
};
