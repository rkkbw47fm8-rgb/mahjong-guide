function TileImg({ src, alt, size = "h-10 w-10" }: { src: string; alt: string; size?: string }) {
  return (
    <img src={src} alt={alt} className={`${size} rounded border border-zinc-700 bg-white shadow-sm`} />
  );
}

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

      {/* Universal Winning Formula */}
      <section className="rounded-xl border border-green-800 bg-green-900/10 p-6 text-center">
        <h2 className="mb-2 text-xl font-bold text-green-400">🧮 Universal Winning Formula</h2>
        <p className="mb-4 text-sm text-zinc-400">
          Every winning hand is made of these 3 building blocks:
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-3">
            <div className="text-lg font-bold text-yellow-400">Triplet</div>
            <div className="text-xs text-zinc-500">刻子 — 3 identical tiles</div>
            <div className="mt-2 flex justify-center gap-1">
              <TileImg src="/tiles/wan_5.png" alt="" size="h-8 w-8" />
              <TileImg src="/tiles/wan_5.png" alt="" size="h-8 w-8" />
              <TileImg src="/tiles/wan_5.png" alt="" size="h-8 w-8" />
            </div>
          </div>
          <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-3">
            <div className="text-lg font-bold text-blue-400">Sequence</div>
            <div className="text-xs text-zinc-500">顺子 — 3 consecutive numbers</div>
            <div className="mt-2 flex justify-center gap-1">
              <TileImg src="/tiles/tong_3.png" alt="" size="h-8 w-8" />
              <TileImg src="/tiles/tong_4.png" alt="" size="h-8 w-8" />
              <TileImg src="/tiles/tong_5.png" alt="" size="h-8 w-8" />
            </div>
          </div>
          <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-3">
            <div className="text-lg font-bold text-red-400">Pair</div>
            <div className="text-xs text-zinc-500">将牌 — 2 identical tiles</div>
            <div className="mt-2 flex justify-center gap-1">
              <TileImg src="/tiles/tiao_1.png" alt="" size="h-8 w-8" />
              <TileImg src="/tiles/tiao_1.png" alt="" size="h-8 w-8" />
            </div>
          </div>
        </div>
        <div className="mt-4 text-lg font-bold text-white">
          4 × (Triplet <span className="text-zinc-500">or</span> Sequence) + 1 × Pair = <span className="text-green-400">WIN!</span>
        </div>
      </section>

      {/* Complete Hand Example */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-3 text-xl font-bold text-red-400">Complete Hand Example (14 tiles)</h2>
        <div className="flex flex-wrap items-center justify-center gap-1">
          <TileImg src="/tiles/tong_2.png" alt="" size="h-9 w-9" />
          <TileImg src="/tiles/tong_3.png" alt="" size="h-9 w-9" />
          <TileImg src="/tiles/tong_4.png" alt="" size="h-9 w-9" />
          <span className="mx-1 text-zinc-600">|</span>
          <TileImg src="/tiles/tiao_6.png" alt="" size="h-9 w-9" />
          <TileImg src="/tiles/tiao_6.png" alt="" size="h-9 w-9" />
          <TileImg src="/tiles/tiao_6.png" alt="" size="h-9 w-9" />
          <span className="mx-1 text-zinc-600">|</span>
          <TileImg src="/tiles/wan_1.png" alt="" size="h-9 w-9" />
          <TileImg src="/tiles/wan_2.png" alt="" size="h-9 w-9" />
          <TileImg src="/tiles/wan_3.png" alt="" size="h-9 w-9" />
          <span className="mx-1 text-zinc-600">|</span>
          <TileImg src="/tiles/honor_east.png" alt="" size="h-9 w-9" />
          <TileImg src="/tiles/honor_east.png" alt="" size="h-9 w-9" />
          <TileImg src="/tiles/honor_east.png" alt="" size="h-9 w-9" />
          <span className="mx-1 text-zinc-600">|</span>
          <TileImg src="/tiles/honor_red.png" alt="" size="h-9 w-9" />
          <TileImg src="/tiles/honor_red.png" alt="" size="h-9 w-9" />
        </div>
        <p className="mt-3 text-center text-xs text-zinc-500">
          Sequence (顺子) | Triplet (刻子) | Sequence | Triplet | Pair (将牌) = <strong className="text-green-400">WIN!</strong>
        </p>
      </section>

      {/* Ready to Win */}
      <section className="rounded-xl border border-red-800 bg-red-900/10 p-5">
        <h2 className="mb-2 text-xl font-bold text-red-400">Ready to WIN! — 听牌 (Ting Pai)</h2>
        <p className="text-sm text-zinc-300">
          When your hand needs just <strong className="text-white">one more tile</strong> to complete the winning pattern.
        </p>
        <p className="mt-2 text-xs text-zinc-500">
          At this point, you&apos;re &ldquo;on a wait&rdquo; — any player who discards your needed tile lets you win immediately!
        </p>
      </section>

      {/* Pair */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-2 text-xl font-bold text-red-400">① Pair (对子)</h2>
        <p className="mb-3 text-sm text-zinc-400">
          Two identical tiles. Also called the &ldquo;Eyes&rdquo; (将牌).
        </p>
        <div className="flex flex-wrap gap-2">
          <TileImg src="/tiles/wan_5.png" alt="5万" />
          <TileImg src="/tiles/wan_5.png" alt="5万" />
        </div>
        <p className="mt-3 text-xs text-zinc-600">
          A standard winning hand must have exactly one Pair.
        </p>
      </section>

      {/* Sequence */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-2 text-xl font-bold text-red-400">② Sequence (顺子)</h2>
        <p className="mb-3 text-sm text-zinc-400">
          Three consecutive numbers in the <strong className="text-white">same suit</strong>.
        </p>
        <div className="flex flex-wrap gap-2">
          <TileImg src="/tiles/tong_3.png" alt="3筒" />
          <TileImg src="/tiles/tong_4.png" alt="4筒" />
          <TileImg src="/tiles/tong_5.png" alt="5筒" />
        </div>
        <p className="mt-3 text-xs text-zinc-600">
          In Chinese Mahjong, Sequences can only be formed from <strong className="text-white">self-drawn</strong> tiles. You cannot call a discard to form a sequence (No Chow rule).
        </p>
      </section>

      {/* Triplet */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-2 text-xl font-bold text-red-400">③ Triplet (刻子)</h2>
        <p className="mb-3 text-sm text-zinc-400">
          Three identical tiles. Can be formed by Pung (calling a discard) or self-drawn.
        </p>
        <div className="flex flex-wrap gap-2">
          <TileImg src="/tiles/honor_red.png" alt="中" />          
          <TileImg src="/tiles/honor_red.png" alt="中" />
          <TileImg src="/tiles/honor_red.png" alt="中" />
        </div>
      </section>

      {/* Kong */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-2 text-xl font-bold text-red-400">④ Kong (杠)</h2>
        <p className="mb-3 text-sm text-zinc-400">
          Four identical tiles. Functions like a Triplet but needs an extra tile.
        </p>
        <div className="flex flex-wrap gap-2">
          <TileImg src="/tiles/honor_green.png" alt="发" />
          <TileImg src="/tiles/honor_green.png" alt="发" />
          <TileImg src="/tiles/honor_green.png" alt="发" />
          <TileImg src="/tiles/honor_green.png" alt="发" />
        </div>
        <div className="mt-3 rounded-lg border border-yellow-700 bg-yellow-900/20 p-3">
          <p className="text-xs text-yellow-300">
            💡 Kong counts as one meld but uses 4 tiles. You must draw a replacement tile from the back of the wall.
          </p>
        </div>
      </section>

      {/* Meld */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-2 text-xl font-bold text-red-400">⑤ Meld (面子)</h2>
        <p className="mb-3 text-sm text-zinc-400">
          Any valid set of tiles — a Sequence, Triplet, or Kong. A winning hand needs 4 Melds + 1 Pair.
        </p>
      </section>

      <div className="flex justify-between border-t border-zinc-800 pt-6">
        <a href="/tiles" className="text-sm text-zinc-500 transition hover:text-white">← Tiles</a>
        <a href="/game" className="rounded-lg bg-red-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-red-700">Next: Game Setup →</a>
      </div>
    </div>
  );
}
