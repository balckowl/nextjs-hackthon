'use client'
import AlertPopup from '@/components/alert-popup/alert-popup'
import Badge from '@/components/badge/badge'
import BookmarkDialog from '@/components/generator/bookmark-dialog'
import Preview from '@/components/generator/box-shadow/preview'
import CodeblockInnerBtn from '@/components/generator/codeblock-inner-btn'
import { ColorControl } from '@/components/generator/color-control'
import PropertyArea from '@/components/generator/property-area'
import { SliderControl } from '@/components/generator/slide-control'
import type { LocalBoxShadow } from '@/types'
import { copyToClipboard } from '@/lib/copy-to-clipboard'
import { updateLocalBoxShadow } from '@/lib/localStore'
import { useState } from 'react'
import { HiArrowPath } from 'react-icons/hi2'
import { PiPencilCircleFill } from 'react-icons/pi'
import { RiClipboardLine } from 'react-icons/ri'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'

type Props = {
  boxShadow: LocalBoxShadow
}

export default function UpdateBoxShadow({ boxShadow: data }: Props) {

    const {
        id,
        color: oldColor,
        offsetX: oldOffsetX,
        offsetY: oldOffsetY,
        blurRadius: oldBlurRadius,
        spreadRadius: oldSpreadRadis,
        shadowColor: oldShadowColor,
        title: oldTitle
    } = data

    const [color, setColor] = useState<string>(oldColor)
    const [offsetX, setOffsetX] = useState<number>(oldOffsetX)
    const [offsetY, setOffsetY] = useState<number>(oldOffsetY)
    const [blurRadius, setblurRadius] = useState<number>(oldBlurRadius)
    const [spreadRadius, setSpreadRadius] = useState<number>(oldSpreadRadis)
    const [shadowColor, setShadowColor] = useState<string>(oldShadowColor)
    const [isCopySuccess, setIsCopySuccess] = useState<boolean>(false)
    const [isVanillaCss, setIsVanillaCss] = useState<boolean>(true)
    const [isSubmittingSuccess, setIsSubmittingSuccess] = useState<boolean>(false)
    const [title, setTitle] = useState<string>(oldTitle)

    const boxShadow = `${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${shadowColor}`

    const boxShadowCode = `.box {
  box-shadow: ${boxShadow};
}`

    const twBoxshadowCode = `shadow-[${offsetX}px_${offsetY}px_${blurRadius}px_${spreadRadius}px_${shadowColor}]`

    const handleSubmitBoxShadow = async () => {
        updateLocalBoxShadow(id, {
            offsetX,
            offsetY,
            blurRadius,
            spreadRadius,
            color,
            shadowColor,
            title,
        })
        setIsSubmittingSuccess(true)
    }

    return (
        <div className="w-[75%] mx-auto min-h-[calc(100vh-80px)]">
            <AlertPopup value={isCopySuccess} setValue={setIsCopySuccess} text="コピーできました" />
            <AlertPopup
                value={isSubmittingSuccess}
                setValue={setIsSubmittingSuccess}
                text="登録しました"
            />
            <div className="grid grid-cols-2 gap-5 pt-[35px] mb-[35px]">
                <Preview boxShadow={boxShadow} color={color} />
                <div className="h-[320px] rounded-2xl border-[3px] relative">
                    <div className="absolute top-5 right-5 flex gap-2">
                        <CodeblockInnerBtn
                            onClick={(e) =>
                                copyToClipboard(e, isVanillaCss ? boxShadowCode : twBoxshadowCode, setIsCopySuccess)
                            }
                        >
                            <RiClipboardLine color="#909090" />
                        </CodeblockInnerBtn>
                        <BookmarkDialog
                            handleSubmitBoxShadow={handleSubmitBoxShadow}
                            title={title}
                            setTitle={setTitle}
                            mainText="スタイル情報を更新"
                            saveBtnText='更新する'
                        >
                            <CodeblockInnerBtn>
                                <PiPencilCircleFill color="#909090" />
                            </CodeblockInnerBtn>
                        </BookmarkDialog>
                    </div>

                    <CodeblockInnerBtn
                        onClick={() => setIsVanillaCss(!isVanillaCss)}
                        className="absolute bottom-5 right-5"
                    >
                        <HiArrowPath color="#909090" />
                    </CodeblockInnerBtn>

                    <Badge>{isVanillaCss ? 'Vanila CSS' : 'Tailwind CSS'}</Badge>

                    <SyntaxHighlighter
                        customStyle={{
                            borderRadius: '16px',
                            overflow: 'scroll',
                            height: '100%',
                            margin: '0px',
                            padding: '20px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '16px',
                        }}
                        language="css"
                        style={oneLight}
                    >
                        {isVanillaCss ? boxShadowCode : twBoxshadowCode}
                    </SyntaxHighlighter>
                </div>
            </div>
            <PropertyArea>
                <ColorControl label="カラー" color={color} setColor={setColor} />
                <ColorControl label="シャドウカラー" color={shadowColor} setColor={setShadowColor} />
                <SliderControl
                    label="X軸オフセット"
                    value={offsetX}
                    setValue={setOffsetX}
                    min={-50}
                    max={50}
                    unit="px"
                />
                <SliderControl
                    label="Y軸オフセット"
                    value={offsetY}
                    setValue={setOffsetY}
                    min={-50}
                    max={50}
                    unit="px"
                />
                <SliderControl
                    label="ぼかし"
                    value={blurRadius}
                    setValue={setblurRadius}
                    min={0}
                    max={100}
                    unit="px"
                />
                <SliderControl
                    label="広がり"
                    value={spreadRadius}
                    setValue={setSpreadRadius}
                    min={-50}
                    max={50}
                    unit="px"
                />
            </PropertyArea>
        </div>
    )
}
