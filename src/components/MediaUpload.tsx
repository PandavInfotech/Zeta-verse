import React, { useRef, useState } from 'react'
import { Upload, Image, Video, FileX, Check } from 'lucide-react'

interface MediaUploadProps {
  onFileSelect: (file: File | null) => void
  selectedFile: File | null
}

const MediaUpload: React.FC<MediaUploadProps> = ({ onFileSelect, selectedFile }) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [dragActive, setDragActive] = useState(false)
  const [preview, setPreview] = useState<string | null>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleFile = (file: File) => {
    if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
      onFileSelect(file)
      
      // Create preview
      const reader = new FileReader()
      reader.onload = (e) => {
        setPreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    } else {
      alert('Please select an image or video file')
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const removeFile = () => {
    onFileSelect(null)
    setPreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-3">
        Upload Media *
      </label>
      
      {!selectedFile ? (
        <div
          className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 cursor-pointer ${
            dragActive
              ? 'border-purple-500 bg-purple-600/20'
              : 'border-white/20 bg-black/20 hover:bg-white/5 hover:border-white/30'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*,video/*"
            onChange={handleFileInput}
            className="hidden"
          />
          
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h4 className="text-lg font-semibold text-white mb-2">Upload your media</h4>
          <p className="text-gray-300 mb-4">
            Drag and drop your image or video, or click to browse
          </p>
          <p className="text-sm text-gray-400">
            Supports JPG, PNG, GIF, MP4, WebM (Max 50MB)
          </p>
        </div>
      ) : (
        <div className="bg-black/20 rounded-xl p-4 border border-white/20">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              {selectedFile.type.startsWith('image/') ? (
                <Image className="h-5 w-5 text-green-400" />
              ) : (
                <Video className="h-5 w-5 text-blue-400" />
              )}
              <div>
                <p className="text-white font-medium">{selectedFile.name}</p>
                <p className="text-gray-400 text-xs">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-green-400">
                <Check className="h-4 w-4" />
                <span className="text-xs">Ready</span>
              </div>
              <button
                onClick={removeFile}
                className="p-2 hover:bg-red-600/20 rounded-lg transition-colors"
              >
                <FileX className="h-4 w-4 text-red-400" />
              </button>
            </div>
          </div>
          
          {preview && selectedFile.type.startsWith('image/') && (
            <div className="rounded-lg overflow-hidden">
              <img 
                src={preview} 
                alt="Preview" 
                className="w-full h-32 object-cover"
              />
            </div>
          )}
        </div>
      )}
      
      <p className="text-xs text-gray-400 mt-2">
        Files will be stored on IPFS via web3.storage for decentralized access
      </p>
    </div>
  )
}

export default MediaUpload