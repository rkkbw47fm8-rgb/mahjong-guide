export default function OperationsPage() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="mb-2 text-3xl font-bold">Table Operations</h1>
        <p className="text-zinc-400">
          During play, you can interact with discards in specific ways. Here&apos;s
          the priority order and how each operation works.
        </p>
        <div className="mt-4 rounded-lg border border-yellow-700 bg-yellow-900/20 p-3 text-center">
          <p className="text-sm font-medium text-yellow-300">
            Priority: 🏆 Mahjong &gt; 🔴 Kong &gt; 🔵 Pung
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            When two players want the same tile, the higher priority wins.
          </p>
        </div>
      </section>

      {/* Pung */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-2 text-xl font-bold text-red-400">① Pung (碰)</h2>
        <p className="mb-3 text-sm text-zinc-400">
          When another player discards a tile and you hold two of the same.
        </p>
        <div className="mb-3 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3">
            <h3 className="mb-1 text-xs font-semibold text-zinc-500">Your hand</h3>
            <div className="flex gap-1">
              {["5万", "5万", "3筒", "7条"].map((t, i) => (
                <span key={i} className="inline-flex h-8 w-8 items-center justify-center rounded border border-zinc-700 bg-zinc-800 text-xs text-zinc-300">{t}</span>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3">
            <h3 className="mb-1 text-xs font-semibold text-zinc-500">Discard: 5万</h3>
            <div className="flex gap-1">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded border border-yellow-700 bg-yellow-900/30 text-xs text-yellow-300">5万</span>
            </div>
          </div>
        </div>
        <p className="mb-2 text-xs text-zinc-500">
          Say &ldquo;Pung!&rdquo;, reveal your pair, and place all three face-up. Then discard one tile.
        </p>
        <div className="rounded-lg border border-green-800 bg-green-900/20 p-2">
          <p className="text-xs text-green-300">
            ✅ You can Pung from any player&apos;s discard, not just the player to your right.
          </p>
        </div>
      </section>

      {/* Kong types comparison */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-3 text-xl font-bold text-red-400">② Three Types of Kong (杠)</h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-3">
            <h3 className="mb-1 font-semibold text-white">Concealed Kong (暗杠)</h3>
            <p className="mb-2 text-xs text-zinc-400">You have all 4 in your hand. Keep them face-down, announce Kong, draw a replacement from the wall, then discard.</p>
            <div className="flex flex-wrap gap-2">
              {["8筒", "8筒", "8筒", "8筒"].map((t, i) => (
                <span key={i} className={`inline-flex h-8 w-8 items-center justify-center rounded border text-xs ${i < 3 ? 'border-zinc-700 bg-zinc-800 text-green-300' : 'border-yellow-700 bg-yellow-900/30 text-yellow-300'}`}>{t}</span>
              ))}
              <span className="ml-2 self-center text-xs text-zinc-600">→ Draw from wall</span>
            </div>
          </div>
          <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-3">
            <h3 className="mb-1 font-semibold text-white">Direct Kong (点杠)</h3>
            <p className="mb-2 text-xs text-zinc-400">You have 3, call the 4th from a discard. Flip all face-up.</p>
            <div className="flex flex-wrap items-center gap-2">
              {["北", "北", "北"].map((t, i) => (
                <span key={i} className="inline-flex h-8 w-8 items-center justify-center rounded border border-zinc-700 bg-zinc-800 text-xs text-white">{t}</span>
              ))}
              <span className="text-xs text-yellow-300">← 北 (discard)</span>
            </div>
          </div>
          <div className="rounded-lg border border-red-800 bg-red-900/20 p-3">
            <h3 className="mb-1 font-semibold text-red-400">Added Kong (补杠) ⚠️ Robable!</h3>
            <p className="mb-2 text-xs text-zinc-400">After you&apos;ve already Pung&apos;d a tile, you draw the 4th. Add it to your exposed set.</p>
            <p className="text-xs text-red-400 font-medium">
              ⚠️ This is the only Kong that can be robbed! If another player needs this tile to win, they can declare Mahjong and take it.
            </p>
            <p className="mt-1 text-xs text-zinc-500">
              If robbed: The player who declared the Added Kong pays all three opponents&apos; losses.
            </p>
          </div>
        </div>
      </section>

      {/* Robbing the Kong */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-2 text-xl font-bold text-red-400">③ Robbing the Kong (抢杠)</h2>
        <ul className="space-y-2 text-sm text-zinc-300">
          <li>✅ Can only rob an <strong className="text-white">Added Kong</strong> (when someone adds the 4th tile to their exposed Pung).</li>
          <li>✅ Thirteen Orphans can also rob a <strong className="text-white">Concealed Kong</strong>.</li>
          <li>❌ Direct Kongs cannot be robbed.</li>
        </ul>
        <div className="mt-3 rounded-lg border border-yellow-700 bg-yellow-900/20 p-3">
          <p className="text-xs text-yellow-300">
            💡 Robber wins immediately. The player who was adding the Kong pays all three opponents.
          </p>
        </div>
      </section>

      <div className="flex justify-between border-t border-zinc-800 pt-6">
        <a href="/game" className="text-sm text-zinc-500 transition hover:text-white">← Game Setup</a>
        <a href="/winning" className="rounded-lg bg-red-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-red-700">Next: Winning Hands →</a>
      </div>
    </div>
  );
}
