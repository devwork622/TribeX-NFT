import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UseWalletProvider } from 'use-wallet';

ReactDOM.render(
	<React.StrictMode>
		<UseWalletProvider 
			chainId={4}
			connectors={{
				walletconnect: { rpc: { 1: 'https://api.mycryptoapi.com/eth', 4: 'https://rinkeby.infura.io/v3/' } },
			}}>
			<App />
		</UseWalletProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
