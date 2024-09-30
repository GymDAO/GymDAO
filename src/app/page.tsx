import PartnersSection from '@/components/molecules/PartnersSection';

export default function Home() {
  return (
    <>
      <div className="min-h-[500px]" id="about-us">
        ABOUT US
      </div>
      <div className="min-h-[500px]" id="mission">
        MISSION
      </div>
      <div className="min-h-[500px]" id="services">
        SERVICES
      </div>
      <div className="" id="partners">
        <PartnersSection />
      </div>
      <div className="min-h-[500px]" id="faq">
        FAQ
      </div>
    </>
  );
}
