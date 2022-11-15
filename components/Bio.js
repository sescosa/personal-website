

export default function Bio({bio}){
    return (
        <div className="rounded-2xl shadow-md p-4 hover:shadow-lg transition duration-500 relative group overflow-hidden transform hover:rotate-1 hover:scale-105">
            <p>{bio.title}</p>
            {bio.paragraphs.map((paragraph, index) => (
                 <p className="mt-2" key={index}>{paragraph}</p>
            ))}
        </div>
    )
}