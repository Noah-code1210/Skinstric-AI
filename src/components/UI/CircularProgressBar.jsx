import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";

const CircularProgressBar = ({
  percentage = 10,
  color = "#3B82F6",
  size = "medium",
  strokeWidth = 8,
}) => {
  const [progress, setProgress] = useState(0);

  // Validate and clamp percentage between 0 and 100
  const validatedPercentage = useMemo(() => {
    return Math.min(Math.max(percentage, 0), 100);
  }, [percentage]);

  // Calculate dimensions based on size prop
  const dimensions = useMemo(() => {
    const sizes = {
      small: 120,
      medium: 160,
      large: 360,
    };
    return sizes[size] || sizes.medium;
  }, [size]);

  // Calculate SVG parameters
  const center = dimensions / 2;
  const radius = (dimensions - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(validatedPercentage);
    }, 100);

    return () => clearTimeout(timer);
  }, [validatedPercentage]);

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        className="transform -rotate-90 transition-all duration-1000 ease-in-out"
        width={dimensions}
        height={dimensions}
        aria-valuenow={validatedPercentage}
        aria-valuemin="0"
        aria-valuemax="100"
        role="progressbar"
        aria-label={`Progress: ${validatedPercentage}%`}
      >
        {/* Background circle */}
        <circle
          className="text-gray-200"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={center}
          cy={center}
          color="lightgray"
        />
        {/* Progress circle */}
        <circle
          className="transition-all duration-1000 ease-in-out"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
          // Removed the problematic line: onDurationChange={300}
          r={radius}
          cx={center}
          cy={center}
        />
      </svg>
      {/* Percentage text */}
      <div className="absolute flex items-center justify-center">
        <span
          className={`font-semibold ${
            size === "small"
              ? "text-xl"
              : size === "large"
              ? "text-3xl"
              : "text-2xl"
          }`}
          style={{ color }}
        >
          {validatedPercentage}%
        </span>
      </div>
    </div>
  );
};

CircularProgressBar.propTypes = {
  percentage: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  strokeWidth: PropTypes.number,
};

export default CircularProgressBar;
