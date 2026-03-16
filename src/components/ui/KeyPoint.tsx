"use client";

import type { FC } from "react";
import type { KeyPointProps } from "../../lib/types";

const KeyPoint: FC<KeyPointProps> = ({ icon, label }) => (
  <div className="flex items-center space-x-3">
    <div className="w-12 h-12 bg-[var(--primary-blue)]/10 rounded-full flex items-center justify-center">
      {icon}
    </div>
    <span className="text-gray-700 font-medium">{label}</span>
  </div>
);

export default KeyPoint;
