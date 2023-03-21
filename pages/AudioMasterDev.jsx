import { useEffect, useState } from 'react';
import axios from 'axios';

function AudioMasterDev() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://kollaboratenocodb.herokuapp.com/api/v1/db/data/v1/audio/audio_master_dev?where=where%3D%28audio_id%2Ceq%2C32f0f4a6-fe50-4a1e-abd7-6aa69a5b1adc%29&limit=25&shuffle=0&offset=0', {
          method: 'GET',
          headers: {
            'accept': 'application/json',
            'xc-token': 'qDpPlZq_5RvrmraRpAIG7tehtPPLQ2WfitaKOKdE'
          }
        });
        const data = await response.json();
        setData(data);
        console.log(`the data is... ${data.name}`);
        console.log(`the response is... ${JSON.stringify(response)}`);
      } catch (error) {
        console.log(`the error is... ${error}`);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    console.log(`getting data...with ${process.env.NEXT_PUBLIC_NOCODB_AUTH}`)
    return <div>Loading data...</div>;
  }

  return (
    <div>
      <h1>Audio Master Dev</h1>
      <p>ID: {data.id}</p>
      <p>Name: {data.name}</p>
      <p>Description: {data.description}</p>
    </div>
  );
}

export default AudioMasterDev;


  // const url = 'https://kollaboratenocodb.herokuapp.com/api/v1/db/data/v1/audio/audio_master_dev';
  // const params = {
  //   where: (audio_id,eq,'32f0f4a6-fe50-4a1e-abd7-6aa69a5b1adc'),
  //   limit: '1',
  //   shuffle: '0',
  //   offset: '0',
  // };
  // const headers = {
  //   'accept': 'application/json',
  //   'xc-token': process.env.NEXT_PUBLIC_NOCODB_AUTH,
  // };
  // try {
  //   const response = await axios.get(url, { params, headers });
  //   setData(response.data);
  // } catch (error) {
  //   console.error(error);
  // }