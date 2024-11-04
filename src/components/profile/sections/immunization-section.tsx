import ImmunizationCard from "../cards/immunization-card";

export default function ImmunizationSection() {
  return (
    <section className="space-y-2 px-3">
      <h2 className="text-xl font-bold">Riwayat Imunisasi</h2>
      <div className="space-y-2">
        <ImmunizationCard name="BCG" date="12 Mar 2024" isDone={false} />
        <ImmunizationCard name="DPT 1" date="12 Feb 2024" isDone />
        <ImmunizationCard name="Polio" date="12 Jan 2024" isDone />
      </div>
    </section>
  );
}
