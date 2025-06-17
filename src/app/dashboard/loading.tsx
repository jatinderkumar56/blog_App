import LoadingPage from '@/components/LoadingScreen/Loading';
import React from 'react';

const DashboardLoadingScreen = () => {
  const name="Dashboard"
  const para="dashboard"
  return (
    <div><LoadingPage name={name} para={para} /></div>
  )
};

export default DashboardLoadingScreen;