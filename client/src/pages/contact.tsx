import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSubmissionSchema } from "@shared/schema";
import { MapPin, Phone, Mail, Clock, Smartphone, Facebook, Linkedin, Youtube } from "lucide-react";
import qrCodeImage from "@assets/image_1748554546191.png";
import socialQRCodes from "@assets/image_1748554552757.png";
import type { z } from "zod";

type ContactFormData = z.infer<typeof insertContactSubmissionSchema>;

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(insertContactSubmissionSchema),
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your message! We will get back to you soon.",
      });
      reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const subject = watch("subject");

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
            Connect with us for admissions, academic inquiries, or general information. We're here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent text-primary w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Address</h3>
                      <p className="text-gray-600">
                        JSS TI's Campus<br />
                        Mysuru-570006<br />
                        Karnataka
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-accent text-primary w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Phone</h3>
                      <p className="text-gray-600">
                        Office: 0821-2548318
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-accent text-primary w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Smartphone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Mobile</h3>
                      <p className="text-gray-600">
                        +91-9686677237
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-accent text-primary w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Email</h3>
                      <p className="text-gray-600">
                        jssp418@yahoo.co.in
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-accent text-primary w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Office Hours</h3>
                      <p className="text-gray-600">
                        Timings: 08:00 AM to 05:45 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle>Connect With Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <h4 className="font-semibold text-primary mb-6">Follow us on Social Media</h4>
                      <div className="flex justify-center space-x-6">
                        <a 
                          href="https://m.facebook.com/jss.polytechnic/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                          aria-label="Follow us on Facebook"
                        >
                          <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                            <Facebook className="h-6 w-6" />
                          </div>
                          <span className="text-sm font-medium text-blue-700">Facebook</span>
                        </a>

                        <a 
                          href="https://www.instagram.com/jsspolytechnicmysuru?igsh=MTMxaDdnZnB6enUycg==" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex flex-col items-center p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors group"
                          aria-label="Follow us on Instagram"
                        >
                          <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          </div>
                          <span className="text-sm font-medium text-pink-700">Instagram</span>
                        </a>

                        <a 
                          href="https://www.linkedin.com/in/jsspolytechnicmysuru418suru-91197a260/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                          aria-label="Connect with us on LinkedIn"
                        >
                          <div className="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                            <Linkedin className="h-6 w-6" />
                          </div>
                          <span className="text-sm font-medium text-blue-700">LinkedIn</span>
                        </a>

                        <a 
                          href="https://youtube.com/@jsspolytechnicmysore8070?si=43hsOYIH66cuUUNl" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex flex-col items-center p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors group"
                          aria-label="Subscribe to our YouTube channel"
                        >
                          <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                            <Youtube className="h-6 w-6" />
                          </div>
                          <span className="text-sm font-medium text-red-700">YouTube</span>
                        </a>
                      </div>
                      <p className="text-sm text-gray-600 mt-4">
                        Stay connected with our latest updates, events, and academic announcements
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        {...register("firstName")}
                        placeholder="John"
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        {...register("lastName")}
                        placeholder="Doe"
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="john.doe@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Select onValueChange={(value) => setValue("subject", value)} value={subject}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                        <SelectItem value="Admissions">Admissions</SelectItem>
                        <SelectItem value="Academic Programs">Academic Programs</SelectItem>
                        <SelectItem value="Student Services">Student Services</SelectItem>
                        <SelectItem value="Financial Aid">Financial Aid</SelectItem>
                        <SelectItem value="Campus Visit">Campus Visit</SelectItem>
                        <SelectItem value="Technical Support">Technical Support</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      {...register("message")}
                      placeholder="Tell us how we can help you..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Find Us</h2>
          
          <Card>
            <CardContent className="p-6">
              <div className="rounded-lg h-96 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.56865488817!2d76.54652873051756!3d12.29463604498936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf65db6cb23e5d%3A0x93b6e4b4b4b4b4b4!2sJSS%20Polytechnic%2C%20Mysuru!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JSS Polytechnic Location"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <a 
                  href="https://maps.app.goo.gl/vduNn2kPwZhmUcv17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Open in Google Maps
                </a>
              </div>
            </CardContent>
          </Card>


        </div>
      </section>
    </div>
  );
}
