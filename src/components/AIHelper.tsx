import React, { useState } from 'react'
import { Sparkles, Loader2, Lightbulb } from 'lucide-react'

interface AIHelperProps {
  onSuggestion: (field: string, value: string) => void
}

const AIHelper: React.FC<AIHelperProps> = ({ onSuggestion }) => {
  const [isGenerating, setIsGenerating] = useState(false)
  const [suggestions, setSuggestions] = useState<{name: string, description: string} | null>(null)

  const generateSuggestions = async () => {
    setIsGenerating(true)
    
    try {
      // Simulate AI generation
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const mockSuggestions = {
        name: 'Quantum Realm Explorer',
        description: 'A mystical journey through parallel dimensions, featuring ethereal landscapes and cosmic energies that transcend traditional reality boundaries.'
      }
      
      setSuggestions(mockSuggestions)
    } catch (error) {
      console.error('AI generation failed:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  const applySuggestion = (field: string, value: string) => {
    onSuggestion(field, value)
  }

  return (
    <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="h-6 w-6 text-purple-400" />
        <h3 className="text-xl font-bold text-white">AI Helper</h3>
      </div>

      <p className="text-gray-300 text-sm mb-6 leading-relaxed">
        Get AI-powered suggestions for your NFT metadata using Google Gemini
      </p>

      <button
        onClick={generateSuggestions}
        disabled={isGenerating}
        className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 mb-6"
      >
        {isGenerating ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Sparkles className="h-4 w-4" />
            Generate Ideas
          </>
        )}
      </button>

      {suggestions && (
        <div className="space-y-4">
          <div className="bg-black/20 rounded-xl p-4 border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-medium text-gray-300">Name Suggestion</span>
            </div>
            <p className="text-white mb-3">{suggestions.name}</p>
            <button
              onClick={() => applySuggestion('name', suggestions.name)}
              className="px-4 py-2 bg-purple-600 text-white text-xs font-medium rounded-lg hover:bg-purple-700 transition-colors"
            >
              Use This Name
            </button>
          </div>

          <div className="bg-black/20 rounded-xl p-4 border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-medium text-gray-300">Description Suggestion</span>
            </div>
            <p className="text-white text-sm mb-3 leading-relaxed">{suggestions.description}</p>
            <button
              onClick={() => applySuggestion('description', suggestions.description)}
              className="px-4 py-2 bg-purple-600 text-white text-xs font-medium rounded-lg hover:bg-purple-700 transition-colors"
            >
              Use This Description
            </button>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-blue-600/20 rounded-xl border border-blue-500/20">
        <h4 className="text-white font-semibold mb-2">Pro Tips</h4>
        <ul className="text-sm text-gray-300 space-y-1">
          <li>• Use descriptive, unique names</li>
          <li>• Include utility or story in description</li>
          <li>• Consider cross-chain compatibility</li>
        </ul>
      </div>
    </div>
  )
}

export default AIHelper