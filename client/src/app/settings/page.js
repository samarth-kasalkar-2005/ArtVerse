import AppLayout from "../../components/layout/AppLayout";

import SettingsPanel from "../../components/settings/SettingsPanel";

export default function SettingsPage() {
  return (
    <AppLayout>

      <div className="p-8">

        <SettingsPanel />

      </div>

    </AppLayout>
  );
}