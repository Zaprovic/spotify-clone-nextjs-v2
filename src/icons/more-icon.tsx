import { svgProps } from "@/types";

const MoreIcon = ({ width = 16, height = 16, ...props }: svgProps) => {
    return (
        <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 16 16"
            width={width}
            height={height}
            fill="currentColor"
            {...props}
        >
            <path d="M7.19 1A.749.749 0 0 1 8.47.47L16 7.99l-7.53 7.521a.75.75 0 0 1-1.234-.815.75.75 0 0 1 .174-.243l5.72-5.714H.75a.75.75 0 1 1 0-1.498h12.38L7.41 1.529a.749.749 0 0 1-.22-.53z"></path>
        </svg>
    );
};

export default MoreIcon;
