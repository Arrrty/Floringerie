import ListSlides from "./components/ListSlides"

export default function Home() {

  return (
    <div className="relative w-full h-full">
      <ListSlides />
      <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#f3f3f372] dark:bg-[#00000090]">
        <h1 className="text-5xl text-center">Привет!</h1>
      </div>
    </div>
  );
}
