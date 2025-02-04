import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { getPartners } from '@/api/partners'
import { submitContactForm } from '@/api/contact'
import { Partner, FormData } from '@/types'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/useToast'
import {
  Rocket,
  Users,
  TrendingUp,
  Lightbulb,
} from 'lucide-react'
import { ParticlesBackground } from '@/components/ParticlesBackground'

export default function Home() {
  const [partners, setPartners] = useState<Partner[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  useEffect(() => {
    const loadPartners = async () => {
      const { partners } = await getPartners()
      setPartners(partners)
    }
    loadPartners()
  }, [])

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true)
      const response = await submitContactForm(data)
      toast({
        title: "Success!",
        description: response.message,
      })
      reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const features = [
    {
      icon: <Rocket className="h-6 w-6 text-white" />,
      title: "Create lasting opportunities",
      description: "Build long term value.",
      gradient: "from-blue-600 to-purple-700"
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "One-of-a-kind Experience",
      description: "Provide unique learning and career opportunities for Rice Students.",
      gradient: "from-blue-600 to-purple-700"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      title: "Perpetual Growth",
      description: "Expand the Rice Entrepreneurship and Venture Ecosystem",
      gradient: "from-blue-600 to-purple-700"
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-white" />,
      title: "Empowered Innovation",
      description: "Support creative problem-solving and transformative ideas, fostering a culture of innovation.",
      gradient: "from-blue-600 to-purple-700"
    },
  ]

  return (
    <div className="space-y-16">
      <section className="relative h-[600px] rounded-3xl overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700" />
        <ParticlesBackground />
        <div className="absolute inset-0 bg-black/20" />
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-8 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-center">
            investing in<br />the future, at Rice.
          </h1>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </section>

      <section className="text-center space-y-6">
        <motion.h2
          className="text-4xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Rice Student Venture Fund
        </motion.h2>
        <motion.p
          className="text-xl text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Empowering the next generation of entrepreneurs
        </motion.p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="relative h-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="absolute inset-0">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient}`} />
                <ParticlesBackground />
              </div>
              <CardContent className="relative pt-6 text-center space-y-4 z-10">
                <div className="mx-auto w-fit rounded-full bg-white/10 p-3 backdrop-blur-sm">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg text-white">{feature.title}</h3>
                <p className="text-sm text-white/80">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-center">Our Partners</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-8">
            {partners.map((partner) => (
              <motion.a
                key={partner.id}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-8 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-20 w-auto object-contain"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <motion.div
          className="space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold">Work with Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
          Are you a passionate founder looking to turn your vision into reality? Rice Student Venture Fund is here to empower innovation and fuel the next generation of startups. We manage a $1.9M fund annually, researching over 8,000 startups, and hosting an exciting reverse demo day each year to showcase groundbreaking ideas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto w-full"
        >
          <Card className="bg-white">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input
                    {...register("name", { required: true })}
                    className="h-12 text-lg"
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">Name is required</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                    })}
                    className="h-12 text-lg"
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">Valid email is required</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Company</label>
                  <Input
                    {...register("company", { required: true })}
                    className="h-12 text-lg"
                  />
                  {errors.company && (
                    <p className="text-sm text-destructive">Company is required</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    {...register("message", { required: true })}
                    className="min-h-[150px] text-lg p-4"
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">Message is required</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 text-lg font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  )
}