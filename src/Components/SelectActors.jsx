import SelectedActorsDetails from "./SelectedActorsDetails";

export default function SelectActors({ hireActors, totalCost, remainingCost }) {
    return (
        <div className="w-1/3 py-12">
            <div className="text-center p-4 bg-black bg-opacity-40 rounded-xl space-y-2">
                <h3 className="text-2xl font-bold text-white">Cast Added: {hireActors.length}</h3>
                <h3 className="text-2xl font-bold text-white">Total Budget: {remainingCost}$</h3>
                <h3 className="text-2xl font-bold text-white">Total Cost: {totalCost}$ </h3>
                <SelectedActorsDetails hireActors={hireActors}></SelectedActorsDetails>
            </div>
        </div>
    )
}