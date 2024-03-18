// 'use client'
// import {
//   EthereumClient,
//   modalConnectors,
//   walletConnectProvider,
// } from "@web3modal/ethereum";

// import { Web3Modal } from "@web3modal/react";

// import { configureChains, createClient, WagmiConfig } from "wagmi";

// import { goerli, mainnet } from "wagmi/chains";

// const chains = [goerli, mainnet];

// // Wagmi Provider
// const { provider } = configureChains(chains, [
//   walletConnectProvider({ projectId: "4c09fa49dd4ee424f434a0e37e5465eb" }),
// ]);

// // Wagmi Client
// const wagmiClient = createClient({
//   autoConnect: true,
//   connectors: modalConnectors({ appName: "web3Modal", chains }),
//   provider,
// });

// // Web3Modal Ethereum Client
// const ethereumClient = new EthereumClient(wagmiClient, chains);

export default function Donate({ Component, pageProps }) {
  return (
    <>
    <p>ghjkg</p>
    </>
  )
}