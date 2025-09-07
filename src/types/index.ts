export interface GeneratedItem {
  id: string;
  type: "image" | "video";
  prompt: string;
  url: string;
  thumbnail?: string;
  createdAt: Date;
  status: "generating" | "completed" | "error";
  resolution?: string;
  duration?: string;
  style?: string;
  model?: string;
}

export interface ImageGenerationRequest {
  prompt: string;
  model?: string;
  aspectRatio?: string;
  style?: string;
  quality?: string;
  negativePrompt?: string;
}

export interface VideoGenerationRequest {
  prompt: string;
  model?: string;
  duration?: number;
  resolution?: string;
  fps?: number;
  aspectRatio?: string;
  negativePrompt?: string;
}

export interface GenerationResponse {
  id: string;
  url: string;
  status: string;
  error?: string;
}