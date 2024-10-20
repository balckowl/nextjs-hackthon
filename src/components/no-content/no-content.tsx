import Link from "next/link";

type Props = {
    mainText: string,
    linkText: string,
    href: string
}

export default function NoContent({ mainText, linkText, href }: Props) {
    return (
        <div>
            <p>{mainText}</p>
            <Link href={href} className='border-blue-500 border-b text-blue-500'>
                {linkText}
            </Link>
        </div>
    )
}
