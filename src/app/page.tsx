export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="pt-12 text-center">
        <div className="mb-6 text-6xl">🀄</div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Learn Chinese Mahjong
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-zinc-400">
          A complete, beginner-friendly guide to Chinese Mahjong.
          No prior knowledge needed. Start playing with friends today.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/tiles"
            className="rounded-lg bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700"
          >
            Start Learning →
          </a>
          <a
            href="/scoring-chart.html"
            className="rounded-lg border border-zinc-700 px-6 py-3 font-medium text-zinc-300 transition hover:bg-zinc-800"
          >
            View Scoring Table
          </a>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { num: "136", label: "Tiles in a Set" },
          { num: "23", label: "Winning Hands" },
          { num: "4", label: "Players per Game" },
          { num: "Free", label: "To Learn" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-center"
          >
            <div className="text-2xl font-bold text-red-500">{s.num}</div>
            <div className="mt-1 text-sm text-zinc-500">{s.label}</div>
          </div>
        ))}
      </section>

      {/* What You'll Learn */}
      <section>
        <h2 className="mb-6 text-2xl font-bold">What You&apos;ll Learn</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              emoji: "🀄",
              title: "Tiles",
              desc: "Recognize all 136 tiles — suits, honors, and their English names.",
              href: "/tiles",
            },
            {
              emoji: "🔗",
              title: "Basic Combinations",
              desc: "Pairs, Sequences, Triplets, Kongs, and Melds explained simply.",
              href: "/basics",
            },
            {
              emoji: "🎲",
              title: "Game Setup",
              desc: "Seating, dice rolling, tile drawing — step by step.",
              href: "/game",
            },
            {
              emoji: "✋",
              title: "Table Operations",
              desc: "When to Pung, how to Kong, and what &lsquo;robbing the Kong&rsquo; means.",
              href: "/operations",
            },
            {
              emoji: "🏆",
              title: "Winning Hands",
              desc: "Standard and special winning patterns explained with examples.",
              href: "/winning",
            },
            {
              emoji: "📊",
              title: "Scoring Table",
              desc: "23 hand types with multipliers — from 3x to 50x.",
              href: "/scoring-chart.html",
            },
          ].map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="tile-card rounded-xl border border-zinc-800 bg-zinc-900/50 p-5"
            >
              <div className="mb-2 text-2xl">{c.emoji}</div>
              <h3 className="mb-1 font-semibold text-white">{c.title}</h3>
              <p className="text-sm text-zinc-400">{c.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Quick Rules */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
        <h2 className="mb-4 text-xl font-bold">Quick Rules Summary</h2>
        <ul className="space-y-2 text-sm text-zinc-300">
          <li>
            <span className="font-medium text-red-400">Goal:</span> Be the first
            to complete a winning hand of 14 tiles (4 melds + 1 pair).
          </li>
          <li>
            <span className="font-medium text-red-400">No Chow:</span> You
            cannot call a discard to form a sequence. Sequences must be drawn
            from the wall.
          </li>
          <li>
            <span className="font-medium text-red-400">Pung &amp; Kong:</span>{" "}
            You can call any discard if you hold a pair (Pung) or three (Kong) of
            the same tile.
          </li>
          <li>
            <span className="font-medium text-red-400">Scoring:</span> Hands
            have base multipliers (3x to 50x). Kongs pay separately. Multiple
            hand types stack.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center">
        <p className="mb-4 text-zinc-500">
          Ready to start your Mahjong journey?
        </p>
        <a
          href="/tiles"
          className="inline-block rounded-lg bg-red-600 px-8 py-3 font-medium text-white transition hover:bg-red-700"
        >
          Start with the Tiles →
        </a>
      </section>
    </div>
  );
}
