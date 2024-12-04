import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { getPosts } from "../../services/api";

export const Route = createFileRoute("/notes/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { isLoading, data } = useQuery({
    queryKey: ["todos"],
    queryFn: getPosts,
  });

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>{data && data.map((d) => <p key={d.id}>{d.title}</p>)}</div>
      )}
    </div>
  );
}
