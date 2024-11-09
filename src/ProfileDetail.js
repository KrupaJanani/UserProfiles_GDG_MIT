import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProfileDetail = ({ users }) => {
    const { uuid } = useParams();
    const user = users.find((user) => user.login.uuid === uuid);
    
    // State for triggering fade-in animation
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // Trigger fade-in animation on mount
        setFadeIn(true);
    }, []);

    if (!user) {
        return <p>User not found</p>;
    }

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4 text-white">{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
            <div className="row justify-content-center">
                <div className="col-md-4 col-8 text-center">
                    <img
                        src={user.picture.large}
                        alt="Profile"
                        className="img-fluid rounded-circle border border-white mb-4 img-hover-zoom"
                        style={{ width: '60%' }}
                    />
                </div>
                <div className="col-md-8 col-12">
                    <div className={`card border-secondary fade-in ${fadeIn ? 'show' : ''}`}>
                        <div className="card-body bg-light slide-in">
                            <div className="table-responsive">
                                <table className="table table-warning">
                                    <tbody>
                                        <tr>
                                            <th className="text-start">Email:</th>
                                            <td>{user.email}</td>
                                        </tr>
                                        <tr>
                                            <th className="text-start">Phone:</th>
                                            <td>{user.phone}</td>
                                        </tr>
                                        <tr>
                                            <th className="text-start">Address:</th>
                                            <td>{`${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`}</td>
                                        </tr>
                                        <tr>
                                            <th className="text-start">Username:</th>
                                            <td>{user.login.username}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetail;
