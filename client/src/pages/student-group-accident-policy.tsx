import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Users, 
  FileText, 
  Download,
  Heart,
  AlertCircle,
  CheckCircle,
  Calendar,
  CreditCard,
  Phone
} from "lucide-react";
import policyPdf from "@assets/Students-Group-Accident-Policy-2023-24-002-1.pdf";

export default function StudentGroupAccidentPolicy() {
  const categories = [
    {
      category: "A",
      premium: "Rs. 1,500/-",
      institutions: "Medical College, Dental College & Pharmacy College",
      accidentalDeathParent: "Rs. 15,00,000",
      color: "bg-red-100 text-red-800"
    },
    {
      category: "B", 
      premium: "Rs. 1,000/-",
      institutions: "Para Medical, Physiotherapy College, Nursing College, Law College, Ayurveda Medical College, Speech & Hearing Colleges and Engineering Colleges, CMS",
      accidentalDeathParent: "Rs. 10,00,000",
      color: "bg-blue-100 text-blue-800"
    },
    {
      category: "C",
      premium: "Rs. 500/-",
      institutions: "Nursing Schools, Degree Colleges, Polytechnics, ITI's, B.Ed Colleges, Lab Technician Courses, INYS, PU Colleges and D.Ed Colleges",
      accidentalDeathParent: "Rs. 5,00,000",
      color: "bg-green-100 text-green-800"
    }
  ];

  const benefits = [
    {
      title: "Student Accidental Death & Dismemberment",
      amount: "Rs. 5,00,000",
      description: "In case a student meets with an accidental death or an accident which requires medical attention, or results in severance of a body part",
      icon: <Users className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Staff Accidental Death & Dismemberment", 
      amount: "Rs. 5,00,000",
      description: "In case a staff meets with an accidental death or an accident which requires medical attention, or results in severance of a body part",
      icon: <Shield className="h-6 w-6 text-green-600" />
    },
    {
      title: "Medical Expenses Reimbursement",
      amount: "Up to Rs. 1,00,000",
      description: "Amount per accident per student and per accident per staff with a 10% deductible. No limit on the number of accidents covered in a year",
      icon: <Heart className="h-6 w-6 text-red-600" />
    },
    {
      title: "Weekly Benefit for Staff",
      amount: "Rs. 10,000 per week",
      description: "If a staff is met with an accident and unable to attend duties due to temporary total disability, for a period of 52 weeks",
      icon: <Calendar className="h-6 w-6 text-purple-600" />
    }
  ];

  const keyFeatures = [
    "This is an unnamed policy - Company does not require name of each student and staff member",
    "Premium collected only from students during admission time along with fees", 
    "Staff members (both teaching & non-teaching) are covered free of cost",
    "Age covered is up to 65 years",
    "Policy period: Academic year 2023-24 (26-06-2023 to 25-06-2024)",
    "No limit on number of accidents covered in a year"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-16 w-16 mr-4" />
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-2">Student Group Accident Policy</h1>
              <p className="text-xl text-blue-100">Comprehensive Coverage for Students & Staff</p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <FileText className="h-6 w-6 mr-2 text-primary" />
                Policy Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    JSS Mahavidyapeetha has renewed the existing Students Group Accident Policy for 
                    the academic year 2023-24. This comprehensive policy provides accident coverage 
                    for both students and staff members across all JSS institutions.
                  </p>
                  <div className="flex items-center justify-center md:justify-start">
                    <a 
                      href={policyPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Policy Document
                    </a>
                  </div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-blue-900">Policy Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Policy Period:</span>
                      <span className="font-medium">26-06-2023 to 25-06-2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Coverage Age:</span>
                      <span className="font-medium">Up to 65 years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Staff Coverage:</span>
                      <span className="font-medium text-green-600">Free of Cost</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Category Structure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Policy Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Three categories of grouping based on institution types with different premium structures
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((cat, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Category {cat.category}</CardTitle>
                    <Badge className={cat.color}>{cat.premium} per annum</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Institutions Covered:</h4>
                      <p className="text-sm text-gray-600">{cat.institutions}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <h4 className="font-semibold text-sm mb-1">Accidental Death Parent Benefit:</h4>
                      <p className="text-lg font-bold text-primary">{cat.accidentalDeathParent}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Coverage */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits Offered</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive coverage for various accident-related scenarios
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{benefit.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-2xl font-bold text-primary mb-3">{benefit.amount}</p>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Important aspects of the Student Group Accident Policy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {keyFeatures.map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{feature}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Contact for Policy Information</h2>
            <div className="max-w-2xl mx-auto">
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        <FileText className="h-4 w-4 mr-2" />
                        JSS Mahavidyapeetha
                      </h3>
                      <p>Jagadguru Dr. Sri Shivarathri Rajendra Circle</p>
                      <p className="text-blue-100">Mysore-570 004</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        Contact Details
                      </h3>
                      <p>Phone: 0821-2548207, 2548212, 2548213</p>
                      <p className="text-blue-100">Fax: 0821-2548218</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-center text-sm text-blue-100">
                      For policy renewals and queries, contact the Director Finance Office
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}