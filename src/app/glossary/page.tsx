export default function GlossaryPage() {
  const terms = [
    // Tiles
    { en: "Suit Tiles", cn: "序数牌", desc: "The three numbered suits: Characters, Dots, and Bamboos. Each has numbers 1–9." },
    { en: "Characters / Wan", cn: "万子", desc: "The suit with red Chinese numerals. Represents 10,000 (万)." },
    { en: "Dots / Tong", cn: "筒子", desc: "The suit with circular patterns. Also called Balls or Circles." },
    { en: "Bamboos / Tiao", cn: "条子", desc: "The suit with bamboo stick patterns. Also called Sou (索). 1 Bamboo is a bird." },
    { en: "Honor Tiles", cn: "字牌", desc: "Non-suited tiles: Winds and Dragons. Only form Pairs/Triplets/Kongs." },
    { en: "Winds (East/South/West/North)", cn: "风牌", desc: "Four directional tiles: 东, 南, 西, 北. Four copies each = 16 tiles." },
    { en: "Dragons (Red/Green/White)", cn: "箭牌", desc: "Three dragon tiles: 中 (Red), 发 (Green), 白 (White). Four copies each = 12 tiles." },

    // Combinations
    { en: "Pair / Eyes", cn: "对子 / 将牌", desc: "Two identical tiles. Every winning hand needs exactly one Pair." },
    { en: "Sequence / Chow", cn: "顺子", desc: "Three consecutive numbers in the same suit. Cannot be formed by calling a discard in this ruleset." },
    { en: "Triplet / Pung", cn: "刻子", desc: "Three identical tiles. Concealed (drawn) or Exposed (called from a discard)." },
    { en: "Kong", cn: "杠", desc: "Four identical tiles. Three types: Concealed, Direct, Added. Requires a replacement draw." },
    { en: "Meld", cn: "面子", desc: "A general term for Sequences, Triplets, and Kongs. 4 Melds + 1 Pair = winning hand." },

    // Game flow
    { en: "Dealer", cn: "庄家", desc: "The player who rolls dice and starts each hand. Has 14 tiles initially." },
    { en: "Wall", cn: "牌墙", desc: "The 2-tile-high, 18-stack-long wall each player builds in front of them." },
    { en: "Dead Wall", cn: "牌尾", desc: "The last few stacks of the wall. Used to draw replacement tiles after a Kong." },
    { en: "Drawing", cn: "摸牌", desc: "Taking a tile from the wall at the start of your turn." },
    { en: "Discard", cn: "出牌 / 打牌", desc: "Placing a tile face-up in the center after drawing." },

    // Operations
    { en: "Pung (Call)", cn: "碰", desc: "Claiming a discard to complete a Triplet. You must have the other two in hand. Priority over Chow." },
    { en: "Concealed Kong", cn: "暗杠", desc: "Four identical tiles all drawn from the wall. Kept face-down. Worth 1×." },
    { en: "Direct Kong", cn: "点杠", desc: "Calling a discarded tile with three already in hand. Everything exposed. Worth 0.5×." },
    { en: "Added Kong", cn: "补杠", desc: "Adding a 4th tile to an existing exposed Pung. The only Kong that can be robbed. Worth 0.5×." },
    { en: "Rob the Kong", cn: "抢杠", desc: "Winning by taking the 4th tile of an opponent's Added Kong. The robbed player pays all." },

    // Winning
    { en: "Mahjong", cn: "胡牌", desc: "Declaring you have a winning hand. Ends the current hand and triggers scoring." },
    { en: "Win by Discard (Point-cannon)", cn: "点炮", desc: "Winning by calling another player's discard. Only the discarder pays." },
    { en: "Win by Self-Draw", cn: "自摸", desc: "Drawing the winning tile from the wall. All three opponents pay." },
    { en: "Ready Hand / Fishing", cn: "听牌", desc: "One tile away from a winning hand. Just need the right tile to complete it." },
    { en: "False Mahjong", cn: "诈胡", desc: "Incorrectly declaring Mahjong. Penalty: pay each opponent a fixed amount." },

    // Special
    { en: "Heavenly Hand", cn: "天胡", desc: "Dealer wins with initial 14 tiles. 50× multiplier." },
    { en: "Earthly Hand", cn: "地胡", desc: "Non-dealer wins on first turn. 50×." },
    { en: "Bottom of the Sea", cn: "海底捞月", desc: "Winning with the last tile from the wall. Hand multiplier ×2." },
    { en: "Flower on Kong", cn: "杠上开花", desc: "Drawing the winning tile from the Kong replacement stack. Hand multiplier ×2." },
    { en: "Heavenly Hand + Bottom Sea", cn: "天胡海底捞", desc: "Both conditions apply: multiplier ×4." },

    // Scoring
    { en: "Multiplier / Fan", cn: "倍数", desc: "The base scoring unit. Hand multipliers are multiplied together for combined hands." },
    { en: "Base Score", cn: "底分", desc: "The predetermined value of 1 unit. Typically agreed before play (e.g., 10 or 20 points)." },
    { en: "Full Table Pay", cn: "包牌", desc: "When one player covers all three opponents' losses. Triggered by: Robbing Kong, 12 exposed tiles (6×+), etc." },
  ];

  // Group by category
  const groups: { title: string; items: typeof terms }[] = [
    { title: "📦 Tiles", items: terms.filter(t => ["Suit Tiles", "Characters / Wan", "Dots / Tong", "Bamboos / Tiao", "Honor Tiles", "Winds (East/South/West/North)", "Dragons (Red/Green/White)"].includes(t.en)) },
    { title: "🔗 Combinations", items: terms.filter(t => ["Pair / Eyes", "Sequence / Chow", "Triplet / Pung", "Kong", "Meld"].includes(t.en)) },
    { title: "🎲 Game Flow", items: terms.filter(t => ["Dealer", "Wall", "Dead Wall", "Drawing", "Discard"].includes(t.en)) },
    { title: "✋ Operations", items: terms.filter(t => ["Pung (Call)", "Concealed Kong", "Direct Kong", "Added Kong", "Rob the Kong"].includes(t.en)) },
    { title: "🏆 Winning", items: terms.filter(t => ["Mahjong", "Win by Discard (Point-cannon)", "Win by Self-Draw", "Ready Hand / Fishing", "False Mahjong"].includes(t.en)) },
    { title: "💫 Special Situations", items: terms.filter(t => ["Heavenly Hand", "Earthly Hand", "Bottom of the Sea", "Flower on Kong", "Heavenly Hand + Bottom Sea"].includes(t.en)) },
    { title: "💰 Scoring", items: terms.filter(t => ["Multiplier / Fan", "Base Score", "Full Table Pay"].includes(t.en)) },
  ];

  return (
    <div className="space-y-12">
      <section>
        <h1 className="mb-2 text-3xl font-bold">Glossary</h1>
        <p className="text-zinc-400">
          All key terms in English and Chinese. Bookmark this page for quick
          reference during play.
        </p>
      </section>

      {groups.map((group) => (
        <section key={group.title}>
          <h2 className="mb-4 text-xl font-bold">{group.title}</h2>
          <div className="space-y-3">
            {group.items.map((term) => (
              <div
                key={term.en}
                className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4"
              >
                <div className="mb-1 flex items-baseline gap-3">
                  <h3 className="font-semibold text-white">{term.en}</h3>
                  <span className="text-xs text-zinc-600">{term.cn}</span>
                </div>
                <p className="text-sm text-zinc-400">{term.desc}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <div className="flex justify-between border-t border-zinc-800 pt-6">
        <a href="/scoring-chart.html" className="text-sm text-zinc-500 transition hover:text-white">← Scoring</a>
        <div />
      </div>
    </div>
  );
}
