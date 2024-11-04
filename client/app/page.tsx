export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl text-center sm:text-left">
          Hack for Humanity!
        </h1>

        <h2 className="text-2xl text-center sm:text-left">
          Created by 
        </h2>
        <div className="flex flex-wrap place-content-around gap-4 text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <span className="mb-2">Shreyas</span>
          <span className="mb-2">Hasan</span>
          <span className="mb-2">Jas</span>
          <span className="mb-2">OC</span>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row"></div>
      </main>
    </div>
  );
}