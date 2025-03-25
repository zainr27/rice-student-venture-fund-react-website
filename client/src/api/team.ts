import { TeamMember } from '@/types'

export const getTeam = async () => {
  try {
    const response = await fetch('/api/team');
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const getTeamMembers = () => {
  return new Promise<{ members: TeamMember[] }>((resolve) => {
    setTimeout(() => {
      resolve({
        members: [
          {
            id: '1',
            name: 'Jacob Straube',
            role: 'Founding Partner',
            image: '/images/JacobStraube.jpeg',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '2',
            name: 'Pranai Reddy',
            role: 'Founding Partner',
            image: '/images/PranaiReddy.jpeg',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '3',
            name: 'Raj Shroff',
            role: 'Managing Partner',
            image: '/images/RajShroff.jpeg',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '4',
            name: 'Alena Powell',
            role: 'Managing Partner',
            image: '/images/AlenaPowell.jpeg',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '5',
            name: 'Will Situ',
            role: 'Head of Enterprise Sector',
            image: '/images/WillSitu.jpeg',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '6',
            name: 'Sriram Chundi',
            role: 'Head of Consumer Sector',
            image: '/images/SriramChundi.jpeg',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '7',
            name: 'Kaira Sheth',
            role: 'Head of Energy Sector',
            image: '/images/KairaSheth.jpeg',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '8',
            name: 'Zephyr Zoidis',
            role: 'Head of Healthcare Sector',
            image: '/images/Zephyr.jpeg',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '9',
            name: 'Kshittij Mallpani',
            role: 'Associate, Consumer Sector',
            image: '/images/Kshitty.jpeg',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '10',
            name: 'Liza Jacob',
            role: 'Chief of Marketing',
            image: '/images/LizaJacob.jpeg',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '11',
            name: 'Lola Cantillon',
            role: 'Associate, Consumer Sector',
            image: '/images/Lola.jpeg',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '12',
            name: 'Jeffery Su',
            role: 'Associate, Energy Sector',
            image: '/images/JeffreySu.jpeg',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '13',
            name: 'Eishan Naik',
            role: 'Associate, Energy Sector',
            image: '/images/EishanNaik.jpeg',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '14',
            name: 'Sima El Barbir',
            role: 'Associate, Energy Sector',
            image: '/images/SimaElBarbir.jpeg',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '15',
            name: 'Andrew Ondara',
            role: 'Associate, Enterprise Sector',
            image: '/images/AndrewOndara.jpeg',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '16',
            name: 'Meghan Lim',
            role: 'Associate, Enterprise Sector',
            image: '/images/MeghanLim.jpeg',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '17',
            name: 'Joyce Wang',
            role: 'Associate, Healthcare Sector',
            image: '/images/JoyceWang.jpeg',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '18',
            name: 'Kevin Sun',
            role: 'Associate, Healthcare Sector',
            image: '/images/KevinSun.jpg',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '19',
            name: 'Addy Nguyen',
            role: 'Associate, Consumer Sector',
            image: '/images/AddyNguyen.jpg',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '20',
            name: 'Santosh Areti',
            role: 'Associate, Enterprise Sector',
            image: '/images/SantoshAreti.jpg',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '21',
            name: 'Gabriel Berdach',
            role: 'Associate, Energy Sector',
            image: '/images/GabeBerdach.jpg',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '22',
            name: 'Vismay Ravikumar',
            role: 'Associate, Healthcare Sector',
            image: '/images/VismayRavikumar.jpg',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '23',
            name: 'Gaveesh Kapoor',
            role: 'Associate, Consumer Sector',
            image: '/images/GaveeshKapoor.jpg',
            linkedin: 'https://linkedin.com'
          },
          {
            id: '24',
            name: 'Zain Rahman',
            role: 'Associate, Enterprise Sector',
            image: '/images/ZainRahman.jpg',
            linkedin: 'https://linkedin.com'
          }
        ]
      })
    }, 500)
  })
}