import { NavBar } from "@/components/structures/NavBar";
import HeaderSection from "@/components/structures/profile/HeaderSection";
import PersonalInfoSection from "@/components/structures/profile/PersonalInfoSection";

export default function Profile() {
  return (
    <div className="lg:pt-24 lg:pl-24">
      <NavBar />
      <div className="p-4 space-y-6 md:px-6 lg:w-[960px]">
        <HeaderSection />
        <div className="space-y-6">
          <PersonalInfoSection />
        </div>
      </div>
    </div>
  );
}
