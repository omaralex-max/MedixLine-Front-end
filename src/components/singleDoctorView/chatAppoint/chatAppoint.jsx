import React,{useState,useEffect} from "react";
import "./chatAppoint.css"
export default function ChatAppoint({doctor}){
    const [messages, setMessages] = useState(() => {
        const savedMessages = localStorage.getItem('chatMessages');
        return savedMessages ? JSON.parse(savedMessages) : [];
    });
    const [input, setInput] = useState('');
    const handleSend = (e) => {
        e.preventDefault();
        if (input.trim()) {
          setMessages([...messages, input]);
          setInput('');
        }
      };
      useEffect(() => {
        localStorage.setItem('chatMessages', JSON.stringify(messages));
    }, [messages]);
    return(
        <>
            <div className="custom-chat-container">
        <div className="custom-chat-header">
            <h4>Chat Room</h4>
        </div>
        <div className="custom-chat-messages">
            {messages.map((msg, index) => (
            <div key={index} className="custom-message">
                <div className="custom-message-text">{msg}</div>
            </div>
            ))}
        </div>
            <form className="custom-chat-input d-flex align-items-center mt-2" onSubmit={handleSend}>
                <input
                type="text"
                className="form-control custom-input me-2" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`Chat With Dr. ${doctor.user.first_name}.`}
                />
                <button type="submit" className="btn btn-primary custom-send-button">Send</button>
            </form>
        </div>
        </>
    )
}