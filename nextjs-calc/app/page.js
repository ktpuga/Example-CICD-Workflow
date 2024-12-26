import Calculator from "./Calculator";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-center text-4xl text-blue-300 mx-auto font ">Calculator App :3</h1>
        <Calculator/>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
        </div>
      </main>
      <footer className="row-start-3 mx-auto flex gap-6 flex-wrap items-center justify-center">
      <p>Example Website to showcase CI/CD Workflows using Github</p>
      <p>&copy;Ryan Majd</p>
      </footer>
    </div>
  );
}
