import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex justify-end items-end pl-24 pt-40 overflow-hidden">
      <div className="relative w-[140%] h-[140%]">
        <Image
          src="/Hero.png"
          alt="LearnSup Hero"
          fill
          className="object-cover object-left"
          priority
        />
      </div>
      
        <div className="absolute bottom-40 left-36 z-10">
          <Link href="#">
            <button className="group relative overflow-hidden bg-gradient-to-r from-[var(--primary-orange)] to-[var(--primary-orange-dark)] text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 ease-out text-lg font-medium hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent flex items-center whitespace-nowrap hover:shadow-[0_8px_24px_rgba(255,102,0,0.35)]">
              <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-white/25 blur-md -skew-x-12 translate-x-0 group-hover:translate-x-[260%] transition-transform duration-700 ease-out" />
              Essayer LearnSup
              <FiArrowRight className="ml-3 text-xl transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
          <Link href="#" className="block mt-3">
            <button className="bg-white text-[var(--primary-orange)] px-6 py-3 rounded-full shadow-md hover:shadow-xl transition-all duration-300 ease-out text-lg font-medium hover:bg-[var(--primary-orange)] hover:text-white hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-orange)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white flex items-center whitespace-nowrap border border-[var(--primary-orange)]">
              Voir la démo
              <FiArrowRight className="ml-3 text-xl" />
            </button>
          </Link>
        </div>
    </div>
  );
};

export default Hero;
