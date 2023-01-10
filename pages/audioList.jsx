import { useQuery } from "react-query";
import { fetchAudioData } from "./_app";

export default function AudioList(props) {
  
  const {data, isLoading, error} = useQuery('data', fetchAudioData,/*{staleTime: 10}*/) //stale time isn't really needed, the defaults work well. Keeping it here for reference, can delete it
  console.log("Hey, just entered the data fethcing part...");
  if (isLoading) return "loading...";
  if (error) return "An error occured in fetching the data from nocodb";
  console.log(data.list[0]);
  
  const dataForMapping = JSON.parse(JSON.stringify(data.list[0]));
//use this array for test in case the API isn't working
  const test_audio_list = [
    { name: "Song 1", metadata: "Song 1 Metadata" },
    { name: "Song 2", metadata: "Song 2 Metadata" },
    { name: "Song 3", metadata: "Song 3 Metadata" },
    { name: "Song 4", metadata: "Song 4 Metadata" },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th> Title </th>
          <th> Song! </th>
        </tr>
      </thead>
      <tbody>
        {//test_audio_list.map((item) => (
         data.list.map((item) => (
          <tr key={item.id} className="px-4 py-4">
            <td className="px-4 py-4">{item.title}</td>
            <td className="px-4 py-4">{item.audio_datasource_url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
