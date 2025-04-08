import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Get in touch with our team to discuss your export needs or request a quote for our premium fruits and
            vegetables.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <Phone className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Phone</h3>
              <p className="text-gray-600 mb-2">+94 11 234 5678</p>
              <p className="text-gray-600">+94 77 123 4567 (Mobile)</p>
            </div>

            {/* Contact Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <Mail className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Email</h3>
              <p className="text-gray-600 mb-2">info@gtm-srilanka.com</p>
              <p className="text-gray-600">sales@gtm-srilanka.com</p>
            </div>

            {/* Contact Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Address</h3>
              <p className="text-gray-600 mb-2">123 Export Zone,</p>
              <p className="text-gray-600">Colombo, Sri Lanka</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Contact Form */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message here..." className="min-h-[150px]" />
                  </div>
                  <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white w-full">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>

              {/* Business Hours & Map */}
              <div className="bg-gray-50 p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Business Hours</h2>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Monday - Friday</p>
                      <p className="text-gray-600">8:30 AM - 5:30 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Saturday</p>
                      <p className="text-gray-600">9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Sunday</p>
                      <p className="text-gray-600">Closed</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Location</h2>
                <div className="bg-gray-200 h-[250px] rounded-lg flex items-center justify-center">
                  {/* This would be replaced with an actual map component */}
                  <p className="text-gray-600">Interactive Map Would Be Here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-2">What countries do you export to?</h3>
              <p className="text-gray-600">
                We currently export to over 15 countries worldwide, with a special focus on Middle Eastern markets
                including UAE, Saudi Arabia, Qatar, and Oman. We're continuously expanding our reach to new markets.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-2">What is the minimum order quantity?</h3>
              <p className="text-gray-600">
                Our minimum order quantities vary by product. Please contact our sales team for specific information
                about the products you're interested in.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                How do you ensure product quality during shipping?
              </h3>
              <p className="text-gray-600">
                We use state-of-the-art cold chain management systems and specialized packaging to maintain the
                freshness and quality of our products throughout the shipping process.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Can you provide custom packaging with our branding?
              </h3>
              <p className="text-gray-600">
                Yes, we offer custom packaging solutions that can incorporate your brand identity. Our team will work
                with you to create packaging that meets your specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

