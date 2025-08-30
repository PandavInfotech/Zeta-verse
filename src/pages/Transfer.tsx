import React, { useState } from 'react'
import { ArrowRight, ArrowLeftRight, Loader2, CheckCircle } from 'lucide-react'
import ChainDropdown from '../components/ChainDropdown'
import NFTSelector from '../components/NFTSelector'

const Transfer = () => {
  const [fromChain, setFromChain] = useState('')
  const [toChain, setToChain] = useState('')
  const [selectedNFT, setSelectedNFT] = useState('')
  const [isTransferring, setIsTransferring] = useState(false)
  const [transferSuccess, setTransferSuccess] = useState(false)

  const handleTransfer = async () => {
    if (!fromChain || !toChain || !selectedNFT) {
      alert('Please select all required fields')
      return
    }

    if (fromChain === toChain) {
      alert('Source and destination chains cannot be the same')
      return
    }

    setIsTransferring(true)
    
    try {
      // Simulate cross-chain transfer
      await new Promise(resolve => setTimeout(resolve, 4000))
      setTransferSuccess(true)
      setIsTransferring(false)
      
      // Reset after success
      setTimeout(() => {
        setTransferSuccess(false)
        setFromChain('')
        setToChain('')
        setSelectedNFT('')
      }, 2000)
    } catch (error) {
      console.error('Transfer failed:', error)
      setIsTransferring(false)
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Cross-Chain Transfer</h1>
          <p className="text-xl text-gray-300">Move your NFTs between different blockchains</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <div className="space-y-8">
            {/* Chain Selection */}
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  From Chain *
                </label>
                <ChainDropdown
                  value={fromChain}
                  onChange={setFromChain}
                  placeholder="Select source chain"
                />
              </div>

              <div className="flex justify-center">
                <div className="p-3 bg-purple-600 rounded-full">
                  <ArrowRight className="h-6 w-6 text-white transform rotate-0 md:rotate-0" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  To Chain *
                </label>
                <ChainDropdown
                  value={toChain}
                  onChange={setToChain}
                  placeholder="Select destination chain"
                  excludeChain={fromChain}
                />
              </div>
            </div>

            {/* NFT Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Select NFT to Transfer *
              </label>
              <NFTSelector
                fromChain={fromChain}
                selectedNFT={selectedNFT}
                onSelect={setSelectedNFT}
              />
            </div>

            {/* Transfer Details */}
            {fromChain && toChain && selectedNFT && (
              <div className="bg-black/20 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Transfer Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Transfer Type:</span>
                    <span className="text-white font-semibold">Cross-Chain via ZetaChain</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Estimated Time:</span>
                    <span className="text-white font-semibold">2-5 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Gas Fee:</span>
                    <span className="text-white font-semibold">~$5-15</span>
                  </div>
                </div>
              </div>
            )}

            {/* Transfer Button */}
            <button
              onClick={handleTransfer}
              disabled={!fromChain || !toChain || !selectedNFT || isTransferring || transferSuccess}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
            >
              {isTransferring ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Transferring via ZetaChain...
                </>
              ) : transferSuccess ? (
                <>
                  <CheckCircle className="h-5 w-5" />
                  Transfer Complete!
                </>
              ) : (
                <>
                  <ArrowLeftRight className="h-5 w-5" />
                  Execute Cross-Chain Transfer
                </>
              )}
            </button>

            {/* Transfer Process Indicator */}
            {isTransferring && (
              <div className="bg-blue-600/20 rounded-xl p-6 border border-blue-500/20">
                <h4 className="text-white font-semibold mb-3">Transfer in Progress</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-300">Initiating transfer on {fromChain}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-300">Processing via ZetaChain Universal Contract</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <span className="text-sm text-gray-400">Finalizing on {toChain}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transfer