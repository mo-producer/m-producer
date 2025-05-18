"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, Send } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export default function OrderPage() {
  const searchParams = useSearchParams()
  const projectId = searchParams.get("project")
  const isPremium = searchParams.get("premium") === "true"
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    brandName: "",
    deliveryTime: "",
    budget: "",
    website: "",
    email: "",
    phone: "",
    details: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real implementation, you would send this data to your backend
      // which would then email it to m.produced6@gmail.com
      console.log("Form submitted:", {
        projectId,
        isPremium,
        ...formData,
      })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Request Submitted!",
        description: "Thank you for your order request. We'll get back to you soon.",
      })

      // Reset form
      setFormData({
        brandName: "",
        deliveryTime: "",
        budget: "",
        website: "",
        email: "",
        phone: "",
        details: "",
      })
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <div className="container max-w-3xl mx-auto px-4 py-12">
        <Link href="/#portfolio" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Link>

        <div className="bg-zinc-800 rounded-lg p-6 md:p-8 shadow-lg">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            {isPremium ? "Premium Order Request" : "Order Request"}
          </h1>
          <p className="text-zinc-400 mb-6">
            {isPremium
              ? "Fill out the form below to request a premium project."
              : "Fill out the form below to request this project."}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="brandName">Brand Name</Label>
              <Input
                id="brandName"
                name="brandName"
                value={formData.brandName}
                onChange={handleChange}
                placeholder="Your brand or company name"
                className="bg-zinc-700 border-zinc-600 focus:border-emerald-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="deliveryTime">Delivery Time Preference</Label>
              <Select
                onValueChange={(value) => handleSelectChange("deliveryTime", value)}
                value={formData.deliveryTime}
              >
                <SelectTrigger className="bg-zinc-700 border-zinc-600 focus:border-emerald-500">
                  <SelectValue placeholder="Select delivery time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7">7 days</SelectItem>
                  <SelectItem value="10">10 days</SelectItem>
                  <SelectItem value="14">14 days</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget">Budget</Label>
              <Input
                id="budget"
                name="budget"
                type="number"
                value={formData.budget}
                onChange={handleChange}
                placeholder="Your budget in USD"
                className="bg-zinc-700 border-zinc-600 focus:border-emerald-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Company Website URL (optional)</Label>
              <Input
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://yourcompany.com"
                className="bg-zinc-700 border-zinc-600 focus:border-emerald-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="bg-zinc-700 border-zinc-600 focus:border-emerald-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="bg-zinc-700 border-zinc-600 focus:border-emerald-500"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="details">Additional Notes</Label>
              <Textarea
                id="details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Provide any additional information about your project..."
                className="bg-zinc-700 border-zinc-600 focus:border-emerald-500 min-h-[120px]"
              />
            </div>

            <Button
              type="submit"
              className={`w-full ${
                isPremium
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                  : "bg-emerald-600 hover:bg-emerald-700"
              } text-white`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>Processing...</>
              ) : (
                <>
                  Submit Request
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
