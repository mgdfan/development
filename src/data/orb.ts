export default function getOrbs() {
  return [
    {
      name: 'コボルト',
      class: 'ラッシュ',
      rarelity: 'N',
      requirement: 'ラッシュ',
      type: '獣人',
      passive: '装備者の海洋生物系モンスターへのダメージが8%上昇する',
      active: 'コボルト剣術・初段（1ターン）',
      active_detail: '敵単体に攻撃力1.5倍のダメージ'
    },
    {
      name: 'かまいたち',
      class: 'ラッシュ',
      rarelity: 'N',
      requirement: 'ラッシュ',
      type: '獣人',
      passive: '装備者の即死耐性が20%上昇する',
      active: 'ウィーゼルシックル（1ターン）',
      active_detail: '敵単体に攻撃力1.5倍のダメージ'
    },
    {
      name: '迷宮ワーム',
      class: 'カウンター',
      rarelity: 'N',
      requirement: 'カウンター',
      type: '爬虫類',
      passive: '装備者が受けるダメージを3%軽減する',
      active: '強かじり（1ターン）',
      active_detail: '敵単体に攻撃力1.5倍のダメージ'
    },
    {
      name: '吸血こうもり',
      class: 'カウンター',
      rarelity: 'N',
      requirement: 'カウンター',
      type: '飛行',
      passive: '装備者のノックバック、引き寄せ耐性が20%上昇する',
      active: '吸血かみつき（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍のダメージさらに与えたダメージの20%を吸収する'
    },
    {
      name: 'プラント',
      class: 'カウンター',
      rarelity: 'N',
      requirement: 'カウンター',
      type: '植物',
      passive: '装備者の海洋生物系モンスターへのダメージが8%上昇する',
      active: 'くらくら種鉄砲（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍のダメージさらに2ターンの間、敵をめまい状態にする'
    },
    {
      name: 'つちのこ',
      class: 'カウンター',
      rarelity: 'N',
      requirement: 'カウンター',
      type: '爬虫類',
      passive: '装備者の感電耐性が20%上昇する',
      active: '暗闇かじり（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍のダメージさらに2ターンの間、敵を暗闇状態にする'
    },
    {
      name: '洞窟ねずみ',
      class: 'ラッシュ',
      rarelity: 'N',
      requirement: 'ラッシュ',
      type: '獣',
      passive: '装備者の防御力が6%上昇する',
      active: '紫電の鼠牙（2ターン）',
      active_detail: '敵単体に攻撃力1.5倍の雷ダメージさらに覚醒ゲージを-1する'
    },
    {
      name: '腐肉喰らい',
      class: 'ラッシュ',
      rarelity: 'N',
      requirement: 'ラッシュ',
      type: '獣',
      passive: '装備者のHPが100%のとき、攻撃力が4%上昇する',
      active: '烈風の鼠牙（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍のダメージさらに2ターンの間、敵を毒状態にする'
    },
    {
      name: '魔導コボルト',
      class: 'バースト',
      rarelity: 'N',
      requirement: 'バースト',
      type: '獣人',
      passive: '装備者のフォトン容量低下耐性が20%上昇する',
      active: 'コボルトファイア（2ターン）',
      active_detail: '敵単体に攻撃力1.5倍の火ダメージさらにチャージを追加する'
    },
    {
      name: 'ドレイクハンター',
      class: 'バースト',
      rarelity: 'N',
      requirement: 'バースト',
      type: '多足類',
      passive: '装備者の多足類系モンスターへのダメージが8%上昇する',
      active: '土蜘蛛の手繰り糸（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍のダメージさらに2ターンの間、敵を引き寄せ状態にする'
    },
    {
      name: 'ウインドビーク',
      class: 'カウンター',
      rarelity: 'N',
      requirement: 'カウンター',
      type: '獣人,飛行',
      passive: '装備者の虫系モンスターへのダメージが8%上昇する',
      active: 'イーグルウイング（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍のダメージさらに2ターンの間、敵をめまい状態にする'
    },
    {
      name: 'ドラゴンフェイス',
      class: 'カウンター',
      rarelity: 'N',
      requirement: 'カウンター',
      type: '爬虫類',
      passive: '装備者が3%の確率でダメージを無効にする',
      active: 'くらくらかじり（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍のダメージさらに2ターンの間、敵をめまい状態にする'
    },
    {
      name: 'ジャッカルワスプ',
      class: 'カウンター',
      rarelity: 'N',
      requirement: 'カウンター',
      type: '虫,飛行',
      passive: '装備者の爬虫類系モンスターへのダメージが8%上昇する',
      active: 'くらくらニードル（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍のダメージさらに2ターンの間、敵をめまい状態にする'
    },
    {
      name: 'オートブロッカー',
      class: 'バースト',
      rarelity: 'N',
      requirement: 'バースト',
      type: '物体',
      passive: '装備者の龍系モンスターへのダメージが8%上昇する',
      active: 'シールドカバー（2ターン）',
      active_detail:
        '2ターンの間、すべての単体攻撃を受け持ち自身の防御力が40%上昇する'
    },
    {
      name: 'テンプルヘッド',
      class: 'バースト',
      rarelity: 'N',
      requirement: 'バースト',
      type: '物体',
      passive: '装備者の与える回復量が8%上昇する',
      active: 'トーテムアイス（2ターン）',
      active_detail: '敵単体に攻撃力1.5倍のダメージさらにチャージを追加する'
    },
    {
      name: 'ランブルバイパー',
      class: 'カウンター',
      rarelity: 'N',
      requirement: 'カウンター',
      type: '爬虫類',
      passive: '装備者の多足類系モンスターへのダメージが8%上昇する',
      active: 'びりびりかじり（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍のダメージさらに2ターンの間、敵を感電状態にする'
    },
    {
      name: 'ナイトメアバット',
      class: 'カウンター',
      rarelity: 'N',
      requirement: 'カウンター',
      type: '飛行',
      passive: '装備者の攻撃力が2%上昇する',
      active: '吸血かぶりつき（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍のダメージさらに与えたダメージの20%を吸収する'
    },
    {
      name: 'ソードマスター',
      class: 'ラッシュ',
      rarelity: 'N',
      requirement: 'ラッシュ',
      type: '獣人',
      passive: '装備者の毒耐性が20%上昇する',
      active: 'コボルト剣術・三段（1ターン）',
      active_detail: '敵単体に攻撃力1.5倍のダメージ'
    },
    {
      name: 'クレイジーマウス',
      class: 'ラッシュ',
      rarelity: 'N',
      requirement: 'ラッシュ',
      type: '獣',
      passive: '装備者の大幻獣系モンスターへのダメージが8%上昇する',
      active: '不浄の鼠牙（1ターン）',
      active_detail: '敵単体に攻撃力1倍の2連続ダメージ'
    },
    {
      name: '狂血獣',
      class: 'ラッシュ',
      rarelity: 'N',
      requirement: 'ラッシュ',
      type: '獣人',
      passive: '装備者の睡眠耐性が20%上昇する',
      active: '狂血の鎌（1ターン）',
      active_detail: '敵単体に攻撃力1.5倍のダメージ'
    },
    {
      name: 'ビーストマン',
      class: 'ラッシュ',
      rarelity: 'N',
      requirement: 'ラッシュ',
      type: '獣人',
      passive: '装備者の覚醒減少耐性が20%上昇する',
      active: 'コボルト剣術・五段（1ターン）',
      active_detail: '敵単体に攻撃力1.5倍のダメージ'
    },
    {
      name: 'スペルウィーゼル',
      class: 'ラッシュ',
      rarelity: 'N',
      requirement: 'ラッシュ',
      type: '獣人',
      passive: '装備者のHPが3%上昇する',
      active: 'そよそよボール（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍のダメージさらに2ターンの間、敵を呪い状態にする'
    },
    {
      name: 'アグリーデビル',
      class: 'ラッシュ',
      rarelity: 'N',
      requirement: 'ラッシュ',
      type: '飛行,悪魔',
      passive: '装備者の大幻獣系モンスターへのダメージが8%上昇する',
      active: 'デビルクロー（2ターン）',
      active_detail: '敵単体に攻撃力1倍の2連続ダメージさらにアタックを追加する'
    },
    {
      name: '魂狩り師',
      class: 'ラッシュ',
      rarelity: 'N',
      requirement: 'ラッシュ',
      type: '獣人',
      passive: '装備者が受けるダメージを3%軽減する',
      active: '魂狩りの鎌（1ターン）',
      active_detail: '敵単体に攻撃力1.5倍のダメージ'
    },
    {
      name: 'バトルジョーカー',
      class: 'ラッシュ',
      rarelity: 'N',
      requirement: 'ラッシュ',
      type: '獣人',
      passive: '装備者の与える回復量が8%上昇する',
      active: 'びりびりボール（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍の雷ダメージさらに2ターンの間、敵を呪い状態にする'
    },
    {
      name: '魔導シールド',
      class: 'バースト',
      rarelity: 'N',
      requirement: 'バースト',
      type: '物体',
      passive: '装備者の神系モンスターへのダメージが8%上昇する',
      active: 'シールドガード（2ターン）',
      active_detail:
        '2ターンの間、すべての単体攻撃を受け持ち自身の防御力が40%上昇する'
    },
    {
      name: 'コープスリック',
      class: 'バースト',
      rarelity: 'N',
      requirement: 'バースト',
      type: '物体',
      passive: '装備者のステータス弱体耐性が20%上昇する',
      active: 'トーテムサンダー（2ターン）',
      active_detail: '敵単体に攻撃力1.5倍の雷ダメージさらにチャージを追加する'
    },
    {
      name: '嵐亀',
      class: 'カウンター',
      rarelity: 'N',
      requirement: 'カウンター',
      type: '海洋生物',
      passive: '装備者が受けるダメージを3%軽減する',
      active: 'こもりアタック（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍のダメージさらに2ターンの間、自身の防御力を40%上昇させる'
    },
    {
      name: 'ビーシルフ',
      class: 'カウンター',
      rarelity: 'N',
      requirement: 'カウンター',
      type: '虫,飛行',
      passive: '装備者のフォトン容量低下耐性が20%上昇する',
      active: 'ダークニードル（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍のダメージさらに2ターンの間、敵を暗闇状態にする'
    },
    {
      name: 'グリーンフェイズ',
      class: 'バースト',
      rarelity: 'N',
      requirement: 'バースト',
      type: '多足類',
      passive: '装備者のHPが50%以下のとき、6%の確率でダメージを無効にする',
      active: '風蜘蛛の手繰り糸（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍のダメージさらに2ターンの間、敵を引き寄せ状態にする'
    },
    {
      name: '水獣ソーサラー',
      class: 'バースト',
      rarelity: 'N',
      requirement: 'バースト',
      type: '獣人',
      passive: '装備者が受けるダメージを3%軽減する',
      active: 'おうえん！（1ターン）',
      active_detail: '味方単体にチャージを追加する'
    },
    {
      name: 'ブラッディエッジ',
      class: 'ラッシュ',
      rarelity: 'N',
      requirement: 'ラッシュ',
      type: '獣人',
      passive: '装備者のHPが100%のとき、攻撃力が4%上昇する',
      active: '景気づけ！（1ターン）',
      active_detail: '2ターンの間、味方単体の攻撃力を20%上昇させる'
    },
    {
      name: '魔導ビースト',
      class: 'ラッシュ',
      rarelity: 'N',
      requirement: 'ラッシュ',
      type: '獣人',
      passive: '装備者の獣系モンスターへのダメージが8%上昇する',
      active: 'かちかちボール（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍のダメージさらに2ターンの間、敵を呪い状態にする'
    },
    {
      name: 'グランドマウス',
      class: 'ラッシュ',
      rarelity: 'N',
      requirement: 'ラッシュ',
      type: '獣',
      passive: '装備者が致死ダメージを受けたとき、3%の確率で踏みとどまる',
      active: '大地の鼠牙（1ターン）',
      active_detail: '敵単体に攻撃力1倍の2連続ダメージ'
    },
    {
      name: 'いたちブラスター',
      class: 'ラッシュ',
      rarelity: 'N',
      requirement: 'ラッシュ',
      type: '獣人',
      passive: '装備者が攻撃を受けたとき、3%の確率で反撃する',
      active: 'いたちおうえん！（1ターン）',
      active_detail: '味方単体にアタックを追加する'
    },
    {
      name: 'ダークマジシャン',
      class: 'カウンター',
      rarelity: 'N',
      requirement: 'カウンター',
      type: '爬虫類',
      passive: '装備者の獣人系モンスターへのダメージが8%上昇する',
      active: 'リザードサンダー（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍のダメージさらに2ターンの間、敵が積めるフォトンの量を-1する'
    },
    {
      name: '人食い樹',
      class: 'カウンター',
      rarelity: 'N',
      requirement: 'カウンター',
      type: '植物',
      passive: '装備者の攻撃力が2%上昇する',
      active: '真っ暗種鉄砲（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍のダメージさらに2ターンの間、敵を暗闇状態にする'
    },
    {
      name: 'クロウロブスター',
      class: 'バースト',
      rarelity: 'N',
      requirement: 'バースト',
      type: '海洋生物',
      passive: '装備者が攻撃時、防御力を20%無視する',
      active: 'ボルトアタック（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍の雷ダメージさらに2ターンの間、敵を感電状態にする'
    },
    {
      name: 'シードランチャー',
      class: 'バースト',
      rarelity: 'N',
      requirement: 'バースト',
      type: '植物',
      passive: '装備者の獣系モンスターへのダメージが8%上昇する',
      active: 'びりびり種鉄砲（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍のダメージさらに2ターンの間、敵を感電状態にする'
    },
    {
      name: 'シルバーアサシン',
      class: 'カウンター',
      rarelity: 'N',
      requirement: 'カウンター',
      type: '爬虫類',
      passive: '装備者の凍結耐性が20%上昇する',
      active: '睡眠かじり（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍のダメージさらに70%の確率で、2ターンの間、敵を睡眠状態にする'
    },
    {
      name: 'パワーランサー',
      class: 'カウンター',
      rarelity: 'N',
      requirement: 'カウンター',
      type: '爬虫類,海洋生物',
      passive: '装備者のフォトン奪取耐性が20%上昇する',
      active: 'フリーズスピア（1ターン）',
      active_detail: '敵単体に攻撃力1.5倍のダメージ'
    },
    {
      name: '忌まわしき影',
      class: 'バースト',
      rarelity: 'N',
      requirement: 'バースト',
      type: '悪魔',
      passive: '装備者が致死ダメージを受けたとき、3%の確率で踏みとどまる',
      active: '迫る絶望（3ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍のダメージさらに2ターンの間、敵を毒状態にし、チャージを追加する'
    },
    {
      name: 'ロイヤルフェザー',
      class: 'ラッシュ',
      rarelity: 'N',
      requirement: 'ラッシュ',
      type: '獣人,飛行',
      passive: '装備者の不定形系モンスターへのダメージが8%上昇する',
      active: '尊大なる翼（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍のダメージさらに2ターンの間、敵をめまい状態にする'
    },
    {
      name: 'パワーウッド',
      class: 'ラッシュ',
      rarelity: 'N',
      requirement: 'ラッシュ',
      type: '植物',
      passive: '装備者が3%の確率でダメージを無効にする',
      active: 'フォリエージハンマー（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍のダメージさらに2ターンの間、敵をめまい状態にする'
    },
    {
      name: 'アースウィーゼル',
      class: 'ラッシュ',
      rarelity: 'N',
      requirement: 'ラッシュ',
      type: '獣人',
      passive: '装備者の古代生物系モンスターへのダメージが8%上昇する',
      active: 'ウィーゼルファルクス（1ターン）',
      active_detail: '敵単体に攻撃力1.5倍のダメージ'
    },
    {
      name: '八つ裂きシックル',
      class: 'バースト',
      rarelity: 'N',
      requirement: 'バースト',
      type: '獣人',
      passive: '装備者の神系モンスターへのダメージが8%上昇する',
      active: '八つ裂き（1ターン）',
      active_detail: '敵単体に攻撃力1.5倍のダメージ'
    },
    {
      name: '辻斬りドッグ',
      class: 'バースト',
      rarelity: 'N',
      requirement: 'バースト',
      type: '獣人',
      passive: '装備者の獣系モンスターへのダメージが8%上昇する',
      active: 'コボルト剣術・七段（1ターン）',
      active_detail: '敵単体に攻撃力1.5倍のダメージ'
    },
    {
      name: 'イービルミスト',
      class: 'バースト',
      rarelity: 'N',
      requirement: 'バースト',
      type: '不定形',
      passive: '装備者の呪い耐性が20%上昇する',
      active: 'ソロードロップ（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍のダメージ2ターンの間、滞水の地形効果で0.5倍の継続ダメージを与え、雷に弱くする'
    },
    {
      name: 'プラズマエッグ',
      class: 'バースト',
      rarelity: 'N',
      requirement: 'バースト',
      type: '不定形',
      passive: '装備者の与える回復量が8%上昇する',
      active: 'プラズマタッチ（1ターン）',
      active_detail: '敵単体に攻撃力1.5倍のダメージ'
    },
    {
      name: '古代蜂',
      class: 'ラッシュ',
      rarelity: 'N',
      requirement: 'ラッシュ',
      type: '虫,飛行',
      passive: '装備者の睡眠耐性が20%上昇する',
      active: 'エンシェントニードル（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍のダメージさらに2ターンの間、敵をめまい状態にする'
    },
    {
      name: 'ヴォジャノーイ',
      class: 'バースト',
      rarelity: 'N',
      requirement: 'バースト',
      type: '海洋生物',
      passive: '装備者の虫系モンスターへのダメージが8%上昇する',
      active: 'アクアアタック（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍のダメージさらに敵に掛かっている強化効果を解除する'
    },
    {
      name: 'クラッシュワーム',
      class: 'ラッシュ',
      rarelity: 'N',
      requirement: 'ラッシュ',
      type: '虫',
      passive: '装備者の覚醒減少耐性が20%上昇する',
      active: 'ヒートアップ（1ターン）',
      active_detail:
        '2ターンの間、自身の攻撃力を35%上昇させ、反動で自身が最大HPの15%ダメージを受ける'
    },
    {
      name: '赤月の残党投石兵',
      class: 'ラッシュ',
      rarelity: 'N',
      requirement: 'ラッシュ',
      type: '獣人',
      passive: '装備者のHPが100%のとき、受けるダメージを6%軽減する',
      active: '二連当て（1ターン）',
      active_detail: '敵単体に攻撃力1倍の2連続ダメージ'
    },
    {
      name: 'オーク熟練投石兵',
      class: 'バースト',
      rarelity: 'N',
      requirement: 'バースト',
      type: '獣人',
      passive: '装備者が3%の確率でダメージを無効にする',
      active: '透し投げ（2ターン）',
      active_detail: '敵単体に攻撃力1.5倍の防御無視ダメージ'
    },
    {
      name: 'オーク突撃兵',
      class: 'カウンター',
      rarelity: 'N',
      requirement: 'カウンター',
      type: '獣人',
      passive: '装備者の大幻獣系モンスターへのダメージが8%上昇する',
      active: '拳槍連撃（2ターン）',
      active_detail: '敵単体に攻撃力1倍の2連続ダメージ'
    },
    {
      name: 'オーク熟練槍兵',
      class: 'バースト',
      rarelity: 'N',
      requirement: 'バースト',
      type: '獣人',
      passive: '装備者の素早さが6%上昇する',
      active: '透し突き（2ターン）',
      active_detail: '敵単体に攻撃力1.5倍の防御無視ダメージ'
    },
    {
      name: 'ブルーリザード',
      class: 'バースト',
      rarelity: 'N',
      requirement: 'バースト',
      type: '爬虫類',
      passive: '装備者が攻撃を受けたとき、3%の確率で反撃する',
      active: 'リザードウォーター（1ターン）',
      active_detail: '敵単体に攻撃力1.5倍のダメージ'
    },
    {
      name: '赤月の残党槍兵',
      class: 'ラッシュ',
      rarelity: 'N',
      requirement: 'ラッシュ',
      type: '獣人',
      passive: '装備者のHPが50%以下のとき、攻撃力が5%上昇する',
      active: '二連突き（1ターン）',
      active_detail: '敵単体に攻撃力1倍の2連続ダメージ'
    },
    {
      name: 'レリックアンバー',
      class: 'ラッシュ',
      rarelity: 'N',
      requirement: 'ラッシュ',
      type: '虫',
      passive: '装備者のフォトン容量低下耐性が20%上昇する',
      active: 'ボルトエッジ（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍の雷ダメージさらに2ターンの間、敵を感電状態にする'
    },
    {
      name: 'エノイル',
      class: 'カウンター',
      rarelity: 'N',
      requirement: 'カウンター',
      type: '海洋生物',
      passive: '装備者の飛行系モンスターへのダメージが8%上昇する',
      active: 'ソニックノイズ（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍の雷ダメージさらに2ターンの間、敵を混乱状態にする'
    },
    {
      name: 'オーク剛腕投石兵',
      class: 'カウンター',
      rarelity: 'N',
      requirement: 'カウンター',
      type: '獣人',
      passive: '装備者の神系モンスターへのダメージが8%上昇する',
      active: 'ナックルストーン（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍のダメージさらに2ターンの間、敵をめまい状態にする'
    },
    {
      name: 'ウォーロック',
      class: 'ラッシュ',
      rarelity: 'N',
      requirement: 'ラッシュ',
      type: '獣人',
      passive: '装備者の防御力が6%上昇する',
      active: 'フリーズロッド（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍のダメージさらに70%の確率で、2ターンの間、凍結状態にする'
    },
    {
      name: 'オーク精鋭部隊長',
      class: 'バースト',
      rarelity: 'N',
      requirement: 'バースト',
      type: '獣人',
      passive: '装備者のフォトン奪取耐性が20%上昇する',
      active: '透し切り（2ターン）',
      active_detail: '敵単体に攻撃力0.75倍の防御無視2連続ダメージ'
    },
    {
      name: 'ヴァジュラ',
      class: 'バースト',
      rarelity: 'N',
      requirement: 'バースト',
      type: '精霊',
      passive: '装備者のHPが100%のとき、受けるダメージを6%軽減する',
      active: 'ライトニングチャージ（1ターン）',
      active_detail: '自身にチャージを追加する'
    },
    {
      name: 'エクイテスオーク',
      class: 'カウンター',
      rarelity: 'N',
      requirement: 'カウンター',
      type: '獣人',
      passive: '装備者の悪魔系モンスターへのダメージが8%上昇する',
      active: '鉄床戦術（2ターン）',
      active_detail: '自身にアタックを追加する'
    },
    {
      name: 'ウェリテスオーク',
      class: 'カウンター',
      rarelity: 'N',
      requirement: 'カウンター',
      type: '獣人',
      passive: '装備者の大幻獣系モンスターへのダメージが8%上昇する',
      active: '援護投擲（1ターン）',
      active_detail: '2ターンの間、自身の攻撃力を20%上昇させる'
    },
    {
      name: 'フレイムリリィ',
      class: 'ラッシュ',
      rarelity: 'N',
      requirement: 'ラッシュ',
      type: '植物',
      passive: '装備者のノックバック、引き寄せ耐性が20%上昇する',
      active: '炸裂花薬（2ターン）',
      active_detail: '敵単体に攻撃力1.5倍の火ダメージ'
    },
    {
      name: 'バレットワーム',
      class: 'ラッシュ',
      rarelity: 'N',
      requirement: 'ラッシュ',
      type: '虫',
      passive: '装備者の単体ダメージが3%上昇する',
      active: 'ワームインパクト（2ターン）',
      active_detail:
        '敵単体に攻撃力2倍のダメージただし反動で、自身の最大HPの30%ダメージを受ける'
    },
    {
      name: 'スキンクガーダー',
      class: 'ラッシュ',
      rarelity: 'N',
      requirement: 'ラッシュ',
      type: '爬虫類,海洋生物',
      passive: '装備者の虫系モンスターへのダメージが8%上昇する',
      active: '青蜥蜴の大身槍（3ターン）',
      active_detail:
        '敵横一列に攻撃力1倍のダメージさらに敵がめまい状態の場合、ダメージが1.5倍になる'
    },
    {
      name: '地縛霊',
      class: 'カウンター',
      rarelity: 'N',
      requirement: 'カウンター',
      type: '死者',
      passive: '装備者の呪い耐性が20%上昇する',
      active: '荒魂吸精（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍のダメージさらに与えたダメージの20%を吸収する'
    },
    {
      name: '彷徨う未練',
      class: 'カウンター',
      rarelity: 'N',
      requirement: 'カウンター',
      type: '不定形',
      passive: '装備者の精霊系モンスターへのダメージが8%上昇する',
      active: '祟りの一撃（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍のダメージさらに2ターンの間、敵を呪い状態にする'
    },
    {
      name: '鱗槍兵',
      class: 'カウンター',
      rarelity: 'N',
      requirement: 'カウンター',
      type: '爬虫類,海洋生物',
      passive: '装備者が受けるダメージを3%軽減する',
      active: '赤の円盾（2ターン）',
      active_detail: '2ターンの間、自身の防御力を32%上昇させる'
    },
    {
      name: 'ヘルシザーズ',
      class: 'カウンター',
      rarelity: 'N',
      requirement: 'カウンター',
      type: '海洋生物',
      passive: '装備者の植物系モンスターへのダメージが8%上昇する',
      active: 'スタンクリンチ（2ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍のダメージさらに2ターンの間、敵をめまい状態にする'
    },
    {
      name: 'バーニングアイ',
      class: 'バースト',
      rarelity: 'N',
      requirement: 'バースト',
      type: '悪魔',
      passive: '装備者の睡眠耐性が20%上昇する',
      active: 'ファイアボール（2ターン）',
      active_detail: '敵単体に攻撃力1.5倍の火ダメージ'
    },
    {
      name: 'サヴェッジデビル',
      class: 'バースト',
      rarelity: 'N',
      requirement: 'バースト',
      type: '飛行,悪魔',
      passive: '装備者が致死ダメージを受けたとき、3%の確率で踏みとどまる',
      active: 'サヴェッジラッシュ（2ターン）',
      active_detail: '敵横一列に攻撃力0.6倍の2連続ダメージ'
    },
    {
      name: 'バブルマッドネス',
      class: 'バースト',
      rarelity: 'N',
      requirement: 'バースト',
      type: '不定形',
      passive: '装備者の呪い耐性が20%上昇する',
      active: 'バブルボール（2ターン）',
      active_detail: '敵単体に攻撃力1.5倍の雷ダメージ'
    },
    {
      name: '成れの果て',
      class: 'バースト',
      rarelity: 'R',
      requirement: 'バースト',
      type: '死者',
      passive: '装備者のHPが50%以下のとき、攻撃力が10%上昇する',
      active: '悲痛の涙（3ターン）',
      active_detail:
        '敵横一列に攻撃力1.5倍のダメージ2ターンの間、滞水の地形効果で0.5倍の継続ダメージを与え、雷に弱くする'
    },
    {
      name: 'ヘルハウンド',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '獣',
      passive: '装備者のフォトン破壊耐性が40%上昇する',
      active: 'ヘルファング（2ターン）',
      active_detail: '敵単体に攻撃力2倍のダメージさらに覚醒ゲージを-1する'
    },
    {
      name: 'ソルジャーバグ',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '虫',
      passive: '装備者の感電耐性が40%上昇する',
      active: 'ウインドシックル（1ターン）',
      active_detail: '敵単体に攻撃力2倍のダメージ'
    },
    {
      name: '村喰らいの双貌獣',
      class: 'カウンター',
      rarelity: 'R',
      requirement: 'カウンター',
      type: '獣,飛行',
      passive: '装備者の多足類系モンスターへのダメージが16%上昇する',
      active: 'キラーファング（2ターン）',
      active_detail:
        '敵単体に攻撃力1.25倍の2連続ダメージさらに2ターンの間、敵の攻撃力を10%低下させる'
    },
    {
      name: '源流を護りし者',
      class: 'カウンター',
      rarelity: 'R',
      requirement: 'カウンター',
      type: '爬虫類',
      passive: '装備者のHPが50%以下のとき、12%の確率でダメージを無効にする',
      active: '水蛇スプラッシュ（2ターン）',
      active_detail: '敵横一列に攻撃力1.5倍のダメージ'
    },
    {
      name: 'マッドランパート',
      class: 'カウンター',
      rarelity: 'R',
      requirement: 'カウンター',
      type: '古代生物',
      passive: '装備者のHPが100%のとき、攻撃力が8%上昇する',
      active: 'ゴーレムスイング（2ターン）',
      active_detail: '敵単体に攻撃力2倍のダメージさらに覚醒ゲージを-1する'
    },
    {
      name: '月夜の狂獣',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '獣人',
      passive: '装備者の毒耐性が40%上昇する',
      active: 'デスパレートエッジ（3ターン）',
      active_detail: '敵横一列に攻撃力1.5倍のダメージさらに覚醒ゲージを-1する'
    },
    {
      name: '黒き淵の鋏手',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '虫',
      passive: '装備者の素早さが12%上昇する',
      active: 'ポイズンクラブ（2ターン）',
      active_detail:
        '敵単体に攻撃力1.25倍の2連続ダメージさらに2ターンの間、敵を毒状態にする'
    },
    {
      name: 'アカマル',
      class: 'バースト',
      rarelity: 'SR',
      requirement: 'バースト',
      type: '悪魔',
      passive: '装備者が攻撃を受けたとき、9%の確率で反撃する',
      active: '暗黒の剣（3ターン）',
      active_detail:
        '敵単体にかばう効果を無視する攻撃力1.15倍の3連続ダメージさらに2ターンの間、防御力を50%低下'
    },
    {
      name: 'ヘイトストーカー',
      class: 'バースト',
      rarelity: 'R',
      requirement: 'バースト',
      type: '悪魔',
      passive: '装備者の与える回復量が16%上昇する',
      active: '近づく終焉（2ターン）',
      active_detail: '敵単体に攻撃力2倍のダメージさらにチャージを追加する'
    },
    {
      name: 'ストームライダー',
      class: 'カウンター',
      rarelity: 'R',
      requirement: 'カウンター',
      type: '獣,飛行',
      passive: '装備者の虫系モンスターへのダメージが16%上昇する',
      active: 'ダークブロウ（2ターン）',
      active_detail:
        '敵単体に攻撃力1.25倍の2連続ダメージさらに2ターンの間、敵の攻撃力を10%低下させる'
    },
    {
      name: 'ガーディアン',
      class: 'バースト',
      rarelity: 'R',
      requirement: 'バースト',
      type: '飛行,神',
      passive: '装備者の即死耐性が40%上昇する',
      active: '聖槍（2ターン）',
      active_detail:
        '敵単体に攻撃力2倍のダメージさらに2ターンの間、敵を引き寄せ状態にする'
    },
    {
      name: 'トライボルト',
      class: 'カウンター',
      rarelity: 'R',
      requirement: 'カウンター',
      type: '爬虫類',
      passive: '装備者の精霊系モンスターへのダメージが16%上昇する',
      active: '蛇王スパーク（2ターン）',
      active_detail: '敵横一列に攻撃力1.5倍の雷ダメージ'
    },
    {
      name: 'ティターン',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '獣人',
      passive: '装備者のめまい耐性が40%上昇する',
      active: 'パワースマッシュ（3ターン）',
      active_detail: '敵横一列に攻撃力1.5倍のダメージさらに覚醒ゲージを-1する'
    },
    {
      name: 'エリミネーター',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '虫',
      passive: '装備者の龍系モンスターへのダメージが16%上昇する',
      active: 'スリープクラブ（2ターン）',
      active_detail:
        '敵単体に攻撃力1.25倍の2連続ダメージさらに70%の確率で、2ターンの間、敵を睡眠状態にする'
    },
    {
      name: 'リッチ',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '悪魔',
      passive: '装備者の悪魔系モンスターへのダメージが16%上昇する',
      active: 'デモンズテイル（3ターン）',
      active_detail:
        '敵横一列に攻撃力1.5倍のダメージさらに与えたダメージの20%を吸収する'
    },
    {
      name: 'ミドガルズオルム',
      class: 'バースト',
      rarelity: 'SR',
      requirement: 'バースト',
      type: '爬虫類,大幻獣',
      passive: '装備者の攻撃力が6%上昇する',
      active: 'ダークブレス（3ターン）',
      active_detail: '敵全体に攻撃力1.5倍のダメージ'
    },
    {
      name: 'ギガントアーマー',
      class: 'カウンター',
      rarelity: 'R',
      requirement: 'カウンター',
      type: '古代生物',
      passive: '装備者の呪い耐性が40%上昇する',
      active: 'ヘヴィスイング（2ターン）',
      active_detail:
        '敵単体に攻撃力2倍のダメージさらに2ターンの間、敵が積めるフォトンの量を-1する'
    },
    {
      name: '破滅の告知者',
      class: 'バースト',
      rarelity: 'R',
      requirement: 'バースト',
      type: '悪魔',
      passive: '装備者の植物系モンスターへのダメージが16%上昇する',
      active: '迫りくる終末（3ターン）',
      active_detail:
        '敵単体に攻撃力2倍のダメージさらに2ターンの間、敵を毒状態にし、チャージを追加する'
    },
    {
      name: 'マグママン',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '悪魔',
      passive: '装備者の防御力が12%上昇する',
      active: 'アスピレイトザイル（3ターン）',
      active_detail:
        '敵横一列に攻撃力1.5倍のダメージさらに与えたダメージの20%を吸収する'
    },
    {
      name: '火のザウラク',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '悪魔',
      passive: '装備者のHPが100%のとき、受けるダメージを12%軽減する',
      active: '業火の黒剣（2ターン）',
      active_detail:
        '敵単体に攻撃力1倍の3連続火ダメージさらにアタックを追加する'
    },
    {
      name: '水のクルサ',
      class: 'カウンター',
      rarelity: 'R',
      requirement: 'カウンター',
      type: '悪魔',
      passive: '装備者の暗闇耐性が40%上昇する',
      active: '大海の影剣（2ターン）',
      active_detail:
        '敵単体に攻撃力1倍の3連続ダメージさらに2ターンの間、敵を毒状態にする'
    },
    {
      name: '雷のアザー',
      class: 'バースト',
      rarelity: 'R',
      requirement: 'バースト',
      type: '悪魔',
      passive: '装備者の物体系モンスターへのダメージが16%上昇する',
      active: '紫電の闇剣（3ターン）',
      active_detail:
        '敵横一列に攻撃力1.5倍の雷ダメージ2ターンの間、帯電の地形効果で0.5倍の継続ダメージを与え、確率で感電させる'
    },
    {
      name: '氷のジバル',
      class: 'カウンター',
      rarelity: 'R',
      requirement: 'カウンター',
      type: '悪魔',
      passive: '装備者のHPが50%以下のとき、12%の確率でダメージを無効にする',
      active: 'フリーズソウル（2ターン）',
      active_detail:
        '敵単体に攻撃力2倍のダメージさらに70%の確率で、2ターンの間、敵を凍結状態にする'
    },
    {
      name: 'アバドン',
      class: 'バースト',
      rarelity: 'SR',
      requirement: 'バースト',
      type: '龍,神',
      passive: '装備者の物体系モンスターへのダメージが24%上昇する',
      active: 'サヴェッジシュート（3ターン）',
      active_detail:
        '敵横一列に攻撃力1.5倍のダメージさらに40%の確率で、積まれているフォトンを1つ破壊する'
    },
    {
      name: '赤月の残党兵長',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '獣人',
      passive: '装備者のHPが6%上昇する',
      active: '四連斧撃（1ターン）',
      active_detail: '敵単体に攻撃力0.9倍の4連続ダメージ'
    },
    {
      name: 'ディヴァガル',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '虫',
      passive: '装備者の獣人系モンスターへのダメージが16%上昇する',
      active: '貪食の牙（2ターン）',
      active_detail:
        '敵単体に攻撃力1.25倍の2連続ダメージさらに70%の確率で、積まれているフォトンを1つ奪う'
    },
    {
      name: '守護竜ネイロード',
      class: 'バースト',
      rarelity: 'R',
      requirement: 'バースト',
      type: '龍,飛行',
      passive: '装備者の混乱耐性が40%上昇する',
      active: 'ライトニングレイン（3ターン）',
      active_detail:
        '敵横一列に攻撃力1.5倍のダメージさらに50%の確率で、2ターンの間、敵を感電状態にする'
    },
    {
      name: '炎竜人',
      class: 'ラッシュ',
      rarelity: 'SSR',
      requirement: 'ラッシュ',
      type: '悪魔',
      passive: '装備者の獣人系モンスターへのダメージが32%上昇する',
      active: '燃えたぎる情熱（2ターン）',
      active_detail:
        '2ターンの間、味方単体の攻撃にLv×5の固定追加ダメージを付与し、アタックを強化する'
    },
    {
      name: 'オーク哨戒部隊長',
      class: 'カウンター',
      rarelity: 'R',
      requirement: 'カウンター',
      type: '獣人',
      passive: '装備者の凍結耐性が40%上昇する',
      active: 'アックスインパクト（2ターン）',
      active_detail:
        '敵単体に攻撃力1.25倍の2連続ダメージさらに2ターンの間、敵をめまい状態にする'
    },
    {
      name: 'ギガンテス',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '獣人',
      passive: '装備者の混乱耐性が40%上昇する',
      active: 'アイスビート（2ターン）',
      active_detail:
        '敵単体に攻撃力2倍のダメージさらに70%の確率で、2ターンの間、敵を凍結状態にする'
    },
    {
      name: 'リントヴルム',
      class: 'バースト',
      rarelity: 'R',
      requirement: 'バースト',
      type: '龍,飛行',
      passive: '装備者のHPが50%以下のとき、攻撃力が10%上昇する',
      active: '風竜の羽ばたき（3ターン）',
      active_detail:
        '敵横一列に攻撃力1.5倍のダメージ2ターンの間、突風の地形効果で0.5倍の継続ダメージを与え、火に弱くする'
    },
    {
      name: 'マジェスティ',
      class: 'バースト',
      rarelity: 'SSR',
      requirement: 'バースト',
      type: '獣人',
      passive: '装備者のめまい耐性が80%上昇する',
      active: '王の威光（3ターン）',
      active_detail: '味方後列にチャージを追加する'
    },
    {
      name: 'デクリオンオーク',
      class: 'カウンター',
      rarelity: 'R',
      requirement: 'カウンター',
      type: '獣人',
      passive: '装備者の虫系モンスターへのダメージが16%上昇する',
      active: '豪連閃（3ターン）',
      active_detail:
        '敵横一列に攻撃力1倍の2連続ダメージさらに50%の確率で、2ターンの間、敵をめまい状態にする'
    },
    {
      name: 'タイラントワイズ',
      class: 'バースト',
      rarelity: 'R',
      requirement: 'バースト',
      type: '海洋生物',
      passive: '装備者の龍系モンスターへのダメージが16%上昇する',
      active: 'アクアグランス（2ターン）',
      active_detail:
        '敵単体に攻撃力2倍のダメージさらに2ターンの間、敵が積めるフォトンの量を-1する'
    },
    {
      name: 'トリニティブル',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '獣',
      passive: '装備者が致死ダメージを受けたとき、6%の確率で踏みとどまる',
      active: 'トリニティロア（2ターン）',
      active_detail:
        '2ターンの間、自身の攻撃力を15%上昇させ、防御力と素早さを30%上昇させる'
    },
    {
      name: 'レイジファントム',
      class: 'カウンター',
      rarelity: 'SSR',
      requirement: 'カウンター',
      type: '死者',
      passive: '装備者の即死耐性が80%上昇する',
      active: 'アンデッドスモッグ（2ターン）',
      active_detail:
        '敵横一列に攻撃力2倍のダメージさらに70%の確率で、2ターンの間、敵をゾンビ状態にする'
    },
    {
      name: 'ドラゴニュート',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '悪魔',
      passive: '装備者のHPが50%以下のとき、攻撃力が10%上昇する',
      active: '竜剣一閃（2ターン）',
      active_detail:
        '敵単体に攻撃力2倍のダメージさらに与えたダメージの30%を吸収する'
    },
    {
      name: 'ゴウケツ',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '獣人',
      passive: '装備者の攻撃力が4%上昇する',
      active: '暴嵐拳（2ターン）',
      active_detail: '敵単体に攻撃力2.3倍のダメージ'
    },
    {
      name: 'ケツアルコアトル',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '龍,飛行',
      passive: '装備者のHPが100%のとき、受けるダメージを12%軽減する',
      active: 'ウィークバイト（3ターン）',
      active_detail:
        '敵単体に攻撃力1.25倍の2連続ダメージさらに敵に掛かっている強化効果を解除する'
    },
    {
      name: 'アースビートル',
      class: 'ラッシュ',
      rarelity: 'SR',
      requirement: 'ラッシュ',
      type: '虫',
      passive: '装備者のフォトン容量低下耐性が60%上昇する',
      active: '蟲王の撃拳（2ターン）',
      active_detail:
        '敵単体に攻撃力1.3倍の2連続ダメージさらに70%の確率で、2ターンの間、めまい状態にする'
    },
    {
      name: 'スカルワイバーン',
      class: 'カウンター',
      rarelity: 'R',
      requirement: 'カウンター',
      type: '龍,飛行,死者',
      passive: '装備者の呪い耐性が40%上昇する',
      active: 'ボーンエッジ（3ターン）',
      active_detail:
        '敵横一列に攻撃力1.5倍のダメージさらに50%の確率で、2ターンの間、敵を呪い状態にする'
    },
    {
      name: '大喰らいペイスト',
      class: 'カウンター',
      rarelity: 'R',
      requirement: 'カウンター',
      type: '多足類,大幻獣',
      passive: '装備者の防御力が12%上昇する',
      active: 'スタンニードル（3ターン）',
      active_detail:
        '敵横一列に攻撃力1倍の2連続ダメージさらに50%の確率で、2ターンの間、敵をめまい状態にする'
    },
    {
      name: 'プロトアバドン',
      class: 'カウンター',
      rarelity: 'SR',
      requirement: 'カウンター',
      type: '龍,神',
      passive: '装備者のHPが50%以下のとき、攻撃力が15%上昇する',
      active: 'インパクトスラッシュ（3ターン）',
      active_detail:
        '敵横一列に攻撃力1.5倍のダメージさらに60%の確率で、2ターンの間、敵をノックバック状態にする'
    },
    {
      name: 'ペインフィンガー',
      class: 'カウンター',
      rarelity: 'SR',
      requirement: 'カウンター',
      type: '不定形',
      passive: '装備者の単体ダメージが9%上昇する',
      active: 'パラライズミドル（2ターン）',
      active_detail:
        '敵単体に攻撃力2.3倍のダメージさらに2ターンの間、敵を感電状態にする'
    },
    {
      name: '黒い犬',
      class: 'バースト',
      rarelity: 'R',
      requirement: 'バースト',
      type: '獣',
      passive: '装備者の神系モンスターへのダメージが16%上昇する',
      active: '残影迅風（3ターン）',
      active_detail:
        '敵横一列に攻撃力0.5倍の3連続ダメージ2ターンの間、突風の地形効果で0.25倍の継続ダメージを与え、火に弱くする'
    },
    {
      name: '追放執行人',
      class: 'バースト',
      rarelity: 'R',
      requirement: 'バースト',
      type: '悪魔,死者',
      passive: '装備者の悪魔系モンスターへのダメージが16%上昇する',
      active: '執行（2ターン）',
      active_detail:
        'ランダムな敵単体に、かばうを無視する攻撃力1.5倍のダメージ　2ターンの間、0.5倍継続ダメージの地割れ地形にする'
    },
    {
      name: 'アイスナイト',
      class: 'バースト',
      rarelity: 'SR',
      requirement: 'バースト',
      type: '飛行,神',
      passive: '装備者の覚醒減少耐性が60%上昇する',
      active: '氷の結界（3ターン）',
      active_detail:
        '敵横一列に攻撃力1.8倍のダメージ2ターンの間、氷結の地形効果で0.5倍の継続ダメージを与え、攻撃力を低下させる'
    },
    {
      name: 'ベインチェイサー',
      class: 'カウンター',
      rarelity: 'EX',
      requirement: 'ガープ',
      type: '大幻獣',
      passive: '装備者の防御力が30%上昇する',
      active: 'シールドバスター（1ターン）',
      active_detail: '敵単体に防御力7倍のダメージ'
    },
    {
      name: '死をあやす者',
      class: 'バースト',
      rarelity: 'EX',
      requirement: 'モラクス',
      type: '死者,大幻獣',
      passive: '装備者の地形ダメージが40%上昇する',
      active: '冥府の風（2ターン）',
      active_detail:
        '2ターンの間、自身へのダメージを30%軽減し、攻撃力を30%上昇させる'
    },
    {
      name: 'アビスガード',
      class: 'ラッシュ',
      rarelity: 'EX',
      requirement: 'ブネ',
      type: '龍,死者,大幻獣',
      passive: '装備者の列ダメージが20%上昇する',
      active: '悪疫のブレス（3ターン）',
      active_detail:
        '敵横一列に攻撃力3倍のダメージさらに70%の確率で、2ターンの間、敵を病気状態にする'
    },
    {
      name: 'ポルターガイスト',
      class: 'ラッシュ',
      rarelity: 'EX',
      requirement: 'パイモン',
      type: '古代生物,大幻獣',
      passive: '装備者のHPが15%上昇する',
      active: '最大火力充填（2ターン）',
      active_detail:
        '自身にアタックを2つ追加するさらに2ターンの間、攻撃力を10%上昇させる'
    },
    {
      name: '大樹ユグドラシル',
      class: 'バースト',
      rarelity: 'EX',
      requirement: 'バエル',
      type: '植物,大幻獣',
      passive: '装備者が受けるダメージを15%軽減する',
      active: '聖樹の恵み（2ターン）',
      active_detail:
        '戦闘不能の味方単体を、最大HPの50%で蘇生させ、さらに覚醒ゲージを+2する'
    },
    {
      name: '輝竜アシュトレト',
      class: 'カウンター',
      rarelity: 'EX',
      requirement: 'ベレト',
      type: '爬虫類,大幻獣',
      passive: '装備者の攻撃力が10%上昇する',
      active: 'フリーズブレス（2ターン）',
      active_detail:
        '敵全体に攻撃力1.5倍のダメージさらに50%の確率で、2ターンの間、敵を凍結状態にする'
    },
    {
      name: '真珠姫ルゥルゥ',
      class: 'ラッシュ',
      rarelity: 'EX',
      requirement: 'ベリアル',
      type: '海洋生物,大幻獣',
      passive: '毎ターン終了時、装備者の点穴を+1する',
      active: '活力のチャクラ（2ターン）',
      active_detail: '自身の点穴を+5し、2ターンの間、自身が固定砲台状態になる'
    },
    {
      name: '魔法猫オスカー',
      class: 'カウンター',
      rarelity: 'EX',
      requirement: 'バラム',
      type: '大幻獣',
      passive:
        '装備者の防御力を10%上昇させ、攻撃を受けたとき、防御無視の効果を受けなくなる',
      active: '激おこニャックル（2ターン）',
      active_detail: '敵単体に攻撃力3倍の2連続ダメージ'
    },
    {
      name: '魔眼賽ドゥーム',
      class: 'バースト',
      rarelity: 'EX',
      requirement: 'アスモデウス',
      type: '飛行,物体,大幻獣',
      passive: '装備者のHPが15%上昇し、受けるダメージを5%軽減する',
      active: '終焉の魔眼（1ターン）',
      active_detail:
        '敵全体に攻撃力0.6倍のダメージさらに1ターンの間、自身の攻撃力を40%上昇させる'
    },
    {
      name: '雷獄華ケラヴノス',
      class: 'カウンター',
      rarelity: 'SSR',
      requirement: 'カウンター',
      type: '大幻獣',
      passive: '装備者の海洋生物系モンスターへのダメージが27%上昇する',
      active: '雷尾槌『迅雷』（1ターン）',
      active_detail: '敵単体に攻撃力0.3倍の3連続雷ダメージ'
    },
    {
      name: '水樹ガオケレナ',
      class: 'バースト',
      rarelity: 'SSR',
      requirement: 'バースト',
      type: '植物,大幻獣',
      passive: '装備者の海洋生物系モンスターへのダメージが27%上昇する',
      active: 'オーシャンデュー（2ターン）',
      active_detail:
        '敵横一列に攻撃力1倍のダメージ2ターンの間、滞水の地形効果で0.5倍の継続ダメージを与え、雷に弱くする'
    },
    {
      name: '死を育む者',
      class: 'ラッシュ',
      rarelity: 'SSR',
      requirement: 'ラッシュ',
      type: '死者,大幻獣',
      passive: '装備者のねずみ化耐性が20%上昇する',
      active: '育む者の慈愛（3ターン）',
      active_detail: '味方全体の状態異常を治癒し、さらにHPを5%回復する'
    },
    {
      name: 'クイックシルバー',
      class: 'ラッシュ',
      rarelity: 'SSR',
      requirement: 'ラッシュ',
      type: '飛行,物体,大幻獣',
      passive: '装備者の暗闇耐性が60%上昇する',
      active: '主砲改修（2ターン）',
      active_detail: 'ラッシュの味方単体に点穴を+10する'
    },
    {
      name: 'バインドブレイン',
      class: 'カウンター',
      rarelity: 'SSR',
      requirement: 'カウンター',
      type: '不定形',
      passive: '装備者の物体系モンスターへのダメージが27%上昇する',
      active: '魂の呪縛（1ターン）',
      active_detail:
        '敵単体に攻撃力0.5倍のダメージさらに80%の確率で、2ターンの間、敵を束縛状態にする'
    },
    {
      name: 'レゼルボア',
      class: 'カウンター',
      rarelity: 'SSR',
      requirement: 'カウンター',
      type: '虫',
      passive: '装備者の物体系モンスターへのダメージが27%上昇する',
      active: '病蝕の牙（2ターン）',
      active_detail:
        '敵単体に攻撃力0.25倍の2連続ダメージさらに80%の確率で、2ターンの間、敵を病気状態にする'
    },
    {
      name: 'ドネ',
      class: 'ラッシュ',
      rarelity: 'SSR',
      requirement: 'ラッシュ',
      type: '古代生物',
      passive: '装備者の単体ダメージが12%上昇する',
      active: '聖拳豪打（2ターン）',
      active_detail:
        '敵単体に攻撃力1.75倍の2連続ダメージさらに敵が死者のとき、ダメージが2倍になる'
    },
    {
      name: 'ルケ',
      class: 'ラッシュ',
      rarelity: 'SR',
      requirement: 'ラッシュ',
      type: '古代生物',
      passive: '装備者が攻撃時、9%の確率で敵を暗闇状態にする',
      active: '地球割り（2ターン）',
      active_detail:
        '敵単体に攻撃力2.5倍のダメージさらに敵が暗闇状態のとき、ダメージが2倍になる'
    },
    {
      name: 'バフ',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '古代生物',
      passive: '装備者の即死耐性が40%上昇する',
      active: '高級薬草（1ターン）',
      active_detail: '味方単体のHPを15%回復させる'
    },
    {
      name: 'エビルウッド',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '植物',
      passive: '装備者の龍系モンスターへのダメージが16%上昇する',
      active: '鉄球花（2ターン）',
      active_detail:
        '敵単体に攻撃力2倍のダメージさらに敵が呪い状態のとき、ダメージが2倍になる'
    },
    {
      name: '巨白の門番',
      class: 'カウンター',
      rarelity: 'SR',
      requirement: 'カウンター',
      type: '獣',
      passive: '装備者の呪い耐性が60%上昇する',
      active: 'フロストファング（2ターン）',
      active_detail:
        '敵単体に攻撃力1.25倍の2連続ダメージさらに70%の確率で、2ターンの間、敵を凍結状態にする'
    },
    {
      name: 'ヘヴィコング',
      class: 'ラッシュ',
      rarelity: 'SR',
      requirement: 'ラッシュ',
      type: '獣人',
      passive: '装備者が攻撃を受けたとき、9%の確率で反撃する',
      active: 'ショットガンブロー（2ターン）',
      active_detail:
        '敵横一列に攻撃力0.85倍の3連続ダメージさらに敵がめまい状態のとき、ダメージが2倍になる'
    },
    {
      name: 'バジリスク',
      class: 'バースト',
      rarelity: 'SSR',
      requirement: 'バースト',
      type: '龍,飛行',
      passive: '装備者の虫系モンスターへのダメージが32%上昇する',
      active: 'ポイズンバースト（3ターン）',
      active_detail:
        '敵全体に攻撃力1倍のダメージさらに2ターンの間、70%の確率で、敵を毒状態にする'
    },
    {
      name: '古き厄災の魔女',
      class: 'バースト',
      rarelity: 'SSR',
      requirement: 'バースト',
      type: '悪魔',
      passive: '装備者の毒耐性が80%上昇する',
      active: '厄災の恐怖（3ターン）',
      active_detail:
        '敵全体に攻撃力1.5倍のダメージさらに2ターンの間、70%の確率で、敵を呪い状態にする'
    },
    {
      name: 'オルトロス',
      class: 'カウンター',
      rarelity: 'R',
      requirement: 'カウンター',
      type: '獣,飛行',
      passive: '装備者の物体系モンスターへのダメージが16%上昇する',
      active: 'デビルファング（2ターン）',
      active_detail:
        '敵単体に攻撃力1.25倍の2連続ダメージさらに2ターンの間、防御力を10%低下させる'
    },
    {
      name: 'ウルフマン',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '獣人',
      passive: '装備者の睡眠耐性が40%上昇する',
      active: 'エビルエッジ（2ターン）',
      active_detail:
        '敵横一列に攻撃力1.5倍のダメージさらに40%の確率で、2ターンの間敵が積めるフォトンの量を-1する'
    },
    {
      name: 'ワンダートラベル',
      class: 'バースト',
      rarelity: 'R',
      requirement: 'バースト',
      type: '獣人',
      passive: '装備者が受けるダメージを6%軽減する',
      active: 'ブレイブギフト（2ターン）',
      active_detail:
        '味方単体にチャージを追加するさらに2ターンの間、攻撃力を20%上昇させる'
    },
    {
      name: 'シアンカラット',
      class: 'カウンター',
      rarelity: 'SR',
      requirement: 'カウンター',
      type: '獣人',
      passive: '装備者の全ての状態異常への耐性が15%上昇する',
      active: 'ワイドリペア（2ターン）',
      active_detail: '味方横一列の状態異常を治癒するさらにHPを15%回復させる'
    },
    {
      name: 'ファミリアン',
      class: 'バースト',
      rarelity: 'SSR',
      requirement: 'バースト',
      type: '飛行,悪魔',
      passive: '装備者のHPが毎ターン4%回復する',
      active: 'ミニオンショック（2ターン）',
      active_detail:
        '敵単体に攻撃力2.5倍のダメージさらに2ターンの間、敵が積めるフォトンの量を-1する'
    },
    {
      name: 'バブルヘッド',
      class: 'カウンター',
      rarelity: 'R',
      requirement: 'カウンター',
      type: '爬虫類',
      passive: '装備者の混乱耐性が40%上昇する',
      active: 'アンガーウインド（2ターン）',
      active_detail: '敵横一列に攻撃力1.5倍のダメージ'
    },
    {
      name: 'グラッジスモッグ',
      class: 'バースト',
      rarelity: 'R',
      requirement: 'バースト',
      type: '悪魔',
      passive: '装備者のフォトン破壊耐性が40%上昇する',
      active: 'チャージパンチ（3ターン）',
      active_detail: '敵単体に攻撃力2倍のダメージさらにチャージを1つ追加する'
    },
    {
      name: 'ソルシエール',
      class: 'バースト',
      rarelity: 'SR',
      requirement: 'バースト',
      type: '悪魔',
      passive: '装備者の覚醒減少耐性が60%上昇する',
      active: 'リヴァイヴァー（2ターン）',
      active_detail:
        '味方単体を最大HPの30%で蘇生させるさらに2ターンの間、攻撃力、防御力、素早さのいずれかを20%上昇させる'
    },
    {
      name: 'キラーレディ',
      class: 'ラッシュ',
      rarelity: 'SR',
      requirement: 'ラッシュ',
      type: '不定形',
      passive: '装備者の単体ダメージが9%上昇する',
      active: 'ライフビルダー（2ターン）',
      active_detail:
        '味方単体のHPを30%回復させるさらに3ターンの間、攻撃力を20%上昇させる'
    },
    {
      name: 'グラディエーター',
      class: 'カウンター',
      rarelity: 'SSR',
      requirement: 'カウンター',
      type: '悪魔',
      passive: '装備者の睡眠耐性が80%上昇する',
      active: 'ショックブレード（2ターン）',
      active_detail:
        '敵横一列に攻撃力2倍のダメージさらに60%の確率で、2ターンの間、感電状態にする'
    },
    {
      name: 'ピローヌ',
      class: 'バースト',
      rarelity: 'SSR',
      requirement: 'バースト',
      type: '飛行,悪魔',
      passive: '装備者が行動開始時、12%の確率でチャージを追加する',
      active: 'ヴェルティージュ（2ターン）',
      active_detail:
        '敵単体に攻撃力2.5倍のダメージさらに70%の確率で、2ターンの間、めまい状態にする'
    },
    {
      name: 'サタニックリブラ',
      class: 'カウンター',
      rarelity: 'SSR',
      requirement: 'カウンター',
      type: '古代生物',
      passive:
        '装備者のHPが50%以上のとき、24%の確率で味方への単体攻撃を受け持つ',
      active: 'イモータリティ（2ターン）',
      active_detail: '自身のHPを55%回復させる'
    },
    {
      name: '盾の幻獣体ブニ',
      class: 'カウンター',
      rarelity: 'SSR',
      requirement: 'カウンター',
      type: '飛行,物体',
      passive: '装備者の防御力が24%上昇する',
      active: 'ワルキューレの盾（1ターン）',
      active_detail: '2ターンの間、自身へのダメージを20%軽減する'
    },
    {
      name: '槍の幻獣体ブニ',
      class: 'カウンター',
      rarelity: 'SSR',
      requirement: 'カウンター',
      type: '飛行,物体',
      passive: '装備者の感電耐性が80%上昇する',
      active: 'ワルキューレの槍（2ターン）',
      active_detail: '敵単体に防御力5倍のダメージ'
    },
    {
      name: '青竜号',
      class: 'カウンター',
      rarelity: 'SSR',
      requirement: 'カウンター',
      type: '獣',
      passive: '装備者の単体ダメージが12%上昇する',
      active: 'コマンドオブナイト（1ターン）',
      active_detail:
        '敵単体に攻撃力0.7倍のダメージ2ターンの間、滞水の地形効果で0.5倍の継続ダメージを与え、雷に弱くする'
    },
    {
      name: 'ボーデンヴォルフ',
      class: 'バースト',
      rarelity: 'R',
      requirement: 'バースト',
      type: '獣',
      passive: '装備者の飛行系モンスターへのダメージが16%上昇する',
      active: 'ヘルバイト（2ターン）',
      active_detail: '敵単体に攻撃力1.5倍のダメージさらに覚醒ゲージを-1する'
    },
    {
      name: '暴龍ガルグイユ',
      class: 'バースト',
      rarelity: 'SR',
      requirement: 'バースト',
      type: '龍,飛行',
      passive: '装備者の虫系モンスターへのダメージが24%上昇する',
      active: 'ショックスレイヤー（2ターン）',
      active_detail:
        '敵単体に攻撃力2.5倍のダメージさらに2ターンの間、感電状態にする'
    },
    {
      name: 'エクセネーター',
      class: 'ラッシュ',
      rarelity: 'SR',
      requirement: 'ラッシュ',
      type: '虫',
      passive: '装備者が攻撃を受けたとき、9%の確率で反撃する',
      active: '蟲王の暴拳（1ターン）',
      active_detail: '敵単体に攻撃力0.9倍×2の2連続ダメージ'
    },
    {
      name: 'デューク',
      class: 'カウンター',
      rarelity: 'SSR',
      requirement: 'カウンター',
      type: '獣人',
      passive: '装備者の古代生物系モンスターへのダメージが32%上昇する',
      active: '至福の癒やし（2ターン）',
      active_detail: '2ターンの間、味方全体のHPを毎ターン15%回復する'
    },
    {
      name: 'ジェルスペクター',
      class: 'カウンター',
      rarelity: 'SSR',
      requirement: 'カウンター',
      type: '海洋生物',
      passive: '装備者の死者系モンスターへのダメージが32%上昇する',
      active: 'サイコキネシス（2ターン）',
      active_detail: '敵横一列に攻撃力2倍のダメージ'
    },
    {
      name: 'ブラブナ',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '虫',
      passive: '装備者のHPが6%上昇する',
      active: 'ブラブナタックル（2ターン）',
      active_detail: '敵単体に攻撃力2倍のダメージ'
    },
    {
      name: 'ツインハンター',
      class: 'カウンター',
      rarelity: 'R',
      requirement: 'カウンター',
      type: '獣,飛行',
      passive: '装備者の暗闇耐性が40%上昇する',
      active: 'ダークネスファング（2ターン）',
      active_detail:
        '敵単体に攻撃力1倍の2連続ダメージさらに2ターンの間、暗闇状態にする'
    },
    {
      name: 'ウォールバスター',
      class: 'カウンター',
      rarelity: 'SR',
      requirement: 'カウンター',
      type: '古代生物',
      passive: '装備者の防御力が18%上昇する',
      active: 'アイアンボディ（1ターン）',
      active_detail: '味方後列への攻撃を1回無効化する'
    },
    {
      name: 'ムタチオン',
      class: 'ラッシュ',
      rarelity: 'SR',
      requirement: 'ラッシュ',
      type: '虫',
      passive: '装備者の単体ダメージが9%上昇する',
      active: 'ベイトクラッシュ（2ターン）',
      active_detail:
        '敵単体に攻撃力2倍のダメージさらに2ターンの間、攻撃力、防御力、素早さをそれぞれ5%ずつ低下させる'
    },
    {
      name: 'フォレスター',
      class: 'ラッシュ',
      rarelity: 'SSR',
      requirement: 'ラッシュ',
      type: '獣人',
      passive: '装備者のHPが12%上昇する',
      active: '王者の加護（2ターン）',
      active_detail:
        '味方横一列のHPを10%回復させるさらに2ターンの間、攻撃力を10%上昇させる'
    },
    {
      name: 'インサニティ',
      class: 'ラッシュ',
      rarelity: 'SSR',
      requirement: 'ラッシュ',
      type: '不定形',
      passive: '装備者の連続ダメージが12%上昇する',
      active: '被験の産物（2ターン）',
      active_detail: '自身にスキルフォトンを2つ追加する'
    },
    {
      name: 'ピヨピヨ',
      class: 'カウンター',
      rarelity: 'EX',
      requirement: 'シャックス',
      type: '飛行',
      passive: '装備者の防御力が12%上昇する',
      active: 'ばりばりスパーク（2ターン）',
      active_detail:
        '敵単体に攻撃力2倍の雷ダメージさらに敵が感電状態のとき、ダメージが2倍になる'
    },
    {
      name: 'ミミちゃん',
      class: 'カウンター',
      rarelity: 'SR',
      requirement: 'カウンター',
      type: '物体',
      passive: '装備者のHPが50%以下のとき、素早さが27%上昇する',
      active: '怒りのいちげき（2ターン）',
      active_detail:
        '敵単体に自身のHPが少ないほど威力の高いダメージ（最大で攻撃力の4倍のダメージ）'
    },
    {
      name: 'ソプラノキティ',
      class: 'バースト',
      rarelity: 'SR',
      requirement: 'バースト',
      type: '獣人',
      passive: '装備者のHPが50%以下のとき、毎ターン終了時、HPが24%回復する',
      active: '縦笛のセレナーデ（3ターン）',
      active_detail:
        '1ターンの間、自身の効果範囲を全体化させ、2ターンの間、自身の攻撃力を50%減少させる'
    },
    {
      name: '禁断の書',
      class: 'カウンター',
      rarelity: 'SR',
      requirement: 'カウンター',
      type: '精霊',
      passive: '装備者の攻撃力が6%上昇する',
      active: 'サンダーボルト（2ターン）',
      active_detail:
        '敵単体に攻撃力2.5倍の雷ダメージさらに敵が感電状態のとき、ダメージが2倍になる'
    },
    {
      name: 'アンデッドワーム',
      class: 'バースト',
      rarelity: 'SSR',
      requirement: 'バースト',
      type: '龍,飛行,死者',
      passive: '装備者の凍結耐性が80%上昇する',
      active: 'アポカリプス（3ターン）',
      active_detail: '敵全体に攻撃力2倍のダメージ'
    },
    {
      name: '白銀竜',
      class: 'バースト',
      rarelity: 'SSR',
      requirement: 'バースト',
      type: '龍,飛行',
      passive: '装備者の悪魔系モンスターへのダメージが32%上昇する',
      active: 'クリスタルブレス（3ターン）',
      active_detail: '敵全体に600の固定ダメージ'
    },
    {
      name: '八咫烏',
      class: 'カウンター',
      rarelity: 'SSR',
      requirement: 'カウンター',
      type: '飛行',
      passive: '装備者の獣系モンスターへのダメージが32%上昇する',
      active: 'シャドウスライド（2ターン）',
      active_detail: '敵横一列に攻撃力2.5倍のダメージ'
    },
    {
      name: 'チーフブレーダー',
      class: 'カウンター',
      rarelity: 'SSR',
      requirement: 'カウンター',
      type: '悪魔',
      passive: '装備者が攻撃時、防御力を80%無視する',
      active: '龍神剣（2ターン）',
      active_detail: '敵横一列に800の固定ダメージ'
    },
    {
      name: 'アームストロング',
      class: 'ラッシュ',
      rarelity: 'SSR',
      requirement: 'ラッシュ',
      type: '獣人',
      passive: '装備者の毒耐性が80%上昇する',
      active: 'ストロングパンチ（1ターン）',
      active_detail: '敵単体に攻撃力3倍のダメージ'
    },
    {
      name: 'カタストロフィ',
      class: 'ラッシュ',
      rarelity: 'SSR',
      requirement: 'ラッシュ',
      type: '虫',
      passive: '装備者の精霊系モンスターへのダメージが32%上昇する',
      active: 'メタルブレード（1ターン）',
      active_detail: '敵単体に1000の固定ダメージ'
    },
    {
      name: 'アトランティス',
      class: 'バースト',
      rarelity: 'SSR',
      requirement: 'バースト',
      type: '海洋生物',
      passive: '装備者の爬虫類系モンスターへのダメージが32%上昇する',
      active: '大海の恵み（3ターン）',
      active_detail: '1ターンの間、味方単体の効果範囲を全体化する'
    },
    {
      name: 'ボーパルバニー',
      class: 'バースト',
      rarelity: 'SSR',
      requirement: 'バースト',
      type: '精霊',
      passive: '装備者のHPが100%のとき、攻撃力が16%上昇する',
      active: 'マテリアルチャージ（1ターン）',
      active_detail: '味方全体の覚醒ゲージを+1する'
    },
    {
      name: 'バロンニャー',
      class: 'バースト',
      rarelity: 'SSR',
      requirement: 'バースト',
      type: '獣人',
      passive: '装備者の海洋生物系モンスターへのダメージが32%上昇する',
      active: 'ヘブンスケールス（2ターン）',
      active_detail: '味方全体のHPを30%回復させる'
    },
    {
      name: 'カミハカリ',
      class: 'バースト',
      rarelity: 'SSR',
      requirement: 'バースト',
      type: '古代生物',
      passive: '装備者の呪い耐性が80%上昇する',
      active: 'プロテクション（1ターン）',
      active_detail: '味方全体への攻撃を1回無効化する'
    },
    {
      name: 'ピーター',
      class: 'カウンター',
      rarelity: 'SSR',
      requirement: 'カウンター',
      type: '爬虫類',
      passive: '装備者のHPが100%のとき、受けるダメージを24%軽減する',
      active: 'ファンシーダンス（3ターン）',
      active_detail:
        '自身への攻撃を2回無効化し、1ターンの間、効果範囲を列化する'
    },
    {
      name: 'ハニワキング',
      class: 'カウンター',
      rarelity: 'SSR',
      requirement: 'カウンター',
      type: '物体',
      passive: '装備者が攻撃時、防御力を80%無視する',
      active: 'ハニワプレス（3ターン）',
      active_detail:
        '敵全体に攻撃力1.75倍のダメージさらに敵が暗闇状態のとき、ダメージが2倍になる'
    },
    {
      name: 'サン＆ムーン',
      class: 'バースト',
      rarelity: 'SSR',
      requirement: 'バースト',
      type: '獣',
      passive: '装備者の地形ダメージが32%上昇する',
      active: '黒猫のタンゴ（3ターン）',
      active_detail: '味方後列にアタックを追加する'
    },
    {
      name: 'ツインサーペント',
      class: 'ラッシュ',
      rarelity: 'SSR',
      requirement: 'ラッシュ',
      type: '爬虫類',
      passive: '装備者が致死ダメージを受けたとき、12%の確率で踏みとどまる',
      active: 'ニードルラッシュ（2ターン）',
      active_detail:
        '敵横一列に攻撃力0.9倍の5連続ダメージただし反動で、自身が最大HPの50%ダメージを受ける'
    },
    {
      name: '神域の渡り鳥',
      class: 'バースト',
      rarelity: 'SSR',
      requirement: 'バースト',
      type: '飛行',
      passive: '装備者が受けるダメージを12%軽減する',
      active: '癒やしの旋風（3ターン）',
      active_detail:
        '敵横一列に攻撃力2.5倍のダメージさらに2ターンの間、敵を突風状態にし、ターン終了時に味方全体のHPが10%回復'
    },
    {
      name: 'ヘルズブレイン',
      class: 'ラッシュ',
      rarelity: 'SSR',
      requirement: 'ラッシュ',
      type: '不定形',
      passive: '装備者のフォトン破壊耐性が80%上昇する',
      active: 'プレッシャーボム（2ターン）',
      active_detail:
        '70%の確率で、2ターンの間、敵横一列を呪い状態にし、覚醒ゲージを-2する'
    },
    {
      name: 'アークエンジェル',
      class: 'バースト',
      rarelity: 'SSR',
      requirement: 'バースト',
      type: '神',
      passive:
        '装備者のHPが毎ターン2%回復するさらにターンが経過するごとに2%ずつ回復量上昇（最大8%）',
      active: '裁きの神槍（2ターン）',
      active_detail:
        '敵単体に攻撃力2.5倍の防御無視ダメージさらに自身にチャージを追加する'
    },
    {
      name: 'アルルカン',
      class: 'ラッシュ',
      rarelity: 'SSR',
      requirement: 'ラッシュ',
      type: '龍',
      passive: '装備者の連続ダメージが12%上昇する',
      active: 'トリックブレス（2ターン）',
      active_detail:
        '味方全体のフォトンをスキルに変化させ、1ターンの間、スキルを強化する'
    },
    {
      name: 'サキュバス暴走体',
      class: 'ラッシュ',
      rarelity: 'SSR',
      requirement: 'ラッシュ',
      type: '飛行,悪魔,大幻獣',
      passive: '毎ターン終了時、20%の確率で装備者の覚醒ゲージが+1される',
      active: 'ペインバイオレット（3ターン）',
      active_detail:
        '敵横一列に攻撃力2倍のダメージさらに25%の確率で、積まれているフォトンを1つ奪う'
    },
    {
      name: 'レヴィエル',
      class: 'バースト',
      rarelity: 'SSR',
      requirement: 'バースト',
      type: '物体',
      passive: '装備者が行動開始時、12%の確率でスキルを追加する',
      active: '安らかな眠り（2ターン）',
      active_detail:
        '60%の確率で、2ターンの間、敵単体を睡眠状態にする対象が睡眠状態の場合は即死させる'
    },
    {
      name: '黒躰インキュバス',
      class: 'ラッシュ',
      rarelity: 'SSR',
      requirement: 'ラッシュ',
      type: '悪魔',
      passive: '装備者の連続ダメージが12%上昇する',
      active: '夢魔の制裁（1ターン）',
      active_detail:
        '敵単体に攻撃力1.1倍の2連続ダメージさらに2ターンの間、自身にLv×5の固定追加ダメージを付与する'
    },
    {
      name: 'ウィリー',
      class: 'バースト',
      rarelity: 'SSR',
      requirement: 'バースト',
      type: '獣',
      passive: '装備者のHPが50%以下のとき、攻撃力が20%上昇する',
      active: '曲芸チェーンソー（2ターン）',
      active_detail:
        '敵単体に攻撃力0.9倍の3連続ダメージさらに50%の確率で、対象のフォトンを1つ破壊する'
    },
    {
      name: 'プロデューサー',
      class: 'バースト',
      rarelity: 'SSR',
      requirement: 'バースト',
      type: '飛行',
      passive: '装備者の素早さが24%上昇する',
      active: 'Ｐの応援（2ターン）',
      active_detail:
        '味方単体のHPを30%回復させ、さらに2ターンの間、すべての状態異常を受けつけない状態になる'
    },
    {
      name: 'エージェント',
      class: 'カウンター',
      rarelity: 'SSR',
      requirement: 'カウンター',
      type: '獣',
      passive: '装備者の素早さが24%上昇する',
      active: 'ブレイクシャワー（2ターン）',
      active_detail:
        '敵横一列に攻撃力1倍の2連続ダメージさらに40%の確率で、敵に積まれているフォトンを1つ破壊する'
    },
    {
      name: 'ヌリ',
      class: 'カウンター',
      rarelity: 'SSR',
      requirement: 'カウンター',
      type: '悪魔',
      passive: '装備者の与える回復量が32%上昇する',
      active: 'サーヴァントウォール（1ターン）',
      active_detail: '自身への攻撃を2回無効化する'
    },
    {
      name: 'とらまる',
      class: 'カウンター',
      rarelity: 'SSR',
      requirement: 'カウンター',
      type: '物体',
      passive: '装備者のHPが12%上昇する',
      active: '隊長のとつげき（2ターン）',
      active_detail:
        '敵単体に攻撃力2.5倍のダメージさらに弱体、状態異常が付与されている敵に対して、効果1種類につき倍率が0.2上昇'
    },
    {
      name: '死蝶アラストール',
      class: 'カウンター',
      rarelity: 'SSR',
      requirement: 'カウンター',
      type: '虫,飛行,大幻獣',
      passive: '装備者の弱体命中率が5%上昇する',
      active: '胡蝶の舞（3ターン）',
      active_detail: '味方前列にスキルフォトンを1つ追加する'
    },
    {
      name: 'アナキス',
      class: 'ラッシュ',
      rarelity: 'SSR',
      requirement: 'ラッシュ',
      type: '龍',
      passive: '装備者のHPが12%上昇する',
      active: '赤き守護竜の庇護（2ターン）',
      active_detail:
        '味方単体にスキルフォトンを1つ追加し、2ターンの間、スキルを強化する'
    },
    {
      name: 'ハイドン',
      class: 'ラッシュ',
      rarelity: 'SSR',
      requirement: 'ラッシュ',
      type: '物体',
      passive: '戦闘不能時、一度だけ最大HPの1%で蘇生する',
      active: '魔鞄からの贈り物（1ターン）',
      active_detail:
        '2ターンの間、味方単体の攻撃力を30%上昇させるが、反動で自身が最大HPの10%のダメージを受ける'
    },
    {
      name: 'フェルニゲシュ',
      class: 'カウンター',
      rarelity: 'SSR',
      requirement: 'カウンター',
      type: '龍,飛行',
      passive:
        '装備者が攻撃を受けたとき、8%の確率で反撃し、対象の強化状態を解除する',
      active: '浄罪の滅翼（1ターン）',
      active_detail:
        '敵単体に攻撃力1.5倍のダメージさらに敵が束縛状態のとき、ダメージが2倍になり、束縛状態を治癒する'
    },
    {
      name: 'ソレント',
      class: 'ラッシュ',
      rarelity: 'SSR',
      requirement: 'ラッシュ',
      type: '獣人',
      passive: '装備者のめまい耐性が80%上昇する',
      active: 'シェパーズギフト（2ターン）',
      active_detail:
        '味方単体にアタックフォトンを1つ追加し、2ターンの間、アタックを強化する'
    },
    {
      name: 'ヘルカイト',
      class: 'バースト',
      rarelity: 'SR',
      requirement: 'バースト',
      type: '龍,飛行',
      passive: '装備者が受けるダメージを9%軽減する',
      active: 'ヘルフレイム（3ターン）',
      active_detail: '敵全体に攻撃力1.5倍の火ダメージ'
    },
    {
      name: 'ステラフェザー',
      class: 'バースト',
      rarelity: 'SR',
      requirement: 'バースト',
      type: '龍,飛行',
      passive: '装備者が受けるダメージを9%軽減する',
      active: 'テンペスト（3ターン）',
      active_detail: '敵全体に500の固定ダメージ'
    },
    {
      name: 'バーバリアン',
      class: 'カウンター',
      rarelity: 'SR',
      requirement: 'カウンター',
      type: '獣人',
      passive: '装備者の攻撃力が6%上昇する',
      active: 'ワイドスイング（2ターン）',
      active_detail: '敵横一列に攻撃力2倍のダメージ'
    },
    {
      name: 'ヘヴィパンチャー',
      class: 'カウンター',
      rarelity: 'SR',
      requirement: 'カウンター',
      type: '獣人',
      passive: '装備者のHPが100%のとき、受けるダメージを18%軽減する',
      active: 'パワースイング（2ターン）',
      active_detail: '敵横一列に650の固定ダメージ'
    },
    {
      name: '八つ裂きマーダー',
      class: 'ラッシュ',
      rarelity: 'SR',
      requirement: 'ラッシュ',
      type: '虫',
      passive: '装備者の暗闇耐性が60%上昇する',
      active: '切り裂き（1ターン）',
      active_detail: '敵単体に攻撃力2.5倍のダメージ'
    },
    {
      name: 'マンイーター',
      class: 'ラッシュ',
      rarelity: 'SR',
      requirement: 'ラッシュ',
      type: '虫',
      passive: '装備者の死者系モンスターへのダメージが24%上昇する',
      active: 'ダブルカッター（1ターン）',
      active_detail: '敵単体に800の固定ダメージ'
    },
    {
      name: 'カオスサム',
      class: 'ラッシュ',
      rarelity: 'SR',
      requirement: 'ラッシュ',
      type: '不定形',
      passive: '装備者の飛行系モンスターへのダメージが24%上昇する',
      active: '滅毒ビンタ（2ターン）',
      active_detail:
        '敵単体に攻撃力2.5倍のダメージさらに敵が毒状態のとき、ダメージが2倍になる'
    },
    {
      name: 'ソウルハガー',
      class: 'カウンター',
      rarelity: 'SR',
      requirement: 'カウンター',
      type: '不定形',
      passive: '装備者の睡眠耐性が60%上昇する',
      active: '滅闇ビンタ（2ターン）',
      active_detail:
        '敵単体に攻撃力2.5倍のダメージさらに敵が暗闇状態のとき、ダメージが2倍になる'
    },
    {
      name: 'サウザンドアイ',
      class: 'カウンター',
      rarelity: 'SR',
      requirement: 'カウンター',
      type: '不定形',
      passive: '装備者の海洋生物系モンスターへのダメージが24%上昇する',
      active: '滅眠ビンタ（2ターン）',
      active_detail:
        '敵単体に攻撃力2.5倍のダメージさらに敵が睡眠状態のとき、ダメージが2倍になる'
    },
    {
      name: 'フォトンイーター',
      class: 'カウンター',
      rarelity: 'SR',
      requirement: 'カウンター',
      type: '精霊',
      passive: '装備者のステータス弱体耐性が60%上昇する',
      active: '滅雷タックル（2ターン）',
      active_detail:
        '敵単体に攻撃力2.5倍のダメージさらに敵が感電状態のとき、ダメージが2倍になる'
    },
    {
      name: 'スプリガン',
      class: 'カウンター',
      rarelity: 'SR',
      requirement: 'カウンター',
      type: '精霊',
      passive: '装備者の覚醒減少耐性が60%上昇する',
      active: '滅気タックル（2ターン）',
      active_detail:
        '敵単体に攻撃力2.5倍のダメージさらに敵がめまい状態のとき、ダメージが2倍になる'
    },
    {
      name: 'サラマンダー',
      class: 'ラッシュ',
      rarelity: 'SR',
      requirement: 'ラッシュ',
      type: '精霊',
      passive: '装備者の呪い耐性が60%上昇する',
      active: '滅呪タックル（2ターン）',
      active_detail:
        '敵単体に攻撃力2.5倍のダメージさらに敵が呪い状態のとき、ダメージが2倍になる'
    },
    {
      name: '地獄の淑女',
      class: 'バースト',
      rarelity: 'SR',
      requirement: 'バースト',
      type: '不定形',
      passive: '装備者の多足類系モンスターへのダメージが24%上昇する',
      active: 'ソウルスティール（2ターン）',
      active_detail:
        '敵単体に攻撃力2.5倍のダメージさらに25%の確率で、敵を即死させる'
    },
    {
      name: 'ゴルゴン',
      class: 'カウンター',
      rarelity: 'SR',
      requirement: 'カウンター',
      type: '不定形',
      passive: '装備者の植物系モンスターへのダメージが24%上昇する',
      active: 'フォトンシャワー（1ターン）',
      active_detail: '味方前列の覚醒ゲージを+1する'
    },
    {
      name: 'ウィッチスリザー',
      class: 'カウンター',
      rarelity: 'SR',
      requirement: 'カウンター',
      type: '不定形',
      passive: '装備者の呪い耐性が60%上昇する',
      active: 'エナジーディール（1ターン）',
      active_detail: '味方後列の覚醒ゲージを+1する'
    },
    {
      name: 'メイジマーマン',
      class: 'バースト',
      rarelity: 'SR',
      requirement: 'バースト',
      type: '爬虫類',
      passive: '装備者の素早さが18%上昇する',
      active: 'リザレクション（2ターン）',
      active_detail: '戦闘不能の味方単体を、最大HPの50%で蘇生させる'
    },
    {
      name: '古の狂竜',
      class: 'カウンター',
      rarelity: 'SR',
      requirement: 'カウンター',
      type: '爬虫類',
      passive: '装備者が9%の確率でダメージを無効にする',
      active: 'ドラゴンスキン（2ターン）',
      active_detail:
        '2ターンの間、味方全体がすべての状態異常とステータス弱体を受け付けない状態になる'
    },
    {
      name: 'レッドリザード',
      class: 'カウンター',
      rarelity: 'SR',
      requirement: 'カウンター',
      type: '爬虫類',
      passive: '装備者の暗闇耐性が60%上昇する',
      active: 'エリアマジック（3ターン）',
      active_detail: '1ターンの間、味方単体の効果範囲を列化する'
    },
    {
      name: 'アサルトボックス',
      class: 'ラッシュ',
      rarelity: 'SR',
      requirement: 'ラッシュ',
      type: '物体',
      passive: '装備者が攻撃を受けたとき、9%の確率で反撃する',
      active: 'アタックギフト（2ターン）',
      active_detail: '味方単体にアタックを2つ追加する'
    },
    {
      name: 'ミミック',
      class: 'ラッシュ',
      rarelity: 'SR',
      requirement: 'ラッシュ',
      type: '物体',
      passive: '装備者のステータス弱体耐性が60%上昇する',
      active: 'スキルギフト（2ターン）',
      active_detail: '味方単体にスキルを2つ追加する'
    },
    {
      name: '災厄の魔櫃',
      class: 'バースト',
      rarelity: 'SR',
      requirement: 'バースト',
      type: '物体',
      passive: '装備者のめまい耐性が60%上昇する',
      active: 'チャージギフト（2ターン）',
      active_detail: '味方単体にチャージを2つ追加する'
    },
    {
      name: 'リリィキャット',
      class: 'ラッシュ',
      rarelity: 'SR',
      requirement: 'ラッシュ',
      type: '獣人',
      passive: '装備者のHPが50%以下のとき、攻撃力が15%上昇する',
      active: 'ワイドヒール（2ターン）',
      active_detail: '味方横一列のHPを30%回復させる'
    },
    {
      name: 'アビシニアン',
      class: 'カウンター',
      rarelity: 'SR',
      requirement: 'カウンター',
      type: '獣人',
      passive: '装備者の即死耐性が60%上昇する',
      active: 'ワイドリカバリー（2ターン）',
      active_detail: '味方横一列のHPを30%回復させる'
    },
    {
      name: 'キャスパリーグ',
      class: 'バースト',
      rarelity: 'SR',
      requirement: 'バースト',
      type: '獣人',
      passive: '装備者のHPが50%以下のとき、18%の確率でダメージを無効にする',
      active: 'ワイドキュア（2ターン）',
      active_detail: '味方横一列のHPを30%回復させる'
    },
    {
      name: '火吹きガメ',
      class: 'カウンター',
      rarelity: 'SR',
      requirement: 'カウンター',
      type: '海洋生物',
      passive: '装備者のフォトン破壊耐性が60%上昇する',
      active: 'ダメージウォール（2ターン）',
      active_detail: '2ターンの間、味方横一列へのダメージを25%軽減する'
    },
    {
      name: 'スナッパー',
      class: 'カウンター',
      rarelity: 'SR',
      requirement: 'カウンター',
      type: '海洋生物',
      passive: '装備者のフォトン奪取耐性が60%上昇する',
      active: 'アタックウォール（2ターン）',
      active_detail:
        '2ターンの間、味方横一列へのアタックフォトンからのダメージを50%軽減する'
    },
    {
      name: 'ガイアタイマイ',
      class: 'カウンター',
      rarelity: 'SR',
      requirement: 'カウンター',
      type: '海洋生物',
      passive: '装備者の呪い耐性が60%上昇する',
      active: 'スキルウォール（2ターン）',
      active_detail:
        '2ターンの間、味方横一列へのスキルフォトンからのダメージを50%軽減する'
    },
    {
      name: 'ホーリーフェイク',
      class: 'カウンター',
      rarelity: 'SR',
      requirement: 'カウンター',
      type: '物体',
      passive: '装備者が攻撃時、防御力を60%無視する',
      active: 'ライトフェンス（1ターン）',
      active_detail: '味方横一列への攻撃を1回無効化する'
    },
    {
      name: 'ヘルヘブン',
      class: 'カウンター',
      rarelity: 'SR',
      requirement: 'カウンター',
      type: '物体',
      passive: '装備者のノックバック、引き寄せ耐性が60%上昇する',
      active: 'ブルワーク（2ターン）',
      active_detail:
        '2ターンの間、味方横一列への最大HPの20%以下のダメージを無効化する'
    },
    {
      name: 'ケイブキーパー',
      class: 'カウンター',
      rarelity: 'SR',
      requirement: 'カウンター',
      type: '物体',
      passive: '装備者の虫系モンスターへのダメージが24%上昇する',
      active: 'インビジブル（2ターン）',
      active_detail: '2ターンの間、味方単体を無敵状態にする'
    },
    {
      name: '邪妖の水獣',
      class: 'バースト',
      rarelity: 'R',
      requirement: 'バースト',
      type: '獣人',
      passive: '装備者のHPが50%以下のとき、12%の確率でダメージを無効にする',
      active: 'アクアバースト（3ターン）',
      active_detail: '敵全体に攻撃力1倍のダメージ'
    },
    {
      name: 'エルダービースト',
      class: 'バースト',
      rarelity: 'R',
      requirement: 'バースト',
      type: '獣人',
      passive: '装備者の大幻獣系モンスターへのダメージが16%上昇する',
      active: 'フロストウェイブ（3ターン）',
      active_detail: '敵全体に400の固定ダメージ'
    },
    {
      name: '闇の魔剣士',
      class: 'カウンター',
      rarelity: 'R',
      requirement: 'カウンター',
      type: '獣人',
      passive: '装備者の飛行系モンスターへのダメージが16%上昇する',
      active: '流し斬り（2ターン）',
      active_detail: '敵横一列に攻撃力1.5倍のダメージ'
    },
    {
      name: '獣頭の狂戦士',
      class: 'カウンター',
      rarelity: 'R',
      requirement: 'カウンター',
      type: '獣人',
      passive: '装備者の龍系モンスターへのダメージが16%上昇する',
      active: '横一閃（2ターン）',
      active_detail: '敵横一列に500の固定ダメージ'
    },
    {
      name: 'はぐれ火蜂',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '虫,飛行',
      passive: '装備者の即死耐性が40%上昇する',
      active: 'ニードルスピア（1ターン）',
      active_detail: '敵単体に攻撃力2倍のダメージ'
    },
    {
      name: 'ボルトホーネット',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '虫,飛行',
      passive: '装備者のフォトン破壊耐性が40%上昇する',
      active: '致命の一刺し（1ターン）',
      active_detail: '敵単体に600の固定ダメージ'
    },
    {
      name: '泥魔神',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '不定形',
      passive: '装備者が受けるダメージを6%軽減する',
      active: 'ポイズンタックル（2ターン）',
      active_detail:
        '敵単体に攻撃力2倍のダメージさらに2ターンの間、敵を毒状態にする'
    },
    {
      name: 'バブルウーズ',
      class: 'カウンター',
      rarelity: 'R',
      requirement: 'カウンター',
      type: '不定形',
      passive: '装備者のステータス弱体耐性が40%上昇する',
      active: 'ダークタックル（2ターン）',
      active_detail:
        '敵単体に攻撃力2倍のダメージさらに2ターンの間、敵を暗闇状態にする'
    },
    {
      name: '霊魂ムース',
      class: 'カウンター',
      rarelity: 'R',
      requirement: 'カウンター',
      type: '不定形',
      passive: '装備者の多足類系モンスターへのダメージが16%上昇する',
      active: 'スリープタックル（2ターン）',
      active_detail:
        '敵単体に攻撃力2倍のダメージさらに70%の確率で、2ターンの間、敵を睡眠状態にする'
    },
    {
      name: 'エリンギーグ',
      class: 'カウンター',
      rarelity: 'R',
      requirement: 'カウンター',
      type: '植物',
      passive: '装備者の凍結耐性が40%上昇する',
      active: 'ショックタックル（2ターン）',
      active_detail:
        '敵単体に攻撃力2倍のダメージさらに2ターンの間、敵を感電状態にする'
    },
    {
      name: 'グール',
      class: 'カウンター',
      rarelity: 'R',
      requirement: 'カウンター',
      type: '植物',
      passive: '装備者のHPが100%のとき、攻撃力が8%上昇する',
      active: 'スタンタックル（2ターン）',
      active_detail:
        '敵単体に攻撃力2倍のダメージさらに2ターンの間、敵をめまい状態にする'
    },
    {
      name: 'パイロダンサー',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '植物',
      passive: '装備者の爬虫類系モンスターへのダメージが16%上昇する',
      active: 'カーズタックル（2ターン）',
      active_detail:
        '敵単体に攻撃力2倍のダメージさらに2ターンの間、敵を呪い状態にする'
    },
    {
      name: 'ボガード',
      class: 'カウンター',
      rarelity: 'R',
      requirement: 'カウンター',
      type: '死者',
      passive: '装備者の毒耐性が40%上昇する',
      active: 'フォトンウィーク（2ターン）',
      active_detail:
        '敵単体に攻撃力2倍のダメージさらに2ターンの間、敵が積めるフォトンの量を-1する'
    },
    {
      name: 'ゴースト',
      class: 'カウンター',
      rarelity: 'R',
      requirement: 'カウンター',
      type: '死者',
      passive: '装備者の獣人系モンスターへのダメージが16%上昇する',
      active: 'フォトンブレイク（2ターン）',
      active_detail:
        '敵単体に攻撃力2倍のダメージさらに積まれているフォトンを1つ破壊する'
    },
    {
      name: 'フリーズソウル',
      class: 'カウンター',
      rarelity: 'R',
      requirement: 'カウンター',
      type: '死者',
      passive: '装備者のHPが50%以下のとき、12%の確率でダメージを無効にする',
      active: 'フォトンスティール（2ターン）',
      active_detail:
        '敵単体に攻撃力2倍のダメージさらに70%の確率で、積まれているフォトンを1つ奪う'
    },
    {
      name: 'コロナフォース',
      class: 'バースト',
      rarelity: 'R',
      requirement: 'バースト',
      type: '精霊',
      passive: '装備者が攻撃時、防御力を40%無視する',
      active: 'ファイアショット（2ターン）',
      active_detail:
        '敵単体に攻撃力2倍の火ダメージ2ターンの間、炎上の地形効果で1倍の継続ダメージを与える'
    },
    {
      name: 'しらぬい',
      class: 'バースト',
      rarelity: 'R',
      requirement: 'バースト',
      type: '精霊',
      passive: '装備者の与える回復量が16%上昇する',
      active: 'アクアショット（2ターン）',
      active_detail:
        '敵単体に攻撃力2倍のダメージ2ターンの間、滞水の地形効果で0.5倍の継続ダメージを与え、雷に弱くする'
    },
    {
      name: 'ミステリートーチ',
      class: 'バースト',
      rarelity: 'R',
      requirement: 'バースト',
      type: '精霊',
      passive: '装備者の大幻獣系モンスターへのダメージが16%上昇する',
      active: 'ウィンドショット（2ターン）',
      active_detail:
        '敵単体に攻撃力2倍のダメージ2ターンの間、突風の地形効果で0.5倍の継続ダメージを与え、火に弱くする'
    },
    {
      name: 'ソウルシーカー',
      class: 'バースト',
      rarelity: 'R',
      requirement: 'バースト',
      type: '精霊',
      passive: '装備者の与える回復量が16%上昇する',
      active: 'アースショット（2ターン）',
      active_detail:
        '敵単体に攻撃力2倍のダメージ2ターンの間、地割れの地形効果で0.5倍の継続ダメージを与え、防御力を低下させる'
    },
    {
      name: 'ソウルシーカー',
      class: 'カウンター',
      rarelity: 'R',
      requirement: 'カウンター',
      type: '精霊',
      passive: '装備者のHPが6%上昇する',
      active: 'サンダーショット（2ターン）',
      active_detail:
        '敵単体に攻撃力2倍の雷ダメージ2ターンの間、帯電の地形効果で0.5倍の継続ダメージを与え、確率で感電させる'
    },
    {
      name: 'ジェントルマン',
      class: 'バースト',
      rarelity: 'R',
      requirement: 'バースト',
      type: '獣人',
      passive: '装備者の神系モンスターへのダメージが16%上昇する',
      active: 'ピアシング（2ターン）',
      active_detail: '敵単体に攻撃力2倍の防御無視ダメージ'
    },
    {
      name: 'リトルスクワイア',
      class: 'カウンター',
      rarelity: 'R',
      requirement: 'カウンター',
      type: '獣人',
      passive: '装備者のHPが50%以下のとき、攻撃力が10%上昇する',
      active: 'トランスブレイク（2ターン）',
      active_detail:
        '敵単体に攻撃力2倍のダメージさらに敵が覚醒状態のとき、ダメージが2倍になる'
    },
    {
      name: 'トリックマスター',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '獣人',
      passive: '装備者のフォトン容量低下耐性が40%上昇する',
      active: 'バトルクライ（1ターン）',
      active_detail:
        '2ターンの間、味方単体の攻撃にLv×5の固定追加ダメージを付与する'
    },
    {
      name: 'グリモワール',
      class: 'バースト',
      rarelity: 'R',
      requirement: 'バースト',
      type: '精霊',
      passive: '装備者のノックバック、引き寄せ耐性が40%上昇する',
      active: 'リジェネレーション（2ターン）',
      active_detail: '2ターンの間、ターン終了時に味方単体のHPが15%回復する'
    },
    {
      name: 'シルバートーム',
      class: 'カウンター',
      rarelity: 'R',
      requirement: 'カウンター',
      type: '精霊',
      passive: '装備者のフォトン破壊耐性が40%上昇する',
      active: '治癒の光（1ターン）',
      active_detail: '味方全体の状態異常を治癒する'
    },
    {
      name: '魔導の書',
      class: 'バースト',
      rarelity: 'R',
      requirement: 'バースト',
      type: '精霊',
      passive: '装備者のHPが50%以下のとき、12%の確率でダメージを無効にする',
      active: '癒やしの波動（1ターン）',
      active_detail: '味方全体のステータス弱体効果を解除する'
    },
    {
      name: 'エクスプローラー',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '獣人',
      passive: '装備者の神系モンスターへのダメージが16%上昇する',
      active: 'アタックブースト（1ターン）',
      active_detail: '2ターンの間、味方単体のアタックを強化する'
    },
    {
      name: 'マジックラット',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '獣人',
      passive: '装備者の感電耐性が40%上昇する',
      active: 'スキルブースト（1ターン）',
      active_detail: '2ターンの間、味方単体のスキルを強化する'
    },
    {
      name: '鉄鼠',
      class: 'バースト',
      rarelity: 'R',
      requirement: 'バースト',
      type: '獣人',
      passive: '装備者の古代生物系モンスターへのダメージが16%上昇する',
      active: 'チャージブースト（1ターン）',
      active_detail: '2ターンの間、味方単体のチャージを強化する'
    },
    {
      name: 'レッドウィング',
      class: 'バースト',
      rarelity: 'R',
      requirement: 'バースト',
      type: '獣人,飛行',
      passive: '装備者の植物系モンスターへのダメージが16%上昇する',
      active: 'アタックアップ（1ターン）',
      active_detail: '2ターンの間、味方単体の攻撃力を25%上昇させる'
    },
    {
      name: 'シャーベットマン',
      class: 'カウンター',
      rarelity: 'R',
      requirement: 'カウンター',
      type: '獣人,飛行',
      passive: '装備者の与える回復量が16%上昇する',
      active: 'ガードアップ（1ターン）',
      active_detail: '2ターンの間、味方単体の防御力を50%上昇させる'
    },
    {
      name: '漆黒の暗殺者',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '獣人,飛行',
      passive: '装備者の死者系モンスターへのダメージが16%上昇する',
      active: 'スピードアップ（1ターン）',
      active_detail: '2ターンの間、味方単体の素早さを50%上昇させる'
    },
    {
      name: '帯電獣',
      class: 'バースト',
      rarelity: 'R',
      requirement: 'バースト',
      type: '獣人',
      passive: '装備者が6%の確率でダメージを無効にする',
      active: 'トランスブースト（3ターン）',
      active_detail: '味方単体の覚醒ゲージを+4する'
    },
    {
      name: 'コボルトドルイド',
      class: 'バースト',
      rarelity: 'R',
      requirement: 'バースト',
      type: '獣人',
      passive: '装備者が致死ダメージを受けたとき、6%の確率で踏みとどまる',
      active: 'ワイドノックバック（2ターン）',
      active_detail: '2ターンの間、敵前列をノックバック状態にする'
    },
    {
      name: '祈祷獣',
      class: 'バースト',
      rarelity: 'R',
      requirement: 'バースト',
      type: '獣人',
      passive: '装備者の物体系モンスターへのダメージが16%上昇する',
      active: 'ワイドキャプチャー（2ターン）',
      active_detail: '2ターンの間、敵後列を引き寄せ状態にする'
    },
    {
      name: 'スペクター',
      class: 'カウンター',
      rarelity: 'R',
      requirement: 'カウンター',
      type: '不定形',
      passive: '装備者の覚醒減少耐性が40%上昇する',
      active: '脱力ガス（2ターン）',
      active_detail: '2ターンの間、敵単体の攻撃力を15%低下させる'
    },
    {
      name: 'カオスファントム',
      class: 'バースト',
      rarelity: 'R',
      requirement: 'バースト',
      type: '不定形',
      passive: '装備者の毒耐性が40%上昇する',
      active: '衰弱ガス（2ターン）',
      active_detail: '2ターンの間、敵単体の防御力を50%低下させる'
    },
    {
      name: '怨念の渦',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '不定形',
      passive: '装備者のHPが6%上昇する',
      active: '虚弱ガス（2ターン）',
      active_detail: '2ターンの間、敵単体の素早さを50%低下させる'
    },
    {
      name: 'ゴライアスボール',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '悪魔',
      passive: '装備者の古代生物系モンスターへのダメージが16%上昇する',
      active: '魔眼（2ターン）',
      active_detail: '50%の確率で、敵横一列の覚醒ゲージを-2する'
    },
    {
      name: 'カラミティエッグ',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '悪魔',
      passive: '装備者の防御力が12%上昇する',
      active: '邪悪な視線（1ターン）',
      active_detail: '80%の確率で、敵単体の覚醒ゲージを-2する'
    },
    {
      name: 'イービルアイ',
      class: 'バースト',
      rarelity: 'R',
      requirement: 'バースト',
      type: '悪魔',
      passive: '装備者の飛行系モンスターへのダメージが16%上昇する',
      active: '悪魔の瞬き（1ターン）',
      active_detail: '敵全体のステータス強化効果を解除する'
    },
    {
      name: '獣人ドクター',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '獣人',
      passive: '装備者の凍結耐性が40%上昇する',
      active: 'ヒール（2ターン）',
      active_detail: '味方単体のHPを30%回復させる'
    },
    {
      name: 'リカバリニャン',
      class: 'カウンター',
      rarelity: 'R',
      requirement: 'カウンター',
      type: '獣人',
      passive: '装備者の獣人系モンスターへのダメージが16%上昇する',
      active: 'リカバリー（2ターン）',
      active_detail: '味方単体のHPを30%回復させる'
    },
    {
      name: 'けものマジカル',
      class: 'バースト',
      rarelity: 'R',
      requirement: 'バースト',
      type: '獣人',
      passive: '装備者の海洋生物系モンスターへのダメージが16%上昇する',
      active: 'キュア（2ターン）',
      active_detail: '味方単体のHPを30%回復させる'
    },
    {
      name: 'マモルフィ',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '物体',
      passive: '装備者の感電耐性が40%上昇する',
      active: 'ダメージシールド（2ターン）',
      active_detail: '2ターンの間、味方単体へのダメージを25%軽減する'
    },
    {
      name: 'ライブガーダー',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '物体',
      passive: '装備者の古代生物系モンスターへのダメージが16%上昇する',
      active: 'アタックシールド（2ターン）',
      active_detail:
        '2ターンの間、味方単体へのアタックフォトンからのダメージを50%軽減する'
    },
    {
      name: 'シールドモールド',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '物体',
      passive: '装備者の大幻獣系モンスターへのダメージが16%上昇する',
      active: 'スキルシールド（2ターン）',
      active_detail:
        '2ターンの間、味方単体へのスキルフォトンからのダメージを50%軽減する'
    },
    {
      name: 'シェルドレイク',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '海洋生物',
      passive: '装備者の素早さが12%上昇する',
      active: 'ダブルシェル（1ターン）',
      active_detail: '味方単体への攻撃を2回無効化する'
    },
    {
      name: 'ソーンモンスター',
      class: 'ラッシュ',
      rarelity: 'R',
      requirement: 'ラッシュ',
      type: '海洋生物',
      passive: '装備者の獣系モンスターへのダメージが16%上昇する',
      active: 'ハードシェル（2ターン）',
      active_detail:
        '2ターンの間、味方単体への最大HPの20%以下のダメージを無効化する'
    },
    {
      name: '火殻竜',
      class: 'カウンター',
      rarelity: 'R',
      requirement: 'カウンター',
      type: '海洋生物',
      passive: '装備者の素早さが12%上昇する',
      active: 'アサルトシェル（1ターン）',
      active_detail: '2ターンの間、自身が攻撃を受けたとき、反撃する状態になる'
    }
  ];
}
