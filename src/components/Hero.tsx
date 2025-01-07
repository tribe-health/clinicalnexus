import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Where patients meet research
            </h1>
            <div className="bg-accent p-8 rounded-lg mb-8">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Sponsor?</h2>
                <p className="text-gray-600 mb-4">
                  Accelerate your research with our precision recruitment services.
                </p>
                <Button className="bg-primary text-white hover:bg-primary/90">
                  Learn more
                </Button>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Patient?</h2>
                <p className="text-gray-600 mb-4">
                  Find the right clinical trials for you. Enter your condition below to start.
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter Condition"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
                  />
                  <Button className="bg-primary text-white hover:bg-primary/90">
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="/lovable-uploads/61a3829b-b2c7-48e0-9cf7-a33af42cce8c.png"
              alt="Medical professional"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;