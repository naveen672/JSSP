import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, AlertTriangle, CheckCircle, FileText, Clock, Phone } from "lucide-react";
import qrCodeImage from "@assets/image_1748553074882.png";

export default function FeePayment() {
  const instructions = [
    "Check whether transaction is a success/failure.",
    "Once the payment is successful, you will get a payment confirmation receipt and the payer has to keep the same for reference.",
    "In case the payment is not successful due to any reason will be displayed the status as a failure in payment.",
    "In case of slow internet or server errors then start the process from the beginning.",
    "If the amount is debited from the account for a failed transaction, kindly make a note of transaction for further enquiry.",
    "Payment cancellation – Once the payment is made, no cancellation option will be available to the end-user.",
    "In case of duplicate payment kindly contact the Finance department with necessary documents.",
    "Refund process: Depending upon bank policies it will be processed within 10-15 working days."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <CreditCard className="h-12 w-12 text-yellow-400" />
              <Badge variant="secondary" className="bg-yellow-400 text-green-900 font-semibold text-lg px-4 py-2">
                Secure Payment
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Fee Payment
            </h1>
            <p className="text-xl text-green-100 mb-6 max-w-4xl mx-auto">
              Online Payment Portal for Newly admitted/Existing Students - Please follow the Instructions Carefully
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Payment Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800 text-xl">
                <FileText className="h-7 w-7" />
                Examination Fee Payment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                For examination fee payments, use the official Karnataka Government portal for challan generation.
              </p>
              <a 
                href="https://karnataka.gov.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 w-fit"
              >
                <FileText className="h-5 w-5" />
                Challan Generation Portal
              </a>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800 text-xl">
                <CreditCard className="h-7 w-7" />
                College Fee Payment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                For college fee payments, please scan the QR code below using your preferred payment app.
              </p>
              <div className="flex justify-center">
                <img 
                  src={qrCodeImage} 
                  alt="QR Code for JSS Polytechnic College Fee Payment - Union Bank TID No. 66394301"
                  className="w-80 max-w-full rounded-lg shadow-lg border border-gray-200"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>JSS POLYTECHNIC COLLEGE</strong>
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  TID No. 66394301
                </p>
                <p className="text-sm text-gray-600">
                  VPA: 66394301@ubin
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Instructions */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-800 text-2xl">
              <AlertTriangle className="h-8 w-8" />
              Important Instructions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {instructions.map((instruction, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{instruction}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Payment Process Steps */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800 text-2xl">
              <CheckCircle className="h-8 w-8" />
              Payment Process
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-semibold text-blue-800 text-lg mb-2">Choose Payment Method</h3>
                <p className="text-gray-700 text-sm">Select between Examination Fee or College Fee payment option</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-semibold text-green-800 text-lg mb-2">Make Payment</h3>
                <p className="text-gray-700 text-sm">Use portal link or scan QR code to complete payment</p>
              </div>
              
              <div className="text-center p-6 bg-yellow-50 rounded-lg">
                <div className="w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-semibold text-yellow-800 text-lg mb-2">Verify Transaction</h3>
                <p className="text-gray-700 text-sm">Check transaction status and save confirmation receipt</p>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-semibold text-purple-800 text-lg mb-2">Keep Records</h3>
                <p className="text-gray-700 text-sm">Maintain payment receipt for future reference</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-indigo-800 text-2xl">
              <Phone className="h-8 w-8" />
              Support & Contact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-indigo-600 mb-4 text-lg">For Payment Issues</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Phone className="h-5 w-5 text-indigo-600 mt-1" />
                    <span>Contact Finance Department for duplicate payments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-indigo-600 mt-1" />
                    <span>Refund processing: 10-15 working days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="h-5 w-5 text-indigo-600 mt-1" />
                    <span>Keep transaction ID for failed payment enquiries</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-green-600 mb-4 text-lg">Payment Partners</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span>Union Bank of India - VYOM Payment Gateway</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span>BHARATOR QR - Digital Payment Solution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span>BHIM UPI - Government of India Initiative</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="text-center p-6 bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CreditCard className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">24/7</h3>
            <p>Online Payment Portal</p>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CheckCircle className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">100%</h3>
            <p>Secure Transactions</p>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-yellow-500 to-yellow-600 text-white">
            <Clock className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Instant</h3>
            <p>Payment Confirmation</p>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <Phone className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">24/7</h3>
            <p>Support Available</p>
          </Card>
        </div>
      </div>
    </div>
  );
}