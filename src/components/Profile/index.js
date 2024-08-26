import React from 'react';
import Cookies from 'js-cookie';
import {Link} from 'react-router-dom'
import './index.css';

const Profile = props => {
    const Logout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
    }

    const userName = "Rahul";
    const stocks = [
        { id: '1', name: 'Apple Inc.', symbol: 'AAPL', quantity: 50, price: 175.34 },
        { id: '2', name: 'Tesla Inc.', symbol: 'TSLA', quantity: 30, price: 680.90 },
        { id: '3', name: 'Amazon.com Inc.', symbol: 'AMZN', quantity: 20, price: 3250.55 },
        { id: '4', name: 'Microsoft Corp.', symbol: 'MSFT', quantity: 40, price: 290.20 },
    ];

    return (
        <>
        <div className="profile-container">
            <div className="profile-header">
                <h1>Welcome, {userName}</h1>
                <p>Your Stock Portfolio</p>
            </div>
            <div className="portfolio-container">
                <table className="portfolio-table">
                    <thead>
                        <tr>
                            <th>Stock</th>
                            <th>Symbol</th>
                            <th>Quantity</th>
                            <th>Price per Share</th>
                            <th>Total Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stocks.map(stock => (
                            <tr key={stock.id}>
                                <td>{stock.name}</td>
                                <td>{stock.symbol}</td>
                                <td>{stock.quantity}</td>
                                <td>${stock.price.toFixed(2)}</td>
                                <td>${(stock.quantity * stock.price).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </div>
        <button className='logout-btn' onClick={Logout}>Logout</button>
        <footer className="foter">
        <Link to='/' className="link-item">
            <button className="foter-section">Home</button>
        </Link>
        <Link to={`/trade`} className='link-item'>
            <button className="foter-section">Trade</button>
        </Link>
        <Link to='/profile' className='link-item'>
            <button className="foter-section">Profile</button>
        </Link>
      </footer>
      </>
    );
};

export default Profile;
