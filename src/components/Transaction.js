import React, { useState } from 'react';
import ReactModal from 'react-modal';
import loading from '../images/loading.gif';

export default class Transaction extends React.Component {
	constructor() {
		super();
		this.state = {
			showFaqModal: false,
		};
		this.handleOpenFaqModal = this.handleOpenFaqModal.bind(this);
		this.handleCloseFaqModal = this.handleCloseFaqModal.bind(this);
	}

	handleOpenFaqModal() {
		this.setState({ showFaqModal: true });
	}

	handleCloseFaqModal() {
		this.setState({ showFaqModal: false });
	}

	render() {
		return (
			<div className='left'>
				<h1 className='third'>TRANSACTION IN PROGRESS</h1>
				<p className='small third'>
					Your NFT is being minted. Please wait. <br />
					<span>
						For more information, read our{' '}
						<button
							className='btn-inline'
							onClick={this.handleOpenFaqModal}>
							FAQ
						</button>
						{/* <a href='https://iamtribex.com/faq.html' target='_blank'>
                            FAQ
                        </a> */}
						.
					</span>
				</p>

				<div className='third-btn-wrapper'>
					<img src={loading} alt='Loading' className='loading-img' />
					<a
						href='https://etherscan.io/'
						target='_blank'
						className='btn btn-etherscan'>
						<span>Check Etherscan</span>
					</a>
				</div>
				{/* <button
                    onClick={() => window.location.replace('https://opensea.io/')}
                    className='btn btn-wallet btn-etherscan'>
                    <span>CHECK ETHERSCAN</span>
                </button> */}
				<ReactModal
					isOpen={this.state.showFaqModal}
					onRequestClose={this.handleCloseFaqModal}
					shouldCloseOnOverlayClick={true}
					closeTimeoutMS={200}
					contentLabel='TribeX FAQs'>
					<button
						onClick={this.handleCloseFaqModal}
						className='btn-close'>
						<span>X</span>
					</button>
					<div className='custom-modal'>
						<h1>TribeX FAQs</h1>
						<h4>Tribe X?</h4>
						<p>
							A metaverse brand that we build together. Tribe X
							Empire is a collection of 11,111 exclusive NFTs that
							will live on the Ethereum Blockchain.
						</p>
						<h4>When is the official launch date?</h4>
						<p>March 26, 2022.</p>
						<h4>What is mint price?</h4>
						<p>
							0.15 ETH - FAMILY presale <br />
							0.20 ETH - TRIBELIST presale <br />
							TBA ETH - Public sale
						</p>
						<h4>
							What are the benefits of owning a Tribe X Empire
							NFT?
						</h4>
						<p>
							By holding a Tribe X Empire NFT, a 3D Metaverse
							ready avatar with rarity, you will own the complete
							copyright over the art, be eligible for giveaways,
							airdrops, merch, private Discord channels,
							whitelisted for future drops, access to members-only
							benefits, events and access to the Tribe X
							Ecosystem.
						</p>
						<div className='link-wrapper'>
							<a
								href='https://iamtribex.com/faq.html'
								target='_blank'>
								Click for more info
							</a>
						</div>
					</div>
				</ReactModal>
			</div>
		);
	}
}
