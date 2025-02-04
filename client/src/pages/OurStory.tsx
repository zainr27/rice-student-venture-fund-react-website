import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

export default function OurStory() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.h1
        className="text-3xl font-bold text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Story
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
        >
          <img
            src="/images/1737664119697.jpg"
            alt="Rice Student Venture Fund Story"
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </motion.div>

        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            delay: 0.2
          }}
        >
          <img
            src="/images/3V2A0292-Enhanced-NR (2).avif"
            alt="Rice Student Venture Fund Team"
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="prose prose-sm max-w-none">
          <CardContent className="pt-6 space-y-4">
            <p>
              Half a century ago, dreams transcended ceilings and created blueprints for reality, pushing past the gates of possibility and into a future overflowing with boundless imagination. Spaceships journeyed across the cosmos, and mankind took a giant leap onto the moon. Infinite libraries of knowledge sat in tiny boxes on our laps. Stories flickered to life on screens. Airplanes claimed the sky. Visionaries knew paradise, and innovation knew no limits.
            </p>
            <p>
              However, in recent decades, there's been a shift: the ability to move the needle forward and breathe life into ideas has been forgotten. Instead of authentic, value-adding inventions, we've pivoted towards merely expanding and reconfiguring what already exists.
            </p>
            <p>
              In the summer of 2023, the idea of the Rice Student Venture Fund was born from a peculiar combination of two passionate college students and a podcast, "The Data Room", hosted by Jacob. The guest on the show, Pranai, passionately discussed venture capital with Jacob, and the synergy of the two led to the idea of the student venture fund.
            </p>
            <p>
              At RSVF, we don't aspire for perfection, we demand it. By making excellence a habit, the Rice Student Venture Fund will become impossible to ignore, which is how we will become entrenched in the Houston startup ecosystem.
            </p>
            <p className="font-semibold">
              Definitely Optimistic,
              <br />
              Rice Student Venture Fund
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}