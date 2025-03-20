import Jokes from "./jokes";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="h-screen p-8 flex flex-col items-center justify-center w-full">
        <Jokes />
      </main>
    </div>
  );
}
