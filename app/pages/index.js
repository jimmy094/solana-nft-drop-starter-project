import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

// Constants
const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const Home = () => {
    //useWallet is a custome hook provided by @solana/wallet-adapter-react
    const wallet = useWallet();
    
    const renderNotConnectedContainer = () => (
        <div>
            <img src="https://media.giphy.com/media/eSwGh3YK54JKU/giphy.gif" alt='gif' />

            <div className="button-container">
                {/*WalletMultiButton will automatically detect any solana wqallet extensions you installed in your browser such as phantom, sollet, ledger,solfare. dependent on your config in _app.js*/}
                <WalletMultiButton className='cta-button connect-wallet-button' />

            </div>
        </div>
    );

    

    return (
        <div className="App">
            <div className="container">
                <div className="header-container">
                    <p className="header">🍭 Candy Drop</p>
                    <p className="sub-text">NFT drop machine with fair mint</p>
                    {/* condition to show rendernotconnected button only if we dont have a wallet address */}
                    {wallet.publickKey ? "Hello World" : renderNotConnectedContainer()}
                </div>
                <div className="footer-container">
                    
                    <a className="footer-text" href={TWITTER_LINK} target="_blank" rel="noreferrer">{`built on @${TWITTER_HANDLE}`}</a>
                </div>
            </div>
        </div>
    );
};

export default Home;
