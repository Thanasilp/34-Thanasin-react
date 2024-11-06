export const Owner = () => {
  return (
    <div className="w-full sm:w-2/6 mx-auto bg-stone-100 rounded-xl p-6 mt-8">
      <h1 className="text-3xl sm:text-6xl font-bold text-center mb-4 text-lime-800">
        THE PEPEGA
      </h1>
      <img
        src="../public/pepe-pepe-cute.gif"
        alt="pepe-cute"
        className="w-full sm:w-2/3 mx-auto border rounded-full mb-4 hover:filter grayscale filter-none duration-150 hover:scale-[0.95] ease-in-out"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 mx-auto"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
        />
      </svg>

      <p className="text-lg sm:text-xl font-semibold text-center mb-4 text-lime-800">
        Hover to Release the lonely Pepega!
      </p>
      <blockquote className="border-l-4 border-gray-400 pl-4">
        <p className="text-lime-700">
          <strong>Pepega</strong>, a beloved internet meme, emerged from the
          depths of Twitch chat in 2018. Born from a simple Discord
          conversation, this green frog with a speech impediment quickly
          captured hearts with its endearing silliness. Initially met with mixed
          reactions, Pepega's unique charm and infectious laughter soon won over
          the online community. Today, it's a symbol of lighthearted fun and
          camaraderie, reminding us to embrace our inner goofiness and find joy
          in the simplest things.
        </p>
      </blockquote>
    </div>
  );
};
