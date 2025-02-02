import wordDoc from "./docx.svg";
import wordDocSmall from "./docx_small.svg";
import rtfDoc from "./rtf.svg";
import rtfDocSmall from "./rtf_small.svg";
import excelDoc from "./xlsx.svg";
import excelDocSmall from "./xlsx_small.svg";
import csvDoc from "./csv.svg";
import csvDocSmall from "./csv_small.svg";
import pdf from "./pdf.svg";
import pdfSmall from "./pdf_small.svg";
import image from "./png.svg";
import imageSmall from "./png_small.svg";
import sound from "./mp3.svg";
import soundSmall from "./mp3_small.svg";
import video from "./mp4.svg";
import videoSmall from "./mp4_small.svg";
import microsoftMail from "./msg.svg";
import microsoftMailSmall from "./msg_small.svg";
import powerPoint from "./pptx.svg";
import powerPointSmall from "./pptx_small.svg";
import presentation from "./presentation.svg";
import presentationSmall from "./presentation_small.svg";
import textFile from "./txt.svg";
import textFileSmall from "./txt_small.svg";
import zipFile from "./zip.svg";
import zipFileSmall from "./zip_small.svg";
import mail from "./mail.svg";
import mailSmall from "./mail_small.svg";
import settings from "./settings.svg";
import settingsSmall from "./settings_small.svg";
import code from "./code.svg";
import codeSmall from "./code_small.svg";

const iconMap = {
  wordDoc: {
    small: wordDocSmall,
    default: wordDoc
  },
  rtfDoc: {
    small: rtfDocSmall,
    default: rtfDoc
  },
  excelDoc: {
    small: excelDocSmall,
    default: excelDoc
  },
  csvDoc: {
    small: csvDocSmall,
    default: csvDoc
  },
  pdf: {
    small: pdfSmall,
    default: pdf
  },
  image: {
    small: imageSmall,
    default: image
  },
  sound: {
    small: soundSmall,
    default: sound
  },
  video: {
    small: videoSmall,
    default: video
  },
  microsoftMail: {
    small: microsoftMailSmall,
    default: microsoftMail
  },
  powerPoint: {
    small: powerPointSmall,
    default: powerPoint
  },
  presentation: {
    small: presentationSmall,
    default: presentation
  },
  textFile: {
    small: textFileSmall,
    default: textFile
  },
  zipFile: {
    small: zipFileSmall,
    default: zipFile
  },
  mail: {
    small: mailSmall,
    default: mail
  },
  settings: {
    small: settingsSmall,
    default: settings
  },
  code: {
    small: codeSmall,
    default: code
  }
} as const;


const fileIconNameMap: Record<string, keyof typeof iconMap> = {
  // Document files
  doc: "wordDoc",
  docx: "wordDoc",
  odt: "rtfDoc",
  rtf: "rtfDoc",
  wps: "wordDoc",
  xls: "excelDoc",
  xlsx: "excelDoc",
  ods: "csvDoc",
  csv: "csvDoc",
  pdf: "pdf",

  // Image files
  png: "image",
  jpg: "image",
  jpeg: "image",
  gif: "image",
  bmp: "image",
  tiff: "image",
  ico: "image",
  svg: "image",
  heic: "image",
  webp: "image",

  // Audio files
  mp3: "sound",
  wav: "sound",
  flac: "sound",
  aac: "sound",
  ogg: "sound",
  m4a: "sound",

  // Video files
  mp4: "video",
  avi: "video",
  mov: "video",
  mkv: "video",
  webm: "video",
  flv: "video",
  m4v: "video",

  // Mail files
  msg: "microsoftMail",
  eml: "mail",
  pst: "mail",

  // Presentation files
  ppt: "powerPoint",
  pptx: "powerPoint",
  odp: "presentation",

  // Text and code files
  txt: "textFile",
  log: "textFile",
  ini: "settings",
  env: "settings",
  cfg: "settings",
  config: "settings",
  json: "settings",
  yaml: "settings",
  yml: "settings",
  toml: "settings",
  xml: "code",
  html: "code",
  htm: "code",
  css: "code",
  js: "code",
  jsx: "code",
  ts: "code",
  tsx: "code",
  py: "code",
  java: "code",
  cpp: "code",
  c: "code",
  cs: "code",
  php: "code",
  rb: "code",
  swift: "code",
  go: "code",
  kotlin: "code",
  scala: "code",
  rs: "code",
  sh: "code",
  bash: "code",

  // Archive files
  zip: "zipFile",
  rar: "zipFile",
  "7z": "zipFile",
  tar: "zipFile",
  gz: "zipFile",
  bz2: "zipFile",
  xz: "zipFile",
  iso: "zipFile",
  dmg: "zipFile",

  // Font files
  ttf: "image",
  otf: "image",
  woff: "image",
  woff2: "image",

  // Design files
  psd: "image",
  ai: "image",
  eps: "image",
  sketch: "image",
  fig: "image",
  xd: "image",

  // Miscellaneous files
  db: "settings",
  sqlite: "settings",
  dat: "settings",
  exe: "settings",
  dll: "settings",
  app: "settings",
  apk: "settings",
  bin: "settings",
  deb: "settings",
  rpm: "settings",
  img: "zipFile",
};

type FileIconProps = {
  extension: keyof typeof fileIconNameMap | string;
  size?: number;
}
const FileIcon = ({
  extension,
  size,
}: FileIconProps) => {

  const variant = size && size < 25 ? "small" : "default";
  const name = fileIconNameMap[extension as keyof typeof fileIconNameMap] ?? "textFile";
  console.log(extension, name);
  
  const iconSrc = iconMap[name][variant];

  return (
    <img
      src={iconSrc}
      alt={extension}
      height={size}
    />
  );
};

export default FileIcon;