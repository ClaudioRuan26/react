function Card(props) {
    return (

        <div className="w-1/3 bg-slate-500 p-5 rounded-md">
            <div className="flex justify-between">
                <div>
                    {props.title}
                </div>

                <div>
                    {props.time}
                </div>
            </div>

            <div className="">
                {props.description}
            </div>
        </div>

    )
}

export default Card;