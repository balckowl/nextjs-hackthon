"use client"
import { useEffect } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { RxCross2 } from 'react-icons/rx';

type Props = {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
};

export default function AlertPopup({ value, setValue }: Props) {
  useEffect(() => {
    if (value) {
      const timer = setTimeout(() => {
        setValue(false);
      }, 3000); 

      return () => clearTimeout(timer)
    }
  }, [value, setValue]);

  return (
    <div>
      {value && (
        <div className="bg-success text-white rounded-md w-max px-5 py-4 font-bold text-[20px] absolute bottom-[25px] right-[25px] flex items-center gap-2">
          コードをコピーしました
          <button type="button" onClick={() => setValue(false)}>
            <RxCross2 fontWeight={600} size={25} />
          </button>
        </div>
      )}
    </div>
  );
}
