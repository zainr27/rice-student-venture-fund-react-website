import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

export default function OurStory() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.h1
        className="text-3xl font-bold text-center font-['Libre_Baskerville']"
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
            <p className="font-['Libre_Baskerville']">
            Half a century ago, dreams transcended ceilings and created blueprints for reality, pushing past the gates of possibility and into a future overflowing with boundless imagination. Spaceships journeyed across the cosmos, and mankind took a giant leap onto the moon. Infinite libraries of knowledge sat in tiny boxes on our laps. Stories flickered to life on screens. Airplanes claimed the sky. Visionaries knew paradise, and innovation knew no limits. In this golden age, marked by an unshakeable conviction in a brighter future, humanity pursued every challenge and challenged every obstacle. Individuals were definitely optimistic and armed with an understanding on how to precisely achieve their goals.
            </p>
            <p className="font-['Libre_Baskerville']">
            However, in recent decades, theres been a shift: the ability to move the needle forward and breathe life into ideas has been forgotten. Instead of authentic, value-adding inventions, we've pivoted towards merely expanding and reconfiguring what already exists. Familiarity dominates as the expansion of the known overpowers the exploration of the unknown, and while the future still holds bright promises, it appears humanity has lost sight of the path to reach it. For today's students, the challenge of introducing original ideas and venturing into new horizons is greater than ever—and yet, this has not discouraged Jacob Straube and Pranai Reddy, the founding partners of the Rice Student Venture Fund (RSVF).
            </p>
            <p className="font-['Libre_Baskerville']">
            In the summer of 2023, the idea of the Rice Student Venture Fund was born from a peculiar combination of two passionate college students and a podcast, "The Data Room", hosted by Jacob. The guest on the show, Pranai, passionately discussed venture capital with Jacob, and the synergy of the two led to the idea of the student venture fund, aimed at giving students education in the VC space and Rice founders the opportunity to start their own businesses. Jacob and Pranai got to work right away by pitching their idea to connections in the Houston ecosystem. They met with several founders and learned how to start and manage a fund. They were scrappy and they approached Rice Student Venture Fund like a startup by being resourceful, resilient, and adaptable. The undergraduate business culture at Rice drives students to consulting or investment banking and can hinder a student's entrepreneurial zeal. Rice Student Venture Fund strives to be a hub for innovation and empowers students to take risks that chart an unconventional path.
            </p>
            <p className="font-['Libre_Baskerville']">
            At RSVF, we don't aspire for perfection, we demand it. By making excellence a habit, the Rice Student Venture Fund will become impossible to ignore, which is how we will become entrenched in the Houston startup ecosystem. We will be the first money into startups and we will perform meticulous due diligence that is vetted by the fund, our Rice network, and its board of advisors. Furthermore, our team is sixteen strong, and each person is currently engaged in building meaningful relationships across the Houston venture landscape. In order to follow this exacting playbook, Pranai and Jacob only recruited individuals who were unified in their commitment to making sure nothing slips through the cracks so that RSVF can build its most valuable asset: trust. We aspire to set a standard where RSVF backing a startup is a ringing endorsement that automatically draws the attention of other investors. By being fully dedicated to our portfolio companies and leaving behind a track record of excellence, RSVF will become a household name with investors, VCs, and startups alike.
            </p>
            <p className="font-['Libre_Baskerville']">
            We see the future and we know how we're going to get there, so the purpose of this letter isn't to tell you that we're coming. We're already here, we're hungry, and we are going to claw our way to the peak of venture capital. We hope to see you at the summit.  
            </p>
            <p className="font-semibold font-['Libre_Baskerville']">
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