
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import DashboardPage from './pages/DashboardPage';
import CalendarPage from './pages/CalendarPage';
import ReservationsPage from './pages/ReservationsPage';
import PropertiesPage from './pages/PropertiesPage';
import CustomersPage from './pages/CustomersPage';
import AccountingPage from './pages/AccountingPage';
import PaymentsPage from './pages/PaymentsPage'; 
import SettingsPage from './pages/SettingsPage'; 
import EmployeesPage from './pages/EmployeesPage';
import RestaurantPage from './pages/RestaurantPage';
import InventoryPage from './pages/InventoryPage';
import MaintenancePage from './pages/MaintenancePage';
import MarketingPage from './pages/MarketingPage';
import HousekeepingPage from './pages/HousekeepingPage';
import GuestFeedbackPage from './pages/GuestFeedbackPage';
import AnalyticsPage from './pages/AnalyticsPage'; // New Import for Analytics

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/reservations" element={<ReservationsPage />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/housekeeping" element={<HousekeepingPage />} /> 
          <Route path="/restaurant" element={<RestaurantPage />} /> 
          <Route path="/maintenance" element={<MaintenancePage />} />
          <Route path="/marketing" element={<MarketingPage />} />
          <Route path="/guest-feedback" element={<GuestFeedbackPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} /> {/* New Route for Analytics */}
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/employees" element={<EmployeesPage />} /> 
          <Route path="/accounting" element={<AccountingPage />} />
          <Route path="/inventory" element={<InventoryPage />} /> 
          <Route path="/payments" element={<PaymentsPage />} /> 
          <Route path="/settings" element={<SettingsPage />} /> 
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;