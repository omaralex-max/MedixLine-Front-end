import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./DoctorPage.css"

const Chat = ({ doctorId }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [patients, setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

    const baseURL = 'http://127.0.0.1:8000/api/'

    // Fetch patients on component load
    useEffect(() => {
        const fetchPatients = async () => {
            setLoading(true);
            setError('');
            try {
                const response = await axios.get(`${baseURL}chat/my-inbox/${user.user.id}/`, {
                    headers: { 'Authorization': `Token ${localStorage.getItem('token')}` }
                });
                setPatients(response.data);
            } catch (error) {
                setError('Error fetching patients. Please try again.');
            } finally {
                setLoading(false);
            }
        };
        fetchPatients();
    }, [doctorId]);

    // Fetch messages when a patient is selected
    useEffect(() => {
        const fetchMessages = async () => {
            if (selectedPatient) {
                setLoading(true);
                setError('');
                try {
                    const response = await axios.get(`${baseURL}chat/messages/${user.user.id}/${selectedPatient.id}`, {
                        headers: { 'Authorization': `Token ${localStorage.getItem('token')}` }
                    });
                    setMessages(response.data);
                } catch (error) {
                    setError('Error fetching messages. Please try again.');
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchMessages();
    }, [doctorId, selectedPatient]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (newMessage.trim() === '') return;

        try {
            const response = await axios.post(`${baseURL}chat/send-message/`, {
                message: newMessage,
                sender: user.user.id,
                reciever: selectedPatient.id,
            }, {
                headers: { 'Authorization': `Token ${localStorage.getItem('token')}` }
            });

            // Trigger message fetch after sending a new message
            setMessages([...messages, response.data]);
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
                    <div className="card">
                        <div className="row g-0">
                            {/* Sidebar for patient list */}
                            <div className="col-12 col-lg-5 col-xl-3 border">
                                <div className="px-4 d-none d-md-block">
                                    <input type="text" className="form-control my-3" placeholder="Search..." />
                                </div>
                                <div className="list-group">
                                    {patients.map((patient, index) => (
                                        <div
                                            key={`${patient.id}-${index}`}  // Ensures uniqueness if ids are duplicated
                                            className={`list-group-item list-group-item-action border-0 ${selectedPatient && selectedPatient.id === patient.id ? 'active' : ''}`}
                                            onClick={() => setSelectedPatient(patient)}
                                        >
                                            <div className="d-flex align-items-start">
                                                <img
                                                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                    className="rounded-circle mr-1"
                                                    alt={`${patient.first_name}`}
                                                    width={40}
                                                    height={40}
                                                />
                                                <div className="flex-grow-1 ml-3">
                                                    {patient.first_name} {patient.last_name}
                                                    <div className="small">{patient.is_active ? 'Online' : 'Offline'}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>

                            {/* Chat Section */}
                            <div className="col-12 col-lg-7 col-xl-9">
                                <div className="py-2 px-4 border-bottom d-none d-lg-block">
                                    {selectedPatient ? (
                                        <div className="d-flex align-items-center py-1">
                                            {/* <img
                                                src={selectedPatient?.user.profile_picture}
                                                className="rounded-circle mr-1"
                                                alt={`${selectedPatient?.user.first_name} Avatar`}
                                                width={40}
                                                height={40}
                                            /> */}

                                            <div className="flex-grow-1 pl-3">
                                                <strong>{selectedPatient.first_name} {selectedPatient.last_name}</strong>
                                                <div className="text-muted small">
                                                    <em>{selectedPatient.is_active ? 'Online' : 'Offline'}</em>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div>Select a patient to start chatting</div>
                                    )}
                                </div>

                                {/* Messages Display */}
                                <div className="chat-messages p-4" style={{ height: '60vh', overflowY: 'auto' }}>
                                    {messages.map(message => (
                                        <div key={message.id} className={`chat-message-${message.sender !== user.user.id ? 'right' : 'left'} pb-4`}>
                                            <div>
                                                <strong>{message.sender === user.user.id ? 'You' : `${selectedPatient.first_name}`}</strong>
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
                </div>
            </main>
        </div>
    );
};

export default Chat;
