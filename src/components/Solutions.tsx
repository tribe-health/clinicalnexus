import { Button } from "@/components/ui/button";

const Solutions = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">
          We're making COPD clinical trials accessible in South Texas:
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-4">For healthcare providers</h3>
              <p className="text-gray-600 mb-6">
                We partner with local clinics and physicians to bring innovative COPD treatments to your patients through clinical trials.
              </p>
              <Button className="bg-primary text-white hover:bg-primary/90">
                Partner with us
              </Button>
            </div>
            <img
              src="/lovable-uploads/1465379944081-7f47de8d74ac"
              alt="Rural South Texas landscape"
              className="rounded-lg mt-8 h-[300px] w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-4">For COPD patients</h3>
              <p className="text-gray-600 mb-6">
                Access cutting-edge COPD treatments close to home, with transportation assistance and support throughout your journey.
              </p>
              <Button className="bg-primary text-white hover:bg-primary/90">
                Find local trials
              </Button>
            </div>
            <img
              src="/lovable-uploads/1426604966848-d7adac402bff"
              alt="South Texas natural landscape"
              className="rounded-lg mt-8 h-[300px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;