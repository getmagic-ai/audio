import { useQuery } from "@tanstack/react-query";
import { fetchAudioData } from "./_app";
import Link from 'next/link'
import { useRouter } from 'next/navigation';

export default function AudioList({url}) {
  const router = new useRouter();

  const {data, isLoading, error} = useQuery(['data'], fetchAudioData)/*, {staleTime: 10}*/ //stale time isn't really needed, the defaults work well. Keeping it here for reference, can delete it
  // console.log("Hey, just entered the data fethcing part..."); //debugging only
  if (isLoading) return "loading...";
  if (error) return "An error occured in fetching the data from nocodb";
  // console.log(data.list[0]); //debugging only
  
//use this array for test in case the API isn't working
  const test_audio_list = [
    { name: "Song 1", metadata: "Song 1 Metadata" },
    { name: "Song 2", metadata: "Song 2 Metadata" },
    { name: "Song 3", metadata: "Song 3 Metadata" },
    { name: "Song 4", metadata: "Song 4 Metadata" },
  ];
  const handleClick = (id) => {
  
    // window.open(url, '_blank') //this will open a new page with the sources URL
    //But we want to open our own songDetail page, so thats what we are doing below

  router.push('/songDetail?id=${id}')
  
  }

  return (
    <table>
      <thead>
        <tr>
          <th> Title </th>
          <th> Song! </th>
        </tr>
      </thead>
      <tbody >
        {
         data.list.map((item) => (
          <tr key={item.id} className="bg-blue-300 mt-2 mb-2 px-4 py-4" onClick={() => handleClick(item.title)}> 
            <td className="px-4 py-4 mt-1">{item.title}</td>
            <td className="px-4 py-4">{item.audio_datasource_url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


//Notes
/*If you want to pass the actual url , you can simply call the handle function like *handleClick(item.audio_datasource_url)*/