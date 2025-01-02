import wordDoc from "./docx.svg";
import excelDoc from "./xlsx.svg";
import pdf from "./pdf.svg";
import image from "./png.svg";
import sound from "./mp3.svg";
import video from "./mp4.svg";
import microsoftMail from "./msg.svg";
import powerPoint from "./pptx.svg";
import textFile from "./txt.svg";
import zipFile from "./zip.svg";
import mail from "./mail.svg";
import settings from "./settings.svg";
import code from "./code.svg";

const fileIconMap = {
  // Document files
  doc: wordDoc,
  docx: wordDoc,
  odt: wordDoc,
  rtf: wordDoc,
  wps: wordDoc,
  xls: excelDoc,
  xlsx: excelDoc,
  ods: excelDoc,
  csv: excelDoc,
  pdf,

  // Image files
  png: image,
  jpg: image,
  jpeg: image,
  gif: image,
  bmp: image,
  tiff: image,
  ico: image,
  svg: image,
  heic: image,
  webp: image,

  // Audio files
  mp3: sound,
  wav: sound,
  flac: sound,
  aac: sound,
  ogg: sound,
  m4a: sound,

  // Video files
  mp4: video,
  avi: video,
  mov: video,
  mkv: video,
  webm: video,
  flv: video,
  m4v: video,

  // Mail files
  msg: microsoftMail,
  eml: mail,
  pst: mail,

  // Presentation files
  ppt: powerPoint,
  pptx: powerPoint,
  odp: powerPoint,

  // Text and code files
  txt: textFile,
  log: textFile,
  ini: settings,
  env: settings,
  cfg: settings,
  config: settings,
  json: settings,
  yaml: settings,
  yml: settings,
  toml: settings,
  xml: code,
  html: code,
  htm: code,
  css: code,
  js: code,
  jsx: code,
  ts: code,
  tsx: code,
  py: code,
  java: code,
  cpp: code,
  c: code,
  cs: code,
  php: code,
  rb: code,
  swift: code,
  go: code,
  kotlin: code,
  scala: code,
  rs: code,
  sh: code,
  bash: code,

  // Archive files
  zip: zipFile,
  rar: zipFile,
  "7z": zipFile,
  tar: zipFile,
  gz: zipFile,
  bz2: zipFile,
  xz: zipFile,
  iso: zipFile,
  dmg: zipFile,

  // Font files
  ttf: image,
  otf: image,
  woff: image,
  woff2: image,

  // Design files
  psd: image,
  ai: image,
  eps: image,
  sketch: image,
  fig: image,
  xd: image,

  // Miscellaneous files
  db: settings,
  sqlite: settings,
  dat: settings,
  exe: settings,
  dll: settings,
  app: settings,
  apk: settings,
  bin: settings,
  deb: settings,
  rpm: settings,
  img: zipFile,
};

type FileIconProps = {
  extension: string;
  size?: number;
}
const FileIcon = ({
  extension,
  size,
}: FileIconProps) => {
  return (
    <img
      src={fileIconMap[extension as keyof typeof fileIconMap] ?? textFile}
      alt={extension}
      height={size}
    />
  );
};

export default FileIcon;