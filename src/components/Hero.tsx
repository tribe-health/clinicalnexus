import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              COPD Clinical Trials in South Texas
            </h1>
            <div className="bg-accent p-8 rounded-lg mb-8">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Medical Professional?</h2>
                <p className="text-gray-600 mb-4">
                  Help your COPD patients access innovative treatments through our clinical trials.
                </p>
                <Button className="bg-primary text-white hover:bg-primary/90">
                  Learn more
                </Button>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Living with COPD?</h2>
                <p className="text-gray-600 mb-4">
                  Find local clinical trials that could help improve your breathing and quality of life.
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter your zip code"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
                  />
                  <Button className="bg-primary text-white hover:bg-primary/90">
                    Find Trials
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="/lovable-uploads/1472396961693-142e6e269027.jpg"
              alt="Rural South Texas landscape"
              className="rounded-lg w-full object-cover h-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;