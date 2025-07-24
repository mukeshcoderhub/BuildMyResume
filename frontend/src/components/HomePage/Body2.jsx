import React from 'react'
import { PieChart, Pie, AreaChart, Area,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,BarChart, Bar, Rectangle } from 'recharts';
const data1 = [
  {
    name: 'Jan',
    pv: 20,
    amt: 20,
  },
  {
    name: 'Feb',
    pv: 40,
    amt: 40,
  },
  {
    name: 'Mar',
    pv: 60,
    amt: 60,
  },
  {
    name: 'Apr',
    pv: 80,
    amt: 80,
  }
];

const data2 = [
  {
    name: 'Old Resume',
    pv: 1000,
    amt: 1000,
  },
  {
    name: 'BuildMyResume',
    pv: 2500,
    amt: 1500,
  }
];

const data3 = [
  {
    name: 'Jan',
    uv: 100,
    amt: 100,
  },
  {
    name: 'Feb',
    uv: 150,
    amt: 200,
  },
  {
    name: 'Mar',
    uv: 270,
    amt: 300,
  },
  {
    name: 'Apr',
    uv: 350,
    amt: 400,
  },
  {
    name: 'May',
    uv: 500,
    amt: 500,
  }
];

const data4 = [
  { name: 'IT & Software', value: 400 },
  { name: 'Marketing', value: 200 },
  { name: 'Finance', value: 150 },
  { name: 'HR', value: 100 },
  { name: 'Others', value: 150 },
];



const Body2 = () => {
  return (
    <div className='w-full h-[200vh] sm:h-[100vh] flex flex-wrap'>
      {/* top left  */}
      <div className="top-left w-[100%] sm:w-[50%] h-[25%] sm:h-[50%]">
        <div className="w-full">
          <p className='text-sm sm:text-xl font-normal text-center pt-6 mt-12'><span className='text-green-500'>*  How </span> BuildMyResume Boosts Job Success</p>
        </div>
        <div className="w-[100%] h-[100%] flex  sm:justify-center items-center">
          <div className="w-[90%] h-[50%] sm:w-[50%] sm:h-[60%]">
          <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={100}
        height={100}
        data={data1}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#4CAF50" activeDot={{ r: 8 }} />
      </LineChart>
            </ResponsiveContainer>
            </div>
        </div>
      </div>
      {/* top right */}
      <div className="top-right w-[100%] sm:w-[50%] h-[25%] sm:h-[50%]">
         <div className="w-full">
          <p className='sm:text-xl text-sm font-normal text-center pt-6 mt-12'>* Resume Upgrade <span className='text-green-500'>=</span> More Interviews</p>
        </div>
        <div className="w-[100%] h-[100%] flex justify-center items-center">
          <div className="w-[90%] h-[50%] sm:w-[50%] sm:h-[60%]">
         <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data2}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#03A9F4" activeBar={<Rectangle fill="#4CAF50" stroke="#4CAF50" />} />
        </BarChart>
            </ResponsiveContainer>
            </div>
        </div>
      </div>
      {/* bottom left  */}
      <div className="bottom-left w-[100%] sm:w-[50%] h-[25%] sm:h-[50%]">
         <div className="w-full">
          <p className='sm:text-xl textsm font-normal text-center pt-6 mt-2'>* Our <span className='text-green-500'>Growing</span> Community of Job Seekers</p>
        </div>
        <div className="w-[100%] h-[100%] flex justify-center items-center">
          <div className="w-[90%] h-[50%] sm:w-[50%] sm:h-[60%]">
           <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data3}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
            </ResponsiveContainer>
            </div>
        </div>
      </div>
      {/* bottom right  */}
      <div className="bottom-right w-[100%] sm:w-[50%] h-[25%] sm:h-[50%]">
        <div className="w-full">
          <p className='sm:text-xl text-sm font-normal text-center pt-6 mt-2'>* Top <span className='text-green-500'>Industries</span> Where Our Users Get Hired</p>
        </div>
        <div className="w-[100%] h-[100%] flex justify-center items-center">
          <div className="w-[90%] h-[50%] sm:w-[50%] sm:h-[60%]">
            <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie dataKey="value" data={data4} fill="#26A69A" label />
          </PieChart>
            </ResponsiveContainer>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Body2