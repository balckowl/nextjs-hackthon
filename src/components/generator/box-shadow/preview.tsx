type Props = {
  boxShadow: string
  color: string
}

export default function Preview({ boxShadow, color }: Props) {
  return (
    <div className="flex justify-center items-center h-[320px] rounded-2xl border-[3px] overflow-hidden relative">
      <div
        className="w-[170px] h-[170px] rounded-[32px]"
        style={{ boxShadow, backgroundColor: color }}
      />
    </div>
  )
}
