import {
    Connection,
    clusterApiUrl,
    Keypair,
    PublicKey,
    sendAndConfirmTransaction
} from '@solana/web3.js';

import {
    createMint,
    getOrCreateAssociatedTokenAccount,
    mintTo
} from '@solana/spl-token';

const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

/**
 * Creates a new SPL Token on Solana Devnet.
 * @param {object} wallet - The connected wallet instance.
 * @returns {Promise<string|null>} - Returns the token mint address or null on failure.
 */
export const createToken = async (wallet) => {
    try {
        if (!wallet?.publicKey) throw new Error("Wallet not connected");

        // Generate a new Keypair for the token mint account
        const mint = Keypair.generate();

        // Create a new SPL token
        const tokenMint = await createMint(
            connection,
            wallet,            // Payer of transaction fees
            wallet.publicKey,   // Mint authority
            wallet.publicKey,   // Freeze authority (can be null)
            9                   // Decimals (e.g., 9 for 1 token = 1,000,000,000 units)
        );

        console.log("✅ Token Created:", tokenMint.toBase58());
        return tokenMint.toBase58();  // Return the token mint address
    } catch (error) {
        console.error("❌ Token creation failed:", error);
        return null;
    }
};
