export default function WinningPage() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="mb-2 text-3xl font-bold">Winning Hands</h1>
        <p className="text-zinc-400">
          There are two ways to win and two hand structures. Here&apos;s everything
          you need to know.
        </p>
      </section>

      {/* Win Types */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-2 text-xl font-bold text-red-400">
          How to Win
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-4">
            <h3 className="mb-1 font-semibold text-white">
              Win by Discard (点炮)
            </h3>
            <p className="text-xs text-zinc-400">
              Another player discards the tile you need. Only that player pays you.
            </p>
            <div className="mt-2 rounded bg-green-900/20 p-2 text-center text-xs text-green-300">
              Payer: the one who discarded
            </div>
          </div>
          <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-4">
            <h3 className="mb-1 font-semibold text-white">
              Win by Self-Draw (自摸)
            </h3>
            <p className="text-xs text-zinc-400">
              You draw the winning tile from the wall. All three opponents pay you.
            </p>
            <div className="mt-2 rounded bg-green-900/20 p-2 text-center text-xs text-green-300">
              Payers: all three opponents
            </div>
          </div>
        </div>
      </section>

      {/* Hand Structures */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-2 text-xl font-bold text-red-400">
          Hand Structures
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-4">
            <h3 className="mb-1 font-semibold text-white">
              Standard Hand
            </h3>
            <p className="text-xs text-zinc-400">
              4 Melds + 1 Pair = 14 tiles
            </p>
            <p className="mt-1 text-xs text-zinc-600">
              Melds can be Sequences, Triplets, or Kongs.
              This covers Pung Pung, Mixed One Suit, and most common hands.
            </p>
          </div>
          <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-4">
            <h3 className="mb-1 font-semibold text-white">
              Special Hands
            </h3>
            <p className="text-xs text-zinc-400">
              Do not follow 4+1 structure
            </p>
            <p className="mt-1 text-xs text-zinc-600">
              Examples: Seven Pairs, Thirteen Orphans, Heavenly Hand,
              Earthly Hand.
            </p>
          </div>
        </div>
      </section>

      {/* Special Hands */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-2 text-xl font-bold text-red-400">
          Special Cases
        </h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-3">
            <h3 className="mb-1 font-semibold text-yellow-300">
              Heavenly Hand (天胡) — 50×
            </h3>
            <p className="text-xs text-zinc-400">
              The dealer&apos;s initial 14 tiles already form a winning hand.
              Declared before drawing or discarding.
            </p>
          </div>
          <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-3">
            <h3 className="mb-1 font-semibold text-yellow-300">
              Earthly Hand (地胡) — 50×
            </h3>
            <p className="text-xs text-zinc-400">
              A non-dealer wins on the very first turn — either by calling a discard
              or drawing the winning tile on their first draw.
            </p>
          </div>
          <div className="rounded-lg border border-red-800 bg-red-900/20 p-3">
            <h3 className="mb-1 font-semibold text-red-400">
              False Mahjong (诈胡) ⚠️ Penalty
            </h3>
            <p className="text-xs text-zinc-400">
              If you declare Mahjong but your hand doesn&apos;t qualify, you must pay
              each opponent a fixed penalty (e.g., 500 chips at a 10/20 base rate).
              The hand is abandoned and restarted.
            </p>
          </div>
        </div>
      </section>

      {/* Mulitplier stacking */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-2 text-xl font-bold text-red-400">
          Hand Type Stacking
        </h2>
        <ul className="space-y-2 text-sm text-zinc-300">
          <li>
            ✅ Most hand types can be <strong className="text-white">combined</strong> and their multipliers multiplied together.
            <br />
            <span className="text-xs text-zinc-500">
              Example: Pung Pung (3×) + Full Flush (6×) = 18×
            </span>
          </li>
          <li>
            ❌ Some hands are <strong className="text-white">mutually exclusive</strong>:
            <br />
            <span className="text-xs text-zinc-500">
              Seven Pairs doesn&apos;t stack with All Triplets (San Yuan).
              All Honors (Zi Yi Se) doesn&apos;t stack with Blue One Se.
            </span>
          </li>
          <li>
            💰 <strong className="text-white">Kong bonuses</strong> are paid separately from hand multipliers.
          </li>
        </ul>
      </section>

      <div className="flex justify-between border-t border-zinc-800 pt-6">
        <a href="/operations" className="text-sm text-zinc-500 transition hover:text-white">← Operations</a>
        <a href="/scoring" className="rounded-lg bg-red-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-red-700">Next: Scoring Table →</a>
      </div>
    </div>
  );
}
