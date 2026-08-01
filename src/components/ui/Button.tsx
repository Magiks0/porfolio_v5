import { MoveRight } from "lucide-react";
import type { MouseEventHandler } from "react";

interface ButtonProps {
  text: string;
  action: MouseEventHandler;
}

export default function Button({ text, action }: ButtonProps) {
  return (
    <button
      className="inline-flex justify-between items-center bg-[#2C2C2C] rounded-full px-2 py-2 group hover:cursor-pointer active:scale-95 active:opacity-75"
      onClick={action}
    >
      <p className="text-[#F5F5F3] px-4 uppercase font-semibold text-sm">
        {text}
      </p>
      <div className="bg-[#F5F5F3] text-[#2C2C2C] font-bold p-2 rounded-full transition-transform duration-200 group-hover:-rotate-45">
        <MoveRight size={16} />
      </div>
    </button>
  );
}
