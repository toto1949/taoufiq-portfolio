import React, { useState } from 'react';
import '../css/ChatbotButton.css';
const ChatbotButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleChatbot = () => {
        setIsVisible(!isVisible);
    };

    const closeChatbot = () => {
        setIsVisible(false);
    };

    return (
        <div className="chatbot-container">
            <button className="chatbot-button" onClick={toggleChatbot}>
                Chat
            </button>
            {isVisible && (
                <div className="chatbot-wrapper">
                    <iframe
                        src="https://www.chatbase.co/chatbot-iframe/2IfVW2KT9GcU8akZ017ZY"
                        width="300px"
                        height="500px"
                        style={{ border: 'none', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
                        frameBorder="0"
                        title="Chatbot"
                    ></iframe>

                </div>
            )}
        </div>
    );
};

export default ChatbotButton;
