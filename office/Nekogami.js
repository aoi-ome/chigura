/*
 * Chigula.js
 * ぬこ神さま ฅˆ•ﻌ•ˆฅ
 */
const isFunction = (nya) => { return (typeof nya === 'function' ); };

/**
 * 色たち
 */
const _ = null;
const B = '#000000';            // Black
const C = '#ffe4b5';            // moCcasin
const E = '#cd853f';            // pEru
const G = '#696969';            // dimGray
const g = '#d3d3d3';            // lightGray
const L = '#87cefa';            // lightskybLue
const N = '#8b4513';            // saddlebrowN
const O = '#ffa500';            // Orange
const o = '#deb887';            // burlywOod
const P = '#ff69b4';            // hotPink
const p = '#ffb6c1';            // lightPink
const R = '#ff0000';            // Red
const T = '#d2b48c';            // Tan
const U = '#9370db';            // mediumpUrple
const V = '#4169e1';            // naVy (ほんとはroyalblue)
const W = '#ffffff';            // White
const Y = '#ffd700';            // Yellow (ほんとはgold)

const ELIZABETH = {
    _ : _,                      // null
    B : B,                      // Black
    C : C,                      // moCcasin
    E : E,                      // pEru
    G : G,                      // dimGray
    g : g,                      // lightGray
    L : L,                      // lightskybLue
    N : N,                      // saddlebrowN
    O : O,                      // Orange
    o : o,                      // burlywOod
    P : P,                      // hotPink
    p : p,                      // lightPink
    R : R,                      // Red
    T : T,                      // Tan
    U : U,                      // mediumpUrple
    V : V,                      // naVy (ほんとはroyalblue)
    W : W,                      // White
    Y : Y,                      // Yellow (ほんとはgold)
};

/**
 * ネコに風船たち
 */
const BALLOON = {
    blue : {
        color       : '#00008b',        // darkblue
        background  : '#f0f8ff',        // aliceblue
        borderColor : '#afeeee',        // paleturquoise
    },
    brown : {
        color       : '#800000',        // maroon
        background  : '#fdf5e6',        // oldlace
        borderColor : '#d2b48c',        // tan
    },
    gray : {
        color       : '#000000',        // black
        background  : '#f5f5f5',        // whitesmoke
        borderColor : '#dcdcdc',        // gainsboro
    },
    green : {
        color       : '#556b2f',        // darkolivegreen
        background  : '#f0fff0',        // honeydew
        borderColor : '#bdb76b',        // darkkhaki
    },
    orange : {
        color       : '#b8860b',        // darkgoldenrod
        background  : '#fff5ee',        // seashell
        borderColor : '#ffdead',        // navajowhite
    },
    purple : {
        color       : '#4b0082',        // indigo
        background  : '#f8f8ff',        // ghostwhite
        borderColor : '#d8bfd8',        // thistle
    },
    red : {
        color       : '#b22222',        // firebrick
        background  : '#fff0f5',        // lavenderblush
        borderColor : '#ffe4e1',        // mistyrose
    },
    yellow : {
        color       : '#808000',        // olive
        background  : '#fffff0',        // ivory
        borderColor : '#f0e68c',        // khaki
    },
};

/**
 * にゃで声たち
 */
const NADEGOE = {
    amae    : ['ゴロゴロ', 'にゃーお', 'にゃぁん', 'にゃ、にゃにゃにゃん', 'ぷるる〜'],
    hashagi : ['みやぁお。みゃお、みやぁお', 'ぷるぷる', 'むにゃぁん', 'にゃにゃにゃにゃにゃっ', 'みゃぁお'],
    kashige : ['にゃうん、、、みゃぁ？', 'みゃおん！？', 'みゃん', 'にゃん...？', 'みーみー'],
    okomari : ['みゃうん...', 'みぃみぃ', 'むぅ', 'みゃぁみぁ', 'んにぁん'],
    neboke  : ['にゃむ...にゃん', 'んー', 'むにゃむにゃ', 'みゃーぁ...にゃぉ...', '...にゃん...'],
    oko     : ['ぁお〜〜〜〜〜ん！！', 'ぷいっ', 'にゃっ！にゃにゃっ！', 'ふシャーーー！！', 'カッ！！'],
    shio    : ['・・・・・', 'にゃ', 'みゃ', 'みぃ', 'にゃん'],
};

/**
 * デコたち
 */
const HITAI = {
    // おこ
    anger : {
        width  : 3,
        height : 3,
        image  : [
            R, _, R,
            _, R, _,
            R, _, R,
        ],
    },
    // 怒りの炎
    fire : {
        width  : 3,
        height : 2,
        image  : [
            _, R, _,
            R, P, R,
        ],
    },
    // ハートマーク
    heart : {
        width  : 3,
        height : 3,
        image  : [
            P, _, P,
            P, P, P,
            _, P, _,
        ],
    },
    // みずたまり
    pool : {
        width  : 4,
        height : 2,
        image  : [
            _, L, L, _,
            L, L, L, L,
        ],
    },
    // キラキラ
    spark : {
        width  : 3,
        height : 3,
        image  : [
            _, Y, _,
            Y, Y, Y,
            _, Y, _,
        ],
    },
    // にゃみだ
    tear : {
        width  : 5,
        height : 3,
        image  : [
            _, L, L, L, _,
            L, L, L, L, L,
            L, L, _, L, L,
        ],
    },
    // おねむ
    zzz : {
        width  : 3,
        height : 3,
        image  : [
            V, V, V,
            _, V, _,
            V, V, V,
        ],
    },
};

const ASE   = (y = 0   ) => [{e:'yowarime1' , x:4  , y:5+y}, {e:'yowarime2' , x:10  , y:5+y}];  // あせあせ
const CHIKA = (y = 0   ) => ({e:'yowarime1' , x:5  , y:5+y});                                   // ちかちか
const KIRA  = (l = true) => ({e:'spark', x:(l ? -1 : 14), y:(l ? 0 : 1)});                      // きらきら
const KYUN  = (l = true) => ({e:'heart', x:(l ?  0 : 13), y:(l ? 0 : 1)});                      // きゅんきゅん
const MERA  = (x = 0   ) => [{e:'fire'      , x:0-x, y:14 }, {e:'fire'      , x:13+x, y:14 }];  // めらめら
const PACHI = (y = 0   ) => [{e:'tsumurime1', x:4  , y:5+y}, {e:'tsumurime2', x:9   , y:5+y}];  // ぱちぱち
const PORO  = (y = 0, me = true) => [{e:'pool', x:-1, y:14}, {e:'pool', x:13, y:14}, ...(me ? [{e:'yowarime1', x:4, y:5+y}, {e:'yowarime2', x:10, y:5+y}, {e:'tear', x:-2, y:4+y}, {e:'tear', x:13, y:4+y}] : [])];
const PUN   = (y = 0, d = 0, me = true) => [{e:'anger', x:12+d, y:1-d}, ...(me ? [{e:'tsurime1', x:4, y:5+y}, {e:'tsurime2', x:10, y:5+y}] : [])];
const SUYA  = (d = 0   ) => ({e:'zzz', x:12+d, y:1-d});                                         // すやすや

/**
 * しぐさたち
 */
// デフォルト
const DEFAULT = {
    shigusa : [
        { pose : 'fuse1'  , hitai : PACHI(1)},
        { pose : 'hesoten1'},
        { pose : 'hesoten2'},
        { pose : 'hoihoi1' },
        { pose : 'hoihoi2', hitai : PACHI() },
        { pose : 'kobako1' },
        { pose : 'kobako2' },
        { pose : 'osuwari1', x: 1, y:0  },
        { pose : 'osuwari2', x:-1, y:0  },
        { pose : 'osuwari2', x:0 , y:1  },
        { pose : 'ote2'    },
        { pose : 'ushiro1' , x:0 , y:-1 },
    ],
};
// あせあせ
const ASEASE = (shigusa, y) => ({
    shigusa  : [
        { pose : `${shigusa}1`, hitai : ASE(y) },
        { pose : `${shigusa}2`, hitai : ASE(y) },
    ],
    kimagure : 1,
    nadegoe  : NADEGOE.okomari,
});
// ちかちか
const CHIKACHIKA = (shigusa, y) => ({
    shigusa  : [
        { pose : `${shigusa}1` },
        { pose : `${shigusa}2` },
        { pose : `${shigusa}2`, hitai : CHIKA(y) },
    ],
    kimagure : 0.3,
    nadegoe  : NADEGOE.neboke,
});
// ふりふり
const FURIFURI = (shigusa) => ({
    shigusa  : [
        { pose : `${shigusa}1` },
        { pose : `${shigusa}2` },
    ],
    kimagure : 1,
    nadegoe  : NADEGOE.kashige,
});
// きらきら
const KIRAKIRA = (shigusa) => ({
    shigusa  : [
        { pose : `${shigusa}1`, hitai : KIRA(false) },
        { pose : `${shigusa}2`, hitai : KIRA()      },
    ],
    kimagure : 1,
    nadegoe  : NADEGOE.amae,
});
// きゅんきゅん
const KYUNKYUN = (shigusa) => ({
    shigusa  : [
        { pose : `${shigusa}1`, hitai : KYUN(false) },
        { pose : `${shigusa}2`, hitai : KYUN()      },
    ],
    kimagure : 1,
    nadegoe  : NADEGOE.hashagi,
});
// くるくる
const KURUKURU = (shigusa1, shigusa2) => ({
    shigusa  : [
        { pose : `${shigusa1}1` },
        { pose : `${shigusa1}2` },
        { pose : `${shigusa2}1` },
        { pose : `${shigusa2}2` },
    ],
    kimagure : 0.8,
    nadegoe  : NADEGOE.kashige,
});
// くるくるきらきら
const KURUKIRA = (shigusa1, shigusa2) => ({
    shigusa  : [
        { pose : `${shigusa1}1`, hitai : KIRA(false) },
        { pose : `${shigusa1}2`, hitai : KIRA()      },
        { pose : `${shigusa2}1`, hitai : KIRA(false) },
        { pose : `${shigusa2}2`, hitai : KIRA()      },
    ],
    kimagure : 0.8,
    nadegoe  : NADEGOE.amae,
});
// くるくるきゅんきゅん
const KURUKYUN = (shigusa1, shigusa2) => ({
    shigusa  : [
        { pose : `${shigusa1}1`, hitai : KYUN(false) },
        { pose : `${shigusa1}2`, hitai : KYUN()      },
        { pose : `${shigusa2}1`, hitai : KYUN(false) },
        { pose : `${shigusa2}2`, hitai : KYUN()      },
    ],
    kimagure : 0.8,
    nadegoe  : NADEGOE.hashagi,
});
// めらめら
const MERAMERA = (shigusa, offset, me = true) => ({
    shigusa  : [
        { pose : `${shigusa}1`, hitai : [...PUN(offset, 1, me), ...MERA(0)] },
        { pose : `${shigusa}2`, hitai : [...PUN(offset, 0, me), ...MERA(1)] },
    ],
    kimagure : 1,
    nadegoe  : NADEGOE.oko,
});
// のびのび
const NOBINOBI = (shigusa1, shigusa2) => ({
    shigusa  : [
        { pose : `${shigusa1}1` },
        { pose : `${shigusa1}2` },
        { pose : `${shigusa2}1` },
        { pose : `${shigusa2}2` },
    ],
    kimagure : 0.7,
    nadegoe  : NADEGOE.kashige,
});
// のびのびきらきら
const NOBIKIRA = (shigusa1, shigusa2) => ({
    shigusa  : [
        { pose : `${shigusa1}1`, hitai : KIRA(false) },
        { pose : `${shigusa1}2`, hitai : KIRA()      },
        { pose : `${shigusa2}1`, hitai : KIRA(false) },
        { pose : `${shigusa2}2`, hitai : KIRA()      },
    ],
    kimagure : 0.7,
    nadegoe  : NADEGOE.amae,
});
// のびのびきゅんきゅん
const NOBIKYUN = (shigusa1, shigusa2) => ({
    shigusa  : [
        { pose : `${shigusa1}1`, hitai : KYUN(false) },
        { pose : `${shigusa1}2`, hitai : KYUN()      },
        { pose : `${shigusa2}1`, hitai : KYUN(false) },
        { pose : `${shigusa2}2`, hitai : KYUN()      },
    ],
    kimagure : 0.7,
    nadegoe  : NADEGOE.hashagi,
});
// ぱちぱち
const PACHIPACHI = (shigusa, y) => ({
    shigusa  : [
        { pose : `${shigusa}1` },
        { pose : `${shigusa}2` },
        { pose : `${shigusa}2`, hitai : PACHI(y) },
    ],
    kimagure : 0.3,
    nadegoe  : NADEGOE.neboke,
});
// ぺちぺち
const PECHIPECHI = (shigusa1, shigusa2) => ({
    shigusa  : [
        { pose : `${shigusa1}1` },
        { pose : `${shigusa1}2` },
        { pose : `${shigusa2}1` },
        { pose : `${shigusa2}2` },
    ],
    kimagure : 0.3,
    nadegoe  : NADEGOE.shio,
});
// ぽろぽろ
const POROPORO = (shigusa, y, me = true) => ({
    shigusa  : [
        { pose : `${shigusa}1`, hitai : PORO(y, me) },
        { pose : `${shigusa}2`, hitai : PORO(y, me) },
    ],
    kimagure : 0.5,
    nadegoe  : NADEGOE.okomari,
});
// ぷんぷん
const PUNPUN = (shigusa, y, me = true) => ({
    shigusa  : [
        { pose : `${shigusa}1`, hitai : PUN(y, 1, me) },
        { pose : `${shigusa}2`, hitai : PUN(y, 0, me) },
    ],
    kimagure : 1,
    nadegoe  : NADEGOE.oko,
});
// すやすや
const SUYASUYA = (shigusa, y, me = true) => ({
    shigusa  : [
        { pose : `${shigusa}1`, hitai : [...(me ? PACHI(y) : []), SUYA(0)] },
        { pose : `${shigusa}1`, hitai : [...(me ? PACHI(y) : []), SUYA(1)] },
    ],
    kimagure : 0.5,
    nadegoe  : NADEGOE.neboke,
});

const SHIGUSA = {
    // デフォルト
    default : DEFAULT,
    // あせあせシリーズ
    aseaseb : [ASEASE, 'banzai' , -1],
    aseasef : [ASEASE, 'fuse'   , 1 ],
    aseaseh : [ASEASE, 'hesoten', 0 ],
    aseasek : [ASEASE, 'kobako' , 0 ],
    aseaseo : [ASEASE, 'osuwari', 0 ],
    // ちかちかシリーズ
    chikachikaf  : [CHIKACHIKA, 'fuse'   , 1],
    chikachikah  : [CHIKACHIKA, 'hesoten', 0],
    chikachikaho : [CHIKACHIKA, 'hoihoi' , 0],
    chikachikak  : [CHIKACHIKA, 'kobako' , 0],
    chikachikao  : [CHIKACHIKA, 'osuwari', 0],
    // ふりふりシリーズ
    furifurib : [FURIFURI, 'banzai' ],
    furifurif : [FURIFURI, 'fuse'   ],
    furifurih : [FURIFURI, 'hesoten'],
    furifurik : [FURIFURI, 'kobako' ],
    furifurio : [FURIFURI, 'osuwari'],
    furifuriu : [FURIFURI, 'ushiro' ],
    // きらきらシリーズ
    kirakirab : [KIRAKIRA, 'banzai' ],
    kirakiraf : [KIRAKIRA, 'fuse'   ],
    kirakirah : [KIRAKIRA, 'hesoten'],
    kirakirak : [KIRAKIRA, 'kobako' ],
    kirakirao : [KIRAKIRA, 'osuwari'],
    kirakirau : [KIRAKIRA, 'ushiro' ],
    // きゅんきゅんシリーズ
    kyunkyunb : [KYUNKYUN, 'banzai' ],
    kyunkyunf : [KYUNKYUN, 'fuse'   ],
    kyunkyunh : [KYUNKYUN, 'hesoten'],
    kyunkyunk : [KYUNKYUN, 'kobako' ],
    kyunkyuno : [KYUNKYUN, 'osuwari'],
    kyunkyunu : [KYUNKYUN, 'ushiro' ],
    // くるくるシリーズ
    kurukurub : [KURUKURU, 'ushiro', 'banzai' ],
    kurukuruh : [KURUKURU, 'ushiro', 'hesoten'],
    kurukuruk : [KURUKURU, 'ushiro', 'kobako' ],
    kurukuruo : [KURUKURU, 'ushiro', 'osuwari'],
    // くるくるきらきらシリーズ
    kurukirab : [KURUKIRA, 'ushiro', 'banzai' ],
    kurukirah : [KURUKIRA, 'ushiro', 'hesoten'],
    kurukirak : [KURUKIRA, 'ushiro', 'kobako' ],
    kurukirao : [KURUKIRA, 'ushiro', 'osuwari'],
    // くるくるきゅんきゅんシリーズ
    kurukyunb : [KURUKYUN, 'ushiro', 'banzai' ],
    kurukyunh : [KURUKYUN, 'ushiro', 'hesoten'],
    kurukyunk : [KURUKYUN, 'ushiro', 'kobako' ],
    kurukyuno : [KURUKYUN, 'ushiro', 'osuwari'],
    // めらめらシリーズ
    meramerab : [MERAMERA, 'banzai' , -1],
    merameraf : [MERAMERA, 'fuse'   , 1 ],
    meramerah : [MERAMERA, 'hesoten', 0 ],
    meramerak : [MERAMERA, 'kobako' , 0 ],
    meramerao : [MERAMERA, 'osuwari', 0 ],
    meramerau : [MERAMERA, 'ushiro' , 0, false],
    // のびのびシリーズ
    nobinobif  : [NOBINOBI, 'banzai' , 'fuse'   ],
    nobinobif2 : [NOBINOBI, 'osuwari', 'fuse'   ],
    nobinobih  : [NOBINOBI, 'banzai' , 'hesoten'],
    nobinobik  : [NOBINOBI, 'banzai' , 'kobako' ],
    nobinobio  : [NOBINOBI, 'banzai' , 'osuwari'],
    // のびのびきらきらシリーズ
    nobikiraf  : [NOBIKIRA, 'banzai' , 'fuse'   ],
    nobikiraf2 : [NOBIKIRA, 'osuwari', 'fuse'   ],
    nobikirah  : [NOBIKIRA, 'banzai' , 'hesoten'],
    nobikirak  : [NOBIKIRA, 'banzai' , 'kobako' ],
    nobikirao  : [NOBIKIRA, 'banzai' , 'osuwari'],
    // のびのびきゅんきゅんシリーズ
    nobikyunf  : [NOBIKYUN, 'banzai' , 'fuse'   ],
    nobikyunf2 : [NOBIKYUN, 'osuwari', 'fuse'   ],
    nobikyunh  : [NOBIKYUN, 'banzai' , 'hesoten'],
    nobikyunk  : [NOBIKYUN, 'banzai' , 'kobako' ],
    nobikyuno  : [NOBIKYUN, 'banzai' , 'osuwari'],
    // ぱちぱちシリーズ
    pachipachif  : [PACHIPACHI, 'fuse'   , 1],
    pachipachih  : [PACHIPACHI, 'hesoten', 0],
    pachipachiho : [PACHIPACHI, 'hoihoi' , 0],
    pachipachik  : [PACHIPACHI, 'kobako' , 0],
    pachipachio  : [PACHIPACHI, 'osuwari', 0],
    // ぺちぺちシリーズ
    pechipechif  : [PECHIPECHI, 'ote' , 'fuse'   ],
    pechipechih  : [PECHIPECHI, 'ote' , 'hesoten'],
    pechipechik  : [PECHIPECHI, 'ote' , 'kobako' ],
    pechipechio  : [PECHIPECHI, 'ote' , 'osuwari'],
    // ぽろぽろシリーズ
    poroporob : [POROPORO, 'banzai' , -1],
    poroporof : [POROPORO, 'fuse'   , 1 ],
    poroporoh : [POROPORO, 'hesoten', 0 ],
    poroporok : [POROPORO, 'kobako' , 0 ],
    poroporoo : [POROPORO, 'osuwari', 0 ],
    poroporou : [POROPORO, 'ushiro' , 0, false],
    // ぷんぷんシリーズ
    punpunb : [PUNPUN, 'banzai' , -1],
    punpunf : [PUNPUN, 'fuse'   , 1 ],
    punpunh : [PUNPUN, 'hesoten', 0 ],
    punpunk : [PUNPUN, 'kobako' , 0 ],
    punpuno : [PUNPUN, 'osuwari', 0 ],
    punpunu : [PUNPUN, 'ushiro' , 0, false],
    // すやすやシリーズ
    suyasuyaf  : [SUYASUYA, 'fuse'   , 1],
    suyasuyah  : [SUYASUYA, 'hesoten', 0],
    suyasuyaho : [SUYASUYA, 'hoihoi' , 0],
    suyasuyak  : [SUYASUYA, 'kobako' , 0],
    suyasuyao  : [SUYASUYA, 'osuwari', 0],
    suyasuyau  : [SUYASUYA, 'ushiro' , 0, false],
};


/**
 *  ｡*. ﾟ . +  .ﾟ   _.／l .+  .／l、    .+  . ﾟ + .ﾟ..ﾟ
 * + .  . ｡ ﾟ ｡☆ﾟ ＜     ）  .(    ｀ﾌ ｡☆ﾟ ｡ ﾟ ｡☆ﾟ. + ｡*
 * ｡ + ﾟ ｡.ﾟ*｡ﾟ *｡ /"  . |   .|. ゛ ヽ  + *｡ﾟ☆+ ｡ﾟ.｡* ﾟ.
 * . ｡ﾟ☆+ﾟ｡*｡.｡+  (  ∫   ) *.（   ∫  ) ☆+ﾟ｡*｡.｡ .｡* + ｡
 */
export class Nekogami {
    static ELIZABETH = ELIZABETH;   // 色たち
    static BALLOON   = BALLOON;     // ネコに風船
    static NADEGOE   = NADEGOE;     // にゃで声たち

    // ぬこの個性
    #character = {
        TAICHO  : 16,               // 体長 (width)
        TAIKO   : 16,               // 体高 (height)
        ATSU    : 2,                // ぬこ圧
        BALLOON : 'yellow',         // 吹き出しの色み
    };

    /**
     * 変換ロジック
     */
    #neconv = {
        // 左右反転
        nagiso : (pose) => {
            let cheshire = pose.slice();
            for (let h = 0; h < this.taiko; h++) {          // 縦でループ
                for (let w = 0; w < this.taicho; w++) {     // 横でループ
                    cheshire[w + (h * this.taicho)] = pose[((this.taicho - 1) - w) + (h * this.taicho)];
                }
            }
            return cheshire;
        },
        // 要素追加
        feed : (pose, feed) => {
            let cheshire = pose.slice();
            Object.keys(feed).forEach((i) => { cheshire[i] = feed[i]; });
            return cheshire;
        },
    };

    /**
     * ぬこのポーズ
     */
    #pose = {
        default : Array.from({length: this.taicho * this.taiko}, () => null),
    };

    /**
     * ぬこのしぐさ
     */
    #shigusa = SHIGUSA;


     /**
     * コンストラクタ
     * @return void
     */
    constructor() {
        // ぬこおのおののプロパティをまじマージ
        Object.assign(this.#character  , this.CHARACTER);   // ぬこの個性
        Object.assign(this.#neconv     , this.NECONV   );   // 変換ロジック
        Object.assign(this.#pose, HITAI, this.HITAI    );   // デコ (処理の都合上ポーズにまじマージする)
        Object.assign(this.#pose       , this.POSE     );   // ぬこのポーズ
        Object.assign(this.#shigusa    , this.SHIGUSA  );   // ぬこのしぐさ
    }

    /**
     * 体長/体高/ぬこ圧
     * @return int
     */
    get taicho () { return this.#character.TAICHO; }
    get taiko  () { return this.#character.TAIKO ; }
    get atsu   () { return this.#character.ATSU  ; }

    /**
     * 風船の色み
     * @param  string|Object カラーコードorスタイル
     * @return Object
     */
    balloon(color) {
        color = color ?? this.#character.BALLOON;           // オプション、ぬこデフォルトの順にカラーコードを取得
        return BALLOON[color] ?? color;                     // カラーコードからスタイルを取得 (にゃかったらオブジェクトとみにゃしてそのまま返す)
    };

    /**
     * ドット絵を描く
     * @param  string pose ぬこのポーズ
     * @return array
     */
    drew(pose) {
        let cheshire = this.#pose[pose] ?? this.#pose.default;

        // ポーズが変換済みのときはそのまま返す
        if (!Array.isArray(cheshire[0])) return cheshire;

        // 変換ロジックをループ
        cheshire = cheshire.slice();
        for (let i = 1; i < cheshire.length; i++) {
            // 関数のとき
            if (isFunction(this.#neconv[cheshire[i]])) {
                cheshire[0] = this.#neconv[cheshire[i]](cheshire[0]);
                continue;
            }
            // 関数 (引数あり) のとき
            if (Array.isArray(this.#neconv[cheshire[i]]) && isFunction(this.#neconv[cheshire[i][0]])) {
                let neconv  = cheshire[i].shift();
                cheshire[0] = this.#neconv[neconv](cheshire[0], cheshire[i]);
                continue;
            }
        }
        this.#pose[pose] = cheshire[0];
        return this.#pose[pose];
    }

    /**
     * しぐさを取得
     * @param  string shigusa ぬこのしぐさ
     * @return Object
     */
    shigusa(shigusa) {
        let cheshire = this.#shigusa[shigusa] ?? this.#shigusa.default;

        // しぐさが変換済みのときはそのまま返す
        if (cheshire.shigusa) return cheshire;

        // 関数のとき
        if (isFunction(cheshire)) {
            this.#shigusa[shigusa] = cheshire();
        }
        // 関数 (引数あり) のとき
        if (Array.isArray(cheshire) && isFunction(cheshire[0])) {
            let neconv             = cheshire.shift();          // 変換ロジック
            this.#shigusa[shigusa] = neconv(...cheshire);       // 変換する
        }
        return this.#shigusa[shigusa];
    }
}
