'use client';

import Image from 'next/image';

// ============================================
// 严格使用用户提供的源数据 - 29个番种
// 唯一修改: 平胡 (Flat Win) 从 0× 改为 1×
// ============================================

const HAND_TYPES = [
  { fan: 1, name: "Flat Win", nameCn: "平胡", tiles: ["w1", "w2", "w3", "t4", "t5", "t6", "w2", "w3", "w4", "b7", "b8", "b9", "h6", "h6"], desc: "4 melds + 1 pair. The most basic winning hand in Mahjong." },
  { fan: 3, name: "Mixed One Suit", nameCn: "混一色", tiles: ["w2", "w3", "w4", "w5", "w5", "w5", "w7", "w8", "w9", "h6", "h6", "h6", "h3", "h3"], desc: "Winning hand composed of one suit (wan/tong/tiao) plus honor tiles." },
  { fan: 3, name: "All Pungs", nameCn: "碰碰胡", tiles: ["w1", "w1", "w1", "w2", "w2", "w2", "t3", "t3", "t3", "b4", "b4", "b4", "h5", "h5"], desc: "Winning hand composed of 4 pungs/kongs and 1 pair." },
  { fan: 4, name: "Seven Pairs", nameCn: "七小对", tiles: ["w1", "w1", "w2", "w2", "w3", "w3", "t4", "t4", "t5", "t5", "h4", "h4", "h3", "h3"], desc: "Winning hand composed of seven pairs." },
  { fan: 6, name: "Mixed Pure Straight", nameCn: "混一色一条龙", tiles: ["w1", "w2", "w3", "w4", "w5", "w6", "w7", "w8", "w9", "h6", "h6", "h6", "h2", "h2"], desc: "One suit 1-9 plus honor tiles." },
  { fan: 6, name: "Full Flush", nameCn: "清一色", tiles: ["w1", "w2", "w3", "w4", "w4", "w4", "w5", "w5", "w5", "w6", "w6", "w6", "w7", "w7"], desc: "Winning hand composed entirely of one numbered suit." },
  { fan: 6, name: "Mixed All Pungs", nameCn: "混碰", tiles: ["w1", "w1", "w1", "w2", "w2", "w2", "w6", "w6", "w6", "h6", "h6", "h6", "h3", "h3"], desc: "4 pungs of one suit plus honor pair." },
  { fan: 7, name: "Mixed Seven Pairs", nameCn: "混七对", tiles: ["w1", "w1", "w2", "w2", "w6", "w6", "w7", "w7", "h4", "h4", "h2", "h2", "h1", "h1"], desc: "Seven pairs of one suit plus honors." },
  { fan: 8, name: "Luxury Seven Pairs", nameCn: "豪华七对", tiles: ["w1", "w1", "w1", "w1", "w2", "w2", "w3", "w3", "t4", "t4", "h4", "h4", "h3", "h3"], desc: "Seven pairs including one concealed kong (4 identical tiles)." },
  { fan: 9, name: "Pure All Pungs", nameCn: "清碰", tiles: ["w1", "w1", "w1", "w2", "w2", "w2", "w5", "w5", "w5", "w7", "w7", "w7", "h3", "h3"], desc: "All pungs of one suit." },
  { fan: 9, name: "Little Three Dragons", nameCn: "小三元", tiles: ["w1", "w1", "w1", "w2", "w2", "w2", "w3", "w3", "w3", "h5", "h5", "h6", "h6", "h6"], desc: "Two dragon pungs plus one dragon pair." },
  { fan: 9, name: "Pure Straight", nameCn: "清一条龙", tiles: ["w1", "w2", "w3", "w4", "w5", "w6", "w7", "w8", "w9", "w2", "w2", "w3", "w3"], desc: "Pure suit 1-9 sequence." },
  { fan: 9, name: "All Terminals", nameCn: "幺九", tiles: ["w1", "w1", "w1", "w9", "w9", "w9", "t1", "t1", "t9", "t9", "b1", "b1", "b9", "b9"], desc: "Only 1 and 9 numbered tiles." },
  { fan: 10, name: "Four Concealed Pungs", nameCn: "四暗刻", tiles: ["w1", "w1", "w1", "w2", "w2", "w2", "w3", "w3", "w3", "w4", "w4", "w4", "h3", "h3"], desc: "Four concealed pungs, won by self-draw." },
  { fan: 13, name: "Thirteen Orphans", nameCn: "十三幺", tiles: ["w1", "w9", "t1", "t9", "b1", "b9", "h1", "h2", "h3", "h4", "h5", "h6", "h1", "h1"], desc: "1 and 9 of each suit, all honors, plus one extra to form a pair." },
  { fan: 13, name: "Little Four Winds", nameCn: "小四喜", tiles: ["h1", "h1", "h1", "h2", "h2", "h2", "h3", "h3", "h3", "h4", "h4", "w5", "w5"], desc: "Three wind pungs plus one wind pair." },
  { fan: 13, name: "Big Three Dragons", nameCn: "大三元", tiles: ["w1", "w1", "w1", "w2", "w2", "w2", "h5", "h5", "h5", "h6", "h6", "h6", "h7", "h7"], desc: "Pungs of all three dragons." },
  { fan: 14, name: "Mixed Luxury Seven Pairs", nameCn: "混一色豪华七对", tiles: ["w1", "w1", "w1", "w1", "w2", "w2", "w3", "w3", "h4", "h4", "h2", "h2", "h1", "h1"], desc: "Luxury seven pairs with one suit plus honors." },
  { fan: 16, name: "Seven Connected Pairs", nameCn: "连七对", tiles: ["w1", "w1", "w2", "w2", "w3", "w3", "w4", "w4", "w5", "w5", "w6", "w6", "w7", "w7"], desc: "Seven consecutive pairs in one suit." },
  { fan: 16, name: "Double Luxury Seven Pairs", nameCn: "双豪七对", tiles: ["w1", "w1", "w1", "w1", "w2", "w2", "w2", "w2", "w3", "w3", "w4", "w4", "h3", "h3"], desc: "Seven pairs with two concealed kongs." },
  { fan: 16, name: "Red Peacock", nameCn: "红孔雀", tiles: ["t1", "t1", "t1", "t5", "t5", "t5", "t7", "t7", "t7", "t9", "t9", "t9", "h5", "h5"], desc: "All tiao (bamboo) plus red dragon." },
  { fan: 16, name: "All Green", nameCn: "绿一色", tiles: ["t2", "t2", "t2", "t3", "t3", "t3", "t4", "t4", "t4", "t6", "t6", "t8", "t8"], desc: "Only green bamboo tiles (2,3,4,6,8 tiao) plus green dragon." },
  { fan: 20, name: "All Honors", nameCn: "字一色", tiles: ["h1", "h1", "h1", "h2", "h2", "h2", "h3", "h3", "h3", "h5", "h5", "h5", "h6", "h6"], desc: "Winning hand composed entirely of honor tiles." },
  { fan: 20, name: "Pure Terminals", nameCn: "清幺九", tiles: ["w1", "w1", "w1", "w9", "w9", "w9", "t1", "t1", "t1", "t9", "t9", "t9", "b1", "b1"], desc: "Only 1 and 9 tiles, all pungs." },
  { fan: 24, name: "Nine Gates", nameCn: "九莲宝灯", tiles: ["w1", "w1", "w1", "w2", "w3", "w4", "w5", "w6", "w7", "w8", "w9", "w9", "w9", "w5"], desc: "1112345678999 in one suit, waiting for any tile of that suit." },
  { fan: 24, name: "Four Kongs", nameCn: "十八罗汉", tiles: ["w1", "w1", "w1", "w1", "w2", "w2", "w2", "w2", "w3", "w3", "w3", "w3", "w4", "w4", "w4", "w4", "h3", "h3"], desc: "Four kongs plus a pair (18 tiles total)." },
  { fan: 24, name: "Big Four Winds", nameCn: "大四喜", tiles: ["h1", "h1", "h1", "h2", "h2", "h2", "h3", "h3", "h3", "h4", "h4", "h4", "w5", "w5"], desc: "Pungs of all four winds." },
  { fan: 24, name: "Triple Luxury Seven Pairs", nameCn: "三豪七对", tiles: ["w1", "w1", "w1", "w1", "w2", "w2", "w2", "w2", "w3", "w3", "w3", "w3", "h3", "h3"], desc: "Seven pairs with three concealed kongs." },
  { fan: 24, name: "Great Seven Stars", nameCn: "大七星", tiles: ["h1", "h1", "h2", "h2", "h3", "h3", "h4", "h4", "h5", "h5", "h6", "h6", "h7", "h7"], desc: "Seven pairs of all honors (4 winds + 3 dragons)." },
];

// 牌面映射
const TILE_MAP: Record<string, string> = {
  'w1': '/tiles/wan_1.png', 'w2': '/tiles/wan_2.png', 'w3': '/tiles/wan_3.png',
  'w4': '/tiles/wan_4.png', 'w5': '/tiles/wan_5.png', 'w6': '/tiles/wan_6.png',
  'w7': '/tiles/wan_7.png', 'w8': '/tiles/wan_8.png', 'w9': '/tiles/wan_9.png',
  't1': '/tiles/tiao_1.png', 't2': '/tiles/tiao_2.png', 't3': '/tiles/tiao_3.png',
  't4': '/tiles/tiao_4.png', 't5': '/tiles/tiao_5.png', 't6': '/tiles/tiao_6.png',
  't7': '/tiles/tiao_7.png', 't8': '/tiles/tiao_8.png', 't9': '/tiles/tiao_9.png',
  'b1': '/tiles/tong_1.png', 'b2': '/tiles/tong_2.png', 'b3': '/tiles/tong_3.png',
  'b4': '/tiles/tong_4.png', 'b5': '/tiles/tong_5.png', 'b6': '/tiles/tong_6.png',
  'b7': '/tiles/tong_7.png', 'b8': '/tiles/tong_8.png', 'b9': '/tiles/tong_9.png',
  'h1': '/tiles/honor_east.png', 'h2': '/tiles/honor_south.png',
  'h3': '/tiles/honor_west.png', 'h4': '/tiles/honor_north.png',
  'h5': '/tiles/honor_chun.png', 'h6': '/tiles/honor_fa.png',
  'h7': '/tiles/honor_zhong.png',
};

// 根据番数获取背景色
function getFanBgColor(fan: number): string {
  if (fan <= 1) return 'bg-gray-500';          // 平胡 - 灰色
  if (fan <= 4) return 'bg-green-600';         // 3-4番 - 绿色
  if (fan <= 7) return 'bg-teal-600';          // 6-7番 - 青色
  if (fan <= 9) return 'bg-blue-600';          // 8-9番 - 蓝色
  if (fan <= 10) return 'bg-indigo-600';       // 10番 - 靛蓝
  if (fan <= 14) return 'bg-purple-600';       // 13-14番 - 紫色
  if (fan <= 16) return 'bg-pink-600';         // 16番 - 粉色
  if (fan <= 20) return 'bg-orange-600';       // 20番 - 橙色
  return 'bg-red-600';                         // 24番 - 红色 (顶级)
}

export default function ScoringPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Chinese Mahjong Scoring Guide
          </h1>
          <p className="text-gray-400 text-lg">
            136 Tiles Official Multiplier Chart • 中国麻将番种计分表
          </p>
        </div>

        {/* 图例 */}
        <div className="bg-gray-800/50 rounded-xl p-6 mb-8 backdrop-blur">
          <h2 className="text-xl font-bold mb-4 text-amber-400">Legend • 图例</h2>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded bg-gray-500 flex items-center justify-center text-white font-bold text-sm">1×</span>
              <span className="text-gray-300">Basic • 基础</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded bg-green-600 flex items-center justify-center text-white font-bold text-sm">3×</span>
              <span className="text-gray-300">Minor • 小番</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-sm">9×</span>
              <span className="text-gray-300">Major • 中番</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded bg-purple-600 flex items-center justify-center text-white font-bold text-sm">13×</span>
              <span className="text-gray-300">Great • 大番</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded bg-pink-600 flex items-center justify-center text-white font-bold text-sm">16×</span>
              <span className="text-gray-300">Premium • 顶番</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded bg-red-600 flex items-center justify-center text-white font-bold text-sm">24×</span>
              <span className="text-gray-300">Limit • 满贯</span>
            </div>
          </div>
        </div>

        {/* 计分表 */}
        <div className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-700/80 text-left">
                <th className="px-4 py-4 font-semibold text-center w-20">Multiplier</th>
                <th className="px-4 py-4 font-semibold w-48">Hand Type</th>
                <th className="px-4 py-4 font-semibold min-w-80">Tiles Example</th>
                <th className="px-4 py-4 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              {HAND_TYPES.map((hand, index) => (
                <tr 
                  key={index} 
                  className={`border-t border-gray-700/50 hover:bg-gray-700/30 transition-colors ${
                    hand.fan === 1 ? 'bg-gray-600/10' : ''
                  }`}
                >
                  {/* 番数 */}
                  <td className="px-4 py-4 text-center">
                    <span className={`inline-block w-14 h-14 rounded-lg ${getFanBgColor(hand.fan)} text-white font-bold text-xl flex items-center justify-center shadow-lg`}>
                      {hand.fan}×
                    </span>
                  </td>
                  
                  {/* 牌型名称 */}
                  <td className="px-4 py-4 align-top">
                    <div className="font-bold text-lg text-white">
                      {hand.name}
                    </div>
                    <div className="text-gray-400 text-sm mt-1">
                      {hand.nameCn}
                    </div>
                  </td>
                  
                  {/* 牌面展示 */}
                  <td className="px-4 py-4 align-top min-w-80">
                    <div className="flex flex-nowrap gap-0.5 items-center">
                      {hand.tiles.map((tile, tIdx) => (
                        <Image
                          key={tIdx}
                          src={TILE_MAP[tile]}
                          alt={tile}
                          width={28}
                          height={36}
                          className="flex-shrink-0"
                          priority={tIdx < 14}
                        />
                      ))}
                    </div>
                  </td>
                  
                  {/* 描述 */}
                  <td className="px-4 py-4 align-top text-gray-300 leading-relaxed">
                    {hand.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 底部说明 */}
        <div className="mt-8 bg-gray-800/50 rounded-xl p-6 backdrop-blur">
          <h3 className="text-lg font-bold text-amber-400 mb-3">Notes • 说明</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• <strong className="text-white">Flat Win (平胡)</strong> displayed as 1× multiplier as requested.</li>
            <li>• All hand types and tile examples are strictly based on the official Chinese Mahjong 136-tiles reference.</li>
            <li>• Higher multiplier hands include lower multipliers within them (they stack cumulatively).</li>
            <li>• Special hands (Thirteen Orphans, Nine Gates, etc.) have unique winning conditions.</li>
          </ul>
        </div>

        {/* 页脚 */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Chinese Mahjong Guide • 中国麻将指南</p>
          <p className="mt-1">Based on official 136-tiles Mahjong rules</p>
        </div>
      </div>
    </main>
  );
}
