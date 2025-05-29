import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Clock, Users, BookOpen, Award, CheckCircle, Target, Calculator } from "lucide-react";
import examHallImage from "@assets/image_1748553904746.png";

export default function Exam() {
  const evaluationTypes = [
    {
      type: "CIE",
      fullForm: "Continuous Internal Evaluation",
      description: "Written Tests and Skill Tests/MCQ/OBT",
      icon: FileText,
      color: "bg-blue-500"
    },
    {
      type: "SEE",
      fullForm: "Semester End Examination",
      description: "Theory and Practical course examinations",
      icon: BookOpen,
      color: "bg-green-500"
    },
    {
      type: "Portfolio",
      fullForm: "Portfolio Continuous Evaluation",
      description: "Activity-based continuous assessment",
      icon: Target,
      color: "bg-purple-500"
    },
    {
      type: "Project",
      fullForm: "Project/Internship Evaluation",
      description: "Project work and internship assessment",
      icon: Award,
      color: "bg-orange-500"
    }
  ];

  const cieAssessments = [
    {
      assessment: "CIE Assessment 1 (Written Test 1-Theory)",
      timing: "at the end of 3rd week",
      duration: 60,
      maxMarks: 20,
      conversion: "20 (Average of 2 written test)"
    },
    {
      assessment: "CIE Assessment 2 (Written Test 2-Theory)",
      timing: "at the end of 13th week",
      duration: 60,
      maxMarks: 20,
      conversion: ""
    },
    {
      assessment: "CIE Assessment 3 (Skill Test 1)",
      timing: "at the end of 7th week",
      duration: 60,
      maxMarks: "100 (scale down to 20)",
      conversion: "20 (Average of 2 written test)"
    },
    {
      assessment: "CIE Assessment 4 (Skill Test 2)",
      timing: "at the end of 9th week",
      duration: 180,
      maxMarks: "100 (scale down to 20)",
      conversion: ""
    },
    {
      assessment: "CIE Assessment 5 (Skill Test 3)",
      timing: "at the end of 11th week",
      duration: 180,
      maxMarks: "100 (scale down to 20)",
      conversion: ""
    },
    {
      assessment: "CIE Assessment 6 (Student Activity)",
      timing: "at the end of 11th week",
      duration: 180,
      maxMarks: 20,
      conversion: "20"
    }
  ];

  const markingScheme = [
    { component: "CIE Total Marks", marks: 60, percentage: 60 },
    { component: "SEE (Semester End Examination)", marks: 40, percentage: 40 },
    { component: "Total Marks", marks: 100, percentage: 100 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FileText className="h-12 w-12 text-yellow-400" />
              <Badge variant="secondary" className="bg-yellow-400 text-blue-900 font-semibold text-lg px-4 py-2">
                Assessment System
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Examination System
            </h1>
            <p className="text-xl text-blue-100 mb-6 max-w-4xl mx-auto">
              Comprehensive evaluation framework ensuring quality assessment through continuous internal evaluation and semester-end examinations.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Exam Hall Image */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800 text-2xl">
              <Users className="h-8 w-8" />
              Examination Hall
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <img 
                src={examHallImage} 
                alt="Examination Hall - Students appearing for exams"
                className="w-full h-96 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg">
                <p className="text-sm font-medium">Students appearing for examinations in a disciplined environment</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Evaluation Types Overview */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-indigo-800 text-2xl">
              <CheckCircle className="h-8 w-8" />
              Evaluation Framework
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {evaluationTypes.map((evaluation, index) => {
                const IconComponent = evaluation.icon;
                return (
                  <div key={index} className="border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                    <div className={`${evaluation.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{evaluation.type}</h3>
                    <p className="text-sm font-medium text-gray-600 mb-2">{evaluation.fullForm}</p>
                    <p className="text-xs text-gray-500">{evaluation.description}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* CIE Detailed Information */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800 text-2xl">
              <FileText className="h-8 w-8" />
              Continuous Internal Evaluation (CIE)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-700 leading-relaxed">
                Continuous Internal Evaluations are the metric to assess whether all the course outcomes are attained or not. The questions are framed by the respective course coordinator. Continuous Internal Evaluation focuses on attainment of course outcomes and is based on Written Tests/MCQ (Multiple Choice Questions)/OBT (Open Book Test). CIE is carried out throughout the semester as prescribed by the Department of Collegiate and Technical Education for the respective courses.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Assessment</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Duration (min)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Max. Marks</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Conversion</th>
                  </tr>
                </thead>
                <tbody>
                  {cieAssessments.map((assessment, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="border border-gray-300 px-4 py-3">
                        <div>
                          <p className="font-medium text-gray-800">{assessment.assessment}</p>
                          <p className="text-sm text-gray-600">{assessment.timing}</p>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center">{assessment.duration}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">{assessment.maxMarks}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">{assessment.conversion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* SEE Information */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800 text-2xl">
              <BookOpen className="h-8 w-8" />
              Semester End Examination (SEE)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-6 bg-green-50 rounded-lg border-l-4 border-green-500">
              <p className="text-gray-700 leading-relaxed mb-4">
                Semester End Examinations are carried out for Theory courses and Practical courses. Theory exams are conducted as scheduled by the Department of Collegiate and Technical Education for the respective courses at the end of the semester for Theory course examination is conducted by the panel of examiners allotted by the Department of Collegiate and Technical Education.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Duration</h4>
                  <p className="text-gray-600">180 minutes</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Maximum Marks</h4>
                  <p className="text-gray-600">100 marks (converted to 40)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Portfolio Evaluation */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-800 text-2xl">
              <Target className="h-8 w-8" />
              Portfolio Continuous Evaluation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-6 bg-purple-50 rounded-lg border-l-4 border-purple-500">
              <p className="text-gray-700 leading-relaxed">
                Set of course related activities are given in respective courses and are evaluated by the course coordinator; marks will be allotted through the evaluation of rubrics.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Project/Internship Evaluation */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-800 text-2xl">
              <Award className="h-8 w-8" />
              Project/Internship Evaluation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-6 bg-orange-50 rounded-lg border-l-4 border-orange-500">
              <p className="text-gray-700 leading-relaxed">
                Project batches are allotted to the internal guides/cohort owners. The Internal guide/Cohort owner will continuously monitor progress of Project work/Internship for each week of the academic semester. Semester end evaluation is conducted by the panel of examiners from the Department of Collegiate and Technical Education.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Final Marking Scheme */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-800 text-2xl">
              <Calculator className="h-8 w-8" />
              Final CO Attainment Calculation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Final CO attainment for each course is calculated based on the Direct Assessment as per the weightage given below:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {markingScheme.map((scheme, index) => (
                <div key={index} className="p-6 bg-red-50 rounded-lg border border-red-200 text-center">
                  <h4 className="font-bold text-red-800 text-lg mb-2">{scheme.component}</h4>
                  <div className="text-3xl font-bold text-red-600 mb-2">{scheme.marks}</div>
                  <div className="text-sm text-red-700">{scheme.percentage}%</div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-800 mb-2">Important Note:</h4>
              <p className="text-yellow-700 text-sm">
                CIE Written Test is conducted for 20 marks (Two sections). Each section shall have two full questions of same CL and CO. Student is requested to answer one full question from each section.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="text-center p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <Clock className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">60%</h3>
            <p>CIE Weightage</p>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-green-500 to-green-600 text-white">
            <BookOpen className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">40%</h3>
            <p>SEE Weightage</p>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <FileText className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">6</h3>
            <p>CIE Assessments</p>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <Award className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">100%</h3>
            <p>Total Assessment</p>
          </Card>
        </div>
      </div>
    </div>
  );
}