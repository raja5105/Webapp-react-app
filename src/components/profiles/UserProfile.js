import React, { useState, useEffect } from 'react';

function UserProfiles() {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/profiles/')  
            .then(response => response.json())
            .then(data => setProfiles(data))
            .catch(error => console.error("Error fetching profiles:", error));
    }, []);

    return (
        <div>
            <h2>User Profiles</h2>
            {profiles.map(profile => (
                <div key={profile.id}>
                    <h3>{profile.name}</h3>
                    <p>{profile.bio}</p>
                    {/* Add more profile details here as needed */}
                </div>
            ))}
        </div>
    );
}

export default UserProfiles;
