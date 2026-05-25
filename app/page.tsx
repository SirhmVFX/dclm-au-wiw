// import Herosection from "@/components/Herosection";
// import Ministering from "@/components/Ministering";
// import ProgramDetails from "@/components/ProgramDetails";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div>
//       <Herosection />
//       <Ministering />
//       <ProgramDetails />
//     </div>
//   );
// }

import Link from "next/link";
import {
  Calendar,
  MapPin,
  Clock,
  Shield,
  Crown,
  Target,
  Users,
  Music,
  Mic,
  Cross,
  Church,
  Flame,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center bg-fixed">
          <Image
            src="/assets/hero.png"
            alt="heroimage"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center">
          <div className="animate__animated animate__fadeInUp">
            <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/50">
              <span className="text-white ">
                🔥 Prophetic & Deliverance Conference 🔥
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[200px] font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                WINNING IN
              </span>
              <br />
              <span className="text-white">WARFARES</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Come and discover the weapons God has given believers to overcome
              every battle and walk in victory!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="px-8 py-4 bg-orange-500 text-white font-bold rounded-full text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
              >
                REGISTER NOW
              </Link>
              <Link
                href="/program"
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white/10 hover:text-white transition-all duration-300"
              >
                VIEW SCHEDULE
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Conference Details Section */}
      <section className="lg:py-[200px] py-8 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">
              Conference Details
            </h2>
            <p className="text-white/30 text-lg max-w-2xl mx-auto">
              Mark your calendar for this life-changing encounter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Dates</h3>
              <p className="text-gray-300 text-lg">July 2-5, 2026</p>
              <p className="text-orange-400 ">Thursday - Sunday</p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Session Times
              </h3>
              <p className="text-gray-300">Thursday: 5PM</p>
              <p className="text-gray-300">Fri & Sat: 8AM - 8PM</p>
              <p className="text-gray-300">Sunday: 8AM - 1PM</p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Venue</h3>
              <p className="text-gray-300">
                Deeper Life Bible Church Auditorium
              </p>
              <p className="text-orange-400 ">
                49-51 Cameron Street, Cranbourne
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Minister Section */}
      <section className="lg:py-[250px] py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3 lg:h-[600px]">
              <Image
                src="/assets/kumuyi.webp"
                alt="pastor kumuyi"
                height={1000}
                width={1000}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:w-2/3">
              <div className="inline-block px-4 py-2 bg-orange-500/10 rounded-full mb-4">
                <span className="text-orange-500 font-semibold">
                  MINISTERING
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[100px] font-bold  mb-4">
                Pastor William F. Kumuyi
              </h2>
              <p className="text-2xl text-orange-400 mb-6">WALK IN VICTORY!</p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 lg:w-1/2">
                Join us for a time of deep prophetic insight, deliverance, and
                spiritual empowerment as God's servant brings forth divine
                strategies for supernatural victory.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-2">
                  <Shield className="text-orange-400" />
                  <span className="text-gray-700">Prophetic Ministry</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Crown className="text-orange-400" />
                  <span className="text-gray-700">Deliverance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="text-orange-400" />
                  <span className="text-gray-700">Spiritual Warfare</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Theme Section */}
      <section className="lg:py-[200px] py-10 ">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Flame className="w-16 h-16 text-white/40 mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl lg:text-[100px] font-bold mb-6 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              YOU SHALL WIN THIS WARFARE!
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Prepare for a transformative experience of worship, word, warfare,
              and victory
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
              <div className="bg-white/5 rounded-xl p-10 backdrop-blur">
                <Music className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-white font-semibold">WORSHIP</p>
              </div>
              <div className="bg-white/5 rounded-xl p-10 backdrop-blur">
                <Mic className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-white font-semibold">WORD</p>
              </div>
              <div className="bg-white/5 rounded-xl p-10 backdrop-blur">
                <Shield className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-white font-semibold">WARFARE</p>
              </div>
              <div className="bg-white/5 rounded-xl p-10 backdrop-blur">
                <Crown className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-white font-semibold">WINNERS</p>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 text-center py-20">
            <div className="bg-white/5 rounded-3xl p-10 lg:p-26 backdrop-blur-lg border border-white/10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Don't Miss This Life-Changing Event!
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Secure your spot today and experience supernatural
                transformation
              </p>
              <Link
                href="/register"
                className="inline-block px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-500 text-white font-bold rounded-full text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Register Now - Free Admission
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
