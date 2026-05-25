import {
  Calendar,
  Clock,
  Music,
  Mic,
  BookOpen,
  Users,
  Cross,
  Flame,
  Crown,
  Star,
  Shield,
} from "lucide-react";

export default function Program() {
  const scheduleDays = [
    {
      day: "Thursday",
      date: "July 2, 2026",
      sessions: [
        {
          time: "5:00 PM",
          title: "Opening Ceremony",
          description: "Praise & Worship, Opening Prayers, Welcome Address",
          icon: Music,
        },
        {
          time: "6:00 PM",
          title: "Session 1: Prophetic Foundation",
          description: "Setting the stage for prophetic encounter",
          icon: Mic,
        },
        {
          time: "7:00 PM",
          title: "Session 2: Weapons of Our Warfare",
          description: "Discovering divine weapons for victory",
          icon: Cross,
        },
        {
          time: "8:00 PM",
          title: "Prayer & Deliverance",
          description: "Corporate prayer and deliverance session",
          icon: Flame,
        },
      ],
    },
    {
      day: "Friday",
      date: "July 3, 2026",
      sessions: [
        {
          time: "8:00 AM",
          title: "Morning Devotion",
          description: "Early morning prayers and worship",
          icon: Star,
        },
        {
          time: "9:00 AM",
          title: "Session 3: Walking in Victory",
          description: "Practical steps to maintain victory",
          icon: Crown,
        },
        {
          time: "11:00 AM",
          title: "Session 4: Spiritual Warfare Strategies",
          description: "Advanced strategies for overcoming",
          icon: Shield,
        },
        {
          time: "1:00 PM",
          title: "Lunch Break",
          description: "Fellowship and refreshments",
          icon: Users,
        },
        {
          time: "2:00 PM",
          title: "Session 5: Breaking Strongholds",
          description: "Identifying and demolishing strongholds",
          icon: Cross,
        },
        {
          time: "4:00 PM",
          title: "Session 6: Prophetic Impartation",
          description: "Receiving prophetic direction",
          icon: Mic,
        },
        {
          time: "6:00 PM",
          title: "Evening Warfare",
          description: "Intense prayer and deliverance",
          icon: Flame,
        },
        {
          time: "8:00 PM",
          title: "Night Vigil",
          description: "All-night prayer and worship",
          icon: Star,
        },
      ],
    },
    {
      day: "Saturday",
      date: "July 4, 2026",
      sessions: [
        {
          time: "8:00 AM",
          title: "Morning Glory",
          description: "Power-packed praise and worship",
          icon: Music,
        },
        {
          time: "10:00 AM",
          title: "Session 7: Divine Healing",
          description: "Ministry for physical and emotional healing",
          icon: Cross,
        },
        {
          time: "12:00 PM",
          title: "Session 8: Financial Breakthrough",
          description: "Breaking financial curses and limitations",
          icon: Crown,
        },
        {
          time: "2:00 PM",
          title: "Lunch Break",
          description: "Fellowship and refreshments",
          icon: Users,
        },
        {
          time: "3:00 PM",
          title: "Session 9: Family Deliverance",
          description: "Breaking generational curses",
          icon: Flame,
        },
        {
          time: "5:00 PM",
          title: "Session 10: Anointing Service",
          description: "Special anointing for breakthrough",
          icon: Star,
        },
        {
          time: "7:00 PM",
          title: "Crusade Night",
          description: "Open-air evangelism and miracles",
          icon: Mic,
        },
      ],
    },
    {
      day: "Sunday",
      date: "July 5, 2026",
      sessions: [
        {
          time: "8:00 AM",
          title: "Thanksgiving Service",
          description: "Celebration of God's goodness",
          icon: Music,
        },
        {
          time: "10:00 AM",
          title: "Session 11: Mantle of Victory",
          description: "Receiving the mantle for ongoing victory",
          icon: Crown,
        },
        {
          time: "12:00 PM",
          title: "Closing Ceremony",
          description: "Final prayers and commissioning",
          icon: Flame,
        },
        {
          time: "1:00 PM",
          title: "Fellowship Lunch",
          description: "Celebration and networking",
          icon: Users,
        },
      ],
    },
  ];

  const specialFeatures = [
    {
      time: "Throughout",
      title: "Prayer Altars",
      description: "24/7 prayer coverage",
    },
    {
      time: "Each Session",
      title: "Worship Experience",
      description: "Deeper Life Choir & Vibrant Worship",
    },
    {
      time: "Daily",
      title: "Counseling",
      description: "One-on-one prayer and counseling",
    },
    { time: "Day 3", title: "Water Baptism", description: "For new converts" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3')",
          }}
        ></div>
        <div className="relative z-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Program Schedule
          </h1>
          <p className="text-xl text-gray-300">
            4 Days of Prophetic Encounter and Deliverance
          </p>
        </div>
      </section>

      {/* Daily Schedule */}
      {scheduleDays.map((day, idx) => (
        <section
          key={idx}
          className={`py-[200px] ${idx % 2 === 0 ? "bg-black" : "bg-gray-900/30"}`}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full px-6 py-2 mb-4">
                <Calendar className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">{day.day}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {day.date}
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {day.sessions.map((session, sIdx) => {
                const IconComponent = session.icon;
                return (
                  <div
                    key={sIdx}
                    className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-yellow-400/50"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex items-center space-x-4 md:w-48">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 font-bold">
                              {session.time}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {session.title}
                        </h3>
                        <p className="text-gray-400">{session.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Special Features */}
      <section className="py-[200px] bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Special Features
            </h2>
            <p className="text-gray-700 text-lg">
              Additional spiritual encounters throughout the conference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="bg-black/2 rounded-xl p-6 text-center border border-black/10 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-orange-600 text-sm mb-2">{feature.time}</p>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 max-w-3xl mx-auto border border-white/10">
            <div className="flex items-center space-x-3 mb-6">
              <Flame className="w-8 h-8 text-yellow-400" />
              <h3 className="text-2xl font-bold text-white">
                Important Information
              </h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                <span>
                  Arrive at least 30 minutes before each session for seating
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                <span>
                  Come with a notebook and Bible for maximum engagement
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                <span>
                  Bring a handkerchief for anointing (for the Saturday session)
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                <span>Children's church available during morning sessions</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                <span>Free parking available at the venue</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                <span>Light refreshments will be served during breaks</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
