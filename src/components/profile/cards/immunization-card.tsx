interface IImmunizationCard {
  name: string;
  date: string;
  isDone: boolean;
}

export default function ImmunizationCard({
  date,
  name,
  isDone,
}: IImmunizationCard) {
  return (
    <div className="flex items-center justify-between gap-5 rounded-xl bg-white p-5 shadow">
      <div>
        <h3>{name}</h3>
        <p className="text-sm text-neutral-400">{date}</p>
      </div>
      {isDone ? (
        <p className="rounded-full bg-primary-50 px-4 py-1 text-sm font-medium text-primary-600">
          Sudah
        </p>
      ) : (
        <p className="rounded-full bg-amber-50 px-4 py-1 text-sm font-medium text-amber-600">
          Belum
        </p>
      )}
    </div>
  );
}
