import { ServerComponent } from "@/app/server-component";
import { ClientComponent } from "@/app/client-component";

export const runtime = "edge";

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <ServerComponent params={params} searchParams={searchParams} />
      <ClientComponent />
    </>
  );
}
