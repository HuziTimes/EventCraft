import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Plus, MoveVertical } from 'lucide-react';

const AgendaPlanner = () => {
    const [days] = useState(['Day 1 - Oct 15', 'Day 2 - Oct 16']);
    const [activeDay, setActiveDay] = useState(0);

    const sessions = [
        { id: 1, time: '09:00 AM - 10:00 AM', title: 'Keynote Demo', speaker: 'Fatima Tariq', location: 'Main Stage' },
        { id: 2, time: '10:15 AM - 11:30 AM', title: 'Future of AI in Events', speaker: 'Dr. Usman Raza', location: 'Room A' },
        { id: 3, time: '11:45 AM - 12:45 PM', title: 'Networking Lunch', speaker: 'All Attendees', location: 'Dining Hall' },
    ];

    return (
        <div className="space-y-6 max-w-5xl mx-auto w-full animate-fade-in">
            <div className="flex justify-between items-center border-b border-gray-200 pb-5">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Agenda Planner</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage schedules, speakers, and breakout rooms.</p>
                </div>
                <button className="btn-primary flex items-center gap-2 text-sm">
                    <Plus className="w-4 h-4" /> Add Session
                </button>
            </div>

            <div className="flex gap-4 border-b border-gray-200">
                {days.map((day, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveDay(idx)}
                        className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeDay === idx
                            ? 'border-brand-600 text-brand-700'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                    >
                        {day}
                    </button>
                ))}
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="space-y-4">
                    {sessions.map((session, i) => (
                        <div key={session.id} className="group relative flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-white hover:border-brand-300 hover:shadow-md transition-all">
                            {/* Drag Handle */}
                            <div className="flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-grab h-full text-gray-400 absolute left-2 top-0 bottom-0">
                                <MoveVertical className="w-5 h-5" />
                            </div>

                            {/* Time Block */}
                            <div className="w-40 flex-shrink-0 text-right pr-4 border-r border-gray-100 hidden sm:block">
                                <p className="text-sm font-semibold text-brand-700">{session.time.split('-')[0]}</p>
                                <p className="text-xs text-gray-500">{session.time.split('-')[1]}</p>
                            </div>

                            {/* Session Details */}
                            <div className="flex-1 sm:pl-4">
                                <h3 className="text-base font-bold text-gray-900 leading-tight">{session.title}</h3>

                                <div className="flex flex-wrap gap-4 mt-3">
                                    <div className="flex items-center text-xs text-gray-600 gap-1.5 bg-gray-50 px-2 py-1 rounded-md">
                                        <Users className="w-3.5 h-3.5" />
                                        {session.speaker}
                                    </div>
                                    <div className="flex items-center text-xs text-gray-600 gap-1.5 bg-gray-50 px-2 py-1 rounded-md">
                                        <MapPin className="w-3.5 h-3.5" />
                                        {session.location}
                                    </div>
                                </div>
                            </div>

                            <button className="text-sm text-brand-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                Edit
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AgendaPlanner;
