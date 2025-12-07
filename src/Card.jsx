import zebra from "./assets/zebra.png"

function Card(){
return(
    <div className="card">
        <img src={zebra} alt="card-img" className="card-image"/>
        <h2>Anush Adhikari</h2>
        <p>Frontend developer & UI/UX Designer</p>
    </div>
);
}

export default Card