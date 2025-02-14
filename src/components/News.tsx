import { Button } from "@/components/ui/button";

const News = () => {
  return (
    <div className="bg-muted py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Latest COPD Research News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img
              src="/lovable-uploads/ecdbbc76-25dd-403a-a970-c56698a44344.png"
              alt="Rural landscape with a winding path leading to a farmhouse on a hill, surrounded by trees and wildflowers"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="text-sm text-primary mb-2">Research Update</div>
              <h3 className="text-lg font-semibold mb-4">
                New COPD Treatment Shows Promise in South Texas Trial
              </h3>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img
              src="/lovable-uploads/b7653fdb-6de2-4d71-939c-7a8e14612936.png"
              alt="Advanced medical research facility with scientists working on innovative treatments"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="text-sm text-primary mb-2">Community</div>
              <h3 className="text-lg font-semibold mb-4">
                Local Support Groups Help COPD Patients Navigate Clinical Trials
              </h3>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img
              src="/lovable-uploads/f11410a7-bc20-4872-b5ec-3ad49d01df49.png"
              alt="South Texas landscape with a mesquite tree overlooking a serene lake"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="text-sm text-primary mb-2">Resources</div>
              <h3 className="text-lg font-semibold mb-4">
                Transportation Assistance Program Launches for Trial Participants
              </h3>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Research Updates
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Patient Stories
          </Button>
        </div>
      </div>
    </div>
  );
};

export default News;