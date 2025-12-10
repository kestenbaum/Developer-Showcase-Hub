import { config } from "@/config/size.config";

export default function Home() {
  return (
    <div
        className="bg-gray-50"
        style={{ height: `calc(100vh - ${config.headerSize}px)`}}
    >
        <div className="mx-auto px-4 max-w-5xl">
           <div className="text-gray-800 pt-5">
               test
           </div>
        </div>
    </div>
  );
}
