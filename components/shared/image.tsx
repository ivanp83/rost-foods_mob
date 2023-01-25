// import Image from "next/image";
// import React from "react";

// interface IProps {
//   src: string;
//   alt: string;
//   onLoadingComplete?: () => void;
// }

// const CustomImage: React.FC<IProps> = ({ src, alt, onLoadingComplete }) => {
//   const convertImage = (w: number, h: number) => `
//     <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//       <defs>
//         <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
//           <stop stop-color="#242221" offset="0%" />
//           <stop stop-color="#161611" offset="35%" />
//           <stop stop-color="#0e1617" offset="75%" />
//           <stop stop-color="#060606" offset="97%" />
//         </linearGradient>
//       </defs>
//       <rect width="${w}" height="${h}" fill="rgb(0, 0, 0)" />
//       <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
//       <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
//     </svg>`;

//   const toBase64 = (str: string) =>
//     typeof window === "undefined"
//       ? Buffer.from(str).toString("base64")
//       : window.btoa(str);
//   return (
//     <div className="next-image-wrapp">
//       <style jsx>{`
//         .next-image-wrapp {
//           position: relative;
//           width: 100%;
//           height: 100%;
//         }
//       `}</style>

//       <Image
//         fill
//         src={src}
//         alt={alt}
//         placeholder="blur"
//         quality={100}
//         style={{ objectFit: "cover" }}
//         blurDataURL={`data:image/svg+xml;base64,${toBase64(
//           convertImage(700, 475)
//         )}`}
//         onLoadingComplete={onLoadingComplete}
//       />
//     </div>
//   );
// };

// export default CustomImage;

import React, { FunctionComponent, useState } from "react";

import Image from "next/image";
import styled from "styled-components";

interface IProps {
  src: string;
  alt: string;
  onLoadingComplete?: () => void;
}

const CustomImage: FunctionComponent<IProps> = ({
  src,
  alt,
  onLoadingComplete,
}) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <ImageContainer>
      <Image
        alt={alt}
        src={src}
        fill
        placeholder="blur"
        blurDataURL="/images/mock.jpg"
        className={loaded ? "unblur" : ""}
        onLoadingComplete={() => setLoaded(true)}
      />
    </ImageContainer>
  );
};

export default CustomImage;
interface IStyledImageContainerProps {
  height?: number;
}

const ImageContainer = styled.div<IStyledImageContainerProps>`
  width: 100%;
  height: 100%;
  position: relative;
  user-select: none;
  pointer-events: none;
  .unblur {
    animation: unblur 0.4s linear;
  }

  @keyframes unblur {
    from {
      filter: blur(20px);
    }
    to {
      filter: blur(0);
    }
  }
`;
