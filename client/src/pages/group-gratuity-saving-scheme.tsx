import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Users, 
  FileText, 
  Download,
  CreditCard,
  AlertCircle,
  CheckCircle,
  Calendar,
  Calculator,
  Phone,
  Building
} from "lucide-react";
import schemePdf from "@assets/New-Doc-2024-04-12-16.34.50.pdf";

export default function GroupGratuitySavingScheme() {
  const benefits = [
    {
      title: "Guaranteed Returns",
      description: "Assured returns on contributions with compound interest benefits",
      icon: <CreditCard className="h-6 w-6 text-green-600" />
    },
    {
      title: "Tax Benefits",
      description: "Tax deductions under applicable sections of Income Tax Act",
      icon: <Calculator className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Group Coverage",
      description: "Collective scheme benefits with reduced administrative costs",
      icon: <Users className="h-6 w-6 text-purple-600" />
    },
    {
      title: "Flexible Contributions",
      description: "Multiple contribution options to suit individual financial goals",
      icon: <Award className="h-6 w-6 text-orange-600" />
    }
  ];

  const keyFeatures = [
    "Available for all permanent JSS employees",
    "Flexible contribution amounts",
    "Guaranteed minimum returns",
    "Tax benefits under applicable sections",
    "Professional fund management",
    "Regular performance reviews",
    "Easy withdrawal procedures",
    "Transparent fee structure"
  ];

  const eligibility = [
    {
      category: "Teaching Staff",
      description: "All permanent teaching faculty members of JSS institutions",
      color: "bg-blue-100 text-blue-800"
    },
    {
      category: "Non-Teaching Staff", 
      description: "Permanent administrative and support staff members",
      color: "bg-green-100 text-green-800"
    },
    {
      category: "Management Staff",
      description: "Senior management and executive level employees",
      color: "bg-purple-100 text-purple-800"
    }
  ];

  const contributionOptions = [
    { amount: "Rs. 1,000", frequency: "Monthly", annual: "Rs. 12,000" },
    { amount: "Rs. 2,500", frequency: "Monthly", annual: "Rs. 30,000" },
    { amount: "Rs. 5,000", frequency: "Monthly", annual: "Rs. 60,000" },
    { amount: "Rs. 10,000", frequency: "Quarterly", annual: "Rs. 40,000" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Award className="h-16 w-16 mr-4" />
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-2">Group Gratuity Saving Scheme</h1>
              <p className="text-xl text-blue-100">Secure Your Financial Future</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scheme Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <FileText className="h-6 w-6 mr-2 text-primary" />
                Scheme Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Group Gratuity Saving Scheme is a comprehensive retirement benefit plan 
                    designed for JSS Mahavidyapeetha employees. This scheme provides a structured 
                    approach to building retirement corpus with guaranteed returns and tax benefits, 
                    ensuring financial security for employees and their families.
                  </p>
                  <div className="flex items-center justify-center md:justify-start">
                    <a 
                      href={schemePdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Scheme Details
                    </a>
                  </div>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-orange-900">Scheme Highlights</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Scheme Type:</span>
                      <span className="font-medium">Group Gratuity</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Return Type:</span>
                      <span className="font-medium">Guaranteed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax Benefits:</span>
                      <span className="font-medium text-green-600">Available</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Maturity:</span>
                      <span className="font-medium text-green-600">On Retirement</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Eligibility Criteria</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Who can participate in the Group Gratuity Saving Scheme
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {eligibility.map((item, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{item.category}</CardTitle>
                    <Badge className={item.color}>Eligible</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contribution Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contribution Options</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Flexible contribution plans to suit your financial goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {contributionOptions.map((option, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{option.amount}</h3>
                  <p className="text-gray-600 mb-2">{option.frequency}</p>
                  <Badge variant="secondary">{option.annual} annually</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Scheme Benefits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive benefits designed for long-term financial security
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
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Important features of the Group Gratuity Saving Scheme
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

      {/* How to Enroll */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Enroll</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple steps to join the Group Gratuity Saving Scheme
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="font-semibold mb-2">Application</h3>
                <p className="text-sm text-gray-600">Submit enrollment application with required documents</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="font-semibold mb-2">Verification</h3>
                <p className="text-sm text-gray-600">Document verification and eligibility confirmation</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="font-semibold mb-2">Contribution</h3>
                <p className="text-sm text-gray-600">Choose contribution plan and setup deductions</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <h3 className="font-semibold mb-2">Confirmation</h3>
                <p className="text-sm text-gray-600">Receive scheme enrollment confirmation and policy details</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Contact for Scheme Information</h2>
            <div className="max-w-2xl mx-auto">
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Building className="h-4 w-4 mr-2" />
                        JSS Mahavidyapeetha
                      </h3>
                      <p>Finance Department</p>
                      <p className="text-blue-100">Mysore-570 004</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        Contact Details
                      </h3>
                      <p>Phone: +91-821-2548318</p>
                      <p className="text-blue-100">Email: finance@jssmvp.edu.in</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-center text-sm text-blue-100">
                      For scheme enrollment and queries, contact the Finance Department
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