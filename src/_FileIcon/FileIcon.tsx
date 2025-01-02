import React from "react";
import iconDefaults from "./iconDefaults";

type Props = {
  extension: string;
  fileColor?: string;
  labelColor?: string;
  glyph?: React.ReactNode;
  size?: number;
};

const FileIcon = ({ extension, fileColor, labelColor, glyph, size }: Props) => {
  const definedSize = size ?? 50;
  const largeIcons = definedSize > 40;
  
  return (
    <div style={{ position: "relative", width: definedSize, transform: largeIcons ? undefined : "translateX(-4px)" }}>
      <svg
        width={size}
        height={size}
        version="1.1"
        viewBox="0 0 71.077 71.077"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(-63.094 -50.205)">
          <path
            d="m82.443 50.205c-4.0621 0-7.3318 3.2703-7.3318 7.3324v56.412c0 4.0621 3.2698 7.3324 7.3318 7.3324h40.618c4.0621 0 7.3324-3.2703 7.3324-7.3324v-48.848l-14.896-14.896z"
            style={{
              fillRule: "evenodd",
              fill: fileColor ?? iconDefaults.default.fileColor,
              paintOrder: "normal",
            }}
          />

          {largeIcons && (
            <>
              <rect
                x="63.094"
                y="90.053"
                width="58.764"
                height="25.114"
                rx="6.6113"
                ry="6.6113"
                style={{
                  fillRule: "evenodd",
                  fill: labelColor ?? iconDefaults.default.labelColor,
                  paintOrder: "stroke markers fill",
                }}
              />
              <text
                x="92.017128"
                y="109.19733"
                style={{
                  fillRule: "evenodd",
                  fill: "#ffffff",
                  fontSize: 17,
                  fontFamily: "Noto sans",
                  fontWeight: "bold",
                  paintOrder: "stroke markers fill",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 18.697,
                }}
              >
                <tspan
                  x="92.017128"
                  y="109.19733"
                  style={{
                    fill: "#ffffff",
                    strokeWidth: 18.697,
                    textAlign: "center",
                    textAnchor: "middle",
                  }}
                >
                  .{extension}
                </tspan>
              </text>
            </>
          )}
          <path
            d="m115.5 50.205v14.896h14.896"
            style={{
              fillRule: "evenodd",
              fill: labelColor ?? iconDefaults.default.labelColor,
              opacity: 0.4,
              paintOrder: "normal",
            }}
          />
        </g>
      </svg>
      <div
        style={{
          position: "absolute",
          top: largeIcons ? "10%" : "25%",
          left:  largeIcons ? "30%" : "26%",
          color: labelColor ?? iconDefaults.default.labelColor,
          fontSize: largeIcons ? (definedSize / 2.5) : definedSize / 1.7,
        }}
      >
        {glyph}
      </div>
    </div>
  );
};

export default FileIcon;
