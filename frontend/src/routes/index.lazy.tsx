import { createLazyFileRoute } from "@tanstack/react-router";

import CustomHeader from "@/components/global/custom-header";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <CustomHeader />
    </div>
  );
}
