import { z } from "zod"

export const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
export type NewsletterData = z.infer<typeof newsletterSchema>
