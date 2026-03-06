import React from 'react';
import { Search, Filter, Download, MoreHorizontal, CheckCircle } from 'lucide-react';

const Attendees = () => {
    const attendees = [
        { id: 1, name: 'Ayesha Khan', email: 'ayesha@example.com', ticket: 'VIP Pass', status: 'Checked In', date: 'Oct 15, 2026' },
        { id: 2, name: 'Bilal Qureshi', email: 'bilal@example.com', ticket: 'General Admission', status: 'Registered', date: 'Oct 14, 2026' },
        { id: 3, name: 'Saad Mian', email: 'saad@example.com', ticket: 'Early Bird', status: 'Registered', date: 'Oct 10, 2026' },
        { id: 4, name: 'Zoya Ali', email: 'zoya@example.com', ticket: 'VIP Pass', status: 'Checked In', date: 'Oct 15, 2026' },
        { id: 5, name: 'Omar Farooq', email: 'omar@example.com', ticket: 'General Admission', status: 'Registered', date: 'Oct 15, 2026' },
    ];

    return (
        <div className="space-y-6 max-w-6xl mx-auto w-full animate-fade-in">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 pb-5 gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Attendees</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage registrations, check-ins, and attendee communications.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="btn-secondary text-sm flex items-center gap-2">
                        <Download className="w-4 h-4" /> Export CSV
                    </button>
                    <button className="btn-primary text-sm flex items-center gap-2">
                        Add Attendee
                    </button>
                </div>
            </div>

            {/* Tools */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative w-full max-w-md">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Search className="w-4 h-4 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full py-2 pl-10 pr-3 text-sm border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                        placeholder="Search by name, email, or ticket number..."
                    />
                </div>
                <button className="btn-secondary text-sm flex items-center gap-2 w-full sm:w-auto justify-center">
                    <Filter className="w-4 h-4" /> Filters
                </button>
            </div>

            {/* Table */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Ticket Tier</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Registration Date</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {attendees.map((attendee) => (
                                <tr key={attendee.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-xs uppercase shadow-sm">
                                                {attendee.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900">{attendee.name}</p>
                                                <p className="text-xs text-gray-500">{attendee.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm text-gray-700 font-medium">{attendee.ticket}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${attendee.status === 'Checked In' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                                            }`}>
                                            {attendee.status === 'Checked In' && <CheckCircle className="w-3.5 h-3.5" />}
                                            {attendee.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm text-gray-500">{attendee.date}</span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
                                            <MoreHorizontal className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500">Showing <span className="font-semibold text-gray-900">1</span> to <span className="font-semibold text-gray-900">5</span> of <span className="font-semibold text-gray-900">1,204</span> attendees</p>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-50 transition-colors">Previous</button>
                        <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Attendees;
