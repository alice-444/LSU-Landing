import { useEffect } from "react";
import clarity from "@microsoft/clarity";

const Clarity: React.FC = () => {
  useEffect(() => {
    const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

    if (clarityId) {
      clarity.init(clarityId);
    } else {
      console.warn(
        "Microsoft Clarity ID is not configured. Please set NEXT_PUBLIC_CLARITY_ID in your environment variables."
      );
    }
  }, []);

  return null;
};

export default Clarity;
