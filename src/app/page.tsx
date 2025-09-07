"use client";

import { useState } from "react";
import ImageGenerator from "@/components/image-generator";
import VideoGenerator from "@/components/video-generator";
import Gallery from "@/components/gallery";
import { GeneratedItem } from "@/types";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"image" | "video">("image");
  const [gallery, setGallery] = useState<GeneratedItem[]>([]);

  const addToGallery = (item: GeneratedItem) => {
    setGallery(prev => [item, ...prev]);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Content Generator
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Create stunning AI images and videos with cutting-edge technology
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800 rounded-full p-1 flex gap-1">
              <button
                onClick={() => setActiveTab("image")}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeTab === "image"
                    ? "bg-purple-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Image
              </button>
              <button
                onClick={() => setActiveTab("video")}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeTab === "video"
                    ? "bg-purple-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Video
              </button>
            </div>
          </div>

          {activeTab === "image" ? (
            <ImageGenerator onGenerate={addToGallery} />
          ) : (
            <VideoGenerator onGenerate={addToGallery} />
          )}

          {gallery.length > 0 && (
            <Gallery items={gallery} />
          )}
        </div>
      </div>
    </main>
  );
}