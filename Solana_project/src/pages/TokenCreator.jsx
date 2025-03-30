import React, { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey, Transaction, SystemProgram } from "@solana/web3.js";
import "./TokenCreator.css";

const TokenCreator = () => {
    const { publicKey, sendTransaction, connected } = useWallet();
    const [tokenName, setTokenName] = useState("");
    const [symbol, setSymbol] = useState("");
    const [supply, setSupply] = useState("");
    const [mintAddress, setMintAddress] = useState("");
    const [amount, setAmount] = useState("");
    const [recipient, setRecipient] = useState("");
    const [status, setStatus] = useState("");
    const [activeForm, setActiveForm] = useState(null);

    const handleCreateToken = () => {
        if (!connected) {
            alert("Please connect your wallet first!");
            return;
        }
        alert(`Token Created: ${tokenName} (${symbol}) with Supply: ${supply}`);
    };

    const handleMint = async () => {
        if (!publicKey) {
            setStatus("Please connect your wallet.");
            return;
        }

        try {
            setStatus("Minting tokens...");
            const connection = new Connection("https://api.devnet.solana.com");
            const mintPublicKey = new PublicKey(mintAddress);
            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: publicKey,
                    toPubkey: mintPublicKey,
                    lamports: Number(amount) * 1e9,
                })
            );

            const signature = await sendTransaction(transaction, connection);
            setStatus(`Mint Successful! Transaction Signature: ${signature}`);
        } catch (error) {
            console.error("Minting error:", error);
            setStatus("Minting failed. Check console for details.");
        }
    };

    const handleSendTokens = async () => {
        if (!publicKey) {
            setStatus("Please connect your wallet.");
            return;
        }

        try {
            setStatus("Sending tokens...");
            const connection = new Connection("https://api.devnet.solana.com");
            const recipientPublicKey = new PublicKey(recipient);
            const mintPublicKey = new PublicKey(mintAddress);
            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: publicKey,
                    toPubkey: recipientPublicKey,
                    lamports: Number(amount) * 1e9,
                })
            );

            const signature = await sendTransaction(transaction, connection);
            setStatus(`Transfer Successful! Transaction Signature: ${signature}`);
        } catch (error) {
            console.error("Transfer error:", error);
            setStatus("Transfer failed. Check console for details.");
        }
    };

    return (
        <div className="token-creator-container">
            <div className="button-group">
                <button onClick={() => setActiveForm(activeForm === "create" ? null : "create")}>Create Token</button>
                <button onClick={() => setActiveForm(activeForm === "mint" ? null : "mint")}>Mint Token</button>
                <button onClick={() => setActiveForm(activeForm === "send" ? null : "send")}>Token Transaction</button>
            </div>

            {activeForm === "create" && (
                <div className="form-container">
                    <h2>Create Your Token</h2>
                    <input type="text" placeholder="Enter token name" value={tokenName} onChange={(e) => setTokenName(e.target.value)} />
                    <input type="text" placeholder="Enter symbol (e.g., SOLX)" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
                    <input type="number" placeholder="Enter total supply" value={supply} onChange={(e) => setSupply(e.target.value)} />
                    <button onClick={handleCreateToken}>Create Token</button>
                </div>
            )}

            {activeForm === "mint" && (
                <div className="form-container">
                    <h2>Mint Tokens</h2>
                    <input type="text" placeholder="Token Mint Address" value={mintAddress} onChange={(e) => setMintAddress(e.target.value)} />
                    <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                    <button onClick={handleMint}>Mint Tokens</button>
                    {status && <p className="status-message">{status}</p>}
                </div>
            )}

            {activeForm === "send" && (
                <div className="form-container">
                    <h2>Send Tokens</h2>
                    <input type="text" placeholder="Recipient Wallet Address" value={recipient} onChange={(e) => setRecipient(e.target.value)} />
                    <input type="text" placeholder="Token Mint Address" value={mintAddress} onChange={(e) => setMintAddress(e.target.value)} />
                    <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                    <button onClick={handleSendTokens}>Send Tokens</button>
                    {status && <p className="status-message">{status}</p>}
                </div>
            )}
        </div>
    );
};

export default TokenCreator;