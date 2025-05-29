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
import { MapPin, Phone, Mail, Clock } from "lucide-react";
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
                        123 Excellence Drive<br />
                        University City, State 12345<br />
                        United States
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
                        Main: (555) 123-4567<br />
                        Admissions: (555) 123-4568<br />
                        Emergency: (555) 123-4569
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
                        info@excellenceuniversity.edu<br />
                        admissions@excellenceuniversity.edu<br />
                        support@excellenceuniversity.edu
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
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Department Contacts */}
              <Card>
                <CardHeader>
                  <CardTitle>Department Contacts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Academic Departments</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>Engineering: ext. 101</li>
                          <li>Business: ext. 102</li>
                          <li>Sciences: ext. 103</li>
                          <li>Arts: ext. 104</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Student Services</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>Registrar: ext. 201</li>
                          <li>Financial Aid: ext. 202</li>
                          <li>Student Life: ext. 203</li>
                          <li>Career Services: ext. 204</li>
                        </ul>
                      </div>
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
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Interactive Map</h3>
                  <p className="text-sm">
                    Campus map and directions would be integrated here.<br />
                    Visit our campus at 123 Excellence Drive, University City.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Directions */}
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">By Car</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Take Highway 101 to Exit 15, then follow University Drive for 2 miles. 
                  Visitor parking available in Lots A and B.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">By Public Transit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Metro Bus Routes 42 and 56 stop directly at the main campus entrance. 
                  The University Metro Station is a 10-minute walk.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">By Air</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  City International Airport is 30 minutes away. 
                  Airport shuttle service available. Taxi and ride-share services also available.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
