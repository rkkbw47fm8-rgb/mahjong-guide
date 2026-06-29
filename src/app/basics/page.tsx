export default function BasicsPage() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="mb-2 text-3xl font-bold">Basic Combinations</h1>
        <p className="text-zinc-400">
          Every Mahjong hand is built from five basic tile combinations. Once you
          know these, you understand the language of the game.
        </p>
      </section>

      {/* Pair */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-2 text-xl font-bold text-red-400">① Pair (对子)</h2>
        <p className="mb-3 text-sm text-zinc-400">
          Two identical tiles. Also called the &ldquo;Eyes&rdquo; (将牌).
        </p>
        <div className="flex flex-wrap gap-2">
          {["5万", "5万"].map((t) => (
            <span key={t} className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-xs text-red-300">{t}</span>
          ))}
        </div>
        <p className="mt-3 text-xs text-zinc-600">
          A standard winning hand must have exactly one Pair.
        </p>
      </section>

      {/* Sequence */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-2 text-xl font-bold text-red-400">② Sequence (顺子)</h2>
        <p className="mb-3 text-sm text-zinc-400">
          Three consecutive numbers in the <em>same</em> suit. Numbered 1–2–3 up to 7–8–9.
        </p>
        <div className="flex flex-wrap gap-2">
          {["3筒", "4筒", "5筒"].map((t) => (
            <span key={t} className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-xs text-green-300">{t}</span>
          ))}
        </div>
        <div className="mt-3 space-y-1 text-xs text-zinc-500">
          <p>✅ 1-2-3 Wan, 4-5-6 Bamboo, 7-8-9 Dot</p>
          <p>❌ 2-3-5 Wan (not consecutive), 3万-4筒-5条 (mixed suits)</p>
          <p className="font-medium text-yellow-500">
            In this ruleset: Sequences must be drawn from the wall — you cannot call a discard to complete a Sequence (no &ldquo;eating&rdquo;).
          </p>
        </div>
      </section>

      {/* Triplet */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-2 text-xl font-bold text-red-400">③ Triplet (刻子)</h2>
        <p className="mb-3 text-sm text-zinc-400">
          Three identical tiles. Comes in two types:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
            <h3 className="mb-2 text-sm font-semibold text-white">Concealed (暗刻)</h3>
            <p className="mb-2 text-xs text-zinc-500">All three drawn from the wall &mdash; hidden in your hand.</p>
            <div className="flex gap-2">
              {["发", "发", "发"].map((t) => (
                <span key={t} className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-xs text-white">发</span>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
            <h3 className="mb-2 text-sm font-semibold text-white">Exposed (明刻 / Pung)</h3>
            <p className="mb-2 text-xs text-zinc-500">Two in hand, called a discard to complete. Placed face-up on the table.</p>
            <div className="flex gap-2">
              {["西", "西", "西"].map((t) => (
                <span key={t} className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-xs text-white">西</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kong */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-2 text-xl font-bold text-red-400">④ Kong (杠)</h2>
        <p className="mb-3 text-sm text-zinc-400">
          Four identical tiles — an upgraded Triplet.
        </p>
        <p className="mb-3 text-xs text-zinc-500">
          After declaring a Kong, you must draw one replacement tile from the back of the wall,
          then discard. Kongs pay separately from hand scoring.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3">
            <h3 className="mb-1 text-sm font-semibold text-white">Concealed Kong (暗杠)</h3>
            <p className="text-xs text-zinc-500">All 4 in hand. Kept face-down. <strong className="text-green-400">Worth 1× self-draw.</strong></p>
            <p className="mt-1 text-xs text-yellow-500">Only Thirteen Orphans can rob a Concealed Kong.</p>
          </div>
          <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3">
            <h3 className="mb-1 text-sm font-semibold text-white">Direct Kong (点杠)</h3>
            <p className="text-xs text-zinc-500">3 in hand, called the 4th from a discard. All exposed. <strong className="text-yellow-400">Worth 0.5× self-draw.</strong></p>
            <p className="mt-1 text-xs text-zinc-600">Cannot be robbed.</p>
          </div>
          <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3">
            <h3 className="mb-1 text-sm font-semibold text-red-400">Added Kong (补杠) ⚠️</h3>
            <p className="text-xs text-zinc-500">After a Pung, you draw the 4th. Add it to the exposed set. <strong className="text-yellow-400">Worth 0.5× self-draw.</strong></p>
            <p className="mt-1 text-xs text-red-400">This is the only Kong type that can be <strong>robbed</strong>!</p>
          </div>
        </div>
        <div className="mt-4 rounded-lg border border-yellow-700 bg-yellow-900/20 p-3">
          <p className="text-xs text-yellow-300">
            💡 Four Kongs in one hand = &ldquo;Eighteen Arhats&rdquo; (24×), one of the highest-scoring hands.
          </p>
        </div>
      </section>

      {/* Meld */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-2 text-xl font-bold text-red-400">⑤ Meld (面子)</h2>
        <p className="mb-3 text-sm text-zinc-400">
          A general term for Sequences, Triplets, and Kongs. The winning formula:
        </p>
        <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-4 text-center">
          <p className="text-lg font-bold text-white">
            4 Melds + 1 Pair = 14 Tiles = Winning Hand 🏆
          </p>
        </div>
      </section>

      <div className="flex justify-between border-t border-zinc-800 pt-6">
        <a href="/tiles" className="text-sm text-zinc-500 transition hover:text-white">← Tiles</a>
        <a href="/game" className="rounded-lg bg-red-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-red-700">Next: Game Setup →</a>
      </div>
    </div>
  );
}
