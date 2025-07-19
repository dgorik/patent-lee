import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-center">
      <svg
        className="h-10 w-10 text-primary-600 mt-3"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Beer mug body */}
        <path
          d="M6 5C6 4.44772 6.44772 4 7 4H15C15.5523 4 16 4.44772 16 5V18C16 19.6569 14.6569 21 13 21H9C7.34315 21 6 19.6569 6 18V5Z"
          fill="currentColor"
          fillOpacity="0.2"
        />
        <path
          d="M6 5C6 4.44772 6.44772 4 7 4H15C15.5523 4 16 4.44772 16 5V18C16 19.6569 14.6569 21 13 21H9C7.34315 21 6 19.6569 6 18V5Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        {/* Beer handle */}
        <path
          d="M16 8H18C18.5523 8 19 8.44772 19 9V13C19 13.5523 18.5523 14 18 14H16"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        {/* Beer foam */}
        <path
          d="M6 7C7.5 6 8.5 6.5 10 7C11.5 7.5 12.5 7 14 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="11"
          y1="12"
          x2="14"
          y2="12"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeLinecap="round"
        />
        <line
          x1="11"
          y1="13.5"
          x2="14"
          y2="13.5"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeLinecap="round"
        />
        <line
          x1="11"
          y1="15"
          x2="13"
          y2="15"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeLinecap="round"
        />
      </svg>
      <span className=" text-2xl font-bold text-gray-900 mt-3">IPAigent</span>
    </div>
  );
}
