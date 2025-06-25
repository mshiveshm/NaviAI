import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Camera, ArrowLeft, Image } from "lucide-react";
import { useState, useRef } from "react";

export default function ImageUpload() {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Image Upload</h1>
          <p className="text-xl text-gray-600">
            Upload or take a photo to find similar products instantly
          </p>
        </div>

        <div className="grid gap-8">
          <Card className="p-8">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Upload Product Image</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive 
                    ? 'border-brand-blue-500 bg-brand-blue-50' 
                    : 'border-gray-300 hover:border-brand-blue-400'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {uploadedImage ? (
                  <div className="space-y-4">
                    <img
                      src={uploadedImage}
                      alt="Uploaded product"
                      className="max-w-xs max-h-64 mx-auto rounded-lg shadow-md"
                    />
                    <div>
                      <p className="text-green-600 font-medium mb-2">Image uploaded successfully!</p>
                      <Button
                        onClick={() => setUploadedImage(null)}
                        variant="outline"
                        className="mr-2"
                      >
                        Upload Different Image
                      </Button>
                      <Button className="bg-brand-blue-500 hover:bg-brand-blue-600">
                        Find Similar Products
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Upload className="w-16 h-16 text-gray-400 mx-auto" />
                    <div>
                      <p className="text-lg font-medium text-gray-700 mb-2">
                        Drag and drop your image here
                      </p>
                      <p className="text-gray-500 mb-4">or</p>
                      <Button
                        onClick={onButtonClick}
                        className="bg-brand-blue-500 hover:bg-brand-blue-600 mr-4"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Choose File
                      </Button>
                      <Button
                        variant="outline"
                        onClick={onButtonClick}
                      >
                        <Camera className="w-4 h-4 mr-2" />
                        Take Photo
                      </Button>
                    </div>
                    <p className="text-sm text-gray-500">
                      Supports: JPG, PNG, GIF (Max 10MB)
                    </p>
                  </div>
                )}
              </div>
              
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleChange}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How Image Recognition Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-brand-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-blue-600 font-semibold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Upload Image</h3>
                  <p className="text-gray-600">Take a photo or upload an image of any product</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-brand-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-blue-600 font-semibold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">AI Analysis</h3>
                  <p className="text-gray-600">Our visual AI identifies colors, patterns, and product features</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-brand-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-blue-600 font-semibold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Find Matches</h3>
                  <p className="text-gray-600">Get exact matches or similar products from our database</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tips for Better Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">✓ Good Photos:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Clear, well-lit images</li>
                    <li>• Product as main focus</li>
                    <li>• Multiple angles if possible</li>
                    <li>• Minimal background distractions</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">✗ Avoid:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Blurry or dark images</li>
                    <li>• Screenshots from websites</li>
                    <li>• Images with text overlays</li>
                    <li>• Very small product in frame</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
