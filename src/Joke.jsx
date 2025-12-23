import { useState } from "react"

function Joke() {

const[joke,setJoke] = useState(null)
const[loading,setLoading] = useState(false)
const[error,setError] = useState('')

const fetchJoke = async () => {

setLoading(true)
setError("")

try{
    const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
    )
    const data = await response.json()
    setJoke(data)
}
catch(err){
    setError("Failed to fetch the new joke. Try Again")
}
finally{
    setLoading(false)
}

} 

    return (
        <div className="bg-gradient-to-r from-sky-400 to-purple-500 flex items-center justify-center h-screen">

            <div className="bg-white p-4 rounded-md text-center">
                <h1 className="text-lg font-semibold mb-3">Joke Generator</h1>

                {loading && <p>Loading...</p>}
                {error &&<p>{error}</p>}


                {joke && !loading &&(
                    <div>
                        <p className="font-semibold">Joke: {joke.setup}</p>
                        <p className="font-normal mb-2">Punchline: {joke.punchline}</p>
                    </div>
                )}

                <button onClick={fetchJoke} className="bg-blue-500 p-1 text-white rounded-md hover:bg-blue-600 cursor-pointer">Get Joke</button>
            </div>

        </div>
    )
}

export default Joke