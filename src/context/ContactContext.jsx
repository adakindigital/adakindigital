import React, { createContext, useContext, useState } from 'react';

const ContactContext = createContext();

export const useContact = () => {
    const context = useContext(ContactContext);
    if (!context) {
        throw new Error('useContact must be used within a ContactProvider');
    }
    return context;
};

export const ContactProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openContactPopup = () => setIsOpen(true);
    const closeContactPopup = () => setIsOpen(false);

    return (
        <ContactContext.Provider value={{ isOpen, openContactPopup, closeContactPopup }}>
            {children}
        </ContactContext.Provider>
    );
};
