import React, {useState} from 'react';
import Countdown, { zeroPad } from 'react-countdown';
import banner from '../images/banner.jpg';
import bannerMobile from '../images/banner-mobile.jpg';
import WalletProviderModal from './WalletProviderModal';
import { useWallet } from 'use-wallet';

export default function ConnectWallet(props) {

	// const { activateBrowserWallet, account } = useEthers()
	// const handleWallet = () => {
	// 	activateBrowserWallet()
	// 	props.setWalletStatus = 'mint'
	// }

	const { account } = useWallet();

	const [isWalletProviderOpen, setWalletProviderOpen] = useState(false);

	const handleWalletProviderOpen = () => {
		setWalletProviderOpen(true);
	};

	const handleWalletProviderClose = () => {
		setWalletProviderOpen(false);
	};

	const renderer = ({ days, hours, minutes, seconds }) => {
		let remainingDays = days;
		let remainingHours = remainingDays * 24 + hours;
		return (
			<>
				<div>
					<h2>{zeroPad(remainingHours)}</h2>
					<p>hours</p>
				</div>
				<div>
					<h2>{zeroPad(minutes)}</h2>
					<p>minutes</p>
				</div>
				<div>
					<h2>{zeroPad(seconds)}</h2>
					<p>seconds</p>
				</div>
			</>
		);
	};

	return (
		<div className='left'>
			<h1>
				MINT <br className='d-mobile-p' /> YOUR NFT
			</h1>
			<h5>To mint, please connect your wallet</h5>
			<ul className='d-md-none'>
				<li>
					<p>
						First 500 NFTs sold will come with{' '}
						<b>a FREE male avatar.</b>
					</p>
				</li>
				<li>
					<p>
						Every 100th sale after the first 500 will also come
						with <b>a FREE male avatar.</b>
					</p>
				</li>
				<li>
					<p>
						50 randomly-selected participants will{' '}
						<b>receive an Apple MacBook Pro.</b>
					</p>
				</li>
				<li>
					<p>
						Buying 5+ NFTs will put you in the running to{' '}
						<b>
							win one all inclusive trip for two (2) retailed
							valued at $50,000 for FREE
						</b>
					</p>
				</li>
			</ul>
			<div className='timer-box'>
				<div className='timer'>
					<Countdown
						date='2022-03-26'
						renderer={renderer}
						zeroPadTime={2}
						zeroPadDays={2}
					/>
				</div>
				<div className='btn-wrapper'>
					{!account ? (
						<button className='btn btn-connect' onClick={handleWalletProviderOpen} color="primary" variant="contained">
							Connect Wallet
						</button>
					) : (
						<button className='btn btn-connect' variant="contained" >
							{account}
						</button>
					)}
					<a href='#' className='btn btn-learn' target='_blank'>
						<span>Learn more</span>
					</a>
				</div>
			</div>

			<picture>
				<source media='(max-width: 500px)' srcSet={bannerMobile} />
				<source media='(min-width: 501px)' srcSet={banner} />
				<img
					src={banner}
					alt='Banner'
					className='banner-img-mobile'
				/>
			</picture>
			<ul className='d-lg-none'>
				<li>
					<p>
						First 500 NFTs sold will come with{' '}
						<b>a FREE male avatar.</b>
					</p>
				</li>
				<li>
					<p>
						Every 100th sale after the first 500 will also come
						with <b>a FREE male avatar.</b>
					</p>
				</li>
				<li>
					<p>
						50 randomly-selected participants will{' '}
						<b>receive an Apple MacBook Pro.</b>
					</p>
				</li>
				<li>
					<p>
						Buying 5+ NFTs will put you in the running to{' '}
						<b>
							win one all inclusive trip for two (2) retailed
							valued at $50,000 for FREE
						</b>
					</p>
				</li>
			</ul>
			<WalletProviderModal open={isWalletProviderOpen} handleClose={handleWalletProviderClose} />
		</div>
	);
}
