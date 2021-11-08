function HogCard({name, specialty, greased, weight, image}){

    function renderDetails(){
        
    }

    return(
        <div className="ui four wide column">
            <div className=" ui card" onClick={renderDetails}>
                <div className="image">
                    <img src={image} alt={name}></img>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="meta">
                        <p>{greased ? 'This pig is greased!' : 'This pig needs greasin!'}</p>
                        <p>{weight}lbs</p>
                    </div> 
                    <div className="description">Specialty: {specialty}</div>
                </div>
            </div>
        </div>
    )
}

export default HogCard