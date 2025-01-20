import ImageGallery from "@/app/_components/ui/image-gallery";
import TrustedSection from "./_components/screens/trusted";
import ManagementSection from "./_components/screens/management";
import WhySection from "./_components/screens/why";
import SuccessSection from "./_components/screens/success";

export default function Home() {
  return (
    <div>
      <ImageGallery />
      <TrustedSection />
      <ManagementSection />
      <WhySection />
      <SuccessSection />
    </div>
  );
}
