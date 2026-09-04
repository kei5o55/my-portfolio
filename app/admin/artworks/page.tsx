
import Link from "next/link";

export default function Page() {
    return (
        <main className="min-h-screen bg-white p-8 text-black">
        <div className="mx-auto max-w-5xl">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between border-b-2 border-black pb-4">
            <div>
                <p className="text-sm text-gray-500">ADMIN / ARTWORKS</p>
                <h1 className="text-3xl font-black">Artwork Management</h1>
            </div>

            <Link
                href="/admin/artworks/new"
                className="border-2 border-black bg-black px-4 py-2 font-bold text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
                + New Artwork
            </Link>
            </div>

            {/* Artwork List */}
            <section>
            <h2 className="mb-4 text-xl font-bold">Artwork List</h2>

            <div className="border-2 border-black">
                {/* Sample artwork */}
                <div className="flex items-center justify-between border-b-2 border-black p-4">
                <div>
                    <p className="font-bold">Sample Artwork</p>
                    <p className="text-sm text-gray-500">
                    2026.09.03 / Published
                    </p>
                </div>

                <div className="flex gap-2">
                    <Link
                    href="/admin/artworks/1/edit"
                    className="border border-black px-3 py-1 text-sm hover:bg-black hover:text-white"
                    >
                    Edit
                    </Link>

                    <button
                    type="button"
                    className="border border-red-500 px-3 py-1 text-sm text-red-500 hover:bg-red-500 hover:text-white"
                    >
                    Delete
                    </button>
                </div>
                </div>

                {/* Empty state */}
                <div className="p-8 text-center text-gray-500">
                Artwork will appear here.
                </div>
            </div>
            </section>

            {/* Back */}
            <div className="mt-8">
            <Link
                href="/admin"
                className="text-sm underline hover:no-underline"
            >
                ← Back to Admin
            </Link>
            </div>
        </div>
        </main>
    );
}

