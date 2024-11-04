import ChildHealthSection from "@/components/profile/sections/child-health-section";
import ChildProfileSection from "@/components/profile/sections/child-profile-section";
import HeaderSection from "@/components/profile/sections/header-section";
import ImmunizationSection from "@/components/profile/sections/immunization-section";

export default function ProfilePage() {
  return (
    <main className="space-y-5">
      <HeaderSection />
      <ChildProfileSection />
      <ChildHealthSection />
      <ImmunizationSection />
    </main>
  );
}
