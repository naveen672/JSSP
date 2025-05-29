import recruiterLogos from "@assets/Recuiters-e1602658278748.jpg";

export default function IndustryPartners() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Our Industry Partners</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are proud to partner with leading companies across various industries, providing our students 
            with excellent placement opportunities and real-world exposure.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
          <img 
            src={recruiterLogos} 
            alt="Industry Partners and Recruiters - Toyota, ThoughtWorks, Wipro, Infosys, L&T, Welspun, Triton, Jockey, Asian Paints, ITC Limited, AT&S, Triphase, Kaynes Technology, Rane, Ramco, Tech Mahindra, ABB, Jindal Steel & Power, Nestle, TVS" 
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            <span className="font-semibold text-primary">100% Placement Record</span> for the 5th consecutive year with 
            top companies recruiting our graduates for various technical and management roles.
          </p>
        </div>
      </div>
    </section>
  );
}