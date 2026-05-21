"use client";

import AppLayout from "../../components/layout/AppLayout";

import ProtectedRoute from "../../components/auth/ProtectedRoute";

import ProfileHeader from "../../components/profile/ProfileHeader";

import ProfileStats from "../../components/profile/ProfileStats";

import PortfolioGrid from "../../components/profile/PortfolioGrid";

export default function ProfilePage() {

  return (
    <ProtectedRoute>

      <AppLayout>

        <ProfileHeader />

        <div className="p-8">

          <ProfileStats />

          <PortfolioGrid />

        </div>

      </AppLayout>

    </ProtectedRoute>
  );
}