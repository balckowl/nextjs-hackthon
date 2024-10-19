export default function Page({ params }: { params: { id: string } }) {

    const { id } = params

    return (
        <div className="w-[75%] mx-auto">{id}</div>
    )
}
