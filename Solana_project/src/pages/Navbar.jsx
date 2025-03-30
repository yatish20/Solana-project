import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const { connected } = useWallet();

    return (
        <nav className="navbar">
            <div className="logo">Solana DApp</div>
            <ul className="nav-links">
                <li><Link to="/Home">Signup</Link></li>
                <li><Link to="/">Dashboard</Link></li>

                <li><Link to="/token-creator">Token Creator</Link></li>
            </ul>
            <div className="wallet-section">
                {connected && <span className="wallet-status">Wallet Connected</span>}
                <WalletMultiButton className="wallet-button" />
            </div>
        </nav>
    );
};

export default Navbar;
