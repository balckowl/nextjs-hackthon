import type {  ReactNode,  Dispatch,  SetStateAction } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { RxCross2 } from 'react-icons/rx'

export default function ProfileDialog({
  handleSubmitBoxShadow, isShared, setIsShared,children
}: { handleSubmitBoxShadow: () => void, isShared: boolean, setIsShared: Dispatch<SetStateAction<boolean>>, children: ReactNode }) {

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-lg font-semibold text-gray-900 mb-2">
            ブックマークに登録
          </Dialog.Title>

          <div className="grid grid-cols-2 mb-[15px] bg-[#ededed] rounded-md">
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => setIsShared(true)}
                className={`${isShared ? 'bg-primary  text-white' : 'bg-[#ededed] text-[#909090]'} flex-1 font-bold text-[13px] py-[6px] rounded-md`}
              >
                公開
              </button>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => setIsShared(false)}
                className={`${!isShared ? 'bg-primary  text-white' : 'bg-[#ededed] text-[#909090]'} flex-1 font-bold text-[13px] py-[6px] rounded-md`}
              >
                非公開
              </button>
            </div>
          </div>

          <form className="mb-[15px]">
            <label className="block">
              <span className="text-sm font-semibold text-gray-700 mb-1 block">タイトル</span>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                defaultValue="タイトル未設定"
                placeholder="タイトル未設定"
              />
            </label>
          </form>

          <div className="bg-secondary text-primary font-bold py-3 px-4 rounded-md mb-[15px]">
            <h3 className="text-[12px] mb-[8px]">公開される情報</h3>
            <ul className="text-[10px] space-y-[4px] list-disc list-inside">
              <li>アカウントのアイコン</li>
              <li>作品のタイトル</li>
              <li>アカウントの表示名</li>
              <li>作品のプリセット</li>
            </ul>
          </div>

          <div className="flex  gap-3">
            <Dialog.Close asChild className="flex-1">
              <button type="button" onClick={handleSubmitBoxShadow} className='border py-2 rounded-md hover:bg-[#eee] duration-75'>登録する</button>
            </Dialog.Close>
            <Dialog.Close asChild className="flex-1">
              <button type="button" className='border py-2 rounded-md hover:bg-[#eee] duration-75'>戻る</button>
            </Dialog.Close>
          </div>

          <Dialog.Close asChild>
            <button
              type="button"
              className="text-gray-400 hover:text-gray-500 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none"
              aria-label="Close"
            >
              <RxCross2 />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
