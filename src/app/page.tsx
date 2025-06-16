import BackgroundImage from '../components/background-image.component';

export default function Home() {
  return (
    <main>
      <div>
        <div className="flex flex-col items-center justify-center min-h-screen lg:p-8 md:p-4 p-2">
          <h1 className="font-tangerine text-gold text-3xl md:text-6xl text-center font-bold mb-3 text-glow">
            &quot;Fear not for I am with you; be not dismayed, for I am your
            God.&quot;
          </h1>
          <div className="w-full">
            <p className="block text-right font-lora text-gold text-xl lg:text-4xl md:text-center text-glow">
              - Isaiah 41:10
            </p>
          </div>
        </div>
        <BackgroundImage imageName="cross-on-water" alt="Holy Cross on Water" />
      </div>
    </main>
  );
}
