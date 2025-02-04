import api from './api'
import { Partner } from '@/types'

// Description: Get partners
// Endpoint: GET /api/partners
// Request: {}
// Response: { partners: Partner[] }
export const getPartners = () => {
  return new Promise<{ partners: Partner[] }>((resolve) => {
    setTimeout(() => {
      resolve({
        partners: [
          {
            id: '1',
            name: 'Rice',
            logo: '/images/ricewithname.png',
            website: 'https://rice.edu'
          },
          {
            id: '2',
            name: 'Lillie',
            logo: '/images/rice_lilie_logo_PNG_variation_primary_orange_crop.avif',
            website: 'https://entrepreneurship.rice.edu/'
          }
        ]
      })
    }, 500)
  })
}