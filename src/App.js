import React, { useState } from 'react';
import ConnectWallet from './components/ConnectWallet';
import MintContent from './components/MintContent';
import Transaction from './components/Transaction';
import Footer from './components/Footer';
import logo from './images/logo.svg';
import banner from './images/banner.jpg';
import './App.css';
import { useWallet } from 'use-wallet';

function App() {
	const [walletStatus, setWalletStatus] = useState('home');
	const { account } = useWallet();
	let leftConent;
	if (! account ) {
		leftConent = <ConnectWallet setWalletStatus={setWalletStatus} />;
	} else {
		leftConent = <MintContent setWalletStatus={setWalletStatus} />;
	}
	// } else if (walletStatus === 'transaction') {
	// 	leftConent = <Transaction />;
	// }

	return (
		<div className='App'>
			<header className='app-header'>
				<div className='container'>
					<a href='https://iamtribex.com/'>
						<img src={logo} alt='TribeX' className='logo' />
					</a>
				</div>
			</header>
			<section className='app-content'>
				<div className='container'>
					<div className='app-content-inner'>
						{leftConent}
						{/* {walletStatus ? (
							<MintContent />
						) : (
							<ConnectWallet
								walletStatus={walletStatus}
								setWalletStatus={setWalletStatus}
							/>
						)} */}
						<div className='right'>
							<img src={banner} />
						</div>
					</div>
				</div>
			</section>
			<div className='footer-placeholder-mobile'></div>
			<Footer />
		</div>
	);
}

export default App;
