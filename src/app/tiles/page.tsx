const suits = [
  {
    id: "wan",
    name: "Characters (万子 / Wàn)",
    description: "Chinese numerals on top, 万 (10,000) below",
    tiles: ["1万", "2万", "3万", "4万", "5万", "6万", "7万", "8万", "9万"],
  },
  {
    id: "tong",
    name: "Dots (筒子 / Tǒng)",
    description: 'Also called "Balls" or "Circles"',
    tiles: ["1筒", "2筒", "3筒", "4筒", "5筒", "6筒", "7筒", "8筒", "9筒"],
  },
  {
    id: "tiao",
    name: "Bamboos (条子 / Tiáo)",
    description: 'Also called "Sticks" or "Sou (索)". Note: 1 Bamboo is the bird 🐦',
    tiles: ["1条", "2条", "3条", "4条", "5条", "6条", "7条", "8条", "9条"],
  },
];

const honors = [
  { name: "East Wind (东风)", file: "honor_6_東.png", english: "East" },
  { name: "South Wind (南风)", file: "honor_3_南.png", english: "South" },
  { name: "West Wind (西风)", file: "honor_7_西.png", english: "West" },
  { name: "North Wind (北风)", file: "honor_1_北.png", english: "North" },
];

const dragons = [
  { name: "Red Dragon (红中)", file: "honor_4_中.png", english: "Zhong" },
  { name: "Green Dragon (发财)", file: "honor_5_發.png", english: "Fa" },
  { name: "White Dragon (白板)", file: "honor_2_白.png", english: "Ban" },
];

function TileImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-auto w-16 rounded border border-zinc-700 bg-white shadow-sm transition hover:scale-110 hover:shadow-md sm:w-20"
    />
  );
}

export default function TilesPage() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="mb-2 text-3xl font-bold">Mahjong Tiles</h1>
        <p className="text-zinc-400">
          A standard Cantonese Mahjong set has{" "}
          <strong className="text-white">136 tiles</strong>. They fall into two
          categories: <strong className="text-white">Suit Tiles</strong> and{" "}
          <strong className="text-white">Honor Tiles</strong>.
        </p>
      </section>

      {/* Suit Tiles */}
      <section>
        <h2 className="mb-4 text-2xl font-bold text-red-400">
          ① Suit Tiles (序数牌)
        </h2>
        <p className="mb-6 text-sm text-zinc-500">
          Three suits, numbered 1 to 9. Four copies of each tile (4 × 9 × 3 =
          108 tiles). A Sequence (Chow) can only be formed within the same suit.
        </p>

        <div className="space-y-8">
          {suits.map((suit) => (
            <div
              key={suit.id}
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5"
            >
              <h3 className="mb-1 font-semibold text-white">{suit.name}</h3>
              <p className="mb-4 text-xs text-zinc-600">{suit.description}</p>
              <div className="flex flex-wrap gap-3">
                {suit.tiles.map((t) => (
                  <TileImage
                    key={t}
                    src={`/tiles/${suit.id}_${t.slice(0, 1)}_${t}.png`}
                    alt={t}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Honor Tiles */}
      <section>
        <h2 className="mb-4 text-2xl font-bold text-red-400">
          ② Honor Tiles (字牌)
        </h2>
        <p className="mb-6 text-sm text-zinc-500">
          Four copies of each. Honor tiles can only form Pairs, Triplets, or
          Kongs — they cannot be used in Sequences.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Winds */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <h3 className="mb-1 font-semibold text-white">
              Winds (风牌 / Fēng)
            </h3>
            <p className="mb-4 text-xs text-zinc-600">
              East · South · West · North (4 each = 16 tiles)
            </p>
            <div className="flex flex-wrap gap-3">
              {honors.map((h) => (
                <div key={h.file} className="flex flex-col items-center gap-1">
                  <TileImage src={`/tiles/${h.file}`} alt={h.english} />
                  <span className="text-xs text-zinc-500">{h.english}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dragons */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <h3 className="mb-1 font-semibold text-white">
              Dragons (箭牌 / Jiàn)
            </h3>
            <p className="mb-4 text-xs text-zinc-600">
              Red Zhong · Green Fa · White Ban (4 each = 12 tiles)
            </p>
            <div className="flex flex-wrap gap-3">
              {dragons.map((d) => (
                <div key={d.file} className="flex flex-col items-center gap-1">
                  <TileImage src={`/tiles/${d.file}`} alt={d.english} />
                  <span className="text-xs text-zinc-500">{d.english}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tile Summary Table */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-3 text-lg font-semibold text-white">
          Complete Tile Set Summary
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-700 text-left text-zinc-400">
                <th className="pb-2 pr-4">Category</th>
                <th className="pb-2 pr-4">Tiles</th>
                <th className="pb-2 pr-4">Copies Each</th>
                <th className="pb-2">Total</th>
              </tr>
            </thead>
            <tbody className="text-zinc-300">
              {[
                ["Characters (万)", "1–9", "4", "36"],
                ["Dots (筒)", "1–9", "4", "36"],
                ["Bamboos (条)", "1–9", "4", "36"],
                ["Winds (风)", "东 南 西 北", "4", "16"],
                ["Dragons (箭)", "中 发 白", "4", "12"],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-zinc-800">
                  <td className="py-2 pr-4">{r[0]}</td>
                  <td className="py-2 pr-4">{r[1]}</td>
                  <td className="py-2 pr-4">{r[2]}</td>
                  <td className="py-2 font-medium text-white">{r[3]}</td>
                </tr>
              ))}
              <tr className="text-white">
                <td className="py-2 pr-4 font-bold">Total</td>
                <td className="py-2 pr-4"></td>
                <td className="py-2 pr-4"></td>
                <td className="py-2 font-bold">136</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="flex justify-between border-t border-zinc-800 pt-6">
        <div />
        <a
          href="/basics"
          className="rounded-lg bg-red-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-red-700"
        >
          Next: Basic Combinations →
        </a>
      </div>
    </div>
  );
}
