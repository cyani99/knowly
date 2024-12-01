import Link from "next/link";
import Image from "next/image";
import { SignInButton } from "@/components/Buttons";

export default function NavMenu(){
  return (
    <nav className="flex justify-between p-2 bg-slate-400 rounded-b-lg">
      <Link href="/">
        <Image src="/next.svg" width={200} height={30} alt="Logo temp"></Image>
      </Link>
      <ul className="flex gap-2 justify-center items-center">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
        <li>
          <SignInButton/>
        </li>
      </ul>
    </nav>
  );
}