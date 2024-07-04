import React from 'react';
import { footerConfig } from '../../../footerConfig';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-2 text-white md:p-4">
      <div className="container mx-auto w-full">
        <div className="rounded-md bg-gray-900 p-2 shadow-md md:p-4">
          <h2 className="mb-2 text-sm font-bold">{footerConfig.companyName}</h2>
          <p className="mb-2 text-sm">Địa chỉ: {footerConfig.address}</p>
          <p className="mb-2 text-sm">
            Email:{' '}
            <a
              href={`mailto:${footerConfig.email}`}
              className="text-sm text-blue-400"
            >
              {footerConfig.email}
            </a>
          </p>
          <p className="mb-2 text-sm">
            Điện thoại:{' '}
            <a href={`tel:${footerConfig.phone}`} className="text-blue-400">
              {footerConfig.phone}
            </a>
          </p>
          <p className="mb-2 text-sm">Mã số thuế: {footerConfig.vat}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
