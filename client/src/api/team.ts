import api from './api'
import { TeamMember } from '@/types'

// Description: Get team members
// Endpoint: GET /api/team
// Request: {}
// Response: { members: TeamMember[] }
export const getTeamMembers = () => {
  return new Promise<{ members: TeamMember[] }>((resolve) => {
    setTimeout(() => {
      resolve({
        members: [
          {
            id: '1',
            name: 'Jacob Straube',
            role: 'Founding Partner',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '2',
            name: 'Pranai Reddy',
            role: 'Founding Partner',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '3',
            name: 'Raj Shroff',
            role: 'Managing Partner',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=15',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '4',
            name: 'Alena Powell',
            role: 'Managing Partner',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=5',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '5',
            name: 'Will Situ',
            role: 'Head of Enterprise Sector',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=13',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '6',
            name: 'Sriram Chundi',
            role: 'Head of Consumer Sector',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=18',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '7',
            name: 'Kaira Sheth',
            role: 'Head of Energy Sector',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=8',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '8',
            name: 'Zephyr Zoidis',
            role: 'Head of Healthcare Sector',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=16',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '9',
            name: 'Kshittij Mallpani',
            role: 'Associate, Consumer Sector',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=17',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '10',
            name: 'Liza Jacob',
            role: 'Chief of Marketing',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '11',
            name: 'Lola Cantillon',
            role: 'Associate, Consumer Sector',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=4',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '12',
            name: 'Jeffery Su',
            role: 'Associate, Energy Sector',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=6',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '13',
            name: 'Eishan Naik',
            role: 'Associate, Energy Sector',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=7',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '14',
            name: 'Sima El Barbir',
            role: 'Associate, Energy Sector',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=9',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '15',
            name: 'Andrew Ondara',
            role: 'Associate, Enterprise Sector',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=10',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '16',
            name: 'Meghan Lim',
            role: 'Associate, Enterprise Sector',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=12',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '17',
            name: 'Joyce Wang',
            role: 'Associate, Healthcare Sector',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=14',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '18',
            name: 'Kevin Sun',
            role: 'Associate',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=19',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '19',
            name: 'Addy Nguyen',
            role: 'Associate',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=20',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '20',
            name: 'Santosh Areti',
            role: 'Associate',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=21',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '21',
            name: 'Gabriel Berdach',
            role: 'Associate',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=22',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '22',
            name: 'Vismay Ravikumar',
            role: 'Associate',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=23',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '23',
            name: 'Gaveesh Kapoor',
            role: 'Associate',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=24',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '24',
            name: 'Zain Rahman',
            role: 'Associate',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=25',
            linkedin: 'https://linkedin.com'
          }
        ]
      })
    }, 500)
  })
}