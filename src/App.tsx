import FileIcon from "./FileIcons/FileIcon";
import "./index.css";

function App() {
  return (
    <div className="center">
      <div className="grid-large  ">
        <FileIcon extension="docx" size={50} />
        <FileIcon extension="xlsx" size={50} />
        <FileIcon extension="ppt" size={50} />
        <FileIcon extension="pdf" size={50} />
        <FileIcon extension="png" size={50} />
        <FileIcon extension="mp3" size={50} />
        <FileIcon extension="mp4" size={50} />
        <FileIcon extension="eml" size={50} />
        <FileIcon extension="zip" size={50} />
        <FileIcon extension="ini" size={50} />
        <FileIcon extension="py" size={50} />
        <FileIcon extension="msg" size={50} />
        <FileIcon extension="txt" size={50} />
        <FileIcon extension="csv" size={50} />
        <FileIcon extension="rtf" size={50} />
        <FileIcon extension="odp" size={50} />
      </div>
      <div className="grid-small">
        <FileIcon extension="docx" size={24} />
        <FileIcon extension="xlsx" size={24} />
        <FileIcon extension="ppt" size={24} />
        <FileIcon extension="pdf" size={24} />
        <FileIcon extension="png" size={24} />
        <FileIcon extension="mp3" size={24} />
        <FileIcon extension="mp4" size={24} />
        <FileIcon extension="eml" size={24} />
        <FileIcon extension="zip" size={24} />
        <FileIcon extension="ini" size={24} />
        <FileIcon extension="py" size={24} />
        <FileIcon extension="msg" size={24} />
        <FileIcon extension="txt" size={24} />
        <FileIcon extension="csv" size={24} />
        <FileIcon extension="rtf" size={24} />
        <FileIcon extension="odp" size={24} />
      </div>
    </div>
  );
}

export default App;
