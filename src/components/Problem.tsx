import { Clock, Search, DollarSign } from "lucide-react";

const Problem = () => {
  return (
    <div className="bg-muted py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">
          There's a problem in medical research today.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
            </div>
            <p className="text-gray-600">
              More than 80% of medical research is delayed due to a lack of participants.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Search className="w-8 h-8 text-white" />
              </div>
            </div>
            <p className="text-gray-600">
              There's no good way for patients to find clinical trials that are right for them.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
            </div>
            <p className="text-gray-600">
              The cost of these delays to patients and to researchers is too high.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;