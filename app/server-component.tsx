export function ServerComponent({
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
    </>
  );
}
