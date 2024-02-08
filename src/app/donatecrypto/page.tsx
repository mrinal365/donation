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
                        <InputText/>
                    </div>
                    </div>
                </RainbowKitProvider>
            </WagmiConfig>
        </div>
    );
}
