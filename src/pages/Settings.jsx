import React, { useState } from 'react';
import { User, CreditCard, Bell, Key, Globe, Settings as SettingsIcon } from 'lucide-react';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const tabs = [
        { id: 'profile', name: 'Profile Information', icon: User },
        { id: 'billing', name: 'Billing & Plans', icon: CreditCard },
        { id: 'notifications', name: 'Notifications', icon: Bell },
        { id: 'security', name: 'Security', icon: Key },
        { id: 'domain', name: 'Custom Domain', icon: Globe },
    ];

    return (
        <div className="space-y-6 max-w-5xl mx-auto w-full animate-fade-in">
            <div className="border-b border-gray-200 pb-5">
                <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
                <p className="text-sm text-gray-500 mt-1">Manage your account, billing, and system preferences.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Settings Sidebar */}
                <div className="w-full md:w-64 flex-shrink-0">
                    <nav className="space-y-1 block">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${activeTab === tab.id
                                        ? 'bg-brand-50 text-brand-700 shadow-sm'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-brand-600' : 'text-gray-400'}`} />
                                {tab.name}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Settings Content */}
                <div className="flex-1 card !p-0 overflow-hidden min-h-[500px] border-gray-200 shadow-sm">
                    {activeTab === 'profile' && (
                        <div className="p-6 sm:p-8 space-y-8 animate-fade-in">
                            <div>
                                <h2 className="text-lg font-bold text-gray-900">Profile Information</h2>
                                <p className="text-sm text-gray-500 mt-1">Update your personal details and public profile.</p>
                            </div>
                            <hr className="border-gray-100" />

                            <div className="flex items-center gap-6">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-brand-400 to-brand-600 flex items-center justify-center text-white text-3xl font-bold shadow-md">
                                    ZA
                                </div>
                                <div className="space-y-2">
                                    <div className="flex gap-2">
                                        <button className="btn-secondary text-sm">Upload new photo</button>
                                        <button className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium">Remove</button>
                                    </div>
                                    <p className="text-xs text-gray-500">JPG, GIF or PNG. 1MB max.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                    <input type="text" className="input-field !mt-0 shadow-sm" defaultValue="Zain" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                    <input type="text" className="input-field !mt-0 shadow-sm" defaultValue="Ahmed" />
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input type="email" className="input-field !mt-0 shadow-sm" defaultValue="zain.ahmed@example.com" />
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                                    <textarea rows="4" className="input-field !mt-0 shadow-sm" placeholder="Write a few sentences about yourself."></textarea>
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 pt-6 border-t border-gray-100">
                                <button className="btn-secondary text-sm">Cancel</button>
                                <button className="btn-primary text-sm shadow-sm">Save Changes</button>
                            </div>
                        </div>
                    )}

                    {activeTab !== 'profile' && (
                        <div className="p-12 text-center flex flex-col items-center justify-center h-full animate-fade-in">
                            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 border border-gray-100 shadow-sm">
                                <SettingsIcon className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">Module Under Construction</h3>
                            <p className="text-sm text-gray-500 mt-2 max-w-sm">
                                The {tabs.find(t => t.id === activeTab)?.name} configuration module is currently being finalized and will be available in the next sprint release.
                            </p>
                            <button className="mt-6 btn-secondary text-sm" onClick={() => setActiveTab('profile')}>Go back to Profile</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Settings;
