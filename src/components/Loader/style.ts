import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const size = "10px";
const gap = "20px";

const loader38 = keyframes`
    0% {
        box-shadow: -${gap} -${gap} 0 ${size},
        -${gap} -${gap} 0 ${size},
        -${gap} -${gap} 0 ${size},
        -${gap} -${gap} 0 ${size};
    }
    8.33% {
        box-shadow: -${gap} -${gap} 0 ${size},
        ${gap} -${gap} 0 ${size},
        ${gap} -${gap} 0 ${size},
        ${gap} -${gap} 0 ${size};
    }
    16.66% {
        box-shadow: -${gap} -${gap} 0 ${size},
        ${gap} -${gap} 0 ${size},
        ${gap} ${gap} 0 ${size},
        ${gap} ${gap} 0 ${size};
    }
    24.99% {
        box-shadow: -${gap} -${gap} 0 ${size},
        ${gap} -${gap} 0 ${size},
        ${gap} ${gap} 0 ${size},
        -${gap} ${gap} 0 ${size};
    }
    33.32% {
        box-shadow: -${gap} -${gap} 0 ${size},
        ${gap} -${gap} 0 ${size},
        ${gap} ${gap} 0 ${size},
        -${gap} -${gap} 0 ${size};
    }
    41.65% {
        box-shadow: ${gap} -${gap} 0 ${size},
        ${gap} -${gap} 0 ${size},
        ${gap} ${gap} 0 ${size},
        ${gap} -${gap} 0 ${size};
    }
    49.98% {
        box-shadow: ${gap} ${gap} 0 ${size},
        ${gap} ${gap} 0 ${size},
        ${gap} ${gap} 0 ${size},
        ${gap} ${gap} 0 ${size};
    }
    58.31% {
        box-shadow: -${gap} ${gap} 0 ${size},
        -${gap} ${gap} 0 ${size},
        ${gap} ${gap} 0 ${size},
        -${gap} ${gap} 0 ${size};
    }
    66.64% {
        box-shadow: -${gap} -${gap} 0 ${size},
        -${gap} -${gap} 0 ${size},
        ${gap} ${gap} 0 ${size},
        -${gap} ${gap} 0 ${size};
    }
    74.97% {
        box-shadow: -${gap} -${gap} 0 ${size},
        ${gap} -${gap} 0 ${size},
        ${gap} ${gap} 0 ${size},
        -${gap} ${gap} 0 ${size};
    }
    83.3% {
        box-shadow: -${gap} -${gap} 0 ${size},
        ${gap} ${gap} 0 ${size},
        ${gap} ${gap} 0 ${size},
        -${gap} ${gap} 0 ${size};
    }
    91.63% {
        box-shadow: -${gap} -${gap} 0 ${size},
        -${gap} ${gap} 0 ${size},
        -${gap} ${gap} 0 ${size},
        -${gap} ${gap} 0 ${size};
    }
    100% {
        box-shadow: -${gap} -${gap} 0 ${size},
        -${gap} -${gap} 0 ${size},
        -${gap} -${gap} 0 ${size},
        -${gap} -${gap} 0 ${size};
    }
`;
export const SquareLoader = styled.span`
  height: ${size};
  width: ${size};
  color: rgba(207, 203, 243, 0.7);
  border-radius: 4px;
  box-shadow:
    -${gap} -${gap} 0 ${size},
    -${gap} -${gap} 0 ${size},
    -${gap} -${gap} 0 ${size},
    -${gap} -${gap} 0 ${size};
  animation: ${loader38} 6s infinite;
  margin-bottom: 10px;
`;
