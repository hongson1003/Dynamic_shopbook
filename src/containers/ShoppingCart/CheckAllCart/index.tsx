'use client';
import ConfirmDeleteModal from '@/components/DeleteModal';
import { ItemCartModel } from '@/models/itemCartModel';
import { removeFullItems, setFullListItems } from '@/redux/slices/cart-slice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CheckAllCart = ({ items }: { items: ItemCartModel[] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const cartStore = useSelector((state: any) => state.cartStore);

  const handleOnChange = (checked: boolean) => {
    if (checked) dispatch(setFullListItems(items as ItemCartModel[]));
    else dispatch(removeFullItems());
  };

  const handleConfirmDelete = () => {
    localStorage.removeItem('@cart');
    dispatch(removeFullItems());
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-between rounded-lg bg-white p-2 shadow-md">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="form-checkbox text-blue-600 transition duration-150 ease-in-out"
            onChange={(e) => handleOnChange(e.target.checked)}
            checked={cartStore.checkList.length === items?.length}
          />
          <p className="text-sm font-semibold text-gray-700">Chọn tất cả ({items?items.length:0} sản phẩm)</p>
        </div>
        <div className="flex flex-1 justify-end">
          <button
            onClick={() => setIsModalOpen(true)}
            className={`text-sm font-bold text-red-500 ${cartStore.total === 0 ? 'hidden' : ''}`}
          >
            Xóa
          </button>
        </div>
      </div>
      <ConfirmDeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => handleConfirmDelete()}
        title="Bạn có chắc muốn xóa sản phẩm này khỏi giỏ hàng không?"
      />
    </>
  );
};

export default CheckAllCart;
