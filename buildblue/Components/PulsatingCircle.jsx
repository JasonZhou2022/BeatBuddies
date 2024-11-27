import * as React from "react"
import Svg, { Path } from 'react-native-svg';

const PulsatingCircle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={305}
    height={297}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <Path
        stroke="#BD37E9"
        d="M212.742 237.592c-42.382-24.913-76.452 22.12-126.79-15.827 11.434-31.251 13.136-48.447-39.997-75.225-4.741-30.007 21.36-14.168 42.523-34.034C109.64 92.64 66.286 72.38 83.605 44.179c17.318-28.201 66.11 5.867 82.795 33.985 16.685 28.118 60.415-22.94 66.058 14.468 5.643 37.409 57.177 50.627 17.69 63.406-39.486 12.78 4.976 106.467-37.406 81.554Z"
        shapeRendering="crispEdges"
      />
    </g>
    <g filter="url(#b)">
      <Path
        stroke="#BD37E9"
        d="M212.742 237.592c-42.382-24.913-76.452 22.12-126.79-15.827 11.434-31.251 13.136-48.447-39.997-75.225-4.741-30.007 21.36-14.168 42.523-34.034C109.64 92.64 66.286 72.38 83.605 44.179c17.318-28.201 66.11 5.867 82.795 33.985 16.685 28.118 60.415-22.94 66.058 14.468 5.643 37.409 57.177 50.627 17.69 63.406-39.486 12.78 4.976 106.467-37.406 81.554Z"
        shapeRendering="crispEdges"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={224.531}
        height={213.177}
        x={42.891}
        y={31.108}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_29_2905" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
        <feBlend
          in2="effect1_dropShadow_29_2905"
          result="effect2_dropShadow_29_2905"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
        <feBlend
          in2="effect2_dropShadow_29_2905"
          result="effect3_dropShadow_29_2905"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
        <feBlend
          in2="effect3_dropShadow_29_2905"
          result="effect4_dropShadow_29_2905"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
        <feBlend
          in2="effect4_dropShadow_29_2905"
          result="effect5_dropShadow_29_2905"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
        <feBlend
          in2="effect5_dropShadow_29_2905"
          result="effect6_dropShadow_29_2905"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
        <feBlend
          in2="effect6_dropShadow_29_2905"
          result="effect7_dropShadow_29_2905"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
        <feBlend
          in2="effect7_dropShadow_29_2905"
          result="effect8_dropShadow_29_2905"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect8_dropShadow_29_2905"
          result="shape"
        />
      </filter>
      <filter
        id="b"
        width={237.531}
        height={226.177}
        x={36.391}
        y={24.608}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={4.25} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_29_2905" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={4.25} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
        <feBlend
          in2="effect1_dropShadow_29_2905"
          result="effect2_dropShadow_29_2905"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={4.25} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
        <feBlend
          in2="effect2_dropShadow_29_2905"
          result="effect3_dropShadow_29_2905"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={4.25} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
        <feBlend
          in2="effect3_dropShadow_29_2905"
          result="effect4_dropShadow_29_2905"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={4.25} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
        <feBlend
          in2="effect4_dropShadow_29_2905"
          result="effect5_dropShadow_29_2905"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={4.25} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
        <feBlend
          in2="effect5_dropShadow_29_2905"
          result="effect6_dropShadow_29_2905"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={4.25} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
        <feBlend
          in2="effect6_dropShadow_29_2905"
          result="effect7_dropShadow_29_2905"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={4.25} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
        <feBlend
          in2="effect7_dropShadow_29_2905"
          result="effect8_dropShadow_29_2905"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect8_dropShadow_29_2905"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
export default PulsatingCircle
