import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import CreateNFT from './pages/CreateNFT'
import MyNFTs from './pages/MyNFTs'
import Transfer from './pages/Transfer'
import Header from './components/Header'

function App() {
  const { isConnected } = useAccount()

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          {isConnected && (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/create" element={<CreateNFT />} />
              <Route path="/my-nfts" element={<MyNFTs />} />
              <Route path="/transfer" element={<Transfer />} />
            </>
          )}
        </Routes>
      </main>
    </div>
  )
}

export default App