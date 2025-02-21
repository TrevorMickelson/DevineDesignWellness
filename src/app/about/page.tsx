import { siteContent } from "@/content/site-content";

export default function AboutPage() {
  const { about: aboutContent } = siteContent;
  
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-black">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-2xl text-white max-w-2xl mx-auto">{aboutContent.hero.subtitle}</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-8 text-lg text-gray-700">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
            <p className="leading-relaxed">
              {aboutContent.welcome.mainText}
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-primary/5 rounded-lg shadow-sm p-8 border border-primary/10">
            <p className="leading-relaxed">
              {aboutContent.mainText}
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100 text-center">
            <p className="font-medium text-gray-900 mb-4">
              {aboutContent.contactInfo.callToAction}
            </p>
            <a 
              href={`tel:${aboutContent.contactInfo.phone}`}
              className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors block mb-6"
              aria-label="Call our office"
            >
              {aboutContent.contactInfo.phone}
            </a>
            <p className="text-xl text-gray-700">
              {aboutContent.closing}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 
