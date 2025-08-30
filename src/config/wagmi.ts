import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { 
  mainnet, 
  polygon, 
  bsc, 
  arbitrum, 
  optimism,
  avalanche 
} from 'wagmi/chains'
console.log("hy")
// ZetaChain configuration
const zetaChain = {
  id: 7000,
  name: 'ZetaChain Mainnet',
  nativeCurrency: {
    decimals: 18,
    name: 'ZETA',
    symbol: 'ZETA',
  },
  rpcUrls: {
    default: {
      http: ['https://zetachain-evm.blockpi.network/v1/rpc/public'],
    },
    public: {
      http: ['https://zetachain-evm.blockpi.network/v1/rpc/public'],
    },
  },
  blockExplorers: {
    default: { name: 'ZetaScan', url: 'https://explorer.zetachain.com' },
  },
} as const

export const config = getDefaultConfig({
  appName: 'ZetaVerse - Cross-Chain NFTs',
  projectId: "9b8f637025bb6d3599614a41f8d88906" ,
  chains: [mainnet, polygon, bsc, arbitrum, optimism, avalanche, zetaChain],
  ssr: false,
})