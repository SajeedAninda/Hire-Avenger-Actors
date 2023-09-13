export default function Actor({ actors }) {
    let cardStyle = {
        background: "linear-gradient(240deg, rgba(198, 50, 50, 1) 0%, rgba(58, 122, 223, 1) 100%)",
        opacity: "80%"
    };

    let { name, age, country, role, salary, image } = actors;


    return (
        <div>
            <div style={cardStyle} className="card-container bg flex flex-col justify-center items-center space-y-4 rounded-xl p-4">
                <img className="w-[100px] rounded-full" src={image} alt="" />
                <h3 className="text-xl font-bold">Name: {name}</h3>
                <h3 className="text-xl font-bold">Age: {age}</h3>
                <h3 className="text-xl font-bold">Country: {country}</h3>
                <div className="flex gap-3">
                    <h3 className="text-xl font-bold">Role: {role}</h3>
                    <h3 className="text-xl font-bold">Salary: {salary}$</h3>
                </div>
                <button className="px-4 py-2 bg-black text-white rounded-2xl text-lg font-bold">Hire this Star</button>
            </div>
        </div>
    );
}
