import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <p>
      To repro, please navigate to:&nbsp;
      <Link href="/test/123?a=b">
        <code className="font-mono font-bold">/test/123?a=b</code>
      </Link>
    </p>
  );
}
