/**
 * Media Service
 * Handles picking from gallery, camera access, and format conversions.
 */

export class MediaService {
  async pickImage() {
    console.log('[Media] Launching image picker...');
    // Mocked implementation
    return { uri: 'mock_image_uri.jpg' };
  }

  async processVideoFilter(videoUri: string, filterType: string) {
    console.log(`[Media] Applying ${filterType} to video...`);
    // Mock processing via ffmpeg / Expo AV
    return { uri: 'mock_processed_video.mp4' };
  }
}

export const mediaService = new MediaService();
