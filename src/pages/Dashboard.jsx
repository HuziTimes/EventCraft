import React from 'react';
import { ArrowUpRight, Users, Ticket, Activity, CalendarDays, MoreVertical } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const stats = [
        { label: 'Total Registrations', value: '12,450', change: '+14%', icon: Users },
        { label: 'Revenue Generated', value: '$84,500', change: '+22%', icon: Ticket },
        { label: 'Active Events', value: '4', change: '0%', icon: CalendarDays },
        { label: 'Attendee Interaction', value: '88%', change: '+5%', icon: Activity },
    ];

    const recentEvents = [
        { id: '1', title: 'Developer Summit 2026', type: 'Hybrid', date: 'Oct 15, 2026', status: 'Published', registrations: 1204 },
        { id: '2', title: 'Tech Startup Mixer', type: 'Onsite', date: 'Nov 02, 2026', status: 'Draft', registrations: 45 },
        { id: '3', title: 'AI Automation Webinar', type: 'Virtual', date: 'Dec 10, 2026', status: 'Published', registrations: 890 },
    ];

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Welcome back, John 👋</h1>
                    <p className="text-sm text-gray-500 mt-1">Here is what's happening with your events today.</p>
                </div>
                <Link to="/events/create" className="btn-primary w-full md:w-auto">
                    Create New Event
                </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, i) => {
                    const Icon = stat.icon;
                    const isPositive = stat.change.startsWith('+');
                    return (
                        <div key={i} className="card flex flex-col p-5 group">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 bg-brand-50 rounded-lg group-hover:bg-brand-100 transition-colors">
                                    <Icon className="w-5 h-5 text-brand-600" />
                                </div>
                                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${isPositive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                                    {stat.change}
                                </span>
                            </div>
                            <h3 className="text-gray-500 text-sm font-medium">{stat.label}</h3>
                            <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                        </div>
                    )
                })}
            </div>

            {/* Recent Events List */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-base font-semibold text-gray-900">Recent Events</h2>
                    <a href="#" className="text-sm font-medium text-brand-600 hover:text-brand-500 flex items-center gap-1">
                        View all <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50">
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Event Name</th>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Format</th>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">Registrations</th>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {recentEvents.map((evt) => (
                                <tr key={evt.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-sm font-medium text-gray-900">{evt.title}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-sm text-gray-500">{evt.type}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-sm text-gray-500">{evt.date}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${evt.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {evt.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                        <span className="text-sm font-semibold text-gray-900">{evt.registrations}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                                        <button className="text-gray-400 hover:text-gray-600"><MoreVertical className="w-5 h-5" /></button>
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

export default Dashboard;
