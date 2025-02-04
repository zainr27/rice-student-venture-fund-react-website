import api from './api'
import { FormData } from '@/types'

// Description: Submit contact form
// Endpoint: POST /api/contact
// Request: FormData
// Response: { success: boolean, message: string }
export const submitContactForm = (data: FormData) => {
  return new Promise<{ success: boolean, message: string }>((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Thank you for your submission! We will get back to you soon.'
      })
    }, 500)
  })
}