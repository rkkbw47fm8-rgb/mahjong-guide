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
  1: "#9ca3af", 2: "#6b7280",
  3: "#e87070", 4: "#e89050",
  6: "#d09030", 7: "#c08030",
  8: "#b07030", 9: "#d06060",
  10: "#c05050", 11: "#b04040",
  12: "#22c55e", 13: "#a03030",
  16: "#902828", 20: "#802020",
  24: "#701818", 32: "#601010",
  48: "#500808", 64: "#400040",
  88: "#ec4899",
};

interface HandRow {
  mult: number;
  name: string;       // Chinese
  engName: string;    // English (American standard)
  tiles: string[];
  desc: string;       // English description
}

const HANDS: HandRow[] = [
  // 1×
  { mult: 1, name: "平胡", engName: "All Chows", tiles: ["w1","w2","w3","t4","t5","t6","b2","b3","b4","b7","b8","b9","h6","h6"], desc: "4 sequences + 1 pair. Basic winning hand with no special points." },
  
  // 2×
  { mult: 2, name: "断幺", engName: "All Simples", tiles: ["w2","w3","w4","t4","t5","t6","b2","b3","b4","b5","b6","b7","h6","h6"], desc: "No terminal tiles (1s or 9s) and no honor tiles." },
  { mult: 2, name: "门清", engName: "Concealed Hand", tiles: ["w1","w2","w3","t4","t5","t6","b2","b3","b4","b7","b8","b9","h6","h6"], desc: "All melds formed in hand - no tiles called or melded from discards." },
  { mult: 2, name: "边张", engName: "Edge Wait", tiles: ["w1","w2","w3","t4","t5","t6","b2","b3","b4","b7","b8","b9","h6","h6"], desc: "Waiting specifically for tile 3 or 7 to complete a sequence." },
  { mult: 2, name: "嵌张", engName: "Closed Wait", tiles: ["w1","w2","w3","t4","t5","t6","b2","b3","b4","b7","b8","b9","h6","h6"], desc: "Waiting for the middle tile of a sequence (e.g., 2 and 4 waiting for 3)." },
  { mult: 2, name: "单钓", engName: "Single Wait", tiles: ["w1","w2","w3","t4","t5","t6","b2","b3","b4","b7","b8","b9","h6","h6"], desc: "Waiting for a single tile to complete the pair (eye)." },
  { mult: 2, name: "自摸", engName: "Self-Draw", tiles: ["w1","w2","w3","t4","t5","t6","b2","b3","b4","b7","b8","b9","h6","h6"], desc: "Winning on a tile drawn from the wall, not from a discard." },
  { mult: 2, name: "暗杠", engName: "Concealed Kong", tiles: ["w1","w1","w1","w1","t4","t5","t6","b2","b3","b4","b7","b8","b9","h6"], desc: "Four identical tiles held entirely in hand - no tiles revealed." },

  // 4×
  { mult: 4, name: "对对胡", engName: "All Triplets", tiles: ["w1","w1","w1","w5","w5","w5","t3","t3","t3","b4","b4","b4","h5","h5"], desc: "Four triplets or kongs plus one pair. No sequences allowed." },
  { mult: 4, name: "混一色", engName: "Mixed One Suit", tiles: ["w2","w3","w4","w5","w5","w5","w7","w8","w9","h6","h6","h6","h3","h3"], desc: "All tiles from one suit plus honor tiles (winds or dragons)." },
  { mult: 4, name: "七对", engName: "Seven Pairs", tiles: ["w1","w1","w2","w2","w3","w3","t4","t4","t5","t5","h4","h4","h3","h3"], desc: "Seven pairs of tiles. Special hand type - does not stack with All Triplets." },

  // 6×
  { mult: 6, name: "大于五", engName: "Lesser Honors & Knitted", tiles: ["w6","w7","w8","t6","t6","t6","b7","b8","b9","w7","w8","w9","h6","h6"], desc: "All numbered tiles are 6 or higher plus honors." },
  { mult: 6, name: "小于五", engName: "Lesser Honors & Knitted", tiles: ["w1","w2","w3","t1","t2","t3","b2","b2","b2","w3","w4","w5","h6","h6"], desc: "All numbered tiles are 5 or lower plus honors." },
  { mult: 6, name: "全带五", engName: "All Fives", tiles: ["w3","w4","w5","t4","t5","t6","b5","b5","b5","w5","w6","w7","h5","h5"], desc: "Every meld and the pair must contain a 5 tile." },

  // 8×
  { mult: 8, name: "七星不靠", engName: "Knitted Straight", tiles: ["w1","w4","w7","t2","t5","t8","b3","b6","b9","h1","h2","h3","h4","h5"], desc: "Seven honors plus tiles 1-4-7, 2-5-8, 3-6-9 across three suits." },
  { mult: 8, name: "三连刻", engName: "Shifted Pungs", tiles: ["w1","w1","w1","w2","w2","w2","w3","w3","w3","t5","t5","t5","h6","h6"], desc: "Three consecutive triplets in the same suit." },
  { mult: 8, name: "三色三同顺", engName: "Triple Pungs", tiles: ["w1","w2","w3","t1","t2","t3","b1","b2","b3","t5","t5","t5","h6","h6"], desc: "Three identical sequences, one in each suit." },

  // 12×
  { mult: 12, name: "凑一色", engName: "Lesser Honors & Knitted", tiles: ["w1","w2","w3","w5","w6","w7","w8","w8","w8","h5","h5","h5","h6","h6"], desc: "One suit patterns with honor tiles - mixed suit combinations." },
  { mult: 12, name: "清龙", engName: "Pure Double Chow", tiles: ["w1","w2","w3","w4","w5","w6","w7","w8","w9","t5","t5","t5","h6","h6"], desc: "Complete 1-9 sequence within one suit plus other melds." },
  { mult: 12, name: "一色三同顺", engName: "Shifted Chows", tiles: ["w1","w2","w3","w1","w2","w3","w1","w2","w3","t5","t5","t5","h6","h6"], desc: "Three identical sequences all in the same suit." },

  // 16×
  { mult: 16, name: "全不靠", engName: "Outside Hand", tiles: ["w1","w4","w7","t2","t5","t8","b3","b6","b9","h1","h2","h3","h4","h5"], desc: "No consecutive numbers - tiles must be at least 3 apart plus honors." },
  { mult: 16, name: "七对", engName: "Fully Concealed Hand", tiles: ["w1","w1","w2","w2","w3","w3","t4","t4","t5","t5","h4","h4","h3","h3"], desc: "Seven pairs - completely concealed, no melds exposed." },

  // 24×
  { mult: 24, name: "七对", engName: "Seven Pairs", tiles: ["w1","w1","w2","w2","w3","w3","t4","t4","t5","t5","h4","h4","h3","h3"], desc: "Seven pairs - standard 24 point variant in some rule sets." },
  { mult: 24, name: "五门齐", engName: "All Types", tiles: ["w1","w2","w3","t4","t5","t6","b2","b3","b4","h5","h5","h5","h1","h1"], desc: "All three suits plus both wind and dragon tiles represented." },
  { mult: 24, name: "全求人", engName: "All Terminals", tiles: ["w1","w1","w1","w9","w9","w9","t1","t1","t1","h6","h6","h6","h3","h3"], desc: "All melds formed by calling discards - win on last tile discard." },

  // 32×
  { mult: 32, name: "四杠", engName: "Four Kongs", tiles: ["w1","w1","w1","w1","t3","t3","t3","t3","b5","b5","b5","b5","h6","h6"], desc: "Four kongs in one hand - also called 'Eighteen Arhats' (18 tiles)." },
  { mult: 32, name: "绿一色", engName: "All Green", tiles: ["t2","t2","t2","t3","t3","t3","t4","t4","t4","t6","t6","t6","h5","h5"], desc: "Only green bamboo tiles 2,3,4,6,8 plus Green Dragon tiles." },

  // 48×
  { mult: 48, name: "九莲宝灯", engName: "Nine Gates", tiles: ["w1","w1","w1","w2","w3","w4","w5","w6","w7","w8","w9","w9","w9","w5"], desc: "Concealed 1-1-1-2-3-4-5-6-7-8-9-9-9 pattern - ready for any tile." },
  { mult: 48, name: "字一色", engName: "All Honors", tiles: ["h1","h1","h1","h2","h2","h2","h3","h3","h3","h5","h5","h5","h6","h6"], desc: "All tiles are honor tiles (winds and dragons) - no suit tiles." },

  // 64×
  { mult: 64, name: "四暗刻", engName: "Four Concealed Triplets", tiles: ["w1","w1","w1","w5","w5","w5","t3","t3","t3","b4","b4","b4","h5","h5"], desc: "Four concealed triplets - no melds exposed before winning." },
  { mult: 64, name: "大三元", engName: "Great Dragons", tiles: ["h5","h5","h5","h6","h6","h6","h7","h7","h7","w1","w2","w3","t5","t5"], desc: "Triplets of all three dragon tiles (Red, Green, White)." },

  // 88×
  { mult: 88, name: "十三幺", engName: "Thirteen Orphans", tiles: ["w1","w9","t1","t9","b1","b9","h1","h2","h3","h4","h5","h6","h7","w1"], desc: "One of each terminal (1,9) and honor tile plus one duplicate pair." },
  { mult: 88, name: "大四喜", engName: "Four Great Winds", tiles: ["h1","h1","h1","h2","h2","h2","h3","h3","h3","h4","h4","h4","w1","w1"], desc: "Triplets of all four wind tiles (East, South, West, North)." },
];

function Legend({ colors }: { colors: Record<number, string> }) {
  const legendItems = [
    { range: "1×", color: colors[1], bg: "bg-gray-50" },
    { range: "2×", color: colors[2], bg: "bg-gray-100" },
    { range: "3-4×", color: colors[3], bg: "bg-red-50" },
    { range: "6-8×", color: colors[6], bg: "bg-orange-50" },
    { range: "9-12×", color: colors[9], bg: "bg-pink-50" },
    { range: "13-24×", color: colors[13], bg: "bg-rose-50" },
    { range: "32-48×", color: colors[32], bg: "bg-red-100" },
    { range: "64-88×", color: colors[88], bg: "bg-pink-100" },
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
  groups.sort((a, b) => a.mult - b.mult);

  return (
    <div className="space-y-6">
      <section>
        <h1 className="mb-2 text-3xl font-bold">Scoring Table</h1>
        <p className="text-zinc-400">
          Complete Chinese Mahjong 136-tiles scoring reference with visual tile examples.
          Base point = 2, payout = multiplier × 2.
        </p>
      </section>

      {/* Legend */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
        <h3 className="mb-2 text-sm font-semibold text-zinc-300">🎨 Multiplier Color Legend</h3>
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
                  <td className="px-3 py-2.5 font-medium text-white align-top">
                    {hand.engName}
                    <br />
                    <span className="text-xs text-zinc-500">{hand.name}</span>
                  </td>
                  <td className="px-1 py-2 align-top" style={{ minWidth: 320 }}>
                    <div className="flex flex-nowrap gap-0 flex-shrink-0">
                      {hand.tiles.map((code, ti) => (
                        <img
                          key={`${code}-${ti}`}
                          src={tileCodeToPath(code)}
                          alt={code}
                          className="inline-block object-contain"
                          width={28}
                          height={36}
                          loading="lazy"
                        />
                      ))}
                    </div>
                  </td>
                  <td className="hidden px-3 py-2.5 text-zinc-400 sm:table-cell align-top" style={{ minWidth: 200 }}>
                    {hand.desc}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Notes */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
        <h3 className="mb-3 text-sm font-semibold text-zinc-300">📋 Important Notes</h3>
        <ul className="space-y-2 text-xs text-zinc-400">
          <li><span className="font-medium text-zinc-300">Robbing a Kong / Kong Bomb:</span> The Kong declarer pays all three opponents.</li>
          <li><span className="font-medium text-zinc-300">Thirteen Orphans:</span> May rob a concealed Kong.</li>
          <li><span className="font-medium text-zinc-300">False Win:</span> Compensate at the waiting-hand multiplier.</li>
          <li><span className="font-medium text-zinc-300">Seven Pairs:</span> Exclude Triplets &amp; Four Winds bonuses.</li>
          <li><span className="font-medium text-zinc-300">Double/Triple Luxury Pairs:</span> Include Triplets bonuses; Triple Luxury also includes Four Winds.</li>
          <li><span className="font-medium text-zinc-300">Concealed Hand:</span> Seven Pairs series, Thirteen Orphans &amp; Four Concealed Triplets do not count as Concealed Hand.</li>
          <li><span className="font-medium text-zinc-300">House Rules:</span> Additional rules may be agreed upon before the game starts.</li>
        </ul>
      </section>
    </div>
  );
}