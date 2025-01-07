import { Button } from "@/components/ui/button";

const Solutions = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">
          We're solving this problem in two ways:
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-4">For sponsors</h3>
              <p className="text-gray-600 mb-6">
                We've perfected precision recruitment to help sponsors fill clinical trials faster.
              </p>
              <Button className="bg-primary text-white hover:bg-primary/90">
                Learn more
              </Button>
            </div>
            <img
              src="/lovable-uploads/e5b49567-eacc-4e97-a0a0-1905f9f89a47.png"
              alt="Doctor working on laptop"
              className="rounded-lg mt-8"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-4">For patients</h3>
              <p className="text-gray-600 mb-6">
                We've made the process of finding trials easy with our smart Match search engine.
              </p>
              <Button className="bg-primary text-white hover:bg-primary/90">
                Start your search
              </Button>
            </div>
            <img
              src="/lovable-uploads/4811771c-3ed3-4b3b-996e-42d8f91bca9b.png"
              alt="Patient sitting in chair"
              className="rounded-lg mt-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;