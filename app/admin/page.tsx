import Link from "next/link";

export default function Page() {
    return (
        <main>
        <Link href="/admin/artworks" className="border">
            ArtWork
        </Link>

        <Link href="/admin/diary" className="border ml-4">
            Diary
        </Link>
        </main>
    );
}