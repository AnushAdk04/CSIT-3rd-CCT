import { useState } from "react"

function Bmi() {


    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [bmi, setBmi] = useState(null)
    const [bmiCategory, setBmiCategory] = useState('')

    function calculateBmi() {
        if (weight && height) {
            const heightInMeter = height / 100
            const bmiValue = (weight / (heightInMeter * heightInMeter)).toFixed(2)
            setBmi(bmiValue)

            if (bmiValue < 18.5) {
                setBmiCategory("Underweight")
            } else if (bmiValue >= 18.5 && bmiValue < 25) {
                setBmiCategory("Healthy Weight")
            } else if (bmiValue >= 25 && bmiValue < 30) {
                setBmiCategory("Over Weight")
            } else {
                setBmiCategory("Obesity")
            }
        } else {
            alert("Please enter weight and height")
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">BMI Calculator</h2>
                <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700">Weight (kg)</label>
                    <input
                        type="number"
                        onChange={(e) => setWeight(e.target.value)}
                        value={weight}
                        placeholder="Enter your weight in kg"
                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-lg font-medium text-gray-700">Height</label>
                    <input
                        type="number"
                        onChange={(e) => setHeight(e.target.value)}
                        value={height}
                        placeholder="Enter your Height in cm"
                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                    />
                </div>
                <button
                    onClick={calculateBmi}
                    className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 mb-4"
                >
                    Calculate BMI
                </button>

                {bmi && (
                    <div className="text-center">
                        <p className="text-lg font-semibold">Your BMI: {bmi}</p>
                        <p className="text-md font-medium">{bmiCategory}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Bmi
