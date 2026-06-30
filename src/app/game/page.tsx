export default function GamePage() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="mb-2 text-3xl font-bold">Setting Up a Game</h1>
        <p className="text-zinc-400">
          A standard game of Chinese Mahjong involves 4 players. Here&apos;s how
          to get started.
        </p>
      </section>

      {/* 1. Seating */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-2 text-xl font-bold text-red-400">
          ① Seating &amp; Turn Order
        </h2>
        <p className="mb-3 text-sm text-zinc-400">
          Players sit around a square table. Turns go <strong>counter-clockwise</strong>.
        </p>
        <div className="mx-auto mb-3 grid max-w-[240px] grid-cols-3 gap-1 text-center text-xs">
          <div></div>
          <div className="rounded bg-zinc-800 p-2 text-white">Dealer (庄)</div>
          <div></div>
          <div className="rounded bg-zinc-800 p-2 text-zinc-400">Left (上家)</div>
          <div className="rounded bg-zinc-800 p-2 text-yellow-500">YOU</div>
          <div className="rounded bg-zinc-800 p-2 text-zinc-400">Right (下家)</div>
          <div></div>
          <div className="rounded bg-zinc-800 p-2 text-white">Opposite (对家)</div>
          <div></div>
        </div>
        <p className="text-xs text-zinc-500">
          Draw and discard: Dealer → Right → Opposite → Left → Dealer...
        </p>
      </section>

      {/* 2. Building the Wall */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-2 text-xl font-bold text-red-400">
          ② Building the Wall
        </h2>
        <ol className="space-y-2 text-sm text-zinc-300">
          <li>1. Shuffle all 136 tiles face-down on the table.</li>
          <li>
            2. Each player builds a wall in front of them: 2 tiles high, 18 stacks
            (36 tiles per wall).
          </li>
          <li>3. Push all four walls together to form a square.</li>
        </ol>
      </section>

      {/* 3. Choosing the Dealer */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-2 text-xl font-bold text-red-400">
          ③ Choosing the Dealer (定庄)
        </h2>
        <ul className="space-y-2 text-sm text-zinc-300">
          <li>
            <strong className="text-white">First game:</strong> Each player rolls
            two dice. Highest total becomes the dealer.
          </li>
          <li>
            <strong className="text-white">Dealer stays:</strong> If the dealer
            wins or the hand ends in a draw.
          </li>
          <li>
            <strong className="text-white">Dealer passes:</strong> If a non-dealer
            wins, the next player clockwise becomes the new dealer.
          </li>
        </ul>
      </section>

      {/* 4. Opening the Wall */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-2 text-xl font-bold text-red-400">
          ④ Opening the Wall (掷骰开门)
        </h2>
        <p className="mb-3 text-sm text-zinc-400">
          The dealer rolls two dice to decide where to break the wall.
        </p>
        <table className="mb-3 w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-700 text-left text-zinc-500">
              <th className="pb-2 pr-4">Dice Total</th>
              <th className="pb-2">Wall to Break</th>
            </tr>
          </thead>
          <tbody className="text-zinc-300">
            {[
              ["5 or 9", "Dealer&apos;s own wall"],
              ["2, 6, or 10", "Player to dealer&apos;s right"],
              ["3, 7, or 11", "Player opposite the dealer"],
              ["4, 8, or 12", "Player to dealer&apos;s left"],
            ].map((r) => (
              <tr key={r[0]} className="border-b border-zinc-800">
                <td className="py-1 pr-4 font-medium text-white">{r[0]}</td>
                <td className="py-1" dangerouslySetInnerHTML={{ __html: r[1] }} />
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-zinc-500">
          Count the smaller dice number from the right edge of the target wall.
          Skip that many stacks, then start taking tiles from the next stack.
        </p>
        <div className="mt-3 rounded-lg border border-zinc-700 bg-zinc-800/50 p-3">
          <p className="text-xs text-zinc-400">
            <strong className="text-white">Example:</strong> Dice show 3 + 5 = 8.
            Small number = 3. Break the opponent&apos;s wall, skip 3 stacks from
            the right, start drawing from stack #4.
          </p>
        </div>
      </section>

      {/* 5. Drawing */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-2 text-xl font-bold text-red-400">
          ⑤ Drawing Tiles
        </h2>
        <ol className="space-y-2 text-sm text-zinc-300">
          <li>
            1. Dealer draws 2 stacks (4 tiles), then the next player draws 2
            stacks, and so on counter-clockwise.
          </li>
          <li>2. Repeat for 3 rounds = each player has 12 tiles.</li>
          <li>
            3. Dealer takes 2 more tiles (total 14). Each non-dealer takes 1 more
            (total 13).
          </li>
          <li>4. Dealer starts the game by discarding 1 tile face-up.</li>
        </ol>
        <div className="mt-4 rounded-lg border border-green-800 bg-green-900/20 p-3">
          <p className="text-xs text-green-300">
            ✅ Dealer: 14 tiles (draws and discards first). Others: 13 tiles.
          </p>
        </div>
      </section>

      {/* 6. Game Flow */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h2 className="mb-2 text-xl font-bold text-red-400">
          ⑥ Normal Play Flow
        </h2>
        <div className="flow-text space-y-2 text-sm text-zinc-300">
          <p>1. Draw 1 tile from the wall.</p>
          <p>2. Check if you can declare Mahjong (win).</p>
          <p>3. Optional: Declare Kong (if you have 4 identical).</p>
          <p>4. Discard 1 tile face-up to the center.</p>
          <p>5. Other players may call Pung, Kong, or Mahjong on your discard.</p>
          <p>6. If no one calls, the next player draws and repeats.</p>
        </div>
      </section>

      <div className="flex justify-between border-t border-zinc-800 pt-6">
        <a href="/basics" className="text-sm text-zinc-500 transition hover:text-white">← Combinations</a>
        <a href="/operations" className="rounded-lg bg-red-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-red-700">Next: Table Operations →</a>
      </div>
    </div>
  );
}
