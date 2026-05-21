import AppLayout from "../../components/layout/AppLayout";

import PremiumPlans from "../../components/premium/PremiumPlans";

export default function PremiumPage() {
  return (
    <AppLayout>

      <div className="p-8">

        <PremiumPlans />

      </div>

    </AppLayout>
  );
}