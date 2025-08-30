import React, { useState } from 'react'
import { Upload, Sparkles, Loader2, CheckCircle } from 'lucide-react'
import { useAccount } from 'wagmi'
import AIHelper from '../components/AIHelper'
import ChainSelector from '../components/ChainSelector'
import MediaUpload from '../components/MediaUpload'

const CreateNFT = () => {
  const { address } = useAccount()
  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    description: '',
    mediaFile: null as File | null,
    selectedChains: [] as string[]
  })
  const [isDeploying, setIsDeploying] = useState(false)
  const [deploySuccess, setDeploySuccess] = useState(false)

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleDeploy = async () => {
    if (!address || !formData.name || !formData.mediaFile || formData.selectedChains.length === 0) {
      alert('Please fill all required fields')
      return
    }

    setIsDeploying(true)
    
    try {
      // Simulate deployment process
      await new Promise(resolve => setTimeout(resolve, 3000))
      setDeploySuccess(true)
      setIsDeploying(false)
      
      // Reset form after success
      setTimeout(() => {
        setDeploySuccess(false)
        setFormData({
          name: '',
          symbol: '',
          description: '',
          mediaFile: null,
          selectedChains: []
        })
      }, 2000)
    } catch (error) {
      console.error('Deployment failed:', error)
      setIsDeploying(false)
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Create Cross-Chain NFT</h1>
          <p className="text-xl text-gray-300">Deploy your NFT across multiple blockchains simultaneously</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                {/* Basic Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      NFT Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Enter NFT name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Symbol *
                    </label>
                    <input
                      type="text"
                      value={formData.symbol}
                      onChange={(e) => handleInputChange('symbol', e.target.value)}
                      className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="e.g., ZNFT"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Describe your NFT..."
                  />
                </div>

                {/* Media Upload */}
                <MediaUpload 
                  onFileSelect={(file) => handleInputChange('mediaFile', file)}
                  selectedFile={formData.mediaFile}
                />

                {/* Chain Selection */}
                <ChainSelector
                  selectedChains={formData.selectedChains}
                  onChange={(chains) => handleInputChange('selectedChains', chains)}
                />

                {/* Deploy Button */}
                <button
                  onClick={handleDeploy}
                  disabled={isDeploying || deploySuccess}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isDeploying ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Deploying Cross-Chain NFT...
                    </>
                  ) : deploySuccess ? (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      Successfully Deployed!
                    </>
                  ) : (
                    <>
                      <Upload className="h-5 w-5" />
                      Deploy Cross-Chain NFT
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* AI Helper Sidebar */}
          <div className="lg:col-span-1">
            <AIHelper 
              onSuggestion={(field, value) => handleInputChange(field, value)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateNFT