import { useMemo, useState } from "react";

export default function CharacterCounter() {
  const [text, setText] = useState("");

  const { charCount, wordCount, avgWordLength, readingTime } = useMemo(() => {
    const words = text.trim().split(/\s+/).filter(Boolean);
    const charCount = text.length;
    const wordCount = words.length;

    const avgWordLength =
      wordCount > 0
        ? words.reduce((acc, word) => acc + word.length, 0) / wordCount
        : 0;

    const readingTime = wordCount > 0 ? Math.ceil(wordCount / 200) : 0;

    return { charCount, wordCount, avgWordLength, readingTime };
  }, [text]);

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="font-bold text-4xl text-center">Character Counter Tool</h1>

      <textarea
        className="w-full bg-white min-h-[150px] resize  border-black border-2 p-2.5 focus:outline-none 
         focus:shadow-[4px_4px_0px_rgba(0,0,0,1)] 
         focus:bg-[#FFA6F6] 
         active:shadow-[4px_4px_0px_rgba(0,0,0,1)];"
        placeholder="Type text here."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="p-4  bg-[#7DF9FF] border-black border-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          <p className="text-lg font-semibold">{charCount}</p>
          <p className="text-sm ">Total Characters</p>
        </div>
        <div className="p-4  bg-[#FFFF00] border-black border-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          <p className="text-lg font-semibold">{wordCount}</p>
          <p className="text-sm ">Total Words</p>
        </div>
        <div className="p-4  bg-[#2FFF2F] border-black border-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          <p className="text-lg font-semibold">{avgWordLength.toFixed(2)}</p>
          <p className="text-sm ">Avg. Word Length</p>
        </div>
        <div className="p-4  bg-[#FF4911] border-black border-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          <p className="text-lg font-semibold">{readingTime} min</p>
          <p className="text-sm ">Reading Time</p>
        </div>
      </div>
    </div>
  );
}
