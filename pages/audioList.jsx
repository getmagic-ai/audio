export default function AudioList(props) {
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
          <th> Name </th>
          <th> Metadata </th>
        </tr>
      </thead>
      <tbody>
        {test_audio_list.map((item) => (
          <tr key={item.name} className="px-4 py-4">
            <td className="px-4 py-4">{item.name}</td>
            <td className="px-4 py-4">{item.metadata}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
