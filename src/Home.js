import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ users }) => {
    const cardRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            cardRefs.current.forEach((ref) => {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    if (rect.top < window.innerHeight) {
                        ref.classList.add('show');
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4 text-light">User Profiles</h1>
            <div className="row justify-content-center">
                {users.map((user, index) => (
                    <div 
                        key={user.login.uuid} 
                        className="col-md-4 mb-4 fade-in card-lift" 
                        ref={(el) => (cardRefs.current[index] = el)}
                    >
                        <div className="card gradient-card text-white shadow-lg">
                            <img
                                src={user.picture.large}
                                className="card-img-top rounded-circle mx-auto mt-4 img-hover-zoom"
                                alt="profile"
                                style={{ width: '80%' }}
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">{`${user.name.first} ${user.name.last}`}</h5>
                                <p className="card-text">{user.email}</p>
                                <Link to={`/profile/${user.login.uuid}`} className="btn btn-light">
                                    View Profile
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
