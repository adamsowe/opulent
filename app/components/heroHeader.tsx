import Image from 'next/image';

export default function HeroHeader() {
  return (
    <div className="relative w-full h-screen overflow-hidden z-[-1] top-[8.5rem]">

      {/* Image */}
      <div className="relative w-full h-full">
        <Image
          src="/images/hero-header.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="contain"
          className="absolute inset-0 z-0"
        />
      </div>

      {/* Floating Div */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 p-6 max-w-sm w-full z-10">
        <p className="text-gray-800 mb-4">
          Discover our latest collection and find the perfect style for any occasion. Don't miss out on exclusive offers!
        </p>
        <div className="flex justify-center">
          <button className="bg-black text-white py-2 px-4 rounded hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}