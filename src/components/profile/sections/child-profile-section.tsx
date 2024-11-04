export default function ChildProfileSection() {
  return (
    <section className="px-3">
      <div className="space-y-5 rounded-xl bg-white p-5 shadow">
        <h2 className="text-xl font-bold">Informasi Anak</h2>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <h3 className="text-sm font-bold">Nama</h3>
            <p>Pratama Arhan</p>
          </div>
          <div>
            <h3 className="text-sm font-bold">Tanggal lahir</h3>
            <p>15 Januari 2023</p>
          </div>
          <div>
            <h3 className="text-sm font-bold">NIK</h3>
            <p>3523xxxxxxxxxxxxx</p>
          </div>
          <div>
            <h3 className="text-sm font-bold">Golongan Darah</h3>
            <p>B+</p>
          </div>
        </div>
      </div>
    </section>
  );
}
