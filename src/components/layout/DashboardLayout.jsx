import React, { useState } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { LayoutDashboard, CalendarPlus, Ticket, BarChart3, Users, Settings, Bell, Search, Menu, X, PlusCircle } from 'lucide-react';

const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navigation = [
        { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
        { name: 'Events', href: '/events/create', icon: CalendarPlus },
        { name: 'Attendees', href: '/attendees', icon: Users },
        { name: 'Analytics', href: '/analytics', icon: BarChart3 },
        { name: 'Settings', href: '/settings', icon: Settings },
    ];

    return (
        <div className="flex h-screen bg-surface-muted overflow-hidden">
            {/* Mobile sidebar backdrop */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-20 bg-gray-900/50 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-600 text-white font-bold">E</div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-700 to-brand-500">EventCraft</span>
                    </Link>
                    <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gray-500 hover:text-gray-700">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex flex-col h-[calc(100vh-4rem)] p-4 justify-between">
                    <nav className="space-y-1">
                        {navigation.map((item) => {
                            const Icon = item.icon;
                            return (
                                <NavLink
                                    key={item.name}
                                    to={item.href}
                                    className={({ isActive }) =>
                                        `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive
                                            ? 'bg-brand-50 text-brand-700'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                        }`
                                    }
                                >
                                    <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
                                    {item.name}
                                </NavLink>
                            );
                        })}
                    </nav>

                    <div className="mt-auto pb-4">
                        <div className="p-4 bg-brand-50 rounded-xl">
                            <h4 className="font-semibold text-brand-800 text-sm mb-1">Upgrade to Pro</h4>
                            <p className="text-xs text-brand-600 mb-3">Unlock advanced automation options.</p>
                            <button className="w-full text-xs font-semibold py-2 px-3 bg-white text-brand-700 rounded-lg shadow-sm hover:shadow transition-shadow">
                                View Plans
                            </button>
                        </div>
                        <div className="flex items-center gap-3 mt-6 px-4">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-400 to-brand-600 flex items-center justify-center text-white font-semibold text-sm">
                                JD
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-gray-900">John Doe</span>
                                <span className="text-xs text-gray-500">Event Organizer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Column */}
            <div className="flex flex-col flex-1 overflow-hidden">
                {/* Top Header */}
                <header className="flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200 sm:px-6 z-10">
                    <button className="lg:hidden text-gray-500 focus:outline-none" onClick={() => setSidebarOpen(true)}>
                        <Menu className="w-6 h-6" />
                    </button>

                    <div className="flex-1 flex justify-center lg:justify-start px-4 sm:px-6">
                        <div className="relative w-full max-w-md hidden md:block">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <Search className="w-4 h-4 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full py-2 pl-10 pr-3 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors placeholder-gray-400"
                                placeholder="Search events, attendees, or tickets..."
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="text-gray-400 hover:text-gray-600 transition-colors relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-0 right-0 block w-2 h-2 rounded-full bg-red-500 ring-2 ring-white" />
                        </button>
                        <Link to="/events/create" className="hidden sm:flex items-center gap-2 btn-primary py-1.5 text-sm">
                            <PlusCircle className="w-4 h-4" />
                            Create Event
                        </Link>
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="flex-1 relative overflow-y-auto focus:outline-none">
                    <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto h-full">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
