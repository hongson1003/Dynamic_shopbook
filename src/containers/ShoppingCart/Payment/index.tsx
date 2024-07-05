import { ProductModel } from '@/models';
import { ItemCartModel } from '@/models/itemCartModel';
import { formatCurrencyVND } from '@/ultils/number';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Payment = ({ items }: { items: ItemCartModel[] }) => {
  const [total, setTotal] = useState(0);
  const cartStore = useSelector((state: any) => state.cartStore);
  const checkIsChecked = (item: ItemCartModel) => {
    return cartStore.checkList.some(
      (checkItem: ProductModel) => checkItem.id === item.id,
    );
  };
  const getTotalCartItems = (items: ItemCartModel[]) => {
    let total = 0;
    if (items) {
      items.map((item) => {
        if (item.price && item.quantity && checkIsChecked(item)) {
          total += item.price * item.quantity;
        }
      });
      setTotal(total);
    }
  };
  useEffect(() => {
    getTotalCartItems(items);
  }, [items]);
  return (
    <div className="py-4 flex w-full justify-end bg-white p-2 shadow-md dark:bg-gray-800 fixed inset-x-0 bottom-0">
      <div className='flex flex-1 flex-col mr-4'>
        <p className='text-sm font-semibold text-right text-white'>Tổng thanh toán</p>
        <p className='text-md font-semibold text-red-600 text-right'>{formatCurrencyVND(total)}</p>
      </div>
      <button className="mt-auto bg-[--bg-header] py-3 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
        Chuyển đến App để thanh toán
      </button>
    </div>
  );
};
export default Payment;
