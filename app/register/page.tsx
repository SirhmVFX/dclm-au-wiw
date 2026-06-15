"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Users,
  Send,
  CheckCircle,
  XCircle,
  X,
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
    visitingGuests: "",
    country: "",
    expectedArrivalDate: "",
    agreeToTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [registrationData, setRegistrationData] = useState<{
    ticketNumber: string;
    registrationId: string;
    fullName: string;
    email: string;
  } | null>(null);
  const [alert, setAlert] = useState<{
    type: "success" | "error";
    message: string;
    show: boolean;
  }>({ type: "success", message: "", show: false });

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

  const generateTicketNumber = () => {
    return `DCLM-${Date.now()}-${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const ticketNumber = generateTicketNumber();
    const registrationId = ticketNumber;

    // Create complete registration data with ticket info
    const completeFormData = {
      ...formData,
      ticketNumber: ticketNumber,
      registrationId: registrationId,
      registrationDate: new Date().toISOString().split('T')[0],
      registrationTimestamp: new Date().toISOString(),
    };

    setAlert({ type: "success", message: "", show: false });

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(completeFormData),
      });

      const content = await response.json();

      if (response.ok) {
        // Store registration data in localStorage for ticket access
        localStorage.setItem(`registration_${registrationId}`, JSON.stringify(completeFormData));
        localStorage.setItem(`registration_email_${formData.email}`, JSON.stringify(completeFormData));

        console.log("Registration saved:", content.data?.tableRange || "Success");

        // Store registration info for success screen
        setRegistrationData({
          ticketNumber: ticketNumber,
          registrationId: registrationId,
          fullName: formData.fullName,
          email: formData.email,
        });

        setAlert({
          type: "success",
          message: `Registration successful! Your ticket number is ${ticketNumber}.`,
          show: true,
        });

        setSubmitted(true);

        // Reset form after successful submission
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
          visitingGuests: "",
          country: "",
          expectedArrivalDate: "",
          agreeToTerms: false,
        });

        // Auto-hide alert after 5 seconds
        setTimeout(() => {
          setAlert((prev) => ({ ...prev, show: false }));
        }, 5000);
      } else {
        throw new Error(content.message || "Failed to save registration");
      }
    } catch (error: any) {
      console.error("Registration error:", error);
      setAlert({
        type: "error",
        message: error.message || "Failed to save registration. Please try again or contact support.",
        show: true,
      });

      setTimeout(() => {
        setAlert((prev) => ({ ...prev, show: false }));
      }, 6000);
    } finally {
      setLoading(false);
    }
  };

  // Alert Component
  const AlertMessage = () => {
    if (!alert.show) return null;

    const bgColor =
      alert.type === "success"
        ? "bg-green-500/20 border-green-500"
        : "bg-red-500/20 border-red-500";
    const textColor =
      alert.type === "success" ? "text-green-400" : "text-red-400";
    const Icon = alert.type === "success" ? CheckCircle : XCircle;

    return (
      <div className="fixed top-20 right-4 z-50 max-w-md animate-in slide-in-from-right duration-300">
        <div className={`${bgColor} backdrop-blur-lg border rounded-lg shadow-xl p-4`}>
          <div className="flex items-start gap-3">
            <Icon className={`${textColor} w-5 h-5 mt-0.5 flex-shrink-0`} />
            <div className="flex-1">
              <p className={`${textColor} font-medium text-sm`}>
                {alert.type === "success" ? "Success!" : "Error!"}
              </p>
              <p className="text-white text-sm mt-1">{alert.message}</p>
            </div>
            <button
              onClick={() => setAlert((prev) => ({ ...prev, show: false }))}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Success Screen
  if (submitted && registrationData) {
    return (
      <>
        <AlertMessage />
        <div className="min-h-[80vh] flex items-center justify-center">
          <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-12 max-w-md">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Registration Successful!</h2>
            <div className="bg-yellow-400/10 rounded-lg p-4 mb-6">
              <p className="text-yellow-400 font-mono text-lg">{registrationData.ticketNumber}</p>
              <p className="text-gray-400 text-sm mt-1">Your Ticket Number</p>
            </div>
            <p className="text-gray-300 mb-4">
              Thank you {registrationData.fullName} for registering for Winning in Warfares Conference.
            </p>
            <p className="text-gray-400 text-sm mb-6">
              A confirmation has been sent to {registrationData.email}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = `/confirmation/${registrationData.registrationId}`}
                className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 font-bold rounded-full"
              >
                View My Ticket
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setRegistrationData(null);
                }}
                className="px-6 py-3 border border-yellow-400 text-yellow-400 font-bold rounded-full hover:bg-yellow-400/10"
              >
                Register Another Person
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <AlertMessage />

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
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="Share any prayer requests you'd like us to pray about..."
                  />
                </div>

                {/* Name of Other Visiting Guests */}
                <div className="md:col-span-2">
                  <label className="block text-gray-300 mb-2  font-semibold">Name of Other Guests (Seperate names with ,) *</label>
                  <input
                    type="text"
                    name="visitingGuests"
                    value={formData.visitingGuests}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="Enter your other guests names"
                  />
                </div>

                {/* Country of Origin */}
                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">Country of Origin *</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors"
                  >
                    <option value="">Select your country</option>
                    <option value="USA">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Ghana">Ghana</option>
                    <option value="India">India</option>
                    <option value="Other">Other</option>
                  </select>
                </div>



                {/* Expected Arrival Date */}
                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">Expected Arrival Date in Australia *</label>
                  <input
                    type="date"
                    name="expectedArrivalDate"
                    value={formData.expectedArrivalDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors"
                  />
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