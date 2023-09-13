export default function SelectedActorsDetails({ hireActors }) {
    return (
        <div>
            <div className="actors-details w-full bg-blue-700 bg-opacity-30 p-4  rounded-xl font-bold">
                {hireActors.map(actor => (
                    <div key={actor.id} className="mb-3 flex justify-center items-center gap-3">
                        <h3 className="text-white bg-red-600 w-2/3 bg-opacity-80 rounded-xl p-3 mb-1">{actor.name}-{actor.role}</h3>
                        <img className="w-[60px] rounded-full" src={actor.image} alt={actor.name} />
                    </div>
                ))}
            </div>
        </div>
    );
}
