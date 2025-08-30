import React, { useState } from 'react'
import { Check } from 'lucide-react'

interface NFTSelectorProps {
  fromChain: string
  selectedNFT: string
  onSelect: (nftId: string) => void
}

// Mock NFTs based on chain
const mockNFTsByChain: Record<string, any[]> = {
  ethereum: [
    {
      id: 'eth_001',
      name: 'Cosmic Warrior #001',
      image: 'https://images.pexels.com/photos/8197562/pexels-photo-8197562.jpeg?auto=compress&cs=tinysrgb&w=200',
      tokenId: '1001'
    }
  ],
  polygon: [
    {
      id: 'poly_001', 
      name: 'Digital Dreamscape',
      image: 'https://images.pexels.com/photos/8728552/pexels-photo-8728552.jpeg?auto=compress&cs=tinysrgb&w=200',
      tokenId: '1002'
    }
  ],
  zetachain: [
    {
      id: 'zeta_001',
      name: 'Cyber Phoenix',
      image: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=200',
      tokenId: '1003'
    }
  ]
}

const NFTSelector: React.FC<NFTSelectorProps> = ({ fromChain, selectedNFT, onSelect }) => {
  const nfts = mockNFTsByChain[fromChain] || []

  if (!fromChain) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">Select a source chain to view your NFTs</p>
      </div>
    )
  }

  if (nfts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">No NFTs found on {fromChain}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {nfts.map((nft) => (
        <button
          key={nft.id}
          type="button"
          onClick={() => onSelect(nft.id)}
          className={`relative p-3 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
            selectedNFT === nft.id
              ? 'border-purple-500 bg-purple-600/20'
              : 'border-white/20 bg-black/20 hover:bg-white/5'
          }`}
        >
          <img
            src={nft.image}
            alt={nft.name}
            className="w-full aspect-square object-cover rounded-lg mb-3"
          />
          <h4 className="text-white font-medium text-sm">{nft.name}</h4>
          <p className="text-gray-400 text-xs">#{nft.tokenId}</p>
          
          {selectedNFT === nft.id && (
            <div className="absolute -top-2 -right-2 bg-purple-500 rounded-full p-1">
              <Check className="h-3 w-3 text-white" />
            </div>
          )}
        </button>
      ))}
    </div>
  )
}

export default NFTSelector