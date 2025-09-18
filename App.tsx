
import React, { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import { UserRole } from './types';

import Login from './components/auth/Login';
import StudentLayout from './components/layout/StudentStaffLayout';
import AdminLayout from './components/layout/AdminLayout';
import Notification from './components/common/Notification';

const App: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const { currentUser, notification, theme } = state;

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleCloseNotification = () => {
    dispatch({ type: 'CLEAR_NOTIFICATION' });
  };

  const AppContent = () => {
    if (!currentUser) {
      return <Login />;
    }
  
    switch (currentUser.role) {
      case UserRole.STUDENT:
        return <StudentLayout />;
      case UserRole.STAFF:
        return <StudentLayout />; // Staff uses the same layout as Student
      case UserRole.ADMIN:
        return <AdminLayout />;
      default:
        return <Login />;
    }
  }

  return (
    <>
      {notification && <Notification message={notification.message} type={notification.type} onClose={handleCloseNotification} />}
      <AppContent />
    </>
  );
};

export default App;