import { Button } from "@/components/ui/button";

const News = () => {
  return (
    <div className="bg-muted py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Latest news</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img
              src="/lovable-uploads/1373393c-9b2f-4888-b806-f0a89643d5f3.png"
              alt="Article thumbnail"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="text-sm text-primary mb-2">Article</div>
              <h3 className="text-lg font-semibold mb-4">
                The holiday season and mental health: Tips for...
              </h3>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img
              src="/lovable-uploads/61a3829b-b2c7-48e0-9cf7-a33af42cce8c.png"
              alt="Article thumbnail"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="text-sm text-primary mb-2">Article</div>
              <h3 className="text-lg font-semibold mb-4">
                Six Reasons to Work with a Patient Recruitment Vendor...
              </h3>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img
              src="/lovable-uploads/e5b49567-eacc-4e97-a0a0-1905f9f89a47.png"
              alt="Article thumbnail"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="text-sm text-primary mb-2">Press</div>
              <h3 className="text-lg font-semibold mb-4">
                AI TechPark: Antidote announced partnership with...
              </h3>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Blog
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Press
          </Button>
        </div>
      </div>
    </div>
  );
};

export default News;