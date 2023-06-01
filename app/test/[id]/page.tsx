import { ClientComponent } from "./client-component";

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
      <p>
        Page <code className="font-mono font-bold">params</code>:{" "}
        {JSON.stringify(params)}
      </p>
      <p>
        Page <code className="font-mono font-bold">searchParams</code>:{" "}
        {JSON.stringify(searchParams)} 👈{" "}
        <code className="font-mono font-bold">id</code> should{" "}
        <span className="font-bold">NOT</span> be there.
      </p>
      <ClientComponent />
    </>
  );
}
