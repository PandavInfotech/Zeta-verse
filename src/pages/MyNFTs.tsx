import React, { useState } from 'react'
import { useAccount } from 'wagmi'
import { ExternalLink, Send, Eye, MoreVertical } from 'lucide-react'
import NFTCard from '../components/NFTCard'

// Mock NFT data
const mockNFTs = [
  {
    id: '1',
    name: 'Cosmic Warrior #001',
    image: 'https://images.pexels.com/photos/8197562/pexels-photo-8197562.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'A fierce warrior from the cosmos',
    chain: 'Ethereum',
    chainLogo: '⟠',
    tokenId: '1001'
  },
  {
    id: '2',
    name: 'Digital Dreamscape',
    image: 'https://images.pexels.com/photos/8728552/pexels-photo-8728552.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Abstract digital art piece',
    chain: 'Polygon',
    chainLogo: '⬢',
    tokenId: '1002'
  },
  {
    id: '3',
    name: 'Cyber Phoenix',
    image: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Legendary creature reborn in digital form',
    chain: 'ZetaChain',
    chainLogo: '⚡',
    tokenId: '1003'
  },
  {
    id: '4',
    name: 'Neon Genesis',
    image: 'https://images.pexels.com/photos/8566459/pexels-photo-8566459.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Futuristic cityscape NFT',
    chain: 'BSC',
    chainLogo: '🟡',
    tokenId: '1004'
  }
]

const MyNFTs = () => {
  const { address } = useAccount()
  const [selectedNFT, setSelectedNFT] = useState<string | null>(null)

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">My NFT Collection</h1>
          <p className="text-xl text-gray-300">Your cross-chain digital assets</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
            <h3 className="text-2xl font-bold text-white">{mockNFTs.length}</h3>
            <p className="text-gray-300 text-sm">Total NFTs</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
            <h3 className="text-2xl font-bold text-white">4</h3>
            <p className="text-gray-300 text-sm">Chains</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
            <h3 className="text-2xl font-bold text-white">2.4 ETH</h3>
            <p className="text-gray-300 text-sm">Floor Value</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
            <h3 className="text-2xl font-bold text-white">8</h3>
            <p className="text-gray-300 text-sm">Transfers</p>
          </div>
        </div>

        {/* NFT Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockNFTs.map((nft) => (
            <NFTCard
              key={nft.id}
              nft={nft}
              onSelect={() => setSelectedNFT(nft.id)}
              isSelected={selectedNFT === nft.id}
            />
          ))}
        </div>

        {mockNFTs.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10 max-w-md mx-auto">
              <Eye className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No NFTs Found</h3>
              <p className="text-gray-300 mb-6">Start creating your first cross-chain NFT</p>
              <a
                href="/create"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                <Plus className="h-5 w-5" />
                Create NFT
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MyNFTs