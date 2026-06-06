
import { Shield, CheckCircle, FileText, Building } from 'lucide-react';

export default function VerifyPage() {
    return (
        <>

            <div className="min-h-screen py-48">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Official Government Verification Badge */}
                    <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6 mb-10 text-center">
                        <Shield className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Official Event Verification Portal</h1>
                        <p className="text-green-400">For Australian Department of Home Affairs & Visa Processing Officers</p>
                    </div>

                    {/* Event Registration Number */}
                    <div className="bg-white/5 rounded-2xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-yellow-400 mb-4">Event Registration Details</h2>
                        <div className="space-y-3">
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-gray-400">Registered Entity:</span>
                                <span className="text-white font-semibold">Deeper Life Bible Church Australia</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-gray-400">ABN/ACN:</span>
                                <span className="text-white font-semibold">61 140 541 677</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-gray-400">Event Registration ID:</span>
                                <span className="text-white font-semibold">DCLM-AU-2026-0702</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-gray-400">Registered Charity Status:</span>
                                <span className="text-white font-semibold">Yes (ACNC Registered)</span>
                            </div>
                        </div>
                    </div>

                    {/* Verification Statement */}
                    <div className="bg-yellow-400/10 border-l-4 border-yellow-400 rounded-r-2xl p-6 mb-8">
                        <h3 className="text-xl font-bold text-yellow-400 mb-2">Official Declaration</h3>
                        <p className="text-gray-300 leading-relaxed">
                            This document certifies that the "Winning in Warfares: A Prophetic & Deliverance Conference" is a legitimate religious event
                            organized by Deeper Life Bible Church, a registered religious institution in Australia. All registrations are genuine and
                            participants are invited for the sole purpose of attending this religious conference from July 2-5, 2026.
                        </p>
                    </div>

                    {/* Verification Contact */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white/5 rounded-2xl p-6">
                            <FileText className="w-8 h-8 text-yellow-400 mb-3" />
                            <h3 className="text-lg font-bold text-white mb-2">Verification Contact</h3>
                            <p className="text-gray-400 text-sm">For visa verification inquiries:</p>
                            <p className="text-yellow-400 text-sm mt-2">📧 visa-verify@dclm-au.org</p>
                            <p className="text-yellow-400 text-sm">📞 +61 461 427 265 (Visa Verification Desk)</p>
                        </div>
                        <div className="bg-white/5 rounded-2xl p-6">
                            <Building className="w-8 h-8 text-yellow-400 mb-3" />
                            <h3 className="text-lg font-bold text-white mb-2">Physical Location</h3>
                            <p className="text-gray-400 text-sm">49-51 Cameron Street</p>
                            <p className="text-gray-400 text-sm">Cranbourne, VIC 3977</p>
                            <p className="text-gray-400 text-sm">Australia</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}