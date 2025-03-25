import { FormData } from '@/types'

// Description: Submit contact form
// Endpoint: POST /api/contact
// Request: FormData
// Response: { success: boolean, message: string }
export const submitContactForm = async (data: FormData) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  } catch (error) {
    throw error;
  }
}