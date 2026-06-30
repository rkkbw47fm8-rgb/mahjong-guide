function TileImg({ src, alt, size = "h-10 w-10" }: { src: string; alt: string; size?: string }) {
  return (
    <img src={src} alt={alt} className={`${size} rounded border border-zinc-700 bg-white shadow-sm`} />
  );
}

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

      {/* Winning Formula */}
      <section className="rounded-xl border border-green-800 bg-green-900/10 p-6 text-center">
        <h2 className="mb-2 text-xl font-bold text-green-400">🎯 The Winning Formula</h2>
        <p className="mb-4 text-2xl font-bold text-white">
          4 Sets (3 tiles each) + 1 Pair (2 tiles) = <span className="text-green-400">WIN!</span>
        </p>
        <p className="text-sm text-zinc-400">
          13 tiles in hand + 1 drawn tile = <strong className="text-white">14 tiles</strong> = complete hand
        </p>
        <div className="mt-4 text-4xl">🎉</div>
      </section>

      {/* Starting Hand */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-2 text-xl font-bold text-red-400">Starting Hand</h2>
        <p className="mb-4 text-sm text-zinc-400">
          Each player receives <strong className="text-white">13 tiles</strong> as the starting hand, then draws &amp; discards in turn.
        </p>
        <div className="flex flex-wrap gap-1 justify-center">
          {[
            "wan_2","wan_5","wan_8","tong_1","tong_3","tong_6","tong_9","tiao_4","tiao_7","honor_east","honor_east","honor_red","honor_green"
          ].map((t, i) => (
            <TileImg key={i} src={`/tiles/${t}.png`} alt="" size="h-9 w-9" />
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-zinc-500">Example starting hand: 13 tiles</p>
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
            <p className="mb-2 text-sm text-zinc-300">
              Another player discards a tile that completes your hand.
            </p>
            <div className="flex flex-wrap items-center gap-1 text-xs text-zinc-500">
              <span>You need:</span>
              <TileImg src="/tiles/tong_5.png" alt="" size="h-8 w-8" />
              <span className="text-yellow-300">← someone discards this → Win!</span>
            </div>
          </div>
          <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-4">
            <h3 className="mb-1 font-semibold text-white">
              Win by Self-Draw (自摸)
            </h3>
            <p className="mb-2 text-sm text-zinc-300">
              You draw the winning tile from the wall yourself.
            </p>
            <p className="text-xs text-green-400 font-medium">
              ✅ All three opponents pay you double!
            </p>
          </div>
        </div>
      </section>

      {/* Payout Rules */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-2 text-xl font-bold text-red-400">
          💰 Payout Rules — Who Pays What?
        </h2>
        <p className="mb-4 text-sm text-zinc-400">
          Understanding how money changes hands is essential. In Cantonese Mahjong, the
          payout depends on <strong className="text-white">who wins</strong> and{" "}
          <strong className="text-white">how they win</strong>.
        </p>

        <div className="space-y-4">
          {/* Self-Draw */}
          <div className="rounded-lg border border-green-700 bg-green-900/10 p-4">
            <h3 className="mb-1 font-semibold text-green-400">
              🔄 Win by Self-Draw (自摸)
            </h3>
            <p className="text-sm text-zinc-300">
              You draw the winning tile yourself. <strong className="text-white">All three opponents</strong>{" "}
              each pay you <strong className="text-yellow-400">2× the hand value</strong>.
            </p>
            <div className="mt-2 rounded-lg border border-zinc-700 bg-zinc-800/50 p-3">
              <p className="text-xs text-zinc-400">
                <strong className="text-white">Example:</strong> Hand value = 3×. You win by self-draw.
              </p>
              <p className="text-sm text-green-400">
                Each opponent pays: 3 × 2 = <strong>6×</strong> → Total you receive: <strong>18×</strong>
              </p>
            </div>
          </div>

          {/* Win by Discard */}
          <div className="rounded-lg border border-red-700 bg-red-900/10 p-4">
            <h3 className="mb-1 font-semibold text-red-400">
              💥 Win by Discard (点炮)
            </h3>
            <p className="text-sm text-zinc-300">
              Another player discards the tile you need.{" "}
              <strong className="text-white">The discarding player</strong> pays{" "}
              <strong className="text-yellow-400">3× the hand value</strong>{" "}
              (covers all three opponents&apos; shares).
            </p>
            <div className="mt-2 rounded-lg border border-zinc-700 bg-zinc-800/50 p-3">
              <p className="text-xs text-zinc-400">
                <strong className="text-white">Example:</strong> Hand value = 3×. Player B discards your winning tile.
              </p>
              <p className="text-sm text-yellow-400">
                Player B pays: 3 × 3 = <strong>9×</strong> → Total you receive: <strong>9×</strong>
              </p>
            </div>
          </div>

          {/* Comparison */}
          <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-4">
            <h3 className="mb-1 font-semibold text-white">
              ⚖️ Self-Draw vs Discard — Same Hand Value
            </h3>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              <div className="rounded border border-green-800 bg-green-900/20 p-2 text-center">
                <p className="text-sm font-bold text-green-400">Self-Draw (自摸)</p>
                <p className="text-lg font-bold text-white">18×</p>
                <p className="text-xs text-zinc-500">3 opponents × 6× each</p>
              </div>
              <div className="rounded border border-red-800 bg-red-900/20 p-2 text-center">
                <p className="text-sm font-bold text-red-400">Discard (点炮)</p>
                <p className="text-lg font-bold text-white">9×</p>
                <p className="text-xs text-zinc-500">1 person pays all 9×</p>
              </div>
            </div>
            <p className="mt-2 text-xs text-zinc-500">
              For the same 3× hand: Self-draw pays 18× total (from 3 people), discard pays 9× (from 1 person).
            </p>
          </div>
        </div>

        {/* Special Payout Rules */}
        <div className="mt-4 rounded-lg border border-yellow-700 bg-yellow-900/20 p-3">
          <h4 className="mb-2 text-sm font-semibold text-yellow-300">
            📋 Special Payout Rules
          </h4>
          <ul className="space-y-1 text-xs text-zinc-400">
            <li>• <strong className="text-white">Robbing the Kong (抢杠):</strong> The player who was adding the Kong pays <strong className="text-yellow-300">all three shares</strong>.</li>
            <li>• <strong className="text-white">12 Exposed Tiles (落地包自摸):</strong> If a player has 12+ tiles exposed, the one who lets them win with the 13th tile covers everything.</li>
            <li>• <strong className="text-white">Concealed Kong:</strong> Each opponent pays <strong className="text-yellow-300">1×</strong> (self-draw bonus).</li>
            <li>• <strong className="text-white">Exposed / Added Kong:</strong> Each opponent pays <strong className="text-yellow-300">0.5×</strong>.</li>
          </ul>
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
              Open Hand (副露)
            </h3>
            <p className="mb-2 text-sm text-zinc-300">
              You&apos;ve used Pung or Kong calls. Some melds are face-up.
            </p>
            <div className="flex flex-wrap gap-1">
              <span className="rounded border border-green-700 bg-green-900/20 px-2 py-1 text-xs text-green-300">Exposed</span>
              <span className="rounded border border-zinc-700 bg-zinc-800/50 px-2 py-1 text-xs text-zinc-400">Hidden</span>
            </div>
          </div>
          <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-4">
            <h3 className="mb-1 font-semibold text-white">
              Concealed Hand (门清)
            </h3>
            <p className="mb-2 text-sm text-zinc-300">
              You haven&apos;t called any discards. All melds are from self-drawn tiles.
            </p>
            <p className="text-xs text-yellow-400 font-medium">
              💎 Scores bonus points &amp; qualifies for special hands!
            </p>
          </div>
        </div>
      </section>

      <div className="flex justify-between border-t border-zinc-800 pt-6">
        <a href="/operations" className="text-sm text-zinc-500 transition hover:text-white">← Table Operations</a>
        <a href="/scoring" className="rounded-lg bg-red-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-red-700">Next: Scoring →</a>
      </div>
    </div>
  );
}
