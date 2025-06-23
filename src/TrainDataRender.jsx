import React, { useState, useEffect } from 'react'
    import './App.css';

let trainDataUrl = "http://localhost:5000/train/get"

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
		<div className='grid-container'>
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
