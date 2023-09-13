import { useEffect, useState } from 'react'
import Actor from './Actor';
export default function Actors({ handleHire }) {
    let [actors, setActors] = useState([]);
    useEffect(() => {
        let url = "https://raw.githubusercontent.com/gias-uddin-swe/B8-final-Bpl-team-maker/main/public/data.json";
        fetch(url)
            .then(res => res.json())
            .then(data => setActors(data))
    }, [])

    return (
        <div className='bg h-full py-12 px-8 grid grid-cols-2 gap-6 w-2/3'>
            {actors.map((actors, idx) => <Actor key={idx} actors={actors} handleHire={handleHire}></Actor>)}
        </div>
    )
}