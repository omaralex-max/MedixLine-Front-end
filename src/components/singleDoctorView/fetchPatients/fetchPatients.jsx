import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FetchPatients({ onFetch }) {
    const [loadingPatients, setLoadingPatients] = useState(true);
    const [error, setError] = useState(null);
    const user = JSON.parse(localStorage.getItem('user'));
    const [fetched, setFetched] = useState(false);

    useEffect(() => {
        const fetchPatients = async () => {
            if (!fetched) { 
                try {
                    const response = await axios.get(`http://127.0.0.1:8000/api/patient/`, {
                        headers: {
                            'Authorization': `Token ${localStorage.getItem('token')}`
                        }
                    });
                    onFetch(response.data);
                    setFetched(true); 
                } catch (error) {
                    console.error("Error fetching patients:", error);
                    // setError("Error fetching patients");
                } finally {
                    setLoadingPatients(false);
                }
            }
        };

        if (user) {
            fetchPatients();
        }
    }, [user, onFetch, fetched]); 


    if (error) {
        return <div>{error}</div>;
    }

    return null; 
}
