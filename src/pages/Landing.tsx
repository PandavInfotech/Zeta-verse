import React from 'react'
import { Link } from 'react-router-dom'
import { useAccount } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { ArrowRight, Coins, Globe, Shield, Zap } from 'lucide-react'

const chains = [
  { name: 'Ethereum', logo: '⟠', color: 'text-blue-400' },
  { name: 'Polygon', logo: '⬢', color: 'text-purple-400' },
  { name: 'BSC', logo: '🟡', color: 'text-yellow-400' },
  { name: 'Arbitrum', logo: '🔵', color: 'text-blue-300' },
  { name: 'Optimism', logo: '🔴', color: 'text-red-400' },
  { name: 'ZetaChain', logo: '⚡', color: 'text-green-400' },
]

const features = [
  {
    icon: Globe,
    title: 'Cross-Chain Native',
    description: 'Deploy and manage NFTs across multiple blockchains simultaneously'
  },
  {
    icon: Zap,
    title: 'Powered by ZetaChain',
    description: 'Seamless cross-chain transfers using ZetaChain Universal Contracts'
  },
  {
    icon: Shield,
    title: 'Secure & Decentralized',
    description: 'Your assets are stored on IPFS with full ownership control'
  },
  {
    icon: Coins,
    title: 'AI-Powered Creation',
    description: 'Get intelligent suggestions for metadata and descriptions'
  },
]

const Landing = () => {
  const { isConnected } = useAccount()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Cross-Chain NFTs</span> Easily with ZetaVerse
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            The first platform to enable native cross-chain NFT creation and management. 
            Deploy once, access everywhere through ZetaChain's Universal Smart Contracts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            {isConnected ? (
              <Link
                to="/dashboard"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Go to Dashboard
                <ArrowRight className="h-5 w-5" />
              </Link>
            ) : (
              <div className="transform hover:scale-105 transition-transform duration-300">
                <ConnectButton />
              </div>
            )}
            
            <Link
              to="/create"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
            >
              Start Creating
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Supported Chains */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-6">Supported Chains</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {chains.map((chain) => (
                <div 
                  key={chain.name}
                  className="flex flex-col items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                >
                  <span className={`text-3xl ${chain.color} mb-2`}>{chain.logo}</span>
                  <span className="text-sm text-gray-300 font-medium">{chain.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose ZetaVerse?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the future of NFTs with true cross-chain capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <feature.icon className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing