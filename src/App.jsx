import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import EventBuilder from './pages/EventBuilder';
import AgendaPlanner from './pages/AgendaPlanner';
import TicketsRegistration from './pages/TicketsRegistration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="events/create" element={<EventBuilder />} />
          <Route path="events/:id/agenda" element={<AgendaPlanner />} />
          <Route path="events/:id/tickets" element={<TicketsRegistration />} />
          {/* Add more routes as we build */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
