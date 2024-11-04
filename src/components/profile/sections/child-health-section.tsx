import HealthStatCard from "@/components/profile/cards/health-stat-card";

export default function ChildHealthSection() {
  return (
    <section className="space-y-2 px-3 py-5">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <HealthStatCard
          title="Berat Badan"
          content="13 kg"
          condition="normal"
        />
        <HealthStatCard
          title="Tinggi Badan"
          content="82 cm"
          condition="warning"
        />
        <HealthStatCard
          title="Tekanan darah"
          content="94/64 mmHg"
          condition="danger"
        />
        <HealthStatCard
          title="Lingkar kepala"
          content="46 cm"
          condition="normal"
        />
        <HealthStatCard
          title="Lingkar lengan"
          content="16.5 cm"
          condition="normal"
        />
        <HealthStatCard
          title="Lingkar perut"
          content="49 cm"
          condition="normal"
        />
      </div>
    </section>
  );
}
