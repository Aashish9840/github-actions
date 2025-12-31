const items = [
  { emoji: "😊", text: "Happy and Friendly" },
  { emoji: "🔥", text: "Motivated and Energetic" },
  { emoji: "💡", text: "Creative Thinker" },
  { emoji: "🚀", text: "Always Improving" },

  { emoji: "😊", text: "Happy and Friendly" },
  { emoji: "🔥", text: "Motivated and Energetic" },
  { emoji: "💡", text: "Creative Thinker" },
  { emoji: "🚀", text: "Always Improving" },

  { emoji: "😊", text: "Happy and Friendly" },
  { emoji: "🔥", text: "Motivated and Energetic" },
  { emoji: "💡", text: "Creative Thinker" },
  { emoji: "🚀", text: "Always Improving" },

  { emoji: "😊", text: "Happy and Friendly" },
  { emoji: "🔥", text: "Motivated and Energetic" },
  { emoji: "💡", text: "Creative Thinker" },
  { emoji: "🚀", text: "Always Improving" },
];

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <div className="flex items-center gap-10 p-6 overflow-x-auto scrolling">
        <div className="animate">
          <div className="flex gap-10 w-full">
            {items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex hover:animate-stop items-center min-w-[300px] gap-3 border rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition"
              >
                <span className="text-3xl">{item.emoji}</span>
                <span className="text-base font-medium text-gray-700">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
