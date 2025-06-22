import React, { useState, useEffect } from 'react'

// let trainData = [
//   {
//     trainName: "krishna",
//     trainNo: 17405,
//     startTime: "3:45",
//     endTime: "9:45",
//     coaches: [
//       { coachType: "2a", cost: 760, availability: 1 },
//       { coachType: "3a", cost: 1160, availability: 10 },
//       { coachType: "1a", cost: 1260, availability: 1 },
//       { coachType: "sl", cost: 195, availability: 0 }
//     ]
//   },
//   {
//     trainName: "charminar",
//     trainNo: 12760,
//     startTime: "9:45",
//     endTime: "2:45",
//     coaches: [
//       { coachType: "2a", cost: 960, availability: 1 },
//       { coachType: "3a", cost: 1660, availability: 10 },
//       { coachType: "1a", cost: 130, availability: 1 },
//       { coachType: "sl", cost: 225, availability: 0 }
//     ]
//   }
// ];

let trainDataUrl = "http://localhost:4005/trains"

const TrainDataRender = () => {

	const [trainData, setTrainData] = useState([]);

	const userHandler = async () => {
		try {
			const response = await fetch(trainDataUrl)
			const newData = await response.json()
			setTrainData(newData)
		} catch (error) {
			console.log("error got: " + error);
			alert("error in  gettig data")
		}
	}
	useEffect(() => {
		console.log(userHandler());
	}, []);

	return (
		<div>
			{trainData.map((item) => (
				<div
					key={item.trainNo}
					className='trainStyle'
				>
					<h2>Train Name: {item.trainName}</h2>
					<h3>Train No: {item.trainNo}</h3>
					<p>
						Start Time: {item.startTime} | End Time: {item.endTime}
					</p>

					<h4>Coaches:</h4>
					<ul>
						{item.coaches.map((coach, index) => (
							<li key={index}>
								Type: {coach.coachType}, Cost: ₹{coach.cost}, Availability: {coach.availability}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

export default TrainDataRender;
