import FileIcon from "./FileIcons/FileIcon";

function App() {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        inset: 0
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          placeItems: "center",
          width: "fit-content",
          gap: 40,
        }}
      >
        <FileIcon extension="docx" size={100} />
        <FileIcon extension="xlsx" size={100} />
        <FileIcon extension="ppt" size={100} />
        <FileIcon extension="pdf" size={100} />
        <FileIcon extension="png" size={100} />
        <FileIcon extension="mp3" size={100} />
        <FileIcon extension="mp4" size={100} />
        <FileIcon extension="eml" size={100} />
        <FileIcon extension="zip" size={100} />
        <FileIcon extension="ini" size={100} />
        <FileIcon extension="py" size={100} />
        <FileIcon extension="msg" size={100} />
        <FileIcon extension="txt" size={100} />
      </div>
    </div>
  );
}

export default App;
