import HogCard from "./HogCard"

function HogList({hogInfo}){
    const hogArr = hogInfo.map((hogObj) => <HogCard key={hogObj.name} name={hogObj.name} specialty={hogObj.specialty} 
        greased={hogObj.greased} weight={hogObj.weight} image={hogObj.image} /> )

    return(
        <div className ="ui grid container">
            {hogArr}
        </div>
    )
}

export default HogList