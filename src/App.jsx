import "./App.css";
import { Header } from "./components/Header.jsx";

function HeaderImg({ src }) {
  return (
          <img src={src} className="h-64" alt="Header image" />
 )
}

function Feature({ title, description, imgSrc }) {
  return (
    <div className={`flex bg-indigo-500 p-5 rounded-xl gap-5`}>
      <div>
        <h2 className="font-anton text-2xl">{title}</h2>
        <p>{description}</p>
        </div>
      <div>
        <img src={imgSrc} className="w-[32rem] rounded-2xl" />
        </div>
    </div>
  )
}

function FeatureReversed({ title, description, imgSrc }) {
  return (
    <div className={`flex flex-row-reverse bg-indigo-500 p-5 rounded-xl gap-5`}>
      <div>
        <h2 className="font-anton text-2xl">{title}</h2>
        <p>{description}</p>
        </div>
      <div>
        <img src={imgSrc} className="w-[32rem] rounded-2xl" />
        </div>
    </div>
  )
 }

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-12 items-center bg-indigo-900 text-slate-100 p-5">
        <h1 className="bg-indigo-700 p-5 rounded-2xl font-anton text-6xl shadow-xl shadow-indigo-500 mt-12">Urbetum</h1>
         
        <p className="border-solid border-4 p-4 rounded-md border-indigo-200 w-[40rem] text-xl font-bold text-center">Urbetrum is a game-changer game. I promise it will change the game industry forewer</p>

        <div className="flex justify-around gap-3">
        <HeaderImg src="/img1.png" />
        <HeaderImg src="/img2.png" />
        <HeaderImg src="/img3.png" />
        </div>

        <div className="flex flex-col gap-5">
          <Feature title="Feature 1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." imgSrc="/img1.png" />

          <FeatureReversed title="Feature 2" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." imgSrc="/img2.png" />

          <Feature title="Feature 3" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." imgSrc="/img3.png" />
        </div>
      </main>
      <footer className="bg-indigo-950 text-white p-12 text-center">
        &copy; 2023 Nikita
      </footer>
    </>
  );
}

export default App;
