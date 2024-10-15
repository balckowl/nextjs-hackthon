import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto text-secondary">
      <Link href="/box-shadow" className="border">
        Box Shadow Generator
      </Link>
      <Link href="/svg-waves" className="border">
        SVG Waves Generator
      </Link>
    </div>
  )
}
