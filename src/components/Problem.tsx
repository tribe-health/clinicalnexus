import { Clock, Search, DollarSign } from "lucide-react";

const Problem = () => {
  return (
    <div className="bg-muted py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">
          COPD patients in rural South Texas face unique challenges.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
            </div>
            <p className="text-gray-600">
              Limited access to specialized COPD care and treatment options in rural areas.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Search className="w-8 h-8 text-white" />
              </div>
            </div>
            <p className="text-gray-600">
              Difficulty finding and participating in clinical trials due to distance and transportation.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
            </div>
            <p className="text-gray-600">
              High costs of COPD medications and treatments affecting quality of life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;