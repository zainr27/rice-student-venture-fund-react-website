import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { getTeamMembers } from '@/api/team'
import { TeamMember } from '@/types'
import { Card, CardContent } from '@/components/ui/card'
import { Linkedin } from 'lucide-react'

export default function MeetTheTeam() {
  const [members, setMembers] = useState<TeamMember[]>([])

  useEffect(() => {
    const loadMembers = async () => {
      const { members } = await getTeamMembers()
      setMembers(members)
    }
    loadMembers()
  }, [])

  return (
    <div className="space-y-8">
      <motion.div
        className="space-y-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold">Meet the Team</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our diverse team of passionate individuals working together to empower innovation and drive success.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="relative mx-auto w-32 h-32">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full bg-muted object-cover w-full h-full"
                  />
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-0 right-0 p-2 bg-primary rounded-full hover:bg-primary/90 transition-colors duration-200"
                  >
                    <Linkedin className="h-4 w-4 text-primary-foreground" />
                  </a>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}