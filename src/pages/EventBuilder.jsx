import React, { useState } from 'react';
import { Layers, Move, Plus, Settings2, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

const EventBuilder = () => {
    const [activeTab, setActiveTab] = useState('details');

    return (
        <div className="space-y-6 max-w-5xl mx-auto w-full">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 pb-5 gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Create New Event</h1>
                    <p className="text-sm text-gray-500 mt-1">Configure your event details and drag-and-drop modules.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="btn-secondary text-sm">Save Draft</button>
                    <button className="btn-primary text-sm">Publish Event</button>
                </div>
            </div>

            {/* Builder Layout */}
            <div className="flex flex-col lg:flex-row gap-6 mt-6">

                {/* Sidebar Settings / Modules Panel */}
                <div className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-4">
                    <div className="card !p-4">
                        <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Configuration</h3>
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={() => setActiveTab('details')}
                                className={`flex items-center justify-between p-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'details' ? 'bg-brand-50 text-brand-700 border border-brand-200' : 'text-gray-600 hover:bg-gray-50 border border-transparent'}`}
                            >
                                <div className="flex items-center gap-3"><Settings2 className="w-4 h-4" /> Basics</div>
                                {activeTab === 'details' && <ChevronRight className="w-4 h-4" />}
                            </button>
                            <button
                                onClick={() => setActiveTab('modules')}
                                className={`flex items-center justify-between p-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'modules' ? 'bg-brand-50 text-brand-700 border border-brand-200' : 'text-gray-600 hover:bg-gray-50 border border-transparent'}`}
                            >
                                <div className="flex items-center gap-3"><Layers className="w-4 h-4" /> Custom Modules</div>
                                {activeTab === 'modules' && <ChevronRight className="w-4 h-4" />}
                            </button>
                        </div>

                        {/* AI Suggestion Box */}
                        <div className="mt-6 p-4 bg-gradient-to-br from-indigo-50 to-brand-50 rounded-xl border border-indigo-100 relative overflow-hidden">
                            <Sparkles className="w-5 h-5 text-indigo-500 mb-2" />
                            <h4 className="text-sm font-bold text-indigo-900 mb-1">AI Event Wizard</h4>
                            <p className="text-xs text-indigo-700 mb-3">Describe your event and let AI suggest the perfect modules & schedule.</p>
                            <button className="w-full bg-white text-indigo-700 text-xs font-semibold py-2 rounded-lg shadow-sm border border-indigo-100 hover:shadow transition-all">Generate Blueprint</button>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 card flex flex-col min-h-[500px]">
                    {activeTab === 'details' ? (
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-lg font-bold text-gray-900 border-b pb-2 mb-4">Event Basics</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Event Title</label>
                                        <input type="text" className="input-field" placeholder="e.g. Annual Tech Symposium" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Description</label>
                                        <textarea rows="4" className="input-field" placeholder="What is this event about..."></textarea>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Format</label>
                                            <select className="input-field">
                                                <option>Hybrid (In-person & Virtual)</option>
                                                <option>Virtual Only</option>
                                                <option>In-person Only</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Category</label>
                                            <select className="input-field">
                                                <option>Conference</option>
                                                <option>Webinar</option>
                                                <option>Meetup</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-6 flex flex-col h-full">
                            <h2 className="text-lg font-bold text-gray-900 border-b pb-2 mb-4 flex items-center gap-2">
                                <Layers className="w-5 h-5 text-gray-500" />
                                Drag & Drop Modules
                            </h2>
                            <div className="flex-1 bg-gray-50 border border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center p-8 text-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                                    <Plus className="w-8 h-8 text-gray-400" />
                                </div>
                                <h3 className="text-sm font-bold text-gray-900">Drag modules here</h3>
                                <p className="text-xs text-gray-500 mt-2 max-w-[200px]">Build your event page layout by pulling cards from the sidebar.</p>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default EventBuilder;
