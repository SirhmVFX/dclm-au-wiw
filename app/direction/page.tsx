import { MapPin, Bus, Train, Car, Phone } from "lucide-react";

export default function DirectionPage() {
  return (
    <>
      <section className="relative lg:h-[65vh] h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1526481280696-3a7c3512ff0f?ixlib=rb-4.0.3')",
        }}></div>
        <div className="relative z-20 text-center px-4">
          <p className="text-sm uppercase tracking-[0.4em] text-orange-400 mb-4">
            Conference Location
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Direction & Venue
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Find the Deeper Life Bible Church Auditorium in Cranbourne East and get there with ease.
          </p>
        </div>
      </section>

      <section className="lg:py-20 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10">
              <div className="inline-flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-orange-400" />
                <h2 className="text-3xl font-bold text-white">Venue</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                The National July Conference 2026 will be held in a suburb of Cranbourne, about 51 km from the heart of Melbourne CBD.
              </p>
              <div className="bg-black/30 rounded-3xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">Deeper Life Bible Church Auditorium</h3>
                <p className="text-gray-300">49-51 Cameron Street, Cranbourne East Vic 3977</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10">
              <div className="inline-flex items-center gap-3 mb-6">
                <Bus className="w-8 h-8 text-orange-400" />
                <h2 className="text-3xl font-bold text-white">How to Get There</h2>
              </div>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">By Public Transport from Melbourne Airport</h3>
                  <p className="leading-relaxed">
                    Take the SkyBus service from Melbourne Tullamarine Airport to Southern Cross Station. Purchase a Myki card and board the Metro Train on the Cranbourne line, then alight at Cranbourne station. A conference pickup van will be waiting at the station; if not, call us for assistance.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">By Car</h3>
                  <p className="leading-relaxed">
                    Use the address above in your navigation system if you are not familiar with Melbourne road networks. From the North, East, West, or CBD, take the Monash M1 freeway and follow signs to Cranbourne via South Gippsland Highway.
                  </p>
                </div>
                <p className="text-gray-400">
                  There are plenty of free car parking spaces available for conference participants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:py-20 py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Travel Options</h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Choose the transport option that works best for your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/5 rounded-3xl p-8 border border-black/10">
              <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-5">
                <Train className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-3">Train</h3>
              <p className="text-gray-600 leading-relaxed">
                Board the Cranbourne line at Southern Cross and ride to the last station, Cranbourne.
              </p>
            </div>

            <div className="bg-black/5 rounded-3xl p-8 border border-black/10">
              <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-5">
                <Bus className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-3">Bus</h3>
              <p className="text-gray-600 leading-relaxed">
                Use local bus services into Cranbourne or the SkyBus from the airport to Southern Cross.
              </p>
            </div>

            <div className="bg-black/5 rounded-3xl p-8 border border-black/10">
              <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-5">
                <Car className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-3">Car</h3>
              <p className="text-gray-600 leading-relaxed">
                Drive via M1 and South Gippsland Highway, then follow directions to 49-51 Cameron Street.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="w-full lg:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Google Map</h2>
                <p className="text-gray-300 mb-6">
                  Use the map below to preview the exact location and plan your journey to the venue.
                </p>
                <div className="bg-black/20 rounded-3xl overflow-hidden border border-white/10">
                  <iframe
                    title="Cranbourne East venue map"
                    src="https://maps.google.com/maps?q=49-51%20Cameron%20Street%2C%20Cranbourne%20East%20VIC%203977&amp;output=embed"
                    className="w-full h-96 border-0"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <div className="w-full lg:w-1/3 bg-white/10 rounded-3xl p-8 border border-white/10">
                <div className="inline-flex items-center gap-3 mb-5">
                  <Phone className="w-6 h-6 text-orange-400" />
                  <h3 className="text-xl font-semibold text-white">Need Assistance?</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  If the conference pickup van is not visible when you arrive at Cranbourne station, please contact us for help.
                </p>
                <p className="text-gray-300">Venue: Deeper Life Bible Church Auditorium</p>
                <p className="text-gray-300">Address: 49-51 Cameron Street, Cranbourne East Vic 3977</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
