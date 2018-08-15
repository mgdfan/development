interface MegidoStatus {
  no: string;
  name: string;
  class: string;
  style: string;
  type?: string;
  gauge: string;
  hp: string;
  atk: string;
  def: string;
  spd: string;
  voice: string;
  gender: string;
  passive: string;
  passive_details: string;
  skill: string;
  skill_details: string;
  skill_plus: string;
  skill_plus_details: string;
  askill: string;
  askill_details: string;
  askill_plus: string;
  askill_plus_details: string;
  special: string;
  special_details: string;
  special_plus: string;
  special_plus_details: string;
  masseffect: string;
  masseffect_details: string;
  element: string;
  peerage: string;
  old_class: string;
}

const megido: MegidoStatus[] = [
  {
    name: 'バエル',
    no: '001',
    gauge: '6',
    class: 'スナイパー',
    style: 'バースト',
    hp: '372 - 4570',
    atk: '95 - 943',
    def: '50 - 487',
    spd: '69 - 689',
    voice: '安田 奈緒子',
    gender: '男性',
    passive: '超感電',
    passive_details: '海洋生物系のモンスターに2倍のダメージ',
    skill: 'マジックリリース',
    skill_details: '2ターンの間、味方単体のチャージを強化する',
    skill_plus: 'マジックリリース＋',
    skill_plus_details:
      '2ターンの間、味方単体のチャージを強化し、ダメージを10%軽減する',
    askill: 'コラプスサンダー',
    askill_details:
      '敵全体に攻撃力1.3倍の雷ダメージ2ターンの間、帯電の地形効果で0.5倍の継続ダメージを与え、確率で感電させる',
    askill_plus: 'コラプスサンダー＋',
    askill_plus_details:
      '敵全体に攻撃力1.55倍の雷ダメージ2ターンの間、帯電の地形効果で0.75倍の継続ダメージを与え、確率で感電させる',
    special: 'インクルードデス',
    special_details:
      '敵単体に攻撃力6倍の雷ダメージさらに味方後列にチャージを追加する',
    special_plus: 'インクルードデス＋',
    special_plus_details:
      '敵単体に攻撃力6.25倍の雷ダメージさらに味方後列にチャージを追加する',
    masseffect: '腹黒ボーイ',
    masseffect_details:
      '【徐々に攻撃力上昇】【チャージ追加】が特徴の攻撃型の効果',
    element: '雷',
    peerage: '王',
    old_class: 'スナイパー'
  },
  {
    name: 'リリム',
    no: '真-001',
    gauge: '5',
    class: 'スナイパー',
    style: 'バースト',
    hp: '597 - 7342',
    atk: '126 - 1198',
    def: '41 - 415',
    spd: '51 - 496',
    voice: '黒沢 ともよ',
    gender: '女性',
    passive: '夢の世界の支配者',
    passive_details:
      '敵味方合わせて、睡眠状態のキャラクター1人につき、自身の攻撃力、防御力、素早さが10%上昇する（最大値50%）',
    skill: '白昼夢',
    skill_details:
      '敵単体に攻撃力1倍のダメージ【使用後スキルLv+1。Lv.2以上:睡眠40%(2ターン)/Lv.3:列に攻撃/Lv.4:全体に攻撃】最大Lv.4',
    skill_plus: '白昼夢＋',
    skill_plus_details:
      '敵単体に攻撃力1.25倍のダメージ【使用後スキルLv+1。Lv.2以上:睡眠40%(2ターン)/Lv.3:列に攻撃/Lv.4:全体に攻撃】最大Lv.4',
    askill: '苦痛のパトス',
    askill_details:
      '2ターンの間、敵単体の攻撃力、防御力、素早さを25%低下させる',
    askill_plus: '苦痛のパトス＋',
    askill_plus_details:
      '2ターンの間、敵単体の攻撃力、防御力、素早さを30%低下させる',
    special: 'メルヘンダービー',
    special_details:
      '敵横一列に攻撃力3.25倍のダメージさらに弱体、状態異常が付与されている敵に対して、効果1種類につきダメージ10%上昇',
    special_plus: 'メルヘンダービー＋',
    special_plus_details:
      '敵横一列に攻撃力3.5倍のダメージさらに弱体、状態異常が付与されている敵に対して、効果1種類につきダメージ10%上昇',
    masseffect: '夢うつつ',
    masseffect_details:
      '【ダメージ無効】【覚醒コスト減少】が特徴の支援型の効果',
    element: '未調査',
    peerage: '不明',
    old_class: 'なし'
  },
  {
    name: 'アガレス',
    no: '002',
    gauge: '5',
    class: 'スナイパー',
    style: 'バースト',
    hp: '868 - 10712',
    atk: '99 - 971',
    def: '40 - 418',
    spd: '41 - 427',
    voice: '上田 燿司',
    gender: '男性',
    passive: '運命の導き',
    passive_details: '致死ダメージを受けたとき、20%の確率で踏みとどまる',
    skill: 'ダブルトマホーク',
    skill_details: '敵単体に攻撃力0.5倍の防御無視2連続ダメージ',
    skill_plus: 'ダブルトマホーク＋',
    skill_plus_details: '敵単体に攻撃力0.6倍の防御無視2連続ダメージ',
    askill: 'モータルハチェット',
    askill_details:
      '2ターン後、敵単体に攻撃力2倍の2連続ダメージさらに敵を即死させる',
    askill_plus: 'モータルハチェット＋',
    askill_plus_details:
      '1ターン後、敵単体に攻撃力2.15倍の2連続ダメージさらに敵を即死させる',
    special: 'プラネットフォース',
    special_details:
      '敵単体に攻撃力5倍のダメージさらに2ターンの間、自身の効果範囲を列化させる',
    special_plus: 'プラネットフォース＋',
    special_plus_details:
      '敵単体に攻撃力5.25倍のダメージさらに2ターンの間、自身の効果範囲を列化させる',
    masseffect: '星読み',
    masseffect_details: '【感電無効】【防御貫通】が特徴のバランス型の効果',
    element: '地',
    peerage: '公爵',
    old_class: 'スレイヤー'
  },
  {
    name: 'ニバス',
    no: '真-002',
    gauge: '3',
    class: 'スナイパー',
    style: 'ラッシュ',
    hp: '496 - 6143',
    atk: '145 - 1429',
    def: '38 - 406',
    spd: '49 - 480',
    voice: '藤井 アユ美',
    gender: '女性',
    passive: 'ムードメーカー',
    passive_details: '毎ターン終了時、25%の確率で自身以外の覚醒ゲージを+1する',
    skill: 'ラブリージャグラー',
    skill_details:
      '敵単体に攻撃力1倍のダメージ【使用するごとに投げるクラブの数が増加】',
    skill_plus: 'ラブリージャグラー＋',
    skill_plus_details:
      '敵単体に攻撃力1.25倍のダメージ【使用するごとに投げるクラブの数が増加】',
    askill: 'ハッピーカーニバル',
    askill_details: '味方単体にいずれかのフォトンを最大2つ追加する',
    askill_plus: 'ハッピーカーニバル＋',
    askill_plus_details:
      '味方単体にいずれかのフォトンを最大2つ追加し、2ターンの間、Lv×5の固定追加ダメージを付与する',
    special: 'ブレイブドール',
    special_details:
      '敵単体に攻撃力3倍のダメージさらに1ターンの間、自身の全フォトンを強化する',
    special_plus: 'ブレイブドール＋',
    special_plus_details:
      '敵単体に攻撃力3.25倍のダメージさらに1ターンの間、自身の全フォトンを強化する',
    masseffect: 'いけいけドンドン',
    masseffect_details:
      '【戦闘開始時、覚醒ゲージ増加】【強化ターン延長】が特徴の支援型の効果',
    element: '未調査',
    peerage: '不明',
    old_class: 'なし'
  },
  {
    name: 'ウァサゴ',
    no: '003',
    gauge: '3',
    class: 'ファイター',
    style: 'ラッシュ',
    hp: '468 - 5743',
    atk: '101 - 980',
    def: '52 - 500',
    spd: '58 - 614',
    voice: '小松 未可子',
    gender: '女性',
    passive: '高貴な血筋',
    passive_details: '戦闘開始時、覚醒ゲージが最大になる',
    skill: '血の契約',
    skill_details:
      '敵単体に攻撃力1倍のダメージさらに70%の確率で、2ターンの間、敵を呪い状態にする',
    skill_plus: '血の契約＋',
    skill_plus_details:
      '敵単体に攻撃力1.25倍のダメージさらに80%の確率で、2ターンの間、敵を呪い状態にする',
    askill: '悠久の契約',
    askill_details:
      '敵単体に攻撃力1.75倍のダメージさらに25%の確率で、敵を即死させる',
    askill_plus: '悠久の契約＋',
    askill_plus_details:
      '敵単体に攻撃力2倍のダメージさらに30%の確率で、敵を即死させる',
    special: 'インペリアルクロー',
    special_details:
      '敵単体に攻撃力3倍のダメージさらに自身以外の覚醒ゲージを+1する',
    special_plus: 'インペリアルクロー＋',
    special_plus_details:
      '敵単体に攻撃力3.25倍のダメージさらに自身以外の覚醒ゲージを+1する',
    masseffect: '高潔な一撃',
    masseffect_details:
      '【ステータス弱体耐性】【呪い攻撃】が特徴の支援型の効果',
    element: '地',
    peerage: '君主',
    old_class: 'パニッシャー'
  },
  {
    name: 'サキュバス',
    no: '真-003',
    gauge: '3',
    class: 'トルーパー',
    style: 'ラッシュ',
    hp: '582 - 7530',
    atk: '103 - 952',
    def: '42 - 429',
    spd: '62 - 631',
    voice: '山崎 はるか',
    gender: '女性',
    passive: 'カワイさの証明',
    passive_details:
      '最初の2ターンの間、毎ターン終了時、自身の覚醒ゲージが+2される',
    skill: 'クセになりそう☆',
    skill_details:
      '敵単体に攻撃力0.85倍のダメージさらに35%の確率で積まれているフォトンを1つ奪い、自身への攻撃を1回無効化する',
    skill_plus: 'クセになりそう☆＋',
    skill_plus_details:
      '敵単体に攻撃力1.1倍のダメージさらに45%の確率で積まれているフォトンを1つ奪い、自身への攻撃を1回無効化する',
    askill: '難易度高過ぎィ！',
    askill_details:
      'リーダーと、ターゲットしたキャラクターの相性を占い、能力を強化する【結果によって効果が変化】',
    askill_plus: '難易度高過ぎィ！＋',
    askill_plus_details:
      'リーダーと、ターゲットしたキャラクターの相性を占い、能力を強化する【結果によって効果が変化】',
    special: 'チャームウィップ',
    special_details:
      '敵横一列に攻撃力0.8倍の3連続ダメージさらに2ターンの間、前列に引き寄せ、ステータス強化状態を解除する',
    special_plus: 'チャームウィップ＋',
    special_plus_details:
      '敵横一列に攻撃力0.9倍の3連続ダメージさらに2ターンの間、前列に引き寄せ、ステータス強化状態を解除する',
    masseffect: 'サーヤが一番ッ☆',
    masseffect_details: '【ＨＰ吸収攻撃】【束縛攻撃】が特徴の攻撃型の効果',
    element: '雷',
    peerage: '不明',
    old_class: 'なし'
  },
  {
    name: 'ガミジン',
    no: '004',
    gauge: '5',
    class: 'ファイター',
    style: 'カウンター',
    hp: '707 - 8729',
    atk: '121 - 1193',
    def: '40 - 418',
    spd: '40 - 417',
    voice: '矢野 正明',
    gender: '男性',
    passive: '強襲ヒット',
    passive_details:
      '遠距離攻撃を受けたとき、15%の確率で攻撃を無効化し、反撃する',
    skill: 'スマッシュ',
    skill_details:
      '敵単体に攻撃力0.9倍のダメージさらに70%の確率で、敵を毒状態にする【攻撃を2回受けるたびにスキルLv上昇】',
    skill_plus: 'スマッシュ＋',
    skill_plus_details:
      '敵単体に攻撃力1.15倍のダメージさらに80%の確率で、敵を毒状態にする【攻撃を2回受けるたびにスキルLv上昇】',
    askill: 'フルスイング',
    askill_details: '敵単体に攻撃力2.75倍の防御無視ダメージ',
    askill_plus: 'フルスイング＋',
    askill_plus_details: '敵単体に攻撃力3倍の防御無視ダメージ',
    special: 'ブラッドネメシス',
    special_details:
      '敵横一列に攻撃力1.1倍の4連続ダメージさらに80%の確率で、2ターンの間、敵の攻撃力を15%低下させる',
    special_plus: 'ブラッドネメシス＋',
    special_plus_details:
      '敵横一列に攻撃力1.15倍の4連続ダメージさらに80%の確率で、2ターンの間、敵の攻撃力を25%低下させる',
    masseffect: '負け犬根性',
    masseffect_details: '【ダメージ無効】【防御貫通】が特徴のバランス型の効果',
    element: '地',
    peerage: '侯爵',
    old_class: 'ファイター'
  },
  {
    name: 'ユフィール',
    no: '真-004',
    gauge: '5',
    class: 'スナイパー',
    style: 'バースト',
    hp: '571 - 7042',
    atk: '61 - 632',
    def: '61 - 635',
    spd: '58 - 614',
    voice: '東城 咲耶子',
    gender: '女性',
    passive: '抜群の包容力',
    passive_details: '男性キャラクターへの回復量が30%上昇する',
    skill: 'ふりふりエイド',
    skill_details:
      '味方横一列のHPを10%回復させるさらに2ターンの間、状態異常とステータス弱体を受け付けない状態になる',
    skill_plus: 'ふりふりエイド＋',
    skill_plus_details:
      '味方横一列のHPを15%回復させるさらに2ターンの間、状態異常とステータス弱体を受け付けない状態になる',
    askill: 'ひみつの診察室',
    askill_details: '味方単体を覚醒状態にする',
    askill_plus: 'ひみつの診察室＋',
    askill_plus_details: '味方単体を覚醒状態にし、さらに攻撃を1回無効化する',
    special: 'ミルキーライブラ',
    special_details:
      '味方全体のHPを35%回復させるさらに戦闘不能の味方を、最大HPの25%で蘇生させる',
    special_plus: 'ミルキーライブラ＋',
    special_plus_details:
      '味方全体のHPを40%回復させるさらに戦闘不能の味方を、最大HPの35%で蘇生させる',
    masseffect: 'ふわふわ女医さん',
    masseffect_details: '【戦闘不能時、蘇生】【自然回復】が特徴の支援型の効果',
    element: '未調査',
    peerage: '不明',
    old_class: 'なし'
  },
  {
    name: 'マルバス',
    no: '005',
    gauge: '4',
    class: 'スナイパー',
    style: 'カウンター',
    hp: '587 - 7262',
    atk: '60 - 628',
    def: '50 - 489',
    spd: '73 - 719',
    voice: '生田 善子',
    gender: '女性',
    passive: '私すごーい☆',
    passive_details: '毎ターン終了時、覚醒ゲージが+1される',
    skill: 'マジカルヒール',
    skill_details: '味方単体のHPを25%回復させる',
    skill_plus: 'マジカルヒール＋',
    skill_plus_details: '味方単体のHPを30%回復させる',
    askill: 'ミスティック',
    askill_details: '味方単体のHPを35%回復させ、覚醒ゲージを+2する',
    askill_plus: 'ミスティック＋',
    askill_plus_details: '味方単体のHPを40%回復させ、覚醒ゲージを+2する',
    special: 'クルーエルラブ',
    special_details:
      '味方全体のHPを20%回復させ、2ターンの間、防御力を30%上昇させる【攻撃を2回受けるたびにスキルLv上昇】',
    special_plus: 'クルーエルラブ＋',
    special_plus_details:
      '味方全体のHPを25%回復させ、2ターンの間、防御力を40%上昇させる【攻撃を2回受けるたびにスキルLv上昇】',
    masseffect: 'これで一個貸しね☆',
    masseffect_details: '【自然回復】【防御力上昇】が特徴の防御型の効果',
    element: '地',
    peerage: '総裁',
    old_class: 'サポーター'
  },
  {
    name: 'フリアエ',
    no: '真-005',
    gauge: '4',
    class: 'スナイパー',
    style: 'カウンター',
    hp: '486 - 6079',
    atk: '76 - 771',
    def: '62 - 635',
    spd: '63 - 647',
    voice: '渕上 舞',
    gender: '女性',
    passive: '司法の番人',
    passive_details: '行動開始時、20%の確率でスキルが追加される',
    skill: '秩序の障壁',
    skill_details: '味方前列への攻撃を1回無効化する',
    skill_plus: '秩序の障壁＋',
    skill_plus_details:
      '味方前列への攻撃を1回無効化するさらに2ターンの間、攻撃力を10%上昇させる',
    askill: '判決『氷結の刑』',
    askill_details:
      '敵横一列に攻撃力1.5倍のダメージ2ターンの間、氷結の地形効果で0.5倍の継続ダメージを与え、攻撃力を低下させる',
    askill_plus: '判決『氷結の刑』＋',
    askill_plus_details:
      '敵横一列に攻撃力1.75倍のダメージ2ターンの間、氷結の地形効果で0.75倍の継続ダメージを与え、攻撃力を低下させる',
    special: '焼べる浄化の蒼炎',
    special_details:
      '味方横一列のHPを35%回復させるさらに2ターンの間、攻撃力を20%上昇させる',
    special_plus: '焼べる浄化の蒼炎＋',
    special_plus_details:
      '味方横一列のHPを40%回復させるさらに2ターンの間、攻撃力を30%上昇させる',
    masseffect: 'メギドラル式裁判',
    masseffect_details: '【自然回復】【覚醒コスト減少】が特徴の支援型の効果',
    element: '氷',
    peerage: '不明',
    old_class: 'なし'
  },
  {
    name: 'ウァレフォル',
    no: '006',
    gauge: '3',
    class: 'ファイター',
    style: 'ラッシュ',
    hp: '473 - 5855',
    atk: '115 - 1150',
    def: '31 - 287',
    spd: '67 - 678',
    voice: '大地 葉',
    gender: '女性',
    passive: '弱肉強食',
    passive_details: '獣人系のモンスターに2倍のダメージ',
    skill: 'ワイルドハント',
    skill_details: '敵単体に攻撃力0.7倍の4連続ダメージ',
    skill_plus: 'ワイルドハント＋',
    skill_plus_details: '敵単体に攻撃力0.75倍の4連続ダメージ',
    askill: '行くよ、野郎ども！',
    askill_details:
      '2ターンの間、味方全体の攻撃にLv×5の固定追加ダメージを付与する',
    askill_plus: '行くよ、野郎ども！＋',
    askill_plus_details:
      '2ターンの間、味方全体の攻撃にLv×10の固定追加ダメージを付与する',
    special: 'ロウオブザサバンナ',
    special_details:
      '敵単体に攻撃力1.75倍の2連続ダメージさらに2ターンの間、敵を毒状態にする',
    special_plus: 'ロウオブザサバンナ＋',
    special_plus_details:
      '敵単体に攻撃力1.2倍の4連続ダメージさらに2ターンの間、敵を毒状態にする',
    masseffect: '前面強襲',
    masseffect_details: '【獣人特効】【毒攻撃】が特徴の攻撃型の効果',
    element: '地',
    peerage: '公爵',
    old_class: 'ファイター'
  },
  {
    name: 'アラストール',
    no: '真-006',
    gauge: '4',
    class: 'トルーパー',
    style: 'カウンター',
    hp: '742 - 9208',
    atk: '83 - 776',
    def: '42 - 424',
    spd: '60 - 627',
    voice: '大坪 由佳',
    gender: '女性',
    passive: '胡蝶之夢',
    passive_details: '毎ターン終了時、覚醒ゲージが+1される',
    skill: '天誅アレグロ',
    skill_details:
      '敵単体に攻撃力1倍のダメージさらに80%の確率で、2ターンの間、攻撃力を15%低下させる',
    skill_plus: '天誅アレグロ＋',
    skill_plus_details:
      '敵単体に攻撃力1.25倍のダメージさらに80%の確率で、2ターンの間、攻撃力を20%低下させる',
    askill: '贖罪のシルフィード',
    askill_details:
      '敵横一列に攻撃力1.5倍のダメージさらに70%の確率で、2ターンの間、敵をめまい状態にする',
    askill_plus: '贖罪のシルフィード＋',
    askill_plus_details:
      '敵横一列に攻撃力1.75倍のダメージさらに80%の確率で、2ターンの間、敵をめまい状態にする',
    special: '極刑デッドエンド',
    special_details:
      '敵横一列に攻撃力2.25倍のダメージさらに2ターンの間、味方前列のスキルを強化する',
    special_plus: '極刑デッドエンド＋',
    special_plus_details:
      '敵横一列に攻撃力2.5倍のダメージさらに2ターンの間、味方前列のスキルを強化する',
    masseffect: '華麗なる処刑',
    masseffect_details: '【めまい攻撃】【ＨＰ吸収攻撃】が特徴の妨害型の効果',
    element: '風',
    peerage: '不明',
    old_class: 'なし'
  },
  {
    name: 'アモン',
    no: '007',
    gauge: '4',
    class: 'ファイター',
    style: 'バースト',
    hp: '375 - 4598',
    atk: '121 - 1194',
    def: '40 - 417',
    spd: '68 - 685',
    voice: '大地 葉',
    gender: '男性',
    passive: '隠密行動',
    passive_details: '敵から狙われにくくなり、攻撃力が10%上昇する',
    skill: '巾着切り',
    skill_details:
      '敵単体に攻撃力1倍のダメージさらに35%の確率で、積まれているフォトンを1つ奪う',
    skill_plus: '巾着切り＋',
    skill_plus_details:
      '敵単体に攻撃力1.25倍のダメージさらに45%の確率で、積まれているフォトンを1つ奪う',
    askill: 'ダーティレイド',
    askill_details:
      '敵単体に攻撃力1.4倍の2連続ダメージさらに25%の確率で、敵を即死させる',
    askill_plus: 'ダーティレイド＋',
    askill_plus_details:
      '敵単体に攻撃力1.5倍の2連続ダメージさらに30%の確率で、敵を即死させる',
    special: '世界を包む炎獄',
    special_details:
      '敵単体に攻撃力4倍の火ダメージ2ターンの間、炎上の地形効果で1倍の継続ダメージを与える',
    special_plus: '世界を包む炎獄＋',
    special_plus_details:
      '敵単体に攻撃力4.25倍の火ダメージ2ターンの間、炎上の地形効果で1.25倍の継続ダメージを与える',
    masseffect: '暗黒街のやり方',
    masseffect_details: '【即死攻撃】【毒攻撃】が特徴の妨害型の効果',
    element: '火',
    peerage: '侯爵',
    old_class: 'パニッシャー'
  },
  {
    name: 'バルバトス',
    no: '008',
    gauge: '3',
    class: 'スナイパー',
    style: 'カウンター',
    hp: '622 - 7659',
    atk: '98 - 960',
    def: '48 - 476',
    spd: '48 - 474',
    voice: '江口 拓也',
    gender: '男性',
    passive: '恋心をひとつまみ',
    passive_details: '女性キャラクターへの回復量が30%上昇する',
    skill: '暴風のワルツ',
    skill_details:
      '敵単体に攻撃力1倍のダメージさらに50%の確率で、チャージを追加する',
    skill_plus: '暴風のワルツ＋',
    skill_plus_details:
      '敵単体に攻撃力1.25倍のダメージさらに60%の確率で、チャージを追加する',
    askill: '妖精たちのダンス',
    askill_details: '2ターンの間、味方前列の攻撃力を30%上昇させる',
    askill_plus: '妖精たちのダンス＋',
    askill_plus_details: '2ターンの間、味方前列の攻撃力を40%上昇させる',
    special: 'ホメロスの風讃歌',
    special_details: '味方単体のHPを50%回復させる',
    special_plus: 'ホメロスの風讃歌＋',
    special_plus_details: '味方単体のHPを55%回復させる',
    masseffect: '戦場の花園',
    masseffect_details: '【毒耐性】【自然回復】が特徴の支援型の効果',
    element: '風',
    peerage: '公爵',
    old_class: 'サポーター'
  },
  {
    name: 'パイモン',
    no: '009',
    gauge: '3',
    class: 'ファイター',
    style: 'ラッシュ',
    hp: '585 - 7172',
    atk: '121 - 1191',
    def: '40 - 420',
    spd: '48 - 472',
    voice: '守川 武尊',
    gender: '男性',
    passive: 'プレイボーイ',
    passive_details:
      '女性キャラクターが多いほど、攻撃力が上昇する（最大値25%）',
    skill: 'ブラッディローズ',
    skill_details:
      '敵単体に攻撃力0.7倍の3連続ダメージさらに70%の確率で、覚醒ゲージを-1する',
    skill_plus: 'ブラッディローズ＋',
    skill_plus_details:
      '敵単体に攻撃力0.75倍の3連続ダメージさらに80%の確率で、覚醒ゲージを-1する',
    askill: 'ローズプロポーズ',
    askill_details:
      '2ターンの間、女性キャラクター1人を魅了状態にし、自身のアタックに追撃するようになる',
    askill_plus: 'ローズプロポーズ＋',
    askill_plus_details:
      '2ターンの間、女性キャラクター1人を魅了状態にし、自身のアタックに追撃させ、攻撃力を20%上昇させる',
    special: 'ユリシスアーク',
    special_details: '敵単体に攻撃力3倍のダメージさらにアタックを追加する',
    special_plus: 'ユリシスアーク＋',
    special_plus_details:
      '敵単体に攻撃力3.25倍のダメージさらにアタックを追加する',
    masseffect: '両手に花',
    masseffect_details:
      '【戦闘開始時、覚醒ゲージ増加】【単体ダメージ上昇】が特徴の攻撃型の効果',
    element: '水',
    peerage: '王',
    old_class: 'ファイター'
  },
  {
    name: 'インキュバス',
    no: '真-009',
    gauge: '4',
    class: 'ファイター',
    style: 'ラッシュ',
    hp: '501 - 6209',
    atk: '125 - 1177',
    def: '51 - 489',
    spd: '51 - 497',
    voice: '鈴木 裕斗',
    gender: '男性',
    passive: '傲慢たる夢魔',
    passive_details:
      'めまい、混乱、悪夢のいずれかの状態異常が付与されている敵へのダメージが20%上昇する(効果は重複可能/最大60%上昇)',
    skill: 'ファスキナーレ',
    skill_details:
      '敵単体に攻撃力0.8倍の2連続ダメージさらに対象が女性のとき、2ターンの間、めまいにする',
    skill_plus: 'ファスキナーレ＋',
    skill_plus_details:
      '敵単体に攻撃力0.9倍の2連続ダメージさらに対象が女性のとき、2ターンの間、めまいにする',
    askill: 'ヒュプノインパーケ',
    askill_details:
      '敵単体に攻撃力0.9倍の3連続ダメージさらに与えたダメージの30%を吸収し、対象が女性のとき、覚醒ゲージを-2する',
    askill_plus: 'ヒュプノインパーケ＋',
    askill_plus_details:
      '敵単体に攻撃力0.9倍の3連続ダメージさらに与えたダメージの30%を吸収し、対象が女性のとき、覚醒ゲージを-3する',
    special: 'ドゥルケソムニウム',
    special_details:
      '敵横一列に攻撃力2倍のダメージ敵編成の女性1体につき倍率が0.2上昇し、対象の女性を2ターンの間、悪夢状態にする',
    special_plus: 'ドゥルケソムニウム＋',
    special_plus_details:
      '敵横一列に攻撃力2.25倍のダメージ敵編成の女性1体につき倍率が0.2上昇し、対象の女性を2ターンの間、悪夢状態にする',
    masseffect: '対女性イニシアチブ',
    masseffect_details: '【めまい攻撃】【めまい反撃】が特徴の妨害型の効果',
    element: '未調査',
    peerage: '不明',
    old_class: 'なし'
  },
  {
    name: 'ブエル',
    no: '010',
    gauge: '4',
    class: 'スナイパー',
    style: 'バースト',
    hp: '588 - 7275',
    atk: '62 - 642',
    def: '48 - 477',
    spd: '73 - 716',
    voice: '久保 ユリカ',
    gender: '女性',
    passive: '甘えん坊',
    passive_details: '毎ターン終了時、覚醒ゲージが+1される',
    skill: 'ドロップフォトン',
    skill_details: '味方後列の覚醒ゲージを+1する',
    skill_plus: 'ドロップフォトン＋',
    skill_plus_details: '味方後列の覚醒ゲージを+1し、攻撃力を10%上昇させる',
    askill: 'パワーブースト',
    askill_details: '2ターンの間、味方後列のアタックを強化する',
    askill_plus: 'パワーブースト＋',
    askill_plus_details:
      '2ターンの間、味方後列のアタックを強化し、攻撃力を10%上昇させる',
    special: 'スターライトアイ',
    special_details:
      '2ターンの間、味方全体のチャージを強化し、攻撃力を10%上昇させる',
    special_plus: 'スターライトアイ＋',
    special_plus_details:
      '2ターンの間、味方全体のチャージを強化し、攻撃力を20%上昇させる',
    masseffect: 'ごめんね幻獣さん',
    masseffect_details: '【チャージ追加】【アタック追加】が特徴の支援型の効果',
    element: '水',
    peerage: '総裁',
    old_class: 'スナイパー'
  },
  {
    name: 'グシオン',
    no: '011',
    gauge: '4',
    class: 'スナイパー',
    style: 'カウンター',
    hp: '629 - 7727',
    atk: '83 - 857',
    def: '42 - 430',
    spd: '70 - 697',
    voice: '安田 奈緒子',
    gender: '女性',
    passive: '負けず嫌い',
    passive_details: 'HPが50%以下のとき、攻撃力が30%上昇する',
    skill: '子守唄',
    skill_details:
      '敵単体に攻撃力1倍のダメージさらに50%の確率で、2ターンの間、敵を睡眠状態にする',
    skill_plus: '子守唄＋',
    skill_plus_details:
      '敵単体に攻撃力1.25倍のダメージさらに60%の確率で、2ターンの間、敵を睡眠状態にする',
    askill: 'オルフェウスの竪琴',
    askill_details: '2ターンの間、味方全体の攻撃力を30%上昇させる',
    askill_plus: 'オルフェウスの竪琴＋',
    askill_plus_details: '2ターンの間、味方全体の攻撃力を40%上昇させる',
    special: 'ビーストファング',
    special_details:
      '敵単体に攻撃力4倍のダメージさらに2ターンの間、攻撃力を25%低下させる',
    special_plus: 'ビーストファング＋',
    special_plus_details:
      '敵単体に攻撃力4.25倍のダメージさらに2ターンの間、攻撃力を35%低下させる',
    masseffect: 'ちょっとナマイキ',
    masseffect_details: '【睡眠攻撃】【自然回復】が特徴の妨害型の効果',
    element: '雷',
    peerage: '公爵',
    old_class: 'パニッシャー'
  },
  {
    name: 'コルソン',
    no: '真-011',
    gauge: '4',
    class: 'ファイター',
    style: 'カウンター',
    hp: '750 - 8949',
    atk: '78 - 788',
    def: '40 - 416',
    spd: '60 - 563',
    voice: '桜咲 千依',
    gender: '女性',
    passive: '魂無き軍団の王',
    passive_details: '束縛状態の敵1人につき、自身の攻撃力が10%上昇する',
    skill: 'ヒミツのおまじない／※【ぬいぐるみ巨大化状態の場合】みんなで突撃～',
    skill_details:
      '2ターンの間、敵単体を90%の確率で束縛状態にし、対象が束縛状態の場合、70%の確率で呪い状態にする／※【ぬいぐるみ巨大化状態の場合】敵単体に攻撃力1.6倍のダメージ',
    skill_plus:
      'ヒミツのおまじない＋／※【ぬいぐるみ巨大化状態の場合】みんなで突撃～＋',
    skill_plus_details:
      '2ターンの間、敵単体を束縛状態にし、対象が束縛状態の場合、80%の確率で呪い状態にする／※【ぬいぐるみ巨大化状態の場合】敵単体に攻撃力1.85倍のダメージ',
    askill:
      '一緒にあそぼっ！／※【ぬいぐるみ巨大化状態の場合】コーちゃん怒った！',
    askill_details:
      '敵単体に攻撃力2.25倍のダメージ さらに覚醒ゲージを全て消費し、ぬいぐるみ巨大化[最大HP30%分のダメージ無効/スキル変化]／※【ぬいぐるみ巨大化状態の場合】敵単体に攻撃力3.75倍のダメージ ただし、反動で自身が最大HPの10%ダメージを受ける敵が束縛状態の場合ダメージが1.5倍になる',
    askill_plus:
      '一緒にあそぼっ！＋／※【ぬいぐるみ巨大化状態の場合】コーちゃん怒った！＋',
    askill_plus_details:
      '敵単体に攻撃力2.5倍のダメージ さらに覚醒ゲージを全て消費し、ぬいぐるみ巨大化[最大HP35%分のダメージ無効/スキル変化]／※【ぬいぐるみ巨大化状態の場合】敵単体に攻撃力4倍のダメージ ただし、反動で自身が最大HPの10%ダメージを受ける敵が束縛状態の場合ダメージが1.5倍になる',
    special: 'ストレイシープ',
    special_details:
      '敵横一列に攻撃力0.95倍の4連続ダメージさらに70%の確率で2ターンの間、敵を混乱状態にする',
    special_plus: 'ストレイシープ＋',
    special_plus_details:
      '敵横一列に攻撃力1倍の4連続ダメージさらに80%の確率で2ターンの間、敵を混乱状態にする',
    masseffect: 'ぬいぐるみさんと一緒',
    masseffect_details: '【ダメージ軽減】【呪い攻撃】が特徴のバランス型の効果',
    element: '未調査',
    peerage: '不明',
    old_class: 'なし'
  },
  {
    name: 'シトリー',
    no: '012',
    gauge: '5',
    class: 'トルーパー',
    style: 'カウンター',
    hp: '460 - 5667',
    atk: '119 - 1176',
    def: '51 - 494',
    spd: '48 - 476',
    voice: '関根 明良',
    gender: '女性',
    passive: 'ハルマニアの槍',
    passive_details: '覚醒ゲージ量が多いほど、攻撃力が上昇する（最大値25%）',
    skill: 'ジャスティスライト',
    skill_details:
      '敵単体に攻撃力0.7倍の3連続雷ダメージ2ターンの間、帯電の地形効果で0.5倍の継続ダメージを与え、確率で感電させる',
    skill_plus: 'ジャスティスライト＋',
    skill_plus_details:
      '敵単体に攻撃力0.75倍の3連続雷ダメージ2ターンの間、帯電の地形効果で0.75倍の継続ダメージを与え、確率で感電させる',
    askill: 'エクスプロージョン',
    askill_details:
      '敵全体に攻撃力1.2倍の雷ダメージさらに2ターンの間、自身のスキルを強化する',
    askill_plus: 'エクスプロージョン＋',
    askill_plus_details:
      '敵全体に攻撃力1.45倍の雷ダメージさらに2ターンの間、自身のスキルを強化する',
    special: 'エアリアルグロー',
    special_details:
      '敵単体に攻撃力5倍の雷ダメージさらに2ターンの間、敵を感電状態にする',
    special_plus: 'エアリアルグロー＋',
    special_plus_details:
      '敵単体に攻撃力5.25倍の雷ダメージさらに2ターンの間、敵を感電状態にする',
    masseffect: '伝説の英雄',
    masseffect_details:
      '【感電攻撃】【覚醒が多いほど攻撃力上昇】が特徴の攻撃型の効果',
    element: '雷',
    peerage: '君主',
    old_class: 'スナイパー'
  },
  {
    name: 'ジニマル',
    no: '真-012',
    gauge: '4',
    class: 'トルーパー',
    style: 'カウンター',
    hp: '504 - 5904',
    atk: '83 - 859',
    def: '63 - 612',
    spd: '57 - 538',
    voice: '吉田 聖子',
    gender: '女性',
    passive: '蒼海の滅王',
    passive_details: '攻撃時、5%の確率で敵を束縛状態にする',
    skill: 'トーテンタンツ',
    skill_details:
      '敵横一列に攻撃力0.9倍のダメージさらに30%（束縛状態の敵の場合60%）の確率で2ターンの間、敵を病気状態にする',
    skill_plus: 'トーテンタンツ＋',
    skill_plus_details:
      '敵横一列に攻撃力1倍のダメージさらに40%（束縛状態の敵の場合70%）の確率で2ターンの間、敵を病気状態にする',
    askill: 'ギフトヴィアベル',
    askill_details:
      '敵横一列に攻撃力1.4倍のダメージさらに40%（束縛状態の敵の場合90%）の確率で2ターンの間、敵を毒状態にする',
    askill_plus: 'ギフトヴィアベル＋',
    askill_plus_details:
      '敵横一列に攻撃力1.5倍のダメージさらに50%（束縛状態の敵の場合100%）の確率で2ターンの間、敵を毒状態にする',
    special: 'ティーフゼヴォーゲ',
    special_details:
      '敵横一列に攻撃力2.25倍のダメージさらに2ターンの間、ターン終了時に敵味方全体のHPが30%回復する',
    special_plus: 'ティーフゼヴォーゲ＋',
    special_plus_details:
      '敵横一列に攻撃力2.5倍のダメージさらに2ターンの間、ターン終了時に敵味方全体のHPが35%回復する',
    masseffect: '逆巻く荒波',
    masseffect_details: '【ダメージ軽減】【防御力上昇】が特徴の防御型の効果',
    element: '未調査',
    peerage: '不明',
    old_class: 'なし'
  },
  {
    name: 'ベレト',
    no: '013',
    gauge: '5',
    class: 'トルーパー',
    style: 'カウンター',
    hp: '485 - 5968',
    atk: '123 - 1206',
    def: '39 - 411',
    spd: '60 - 626',
    voice: '明坂 聡美',
    gender: '女性',
    passive: '憤怒の瞳',
    passive_details: '行動開始時、20%の確率でアタックが追加される',
    skill: 'レイジスタンプ',
    skill_details:
      '敵単体に攻撃力0.9倍のダメージさらに50%の確率で、アタックを追加する【攻撃を2回受けるたびにスキルLv上昇】',
    skill_plus: 'レイジスタンプ＋',
    skill_plus_details:
      '敵単体に攻撃力1.15倍のダメージさらに60%の確率で、アタックを追加する【攻撃を2回受けるたびにスキルLv上昇】',
    askill: '狂喜の怒り',
    askill_details:
      'バーサーク状態になり攻撃力が25%上昇するさらに毎ターン最大HPの10%ダメージを受け、攻撃力が25%上昇し続ける（最大125%）',
    askill_plus: '狂喜の怒り＋',
    askill_plus_details:
      'バーサーク状態になり攻撃力が50%上昇するさらに毎ターン最大HPの10%ダメージを受け、攻撃力が25%上昇し続ける（最大150%）',
    special: 'リアニメイター',
    special_details:
      '戦闘不能の味方を、最大HPの25%で蘇生させ、2ターンの間、味方全体のアタックを強化するが、呪い状態になる',
    special_plus: 'リアニメイター＋',
    special_plus_details:
      '戦闘不能の味方を、最大HPの35%で蘇生させ、2ターンの間、味方全体のアタックを強化するが、呪い状態になる',
    masseffect: '怒りんぼう',
    masseffect_details: '【アタック追加】【攻撃力上昇】が特徴の攻撃型の効果',
    element: '氷',
    peerage: '王',
    old_class: 'ファイター'
  },
  {
    name: 'バフォメット',
    no: '真-013',
    gauge: '3',
    class: 'スナイパー',
    style: 'ラッシュ',
    hp: '460 - 6898',
    atk: '125 - 1180',
    def: '41 - 369',
    spd: '61 - 645',
    voice: '佐伯 伊織',
    gender: '女性',
    passive: '魔術の心得',
    passive_details:
      '50%の確率で、ターン終了時に自身にかかっている状態異常を治癒する',
    skill: '風の紡ぎ唄',
    skill_details: '自身の点穴Lvを+10するさらに、覚醒ゲージを+1する',
    skill_plus: '風の紡ぎ唄＋',
    skill_plus_details: '自身の点穴Lvを+15するさらに、覚醒ゲージを+1する',
    askill: '封邪のコントラクト',
    askill_details:
      '敵単体に掛かっている強化を解除するさらに90%の確率で、2ターンの間、束縛状態にする',
    askill_plus: '封邪のコントラクト＋',
    askill_plus_details:
      '敵単体に掛かっている強化を解除するさらに2ターンの間、束縛状態にする',
    special: 'タブー・マジック',
    special_details: '敵単体に攻撃力3倍のダメージさらに、自身の点穴Lvを+20する',
    special_plus: 'タブー・マジック＋',
    special_plus_details:
      '敵単体に攻撃力3倍のダメージさらに、自身の点穴Lvを+25する',
    masseffect: '世界征服計画',
    masseffect_details:
      '【点穴上昇】【戦闘開始時、点穴増加】が特徴の攻撃型の効果',
    element: '未調査',
    peerage: '不明',
    old_class: 'なし'
  },
  {
    name: 'レラジェ',
    no: '014',
    gauge: '3',
    class: 'スナイパー',
    style: 'カウンター',
    hp: '486 - 5980',
    atk: '139 - 1386',
    def: '41 - 424',
    spd: '48 - 475',
    voice: '飯田 里穂',
    gender: '女性',
    passive: 'ビーストハンター',
    passive_details: '獣系のモンスターに2倍のダメージ',
    skill: 'シャープショット',
    skill_details:
      '敵単体に攻撃力1倍のダメージさらに50%の確率で、アタックを追加する',
    skill_plus: 'シャープショット＋',
    skill_plus_details:
      '敵単体に攻撃力1.25倍のダメージさらに60%の確率で、アタックを追加する',
    askill: 'クランブルアロー',
    askill_details:
      '敵単体に攻撃力1.75倍のダメージさらに積まれているフォトンを1つ破壊する',
    askill_plus: 'クランブルアロー＋',
    askill_plus_details:
      '敵単体に攻撃力2倍のダメージさらに積まれているフォトンを1つ破壊する',
    special: 'パワースナイプ',
    special_details:
      '敵単体に攻撃力2.5倍のダメージさらに50%の確率で、敵を即死させる【攻撃を2回受けるたびにスキルLv上昇】',
    special_plus: 'パワースナイプ＋',
    special_plus_details:
      '敵単体に攻撃力2.75倍のダメージさらに55%の確率で、敵を即死させる【攻撃を2回受けるたびにスキルLv上昇】',
    masseffect: 'カメレオンと友達',
    masseffect_details: '【獣特効】【ダメージ軽減】が特徴のバランス型の効果',
    element: '風',
    peerage: '侯爵',
    old_class: 'スナイパー'
  },
  {
    name: 'サラ',
    no: '真-014',
    gauge: '4',
    class: 'ファイター',
    style: 'ラッシュ',
    hp: '756 - 9190',
    atk: '59 - 638',
    def: '60 - 615',
    spd: '51 - 503',
    voice: '引坂 理絵',
    gender: '女性',
    passive: 'ここどこだろ～？',
    passive_details: '毎ターン終了時に、自身の点穴を+5する',
    skill: '急に風が…！',
    skill_details:
      'ラッシュの味方単体の点穴を+10するさらに2ターンの間、味方単体の防御力を10%上昇させる',
    skill_plus: '急に風が…！＋',
    skill_plus_details:
      'ラッシュの味方単体の点穴を+15するさらに2ターンの間、味方単体の防御力を10%上昇させる',
    askill: '髪が傷んでるよ～',
    askill_details:
      '敵単体に攻撃力2.25倍のダメージさらに与えたダメージの20%を吸収する',
    askill_plus: '髪が傷んでるよ～＋',
    askill_plus_details:
      '敵単体に攻撃力2.5倍のダメージさらに与えたダメージの30%を吸収する',
    special: '牧歌の癒光',
    special_details:
      '味方全体のHPを25%回復させるさらに2ターンの間、ダメージを10%軽減する',
    special_plus: '牧歌の癒光＋',
    special_plus_details:
      '味方全体のHPを30%回復させるさらに2ターンの間、ダメージを15%軽減する',
    masseffect: '天然娘',
    masseffect_details:
      '【ＨＰ吸収】【全快時、ダメージ軽減】が特徴のバランス型の効果',
    element: '未調査',
    peerage: '不明',
    old_class: 'なし'
  },
  {
    name: 'エリゴス',
    no: '015',
    gauge: '2',
    class: 'ファイター',
    style: 'ラッシュ',
    hp: '477 - 5896',
    atk: '80 - 768',
    def: '59 - 622',
    spd: '60 - 627',
    voice: '田村 睦心',
    gender: '女性',
    passive: '闘争心',
    passive_details: '虫系のモンスターに2倍のダメージ',
    skill: 'トンファーガード',
    skill_details:
      '2ターンの間、自身が攻撃を受けたとき、反撃する状態になり、攻撃を1回無効化する',
    skill_plus: 'トンファーガード＋',
    skill_plus_details:
      '2ターンの間、自身が攻撃を受けたとき、反撃する状態になり、攻撃を2回無効化する',
    askill: '滅多打ち',
    askill_details:
      '敵単体に攻撃力0.7倍の4連続ダメージさらに2ターンの間、敵をめまい状態にする',
    askill_plus: '滅多打ち＋',
    askill_plus_details:
      '敵単体に攻撃力0.75倍の4連続ダメージさらに2ターンの間、敵をめまい状態にする',
    special: 'ラストガーディアン',
    special_details:
      '敵単体に攻撃力2倍のダメージさらに2ターンの間、味方全体の防御力を40%上昇させる',
    special_plus: 'ラストガーディアン＋',
    special_plus_details:
      '敵単体に攻撃力2.25倍のダメージさらに2ターンの間、味方全体の防御力を50%上昇させる',
    masseffect: 'メギド流古武術',
    masseffect_details: '【虫特効】【めまい攻撃】が特徴の妨害型の効果',
    element: '雷',
    peerage: '公爵',
    old_class: 'ファイター'
  },
  {
    name: 'サタナキア',
    no: '真-015',
    gauge: '3',
    class: 'スナイパー',
    style: 'ラッシュ',
    hp: '737 - 8818',
    atk: '58 - 624',
    def: '63 - 646',
    spd: '52 - 505',
    voice: '沢城 千春',
    gender: '男性',
    passive: '功利的策略',
    passive_details: '戦闘不能時、ラッシュの味方全体の点穴を+15する',
    skill: '禁断の晩餐',
    skill_details:
      'ラッシュの味方単体の点穴を+10するさらに2ターンの間、味方単体の攻撃力を5%上昇させる',
    skill_plus: '禁断の晩餐＋',
    skill_plus_details:
      'ラッシュの味方単体の点穴を+15するさらに2ターンの間、味方単体の攻撃力を5%上昇させる',
    askill: '禁忌の実験譚',
    askill_details:
      '敵単体に攻撃力1.75倍のダメージさらに、自身にスキルを追加する',
    askill_plus: '禁忌の実験譚＋',
    askill_plus_details:
      '敵単体に攻撃力2倍のダメージさらに、自身にスキルを追加する',
    special: 'トキシックガスト',
    special_details:
      'ラッシュの味方全体の点穴を+10するさらに2ターンの間、味方全体の攻撃力を5%上昇させる',
    special_plus: 'トキシックガスト＋',
    special_plus_details:
      'ラッシュの味方全体の点穴を+15するさらに2ターンの間、味方全体の攻撃力を5%上昇させる',
    masseffect: '自称参謀',
    masseffect_details:
      '【攻撃力上昇】【瀕死時、攻撃力上昇】が特徴の攻撃型の効果',
    element: '未調査',
    peerage: '不明',
    old_class: 'なし'
  },
  {
    name: 'ゼパル',
    no: '016',
    gauge: '2',
    class: 'ファイター',
    style: 'ラッシュ',
    hp: '504 - 6210',
    atk: '123 - 1209',
    def: '29 - 271',
    spd: '69 - 693',
    voice: '加隈 亜衣',
    gender: '女性',
    passive: '結婚願望',
    passive_details:
      '男性キャラクターがパーティに居る場合、攻撃力が20%上昇する',
    skill: '三枚下ろし',
    skill_details: '敵単体に攻撃力0.75倍の3連続ダメージ',
    skill_plus: '三枚下ろし＋',
    skill_plus_details: '敵単体に攻撃力0.85倍の3連続ダメージ',
    askill: '微塵切り',
    askill_details: '敵単体に攻撃力0.65倍の6連続ダメージさらにスキルを追加する',
    askill_plus: '微塵切り＋',
    askill_plus_details:
      '敵単体に攻撃力0.7倍の6連続ダメージさらにスキルを追加する',
    special: 'タービュランス',
    special_details:
      '敵単体に攻撃力0.9倍の4連続ダメージさらに2ターンの間、自身のスキルを強化する',
    special_plus: 'タービュランス＋',
    special_plus_details:
      '敵単体に攻撃力0.85倍の5連続ダメージさらに2ターンの間、自身のスキルを強化する',
    masseffect: 'ブレードダンス',
    masseffect_details:
      '【連続ダメージ上昇】【単体ダメージ上昇】が特徴の攻撃型の効果',
    element: '火',
    peerage: '侯爵',
    old_class: 'ファイター'
  },
  {
    name: 'ボティス',
    no: '017',
    gauge: '4',
    class: 'トルーパー',
    style: 'カウンター',
    hp: '720 - 8845',
    atk: '79 - 761',
    def: '73 - 717',
    spd: '31 - 286',
    voice: '東内 マリ子',
    gender: '女性',
    passive: '誇り高きメギド',
    passive_details: 'HPが100%のとき、受けるダメージを30%軽減する',
    skill: 'カバーリング',
    skill_details:
      '2ターンの間、すべての単体攻撃を受け持ち自身への攻撃を1回無効化する',
    skill_plus: 'カバーリング＋',
    skill_plus_details:
      '2ターンの間、すべての単体攻撃を受け持ち自身への攻撃を2回無効化する',
    askill: 'ペンデュラム',
    askill_details:
      '敵横一列に攻撃力1.5倍のダメージ【攻撃を2回受けるたびにスキルLv上昇】',
    askill_plus: 'ペンデュラム＋',
    askill_plus_details:
      '敵横一列に攻撃力1.75倍のダメージ【攻撃を2回受けるたびにスキルLv上昇】',
    special: '穢れなき守護者',
    special_details:
      '2ターンの間、味方全体への最大HPの25%以下のダメージを無効化する',
    special_plus: '穢れなき守護者＋',
    special_plus_details:
      '2ターンの間、味方全体への最大HPの30%以下のダメージを無効化する',
    masseffect: '漂うヴィンテージ',
    masseffect_details:
      '【全快時、ダメージ軽減】【ＨＰ上昇】が特徴の防御型の効果',
    element: '雷',
    peerage: '総裁',
    old_class: 'ディフェンダー'
  },
  {
    name: 'バティン',
    no: '018',
    gauge: '3',
    class: 'トルーパー',
    style: 'ラッシュ',
    hp: '744 - 9140',
    atk: '125 - 1222',
    def: '42 - 431',
    spd: '41 - 423',
    voice: '清水 香里',
    gender: '女性',
    passive: 'お注射の時間です',
    passive_details:
      '戦闘不能時、3ターンの間、ターン終了時に味方全体のHPが20%回復する効果を付与する',
    skill: 'アブソープション',
    skill_details:
      '敵単体に攻撃力1倍のダメージさらに与えたダメージの20%を吸収する',
    skill_plus: 'アブソープション＋',
    skill_plus_details:
      '敵単体に攻撃力1.25倍のダメージさらに与えたダメージの30%を吸収する',
    askill: 'ニューロトキシン',
    askill_details:
      '敵単体に攻撃力1.75倍のダメージさらに2ターンの間、敵を毒状態にする',
    askill_plus: 'ニューロトキシン＋',
    askill_plus_details:
      '敵単体に攻撃力2倍のダメージさらに2ターンの間、敵を毒状態にする',
    special: 'ポレンヒーリング',
    special_details: '味方横一列のHPを35%回復させる',
    special_plus: 'ポレンヒーリング＋',
    special_plus_details: '味方横一列のHPを40%回復させる',
    masseffect: '苦痛を伴う治療',
    masseffect_details: '【戦闘不能時、回復】【ＨＰ吸収】が特徴の支援型の効果',
    element: '火',
    peerage: '侯爵',
    old_class: 'ファイター'
  },
  {
    name: 'ブニ',
    no: '真-018',
    gauge: '3',
    class: 'ファイター',
    style: 'カウンター',
    hp: '715 - 8805',
    atk: '105 - 1080',
    def: '48 - 471',
    spd: '41 - 430',
    voice: '近藤 玲奈',
    gender: '女性',
    passive: '不屈の精神',
    passive_details: '15%の確率で攻撃を無効化する',
    skill: '女神の護り',
    skill_details:
      '2ターンの間、すべての単体攻撃を受け持ち最大HPの15%以下のダメージを無効化する',
    skill_plus: '女神の護り＋',
    skill_plus_details:
      '2ターンの間、すべての単体攻撃を受け持ち最大HPの20%以下のダメージを無効化する',
    askill: 'ブリッツライド',
    askill_details:
      '敵単体に攻撃力1.75倍のダメージさらに90%の確率で、覚醒ゲージを-1する',
    askill_plus: 'ブリッツライド＋',
    askill_plus_details:
      '敵単体に攻撃力2倍のダメージさらに90%の確率で、覚醒ゲージを-2する',
    special: '閃煌轟雷襲',
    special_details:
      '敵横一列に攻撃力1.75倍のダメージさらに敵が覚醒状態のとき、ダメージが2倍になる',
    special_plus: '閃煌轟雷襲＋',
    special_plus_details:
      '敵横一列に攻撃力2倍のダメージさらに敵が覚醒状態のとき、ダメージが2倍になる',
    masseffect: '仲間思い',
    masseffect_details: '【ダメージ軽減】【素早さ上昇】が特徴の支援型の効果',
    element: '未調査',
    peerage: '不明',
    old_class: 'なし'
  },
  {
    name: 'サレオス',
    no: '019',
    gauge: '4',
    class: 'ファイター',
    style: 'バースト',
    hp: '687 - 8474',
    atk: '96 - 945',
    def: '50 - 490',
    spd: '41 - 424',
    voice: '中國 卓郎',
    gender: '男性',
    passive: '後光アタック',
    passive_details: '攻撃を受けたとき、10%の確率で暗闇攻撃で反撃する',
    skill: '臨兵闘者皆陣列在前',
    skill_details: '味方全体の状態異常を治癒する',
    skill_plus: '臨兵闘者皆陣列在前＋',
    skill_plus_details: '味方全体の状態異常を治癒するさらにHPを10%回復させる',
    askill: '三途の川渡し',
    askill_details:
      '敵全体に攻撃力1.1倍のダメージ2ターンの間、滞水の地形効果で0.5倍の継続ダメージを与え、雷に弱くする',
    askill_plus: '三途の川渡し＋',
    askill_plus_details:
      '敵全体に攻撃力1.35倍のダメージ2ターンの間、滞水の地形効果で0.75倍の継続ダメージを与え、雷に弱くする',
    special: '腐食のブレス',
    special_details:
      '敵横一列に攻撃力2.25倍のダメージさらに70%の確率で、2ターンの間、敵を呪い状態にする',
    special_plus: '腐食のブレス＋',
    special_plus_details:
      '敵横一列に攻撃力2.5倍のダメージさらに80%の確率で、2ターンの間、敵を呪い状態にする',
    masseffect: '袈裟まで憎い',
    masseffect_details: '【全状態異常耐性】【暗闇反撃】が特徴の支援型の効果',
    element: '水',
    peerage: '侯爵',
    old_class: 'サポーター'
  },
  {
    name: 'プルソン',
    no: '020',
    gauge: '3',
    class: 'トルーパー',
    style: 'ラッシュ',
    hp: '703 - 8688',
    atk: '100 - 975',
    def: '39 - 412',
    spd: '48 - 475',
    voice: '後呂 直樹',
    gender: '男性',
    passive: '俺はまだやれる！',
    passive_details: '致死ダメージを受けたとき、20%の確率で踏みとどまる',
    skill: 'グランドドライバー',
    skill_details:
      '敵単体に攻撃力1倍のダメージさらに70%の確率で、2ターンの間、敵を暗闇状態にする',
    skill_plus: 'グランドドライバー＋',
    skill_plus_details:
      '敵単体に攻撃力1.25倍のダメージさらに80%の確率で、2ターンの間、敵を暗闇状態にする',
    askill: 'オーラテンペスト',
    askill_details:
      '敵横一列に攻撃力1.25倍のダメージさらに60%の確率で、覚醒ゲージを-2する',
    askill_plus: 'オーラテンペスト＋',
    askill_plus_details:
      '敵横一列に攻撃力1.5倍のダメージさらに70%の確率で、覚醒ゲージを-2する',
    special: '大地を沈めし鉄槌',
    special_details:
      '敵単体に攻撃力3倍のダメージさらに2ターンの間、敵をめまい状態にする',
    special_plus: '大地を沈めし鉄槌＋',
    special_plus_details:
      '敵単体に攻撃力3.25倍のダメージさらに2ターンの間、敵をめまい状態にする',
    masseffect: '速攻あるのみ！',
    masseffect_details:
      '【全快時、攻撃力上昇】【素早さ上昇】が特徴の攻撃型の効果',
    element: '地',
    peerage: '王',
    old_class: 'スナイパー'
  },
  {
    name: 'モラクス',
    no: '021',
    gauge: '4',
    class: 'ファイター',
    style: 'バースト',
    hp: '491 - 6025',
    atk: '125 - 1218',
    def: '39 - 414',
    spd: '58 - 614',
    voice: '山下 大輝',
    gender: '男性',
    passive: '逆ギレカウンター',
    passive_details: '攻撃を受けたとき、20%の確率で反撃する',
    skill: '巨岩割り',
    skill_details: '敵単体に攻撃力1倍の防御無視ダメージ',
    skill_plus: '巨岩割り＋',
    skill_plus_details: '敵単体に攻撃力1.25倍の防御無視ダメージ',
    askill: '必勝・大炎風',
    askill_details:
      '敵単体に攻撃力2.25倍のダメージさらに2ターンの間、自身のスキルを強化する',
    askill_plus: '必勝・大炎風＋',
    askill_plus_details:
      '敵単体に攻撃力2.5倍のダメージさらに2ターンの間、自身のスキルを強化する',
    special: 'ミノスの大戦斧',
    special_details:
      '敵単体に攻撃力4倍のダメージ2ターンの間、地割れの地形効果で0.5倍の継続ダメージを与え、防御力を低下させる',
    special_plus: 'ミノスの大戦斧＋',
    special_plus_details:
      '敵単体に攻撃力4.25倍のダメージ2ターンの間、地割れの地形効果で0.75倍の継続ダメージを与え、防御力を低下させる',
    masseffect: 'オーバーテンション',
    masseffect_details: '【防御貫通】【カウンター】が特徴の攻撃型の効果',
    element: '火',
    peerage: '伯爵',
    old_class: 'ファイター'
  },
  {
    name: 'イポス',
    no: '022',
    gauge: '3',
    class: 'ファイター',
    style: 'ラッシュ',
    hp: '756 - 9320',
    atk: '101 - 984',
    def: '31 - 286',
    spd: '63 - 646',
    voice: '上田 燿司',
    gender: '男性',
    passive: '歴戦の兵',
    passive_details: 'クエストでの獲得経験値が50%上昇する',
    skill: '追撃態勢',
    skill_details:
      '2ターンの間、味方のアタックに対して自身が追撃する状態になる',
    skill_plus: '追撃態勢＋',
    skill_plus_details:
      '2ターンの間、味方のアタックに対して自身が追撃する状態になり、攻撃力が20%上昇する',
    askill: 'トライピアシング',
    askill_details:
      '敵単体に攻撃力0.95倍の3連続ダメージさらに2ターンの間、自身の攻撃力を40%上昇させる',
    askill_plus: 'トライピアシング＋',
    askill_plus_details:
      '敵単体に攻撃力1倍の3連続ダメージさらに2ターンの間、自身の攻撃力を50%上昇させる',
    special: 'ヴォジャノーイの渦',
    special_details:
      '敵横一列に攻撃力1.75倍のダメージ2ターンの間、滞水の地形効果で0.5倍の継続ダメージを与え、雷に弱くする',
    special_plus: 'ヴォジャノーイの渦＋',
    special_plus_details:
      '敵横一列に攻撃力2倍のダメージ2ターンの間、滞水の地形効果で0.75倍の継続ダメージを与え、雷に弱くする',
    masseffect: 'アサルトスタンス',
    masseffect_details:
      '【アタック追加】【単体ダメージ上昇】が特徴の攻撃型の効果',
    element: '水',
    peerage: '君主',
    old_class: 'スレイヤー'
  },
  {
    name: 'カスピエル',
    no: '真-022',
    gauge: '4',
    class: 'トルーパー',
    style: 'バースト',
    hp: '587 - 7399',
    atk: '104 - 1053',
    def: '50 - 490',
    spd: '49 - 478',
    voice: '朝霧 友陽',
    gender: '男性',
    passive: 'ムーンコレクター',
    passive_details:
      '自身の覚醒ゲージが最大の50%以上のとき、敵を状態異常にした際の持続ターンが+1される',
    skill: 'ナイトストーカー',
    skill_details:
      '敵横一列に攻撃力0.65倍のダメージさらに90%の確率で、2ターンの間、敵を束縛状態にする',
    skill_plus: 'ナイトストーカー＋',
    skill_plus_details:
      '敵横一列に攻撃力0.75倍のダメージさらに2ターンの間、敵を束縛状態にする',
    askill: 'シークレットコール',
    askill_details:
      '敵単体を2ターンの間、混乱状態にするただし3ターンの間、対象の攻撃力が5%上昇する',
    askill_plus: 'シークレットコール＋',
    askill_plus_details:
      '敵単体を混乱状態にし、さらに防御力を10%低下させる(2ターン)ただし対象の攻撃力が5%上昇する(3ターン)',
    special: '鮮血の一夜',
    special_details:
      '敵横一列に攻撃力1倍の3連続ダメージさらに、残りHP割合の高い敵ほど威力が上昇する',
    special_plus: '鮮血の一夜＋',
    special_plus_details:
      '敵横一列に攻撃力1.1倍の3連続ダメージさらに、残りHP割合の高い敵ほど威力が上昇する',
    masseffect: 'よそ見したらあかんで',
    masseffect_details: '【単体ダメージ上昇】【混乱攻撃】が特徴の攻撃型の効果',
    element: '未調査',
    peerage: '不明',
    old_class: 'なし'
  },
  {
    name: 'アイム',
    no: '023',
    gauge: '6',
    class: 'スナイパー',
    style: 'バースト',
    hp: '456 - 5630',
    atk: '118 - 1171',
    def: '41 - 426',
    spd: '62 - 644',
    voice: '関根 明良',
    gender: '女性',
    passive: '焔の担い手',
    passive_details: '戦闘中、徐々に攻撃力が上昇する（最大値25%）',
    skill: '強火クッキング',
    skill_details:
      '敵単体に攻撃力1倍の火ダメージ【使用するごとにスキルLvが上昇し、Lv4で防御力低下付与】',
    skill_plus: '強火クッキング＋',
    skill_plus_details:
      '敵単体に攻撃力1.25倍の火ダメージ【使用するごとにスキルLvが上昇し、Lv4で防御力低下付与】',
    askill: '太陽の種火',
    askill_details:
      '味方単体のHPを35%回復させるさらに2ターンの間、アタックを強化する',
    askill_plus: '太陽の種火＋',
    askill_plus_details:
      '味方単体のHPを40%回復させるさらに2ターンの間、アタックを強化する',
    special: '炎天の煌めき',
    special_details:
      '敵全体に攻撃力2倍の火ダメージ2ターンの間、炎上の地形効果で1倍の継続ダメージを与える',
    special_plus: '炎天の煌めき＋',
    special_plus_details:
      '敵全体に攻撃力2.25倍の火ダメージ2ターンの間、炎上の地形効果で1.25倍の継続ダメージを与える',
    masseffect: '理想のお嫁さん',
    masseffect_details:
      '【戦闘開始時、覚醒ゲージ増加】【強化ターン延長】が特徴の支援型の効果',
    element: '火',
    peerage: '公爵',
    old_class: 'スナイパー'
  },
  {
    name: 'ナベリウス',
    no: '024',
    gauge: '4',
    class: 'トルーパー',
    style: 'ラッシュ',
    hp: '610 - 7544',
    atk: '96 - 948',
    def: '52 - 501',
    spd: '52 - 503',
    voice: '青木 瑠璃子',
    gender: '女性',
    passive: '調教師',
    passive_details: 'オーブの使用可能までのターンを-1する',
    skill: 'ムーンサルト',
    skill_details: '敵横一列に攻撃力0.75倍の2連続ダメージ',
    skill_plus: 'ムーンサルト＋',
    skill_plus_details: '敵横一列に攻撃力0.9倍の2連続ダメージ',
    askill: 'ブレイクスナップ',
    askill_details:
      '敵単体に攻撃力2.25倍のダメージさらに積まれているフォトンを1つ破壊する',
    askill_plus: 'ブレイクスナップ＋',
    askill_plus_details:
      '敵単体に攻撃力2.5倍のダメージさらに積まれているフォトンを1つ破壊する',
    special: '番犬の咆哮',
    special_details:
      '2ターンの間、味方全体のアタックを強化し、素早さを20%上昇させる',
    special_plus: '番犬の咆哮＋',
    special_plus_details:
      '2ターンの間、味方全体のアタックを強化し、素早さを30%上昇させる',
    masseffect: '博愛主義',
    masseffect_details: '【自然回復】【スキル追加】が特徴の支援型の効果',
    element: '火',
    peerage: '侯爵',
    old_class: 'スレイヤー'
  },
  {
    name: 'グラシャラボラス',
    no: '025',
    gauge: '6',
    class: 'トルーパー',
    style: 'バースト',
    hp: '590 - 7290',
    atk: '118 - 1170',
    def: '40 - 416',
    spd: '51 - 494',
    voice: '中國 卓郎',
    gender: '男性',
    passive: '器物破損',
    passive_details: '物体系のモンスターに2倍のダメージ',
    skill: 'ぶん回し',
    skill_details:
      '敵横一列に攻撃力1.25倍のダメージただし反動で、自身が最大HPの15%ダメージを受ける',
    skill_plus: 'ぶん回し＋',
    skill_plus_details:
      '敵横一列に攻撃力1.5倍のダメージただし反動で、自身が最大HPの5%ダメージを受ける',
    askill: 'グレートぶん回し',
    askill_details: '敵単体に攻撃力3.25倍の防御無視ダメージ',
    askill_plus: 'グレートぶん回し＋',
    askill_plus_details: '敵単体に攻撃力3.5倍の防御無視ダメージ',
    special: 'ピリオドの向こうへ',
    special_details:
      '敵全体に攻撃力2.75倍のダメージただし反動で、自身が戦闘不能になる',
    special_plus: 'ピリオドの向こうへ＋',
    special_plus_details:
      '敵全体に攻撃力3倍のダメージただし反動で、自身が戦闘不能になる',
    masseffect: 'レジェンド・俺',
    masseffect_details: '【物体特効】【防御貫通】が特徴の攻撃型の効果',
    element: '水',
    peerage: '総裁',
    old_class: 'パニッシャー'
  },
  {
    name: 'ブネ',
    no: '026',
    gauge: '3',
    class: 'ファイター',
    style: 'ラッシュ',
    hp: '734 - 9049',
    atk: '96 - 949',
    def: '51 - 497',
    spd: '39 - 414',
    voice: '津田 健次郎',
    gender: '男性',
    passive: '豪放磊落',
    passive_details: '15%の確率で攻撃を無効化する',
    skill: '斬撃『一字ノ太刀』',
    skill_details: '敵横一列に攻撃力1倍のダメージ',
    skill_plus: '斬撃『一字ノ太刀』＋',
    skill_plus_details: '敵横一列に攻撃力1.25倍のダメージ',
    askill: '斬撃『兜割ノ太刀』',
    askill_details:
      '敵単体に攻撃力1.75倍のダメージさらに80%の確率で、覚醒ゲージを-2する',
    askill_plus: '斬撃『兜割ノ太刀』＋',
    askill_plus_details:
      '敵単体に攻撃力2倍のダメージさらに90%の確率で、覚醒ゲージを-2する',
    special: '龍王天懐撃',
    special_details:
      '敵横一列に攻撃力2.25倍のダメージさらに敵に溜まっている覚醒ゲージ1につき、ダメージ15%上昇',
    special_plus: '龍王天懐撃＋',
    special_plus_details:
      '敵横一列に攻撃力1.5倍の2連続ダメージさらに敵に溜まっている覚醒ゲージ1につき、ダメージ15%上昇',
    masseffect: '戦上手',
    masseffect_details:
      '【ダメージ無効】【攻撃力上昇】が特徴のバランス型の効果',
    element: '地',
    peerage: '公爵',
    old_class: 'ファイター'
  },
  {
    name: 'ロノウェ',
    no: '027',
    gauge: '4',
    class: 'ファイター',
    style: 'カウンター',
    hp: '882 - 10836',
    atk: '63 - 645',
    def: '72 - 714',
    spd: '31 - 285',
    voice: '堀江 一眞',
    gender: '男性',
    passive: '正義のヒーロー',
    passive_details: 'HPが50%以下のとき、30%の確率で攻撃を無効化する',
    skill: 'ウェポンガード',
    skill_details:
      '2ターンの間、すべての単体攻撃を受け持ちスキルフォトンからのダメージを50%軽減する',
    skill_plus: 'ウェポンガード＋',
    skill_plus_details:
      '2ターンの間、すべての単体攻撃を受け持ちスキルフォトンからのダメージを60%軽減する',
    askill: 'ブランディッシュ',
    askill_details:
      '敵単体に攻撃力1.4倍の2連続ダメージさらに積まれているフォトンを1つ破壊する',
    askill_plus: 'ブランディッシュ＋',
    askill_plus_details:
      '敵単体に攻撃力1.5倍の2連続ダメージさらに積まれているフォトンを1つ破壊する',
    special: 'エクトプラズム',
    special_details: '2ターンの間、味方単体を無敵状態にし、HPを15%回復させる',
    special_plus: 'エクトプラズム＋',
    special_plus_details:
      '2ターンの間、味方単体を無敵状態にし、HPを20%回復させる',
    masseffect: '鉄壁の守り',
    masseffect_details:
      '【１ターン目ダメージ軽減】【ダメージ無効】が特徴の防御型の効果',
    element: '水',
    peerage: '侯爵',
    old_class: 'ディフェンダー'
  },
  {
    name: 'ベリト',
    no: '028',
    gauge: '3',
    class: 'ファイター',
    style: 'カウンター',
    hp: '456 - 5631',
    atk: '126 - 1226',
    def: '41 - 428',
    spd: '59 - 623',
    voice: '宮下 栄治',
    gender: '男性',
    passive: '恥かかすなよ！',
    passive_details: 'HPが50%以下のとき、攻撃力が30%上昇する',
    skill: 'グリムスティンガー',
    skill_details:
      '敵単体に攻撃力1倍のダメージさらに70%の確率で、2ターンの間、敵をめまい状態にする',
    skill_plus: 'グリムスティンガー＋',
    skill_plus_details:
      '敵単体に攻撃力1.25倍のダメージさらに80%の確率で、2ターンの間、敵をめまい状態にする',
    askill: 'エンペラーグラブ',
    askill_details: '敵単体に積まれているフォトンを1つ奪う',
    askill_plus: 'エンペラーグラブ＋',
    askill_plus_details:
      '敵単体に積まれているフォトンを1つ奪うさらに2ターンの間、自身の攻撃力を20%上昇させる',
    special: 'ワールドイズマイン',
    special_details:
      '敵単体に攻撃力4.5倍のダメージただし反動で、自身が最大HPの50%ダメージを受ける',
    special_plus: 'ワールドイズマイン＋',
    special_plus_details:
      '敵単体に攻撃力4.75倍のダメージただし反動で、自身が最大HPの50%ダメージを受ける',
    masseffect: '俺様のモノ',
    masseffect_details:
      '【めまい攻撃】【瀕死時、攻撃力上昇】が特徴の妨害型の効果',
    element: '雷',
    peerage: '公爵',
    old_class: 'ファイター'
  },
  {
    name: 'アスタロト',
    no: '029',
    gauge: '3',
    class: 'ファイター',
    style: 'ラッシュ',
    hp: '598 - 7365',
    atk: '104 - 1075',
    def: '51 - 496',
    spd: '48 - 476',
    voice: '中村 ちせ',
    gender: '女性',
    passive: 'ピンチはチャンス',
    passive_details: 'HPが50%以下のとき、すべての覚醒ゲージ増加量が+1される',
    skill: '元気にしてあげる♪',
    skill_details:
      '2ターンの間、味方単体の攻撃にLv×5の固定追加ダメージを付与する',
    skill_plus: '元気にしてあげる♪＋',
    skill_plus_details:
      '2ターンの間、味方単体の攻撃にLv×10の固定追加ダメージを付与する',
    askill: 'ノコ斬り',
    askill_details:
      '敵単体に攻撃力0.95倍の3連続ダメージさらに敵のHPが50%以下のとき、ダメージが2倍になる',
    askill_plus: 'ノコ斬り＋',
    askill_plus_details:
      '敵単体に攻撃力1倍の3連続ダメージさらに敵のHPが50%以下のとき、ダメージが2倍になる',
    special: '極北のブレス',
    special_details:
      '敵横一列に攻撃力1.15倍の2連続ダメージさらに50%の確率で、2ターンの間、敵を凍結状態にする',
    special_plus: '極北のブレス＋',
    special_plus_details:
      '敵横一列に攻撃力1.25倍の2連続ダメージさらに60%の確率で、2ターンの間、敵を凍結状態にする',
    masseffect: 'イイヨイイヨ～',
    masseffect_details: '【凍結攻撃】【アタック追加】が特徴の攻撃型の効果',
    element: '氷',
    peerage: '公爵',
    old_class: 'ファイター'
  },
  {
    name: 'フォルネウス',
    no: '030',
    gauge: '4',
    class: 'トルーパー',
    style: 'カウンター',
    hp: '692 - 8521',
    atk: '61 - 635',
    def: '50 - 487',
    spd: '58 - 616',
    voice: '深町 寿成',
    gender: '男性',
    passive: '自信過剰',
    passive_details: '受けるダメージを15%軽減する',
    skill: '偽りの加護',
    skill_details:
      '2ターンの間、味方単体へのスキルフォトンからのダメージを50%軽減する',
    skill_plus: '偽りの加護＋',
    skill_plus_details:
      '2ターンの間、味方単体へのスキルフォトンからのダメージを60%軽減する',
    askill: '一時の虚脱',
    askill_details:
      '敵単体に攻撃力2.25倍のダメージさらに2ターンの間、敵が積めるフォトンの量を-1する',
    askill_plus: '一時の虚脱＋',
    askill_plus_details:
      '敵単体に攻撃力2.5倍のダメージさらに2ターンの間、敵が積めるフォトンの量を-1する',
    special: '紫霧のブレス',
    special_details:
      '味方横一列のHPを35%回復させるさらに2ターンの間、スキルを強化する',
    special_plus: '紫霧のブレス＋',
    special_plus_details:
      '味方横一列のHPを40%回復させるさらに2ターンの間、スキルを強化する',
    masseffect: '重度のナルシスト',
    masseffect_details: '【ダメージ軽減】【スキル追加】が特徴の支援型の効果',
    element: '氷',
    peerage: '侯爵',
    old_class: 'サポーター'
  },
  {
    name: 'フォラス',
    no: '031',
    gauge: '5',
    class: 'スナイパー',
    style: 'バースト',
    hp: '466 - 5724',
    atk: '77 - 746',
    def: '50 - 491',
    spd: '69 - 691',
    voice: '矢野 正明',
    gender: '男性',
    passive: '好奇心旺盛',
    passive_details: 'オーブの使用可能までのターンを-1する',
    skill: 'デトネーション',
    skill_details: '2ターンの間、味方単体のアタックを強化する',
    skill_plus: 'デトネーション＋',
    skill_plus_details:
      '2ターンの間、味方単体のアタックを強化し、攻撃力を20%上昇させる',
    askill: 'ワイドマジック',
    askill_details: '2ターンの間、味方単体の効果範囲を全体化する',
    askill_plus: 'ワイドマジック＋',
    askill_plus_details:
      '2ターンの間、味方単体の効果範囲を全体化し、攻撃力を20%上昇させる',
    special: 'クラッシュハンマー',
    special_details: '敵単体に攻撃力5倍の防御無視ダメージ',
    special_plus: 'クラッシュハンマー＋',
    special_plus_details: '敵単体に攻撃力5.25倍の防御無視ダメージ',
    masseffect: 'インドア派',
    masseffect_details: '【めまい耐性】【強化ターン延長】が特徴の支援型の効果',
    element: '地',
    peerage: '総裁',
    old_class: 'パニッシャー'
  },
  {
    name: 'アスモデウス',
    no: '032',
    gauge: '6',
    class: 'ファイター',
    style: 'バースト',
    hp: '685 - 8686',
    atk: '135 - 1402',
    def: '39 - 423',
    spd: '31 - 283',
    voice: '生田 善子',
    gender: '女性',
    passive: '混沌を孕む者',
    passive_details:
      '自身のHPが33.3%以下のとき、通常攻撃、スキル、覚醒スキル、奥義の効果範囲が敵全体になる',
    skill: '蒼炎の剣',
    skill_details:
      '敵単体に攻撃力1倍の火ダメージさらに60%の確率で、敵を煉獄の炎状態にする（永続）',
    skill_plus: '蒼炎の剣＋',
    skill_plus_details:
      '敵単体に攻撃力1.25倍の火ダメージさらに70%の確率で、敵を煉獄の炎状態にする（永続）',
    askill: '絶対者の息吹',
    askill_details:
      '敵単体に攻撃力3倍のダメージさらに2ターンの間、防御力を25%低下させ、自身の防御力を25%上昇させる',
    askill_plus: '絶対者の息吹＋',
    askill_plus_details:
      '敵単体に攻撃力3.25倍のダメージさらに2ターンの間、防御力を25%低下させ、自身の防御力を25%上昇させる',
    special: '破滅を齎す黒炎',
    special_details:
      '敵単体に攻撃力6倍の火ダメージさらに2ターンの間、攻撃力、防御力、素早さをそれぞれ25%低下させる',
    special_plus: '破滅を齎す黒炎＋',
    special_plus_details:
      '敵単体に攻撃力6.25倍の火ダメージさらに2ターンの間、攻撃力、防御力、素早さをそれぞれ30%低下させる',
    masseffect: '暴虐の圧制者',
    masseffect_details:
      '【戦闘開始時、覚醒増加】【戦闘不能時、蘇生】が特徴の支援型の効果',
    element: '火',
    peerage: '王',
    old_class: 'ファイター'
  },
  {
    name: 'ガープ',
    no: '033',
    gauge: '3',
    class: 'ファイター',
    style: 'カウンター',
    hp: '821 - 10133',
    atk: '83 - 854',
    def: '62 - 642',
    spd: '30 - 279',
    voice: '津田 拓也',
    gender: '男性',
    passive: 'リボルトストライク',
    passive_details: '攻撃を受けたとき、10%の確率でめまい攻撃で反撃する',
    skill: 'ザ・ウォール',
    skill_details:
      '2ターンの間、すべての単体攻撃を受け持ち自身へのダメージを10%軽減する',
    skill_plus: 'ザ・ウォール＋',
    skill_plus_details:
      '2ターンの間、すべての単体攻撃を受け持ち自身へのダメージを15%軽減する',
    askill: 'ジールバッシュ',
    askill_details:
      '敵単体に自身のHPが少ないほど威力の高い火ダメージ（最大で攻撃力の3.5倍のダメージ）',
    askill_plus: 'ジールバッシュ＋',
    askill_plus_details:
      '敵単体に自身のHPが少ないほど威力の高い火ダメージ（最大で攻撃力の4倍のダメージ）',
    special: 'ヴァルカンの聖域',
    special_details:
      '3ターンの間、味方単体へのアタックフォトンからのダメージを80%軽減する',
    special_plus: 'ヴァルカンの聖域＋',
    special_plus_details:
      '3ターンの間、味方単体へのアタックフォトンからのダメージを85%軽減する',
    masseffect: '不動の背中',
    masseffect_details: '【ダメージ軽減】【ＨＰ上昇】が特徴の防御型の効果',
    element: '火',
    peerage: '総裁',
    old_class: 'ディフェンダー'
  },
  {
    name: 'フルフル',
    no: '034',
    gauge: '6',
    class: 'スナイパー',
    style: 'バースト',
    hp: '703 - 8688',
    atk: '119 - 1178',
    def: '50 - 487',
    spd: '31 - 285',
    voice: '本多 真梨子',
    gender: '女性',
    passive: 'ものぐさ',
    passive_details: '睡眠状態のとき、毎ターン終了時、覚醒ゲージが+2される',
    skill: 'うたた寝',
    skill_details:
      '3ターンの間、自身が睡眠状態になり、ターン終了時にHPが15%回復する',
    skill_plus: 'うたた寝＋',
    skill_plus_details:
      '3ターンの間、自身が睡眠状態になり、ターン終了時にHPが20%回復する',
    askill: '召雷針',
    askill_details:
      '敵横一列に攻撃力1.25倍の2連続雷ダメージ2ターンの間、帯電の地形効果で0.5倍の継続ダメージを与え、確率で感電させる',
    askill_plus: '召雷針＋',
    askill_plus_details:
      '敵横一列に攻撃力1.4倍の2連続雷ダメージ2ターンの間、帯電の地形効果で0.75倍の継続ダメージを与え、確率で感電させる',
    special: 'カオティックレイ',
    special_details:
      '敵全体に攻撃力2.5倍の雷ダメージ【睡眠状態でのみ使用可能】',
    special_plus: 'カオティックレイ＋',
    special_plus_details:
      '敵全体に攻撃力2.75倍の雷ダメージ【睡眠状態でのみ使用可能】',
    masseffect: 'のんびり屋',
    masseffect_details: '【感電攻撃】【徐々に攻撃力上昇】が特徴の妨害型の効果',
    element: '雷',
    peerage: '伯爵',
    old_class: 'スナイパー'
  },
  {
    name: 'マルコシアス',
    no: '035',
    gauge: '4',
    class: 'スナイパー',
    style: 'カウンター',
    hp: '627 - 7701',
    atk: '115 - 1152',
    def: '42 - 431',
    spd: '48 - 473',
    voice: '上田 麗奈',
    gender: '女性',
    passive: '悪魔狩り',
    passive_details: '悪魔系のモンスターに2倍のダメージ',
    skill: 'デュアルショット',
    skill_details:
      '敵単体に攻撃力0.75倍の2連続ダメージさらに70%の確率で、2ターンの間、敵が積めるフォトンの量を-1する',
    skill_plus: 'デュアルショット＋',
    skill_plus_details:
      '敵単体に攻撃力0.9倍の2連続ダメージさらに80%の確率で、2ターンの間、敵が積めるフォトンの量を-1する',
    askill: 'ラピッドファイア',
    askill_details:
      '敵横一列に攻撃力1.5倍のダメージさらに70%の確率で、2ターンの間、敵をめまい状態にする',
    askill_plus: 'ラピッドファイア＋',
    askill_plus_details:
      '敵横一列に攻撃力1.75倍のダメージさらに80%の確率で、2ターンの間、敵をめまい状態にする',
    special: 'ライトジャベリン',
    special_details:
      '敵単体に攻撃力4倍のダメージさらに積まれているフォトンを1つ破壊する',
    special_plus: 'ライトジャベリン＋',
    special_plus_details:
      '敵単体に攻撃力4.25倍のダメージさらに積まれているフォトンを1つ破壊する',
    masseffect: '後方支援',
    masseffect_details: '【悪魔特効】【単体ダメージ上昇】が特徴の攻撃型の効果',
    element: '風',
    peerage: '侯爵',
    old_class: 'スナイパー'
  },
  {
    name: 'ストラス',
    no: '036',
    gauge: '5',
    class: 'トルーパー',
    style: 'バースト',
    hp: '602 - 7407',
    atk: '117 - 1167',
    def: '39 - 411',
    spd: '50 - 488',
    voice: '三澤 紗千香',
    gender: '女性',
    passive: '花鳥風月',
    passive_details: '行動開始時、20%の確率でスキルが追加される',
    skill: '天地万象',
    skill_details:
      '敵単体に攻撃力1倍のダメージさらに25%の確率で、スキルを追加する',
    skill_plus: '天地万象＋',
    skill_plus_details:
      '敵単体に攻撃力1.25倍のダメージさらに30%の確率で、スキルを追加する',
    askill: '百花繚乱',
    askill_details:
      '敵単体に攻撃力1.65倍の2連続ダメージさらに2ターンの間、自身のスキルを強化する',
    askill_plus: '百花繚乱＋',
    askill_plus_details:
      '敵単体に攻撃力1.75倍の2連続ダメージさらに2ターンの間、自身のスキルを強化する',
    special: 'ハリケーンダンス',
    special_details:
      '敵全体に攻撃力1.75倍のダメージ2ターンの間、突風の地形効果で0.5倍の継続ダメージを与え、火に弱くする',
    special_plus: 'ハリケーンダンス＋',
    special_plus_details:
      '敵全体に攻撃力2倍のダメージ2ターンの間、突風の地形効果で0.75倍の継続ダメージを与え、火に弱くする',
    masseffect: '普通がイチバン',
    masseffect_details: '【スキル追加】【攻撃力上昇】が特徴の攻撃型の効果',
    element: '風',
    peerage: '君主',
    old_class: 'スレイヤー'
  },
  {
    name: 'メフィスト',
    no: '真-036',
    gauge: '5',
    class: 'スナイパー',
    style: 'バースト',
    hp: '471 - 5899',
    atk: '123 - 1194',
    def: '41 - 417',
    spd: '63 - 648',
    voice: '高橋 広樹',
    gender: '男性',
    passive: '出たとこ勝負！',
    passive_details: 'HPが50%以下のとき、30%の確率で攻撃を無効化する',
    skill: 'ロール・ロール',
    skill_details:
      '出目で効果決定1:効果なし/2,3:単体覚醒+1/4,5:列覚醒+1/6:全体覚醒+1',
    skill_plus: 'ロール・ロール＋',
    skill_plus_details:
      '出目で効果決定 1:効果なし/2,3:単体覚醒+1,防御10%上昇/4,5:列覚醒+1,防御15%上昇/6:全体覚醒+1,防御20%上昇(防御上昇2ターン)',
    askill: 'イービル・ダイス',
    askill_details:
      '出目で効果決定1:敵単体に攻撃力4.5倍のダメージ/2～6:敵単体に攻撃力0.7倍の出目数連続ダメージ',
    askill_plus: 'イービル・ダイス＋',
    askill_plus_details:
      '出目で効果決定1:敵単体に攻撃力4.8倍のダメージ/2～6:敵単体に攻撃力0.75倍の出目数連続ダメージ',
    special: 'キリングヒット',
    special_details:
      '敵全体に攻撃力1.5倍の防御無視ダメージ1%の確率で対象を即死させる【ロール・ロール3回使用でLv上昇/最大Lv3】',
    special_plus: 'キリングヒット＋',
    special_plus_details:
      '敵全体に攻撃力1.75倍の防御無視ダメージ1%の確率で対象を即死させる【ロール・ロール3回使用でLv上昇/最大Lv3】',
    masseffect: '勝負は時の運',
    masseffect_details: '【スキル追加】【チャージ追加】が特徴の支援型の効果',
    element: '未調査',
    peerage: '不明',
    old_class: 'なし'
  },
  {
    name: 'フェニックス',
    no: '037',
    gauge: '6',
    class: 'ファイター',
    style: 'バースト',
    hp: '587 - 7259',
    atk: '99 - 967',
    def: '48 - 472',
    spd: '50 - 490',
    voice: '後呂 直樹',
    gender: '男性',
    passive: '断罪',
    passive_details: '攻撃時、敵の防御力を無視する',
    skill: '紅焔剣',
    skill_details:
      '敵単体に攻撃力1倍の火ダメージ2ターンの間、炎上の地形効果で1倍の継続ダメージを与える',
    skill_plus: '紅焔剣＋',
    skill_plus_details:
      '敵単体に攻撃力1.25倍の火ダメージ2ターンの間、炎上の地形効果で1.25倍の継続ダメージを与える',
    askill: '処刑剣',
    askill_details:
      '敵単体に攻撃力3.25倍のダメージさらに25%の確率で、敵を即死させる',
    askill_plus: '処刑剣＋',
    askill_plus_details:
      '敵単体に攻撃力3.5倍のダメージさらに30%の確率で、敵を即死させる',
    special: '不死鳥の羽ばたき',
    special_details:
      '敵全体に攻撃力2倍の火ダメージさらに戦闘不能の味方を、最大HPの25%で蘇生させる',
    special_plus: '不死鳥の羽ばたき＋',
    special_plus_details:
      '敵全体に攻撃力2.25倍の火ダメージさらに戦闘不能の味方を、最大HPの35%で蘇生させる',
    masseffect: '処刑人稼業',
    masseffect_details: '【戦闘不能時、蘇生】【凍結無効】が特徴の支援型の効果',
    element: '火',
    peerage: '侯爵',
    old_class: 'ファイター'
  },
  {
    name: 'ハルファス',
    no: '038',
    gauge: '5',
    class: 'ファイター',
    style: 'バースト',
    hp: '491 - 6022',
    atk: '141 - 1400',
    def: '62 - 643',
    spd: '29 - 269',
    voice: '久保 ユリカ',
    gender: '女性',
    passive: '形見の大斧',
    passive_details: 'HPが100%のとき、毎ターン終了時、覚醒ゲージが+2される',
    skill: '地裂斬',
    skill_details:
      '敵全体に攻撃力0.8倍のダメージ【使用するごとにスキルLvが上昇し、Lv4で地割れ付与】',
    skill_plus: '地裂斬＋',
    skill_plus_details:
      '敵全体に攻撃力1.05倍のダメージ【使用するごとにスキルLvが上昇し、Lv4で地割れ付与】',
    askill: 'ギガントアクス',
    askill_details:
      '敵単体に攻撃力2.5倍の防御無視ダメージさらに自身への攻撃を1回無効化する',
    askill_plus: 'ギガントアクス＋',
    askill_plus_details:
      '敵単体に攻撃力2.75倍の防御無視ダメージさらに自身への攻撃を1回無効化する',
    special: 'アニマルボンバー',
    special_details:
      '敵横一列に攻撃力1.65倍の2連続ダメージさらに味方前列にスキルを追加する',
    special_plus: 'アニマルボンバー＋',
    special_plus_details:
      '敵横一列に攻撃力1.75倍の2連続ダメージさらに味方前列にスキルを追加する',
    masseffect: '優柔不断',
    masseffect_details: '【防御貫通】【スキル追加】が特徴の攻撃型の効果',
    element: '地',
    peerage: '伯爵',
    old_class: 'スレイヤー'
  },
  {
    name: 'アガリアレプト',
    no: '真-038',
    gauge: '6',
    class: 'ファイター',
    style: 'バースト',
    hp: '628 - 7702',
    atk: '100 - 968',
    def: '29 - 276',
    spd: '70 - 676',
    voice: '花守ゆみり',
    gender: '女性',
    passive: '軽快なステップ',
    passive_details: '戦闘中、徐々に素早さが上昇する（最大値50%）',
    skill: 'メテオレイド',
    skill_details:
      '敵単体に攻撃力0.7倍の3連続ダメージ【3ターン目にLv2：70%で覚醒-1付与/6ターン目にLv3：70%でフォトン破壊付与】最大Lv.3',
    skill_plus: 'メテオレイド＋',
    skill_plus_details:
      '敵単体に攻撃力0.8倍の3連続ダメージ【3ターン目にLv2：80%で覚醒-1付与/6ターン目にLv3：80%でフォトン破壊付与】最大Lv.3',
    askill: 'ディストード',
    askill_details:
      '敵横一列に攻撃力1.25倍の2連続ダメージ【3ターン目にLv2：感電70%(2ターン)/6ターン目にLv3：めまい70%(2ターン)】最大Lv.3',
    askill_plus: 'ディストード＋',
    askill_plus_details:
      '敵横一列に攻撃力1.4倍の2連続ダメージ【3ターン目にLv2：感電80%(2ターン)/6ターン目にLv3：めまい80%(2ターン)】最大Lv.3',
    special: 'ツインアブソーブ',
    special_details:
      '敵全体に攻撃力1.75倍のダメージ2ターンの間、攻撃力と防御力を15%低下させ自身の攻撃力と防御力を50%上昇する',
    special_plus: 'ツインアブソーブ＋',
    special_plus_details:
      '敵全体に攻撃力2倍のダメージ2ターンの間、攻撃力と防御力を20%低下させ自身の攻撃力と防御力を50%上昇する',
    masseffect: '緻密な計画',
    masseffect_details:
      '【徐々に攻撃力上昇】【徐々に素早さ上昇】が特徴のバランス型の効果',
    element: '未調査',
    peerage: '不明',
    old_class: 'なし'
  },
  {
    name: 'マルファス',
    no: '039',
    gauge: '4',
    class: 'トルーパー',
    style: 'カウンター',
    hp: '608 - 7461',
    atk: '101 - 981',
    def: '52 - 504',
    spd: '52 - 499',
    voice: '大坪 孝充',
    gender: '男性',
    passive: '天駆ける者',
    passive_details: '自身の攻撃力が15%上昇する',
    skill: 'キャプチャー',
    skill_details:
      '敵単体に攻撃力1倍のダメージさらに35%の確率で、積まれているフォトンを1つ奪う',
    skill_plus: 'キャプチャー＋',
    skill_plus_details:
      '敵単体に攻撃力1.25倍のダメージさらに45%の確率で、積まれているフォトンを1つ奪う',
    askill: 'レナスリング',
    askill_details:
      '敵横一列に攻撃力1.5倍のダメージさらに80%の確率で、2ターンの間、防御力を50%低下させる',
    askill_plus: 'レナスリング＋',
    askill_plus_details:
      '敵横一列に攻撃力1.75倍のダメージさらに80%の確率で、2ターンの間、防御力を60%低下させる',
    special: 'コロッサスレイ',
    special_details:
      '敵横一列に攻撃力1.4倍の2連続ダメージさらに味方全体への攻撃を1回無効化する',
    special_plus: 'コロッサスレイ＋',
    special_plus_details:
      '敵横一列に攻撃力1.5倍の2連続ダメージさらに味方全体への攻撃を1回無効化する',
    masseffect: '悠久の翼',
    masseffect_details:
      '【戦闘不能時、蘇生】【ダメージ無効】が特徴の防御型の効果',
    element: '風',
    peerage: '総裁',
    old_class: 'ファイター'
  },
  {
    name: 'ラウム',
    no: '040',
    gauge: '5',
    class: 'トルーパー',
    style: 'バースト',
    hp: '817 - 10094',
    atk: '116 - 1155',
    def: '40 - 418',
    spd: '30 - 277',
    voice: '守川 武尊',
    gender: '男性',
    passive: '拾ったぞコラァッ！',
    passive_details: '行動開始時、20%の確率でチャージが追加される',
    skill: '夜露死苦！',
    skill_details: '味方前列の覚醒ゲージを+1する',
    skill_plus: '夜露死苦！＋',
    skill_plus_details:
      '味方前列の覚醒ゲージを+1し、2ターンの間、防御力を20%上昇させる',
    askill: '仏恥義琉！！',
    askill_details:
      '敵単体に攻撃力1.25倍の3連続ダメージさらに2ターンの間、敵を混乱状態にする',
    askill_plus: '仏恥義琉！！＋',
    askill_plus_details:
      '敵単体に攻撃力1.35倍の3連続ダメージさらに2ターンの間、敵を混乱状態にする',
    special: 'デンジャラスバイト',
    special_details:
      '敵単体に攻撃力2.75倍の2連続ダメージさらに2ターンの間、味方前列のチャージを強化する',
    special_plus: 'デンジャラスバイト＋',
    special_plus_details:
      '敵単体に攻撃力2.1倍の3連続ダメージさらに2ターンの間、味方前列のチャージを強化する',
    masseffect: '狂犬メギド',
    masseffect_details:
      '【戦闘開始時、覚醒ゲージ増加】【チャージ追加】が特徴の支援型の効果',
    element: '雷',
    peerage: '伯爵',
    old_class: 'スナイパー'
  },
  {
    name: 'フォカロル',
    no: '041',
    gauge: '5',
    class: 'トルーパー',
    style: 'バースト',
    hp: '616 - 7601',
    atk: '102 - 993',
    def: '52 - 504',
    spd: '50 - 487',
    voice: '深町 寿成',
    gender: '男性',
    passive: '鍛練の成果',
    passive_details: '戦闘中、徐々に防御力が上昇する（最大値50%）',
    skill: 'ギアバースト',
    skill_details:
      '2ターンの間、自身の攻撃力を20%上昇【使用するごとにスキルLvが上昇し、アタック強化/追加ダメージ/列化が付与】',
    skill_plus: 'ギアバースト＋',
    skill_plus_details:
      '2ターンの間、自身の攻撃力を30%上昇【使用するごとにスキルLvが上昇し、アタック強化/追加ダメージ/列化が付与】',
    askill: 'フェイタルブレード',
    askill_details:
      '敵単体に攻撃力0.95倍の5連続ダメージさらにアタックを追加する',
    askill_plus: 'フェイタルブレード＋',
    askill_plus_details:
      '敵単体に攻撃力1倍の5連続ダメージさらにアタックを追加する',
    special: 'ゲイルウィング',
    special_details:
      '敵横一列に攻撃力2.75倍のダメージさらに2ターンの間、味方全体の素早さを100%上昇させる',
    special_plus: 'ゲイルウィング＋',
    special_plus_details:
      '敵横一列に攻撃力3倍のダメージさらに2ターンの間、味方全体の素早さを100%上昇させる',
    masseffect: 'オーバードライブ',
    masseffect_details:
      '【徐々に攻撃力上昇】【徐々に防御力上昇】が特徴のバランス型の効果',
    element: '風',
    peerage: '公爵',
    old_class: 'ファイター'
  },
  {
    name: 'アマイモン',
    no: '真-041',
    gauge: '4',
    class: 'ファイター',
    style: 'カウンター',
    hp: '495 - 5997',
    atk: '135 - 1354',
    def: '40 - 429',
    spd: '50 - 503',
    voice: '平川 大輔',
    gender: '男性',
    passive: '死を紡ぐ策王',
    passive_details: '攻撃を受けたとき、10%の確率で呪い攻撃で反撃する',
    skill: '妄執ノ太刀',
    skill_details:
      '敵単体に攻撃力1倍のダメージさらに2ターンの間、敵を束縛状態にする',
    skill_plus: '妄執ノ太刀＋',
    skill_plus_details:
      '敵単体に攻撃力1.25倍のダメージさらに2ターンの間、敵を束縛状態にする',
    askill: '轟竜刃',
    askill_details:
      '敵単体に攻撃力2.25倍のダメージさらに2ターンの間、自身と攻撃対象の攻撃力を50%上昇させる',
    askill_plus: '轟竜刃＋',
    askill_plus_details:
      '敵単体に攻撃力2.5倍のダメージさらに2ターンの間、自身と攻撃対象の攻撃力を60%上昇させる',
    special: 'ノワールアヴェルス',
    special_details:
      '敵単体に攻撃力3.25倍のダメージさらに弱体、状態異常が付与されている敵に対して、効果1種類につき倍率が0.5上昇する',
    special_plus: 'ノワールアヴェルス＋',
    special_plus_details:
      '敵単体に攻撃力3.5倍のダメージさらに弱体、状態異常が付与されている敵に対して、効果1種類につき倍率が0.5上昇する',
    masseffect: '王の資質',
    masseffect_details: '【攻撃力上昇】【束縛反撃】が特徴の攻撃型の効果',
    element: '未調査',
    peerage: '不明',
    old_class: 'なし'
  },
  {
    name: 'ウェパル',
    no: '042',
    gauge: '2',
    class: 'トルーパー',
    style: 'ラッシュ',
    hp: '458 - 5646',
    atk: '120 - 1188',
    def: '31 - 287',
    spd: '70 - 699',
    voice: '名塚 佳織',
    gender: '女性',
    passive: '面倒くさい…',
    passive_details: '最初のターン、攻撃力が25%上昇する',
    skill: 'ウェイブライダー',
    skill_details:
      '敵単体に攻撃力1倍のダメージさらに50%の確率で、アタックを追加する',
    skill_plus: 'ウェイブライダー＋',
    skill_plus_details:
      '敵単体に攻撃力1.25倍のダメージさらに60%の確率で、アタックを追加する',
    askill: '水龍戟',
    askill_details:
      '敵単体に攻撃力1.25倍のダメージさらに2ターンの間、自身のアタックを強化する',
    askill_plus: '水龍戟＋',
    askill_plus_details:
      '敵単体に攻撃力1.5倍のダメージさらに2ターンの間、自身のアタックを強化する',
    special: 'セイレーンの涙',
    special_details:
      '敵単体に攻撃力1倍の3連続ダメージさらに与えたダメージの20%を吸収する',
    special_plus: 'セイレーンの涙＋',
    special_plus_details:
      '敵単体に攻撃力1.1倍の3連続ダメージさらに与えたダメージの30%を吸収する',
    masseffect: '静かなる技巧',
    masseffect_details:
      '【１ターン目攻撃力上昇】【素早さ上昇】が特徴の攻撃型の効果',
    element: '水',
    peerage: '公爵',
    old_class: 'スナイパー'
  },
  {
    name: 'サブナック',
    no: '043',
    gauge: '4',
    class: 'ファイター',
    style: 'カウンター',
    hp: '698 - 8573',
    atk: '78 - 751',
    def: '68 - 682',
    spd: '29 - 274',
    voice: '田村 睦心',
    gender: '男性',
    passive: '小さな英雄',
    passive_details: '敵から狙われやすくなり、防御力が20%上昇する',
    skill: 'エリアディフェンス',
    skill_details: '2ターンの間、味方全体へのダメージを15%軽減する',
    skill_plus: 'エリアディフェンス＋',
    skill_plus_details: '2ターンの間、味方全体へのダメージを20%軽減する',
    askill: 'イージスブロー',
    askill_details:
      '敵単体に攻撃力1.25倍の2連続ダメージさらに敵をめまい状態にする【攻撃を2回受けるたびにスキルLv上昇】',
    askill_plus: 'イージスブロー＋',
    askill_plus_details:
      '敵単体に攻撃力1.4倍の2連続ダメージさらに敵をめまい状態にする【攻撃を2回受けるたびにスキルLv上昇】',
    special: 'フォートレス',
    special_details:
      '味方全体への攻撃を2回無効化するさらに2ターンの間、攻撃力を10%上昇させる',
    special_plus: 'フォートレス＋',
    special_plus_details:
      '味方全体への攻撃を2回無効化するさらに2ターンの間、攻撃力を20%上昇させる',
    masseffect: '歯止めの城塞',
    masseffect_details: '【ダメージ軽減】【めまい攻撃】が特徴の防御型の効果',
    element: '地',
    peerage: '侯爵',
    old_class: 'ディフェンダー'
  },
  {
    name: 'シャックス',
    no: '044',
    gauge: '3',
    class: 'ファイター',
    style: 'カウンター',
    hp: '614 - 7581',
    atk: '97 - 954',
    def: '49 - 478',
    spd: '52 - 501',
    voice: '上坂 すみれ',
    gender: '女性',
    passive: '暴走少女',
    passive_details: '自身の素早さが30%上昇する',
    skill: 'びりびり斬り',
    skill_details:
      '敵単体に攻撃力1倍の雷ダメージさらに70%の確率で、2ターンの間、敵を感電状態にする',
    skill_plus: 'びりびり斬り＋',
    skill_plus_details:
      '敵単体に攻撃力1.25倍の雷ダメージさらに80%の確率で、2ターンの間、敵を感電状態にする',
    askill: 'もっとびりびり斬り',
    askill_details:
      '敵単体に攻撃力1.15倍の2連続雷ダメージ2ターンの間、帯電の地形効果で0.5倍の継続ダメージを与え、確率で感電させる',
    askill_plus: 'もっとびりびり斬り＋',
    askill_plus_details:
      '敵単体に攻撃力1.25倍の2連続雷ダメージ2ターンの間、帯電の地形効果で0.75倍の継続ダメージを与え、確率で感電させる',
    special: '電電ぴよ祭り！',
    special_details:
      '敵単体に攻撃力3倍の雷ダメージ【攻撃を2回受けるたびにスキルLv上昇】',
    special_plus: '電電ぴよ祭り！＋',
    special_plus_details:
      '敵単体に攻撃力3.25倍の雷ダメージ【攻撃を2回受けるたびにスキルLv上昇】',
    masseffect: 'バリバリ行こー！',
    masseffect_details: '【感電攻撃】【素早さ上昇】が特徴の妨害型の効果',
    element: '雷',
    peerage: '侯爵',
    old_class: 'スナイパー'
  },
  {
    name: 'ヴィネ',
    no: '045',
    gauge: '4',
    class: 'スナイパー',
    style: 'バースト',
    hp: '601 - 7394',
    atk: '81 - 841',
    def: '40 - 416',
    spd: '72 - 708',
    voice: '加隈 亜衣',
    gender: '女性',
    passive: '慈愛の心',
    passive_details: 'HPが50%以下の味方への回復量が50%上昇する',
    skill: '聖女の祈り',
    skill_details: '味方横一列のHPを15%回復させる',
    skill_plus: '聖女の祈り＋',
    skill_plus_details: '味方横一列のHPを20%回復させる',
    askill: '気高き願い',
    askill_details:
      '味方全体の覚醒ゲージを+1するさらに2ターンの間、攻撃力を20%上昇させる',
    askill_plus: '気高き願い＋',
    askill_plus_details:
      '味方全体の覚醒ゲージを+1するさらに2ターンの間、攻撃力を30%上昇させる',
    special: '蒼海のアガペー',
    special_details: '味方全体のHPを35%回復させる',
    special_plus: '蒼海のアガペー＋',
    special_plus_details: '味方全体のHPを40%回復させる',
    masseffect: '傾国の美女',
    masseffect_details: '【覚醒コスト減少】【自然回復】が特徴の支援型の効果',
    element: '水',
    peerage: '王',
    old_class: 'サポーター'
  },
  {
    name: 'ビフロンス',
    no: '046',
    gauge: '4',
    class: 'トルーパー',
    style: 'ラッシュ',
    hp: '616 - 7604',
    atk: '121 - 1189',
    def: '51 - 493',
    spd: '41 - 424',
    voice: '三澤 紗千香',
    gender: '女性',
    passive: '魂狩り',
    passive_details: '精霊系のモンスターに2倍のダメージ',
    skill: 'ソウルテイカー',
    skill_details:
      '敵横一列に攻撃力0.7倍の2連続ダメージさらに与えたダメージの20%を吸収する',
    skill_plus: 'ソウルテイカー＋',
    skill_plus_details:
      '敵横一列に攻撃力0.85倍の2連続ダメージさらに与えたダメージの30%を吸収する',
    askill: 'デスサイズ',
    askill_details:
      '敵横一列に攻撃力1.5倍のダメージさらに20%の確率で、敵を即死させる',
    askill_plus: 'デスサイズ＋',
    askill_plus_details:
      '敵横一列に攻撃力1.75倍のダメージさらに25%の確率で、敵を即死させる',
    special: 'ダークコフィン',
    special_details:
      '敵単体に攻撃力1.4倍の4連続ダメージさらに2ターンの間、敵を呪い状態にする',
    special_plus: 'ダークコフィン＋',
    special_plus_details:
      '敵単体に攻撃力1.45倍の4連続ダメージさらに2ターンの間、敵を呪い状態にする',
    masseffect: '死を看取る者',
    masseffect_details: '【呪い攻撃】【即死攻撃】が特徴の妨害型の効果',
    element: '水',
    peerage: '伯爵',
    old_class: 'スレイヤー'
  },
  {
    name: 'ウヴァル',
    no: '047',
    gauge: '2',
    class: 'ファイター',
    style: 'ラッシュ',
    hp: '614 - 7585',
    atk: '141 - 1404',
    def: '29 - 275',
    spd: '52 - 501',
    voice: '榊原 ゆい',
    gender: '女性',
    passive: 'キリングマシーン',
    passive_details: '敵の数が少ないほど、攻撃力が上昇する（最大値20%）',
    skill: 'クレセントスライス',
    skill_details:
      '敵単体に攻撃力1倍のダメージさらに敵に掛かっている強化効果を解除する',
    skill_plus: 'クレセントスライス＋',
    skill_plus_details:
      '敵単体に攻撃力1.25倍のダメージさらに敵に掛かっている強化効果を解除する',
    askill: 'ラウンドスレイヤー',
    askill_details:
      '敵単体に攻撃力0.65倍の6連続ダメージさらに2ターンの間、敵が積めるフォトンの量を-1する',
    askill_plus: 'ラウンドスレイヤー＋',
    askill_plus_details:
      '敵単体に攻撃力0.7倍の6連続ダメージさらに2ターンの間、敵が積めるフォトンの量を-1する',
    special: 'ランページビート',
    special_details:
      '敵単体に攻撃力2倍のダメージさらに2ターンの間、自身の攻撃にLv×5の固定追加ダメージを付与する',
    special_plus: 'ランページビート＋',
    special_plus_details:
      '敵単体に攻撃力2.25倍のダメージさらに2ターンの間、自身の攻撃にLv×10の固定追加ダメージを付与する',
    masseffect: '冷血',
    masseffect_details:
      '【敵が少ないほど、攻撃力上昇】【連続ダメージ上昇】が特徴の攻撃型の効果',
    element: '地',
    peerage: '公爵',
    old_class: 'スレイヤー'
  },
  {
    name: 'ハーゲンティ',
    no: '048',
    gauge: '3',
    class: 'トルーパー',
    style: 'カウンター',
    hp: '600 - 7382',
    atk: '99 - 968',
    def: '40 - 418',
    spd: '60 - 628',
    voice: '上田 麗奈',
    gender: '女性',
    passive: '守銭奴',
    passive_details: 'クエストでの獲得ゴルドが50%上昇する',
    skill: 'それちょうだいよぅ',
    skill_details:
      '敵単体に攻撃力1倍のダメージさらに35%の確率で、積まれているフォトンを1つ奪う',
    skill_plus: 'それちょうだいよぅ＋',
    skill_plus_details:
      '敵単体に攻撃力1.25倍のダメージさらに45%の確率で、積まれているフォトンを1つ奪う',
    askill: 'ハニワの奇跡',
    askill_details:
      '敵全体に攻撃力1.1倍のダメージさらに40%の確率で、フォトンを1つ破壊【スキル使用時に100G消費する】',
    askill_plus: 'ハニワの奇跡＋',
    askill_plus_details:
      '敵全体に攻撃力1.35倍のダメージさらに50%の確率で、フォトンを1つ破壊【スキル使用時に100G消費する】',
    special: 'ハートオブゴールド',
    special_details: '2ターンの間、敵全体を暗闇状態にし、攻撃力を10%低下させる',
    special_plus: 'ハートオブゴールド＋',
    special_plus_details:
      '2ターンの間、敵全体を暗闇状態にし、攻撃力を20%低下させる',
    masseffect: 'ご飯ちょうだいよぅ',
    masseffect_details:
      '【覚醒コスト減少】【ＨＰ吸収攻撃】が特徴の支援型の効果',
    element: '雷',
    peerage: '総裁',
    old_class: 'ファイター'
  },
  {
    name: 'クロケル',
    no: '049',
    gauge: '5',
    class: 'スナイパー',
    style: 'バースト',
    hp: '462 - 5688',
    atk: '122 - 1197',
    def: '31 - 287',
    spd: '71 - 703',
    voice: '飯田 里穂',
    gender: '女性',
    passive: 'リズムに乗るのです！',
    passive_details: '戦闘中、徐々に素早さが上昇する（最大値50%）',
    skill: '応援です！',
    skill_details: '味方後列の覚醒ゲージを+1する',
    skill_plus: '応援です！＋',
    skill_plus_details: '味方後列の覚醒ゲージを+1し、攻撃力を10%上昇させる',
    askill: 'ぶっ飛ぶのです！',
    askill_details:
      '敵単体に攻撃力2.75倍のダメージ3ターンの間、滞水の地形効果で0.5倍の継続ダメージを与え、雷に弱くする',
    askill_plus: 'ぶっ飛ぶのです！＋',
    askill_plus_details:
      '敵単体に攻撃力3倍のダメージ3ターンの間、滞水の地形効果で0.75倍の継続ダメージを与え、雷に弱くする',
    special: 'ロイヤルスワール',
    special_details:
      '敵単体に攻撃力5倍のダメージさらに2ターンの間、ターン終了時に味方全体のHPが15%回復する',
    special_plus: 'ロイヤルスワール＋',
    special_plus_details:
      '敵単体に攻撃力5.25倍のダメージさらに2ターンの間、ターン終了時に味方全体のHPが20%回復する',
    masseffect: 'Ｌｅｔ’ｓダンス！',
    masseffect_details:
      '【徐々に攻撃力上昇】【徐々に素早さ上昇】が特徴のバランス型の効果',
    element: '水',
    peerage: '公爵',
    old_class: 'パニッシャー'
  },
  {
    name: 'フルカス',
    no: '050',
    gauge: '4',
    class: 'ファイター',
    style: 'バースト',
    hp: '621 - 7649',
    atk: '121 - 1190',
    def: '38 - 406',
    spd: '48 - 477',
    voice: '清水 香里',
    gender: '女性',
    passive: '撲殺気分',
    passive_details: '戦闘中、徐々に攻撃力が上昇する（最大値25%）',
    skill: 'ミートスパイク',
    skill_details:
      '敵単体に攻撃力0.45倍の防御無視2連続ダメージ【使用するごとにスキルLv上昇】',
    skill_plus: 'ミートスパイク＋',
    skill_plus_details:
      '敵単体に攻撃力0.6倍の防御無視2連続ダメージ【使用するごとにスキルLv上昇】',
    askill: 'マッドスラローム',
    askill_details:
      '敵単体に攻撃力2.75倍のダメージ2ターンの間、自身の攻撃力を50%上昇させ反動で両隣が最大HPの15%ダメージ',
    askill_plus: 'マッドスラローム＋',
    askill_plus_details:
      '敵単体に攻撃力3倍のダメージ2ターンの間、自身の攻撃力を60%上昇させ反動で両隣が最大HPの15%ダメージ',
    special: 'メルティアサルト',
    special_details:
      '単体に攻撃力4倍のダメージさらに2ターンの間、防御力を0にする',
    special_plus: 'メルティアサルト＋',
    special_plus_details:
      '単体に攻撃力1.75倍の3連続ダメージさらに2ターンの間、防御力を0にする',
    masseffect: 'アイアンメイデン',
    masseffect_details: '【防御貫通】【徐々に攻撃力上昇】が特徴の攻撃型の効果',
    element: '氷',
    peerage: '公爵',
    old_class: 'ファイター'
  },
  {
    name: 'シャミハザ',
    no: '真-050',
    gauge: '4',
    class: 'ファイター',
    style: 'カウンター',
    hp: '474 - 5786',
    atk: '126 - 1221',
    def: '39 - 427',
    spd: '60 - 619',
    voice: '堀江 瞬/財満 健太',
    gender: '男性',
    passive: 'テラインストール',
    passive_details: 'HPが70%以下のとき、攻撃力が25%上昇する',
    skill: 'バイラルスパーク',
    skill_details: '敵単体に攻撃力1.25倍の雷ダメージ',
    skill_plus: 'バイラルスパーク＋',
    skill_plus_details: '敵単体に攻撃力1.5倍の雷ダメージ',
    askill: 'ブリッツスマッシュ',
    askill_details:
      '敵単体に攻撃力2.25倍の雷ダメージさらに2ターンの間、自身の攻撃力を40%上昇させる',
    askill_plus: 'ブリッツスマッシュ＋',
    askill_plus_details:
      '敵単体に攻撃力2.5倍の雷ダメージさらに2ターンの間、自身の攻撃力を50%上昇させる',
    special: 'ハイボルテーション',
    special_details:
      '敵単体に攻撃力3倍の雷ダメージさらに、自身にスキルを追加する',
    special_plus: 'ハイボルテーション＋',
    special_plus_details:
      '敵単体に攻撃力3.25倍の雷ダメージさらに、自身にスキルを追加する',
    masseffect: '二心同体',
    masseffect_details:
      '【カウンター】【単体ダメージ上昇】が特徴の攻撃型の効果',
    element: '雷',
    peerage: '不明',
    old_class: 'なし'
  },
  {
    name: 'バラム',
    no: '051',
    gauge: '5',
    class: 'ファイター',
    style: 'カウンター',
    hp: '484 - 5846',
    atk: '80 - 838',
    def: '49 - 594',
    spd: '72 - 676',
    voice: '津田 拓也',
    gender: '男性',
    passive: '観察者',
    passive_details: '奥義使用時、50%の確率で覚醒ゲージの消費が0になる',
    skill: 'バインドダガー',
    skill_details:
      '敵単体に攻撃力0.75倍の2連続ダメージ対象が束縛の場合70%の確率で、2ターンの間感電、80%の確率で防御力を25%低下させる',
    skill_plus: 'バインドダガー＋',
    skill_plus_details:
      '敵単体に攻撃力0.75倍の2連続ダメージ対象が束縛の場合80%の確率で、2ターンの間感電、80%の確率で防御力を30%低下させる',
    askill: '非戦の調停',
    askill_details:
      '敵全体を束縛状態にする対象が束縛の場合70%の確率で、2ターンの間めまい、80%の確率で攻撃力を25%低下させる',
    askill_plus: '非戦の調停＋',
    askill_plus_details:
      '敵全体を束縛状態にする対象が束縛の場合80%の確率で、2ターンの間めまい、80%の確率で攻撃力を30%低下させる',
    special: 'ディザスターボム',
    special_details:
      '敵横一列に攻撃力2.75倍のダメージさらに80%の確率で、2ターンの間、敵の素早さを50%低下させる',
    special_plus: 'ディザスターボム＋',
    special_plus_details:
      '敵横一列に攻撃力3倍のダメージさらに80%の確率で、2ターンの間、敵の素早さを60%低下させる',
    masseffect: '恐るべき調停者',
    masseffect_details:
      '【フォトン破壊反撃】【状態異常ターン延長】が特徴の妨害型の効果',
    element: '風',
    peerage: '王',
    old_class: 'パニッシャー'
  },
  {
    name: 'プルフラス',
    no: '真-051',
    gauge: '4',
    class: 'ファイター',
    style: 'ラッシュ',
    hp: '581 - 7528',
    atk: '124 - 1209',
    def: '40 - 414',
    spd: '48 - 498',
    voice: '春名 風花',
    gender: '女性',
    passive: '心眼',
    passive_details: '自身への暗闇が無効になる',
    skill: 'ラピエル・フルーリ',
    skill_details: '自身の点穴を+10し、敵単体に攻撃力1倍のダメージ',
    skill_plus: 'ラピエル・フルーリ＋',
    skill_plus_details: '自身の点穴を+15し、敵単体に攻撃力1倍のダメージ',
    askill: 'クゥ・デグラース',
    askill_details: '敵単体に攻撃力2.25倍のダメージさらに自身の点穴を+15する',
    askill_plus: 'クゥ・デグラース＋',
    askill_plus_details:
      '敵単体に攻撃力2.25倍のダメージさらに自身の点穴を+20する',
    special: 'ヴォロンテ・ド・フ',
    special_details:
      '自身の点穴を+35し、さらに2ターンの間、ターン終了時にHPが10%回復する',
    special_plus: 'ヴォロンテ・ド・フ＋',
    special_plus_details:
      '自身の点穴を+40し、さらに2ターンの間、ターン終了時にHPが10%回復する',
    masseffect: 'ルヴァンシュ',
    masseffect_details:
      '【ＨＰ上昇】【単体ダメージ上昇】が特徴のバランス型の効果',
    element: '未調査',
    peerage: '不明',
    old_class: 'なし'
  },
  {
    name: 'アロケル',
    no: '052',
    gauge: '5',
    class: 'ファイター',
    style: 'カウンター',
    hp: '578 - 7110',
    atk: '122 - 1199',
    def: '52 - 500',
    spd: '41 - 427',
    voice: '山本 和臣',
    gender: '男性',
    passive: '天才的センス',
    passive_details: 'HPが20%上昇する',
    skill: 'あとは任せた！',
    skill_details:
      '2ターンの間、自身が睡眠状態になり、自身以外の攻撃力を25%上昇させる',
    skill_plus: 'あとは任せた！＋',
    skill_plus_details:
      '2ターンの間、自身が睡眠状態になり、自身以外の攻撃力を35%上昇させる',
    askill: '少し本気出す！',
    askill_details:
      '敵単体に攻撃力2.75倍のダメージさらに敵が覚醒状態のとき、ダメージが2倍になる',
    askill_plus: '少し本気出す！＋',
    askill_plus_details:
      '敵単体に攻撃力3倍のダメージさらに敵が覚醒状態のとき、ダメージが2倍になる',
    special: '復讐剣バルムンク',
    special_details:
      '敵単体に自身のHPが少ないほど威力の高いダメージ（最大で攻撃力の11倍のダメージ）',
    special_plus: '復讐剣バルムンク＋',
    special_plus_details:
      '敵単体に自身のHPが少ないほど威力の高いダメージ（最大で攻撃力の11.5倍のダメージ）',
    masseffect: 'まったりムード',
    masseffect_details: '【呪い無効】【スキル追加】が特徴の支援型の効果',
    element: '氷',
    peerage: '公爵',
    old_class: 'スナイパー'
  },
  {
    name: 'ジズ',
    no: '真-052',
    gauge: '5',
    class: 'スナイパー',
    style: 'バースト',
    hp: '503 - 5955',
    atk: '82 - 840',
    def: '51 - 494',
    spd: '70 - 687',
    voice: '内田 彩',
    gender: '女性',
    passive: '自己防衛本能',
    passive_details: '戦闘中、徐々に防御力が上昇する（最大値50%）',
    skill: '青天のとっぷう',
    skill_details:
      '敵単体に攻撃力0.7倍のダメージ1ターンの間、突風の地形効果で0.5倍の継続ダメージを与え、火に弱くする',
    skill_plus: '青天のとっぷう＋',
    skill_plus_details:
      '敵単体に攻撃力0.8倍のダメージ1ターンの間、突風の地形効果で0.75倍の継続ダメージを与え、火に弱くする',
    askill: '大いなる風のしらべ',
    askill_details: '味方全体のHPを20%回復させる',
    askill_plus: '大いなる風のしらべ＋',
    askill_plus_details: '味方全体のHPを25%回復させる',
    special: '終焉のモンスーン',
    special_details:
      '敵横一列に攻撃力2.75倍のダメージ2ターンの間、突風の地形効果で0.5倍の継続ダメージを与え、火に弱くする',
    special_plus: '終焉のモンスーン＋',
    special_plus_details:
      '敵横一列に攻撃力3倍のダメージ2ターンの間、突風の地形効果で0.75倍の継続ダメージを与え、火に弱くする',
    masseffect: '風の愛娘',
    masseffect_details: '【覚醒減少耐性】【自然回復】が特徴の防御型の効果',
    element: '風',
    peerage: '不明',
    old_class: 'なし'
  },
  {
    name: 'カイム',
    no: '053',
    gauge: '4',
    class: 'スナイパー',
    style: 'カウンター',
    hp: '732 - 9032',
    atk: '58 - 615',
    def: '48 - 472',
    spd: '61 - 636',
    voice: '堀江 一眞',
    gender: '男性',
    passive: '傲岸不遜',
    passive_details: '受けるダメージを15%軽減する',
    skill: 'マインドクラッシュ',
    skill_details:
      '敵単体に攻撃力1倍のダメージさらに70%の確率で、覚醒ゲージを-1する',
    skill_plus: 'マインドクラッシュ＋',
    skill_plus_details:
      '敵単体に攻撃力1.25倍のダメージさらに80%の確率で、覚醒ゲージを-1する',
    askill: 'オブリビオン',
    askill_details:
      '敵単体に攻撃力2.25倍のダメージさらに積まれているフォトンを1つ破壊する',
    askill_plus: 'オブリビオン＋',
    askill_plus_details:
      '敵単体に攻撃力2.5倍のダメージさらに積まれているフォトンを1つ破壊する',
    special: 'トリックスター',
    special_details:
      '70%の確率で、2ターンの間、敵全体に積めるフォトンの量を-2する',
    special_plus: 'トリックスター＋',
    special_plus_details:
      '80%の確率で、2ターンの間、敵全体に積めるフォトンの量を-2する',
    masseffect: '目立ちたがり',
    masseffect_details:
      '【フォトン奪取命中上昇】【強化効果上昇】が特徴の支援型の効果',
    element: '火',
    peerage: '総裁',
    old_class: 'パニッシャー'
  },
  {
    name: 'ムルムル',
    no: '054',
    gauge: '4',
    class: 'スナイパー',
    style: 'ラッシュ',
    hp: '478 - 5901',
    atk: '102 - 990',
    def: '52 - 501',
    spd: '60 - 626',
    voice: '小松 未可子',
    gender: '女性',
    passive: '鳥落とし',
    passive_details: '飛行系のモンスターに2倍のダメージ',
    skill: 'ツイストシュート',
    skill_details:
      '敵単体に攻撃力0.75倍の2連続ダメージさらに50%の確率で、アタックを追加する',
    skill_plus: 'ツイストシュート＋',
    skill_plus_details:
      '敵単体に攻撃力0.9倍の2連続ダメージさらに60%の確率で、アタックを追加する',
    askill: '魅惑の舞',
    askill_details:
      '2ターンの間、味方全体の攻撃力を20%上昇させ、積めるフォトンの量を+1する',
    askill_plus: '魅惑の舞＋',
    askill_plus_details:
      '2ターンの間、味方全体の攻撃力を30%上昇させ、積めるフォトンの量を+1する',
    special: '豊穣の角笛',
    special_details:
      '味方全体にアタックを追加し、ターン終了時にHPが10%回復する',
    special_plus: '豊穣の角笛＋',
    special_plus_details:
      '味方全体にアタックを追加し、ターン終了時にHPが15%回復する',
    masseffect: '勝利の凱歌',
    masseffect_details: '【飛行特効】【アタック追加】が特徴の攻撃型の効果',
    element: '風',
    peerage: '公爵',
    old_class: 'パニッシャー'
  },
  {
    name: 'オロバス',
    no: '055',
    gauge: '2',
    class: 'スナイパー',
    style: 'ラッシュ',
    hp: '728 - 8990',
    atk: '123 - 1207',
    def: '49 - 483',
    spd: '31 - 284',
    voice: '田中 進太郎',
    gender: '男性',
    passive: '禁呪',
    passive_details: '戦闘不能時、敵全体に攻撃力の1.5倍のダメージ',
    skill: '原初の魔法『零』',
    skill_details:
      '敵単体に攻撃力1倍のダメージさらに2ターンの間、敵を束縛状態にする',
    skill_plus: '原初の魔法『零』＋',
    skill_plus_details:
      '敵単体に攻撃力1.25倍のダメージさらに2ターンの間、敵を束縛状態にする',
    askill: '原初の魔法『結』',
    askill_details:
      '敵横一列に攻撃力1倍のダメージさらに70%の確率で、2ターンの間、敵を呪い状態にする',
    askill_plus: '原初の魔法『結』＋',
    askill_plus_details:
      '敵横一列に攻撃力1.25倍のダメージさらに80%の確率で、2ターンの間、敵を呪い状態にする',
    special: 'グランドリープ',
    special_details: '敵単体に攻撃力2倍のダメージさらに覚醒ゲージを-2する',
    special_plus: 'グランドリープ＋',
    special_plus_details:
      '敵単体に攻撃力2.25倍のダメージさらに覚醒ゲージを-2する',
    masseffect: '隠遁者の悪戯',
    masseffect_details:
      '【戦闘不能時、ダメージ】【呪い攻撃】が特徴の妨害型の効果',
    element: '氷',
    peerage: '君主',
    old_class: 'スナイパー'
  },
  {
    name: 'アリトン',
    no: '真-055',
    gauge: '4',
    class: 'スナイパー',
    style: 'カウンター',
    hp: '498 - 6020',
    atk: '83 - 841',
    def: '59 - 628',
    spd: '63 - 648',
    voice: '間島 淳司',
    gender: '男性',
    passive: '執事の矜持',
    passive_details: 'HPが33.3%以下の味方への単体攻撃を受け持つ',
    skill: 'キラースナイプ',
    skill_details:
      '敵単体に攻撃力1倍のダメージさらに70%の確率で、積まれているフォトンを1つ破壊する',
    skill_plus: 'キラースナイプ＋',
    skill_plus_details:
      '敵単体に攻撃力1.25倍のダメージさらに80%の確率で、積まれているフォトンを1つ破壊する',
    askill: '非情なる粛清',
    askill_details:
      '敵横一列に攻撃力1倍の2連続ダメージさらに80%の確率で、2ターンの間、攻撃力を15%低下させる',
    askill_plus: '非情なる粛清＋',
    askill_plus_details:
      '敵横一列に攻撃力1.1倍の2連続ダメージさらに80%の確率で、2ターンの間、攻撃力を25%低下させる',
    special: 'ハウンド・ドッグ',
    special_details:
      '敵単体に攻撃力4倍のダメージさらに、2ターンの間、敵が積めるフォトンの量を-1する',
    special_plus: 'ハウンド・ドッグ＋',
    special_plus_details:
      '敵単体に攻撃力4.25倍のダメージさらに、2ターンの間、敵が積めるフォトンの量を-1する',
    masseffect: 'ご奉仕致します',
    masseffect_details: '【根性】【瀕死時、攻撃力上昇】が特徴の支援型の効果',
    element: '未調査',
    peerage: '不明',
    old_class: 'なし'
  },
  {
    name: 'グレモリー',
    no: '056',
    gauge: '4',
    class: 'ファイター',
    style: 'カウンター',
    hp: '712 - 8773',
    atk: '102 - 989',
    def: '50 - 485',
    spd: '40 - 416',
    voice: '小林 ゆう',
    gender: '女性',
    passive: '上質な装備',
    passive_details: '自身の防御力が30%上昇する',
    skill: '先陣を切る',
    skill_details:
      '敵単体に攻撃力1倍のダメージさらに70%の確率で、積まれているフォトンを1つ破壊する',
    skill_plus: '先陣を切る＋',
    skill_plus_details:
      '敵単体に攻撃力1.25倍のダメージさらに80%の確率で、積まれているフォトンを1つ破壊する',
    askill: '突撃命令',
    askill_details: '2ターンの間、味方前列のアタックを強化する',
    askill_plus: '突撃命令＋',
    askill_plus_details:
      '2ターンの間、味方前列のアタックを強化し攻撃力を10%上昇させる',
    special: '光のヴェール',
    special_details:
      '3ターンの間、味方全体へのアタックフォトンからのダメージを80%軽減する',
    special_plus: '光のヴェール＋',
    special_plus_details:
      '3ターンの間、味方全体へのアタックフォトンからのダメージを85%軽減する',
    masseffect: '金ならあるぞ',
    masseffect_details:
      '【ダメージ軽減】【攻撃力上昇】が特徴のバランス型の効果',
    element: '氷',
    peerage: '公爵',
    old_class: 'ディフェンダー'
  },
  {
    name: 'オセ',
    no: '057',
    gauge: '2',
    class: 'ファイター',
    style: 'ラッシュ',
    hp: '596 - 7351',
    atk: '115 - 1152',
    def: '31 - 283',
    spd: '58 - 614',
    voice: '榊原 ゆい',
    gender: '女性',
    passive: '豹の化身',
    passive_details: '自身の攻撃力が15%上昇する',
    skill: 'ポイズンクロー',
    skill_details:
      '敵単体に攻撃力1倍のダメージさらに70%の確率で、2ターンの間、敵を毒状態にする',
    skill_plus: 'ポイズンクロー＋',
    skill_plus_details:
      '敵単体に攻撃力1.25倍のダメージさらに80%の確率で、2ターンの間、敵を毒状態にする',
    askill: 'マッハクロー',
    askill_details:
      '敵単体に攻撃力0.7倍の4連続ダメージさらにアタックを追加する',
    askill_plus: 'マッハクロー＋',
    askill_plus_details:
      '敵単体に攻撃力0.75倍の4連続ダメージさらにアタックを追加する',
    special: '猛りの暴獣爪',
    special_details:
      '敵単体に攻撃力1倍の3連続ダメージさらに2ターンの間、自身のアタックを強化する',
    special_plus: '猛りの暴獣爪＋',
    special_plus_details:
      '敵単体に攻撃力1.1倍の3連続ダメージさらに2ターンの間、自身のアタックを強化する',
    masseffect: 'サバイバル能力',
    masseffect_details: '【毒攻撃】【素早さ上昇】が特徴の攻撃型の効果',
    element: '氷',
    peerage: '総裁',
    old_class: 'スレイヤー'
  },
  {
    name: 'アミー',
    no: '058',
    gauge: '5',
    class: 'トルーパー',
    style: 'バースト',
    hp: '594 - 7331',
    atk: '97 - 953',
    def: '38 - 406',
    spd: '60 - 626',
    voice: '中村 ちせ',
    gender: '女性',
    passive: '絃結界',
    passive_details: '戦闘中、徐々に素早さが上昇する（最大値50%）',
    skill: '籠絡絃',
    skill_details:
      '敵横一列に攻撃力0.9倍のダメージさらに2ターンの間、敵を引き寄せ状態にする',
    skill_plus: '籠絡絃＋',
    skill_plus_details:
      '敵横一列に攻撃力1.15倍のダメージさらに2ターンの間、敵を引き寄せ状態にする',
    askill: '捕縛陣',
    askill_details:
      '敵横一列に攻撃力1.75倍のダメージさらに80%の確率で、2ターンの間、敵の素早さを50%低下させる',
    askill_plus: '捕縛陣＋',
    askill_plus_details:
      '敵横一列に攻撃力2倍のダメージさらに80%の確率で、2ターンの間、敵の素早さを60%低下させる',
    special: 'ブレイズスラッシュ',
    special_details:
      '敵単体に攻撃力5倍の火ダメージさらに味方前列にアタックを追加する',
    special_plus: 'ブレイズスラッシュ＋',
    special_plus_details:
      '敵単体に攻撃力5.25倍の火ダメージさらに味方前列にアタックを追加する',
    masseffect: '即断即決',
    masseffect_details: '【アタック追加】【スキル追加】が特徴の攻撃型の効果',
    element: '火',
    peerage: '総裁',
    old_class: 'スナイパー'
  },
  {
    name: 'オリアス',
    no: '059',
    gauge: '4',
    class: 'スナイパー',
    style: 'バースト',
    hp: '483 - 5947',
    atk: '121 - 1191',
    def: '30 - 278',
    spd: '72 - 711',
    voice: '明坂 聡美',
    gender: '女性',
    passive: '不死の予言者',
    passive_details: '次に出現するフォトンが亀裂の色でわかるようになる',
    skill: '変化の魔法',
    skill_details: '2ターンの間、50%の確率で、敵をねずみにする',
    skill_plus: '変化の魔法＋',
    skill_plus_details: '2ターンの間、60%の確率で、敵をねずみにする',
    askill: '冬の大三角',
    askill_details:
      '敵全体に攻撃力1.1倍のダメージ2ターンの間、氷結の地形効果で0.5倍の継続ダメージを与え、攻撃力を低下させる',
    askill_plus: '冬の大三角＋',
    askill_plus_details:
      '敵全体に攻撃力1.35倍のダメージ2ターンの間、氷結の地形効果で0.75倍の継続ダメージを与え、攻撃力を低下させる',
    special: 'ヘイルキャノン',
    special_details:
      '敵単体に攻撃力4倍のダメージさらに2ターンの間、敵を凍結状態にする',
    special_plus: 'ヘイルキャノン＋',
    special_plus_details:
      '敵単体に攻撃力4.25倍のダメージさらに2ターンの間、敵を凍結状態にする',
    masseffect: '借りてきた猫',
    masseffect_details:
      '【戦闘開始時、覚醒ゲージ増加】【凍結攻撃】が特徴の支援型の効果',
    element: '氷',
    peerage: '侯爵',
    old_class: 'スレイヤー'
  },
  {
    name: 'ウァプラ',
    no: '060',
    gauge: '4',
    class: 'トルーパー',
    style: 'バースト',
    hp: '483 - 5948',
    atk: '137 - 1375',
    def: '39 - 409',
    spd: '50 - 490',
    voice: '大坪 孝充',
    gender: '男性',
    passive: '一騎当千',
    passive_details: '敵の数が多いほど、攻撃力が上昇する（最大値20%）',
    skill: '掻っ切り',
    skill_details:
      '敵横一列に攻撃力0.9倍のダメージ【使用するごとにスキルLv上昇】',
    skill_plus: '掻っ切り＋',
    skill_plus_details:
      '敵横一列に攻撃力1.15倍のダメージ【使用するごとにスキルLv上昇】',
    askill: '雷霆万鈞',
    askill_details:
      '敵全体に攻撃力1.1倍の雷ダメージさらに60%の確率で、2ターンの間、敵を感電状態にする',
    askill_plus: '雷霆万鈞＋',
    askill_plus_details:
      '敵全体に攻撃力1.35倍の雷ダメージさらに70%の確率で、2ターンの間、敵を感電状態にする',
    special: '森羅万象',
    special_details:
      '味方全体にチャージを追加するさらに2ターンの間、防御力を20%上昇させる',
    special_plus: '森羅万象＋',
    special_plus_details:
      '味方全体にチャージを追加するさらに2ターンの間、防御力を30%上昇させる',
    masseffect: '横隊陣形',
    masseffect_details:
      '【敵が多いほど、攻撃力上昇】【チャージ追加】が特徴の攻撃型の効果',
    element: '雷',
    peerage: '公爵',
    old_class: 'パニッシャー'
  },
  {
    name: 'ザガン',
    no: '061',
    gauge: '4',
    class: 'ファイター',
    style: 'カウンター',
    hp: '689 - 8492',
    atk: '100 - 975',
    def: '48 - 472',
    spd: '38 - 406',
    voice: '小見川 千明',
    gender: '女性',
    passive: 'パソドブレ',
    passive_details: '15%の確率で攻撃を無効化する',
    skill: 'ムレータ',
    skill_details:
      '2ターンの間、すべての単体攻撃を受け持ち最大HPの20%以下のダメージを無効化する',
    skill_plus: 'ムレータ＋',
    skill_plus_details:
      '2ターンの間、すべての単体攻撃を受け持ち最大HPの25%以下のダメージを無効化する',
    askill: 'エスパーダ',
    askill_details:
      '2ターンの間、すべての単体攻撃を受け持ち最大HPの20%以下のダメージを無効化し、攻撃を受けたとき、反撃する',
    askill_plus: 'エスパーダ＋',
    askill_plus_details:
      '2ターンの間、すべての単体攻撃を受け持ち最大HPの25%以下のダメージを無効化し、攻撃を受けたとき、反撃する',
    special: '止むなき猛進',
    special_details:
      '敵単体に攻撃力3.5倍のダメージさらに2ターンの間、敵をめまい状態にする【攻撃を2回受けるたびにスキルLv上昇】',
    special_plus: '止むなき猛進＋',
    special_plus_details:
      '敵単体に攻撃力3.75倍のダメージさらに2ターンの間、敵をめまい状態にする【攻撃を2回受けるたびにスキルLv上昇】',
    masseffect: 'アフィショナード',
    masseffect_details: '【ダメージ無効】【カウンター】が特徴の防御型の効果',
    element: '水',
    peerage: '総裁',
    old_class: 'ファイター'
  },
  {
    name: 'ウァラク',
    no: '062',
    gauge: '6',
    class: 'トルーパー',
    style: 'バースト',
    hp: '627 - 7703',
    atk: '95 - 943',
    def: '52 - 502',
    spd: '50 - 490',
    voice: '田中 理恵',
    gender: '女性',
    passive: '天上の踊り子',
    passive_details: '戦闘中、徐々に防御力が上昇する（最大値50%）',
    skill: '南風の舞',
    skill_details:
      '2ターンの間、味方全体の素早さを20%上昇させ、ターン終了時にHPが10%回復する',
    skill_plus: '南風の舞＋',
    skill_plus_details:
      '2ターンの間、味方全体の素早さを30%上昇させ、ターン終了時にHPが15%回復する',
    askill: '音響の槍',
    askill_details:
      '敵単体に3.25倍のダメージさらに味方前列の覚醒ゲージを+1する',
    askill_plus: '音響の槍＋',
    askill_plus_details:
      '敵単体に3.5倍のダメージさらに味方前列の覚醒ゲージを+1する',
    special: 'サイコウェイブ',
    special_details:
      '敵全体に攻撃力2倍のダメージさらに60%の確率で、2ターンの間、敵を混乱状態にする',
    special_plus: 'サイコウェイブ＋',
    special_plus_details:
      '敵全体に攻撃力2.25倍のダメージさらに70%の確率で、2ターンの間、敵を混乱状態にする',
    masseffect: 'お姉さんに任せて',
    masseffect_details: '【地形無効】【混乱攻撃】が特徴の支援型の効果',
    element: '風',
    peerage: '総裁',
    old_class: 'スナイパー'
  },
  {
    name: 'アンドラス',
    no: '063',
    gauge: '3',
    class: 'トルーパー',
    style: 'ラッシュ',
    hp: '741 - 9109',
    atk: '82 - 849',
    def: '50 - 490',
    spd: '49 - 481',
    voice: '山本 和臣',
    gender: '男性',
    passive: '特製プロテイン',
    passive_details: '自身の防御力が30%上昇する',
    skill: '接続治療',
    skill_details: '味方単体のHPを20%回復させ、状態異常を治癒する',
    skill_plus: '接続治療＋',
    skill_plus_details: '味方単体のHPを25%回復させ、状態異常を治癒する',
    askill: '死毒の縄',
    askill_details:
      '敵単体に攻撃力1.75倍のダメージさらに2ターンの間、敵を毒状態にする',
    askill_plus: '死毒の縄＋',
    askill_plus_details:
      '敵単体に攻撃力2倍のダメージさらに2ターンの間、敵を毒状態にする',
    special: 'インジェクトバイオ',
    special_details: '味方単体のHPを40%回復させるさらにスキルを追加する',
    special_plus: 'インジェクトバイオ＋',
    special_plus_details: '味方単体のHPを45%回復させるさらにスキルを追加する',
    masseffect: '生体実験',
    masseffect_details: '【全状態異常耐性】【自然回復】が特徴の支援型の効果',
    element: '雷',
    peerage: '侯爵',
    old_class: 'サポーター'
  },
  {
    name: 'フラウロス',
    no: '064',
    gauge: '3',
    class: 'トルーパー',
    style: 'ラッシュ',
    hp: '592 - 7308',
    atk: '120 - 1184',
    def: '38 - 405',
    spd: '49 - 483',
    voice: '宮下 栄治',
    gender: '男性',
    passive: 'ソードブレイカー',
    passive_details:
      '近接攻撃を受けたとき、20%の確率で反撃し、2ターンの間、攻撃力を15%低下させる',
    skill: '蛇腹剣',
    skill_details:
      '敵単体に攻撃力0.75倍の2連続ダメージさらに70%の確率で、2ターンの間、敵をめまい状態にする',
    skill_plus: '蛇腹剣＋',
    skill_plus_details:
      '敵単体に攻撃力0.9倍の2連続ダメージさらに80%の確率で、2ターンの間、敵をめまい状態にする',
    askill: 'リベンジストライク',
    askill_details:
      '敵横一列に攻撃力0.7倍の5連続ダメージさらに敵に溜まっている覚醒ゲージ1につき、ダメージ15%上昇',
    askill_plus: 'リベンジストライク＋',
    askill_plus_details:
      '敵横一列に攻撃力0.75倍の5連続ダメージさらに敵に溜まっている覚醒ゲージ1につき、ダメージ15%上昇',
    special: 'レオパルドブロー',
    special_details:
      '敵単体に攻撃力3倍の火ダメージさらに80%の確率で、積まれているフォトンを1つ奪う',
    special_plus: 'レオパルドブロー＋',
    special_plus_details:
      '敵単体に攻撃力3.25倍の火ダメージさらに90%の確率で、積まれているフォトンを1つ奪う',
    masseffect: 'オラオラ行くぜ！',
    masseffect_details: '【めまい攻撃】【カウンター】が特徴の妨害型の効果',
    element: '火',
    peerage: '公爵',
    old_class: 'スレイヤー'
  },
  {
    name: 'プロメテウス',
    no: '真-064',
    gauge: '5',
    class: 'スナイパー',
    style: 'バースト',
    hp: '685 - 8712',
    atk: '58 - 637',
    def: '59 - 625',
    spd: '54 - 569',
    voice: '西田 望見',
    gender: '女性',
    passive: 'ハピネスライブ',
    passive_details:
      '自身が発動させたライブの効果が継続中、自身の受けるダメージを20%軽減する',
    skill: '♪キミに届くように',
    skill_details:
      '2ターンの間ライブ状態になり、火攻撃時、覚醒+1。攻撃力25%アップ/ダメージ軽減20%/ターン終了時HP15%回復を付与可能になる',
    skill_plus: '♪キミに届くように＋',
    skill_plus_details:
      '2ターンの間ライブ状態になり、火攻撃時、覚醒+1。攻撃力30%アップ/ダメージ軽減25%/ターン終了時HP20%回復を付与可能になる',
    askill: '歌のチカラは∞！',
    askill_details:
      '2ターンの間、味方単体の全フォトンを強化し、さらに、ターン終了時にHPが10%回復する',
    askill_plus: '歌のチカラは∞！＋',
    askill_plus_details:
      '2ターンの間、味方単体の全フォトンを強化し、さらに、ターン終了時にHPが15%回復する',
    special: 'ルルディダロス',
    special_details:
      '敵横一列に攻撃力2.75倍の火ダメージさらに自身以外の味方にスキルを追加',
    special_plus: 'ルルディダロス＋',
    special_plus_details:
      '敵横一列に攻撃力3倍の火ダメージさらに自身以外の味方にスキルを追加',
    masseffect: '盛り上がってこー♪',
    masseffect_details: '【火ダメージ上昇】【スキル追加】が特徴の支援型の効果',
    element: '火',
    peerage: '不明',
    old_class: 'なし'
  },
  {
    name: 'アンドレアルフス',
    no: '065',
    gauge: '3',
    class: 'ファイター',
    style: 'ラッシュ',
    hp: '738 - 9087',
    atk: '102 - 988',
    def: '31 - 285',
    spd: '61 - 637',
    voice: '田中 進太郎',
    gender: '男性',
    passive: 'クロスカウンター',
    passive_details: '攻撃を受けたとき、20%の確率で反撃する',
    skill: 'コンビネーション',
    skill_details:
      '敵単体に攻撃力0.65倍の4連続ダメージさらに70%の確率で、積まれているフォトンを1つ破壊する',
    skill_plus: 'コンビネーション＋',
    skill_plus_details:
      '敵単体に攻撃力0.7倍の4連続ダメージさらに80%の確率で、積まれているフォトンを1つ破壊する',
    askill: 'レックレスラッシュ',
    askill_details:
      '敵単体に攻撃力0.75倍の6連続ダメージさらに2ターンの間、敵をめまい状態にする',
    askill_plus: 'レックレスラッシュ＋',
    askill_plus_details:
      '敵単体に攻撃力0.8倍の6連続ダメージさらに2ターンの間、敵をめまい状態にする',
    special: 'フェザーシールド',
    special_details:
      '3ターンの間、味方横一列へのダメージを20%軽減し、Lv×5の固定追加ダメージを付与する',
    special_plus: 'フェザーシールド＋',
    special_plus_details:
      '3ターンの間、味方横一列へのダメージを30%軽減し、Lv×10の固定追加ダメージを付与する',
    masseffect: 'アウトボクサー',
    masseffect_details: '【カウンター】【ダメージ軽減】が特徴の防御型の効果',
    element: '風',
    peerage: '侯爵',
    old_class: 'ディフェンダー'
  },
  {
    name: 'キマリス',
    no: '066',
    gauge: '4',
    class: 'トルーパー',
    style: 'ラッシュ',
    hp: '347 - 4270',
    atk: '116 - 1159',
    def: '38 - 405',
    spd: '67 - 673',
    voice: '小見川 千明',
    gender: '女性',
    passive: 'キマリスは強いのだ！',
    passive_details: '死者系のモンスターに2倍のダメージ',
    skill: 'アマゾネスの槍',
    skill_details:
      '敵単体に攻撃力1倍のダメージさらに70%の確率で、2ターンの間、敵を暗闇状態にする',
    skill_plus: 'アマゾネスの槍＋',
    skill_plus_details:
      '敵単体に攻撃力1.25倍のダメージさらに80%の確率で、2ターンの間、敵を暗闇状態にする',
    askill: '微塵粉灰',
    askill_details: '敵単体に攻撃力2.25倍のダメージさらにスキルを追加する',
    askill_plus: '微塵粉灰＋',
    askill_plus_details: '敵単体に攻撃力2.5倍のダメージさらにスキルを追加する',
    special: '破壊衝動',
    special_details:
      '2ターンの間、味方全体のスキルを強化し、攻撃力を10%上昇させる',
    special_plus: '破壊衝動＋',
    special_plus_details:
      '2ターンの間、味方全体のスキルを強化し、攻撃力を20%上昇させる',
    masseffect: '自由奔放',
    masseffect_details: '【死者特効】【暗闇攻撃】が特徴の攻撃型の効果',
    element: '水',
    peerage: '侯爵',
    old_class: 'スナイパー'
  },
  {
    name: 'アムドゥスキアス',
    no: '067',
    gauge: '4',
    class: 'スナイパー',
    style: 'カウンター',
    hp: '585 - 7171',
    atk: '78 - 756',
    def: '52 - 500',
    spd: '63 - 645',
    voice: '青木 瑠璃子',
    gender: '女性',
    passive: '漆黒の翼',
    passive_details: '自身の素早さが30%上昇する',
    skill: '伏魔殿の結界',
    skill_details: '味方単体への攻撃を2回無効化する',
    skill_plus: '伏魔殿の結界＋',
    skill_plus_details:
      '味方単体への攻撃を2回無効化するさらに2ターンの間、ターン終了時にHPが10%回復する',
    askill: '眷属の帳',
    askill_details:
      '敵横一列に攻撃力1.5倍のダメージさらに70%の確率で、2ターンの間、敵を暗闇状態にする',
    askill_plus: '眷属の帳＋',
    askill_plus_details:
      '敵横一列に攻撃力1.75倍のダメージさらに80%の確率で、2ターンの間、敵を暗闇状態にする',
    special: 'ウィンドスピナー',
    special_details:
      '敵単体に攻撃力4倍のダメージさらに味方全体のHPを15%回復させる',
    special_plus: 'ウィンドスピナー＋',
    special_plus_details:
      '敵単体に攻撃力4.25倍のダメージさらに味方全体のHPを20%回復させる',
    masseffect: '堕天使の眷属',
    masseffect_details: '【覚醒コスト減少】【暗闇攻撃】が特徴の支援型の効果',
    element: '風',
    peerage: '公爵',
    old_class: 'スレイヤー'
  },
  {
    name: 'ベリアル',
    no: '068',
    gauge: '4',
    class: 'スナイパー',
    style: 'ラッシュ',
    hp: '619 - 7630',
    atk: '100 - 976',
    def: '42 - 431',
    spd: '62 - 644',
    voice: '田中 理恵',
    gender: '女性',
    passive: '虚心坦懐',
    passive_details: '自身の点穴の値が高いほど、受けるダメージを軽減する',
    skill: '命脈穿ち',
    skill_details: '敵単体に攻撃力1倍のダメージさらに自身の点穴を+10する',
    skill_plus: '命脈穿ち＋',
    skill_plus_details:
      '敵単体に攻撃力1.25倍のダメージさらに自身の点穴を+15する',
    askill: '不撓の眼光',
    askill_details: '2ターンの間、自身が固定砲台状態になる',
    askill_plus: '不撓の眼光＋',
    askill_plus_details:
      '自身の点穴を+5し、2ターンの間、自身が固定砲台状態になる',
    special: '凶星墜とし',
    special_details: '敵単体に掛かっている強化を解除し、攻撃力3倍のダメージ',
    special_plus: '凶星墜とし＋',
    special_plus_details:
      '敵単体に掛かっている強化を解除し、攻撃力3.25倍のダメージ',
    masseffect: '戦術指南',
    masseffect_details: '【点穴上昇】【単体ダメージ上昇】が特徴の攻撃型の効果',
    element: '地',
    peerage: '王',
    old_class: 'スナイパー'
  },
  {
    name: 'デカラビア',
    no: '069',
    gauge: '3',
    class: 'スナイパー',
    style: 'ラッシュ',
    hp: '478 - 5906',
    atk: '115 - 1152',
    def: '40 - 421',
    spd: '62 - 642',
    voice: '朝霧 友陽',
    gender: '男性',
    passive: '滅びの美学',
    passive_details: '植物系のモンスターに2倍のダメージ',
    skill: 'ヴェノムマイン',
    skill_details:
      '敵単体に攻撃力1倍のダメージさらに70%の確率で、2ターンの間、敵を毒状態にする',
    skill_plus: 'ヴェノムマイン＋',
    skill_plus_details:
      '敵単体に攻撃力1.25倍のダメージさらに80%の確率で、2ターンの間、敵を毒状態にする',
    askill: 'ブリザード',
    askill_details:
      '敵横一列に攻撃力1.25倍のダメージさらに50%の確率で、2ターンの間、敵を凍結状態にする',
    askill_plus: 'ブリザード＋',
    askill_plus_details:
      '敵横一列に攻撃力1.5倍のダメージさらに60%の確率で、2ターンの間、敵を凍結状態にする',
    special: 'トランスジャミング',
    special_details:
      '敵全体の覚醒ゲージを-2し、2ターンの間、素早さを20%低下させる',
    special_plus: 'トランスジャミング＋',
    special_plus_details:
      '敵全体の覚醒ゲージを-2し、2ターンの間、素早さを30%低下させる',
    masseffect: '異界の知識',
    masseffect_details: '【凍結攻撃】【毒攻撃】が特徴の妨害型の効果',
    element: '氷',
    peerage: '侯爵',
    old_class: 'パニッシャー'
  },
  {
    name: 'セーレ',
    no: '070',
    gauge: '5',
    class: 'ファイター',
    style: 'カウンター',
    hp: '468 - 5741',
    atk: '95 - 944',
    def: '40 - 416',
    spd: '72 - 711',
    voice: '東内 マリ子',
    gender: '男性',
    passive: 'トレジャーハンター',
    passive_details: 'ラッシュのモンスターからのレアドロップ率が50%上昇する',
    skill: 'ポーション投げ',
    skill_details: '味方単体のHPを20%回復させ、状態異常を治癒する',
    skill_plus: 'ポーション投げ＋',
    skill_plus_details: '味方単体のHPを25%回復させ、状態異常を治癒する',
    askill: 'スパイラルエッジ',
    askill_details:
      '敵単体に攻撃力1.65倍の2連続ダメージ2ターンの間、突風の地形効果で0.5倍の継続ダメージを与え、火に弱くする',
    askill_plus: 'スパイラルエッジ＋',
    askill_plus_details:
      '敵単体に攻撃力1.75倍の2連続ダメージ2ターンの間、突風の地形効果で0.75倍の継続ダメージを与え、火に弱くする',
    special: 'ランプの魔人',
    special_details:
      '敵全体ダメージ、全体ダメージ軽減、全体回復の3つからランダムで効果が発生3回まで使用可能で、同じ効果は発生しない',
    special_plus: 'ランプの魔人＋',
    special_plus_details:
      '敵全体ダメージ、全体ダメージ軽減、全体回復の3つからランダムで効果が発生3回まで使用可能で、同じ効果は発生しない',
    masseffect: '冒険大好き',
    masseffect_details: '【全状態異常耐性】【素早さ上昇】が特徴の支援型の効果',
    element: '風',
    peerage: '君主',
    old_class: 'ファイター'
  },
  {
    name: 'ダンタリオン',
    no: '071',
    gauge: '6',
    class: 'スナイパー',
    style: 'バースト',
    hp: '608 - 7462',
    atk: '139 - 1387',
    def: '50 - 491',
    spd: '29 - 270',
    voice: '小林 ゆう',
    gender: '女性',
    passive: 'メギドの記憶',
    passive_details: 'HPが20%上昇する',
    skill: 'フォールドスロー',
    skill_details: '敵横一列に攻撃力1倍のダメージ',
    skill_plus: 'フォールドスロー＋',
    skill_plus_details: '敵横一列に攻撃力1.25倍のダメージ',
    askill: 'ロブシューター',
    askill_details:
      '敵単体に攻撃力3.25倍のダメージさらに70%の確率で、積まれているフォトンを1つ奪う',
    askill_plus: 'ロブシューター＋',
    askill_plus_details:
      '敵単体に攻撃力3.5倍のダメージさらに80%の確率で、積まれているフォトンを1つ奪う',
    special: 'エンシェントアーツ',
    special_details: '2ターンの間、味方全体の攻撃力を100%上昇させる',
    special_plus: 'エンシェントアーツ＋',
    special_plus_details: '2ターンの間、味方全体の攻撃力を110%上昇させる',
    masseffect: '頓知頓才',
    masseffect_details:
      '【チャージ追加】【徐々に攻撃力上昇】が特徴の攻撃型の効果',
    element: '氷',
    peerage: '公爵',
    old_class: 'パニッシャー'
  },
  {
    name: 'アンドロマリウス',
    no: '072',
    gauge: '4',
    class: 'スナイパー',
    style: 'ラッシュ',
    hp: '576 - 7094',
    atk: '78 - 752',
    def: '48 - 472',
    spd: '62 - 643',
    voice: '本多 真梨子',
    gender: '女性',
    passive: '臆病者',
    passive_details: 'HPが50%以下のとき、30%の確率で攻撃を無効化する',
    skill: '飴玉シャワー',
    skill_details: '2ターンの間、味方単体のスキルを強化する',
    skill_plus: '飴玉シャワー＋',
    skill_plus_details:
      '2ターンの間、味方単体のスキルを強化し、攻撃力を20%上昇させる',
    askill: '雪玉スコール',
    askill_details:
      '敵単体に攻撃力2.25倍のダメージさらに2ターンの間、敵を凍結状態にする',
    askill_plus: '雪玉スコール＋',
    askill_plus_details:
      '敵単体に攻撃力2.5倍のダメージさらに2ターンの間、敵を凍結状態にする',
    special: 'ウィズダムスペル',
    special_details:
      '味方全体にスキルを追加し、2ターンの間、ダメージを10%軽減する',
    special_plus: 'ウィズダムスペル＋',
    special_plus_details:
      '味方全体にスキルを追加し、2ターンの間、ダメージを20%軽減する',
    masseffect: '白銀の世界',
    masseffect_details:
      '【戦闘開始時、覚醒ゲージ増加】【凍結攻撃】が特徴の支援型の効果',
    element: '氷',
    peerage: '伯爵',
    old_class: 'スナイパー'
  }
];

export default megido;
