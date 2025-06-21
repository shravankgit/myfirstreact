import React from 'react'

let trainData = [
    {
        "trainName":"krishna",
        "trainNo":17405,
        "startTime":"3:45",
        "endTime":"9:45",
        "coaches": [
            {
                "coachType":"2a",
                "cost":760,
                "availability":1
            },
            {
                "coachType": "3a",
                "cost": 1160,
                "availability": 10
            },
            {
                "coachType": "1a",
                "cost": 1260,
                "availability": 1
            },
            {
                "coachType": "sl",
                "cost": 195,
                "availability": 0
            }
        ]
    }
]

const TrainDataRender = () => {
  return (
    <div>
        {
            trainData.map((item)=>{
                return (
                    <div>
                        <h2>{item.trainName} </h2>
                        <h3>{item.trainNo} </h3>
                        <h3>{item.startTime} </h3>
                        <h3>{item.endTime} </h3>
                    </div>
                )
            })
        }
    </div>
  )
}

export default TrainDataRender