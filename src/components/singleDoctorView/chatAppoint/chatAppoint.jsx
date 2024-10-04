import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';

const Chat = () => {
    const { id } = useParams(); // Assuming id is the doctor ID passed in the URL
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [doctor, setDoctor] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const baseURL = 'http://127.0.0.1:8000/api/';

    // Fetch the doctor details when the component mounts
    useEffect(() => {
        const fetchDoctor = async () => {
            setLoading(true);
            setError('');
            try {
                const response = await axios.get(`${baseURL}doctor/${id}`, {
                    headers: { 'Authorization': `Token ${localStorage.getItem('token')}` }
                });
                console.log("Doctor Data:", response.data);
                setDoctor(response.data);
                // Fetch messages once the doctor is fetched
                fetchMessages(response.data.user.id);
            } catch (error) {
                setError('Error fetching doctor. Please try again.');
            } finally {
                setLoading(false);
            }
        };
        fetchDoctor();
    }, [id]);

    // Fetch messages based on the selected doctor's ID
    const fetchMessages = async (doctorId) => {
        if (!doctorId || !user) return;

        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`${baseURL}chat/messages/${user.user.id}/${doctorId}`, {
                headers: { 'Authorization': `Token ${localStorage.getItem('token')}` }
            });
            setMessages(response.data);
        } catch (error) {
            setError('Error fetching messages. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    
    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (newMessage.trim() === '' || !doctor) return;

        try {
            const response = await axios.post(`${baseURL}chat/send-message/`, {
                message: newMessage,
                sender: user.user.id,
                reciever: doctor.user.id,
            }, {
                headers: { 'Authorization': `Token ${localStorage.getItem('token')}` }
            });

            // Optimistically update the message list
            setMessages(prevMessages => [...prevMessages, response.data]);
            setNewMessage('');
        } catch (error) {
            console.error('Error sending message:', error.response ? error.response.data : error.message);
        }
    };

    const handleSendMessageKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSendMessage(e);
        }
    };

    return (
        <div className="mb-5">
            <main className="content">
                <div className="container p-0" style={{ height: "80vh" }}>
                    <h1 className="h3 mb-3">Messages</h1>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <div className="card">
                            <div className="row g-0">
                                <div className="col-12">
                                    <div className="py-2 px-4 border-bottom d-none d-lg-block">
                                        {doctor ? (
                                            <div className="d-flex align-items-center py-1">
                                                <div className="flex-grow-1 pl-3">
                                                    <strong>{doctor.user.first_name} {doctor.user.last_name}</strong>
                                                    <div className="text-muted small">
                                                        <em>{doctor.user.is_active ? 'Online' : 'Offline'}</em>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div>Select a doctor to start chatting</div>
                                        )}
                                    </div>

                                    {/* Messages Display */}
                                    <div className="chat-messages p-4" style={{ height: '60vh', overflowY: 'auto' }}>
                                        {messages.length === 0 && <p>No messages yet.</p>}
                                        {messages.map(message => (
                                            <div key={message.id} className={`chat-message-${message.sender !== user.user.id ? 'right' : 'left'} pb-4`}>
                                                <div>
                                                    <strong>{message.sender === user.user.id ? 'You' : `${doctor.user.first_name}`}</strong>
                                                    <div className="text-muted small mt-2">{message.date}</div>
                                                </div>
                                                <div className="bg-light rounded py-2 px-3 mr-3">
                                                    {message.message}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Message Input */}
                                    <div className="flex-grow-0 py-3 px-4 border-top">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Type your message"
                                                value={newMessage}
                                                onChange={(e) => setNewMessage(e.target.value)}
                                                onKeyDown={handleSendMessageKeyPress}
                                            />
                                            <button className="btn btn-primary" onClick={handleSendMessage}>Send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {error && <div className="alert alert-danger">{error}</div>}
                </div>
            </main>
        </div>
    );
};

export default Chat;
