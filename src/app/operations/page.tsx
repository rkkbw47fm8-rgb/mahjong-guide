function TileImg({ src, alt, size = "h-10 w-10" }: { src: string; alt: string; size?: string }) {
  return (
    <img src={src} alt={alt} className={`${size} rounded border border-zinc-700 bg-white shadow-sm`} />
  );
}

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

      {/* Seating Layout */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-3 text-xl font-bold text-red-400">① Seating Layout</h2>
        <p className="mb-6 text-sm text-zinc-400">
          4 players sit around the table and play in <strong className="text-white">counter-clockwise</strong> order:
        </p>
        <div className="mx-auto max-w-sm">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div />
            <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-3">
              <div className="text-xs text-zinc-500">Position 2</div>
              <div className="font-medium text-white">Opposite</div>
              <div className="text-xs text-zinc-600">对家</div>
            </div>
            <div />
            <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-3">
              <div className="text-xs text-zinc-500">Position 3</div>
              <div className="font-medium text-white">Previous</div>
              <div className="text-xs text-zinc-600">上家</div>
            </div>
            <div className="rounded-lg border-2 border-red-600 bg-red-900/20 p-3">
              <div className="text-xs text-zinc-500">You</div>
              <div className="font-bold text-red-400">YOU</div>
              <div className="text-xs text-zinc-600">你</div>
            </div>
            <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-3">
              <div className="text-xs text-zinc-500">Position 1</div>
              <div className="font-medium text-white">Next</div>
              <div className="text-xs text-zinc-600">下家</div>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-zinc-500">
            Play order goes counter-clockwise: You → Next → Opposite → Previous → You
          </p>
        </div>
      </section>

      {/* Action Cards */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-3 text-xl font-bold text-red-400">② Basic Actions</h2>
        <div className="space-y-4">
          {/* Chi */}
          <div className="rounded-lg border border-green-700 bg-green-900/10 p-4">
            <h3 className="mb-1 text-lg font-bold text-green-400">CHI! — 吃 (Sequence)</h3>
            <p className="text-sm text-zinc-300">
              Take 3 consecutive tiles from the <strong className="text-white">previous player (上家)</strong> only.
            </p>
            <p className="mt-1 text-xs text-zinc-500">
              Example: holding{" "}
              <span className="inline-flex gap-1 align-middle">
                <TileImg src="/tiles/tong_2.png" alt="2筒" size="h-8 w-8" />
                <TileImg src="/tiles/tong_3.png" alt="3筒" size="h-8 w-8" />
              </span>{" "}
              take a <TileImg src="/tiles/tong_4.png" alt="4筒" size="h-8 w-8" /> → 2-3-4 sequence
            </p>
          </div>

          {/* Pung */}
          <div className="rounded-lg border border-yellow-700 bg-yellow-900/10 p-4">
            <h3 className="mb-1 text-lg font-bold text-yellow-400">PONG! — 碰 (Triplet)</h3>
            <p className="text-sm text-zinc-300">
              Take a matching tile from <strong className="text-white">any player</strong>.
            </p>
            <p className="mt-1 text-xs text-zinc-500">
              Example: holding{" "}
              <span className="inline-flex gap-1 align-middle">
                <TileImg src="/tiles/wan_5.png" alt="5万" size="h-8 w-8" />
                <TileImg src="/tiles/wan_5.png" alt="5万" size="h-8 w-8" />
              </span>{" "}
              take a <TileImg src="/tiles/wan_5.png" alt="5万" size="h-8 w-8" /> → 5-5-5 triplet
            </p>
          </div>

          {/* Kong */}
          <div className="rounded-lg border border-red-700 bg-red-900/10 p-4">
            <h3 className="mb-1 text-lg font-bold text-red-400">KONG! — 杠 (Quad)</h3>
            <p className="text-sm text-zinc-300">
              Take a fourth matching tile from <strong className="text-white">any player</strong>.
            </p>
            <p className="mt-1 text-xs text-zinc-500">
              Example: holding{" "}
              <span className="inline-flex gap-1 align-middle">
                <TileImg src="/tiles/tong_8.png" alt="8筒" size="h-8 w-8" />
                <TileImg src="/tiles/tong_8.png" alt="8筒" size="h-8 w-8" />
                <TileImg src="/tiles/tong_8.png" alt="8筒" size="h-8 w-8" />
              </span>{" "}
              take a <TileImg src="/tiles/tong_8.png" alt="8筒" size="h-8 w-8" /> → 8-8-8-8 quad
            </p>
          </div>

          {/* Win */}
          <div className="rounded-lg border border-sky-700 bg-sky-900/10 p-4">
            <h3 className="mb-1 text-lg font-bold text-sky-400">WIN! — 胡 (Complete Hand)</h3>
            <p className="text-sm text-zinc-300">
              Complete your hand with a tile from <strong className="text-white">any player</strong> (or self-drawn).
            </p>
            <p className="mt-1 text-xs text-zinc-500">
              Your hand matches the winning pattern: <strong className="text-white">4 sets + 1 pair</strong>.
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-lg border border-orange-700 bg-orange-900/20 p-3">
          <p className="text-xs text-orange-300">
            <strong>⚠ Key Rule:</strong> CHI only works on tiles from the previous player (上家).
            PONG, KONG, and WIN work on tiles from <strong className="text-white">any player</strong>.
          </p>
        </div>
      </section>

      {/* Kong types (keep existing) */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-3 text-xl font-bold text-red-400">③ Three Types of Kong (杠)</h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-3">
            <h3 className="mb-1 font-semibold text-white">Concealed Kong (暗杠)</h3>
            <p className="mb-2 text-xs text-zinc-400">You have all 4 in your hand. Keep them face-down, announce Kong, draw a replacement from the wall, then discard.</p>
            <div className="flex flex-wrap gap-2">
              {["tong_8", "tong_8", "tong_8", "tong_8"].map((t, i) => (
                <TileImg key={i} src={`/tiles/${t}.png`} alt="8筒" size="h-8 w-8" />
              ))}
              <span className="ml-2 self-center text-xs text-zinc-600">→ Draw from wall</span>
            </div>
          </div>
          <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-3">
            <h3 className="mb-1 font-semibold text-white">Direct Kong (点杠)</h3>
            <p className="mb-2 text-xs text-zinc-400">You have 3, call the 4th from a discard. Flip all face-up.</p>
            <div className="flex flex-wrap items-center gap-2">
              {["honor_north", "honor_north", "honor_north"].map((t, i) => (
                <TileImg key={i} src={`/tiles/${t}.png`} alt="北" size="h-8 w-8" />
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
        <h2 className="mb-2 text-xl font-bold text-red-400">④ Robbing the Kong (抢杠)</h2>
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
