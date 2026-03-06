import React from 'react';
import { BarChart3, TrendingUp, Users, Eye, ArrowUpRight } from 'lucide-react';

const Analytics = () => {
    return (
        <div className="space-y-6 max-w-6xl mx-auto w-full animate-fade-in">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 pb-5 gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Analytics & Insights</h1>
                    <p className="text-sm text-gray-500 mt-1">Track event performance, attendee engagement, and conversion rates.</p>
                </div>
                <div className="flex items-center gap-3">
                    <select className="input-field !mt-0 !py-1.5 text-sm bg-white cursor-pointer shadow-sm">
                        <option>Last 30 Days</option>
                        <option>Last 7 Days</option>
                        <option>All Time</option>
                    </select>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Page Views', value: '45.2K', trend: '+12.5%', icon: Eye, color: 'text-blue-600', bg: 'bg-blue-100' },
                    { label: 'Total Registrations', value: '1,204', trend: '+8.2%', icon: Users, color: 'text-green-600', bg: 'bg-green-100' },
                    { label: 'Conversion Rate', value: '2.6%', trend: '+1.1%', icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-100' },
                    { label: 'Avg. Interaction', value: '78%', trend: '+5.4%', icon: BarChart3, color: 'text-brand-600', bg: 'bg-brand-100' },
                ].map((stat, i) => (
                    <div key={i} className="card !p-5 group hover:-translate-y-1 transition-transform duration-300">
                        <div className="flex items-start justify-between">
                            <div className={`p-2.5 rounded-xl ${stat.bg} shadow-sm group-hover:shadow-md transition-shadow`}>
                                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                            </div>
                            <span className="flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-50 px-2 py-1 rounded-full border border-green-100">
                                <ArrowUpRight className="w-3 h-3" />
                                {stat.trend}
                            </span>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-sm font-medium text-gray-500">{stat.label}</h3>
                            <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Chart Placeholder */}
                <div className="lg:col-span-2 card !p-0 overflow-hidden flex flex-col shadow-sm border-gray-200">
                    <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                        <h3 className="font-semibold text-gray-900">Registration Trends</h3>
                    </div>
                    <div className="p-6 flex-1 flex items-center justify-center bg-white min-h-[300px]">
                        <div className="text-center">
                            <BarChart3 className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                            <p className="text-sm font-medium text-gray-500">Connecting to charting library...</p>
                            <p className="text-xs text-gray-400 mt-1">Data visualization will render here in a future update.</p>
                        </div>
                    </div>
                </div>

                {/* Top Tickets Breakdown */}
                <div className="card !p-0 overflow-hidden flex flex-col shadow-sm border-gray-200">
                    <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50">
                        <h3 className="font-semibold text-gray-900">Top Ticket Types</h3>
                    </div>
                    <div className="p-6 space-y-6 flex-1 bg-white">
                        {[
                            { name: 'General Admission', count: 850, percentage: 70, color: 'bg-brand-500' },
                            { name: 'Early Bird', count: 250, percentage: 20, color: 'bg-blue-500' },
                            { name: 'VIP Pass', count: 104, percentage: 10, color: 'bg-purple-500' },
                        ].map((ticket, i) => (
                            <div key={i} className="group">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-medium text-gray-700">{ticket.name}</span>
                                    <span className="text-sm font-semibold text-gray-900">{ticket.count}</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${ticket.color} group-hover:opacity-80 transition-opacity`}
                                        style={{ width: `${ticket.percentage}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
