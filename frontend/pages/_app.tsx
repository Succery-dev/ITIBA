import type { AppProps } from "next/app";
import "@/styles/globals.css";

// Rainbowkit Imports
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  Theme,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { Chain, configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, goerli, polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { alchemyProvider } from "wagmi/providers/alchemy";
import merge from "lodash.merge";

// Adding Oasys Chain
const oasysChain: Chain = {
  id: 248,
  name: "OAS Mainnet",
  network: "mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "OAS",
    symbol: "OAS",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.mainnet.oasys.games"],
    },
    public: {
      http: ["https://rpc.mainnet.oasys.games"],
    },
  },
  blockExplorers: {
    default: { name: "OASYS Scan", url: "https://scan.oasys.games/" },
  },
  testnet: false,
};

const testnetOasysChain: Chain = {
  id: 9372,
  name: "OAS Testnet",
  network: "testnet",
  nativeCurrency: {
    decimals: 18,
    name: "OAS",
    symbol: "OAS",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.oasys.games"],
    },
    public: {
      http: ["https://rpc.testnet.oasys.games"],
    },
  },
  blockExplorers: {
    default: {
      name: "OASYS Testnet Scan",
      url: "https://scan.testnet.oasys.games/",
    },
    faucet: {
      name: "OASYS Testnet Faucet",
      url: "https://faucet.testnet.oasys.games/",
    },
  },
  testnet: true,
};

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, polygon, goerli, polygonMumbai, oasysChain, testnetOasysChain],
  [
    alchemyProvider({
      apiKey: "hD9cezpgNt5mIEKwrJxkY1HGDr8LCZ7f",
    }),
    publicProvider(),

    // jsonRpcProvider({rpc: (chainId) => ({http:})})
  ]
);

const { connectors } = getDefaultWallets({
  appName: "ITIBA",
  projectId: "itiba",
  chains: chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

const customWalletTheme: Theme = merge(darkTheme(), {
  colors: {
    accentColor: "#C031FD",
    connectButtonBackground: "black",
    connectButtonBackgroundError: "black",
    connectButtonInnerBackground: "black",
    modalBackground: "black",
  },
} as Theme);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} coolMode theme={customWalletTheme}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
