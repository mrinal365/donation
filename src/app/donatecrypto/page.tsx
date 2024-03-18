// 'use client'
// // import "./styles.css";
// import { WagmiConfig, createClient, configureChains, chain } from "wagmi";
// import { publicProvider } from "wagmi/providers/public";
// import { alchemyProvider } from "wagmi/providers/alchemy";
// import "@rainbow-me/rainbowkit/styles.css";
// import InputText from '../../components/Input'
// import {
//     darkTheme,
//     RainbowKitProvider,
//     getDefaultWallets,
//     ConnectButton
// } from "@rainbow-me/rainbowkit";

// const { chains, provider } = configureChains(
//     [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
//     [alchemyProvider({ alchemyId: "" }), publicProvider()]
// );

// const { connectors } = getDefaultWallets({
//     appName: "Test App",
//     chains
// });

// const wagmiClient = createClient({
//     autoConnect: true,
//     connectors,
//     provider
// });

// export default function Connectpage() {
//     return (
//         <div className="App">
//             <WagmiConfig client={wagmiClient}>
//                 <RainbowKitProvider chains={chains} theme={darkTheme()} coolMode>
//                     {/* <h1>Wallet connect</h1> */}
//                     <div className="flex justify-center mt-10 mb-10">
//                         <ConnectButton />
//                     </div>
//                     <p className="text-center font-bold mb-10">
//                         Send ETh only
//                     </p>
//                     <div className="flex items-center justify-center">
//                         <div className="max-w-[500px] ">
//                             <InputText />
//                         </div>
//                     </div>
//                     <p className="text-center font-bold mt-10 mb-10">
//                         Send manually by copy address
//                     </p>
//                     <div className="flex justify-center">
//                         <div className="w-full max-w-[16rem]">
//                             <div className="relative">
//                                 {/* <label for="npm-install-copy-text" className="sr-only">Label</label> */}
//                                 <input id="npm-install-copy-text" type="text" className="col-span-6 bg-gray-50 border border-gray-800 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 " value="pnina eth address" disabled readonly />
//                                     <button data-copy-to-clipboard-target="npm-install-copy-text" className="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900  hover:bg-gray-100  rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
//                                         <span id="default-message" className="inline-flex items-center">
//                                             <svg className="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
//                                                 <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
//                                             </svg>
//                                             <span className="text-xs font-semibold">Copy</span>
//                                         </span>
//                                         <span id="success-message" className="hidden inline-flex items-center">
//                                             <svg className="w-3 h-3 text-blue-700 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
//                                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
//                                             </svg>
//                                             <span className="text-xs font-semibold text-blue-700 ">Copied</span>
//                                         </span>
//                                     </button>
//                             </div>
//                         </div>

//                     </div>
//                 </RainbowKitProvider>
//             </WagmiConfig>
//         </div>
//     );
// }
