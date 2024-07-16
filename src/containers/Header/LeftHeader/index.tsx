'use client';
import AddyLogo from '@/assets/images/addy-logo.png';
import Image from "next/image";
import Link from "next/link";
import LeftIcon from '@/assets/svg/left-arrow.svg';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux';
import { OrganizationModel } from '@/models';

const LeftHeader = () => {
  const pathname = usePathname();
  const storeConfig= useSelector<RootState, OrganizationModel[]>(
    (state) => state.storeStore.stores
  );
  if (pathname === "/") {
    return (
      <Link href="/">
        <Image
          src={storeConfig[0]?.logoMetadata?.[0]?.downloadUrl || AddyLogo}
          alt="Shop Logo"
          width={1000}
          height={1000}
          className="md:h-10 md:w-20 h-8 w-14"
          priority
        />
      </Link>
    )
  } else {
    return (
      <Link href="/">
        <Image
          src={LeftIcon}
          alt="Back Icon"
          width={1000}
          height={1000}
          className="h-8 w-8"
          priority
        />
      </Link>
    )
  }

}
export default LeftHeader;