import React from "react";
import Header from "../../components/common/Header";
import InventoryManagementHeader from "../../components/dashboard/InventoryManagementHeader";
import StatsGrid from "../../components/dashboard/StatsGrid";
import MetricsGrid from "../../components/dashboard/MetricsGrid";
import ForecastSection from "../../components/dashboard/ForecastSection";
import AISuggestions from "../../components/dashboard/AISuggestions";
import StarPerformers from "../../components/dashboard/StarPerformers";
import ServicePerformance from "../../components/dashboard/ServicePerformance";
import GrowthOpportunities from "../../components/dashboard/GrowthOpportunities";
import InventoryIntelligence from "../../components/dashboard/InventoryIntelligence";
import InventoryTable from "../../components/dashboard/InventoryTable";

const Dashboard = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
            <div className="flex h-screen overflow-hidden">
                <main className="flex-1 overflow-y-auto p-6 md:p-8">
                    <Header />
                    <InventoryManagementHeader />
                    <StatsGrid />
                    <MetricsGrid />
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                        <ForecastSection />
                        <AISuggestions />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <StarPerformers />
                        <ServicePerformance />
                        <GrowthOpportunities />
                    </div>
                    <InventoryIntelligence />
                    <InventoryTable />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
