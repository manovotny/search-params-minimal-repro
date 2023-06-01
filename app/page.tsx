import Link from "next/link";

export default function Home() {
  return (
    <>
      <p>
        This app uses a dynamic route path,{" "}
        <code className="font-mono font-bold">[id]</code>.
      </p>
      <p>
        The edge runtime page will incorrectly include the route path parameter
        as a search param.
      </p>
      <p>
        Node runtime link ✅:&nbsp;
        <Link href="/node/123?a=b">
          <code className="font-mono font-bold">/node/123?a=b</code>
        </Link>
      </p>
      <p>
        Edge runtime link ❌:&nbsp;
        <Link href="/edge/123?a=b">
          <code className="font-mono font-bold">/edge/123?a=b</code>
        </Link>
      </p>
    </>
  );
}
