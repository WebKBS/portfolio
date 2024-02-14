import Weather from '@/components/Weather/Weather';

export default async function Home() {
  return (
    <>
      <main className="flex-1">
        <Weather />
        {/* <LottieComp /> */}
      </main>
    </>
  );
}
