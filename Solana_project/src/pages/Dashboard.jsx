import React, { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey } from "@solana/web3.js";
import "./Dashboard.css";

const Dashboard = () => {
    const { publicKey, connected } = useWallet();
    const [balance, setBalance] = useState(0);
    const [transactionHistory, setTransactionHistory] = useState([]);

    useEffect(() => {
        if (publicKey) {
            const connection = new Connection("https://api.devnet.solana.com");
            connection.getBalance(publicKey).then((bal) => {
                setBalance(bal / 1e9);
            });
        }
    }, [publicKey]);

    useEffect(() => {
        if (publicKey) {
            fetchTransactionHistory();
        }
    }, [publicKey]);

    const fetchTransactionHistory = async () => {
        if (!publicKey) return;
        try {
            const connection = new Connection("https://api.devnet.solana.com");
            const signatures = await connection.getSignaturesForAddress(publicKey);
            setTransactionHistory(signatures.map(sig => sig.signature));
        } catch (error) {
            console.error("Error fetching transaction history:", error);
        }
    };

    return (
        <div className="dashboard-container">
            <h2>Dashboard</h2>
            <div className="balance-container">
                <h3>Wallet Balance</h3>
                <p>{connected ? `${balance} SOL` : "Connect your wallet to view balance"}</p>
            </div>

            <div className="status-container">
                <h3>Transaction History</h3>
                {transactionHistory.length > 0 ? (
                    <ul className="status-history">
                        {transactionHistory.map((tx, index) => (
                            <li key={index} className="status-message">{tx.substring(0, 25)}...</li>
                        ))}
                    </ul>
                ) : (
                    <p>No transactions found</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
