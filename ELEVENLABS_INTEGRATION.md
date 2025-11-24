# ElevenLabs Voice Clone Integration

This project now includes ElevenLabs voice cloning functionality. Here's how to set it up:

## Setup Instructions

1. **Get ElevenLabs API Key**
   - Go to [ElevenLabs API Keys](https://elevenlabs.io/app/settings/api-keys)
   - Create a new API key
   - Copy the API key

2. **Configure Environment Variables**
   - Create a `.env.local` file in your project root
   - Add your ElevenLabs API key:
   ```
   NEXT_PUBLIC_ELEVENLABS_API_KEY=your_elevenlabs_api_key_here
   ```

3. **Usage**
   - Navigate to `/voice-clone` page
   - Scroll down to the "ElevenLabs Voice Clone" section
   - Click "Start Recording" to record your voice
   - The system will automatically upload to ElevenLabs
   - You'll receive an order ID
   - If verification is required, you'll see a verification image
   - After verification, the order ID will be logged to console

## Features

- ✅ Voice recording with auto-stop at 30 seconds
- ✅ Audio level visualization during recording
- ✅ Upload to ElevenLabs API
- ✅ Order ID generation and display
- ✅ Voice verification with image display
- ✅ Console logging of order ID after verification
- ✅ Real-time progress indicators
- ✅ Error handling and user feedback

## API Integration

The component uses the ElevenLabs PVC (Personal Voice Clone) API:
- `client.voices.pvc.create()` - Creates voice clone and returns order ID
- `client.voices.pvc.verify()` - Verifies voice clone if needed

## Troubleshooting

- Make sure your API key is valid and has sufficient credits
- Ensure microphone permissions are granted
- Check browser console for detailed error messages
- Verify your internet connection for API calls
