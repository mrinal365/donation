'use client'
// import "./styles.css";
import { WagmiConfig, createClient, configureChains, chain } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { alchemyProvider } from "wagmi/providers/alchemy";
import "@rainbow-me/rainbowkit/styles.css";
import InputText from '../../components/Input'
import {
    darkTheme,
    RainbowKitProvider,
    getDefaultWallets,
    ConnectButton
} from "@rainbow-me/rainbowkit";

const { chains, provider } = configureChains(
    [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
    [alchemyProvider({ alchemyId: "" }), publicProvider()]
);

const { connectors } = getDefaultWallets({
    appName: "Test App",
    chains
});

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
});

export default function Connectpage() {
    return (
        <div className="App">
            <WagmiConfig client={wagmiClient}>
                <RainbowKitProvider chains={chains} theme={darkTheme()} coolMode>
                    {/* <h1>Wallet connect</h1> */}
                    <div className="flex justify-center mt-10">
                        <ConnectButton />
                    </div>
                    <p className="text-center">
                        Send ETh only
                    </p>
                    <div className="flex items-center justify-center">
                        <div className="max-w-[500px] ">
                            <InputText />
                        </div>
                    </div>
                    <div >
                        <div className="flex w-full flex-row justify-center pt-4 text-center">

                            <a
                                className="bg-[#ffffff] rounded-md border-[1px] border-[black] mt-2 inline-flex items-center px-8 gap-3 py-3 text-lg font-semibold tracking-tighter text-black"
                                href="https://mywhalehub.mysellix.io/pay/27c551-0a2c941195-fcdc68"
                            >
                                Donate via Crypto
                                <img src="https://cryptologos.cc/logos/ethereum-eth-logo.png" className="h-5 w-5  rounded-full" />


                            </a>

                        </div>
                        <div className="flex w-full flex-row justify-center pt-4 text-center">

                            <a
                                className="bg-[#ffffff] rounded-md border-[1px] border-[black] mt-2 inline-flex items-center px-8 gap-3 py-3 text-lg font-semibold tracking-tighter text-black"
                                href="https://mywhalehub.mysellix.io/pay/27c551-0a2c941195-fcdc68"
                            >
                                Donate via Crypto
                                <img src="https://cryptologos.cc/logos/ethereum-eth-logo.png" className="h-5 w-5  rounded-full" />


                            </a>

                        </div>
                    </div>
                </RainbowKitProvider>
            </WagmiConfig>
        </div>
    );
}
