import React from 'react'
import { Link } from 'react-router-dom'
import { useAccount, useBalance } from 'wagmi'
import { Wallet, Plus, Image, ArrowLeftRight } from 'lucide-react'

const Dashboard = () => {
  const { address } = useAccount()
  const { data: balance } = useBalance({
    address: address,
  })

  const tabs = [
    {
      title: 'Create NFT',
      description: 'Design and deploy cross-chain NFTs',
      icon: Plus,
      path: '/create',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'My NFTs',
      description: 'View and manage your NFT collection',
      icon: Image,
      path: '/my-nfts',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Cross-Chain Transfer',
      description: 'Move NFTs between different blockchains',
      icon: ArrowLeftRight,
      path: '/transfer',
      color: 'from-purple-500 to-pink-600'
    },
  ]

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wallet Info Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-purple-600 rounded-xl">
              <Wallet className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
              <p className="text-gray-300">Manage your cross-chain NFT portfolio</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/20 rounded-xl p-4">
              <p className="text-gray-400 text-sm mb-1">Wallet Address</p>
              <p className="text-white font-mono text-sm break-all">
                {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Not connected'}
              </p>
            </div>
            
            <div className="bg-black/20 rounded-xl p-4">
              <p className="text-gray-400 text-sm mb-1">Balance</p>
              <p className="text-white font-semibold">
                {balance ? `${parseFloat(balance.formatted).toFixed(4)} ${balance.symbol}` : '0.00 ETH'}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="grid md:grid-cols-3 gap-6">
          {tabs.map((tab, index) => (
            <Link
              key={index}
              to={tab.path}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${tab.color} mb-6`}>
                <tab.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{tab.title}</h3>
              <p className="text-gray-300 leading-relaxed">{tab.description}</p>
              
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowLeftRight className="h-5 w-5 text-purple-400" />
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <h3 className="text-3xl font-bold text-white mb-2">12</h3>
            <p className="text-purple-300">NFTs Created</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
            <h3 className="text-3xl font-bold text-white mb-2">6</h3>
            <p className="text-blue-300">Chains Deployed</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
            <h3 className="text-3xl font-bold text-white mb-2">24</h3>
            <p className="text-green-300">Cross-Chain Transfers</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard