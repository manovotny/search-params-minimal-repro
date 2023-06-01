"use client";

import { useSearchParams } from "next/navigation";

export function ClientComponent() {
  const searchParams = useSearchParams();

  return (
    <p>
      Client Component <code className="font-mono font-bold">searchParams</code>
      : {searchParams.toString()}
    </p>
  );
}
