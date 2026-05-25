"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  Send,
  CheckCircle,
} from "lucide-react";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    numberOfGuests: "1",
    hearAbout: "",
    prayerRequest: "",
    agreeToTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setSubmitted(true);
    setLoading(false);

    // Reset form after submission
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      numberOfGuests: "1",
      hearAbout: "",
      prayerRequest: "",
      agreeToTerms: false,
    });

    // Hide success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (submitted) {
    return (
      <>
        <div className="min-h-[80vh] flex items-center justify-center">
          <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-12 max-w-md">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Registration Successful!
            </h2>
            <p className="text-gray-300 mb-6">
              Thank you for registering for Winning in Warfares Conference.
              We'll send you a confirmation email shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 font-bold rounded-full"
            >
              Register Another Person
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1449180244467-5ba1e4a21152?ixlib=rb-4.0.3')",
          }}
        ></div>
        <div className="relative z-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Register Now
          </h1>
          <p className="text-xl text-gray-300">
            Secure your spot for this life-changing conference
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Info Banner */}
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-6 mb-10 border border-yellow-400/30">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                  <p className="text-white font-semibold">Admission is FREE!</p>
                  <p className="text-gray-300 text-sm">
                    Registration is required for planning purposes
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-yellow-400 font-bold">July 2-5, 2026</p>
                  <p className="text-gray-300 text-sm">
                    Deeper Life Bible Church, Cranbourne
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="md:col-span-2">
                  <label className="block text-gray-300 mb-2 font-semibold">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                      placeholder="+61 123 456 789"
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="md:col-span-2">
                  <label className="block text-gray-300 mb-2 font-semibold">
                    Street Address
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                      placeholder="Enter your street address"
                    />
                  </div>
                </div>

                {/* City */}
                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="City"
                  />
                </div>

                {/* State */}
                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="State"
                  />
                </div>

                {/* Zip Code */}
                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">
                    Zip/Postal Code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="Zip code"
                  />
                </div>

                {/* Number of Guests */}
                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">
                    Number of People (Including you) *
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      name="numberOfGuests"
                      value={formData.numberOfGuests}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "person" : "people"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* How did you hear */}
                <div className="md:col-span-2">
                  <label className="block text-gray-300 mb-2 font-semibold">
                    How did you hear about this conference?
                  </label>
                  <select
                    name="hearAbout"
                    value={formData.hearAbout}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors"
                  >
                    <option value="">Select an option</option>
                    <option value="church">Church Announcement</option>
                    <option value="friend">Friend/Family</option>
                    <option value="social">Social Media</option>
                    <option value="website">Website</option>
                    <option value="flyer">Flyer/Poster</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Prayer Request */}
                <div className="md:col-span-2">
                  <label className="block text-gray-300 mb-2 font-semibold">
                    Prayer Request (Optional)
                  </label>
                  <textarea
                    name="prayerRequest"
                    value={formData.prayerRequest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="Share any prayer requests you'd like us to pray about..."
                  ></textarea>
                </div>

                {/* Terms */}
                <div className="md:col-span-2">
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      required
                      className="mt-1 w-5 h-5 text-yellow-400 focus:ring-yellow-400"
                    />
                    <span className="text-gray-300 text-sm">
                      I confirm that I will attend the Winning in Warfares
                      Conference and agree to receive updates about the event.
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8 text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 font-bold rounded-full text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin mr-2"></div>
                      Registering...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Register Now
                    </>
                  )}
                </button>
              </div>

              <p className="text-center text-gray-400 text-sm mt-6">
                By registering, you agree to receive event updates. Your
                information will be kept confidential.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
