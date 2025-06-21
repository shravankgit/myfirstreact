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
            trainData.map((trainItem)=>{
                return (
                    <div>
                        <h
                    </div>
                )
            })
        }
    </div>
  )
}

export default TrainDataRender