import React from 'react'
import { Check } from 'lucide-react'

interface ChainSelectorProps {
  selectedChains: string[]
  onChange: (chains: string[]) => void
}

const chains = [
  { id: 'ethereum', name: 'Ethereum', logo: '⟠', color: 'border-blue-500' },
  { id: 'polygon', name: 'Polygon', logo: '⬢', color: 'border-purple-500' },
  { id: 'bsc', name: 'BSC', logo: '🟡', color: 'border-yellow-500' },
  { id: 'arbitrum', name: 'Arbitrum', logo: '🔵', color: 'border-blue-300' },
  { id: 'optimism', name: 'Optimism', logo: '🔴', color: 'border-red-400' },
  { id: 'zetachain', name: 'ZetaChain', logo: '⚡', color: 'border-green-400' },
]

const ChainSelector: React.FC<ChainSelectorProps> = ({ selectedChains, onChange }) => {
  const toggleChain = (chainId: string) => {
    if (selectedChains.includes(chainId)) {
      onChange(selectedChains.filter(id => id !== chainId))
    } else {
      onChange([...selectedChains, chainId])
    }
  }

  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-3">
        Select Deployment Chains *
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {chains.map((chain) => {
          const isSelected = selectedChains.includes(chain.id)
          return (
            <button
              key={chain.id}
              type="button"
              onClick={() => toggleChain(chain.id)}
              className={`relative p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                isSelected
                  ? `${chain.color} bg-white/10`
                  : 'border-white/20 bg-black/20 hover:bg-white/5'
              }`}
            >
              <div className="flex flex-col items-center space-y-2">
                <span className="text-2xl">{chain.logo}</span>
                <span className={`text-sm font-medium ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                  {chain.name}
                </span>
              </div>
              
              {isSelected && (
                <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
              )}
            </button>
          )
        })}
      </div>
      
      {selectedChains.length > 0 && (
        <div className="mt-4 p-3 bg-blue-600/20 rounded-lg border border-blue-500/20">
          <p className="text-blue-300 text-sm">
            ✨ Your NFT will be deployed on {selectedChains.length} chain{selectedChains.length > 1 ? 's' : ''} simultaneously
          </p>
        </div>
      )}
    </div>
  )
}

export default ChainSelector