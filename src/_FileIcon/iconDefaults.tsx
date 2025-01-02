import { AudiotrackRounded, BorderAllRounded, Image, MailRounded, Menu, PlayArrowRounded } from "@mui/icons-material";

const defaults = {
  docx: {
    labelColor: "#3878cd",
    fileColor: "#bdd5f1",
    glyph: <Menu fontSize="inherit" />,
  },
  xlsx: {
    labelColor: "#29a27d",
    fileColor: "#c0e3c2",
    glyph: <BorderAllRounded fontSize="inherit" />,
  },
  pdf: {
    labelColor: "#cd3838",
    fileColor: "#f7cccc",
    glyph: <Menu fontSize="inherit" />,
  },
  png: {
    labelColor: "#a7683d",
    fileColor: "#f1d2bd",
    glyph: <Image fontSize="inherit" />,
  },
  mp3: {
    labelColor: "#32a596",
    fileColor: "#ace2db",
    glyph: <AudiotrackRounded fontSize="inherit" />,
  },
  mp4: {
    labelColor: "#6346a4",
    fileColor: "#bdace2",
    glyph: <PlayArrowRounded fontSize="inherit" />,
  },
  eml: {
    labelColor: "#287ba1",
    fileColor: "#acd1e2",
    glyph: <MailRounded fontSize="inherit" />,
  },
  default: {
    labelColor: "#62768d",
    fileColor: "#c3cfda",
  },
};

export default defaults;
