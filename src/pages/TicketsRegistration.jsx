import React from 'react';
import { Tag, Users, MoreVertical, Plus, DollarSign } from 'lucide-react';

const TicketsRegistration = () => {
    const tickets = [
        { id: 1, name: 'Early Bird', price: 149, capacity: 100, sold: 85, status: 'Active' },
        { id: 2, name: 'General Admission', price: 299, capacity: 500, sold: 120, status: 'Active' },
        { id: 3, name: 'VIP Pass', price: 599, capacity: 50, sold: 50, status: 'Sold Out' },
    ];

    return (
        <div className="space-y-6 max-w-5xl mx-auto w-full animate-fade-in">
            <div className="flex justify-between items-center border-b border-gray-200 pb-5">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Tickets & Registration</h1>
                    <p className="text-sm text-gray-500 mt-1">Create ticket tiers, manage pricing, and track sales.</p>
                </div>
                <button className="btn-primary flex items-center gap-2 text-sm">
                    <Plus className="w-4 h-4" /> Create Ticket Tier
                </button>
            </div>

            {/* Ticket Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="card !p-5 flex items-center gap-4 bg-gradient-to-br from-brand-50 to-white">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-600">
                        <DollarSign className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Total Revenue</p>
                        <h3 className="text-2xl font-bold text-gray-900">$84,500</h3>
                    </div>
                </div>
                <div className="card !p-5 flex items-center gap-4 bg-gradient-to-br from-green-50 to-white">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-green-600">
                        <Tag className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Tickets Sold</p>
                        <h3 className="text-2xl font-bold text-gray-900">255 / 650</h3>
                    </div>
                </div>
                <div className="card !p-5 flex items-center gap-4 bg-gradient-to-br from-blue-50 to-white">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600">
                        <Users className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Waitlist</p>
                        <h3 className="text-2xl font-bold text-gray-900">14</h3>
                    </div>
                </div>
            </div>

            {/* Ticket Management Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 mt-6 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900">Ticket Tiers</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white border-b border-gray-200">
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Ticket Name</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Price</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">Sold / Capacity</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {tickets.map((t) => (
                                <tr key={t.id} className="hover:bg-gray-50/80 transition-colors">
                                    <td className="px-6 py-4">
                                        <span className="font-medium text-gray-900">{t.name}</span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <span className="font-semibold text-gray-700">${t.price}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col items-center justify-center">
                                            <span className="text-sm font-medium text-gray-900">{t.sold} / {t.capacity}</span>
                                            <div className="w-24 h-1.5 bg-gray-200 rounded-full mt-2 overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${t.sold === t.capacity ? 'bg-red-500' : 'bg-brand-500'}`}
                                                    style={{ width: `${(t.sold / t.capacity) * 100}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${t.status === 'Sold Out' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                                            }`}>
                                            {t.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                            <MoreVertical className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TicketsRegistration;
