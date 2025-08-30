export const SUPPORTED_CHAINS = {
  ethereum: {
    id: 1,
    name: 'Ethereum',
    symbol: 'ETH',
    logo: '⟠',
    color: 'text-blue-400',
    explorer: 'https://etherscan.io'
  },
  polygon: {
    id: 137,
    name: 'Polygon',
    symbol: 'MATIC',
    logo: '⬢',
    color: 'text-purple-400',
    explorer: 'https://polygonscan.com'
  },
  bsc: {
    id: 56,
    name: 'BSC',
    symbol: 'BNB',
    logo: '🟡',
    color: 'text-yellow-400',
    explorer: 'https://bscscan.com'
  },
  arbitrum: {
    id: 42161,
    name: 'Arbitrum',
    symbol: 'ETH',
    logo: '🔵',
    color: 'text-blue-300',
    explorer: 'https://arbiscan.io'
  },
  optimism: {
    id: 10,
    name: 'Optimism',
    symbol: 'ETH',
    logo: '🔴',
    color: 'text-red-400',
    explorer: 'https://optimistic.etherscan.io'
  },
  zetachain: {
    id: 7000,
    name: 'ZetaChain',
    symbol: 'ZETA',
    logo: '⚡',
    color: 'text-green-400',
    explorer: 'https://explorer.zetachain.com'
  }
} as const

export type ChainId = keyof typeof SUPPORTED_CHAINS

export const getChainInfo = (chainId: ChainId) => {
  return SUPPORTED_CHAINS[chainId]
}

export const formatAddress = (address: string): string => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export const formatTokenId = (tokenId: string): string => {
  return `#${tokenId}`
}