import React from 'react'
import { ExternalLink, Send, Eye } from 'lucide-react'

interface NFTCardProps {
  nft: {
    id: string
    name: string
    image: string
    description: string
    chain: string
    chainLogo: string
    tokenId: string
  }
  onSelect?: () => void
  isSelected?: boolean
}

const NFTCard: React.FC<NFTCardProps> = ({ nft, onSelect, isSelected }) => {
  return (
    <div
      className={`bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border transition-all duration-300 transform hover:scale-105 hover:bg-white/15 ${
        isSelected ? 'border-purple-500' : 'border-white/20'
      }`}
    >
      <div className="relative">
        <img
          src={nft.image}
          alt={nft.name}
          className="w-full aspect-square object-cover"
        />
        
        {/* Chain Badge */}
        <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
          <span className="text-sm">{nft.chainLogo}</span>
          <span className="text-xs text-white font-medium">{nft.chain}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2">{nft.name}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{nft.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <span>Token ID: #{nft.tokenId}</span>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-2">
          <button className="px-3 py-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors flex items-center justify-center gap-1">
            <Eye className="h-4 w-4" />
            <span className="text-xs">View</span>
          </button>
          
          <button className="px-3 py-2 bg-purple-600/20 text-purple-400 rounded-lg hover:bg-purple-600/30 transition-colors flex items-center justify-center gap-1">
            <Send className="h-4 w-4" />
            <span className="text-xs">Transfer</span>
          </button>
          
          <button className="px-3 py-2 bg-gray-600/20 text-gray-400 rounded-lg hover:bg-gray-600/30 transition-colors flex items-center justify-center gap-1">
            <ExternalLink className="h-4 w-4" />
            <span className="text-xs">Explorer</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NFTCard