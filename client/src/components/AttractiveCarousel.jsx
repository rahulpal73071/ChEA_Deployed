import { useState, useEffect } from "react";

export default function AttractiveCarousel({ images }) {
  const defaultImages = [
    "/placeholder1.jpg",
    "/placeholder2.jpg",
    "/placeholder3.jpg",
    "/placeholder4.jpg",
  ];

  const imageList = images && images.length ? images : defaultImages;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [imageList.length]);

  const goToSlide = (index) => setCurrentIndex(index);
  const goToPrevious = () =>
    setCurrentIndex(currentIndex === 0 ? imageList.length - 1 : currentIndex - 1);
  const goToNext = () =>
    setCurrentIndex(currentIndex === imageList.length - 1 ? 0 : currentIndex + 1);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="relative w-[80%] h-[90%] mx-auto my-auto">
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-green-600 rounded-3xl blur opacity-75 animate-pulse"></div>
          <div className="absolute -inset-2 bg-gradient-to-r from-green-400 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-50"></div>

          <div className="relative w-full h-full bg-black rounded-3xl overflow-hidden">
            {imageList.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                  index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
            ))}
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 group"
          >
            <svg
              className="w-6 h-6 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 group"
          >
            <svg
              className="w-6 h-6 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
            {imageList.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative transition-all duration-300 ${
                  index === currentIndex ? "w-12 h-3" : "w-3 h-3 hover:scale-125"
                }`}
              >
                <div
                  className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-purple-400 via-pink-400 to-green-400"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                ></div>
                {index === currentIndex && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-green-400 blur-sm opacity-75 animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

          <div className="absolute top-0 left-0 w-full h-1 bg-black/20">
            <div
              className="h-full bg-gradient-to-r from-purple-400 via-pink-400 to-green-400 transition-all duration-300 ease-linear"
              style={{ width: `${((currentIndex + 1) / imageList.length) * 100}%` }}
            ></div>
          </div>

          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
            {currentIndex + 1} / {imageList.length}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500 rounded-full blur-sm opacity-60 animate-bounce"></div>
        <div
          className="absolute -top-2 -right-6 w-6 h-6 bg-pink-500 rounded-full blur-sm opacity-60 animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute -bottom-4 -left-6 w-10 h-10 bg-green-500 rounded-full blur-sm opacity-60 animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute -bottom-2 -right-4 w-4 h-4 bg-purple-400 rounded-full blur-sm opacity-60 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>
    </div>
  );
}
