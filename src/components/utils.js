import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";
import wllist from "../members/wllist.json";
import oglist from "../members/oglist.json";

///  NOTE : keccak256 does not give accurate result for combination of
///         two or more parameters use web3.utils.soliditySha3 instead

// let freeClaimAddress = [
//     [4, '0x351876Fa509E2b7E0ffdE254e048e39140028Af9'],
//     [1, '0x356fD453840c74BA6A2497DCD7a35c8c141bc1E1'],
//     [3, '0xAbB267696a7C7a7c7421B9218df31fE652850505'],
//     [9, '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'],
//     [7, '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4']
// ]

// const leafNodesFreeClaim = freeClaimAddress.map(_ => keccak256(_[0], _[1]));
// const merkleTreeFreeClaim = new MerkleTree(leafNodesFreeClaim, keccak256, { sortPairs: true });
// console.log((merkleTreeFreeClaim.getRoot()).toString('hex'));
// console.log(web3.utils.soliditySha3(4,'0x351876Fa509E2b7E0ffdE254e048e39140028Af9').toString('hex'));
// console.log(getFreeClaimHexProofFromAddrs(4,'0x351876Fa509E2b7E0ffdE254e048e39140028Af9'))

// function getFreeClaimHexProofFromAddrs(count, addressToCheck) {
//     const addressHash = keccak256(count, addressToCheck);
//     const hexProof = merkleTreeFreeClaim.getHexProof(addressHash);

//     return hexProof;
// }

let ogAddress = oglist;

let whitelistAddress = wllist;

const leafNodesOglist = ogAddress.map(keccak256);
const merkleTreeOgList = new MerkleTree(leafNodesOglist, keccak256, {
  sortPairs: true,
});

const leafNodesWhitelist = whitelistAddress.map(keccak256);
const merkleTreeWhiteList = new MerkleTree(leafNodesWhitelist, keccak256, {
  sortPairs: true,
});
// console.log(merkleTreeWhiteList.getRoot().toString("hex"));

function getWhitelistHexProofFromAddrs(addressToCheck) {
  const addressHash = keccak256(addressToCheck);
  const hexProof = merkleTreeWhiteList.getHexProof(addressHash);

  return hexProof;
}

function getOglistHexProofFromAddrs(addressToCheck) {
  const addressHash = keccak256(addressToCheck);
  const hexProof = merkleTreeOgList.getHexProof(addressHash);

  return hexProof;
}

// module.exports = {
//   // getFreeClaimHexProofFromAddrs,
//   getOglistHexProofFromAddrs,
//   getWhitelistHexProofFromAddrs,
// };

export default { getOglistHexProofFromAddrs, getWhitelistHexProofFromAddrs };
