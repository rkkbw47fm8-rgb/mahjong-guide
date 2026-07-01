"use client";

function tileCodeToPath(code: string): string {
  const suit = code[0];
  const num = code.slice(1);
  const map: Record<string, string> = {
    h1: "honor_east", h2: "honor_south", h3: "honor_west", h4: "honor_north",
    h5: "honor_red", h6: "honor_green", h7: "honor_white",
    w: "wan", t: "tiao", b: "tong",
  };
  if (suit === "h") return `/tiles/${map[code]}.png`;
  return `/tiles/${map[suit]}_${num}.png`;
}

const COLORS: Record<number, string> = {
  0: "#888", 3: "#e87070", 4: "#e89050", 6: "#d09030", 7: "#c08030",
  8: "#b07030", 9: "#d06060", 10: "#c05050", 11: "#b04040",
  13: "#a03030", 16: "#902828", 20: "#802020", 24: "#701818",
};

interface HandRow {
  mult: number;
  name: string;       // Chinese
  engName: string;    // English
  tiles: string[];
  desc: string;       // Chinese
}

const HANDS: HandRow[] = [
  { mult: 0, name: "平胡", engName: "Ping Hu (All Sequences)", tiles: ["w1","w2","w3","t4","t5","t6","w2","w3","w4","b7","b8","b9","h6","h6"], desc: "4 sequences + 1 pair — basic winning hand" },
  { mult: 3, name: "混一色", engName: "Mixed One Suit", tiles: ["w2","w3","w4","w5","w5","w5","w7","w8","w9","h6","h6","h6","h3","h3"], desc: "One suit + honor tiles" },
  { mult: 3, name: "碰碰胡", engName: "Pung Pung (All Triplets)", tiles: ["w1","w1","w1","w2","w2","w2","t3","t3","t3","b4","b4","b4","h5","h5"], desc: "4 triplets/kongs + 1 pair" },
  { mult: 4, name: "七小对", engName: "Seven Pairs", tiles: ["w1","w1","w2","w2","w3","w3","t4","t4","t5","t5","h4","h4","h3","h3"], desc: "7 pairs. No stacking with All Triplets" },
  { mult: 6, name: "混碰", engName: "Mixed Pung Pung", tiles: ["w1","w1","w1","w2","w2","w2","w6","w6","w6","h6","h6","h6","h3","h3"], desc: "4 triplets + honor tiles" },
  { mult: 6, name: "清一色", engName: "Full Flush", tiles: ["w1","w2","w3","w4","w4","w4","w5","w5","w5","w6","w6","w6","w7","w7"], desc: "All tiles from ONE suit, no honors" },
  { mult: 6, name: "混一条龙", engName: "Mixed Pure Straight", tiles: ["w1","w2","w3","w4","w6","w7","w8","w9","h6","h6","h6","h2","h2","h2"], desc: "One suit 1-9 + honors" },
  { mult: 7, name: "混七对", engName: "Mixed Seven Pairs", tiles: ["w1","w1","w2","w2","w6","w6","w7","w7","h4","h4","h2","h2","h1","h1"], desc: "One suit + honors, 7 pairs" },
  { mult: 8, name: "豪华七对", engName: "Luxury Seven Pairs", tiles: ["w1","w1","w2","w2","w3","w3","t5","t5","t5","t5","h4","h4","h3","h3"], desc: "7 pairs with 4 identical tiles" },
  { mult: 9, name: "清碰", engName: "Pure Pung Pung", tiles: ["w1","w1","w1","w2","w2","w2","w4","w4","w4","w6","w6","w6","w7","w7"], desc: "All triplets from one suit" },
  { mult: 9, name: "小三元", engName: "Small Three Dragons", tiles: ["h4","h4","h4","h5","h5","h5","h2","h2","h2","t1","t1","t1","t3","t3"], desc: "2 dragon triplets + 1 dragon pair" },
  { mult: 9, name: "清一条龙", engName: "Pure Straight", tiles: ["t1","t2","t3","t4","t5","t6","t7","t8","t9","t3","t3","t3","t5","t5"], desc: "Full 1-9 sequence in one suit" },
  { mult: 9, name: "混么九", engName: "Mixed Terminals", tiles: ["w1","w1","w1","w9","w9","w9","t9","t9","t9","h6","h6","h6","h7","h7"], desc: "1s and 9s only + honors" },
  { mult: 10, name: "四暗刻", engName: "Four Concealed Triplets", tiles: ["w1","w1","w1","b9","b9","b9","h2","h2","h2","h6","h6","h6","t4","t4"], desc: "All 4 melds are concealed triplets" },
  { mult: 11, name: "混豪七对", engName: "Mixed Luxury 7 Pairs", tiles: ["w1","w1","w2","w2","w3","w3","w6","w6","h4","h4","h2","h2","h1","h1"], desc: "One suit + honors, 7 pairs, 1 quad" },
  { mult: 13, name: "十三幺", engName: "Thirteen Orphans", tiles: ["w1","w9","t1","t9","b1","b9","h1","h2","h3","h4","h5","h6","h7","w1"], desc: "1 terminal/honor each + 1 duplicate" },
  { mult: 13, name: "小四喜", engName: "Small Four Winds", tiles: ["h6","h6","h6","h3","h3","h3","h7","h7","h7","h1","h1","h1","h2","h2"], desc: "3 wind triplets + 1 wind pair" },
  { mult: 13, name: "大三元", engName: "Big Three Dragons", tiles: ["h4","h4","h4","h5","h5","h5","h2","h2","h2","t2","t2","t2","t4","t4"], desc: "Triplets of all 3 dragons" },
  { mult: 16, name: "连七对", engName: "Seven Consecutive Pairs", tiles: ["w1","w1","w2","w2","w3","w3","w4","w4","w5","w5","w6","w6","w7","w7"], desc: "7 consecutive pairs in one suit" },
  { mult: 16, name: "双豪七对", engName: "Double Luxury 7 Pairs", tiles: ["w1","w1","w2","w2","w3","w3","w4","w4","w5","w5","w6","w6","b6","b6"], desc: "7 pairs with 2 quads" },
  { mult: 16, name: "红孔雀", engName: "Red Peacock", tiles: ["b1","b1","b1","b5","b5","b5","b7","b7","b7","b9","b9","b9","h4","h4"], desc: "Bamboo 1,5,7,9 + Red Dragon only" },
  { mult: 16, name: "绿一色", engName: "Green One Suit", tiles: ["b2","b2","b2","b3","b3","b3","b4","b4","b4","b6","b6","b6","h5","h5"], desc: "Bamboo 2,3,4,6,8 + Green Dragon" },
  { mult: 20, name: "字一色", engName: "All Honors", tiles: ["h6","h6","h6","h3","h3","h3","h7","h7","h7","h4","h4","h4","h2","h2"], desc: "All tiles are winds and dragons" },
  { mult: 20, name: "清幺九", engName: "Pure Terminals", tiles: ["w1","w1","w1","w9","w9","w9","t1","t1","t1","t9","t9","t9","b1","b1"], desc: "1s and 9s only (no honors)" },
  { mult: 24, name: "九莲宝灯", engName: "Nine Gates", tiles: ["t1","t1","t1","t2","t3","t4","t5","t6","t7","t8","t9","t9","t9","t2"], desc: "Concealed—9 gates ready for any 9th tile" },
  { mult: 24, name: "十八罗汉", engName: "Eighteen Arhats", tiles: ["w1","w1","w1","w1","t3","t3","t3","t3","b5","b5","b5","b5","h6","h6"], desc: "4 kongs (18 tiles in hand)" },
  { mult: 24, name: "大四喜", engName: "Big Four Winds", tiles: ["h6","h6","h6","h3","h3","h3","h7","h7","h7","h1","h1","h1","w1","w1"], desc: "Triplets of all 4 winds" },
  { mult: 24, name: "三豪七对", engName: "Triple Luxury 7 Pairs", tiles: ["w1","w1","w2","w2","w3","w3","w4","w4","w5","w5","w6","w6","b6","b6"], desc: "7 pairs with 3 quads" },
  { mult: 24, name: "大七星", engName: "Big Seven Stars", tiles: ["h6","h6","h7","h7","h3","h3","h1","h1","h4","h4","h5","h5","h2","h2"], desc: "7 honor pairs — all 7 honors" },
];

function Legend({ colors }: { colors: Record<number, string> }) {
  const legendItems = [
    { range: "3-4×", color: colors[3], bg: "bg-red-50" },
    { range: "6×", color: colors[6], bg: "bg-orange-50" },
    { range: "7-8×", color: colors[8], bg: "bg-amber-50" },
    { range: "9-11×", color: colors[9], bg: "bg-pink-50" },
    { range: "13-16×", color: colors[13], bg: "bg-rose-50" },
    { range: "20-24×", color: colors[20], bg: "bg-red-100" },
  ];
  return (
    <div className="mb-4 flex flex-wrap gap-3 text-xs">
      {legendItems.map((item) => (
        <div key={item.range} className="flex items-center gap-1.5">
          <div className="h-4 w-8 rounded" style={{ background: item.color }} />
          <span className="text-zinc-400">{item.range}</span>
        </div>
      ))}
    </div>
  );
}

export default function ScoringPage() {
  // Group hands by multiplier
  const groups: { mult: number; hands: HandRow[] }[] = [];
  for (const hand of HANDS) {
    const g = groups.find((g) => g.mult === hand.mult);
    if (g) g.hands.push(hand);
    else groups.push({ mult: hand.mult, hands: [hand] });
  }

  return (
    <div className="space-y-6">
      <section>
        <h1 className="mb-2 text-3xl font-bold">Scoring Table</h1>
        <p className="text-zinc-400">
          Complete Chinese Mahjong scoring reference with visual tile examples.
          Multiplier × 2 base point.
        </p>
      </section>

      {/* Legend */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
        <h3 className="mb-2 text-sm font-semibold text-zinc-300">🎨 Color Legend</h3>
        <Legend colors={COLORS} />
        <div className="flex flex-wrap gap-4 text-xs text-zinc-500">
          <span>Base point: 2</span>
          <span>Payout = multiplier × 2</span>
          <span>Self-draw: each opponent pays ×2</span>
          <span>Discard: discarder pays ×2</span>
        </div>
      </section>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-700 bg-zinc-800/50 text-left">
              <th className="w-14 px-2 py-3 text-center text-zinc-400">×</th>
              <th className="px-3 py-3 text-zinc-300">Hand Type</th>
              <th className="px-3 py-3 text-zinc-300">Tile Example</th>
              <th className="hidden px-3 py-3 text-zinc-300 sm:table-cell">Description</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group) =>
              group.hands.map((hand, idx) => (
                <tr
                  key={`${hand.name}-${idx}`}
                  className="border-b border-zinc-800 transition hover:bg-zinc-800/30"
                >
                  {idx === 0 ? (
                    <td
                      className="px-2 py-3 text-center text-lg font-bold text-white"
                      rowSpan={group.hands.length}
                      style={{
                        background: COLORS[hand.mult] || "#888",
                        minWidth: 48,
                      }}
                    >
                      {hand.mult}×
                    </td>
                  ) : null}
                  <td className="px-3 py-2.5 font-medium text-white">
                    {hand.engName}
                    <br />
                    <span className="text-xs text-zinc-500">{hand.name}</span>
                  </td>
                  <td className="whitespace-nowrap px-3 py-2">
                    <div className="flex flex-wrap gap-0.5">
                      {hand.tiles.map((code, ti) => (
                        <img
                          key={`${code}-${ti}`}
                          src={tileCodeToPath(code)}
                          alt={code}
                          className="inline-block h-10 w-8 object-contain"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  </td>
                  <td className="hidden px-3 py-2.5 text-zinc-400 sm:table-cell">
                    {hand.desc}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Notes */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-3 text-lg font-bold text-white">Notes</h2>
        <ul className="space-y-2 text-sm text-zinc-400">
          <li>• {`Robbing a Kong / Kong on self-draw: the robbed player pays all`}</li>
          <li>• {`Thirteen Orphans can rob a concealed kong`}</li>
          <li>• {`False win (诈胡): pay according to pending multiplier`}</li>
          <li>• {`Kong bonuses are separate — 1pt (exposed), 2pt (concealed), 3pt (direct from discarder)`}</li>
          <li>• {`Seven Pairs, Luxury Seven Pairs, and Thirteen Orphans don't count as concealed hand`}</li>
          <li>• {`Multiple hand types multiply together (with exceptions)`}</li>
        </ul>
      </section>

      <div className="flex justify-between border-t border-zinc-800 pt-6">
        <a href="/winning" className="text-sm text-zinc-500 transition hover:text-white">
          ← Winning
        </a>
        <a
          href="/glossary"
          className="rounded-lg bg-red-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-red-700"
        >
          Next: Glossary →
        </a>
      </div>
    </div>
  );
}
