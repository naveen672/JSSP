import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Calculator, 
  Download,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  DollarSign,
  Calendar,
  Phone,
  Building
} from "lucide-react";
import auditReportPdf from "@assets/Management-Ac-22-23.pdf";

export default function AuditReport2022_23() {
  const keyHighlights = [
    {
      title: "Financial Position",
      description: "Overall financial health and stability assessment",
      icon: <DollarSign className="h-6 w-6 text-green-600" />
    },
    {
      title: "Compliance Status",
      description: "Adherence to regulatory and statutory requirements",
      icon: <CheckCircle className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Performance Analysis",
      description: "Operational efficiency and performance metrics",
      icon: <TrendingUp className="h-6 w-6 text-purple-600" />
    },
    {
      title: "Risk Assessment",
      description: "Identification and mitigation of financial risks",
      icon: <AlertTriangle className="h-6 w-6 text-orange-600" />
    }
  ];

  const auditAreas = [
    "Financial Statements Review",
    "Internal Control Systems",
    "Revenue and Expenditure Analysis",
    "Asset Management Evaluation",
    "Compliance with Accounting Standards",
    "Risk Management Assessment",
    "Governance Structure Review",
    "Regulatory Compliance Check"
  ];

  const financialMetrics = [
    { metric: "Total Income", status: "Satisfactory", color: "bg-green-100 text-green-800" },
    { metric: "Expenditure Management", status: "Good", color: "bg-blue-100 text-blue-800" },
    { metric: "Asset Utilization", status: "Excellent", color: "bg-green-100 text-green-800" },
    { metric: "Liquidity Position", status: "Strong", color: "bg-green-100 text-green-800" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Calculator className="h-16 w-16 mr-4" />
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-2">Management Audit Report 2022-23</h1>
              <p className="text-xl text-blue-100">JSS Mahavidyapeetha</p>
            </div>
          </div>
        </div>
      </section>

      {/* Report Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <FileText className="h-6 w-6 mr-2 text-primary" />
                Audit Report Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Management Audit Report for the financial year 2022-23 provides a comprehensive 
                    review of JSS Mahavidyapeetha's financial position, operational efficiency, and 
                    compliance with regulatory requirements. This report reflects our commitment to 
                    transparency and good governance practices.
                  </p>
                  <div className="flex items-center justify-center md:justify-start">
                    <a 
                      href={auditReportPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Full Report
                    </a>
                  </div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-blue-900">Report Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Audit Period:</span>
                      <span className="font-medium">April 2022 - March 2023</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Report Type:</span>
                      <span className="font-medium">Management Audit</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Audit Status:</span>
                      <span className="font-medium text-green-600">Completed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Overall Rating:</span>
                      <span className="font-medium text-green-600">Satisfactory</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Audit Highlights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key areas covered in the comprehensive management audit
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {keyHighlights.map((highlight, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{highlight.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
                      <p className="text-gray-600">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Financial Assessment</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key financial metrics and their assessment status
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {financialMetrics.map((metric, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">{metric.metric}</h3>
                  <Badge className={metric.color}>{metric.status}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Areas Audited</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive coverage of all critical business areas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {auditAreas.map((area, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{area}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Recommendations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Strategic recommendations for continuous improvement
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Process Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Streamline operational processes to enhance efficiency and reduce redundancies 
                  in administrative functions.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Technology Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Implement advanced digital solutions for better financial management 
                  and reporting systems.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Risk Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Strengthen risk assessment frameworks and develop comprehensive 
                  mitigation strategies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Contact for Audit Information</h2>
            <div className="max-w-2xl mx-auto">
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Building className="h-4 w-4 mr-2" />
                        JSS Mahavidyapeetha
                      </h3>
                      <p>Audit & Finance Department</p>
                      <p className="text-blue-100">Mysore-570 004</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        Contact Details
                      </h3>
                      <p>Phone: +91-821-2548318</p>
                      <p className="text-blue-100">Email: audit@jssmvp.edu.in</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-center text-sm text-blue-100">
                      For audit report queries and financial information, contact the Audit Department
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