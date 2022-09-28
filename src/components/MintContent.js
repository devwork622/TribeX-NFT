import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
// import Web3 from "web3";
import { ethers } from "ethers";
import Justcubes from "../abi/JustCubes.json";
import utils from "./utils";
import { useWallet } from "use-wallet";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

ReactModal.setAppElement("#root");

export default function MintContent(props) {
  // const web3 = window.ethereum ? new Web3(window.ethereum) : null
  // Contract can be used to write Contract
  const getContractWithSigner = () => {
    const infuraProvider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = infuraProvider.getSigner();

    const contract = new ethers.Contract(
      Justcubes.address,
      Justcubes.abi,
      signer
    );

    return contract;
  };
  const { account } = useWallet();
  useEffect(() => {
    const currentTime = new Date();
    if (
      currentTime >= new Date(1648310400000) &&
      currentTime < new Date(1648317600000)
    ) {
      setNftPrice(0.08);
      setMaxNftQuantity(3);
    }

    if (
      currentTime >= new Date(1648317600000) &&
      currentTime < new Date(1648404000000)
    ) {
      setNftPrice(0.12);
      setMaxNftQuantity(3);
    }

    if (currentTime >= new Date(1648404000000)) {
      setNftPrice(0.16);
      setMaxNftQuantity(6);
    }
  });
  const [nftQuantity, setNftQuantity] = useState(2);
  const [maxNftQuantity, setMaxNftQuantity] = useState(2);
  const [minNftQuantity, setMinNftQuantity] = useState(1);
  const [nftPrice, setNftPrice] = useState(0.08);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showFaqModal, setShowFaqModal] = useState(false);

  const handleOpenTermsModal = () => {
    setShowTermsModal(true);
  };

  const handleCloseTermsModal = () => {
    setShowTermsModal(false);
  };

  const handleOpenFaqModal = () => {
    setShowFaqModal(true);
  };

  const handleCloseFaqModal = () => {
    setShowFaqModal(false);
  };

  const increaseNftQuantity = () => {
    if (nftQuantity < maxNftQuantity) {
      setNftQuantity(nftQuantity + 1);
    }
    return;
  };

  const decreaseNftQuantity = () => {
    if (nftQuantity > minNftQuantity) {
      setNftQuantity(nftQuantity - 1);
    }
    return;
  };

  const mintComplete = async () => {
    const contract = getContractWithSigner();
    let value = nftQuantity * nftPrice;
    // const currentTime = new Date()
    // if (
    // 	currentTime >= new Date(1648310400000) &&
    // 	currentTime < new Date(1648317600000)
    // ) {
    // 	if(!! contract) {
    // 		try {
    // 			if(utils.getOglistHexProofFromAddrs(account).length == 0) {
    // 				toastr.options = {
    // 					positionClass: 'toast-top-full-width',
    // 					hideDuration: 300,
    // 					timeOut: 60000,
    // 				  };
    // 				toastr.clear();
    // 				setTimeout(() => toastr.success(`You are not in WL List.`), 300);
    // 			}
    // 			contract.mintOGSale(nftQuantity, utils.getOglistHexProofFromAddrs(account), {
    // 				value: ethers.utils.parseEther(String(value)),
    // 			});
    // 		} catch (err) {
    // 			console.log(err)
    // 		  	alert('Transaction will fail')
    // 		}
    // 	}
    // }else if (
    // 	currentTime >= new Date(1648317600000) &&
    // 	currentTime < new Date(1648404000000)
    // ) {
    // 	if(!! contract) {
    // 		try {
    // 			if(utils.getWhitelistHexProofFromAddrs(account).length == 0) {
    // 				toastr.options = {
    // 					positionClass: 'toast-top-full-width',
    // 					hideDuration: 300,
    // 					timeOut: 60000,
    // 				  };
    // 				toastr.clear();
    // 				setTimeout(() => toastr.success(`You are not in WL List.`), 300);
    // 			}
    // 			contract.mintWLSale(nftQuantity, utils.getWhitelistHexProofFromAddrs(account), {
    // 				value: ethers.utils.parseEther(String(value)),
    // 			});
    // 		} catch (err) {
    // 			console.log(err)
    // 		  alert('Transaction will fail')
    // 		}
    // 	}
    // }else if (currentTime >= new Date(1648404000000)) {
    // 	if(!! contract) {
    // 		try {
    // 			console.log(value)
    // 			contract.mint(nftQuantity, {
    // 				value: ethers.utils.parseEther(String(value)),
    // 			});
    // 		} catch (err) {
    // 			console.log(err)
    // 		  	alert('Transaction will fail')
    // 		}
    // 	}
    // } else {
    // 	toastr.options = {
    // 		positionClass: 'toast-top-full-width',
    // 		hideDuration: 300,
    // 		timeOut: 60000,
    // 	  };
    // 	toastr.clear();
    // 	setTimeout(() => toastr.success(`Now is not minting date`), 300);
    // }

    if (!!contract) {
      try {
        if (utils.getOglistHexProofFromAddrs(account).length == 0) {
          toastr.options = {
            positionClass: "toast-top-full-width",
            hideDuration: 300,
            timeOut: 60000,
          };
          toastr.clear();
          setTimeout(() => toastr.success(`You are not in OG List.`), 300);
        }
        contract.mintOGSale(
          nftQuantity,
          utils.getOglistHexProofFromAddrs(account),
          {
            value: ethers.utils.parseEther(String(value)),
          }
        );
      } catch (err) {
        console.log(err);
        alert("Transaction will fail");
      }
    }
  };

  return (
    <div className="left">
      <h1 className="second">
        MINT <br className="d-mobile-p" /> YOUR NFT
      </h1>
      <p className="small">
        {nftPrice} ETH per NFT <br />
        <span>Max 2 NFTs/transaction</span>
      </p>
      <p className="small margin-mobile">
        Select quantity of NFTs to mint. <br />
        <span>
          For more information, read our{" "}
          <button className="btn-inline" onClick={handleOpenFaqModal}>
            FAQ
          </button>
          {/* <a
						href='https://iamtribex.com/faq.html'
						target='_blank'>
						FAQ
					</a> */}
          .
        </span>
      </p>
      <div className="mint-wrapper">
        <div className="quantity-wrapper">
          <div className="quantity-box">
            <button className="btn-quantity" onClick={decreaseNftQuantity}>
              <svg
                width="18"
                height="2"
                viewBox="0 0 18 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 0.857143C18 1.33053 17.6162 1.71429 17.1429 1.71429L0.857143 1.71428C0.383757 1.71428 -5.81593e-08 1.33053 -3.74669e-08 0.857142C-1.67745e-08 0.383755 0.383757 -7.7003e-07 0.857143 -7.49338e-07L17.1429 -3.74669e-08C17.6162 -1.67745e-08 18 0.383756 18 0.857143Z"
                  fill="#FF00E5"
                />
              </svg>
            </button>
            <h2>{nftQuantity}</h2>
            <button className="btn-quantity" onClick={increaseNftQuantity}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.85697 0.857143C9.85697 0.383756 9.47322 0 8.99983 0C8.52644 0 8.14268 0.383756 8.14268 0.857143V8.14283H0.857143C0.383756 8.14283 2.06928e-08 8.52659 0 8.99998C-2.06928e-08 9.47336 0.383756 9.85712 0.857143 9.85712H8.14268V17.1429C8.14268 17.6162 8.52644 18 8.99983 18C9.47322 18 9.85697 17.6162 9.85697 17.1429V9.85712H17.1429C17.6162 9.85712 18 9.47337 18 8.99998C18 8.52659 17.6162 8.14284 17.1429 8.14284H9.85697V0.857143Z"
                  fill="#FF00E5"
                />
              </svg>
            </button>
          </div>
          <p className="mint-price">
            Mint price: <b>{nftQuantity * nftPrice} ETH</b>
          </p>
        </div>
        <button className="btn btn-mint" onClick={mintComplete}>
          <span>MINT NOW</span>
        </button>
      </div>
      <p className="small more">
        By minting an NFT, you agree to the{" "}
        <button className="btn-inline" onClick={handleOpenTermsModal}>
          Terms and Conditions
        </button>
        .
      </p>
      <ReactModal
        isOpen={showTermsModal}
        onRequestClose={handleCloseTermsModal}
        shouldCloseOnOverlayClick={true}
        closeTimeoutMS={200}
        contentLabel="TribeX Terms and Conditions"
      >
        <button onClick={handleCloseTermsModal} className="btn-close">
          <span>X</span>
        </button>
        <div className="custom-modal">
          <h1>Terms & Conditions</h1>
          <p>
            These Terms and Conditions constitute the User Agreement and Terms
            of Service (hereafter the “Terms & Conditions”) between
            iamtribex.com and tribe-x.io (the “Interface”), owned and operated
            by MetaTribe Labs LLC, a wholly-owned subsidiary dba The Tribe X
            Empire NFT (referred to as “TRIBE X” or the “Site”) and any person,
            customer, or entity (referred as the “User”) utilizing the
            Interface, and any products, features, and services provided thereon
            (“Interface Services”).
          </p>
          <p>
            These Terms & Conditions do not create any agency, partnership, or
            joint venture between TRIBE X and User. By using the Interface or
            purchasing any Interface Assets or signing up for any associated
            websites, APIs, or mobile applications, the User acknowledges,
            agrees, and consents to these Terms & Conditions. These Terms &
            Conditions may be amended and updated at any time at the sole
            discretion of TRIBE X. Revised versions will be considered effective
            as of the date and time posted on the Interface Site.
          </p>
          <div className="link-wrapper">
            <a href="https://iamtribex.com/terms.html" target="_blank">
              Click for more info
            </a>
          </div>
        </div>
      </ReactModal>
      <ReactModal
        isOpen={showFaqModal}
        onRequestClose={handleCloseFaqModal}
        shouldCloseOnOverlayClick={true}
        closeTimeoutMS={200}
        contentLabel="TribeX FAQs"
      >
        <button onClick={handleCloseFaqModal} className="btn-close">
          <span>X</span>
        </button>
        <div className="custom-modal">
          <h1>TribeX FAQs</h1>
          <h4>Tribe X?</h4>
          <p>
            A metaverse brand that we build together. Tribe X Empire is a
            collection of 11,111 exclusive NFTs that will live on the Ethereum
            Blockchain.
          </p>
          <h4>When is the official launch date?</h4>
          <p>March 26, 2022.</p>
          <h4>What is mint price?</h4>
          <p>
            0.15 ETH - FAMILY presale <br />
            0.20 ETH - TRIBELIST presale <br />
            TBA ETH - Public sale
          </p>
          <h4>What are the benefits of owning a Tribe X Empire NFT?</h4>
          <p>
            By holding a Tribe X Empire NFT, a 3D Metaverse ready avatar with
            rarity, you will own the complete copyright over the art, be
            eligible for giveaways, airdrops, merch, private Discord channels,
            whitelisted for future drops, access to members-only benefits,
            events and access to the Tribe X Ecosystem.
          </p>
          <div className="link-wrapper">
            <a href="https://iamtribex.com/faq.html" target="_blank">
              Click for more info
            </a>
          </div>
        </div>
      </ReactModal>
    </div>
  );
}
