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
              src="/lovable-uploads/bc8e365c-5f78-419c-98c8-09b19c067a35.png"
              alt="Healthcare providers and patient having a friendly conversation in a comfortable medical setting"
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
              src="/lovable-uploads/8f7bbbc2-20cb-485c-8edc-76511c5b133c.png"
              alt="Person with closed eyes showing the emotional impact of living with COPD"
              className="rounded-lg mt-8 h-[300px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;