import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto">
      <Link href="/box-shadw" className="border">
        Box Shadow Generator
      </Link>
      <Link href="/svg-waves" className="border">
        SVG Waves Generator
      </Link>
    </div>
  )
}
