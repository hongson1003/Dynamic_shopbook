'use client';
import AddyLogo from '@/assets/images/addy-logo.png';
import Image from "next/image";
import Link from "next/link";
import LeftIcon from '@/assets/svg/left-arrow.svg';
import { usePathname } from 'next/navigation';

const LeftHeader = () => {
  const pathname = usePathname();
  if (pathname === "/") {
    return (
      <Link href="/">
        <Image
          src={AddyLogo}
          alt="Shop Logo"
          width={1000}
          height={1000}
          className="h-10 w-20"
          priority
        />
      </Link>
    )
  } else {
    return (
      <Link href="/">
        <Image
          src={LeftIcon}
          alt="Shop Logo"
          width={1000}
          height={1000}
          className="h-10 w-10"
          priority
        />
      </Link>
    )
  }

}
export default LeftHeader;