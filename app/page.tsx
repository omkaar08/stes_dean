"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/Header";
import Footer from "@/components/Footer";
import DashboardContent from "@/components/DashboardContent";
import GradeSubmissions from "@/components/GradeSubmissions";

export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const renderContent = () => {
    switch (activeTab) {
      case "grade-submissions":
        return <GradeSubmissions />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <TopBar onMenuClick={toggleSidebar} />
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={toggleSidebar}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 pt-24 sm:pt-16 overflow-auto">
        {renderContent()}
        <Footer />
      </main>
    </div>
  );
}
