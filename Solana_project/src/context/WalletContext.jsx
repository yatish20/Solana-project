import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { useMemo } from 'react';
import "@solana/wallet-adapter-react-ui/styles.css";


export const WalletContextProvider = ({ children }) => {
    const network = 'devnet'; // Change to mainnet for production
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(
        () => [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
        []
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <div className="flex justify-center items-center min-h-screen bg-[#17252A]">
                        <div className="p-6 bg-[#2B7178] rounded-2xl shadow-lg">
                            <h1 className="text-[#FEFFFF] text-2xl font-bold text-center mb-4">Connect Your Wallet</h1>
                            <WalletMultiButton className="!bg-[#2B7178)] !text-[#17252A] hover:scale-105 transition-transform duration-300 rounded-xl p-3 text-lg" />
                        </div>
                    </div>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};
