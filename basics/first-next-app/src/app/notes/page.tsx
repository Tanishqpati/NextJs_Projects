import Link from "next/link";

async function getNotes() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/Project/records?page=1&perPage=30', {cache: 'no-store'})
    const data = await res.json();
    console.log(data)
    return data?.items as any[]
}

export default async function NotesPage() {
    const notes = await getNotes();
    return (
        <div>
            <h1>Notes</h1>
            <div>
                {notes?.map((note) => {
                    return <Note key={note.id} note={note}/>
                })}
            </div>
        </div>
    )
}

function Note ({ note }: any) {
    const {id, title, field, created} = note || {};

    return (
        <Link href={`/notes/${id}`}>
            <h2>{title}</h2>
            <h5>{field}</h5>
            <p>{created}</p>
        </Link>
    )
}