'use client';

import { useEffect, useState, use } from 'react';
import Link from 'next/link';
import { Download, Printer, CheckCircle, User, Mail, Calendar, MapPin, Clock, Phone } from 'lucide-react';

interface RegistrationData {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    country: string;
    passportNumber: string;
    registrationDate: string;
    ticketNumber: string;
}

// Fix: params is now a Promise, need to unwrap it with React.use()
export default function ConfirmationPage({
    params
}: {
    params: Promise<{ id: string }>
}) {
    // Unwrap the params Promise using React.use()
    const { id } = use(params);

    const [registration, setRegistration] = useState<RegistrationData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // In production, fetch from your database
        const saved = localStorage.getItem(`registration_${id}`);
        if (saved) {
            setRegistration(JSON.parse(saved));
        }
        setLoading(false);
    }, [id]);

    const handlePrint = () => {
        window.print();
    };

    const handleDownload = () => {
        const element = document.getElementById('ticket-content');
        if (element) {
            alert('PDF download would be generated here. In production, integrate with a PDF generation library.');
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full"></div>
            </div>
        );
    }

    if (!registration) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-white mb-4">Registration Not Found</h1>
                    <p className="text-gray-400">Please check your ticket number or contact support.</p>
                    <Link href="/register" className="inline-block mt-6 px-6 py-3 bg-yellow-500 text-gray-900 rounded-lg">
                        Register Now
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
            <div className="container mx-auto px-4 max-w-3xl">
                {/* Official Header */}
                <div className="text-center mb-8 no-print">
                    <h1 className="text-4xl font-bold text-white mb-2">Registration Confirmed ✓</h1>
                    <p className="text-gray-400">Your official conference registration ticket</p>
                    <div className="flex justify-center gap-4 mt-6">
                        <button onClick={handlePrint} className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition">
                            <Printer size={18} /> Print / Download
                        </button>
                        {/* <button onClick={handleDownload} className="flex items-center gap-2 px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-lg hover:bg-yellow-500/30 transition">
                            <Download size={18} /> Download PDF
                        </button> */}
                    </div>
                </div>

                {/* Ticket Content - Visa Ready */}
                <div id="ticket-content" className="bg-white rounded-2xl overflow-hidden shadow-2xl print:shadow-none">
                    {/* Ticket Header */}
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-6 text-white">
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-2xl font-bold">WINNING IN WARFARES</h2>
                                <p className="opacity-90">Prophetic & Deliverance Conference 2026</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm opacity-80">OFFICIAL TICKET</p>
                                <p className="font-mono text-sm">{registration.ticketNumber}</p>
                            </div>
                        </div>
                    </div>

                    {/* Ticket Body */}
                    <div className="p-8 text-gray-800">
                        {/* Visa Information Section - CRITICAL */}
                        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded">
                            <p className="text-green-800 text-sm font-semibold mb-1">✓ THIS IS AN OFFICIAL EVENT INVITATION</p>
                            <p className="text-green-700 text-xs">Valid for Australian visa application purposes. This confirms legitimate religious event attendance.</p>
                        </div>

                        {/* Registrant Details */}
                        <div className="border-b pb-4 mb-4">
                            <h3 className="font-bold text-lg mb-3 flex items-center gap-2"><User size={18} /> Registrant Information</h3>
                            <div className="grid grid-cols-2 gap-3 text-sm">
                                <div>
                                    <p className="text-gray-500">Full Name</p>
                                    <p className="font-semibold">{registration.fullName}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">Passport Number</p>
                                    <p className="font-semibold">{registration.passportNumber || 'See email confirmation'}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">Email Address</p>
                                    <p className="font-semibold">{registration.email}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">Phone Number</p>
                                    <p className="font-semibold">{registration.phone}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">Country of Origin</p>
                                    <p className="font-semibold">{registration.country}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">Registration Date</p>
                                    <p className="font-semibold">{registration.registrationDate}</p>
                                </div>
                            </div>
                        </div>

                        {/* Event Details */}
                        <div className="border-b pb-4 mb-4">
                            <h3 className="font-bold text-lg mb-3 flex items-center gap-2"><Calendar size={18} /> Event Details</h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Event Name:</span>
                                    <span className="font-semibold">Winning in Warfares Conference</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Dates:</span>
                                    <span className="font-semibold">July 2-5, 2026</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Venue:</span>
                                    <span className="font-semibold">Deeper Life Bible Church Auditorium</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Address:</span>
                                    <span className="font-semibold">49-51 Cameron Street, Cranbourne VIC 3977</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Minister:</span>
                                    <span className="font-semibold">Pastor William F. Kumuyi</span>
                                </div>
                            </div>
                        </div>

                        {/* QR Code Placeholder */}
                        <div className="text-center pt-4">
                            <div className="inline-block p-3 bg-gray-100 rounded-lg">
                                <div className="w-24 h-24 bg-gray-300 flex items-center justify-center text-xs text-gray-500">
                                    [QR CODE]
                                </div>
                            </div>
                            <p className="text-xs text-gray-400 mt-2">Scan to verify registration</p>
                        </div>

                        {/* Official Stamp */}
                        <div className="text-center mt-6 pt-4 border-t">
                            <div className="inline-block border-2 border-gray-300 rounded px-6 py-2 opacity-50">
                                <p className="text-xs text-gray-500">OFFICIAL SEAL</p>
                                <p className="text-xs text-gray-400">Deeper Life Bible Church Australia</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="text-center text-gray-500 text-xs mt-8 no-print">
                    <p>This is your official registration confirmation. Please present this (printed or digital) at event check-in.</p>
                    <p className="mt-2">For visa verification, immigration officers can contact visa-verify@dclm-au.org</p>
                </div>
            </div>
        </div>
    );
}