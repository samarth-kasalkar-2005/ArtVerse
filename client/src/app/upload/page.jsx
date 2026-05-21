"use client";

import AppLayout from "../../components/layout/AppLayout";

import ProtectedRoute from "../../components/auth/ProtectedRoute";

import UploadForm from "../../components/upload/UploadForm";

export default function UploadPage() {

  return (
    <ProtectedRoute>

      <AppLayout>

        <div className="p-8">

          <h1 className="text-3xl sm:text-5xl font-bold mb-8">
            Upload Artwork
          </h1>

          <UploadForm />

        </div>

      </AppLayout>

    </ProtectedRoute>
  );
}