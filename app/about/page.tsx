import {
  Target,
  Heart,
  Users,
  Church,
  Cross,
  BookOpen,
  Mic,
  Flame,
  Shield,
  Crown,
} from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3')",
          }}
        ></div>
        <div className="relative z-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About The Conference
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the vision and mission behind Winning in Warfares
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-20 border border-white/10">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To raise an army of victorious believers who understand their
                authority in Christ and can effectively engage in spiritual
                warfare to overcome every battle of life.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-20 border border-white/10">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-300 leading-relaxed">
                To equip believers with divine weapons and strategies for
                spiritual warfare, prophetic insights, and deliverance from
                every form of bondage, leading to total victory in Christ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-[250px] bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 ">
              What To Expect
            </h2>
            <p className="text-gray-300 text-lg">
              A transformative experience like no other
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group border border-black/10 rounded-lg p-10">
              <div className="w-24 h-24 border border-black/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Cross className="w-12 h-12 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Prophetic Ministry
              </h3>
              <p className="text-gray-400">
                Receive prophetic direction and insight for your life and
                destiny
              </p>
            </div>
            <div className="text-center group border border-black/10 rounded-lg p-10">
              <div className="w-24 h-24 border border-black/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-12 h-12 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Deliverance Sessions
              </h3>
              <p className="text-gray-400">
                Break free from every form of bondage and oppression
              </p>
            </div>
            <div className="text-center group border border-black/10 rounded-lg p-10">
              <div className="w-24 h-24 border border-black/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-12 h-12 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                In-depth Word Teaching
              </h3>
              <p className="text-gray-400">
                Deep biblical insights on spiritual warfare and victory
              </p>
            </div>
            <div className="text-center group border border-black/10 rounded-lg p-10">
              <div className="w-24 h-24 border border-black/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Flame className="w-12 h-12 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Intense Prayer & Warfare
              </h3>
              <p className="text-gray-400">
                Engage in strategic prayer sessions for breakthrough
              </p>
            </div>
            <div className="text-center group border border-black/10 rounded-lg p-10">
              <div className="w-24 h-24 border border-black/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-12 h-12 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Felip</h3>
              <p className="text-gray-400">
                Connect with like-minded believers and prayer warriors
              </p>
            </div>
            <div className="text-center group border border-black/10 rounded-lg p-10">
              <div className="w-24 h-24 border border-black/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Crown className="w-12 h-12 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Supernatural Victory
              </h3>
              <p className="text-gray-400">
                Experience breakthrough and lasting transformation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Minister Bio */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                About The Minister
              </h2>
              <h3 className="text-2xl lg:text-[100px] leading-none text-orange-500 mb-4">
                Pastor William F. Kumuyi
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Pastor William Folorunso Kumuyi is the General Superintendent of
                Deeper Christian Life Ministry, a global movement with millions
                of members worldwide. Known for his deep biblical insight and
                powerful deliverance ministry, Pastor Kumuyi has been
                instrumental in bringing spiritual transformation to countless
                lives across the globe.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With decades of experience in prophetic ministry and spiritual
                warfare, Pastor Kumuyi brings a unique anointing that breaks
                yokes and sets captives free. His teaching on walking in victory
                has empowered believers to overcome every challenge and live
                triumphantly in Christ.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
