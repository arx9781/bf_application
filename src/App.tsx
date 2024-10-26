import { useState } from "react";
import { Heart, Music, Phone, HeartPulse, Camera, Ribbon } from "lucide-react";
import sadHamster from "./assets/sad-hamster.jpeg";

const Confetti = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className={`
            absolute w-2 h-2 rounded-full
            animate-fall
            ${i % 4 === 0 ? "bg-pink-400" : ""}
            ${i % 4 === 1 ? "bg-pink-300" : ""}
            ${i % 4 === 2 ? "bg-pink-500" : ""}
            ${i % 4 === 3 ? "bg-rose-400" : ""}
            ${i % 3 === 0 ? "left-[10%]" : ""}
            ${i % 3 === 1 ? "left-[50%]" : ""}
            ${i % 3 === 2 ? "left-[90%]" : ""}
            ${i % 2 === 0 ? "animate-confetti-slow" : "animate-confetti-fast"}
          `}
          style={{
            top: `-${Math.random() * 20 + 10}%`,
          }}
        />
      ))}
    </div>
  );
};

export const App = () => {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  const handleYesClick = () => {
    setYesPressed(true);
  };

  const handleNoClick = () => {
    setNoCount((prev) => Math.min(prev + 1, 5));
  };

  return (
    <div className="min-h-screen p-4 font-sans relative overflow-hidden helloKittyBg">
      {yesPressed && <Confetti />}

      <div className="max-w-md mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-pink-600 animate-bounce">
            ♡ Boyfriend Application ♡
          </h1>
          <p className="text-sm text-pink-400 font-semibold text-left">
            ahemm this is my official application for me to be your boyfriend
            and for you to be my other half, please go through this thoroughly
            my queen 🛐
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border-2 border-pink-300 space-y-4">
          <h2 className="text-xl font-bold text-pink-600 flex items-center gap-2">
            <Heart className="text-pink-500" /> Why Choose Me?
          </h2>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-700">
              <HeartPulse className="text-pink-500" />
              <p>Will lovebomb you everyday ♡</p>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Heart className="text-pink-500" />
              <p>Will take care of you ♡</p>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Heart className="text-pink-500" />
              <p>Give you kisses & hugs & cuddles ♡</p>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Music className="text-purple-500" />
              <p>Will make you cute playlists ♡</p>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="text-blue-500" />
              <p>Will text you good morning & night ♡</p>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Camera className="text-gray-500" />
              <p>Will send you my pics ♡</p>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Ribbon className="text-amber-500" />
              <p>Will be there for you, always ♡</p>
            </div>
          </div>
        </div>

        {!yesPressed && (
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border-2 border-pink-300 text-center space-y-4">
            <h2 className="text-xl font-bold text-pink-600">
              Will you be my girlfriend? ♡
            </h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleYesClick}
                className="px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transform hover:scale-110 transition"
              >
                Yes ♡
              </button>
              <button
                onClick={handleNoClick}
                className="px-6 py-2 bg-gray-400 text-white rounded-full hover:bg-gray-500 transform hover:scale-110 transition"
              >
                No
              </button>
            </div>
          </div>
        )}

        {yesPressed && (
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border-2 border-pink-300 text-center animate-bounce">
            <h2 className="text-2xl font-bold text-pink-600">
              You said yes 😭
            </h2>
            <p className="text-pink-500 mt-2">
              thank you for choosing me sonika, i'll try my best to be the best
              boyfriend and the best person that you deserve... ♡
              <br />I love you so much
            </p>
          </div>
        )}

        {Array.from({ length: noCount }).map((_, index) => (
          <img
            key={index}
            src={sadHamster}
            alt="Sad hamster"
            className={`
              absolute w-16 h-16 object-cover
              ${index === 0 && "top-10 left-10"}
              ${index === 1 && "top-20 right-10"}
              ${index === 2 && "bottom-10 left-20"}
              ${index === 3 && "bottom-20 right-20"}
              ${index === 4 && "top-1/2 left-1/2"}
              animate-bounce
            `}
          />
        ))}
      </div>

      <p className="text-sm text-pink-400 mt-8 mx-auto font-semibold">
        Made with love ♡ by adi :3
      </p>
    </div>
  );
};
