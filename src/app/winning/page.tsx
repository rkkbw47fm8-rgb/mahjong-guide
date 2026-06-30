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
