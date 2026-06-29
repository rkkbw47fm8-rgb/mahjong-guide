export default function ScoringPage() {
  const hands = [
    { n: 1, name: "Pung Pung (碰碰胡)", mult: "3×", desc: "All four melds are Triplets or Kongs. No Sequences." },
    { n: 2, name: "Mixed One Suit (混一色)", mult: "3×", desc: "One suit + Honor tiles only." },
    { n: 3, name: "Seven Pairs (七小对)", mult: "4×", desc: "Seven Pairs. Cannot combine with All Triplets or Big Four Happiness." },
    { n: 4, name: "Full Flush (清一色)", mult: "6×", desc: "All tiles are from ONE suit. No Honors." },
    { n: 5, name: "Pure Straight (一条龙)", mult: "6× (Mixed) / 9× (Pure)", desc: "A full 1–9 sequence in one suit. Mixed = 2 suits, Pure = 1 suit." },
    { n: 6, name: "Luxury Seven Pairs (豪华七对)", mult: "8× / 16× / 32×", desc: "Seven Pairs with 4 identical tiles. Double = 16×, Triple = 32×." },
    { n: 7, name: "Small Three Dragons (小三元)", mult: "9×", desc: "Two Triplets + one Pair of Dragons (中发白). Pattern: 3-3-2." },
    { n: 8, name: "Terminals (幺九)", mult: "9× / 12× / 20×", desc: "Only 1s and 9s. Mixed = 9×, Half = 12×, Pure = 20×." },
    { n: 9, name: "Four Concealed Triplets (四暗刻)", mult: "10×", desc: "All four melds are concealed Triplets. Pattern: 3-3-3-3-2." },
    { n: 10, name: "Thirteen Orphans (十三幺)", mult: "13×", desc: "One of each terminal and honor: 1s, 9s, Winds, Dragons + one duplicate." },
    { n: 11, name: "Small Four Winds (小四喜)", mult: "16×", desc: "Three Triplets + one Pair of Winds. Pattern: 3-3-3-2." },
    { n: 12, name: "Big Three Dragons (大三元)", mult: "16×", desc: "Three Triplets of all three Dragons. Pattern: 3-3-3." },
    { n: 13, name: "Seven Consecutive Pairs (七连对)", mult: "16×", desc: "7 consecutive Pairs. Extremely rare." },
    { n: 14, name: "Red Peacock (红孔雀)", mult: "20×", desc: "Bamboo tiles 1, 5, 7, 9 + Red Dragon only. All must be present." },
    { n: 15, name: "Blue One Se (蓝一色)", mult: "20×", desc: "East, South, West, North, White, and 8 Dot only. Cannot combine with All Honors." },
    { n: 16, name: "Green One Se (绿一色)", mult: "20×", desc: "Bamboo tiles 2, 3, 4, 6, 8 + Green Dragon only." },
    { n: 17, name: "All Honors (字一色)", mult: "20×", desc: "All tiles are Winds and Dragons. No suits at all." },
    { n: 18, name: "Big Four Winds (大四喜)", mult: "24×", desc: "Four Triplets of all four Winds." },
    { n: 19, name: "Eighteen Arhats (十八罗汉)", mult: "24×", desc: "Four Kongs (18 tiles in hand). The ultimate meld-based hand." },
    { n: 20, name: "Nine Gates (九连宝灯)", mult: "24×", desc: "Concealed hand only. Has all nine numbers of one suit + any 9th tile." },
    { n: 21, name: "Seven Stars (七星)", mult: "24×", desc: "Seven different honor tiles. Cannot stack with All Triplets or Four Happiness." },
    { n: 22, name: "Earthly Hand (地胡)", mult: "50×", desc: "Non-dealer wins on first turn. By discard or self-draw on first draw." },
    { n: 23, name: "Heavenly Hand (天胡)", mult: "50×", desc: "Dealer wins with initial 14 tiles before playing." },
  ];

  return (
    <div className="space-y-8">
      <section>
        <h1 className="mb-2 text-3xl font-bold">Scoring Table</h1>
        <p className="text-zinc-400">
          All 23 recognized winning hand types with their multipliers. Hand types
          can usually be combined (multiply the multipliers).
        </p>
      </section>

      {/* Notes */}
      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-yellow-800 bg-yellow-900/20 p-4">
          <h3 className="mb-1 text-sm font-semibold text-yellow-300">📋 Notes</h3>
          <ul className="space-y-1 text-xs text-zinc-400">
            <li>• Kong bonuses are separate from hand multipliers.</li>
            <li>• Concealed Kong = 1× self-draw, Exposed/Added = 0.5×</li>
            <li>• Multiple hand types multiply together (with exceptions).</li>
            <li>• Seven Pairs does not stack with All Triplets / Four Happiness.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-yellow-800 bg-yellow-900/20 p-4">
          <h3 className="mb-1 text-sm font-semibold text-yellow-300">🎯 Bonus Rules</h3>
          <ul className="space-y-1 text-xs text-zinc-400">
            <li>• Robbing the Kong: robber wins, the robbed player pays all</li>
            <li>• Bottom of the Sea (last tile): hand multiplier ×2</li>
            <li>• Flower on Kong: hand multiplier ×2</li>
            <li>• Both Sea + Kong: hand multiplier ×4</li>
            <li>• 12 exposed tiles (3 public melds): max 6×, payer covers all</li>
          </ul>
        </div>
      </section>

      {/* Scoring Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-700 bg-zinc-800/50 text-left">
              <th className="sticky top-12 w-10 px-2 py-3 text-center text-zinc-500">#</th>
              <th className="px-3 py-3 text-zinc-300">Hand Name</th>
              <th className="w-20 px-3 py-3 text-center text-zinc-300">Multiplier</th>
              <th className="hidden px-3 py-3 text-zinc-400 sm:table-cell">Description</th>
            </tr>
          </thead>
          <tbody>
            {hands.map((h, i) => (
              <tr
                key={h.n}
                className={`border-b border-zinc-800 transition hover:bg-zinc-800/30 ${
                  h.mult === "50×"
                    ? "bg-red-900/10"
                    : parseInt(h.mult) >= 20
                      ? "bg-yellow-900/10"
                      : ""
                }`}
              >
                <td className="px-2 py-2.5 text-center text-zinc-600">{h.n}</td>
                <td className="px-3 py-2.5 font-medium text-white">
                  {h.name}
                  {h.n === 1 && <span className="ml-2 text-xs text-green-400">Common</span>}
                  {h.n === 4 && <span className="ml-2 text-xs text-green-400">Common</span>}
                  {h.n === 22 && <span className="ml-2 text-xs text-red-400">Top</span>}
                  {h.n === 23 && <span className="ml-2 text-xs text-red-400">Top</span>}
                </td>
                <td className="px-3 py-2.5 text-center font-bold">
                  <span
                    className={
                      h.mult === "50×"
                        ? "text-red-400"
                        : parseInt(h.mult) >= 20
                          ? "text-yellow-400"
                          : parseInt(h.mult) >= 10
                            ? "text-orange-400"
                            : "text-zinc-300"
                    }
                  >
                    {h.mult}
                  </span>
                </td>
                <td className="hidden px-3 py-2.5 text-zinc-400 sm:table-cell">
                  {h.desc}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Kong scoring reminder */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-3 text-lg font-bold text-white">Kong Scoring Recap</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-3 text-center">
            <p className="text-lg font-bold text-green-400">1×</p>
            <p className="text-xs text-zinc-400">Concealed Kong</p>
          </div>
          <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-3 text-center">
            <p className="text-lg font-bold text-yellow-400">0.5×</p>
            <p className="text-xs text-zinc-400">Direct Kong</p>
          </div>
          <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-3 text-center">
            <p className="text-lg font-bold text-yellow-400">0.5×</p>
            <p className="text-xs text-zinc-400">Added Kong</p>
          </div>
        </div>
        <p className="mt-3 text-xs text-zinc-500">
          Kong payouts are calculated separately and added to the hand score.
        </p>
      </section>

      <div className="flex justify-between border-t border-zinc-800 pt-6">
        <a href="/winning" className="text-sm text-zinc-500 transition hover:text-white">← Winning</a>
        <a href="/glossary" className="rounded-lg bg-red-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-red-700">Next: Glossary →</a>
      </div>
    </div>
  );
}
