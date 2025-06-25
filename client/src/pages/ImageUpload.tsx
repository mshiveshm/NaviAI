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
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4 hover:bg-muted">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-4">Image Upload</h1>
          <p className="text-xl text-muted-foreground">
            Upload or take a photo to find similar products instantly
          </p>
        </div>

        <div className="grid gap-8">
          <Card className="gradient-card p-8 border-border shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl mb-4 text-foreground">Upload Product Image</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
                  dragActive 
                    ? 'border-primary bg-primary/5 scale-105' 
                    : 'border-border hover:border-primary/50 hover:bg-muted/50'
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
                      <p className="text-green-600 dark:text-green-400 font-medium mb-2">Image uploaded successfully!</p>
                      <Button
                        onClick={() => setUploadedImage(null)}
                        variant="outline"
                        className="mr-2 border-border hover:border-primary"
                      >
                        Upload Different Image
                      </Button>
                      <Button className="gradient-primary text-white hover:scale-105 transition-transform">
                        Find Similar Products
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Upload className="w-16 h-16 text-muted-foreground mx-auto" />
                    <div>
                      <p className="text-lg font-medium text-foreground mb-2">
                        Drag and drop your image here
                      </p>
                      <p className="text-muted-foreground mb-4">or</p>
                      <Button
                        onClick={onButtonClick}
                        className="gradient-primary text-white mr-4 hover:scale-105 transition-transform shadow-lg"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Choose File
                      </Button>
                      <Button
                        variant="outline"
                        onClick={onButtonClick}
                        className="border-border hover:border-primary"
                      >
                        <Camera className="w-4 h-4 mr-2" />
                        Take Photo
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
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
