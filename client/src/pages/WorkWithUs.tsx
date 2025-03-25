import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { submitContactForm } from '@/api/contact'
import { FormData } from '@/types'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/useToast'

export default function WorkWithUs() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true)
      await submitContactForm(data)
      toast({
        title: "Success!",
        description: "Your application has been submitted.",
      })
      reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <motion.div
        className="space-y-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold">Work with Us</h1>
        <p className="text-muted-foreground">
          Are you a passionate founder looking to turn your vision into reality? Rice Student Venture Fund is here to empower innovation and fuel the next generation of startups. We manage a $1.9M fund annually, researching over 8,000 startups, and hosting an exciting reverse demo day each year to showcase groundbreaking ideas.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg"
      >
        <Card className="border-0">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input {...register("name", { required: true })} />
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
                />
                {errors.email && (
                  <p className="text-sm text-destructive">Valid email is required</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Company</label>
                <Input {...register("company", { required: true })} />
                {errors.company && (
                  <p className="text-sm text-destructive">Company is required</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea {...register("message", { required: true })} />
                {errors.message && (
                  <p className="text-sm text-destructive">Message is required</p>
                )}
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}