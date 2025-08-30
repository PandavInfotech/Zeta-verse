import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface ChainDropdownProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  excludeChain?: string
}

const chains = [
  { id: 'ethereum', name: 'Ethereum', logo: '⟠' },
  { id: 'polygon', name: 'Polygon', logo: '⬢' },
  { id: 'bsc', name: 'BSC', logo: '🟡' },
  { id: 'arbitrum', name: 'Arbitrum', logo: '🔵' },
  { id: 'optimism', name: 'Optimism', logo: '🔴' },
  { id: 'zetachain', name: 'ZetaChain', logo: '⚡' },
]

const ChainDropdown: React.FC<ChainDropdownProps> = ({ 
  value, 
  onChange, 
  placeholder = 'Select chain',
  excludeChain 
}) => {
  const [isOpen, setIsOpen] = useState(false)
  
  const filteredChains = chains.filter(chain => chain.id !== excludeChain)
  const selectedChain = chains.find(chain => chain.id === value)

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-xl text-left text-white focus:outline-none focus:border-purple-500 transition-colors flex items-center justify-between"
      >
        {selectedChain ? (
          <div className="flex items-center gap-3">
            <span className="text-xl">{selectedChain.logo}</span>
            <span>{selectedChain.name}</span>
          </div>
        ) : (
          <span className="text-gray-400">{placeholder}</span>
        )}
        <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-black/90 backdrop-blur-md rounded-xl border border-white/20 py-2 z-50">
          {filteredChains.map((chain) => (
            <button
              key={chain.id}
              type="button"
              onClick={() => {
                onChange(chain.id)
                setIsOpen(false)
              }}
              className="w-full px-4 py-3 text-left hover:bg-white/10 transition-colors flex items-center gap-3 text-white"
            >
              <span className="text-xl">{chain.logo}</span>
              <span>{chain.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ChainDropdown