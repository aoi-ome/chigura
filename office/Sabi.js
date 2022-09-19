import { Nekogami } from './Nekogami.js';
/*
 * Chigula.js
 * さびぬこ ฅˆ•ﻌ•ˆฅ
 */
export class Nuko extends Nekogami {
    get CHARACTER () { return {
        TAICHO  : TAICHO,               // 体長 (width)
        TAIKO   : TAIKO,                // 体高 (height)
        ATSU    : ATSU,                 // ぬこ圧
        BALLOON : BALLOON,              // 吹き出しの色み
    }};

    get NECONV () { return NECONV;  };  // 変換ロジック
    get HITAI  () { return HITAI;   };  // デコ
    get POSE   () { return POSE;    };  // ぬこのポーズ
    get SHIGUSA() { return SHIGUSA; };  // しぐさ
}

/***************************
 * ここから編集OKにゃん ฅˆ•ﻌ•ˆฅ
 ***************************/

// ぬこの個性
const TAICHO  = 16;                     // 体長 (width)
const TAIKO   = 16;                     // 体高 (height)
const ATSU    = 2;                      // ぬこ圧
const BALLOON = 'red';                  // 吹き出しの色み

// 色たち
const _ = Nekogami.ELIZABETH._;             // null
const B = Nekogami.ELIZABETH.B;             // Black
const E = Nekogami.ELIZABETH.E;             // pEru
const G = Nekogami.ELIZABETH.G;             // dimGray
const p = Nekogami.ELIZABETH.p;             // lightPink
const T = Nekogami.ELIZABETH.T;             // Tan
const W = Nekogami.ELIZABETH.W;             // White
const Y = Nekogami.ELIZABETH.Y;             // Yellow (ほんとはgold)

/**
 * ドット絵たち
 */
// バンザイ
const BANZAI = [
    _, _, _, B, B, B, _, _, _, _, B, B, B, _, _, _,
    _, _, B, G, G, G, B, _, _, B, G, G, G, B, _, _,
    _, _, B, G, p, E, B, B, B, B, E, p, G, B, _, _,
    _, B, G, E, E, E, G, G, G, G, E, E, E, G, B, _,
    _, B, G, G, E, B, E, G, G, E, B, E, G, G, B, _,
    B, B, B, G, E, B, E, E, E, E, B, E, G, B, B, B,
    _, B, G, Y, B, E, E, E, E, E, E, B, Y, G, B, _,
    B, B, G, B, Y, B, E, E, E, E, B, Y, B, G, B, B,
    _, B, E, B, E, B, E, E, E, E, B, E, B, E, B, _,
    _, B, E, B, E, E, E, E, E, E, E, E, B, E, B, _,
    B, _, B, E, E, E, E, G, G, E, E, E, E, B, _, _,
    B, _, B, G, E, E, E, G, G, E, E, E, G, B, _, _,
    B, B, B, G, G, E, E, E, E, E, E, G, G, B, _, _,
    _, B, B, G, G, E, G, B, B, G, E, G, G, B, _, _,
    _, _, B, B, Y, Y, B, _, _, B, Y, Y, B, _, _, _,
    _, _, _, B, B, B, _, _, _, _, B, B, B, _, _, _,
];
// ふせ
const FUSE  = [
    _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, G, B, _, _, _, _, B, G, B, _, _, _,
    _, _, B, G, G, G, B, _, _, B, G, G, G, B, _, _,
    _, _, B, G, p, E, B, B, B, B, E, p, G, B, _, _,
    _, B, G, E, E, E, G, G, G, G, E, E, E, G, B, _,
    _, B, G, G, E, B, E, G, G, E, B, E, G, G, B, _,
    B, B, B, G, E, B, E, E, E, E, B, E, G, B, B, B,
    _, B, G, Y, Y, E, E, E, E, E, E, Y, Y, G, B, _,
    B, B, B, Y, Y, E, E, E, E, E, E, Y, Y, B, B, B,
    _, B, G, G, E, E, E, E, E, E, E, E, G, G, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    B, _, _, B, B, E, E, G, G, E, E, B, B, _, _, _,
    B, _, B, E, E, E, E, E, E, E, E, E, E, B, _, _,
    _, B, B, G, G, E, E, B, B, E, E, G, G, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, B, _, _,
];
// へそ天
const HESOTEN = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, G, B, _, _, _, _, B, G, B, _, _, _,
    _, _, B, G, G, G, B, _, _, B, G, G, G, B, _, _,
    _, _, B, G, p, E, B, B, B, B, E, p, G, B, _, _,
    _, B, G, E, E, E, G, G, G, G, E, E, E, G, B, _,
    _, B, G, G, E, B, E, G, G, E, B, E, G, G, B, _,
    B, B, B, G, E, B, E, E, E, E, B, E, G, B, B, B,
    _, B, G, Y, Y, E, E, E, E, E, E, Y, Y, G, B, _,
    B, B, B, Y, Y, E, E, E, E, E, E, Y, Y, B, B, B,
    _, B, G, G, E, E, E, E, E, E, E, E, G, G, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    B, _, _, _, B, B, E, G, G, E, B, B, _, _, _, _,
    B, _, _, B, B, E, E, G, G, E, E, B, B, _, _, _,
    B, B, B, Y, Y, B, E, E, E, E, B, Y, Y, B, _, _,
    _, B, B, E, E, B, G, E, E, G, B, E, E, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, B, _, _,
];
// 段ボールホイホイ
const HOIHOI = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, G, B, _, _, _, _, B, G, B, _, _, _,
    _, _, B, G, G, G, B, _, _, B, G, G, G, B, _, _,
    _, _, B, G, p, E, B, B, B, B, E, p, G, B, _, _,
    _, B, G, E, E, E, G, G, G, G, E, E, E, G, B, _,
    _, B, G, G, E, B, E, G, G, E, B, E, G, G, B, _,
    B, B, B, G, E, B, E, E, E, E, B, E, G, B, B, B,
    _, B, G, Y, Y, E, E, E, E, E, E, Y, Y, G, B, _,
    B, B, B, Y, Y, E, E, E, E, E, E, Y, Y, B, B, B,
    _, B, G, G, E, E, E, E, E, E, E, E, G, G, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    _, _, _, B, T, T, T, W, T, T, T, T, B, _, _, _,
    B, _, _, B, T, T, T, T, W, T, T, T, B, _, _, _,
    B, _, _, B, T, T, T, W, T, T, T, T, B, _, _, _,
    _, B, B, B, T, T, T, T, W, T, T, T, B, _, _, _,
    _, _, _, B, B, B, B, B, B, B, B, B, B, _, _, _,
];
// 香箱座り
const KOBAKO = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, G, B, _, _, _, _, B, G, B, _, _, _,
    _, _, B, G, G, G, B, _, _, B, G, G, G, B, _, _,
    _, _, B, G, p, E, B, B, B, B, E, p, G, B, _, _,
    _, B, G, E, E, E, G, G, G, G, E, E, E, G, B, _,
    _, B, G, G, E, B, E, G, G, E, B, E, G, G, B, _,
    B, B, B, G, E, B, E, E, E, E, B, E, G, B, B, B,
    _, B, G, Y, Y, E, E, E, E, E, E, Y, Y, G, B, _,
    B, B, B, Y, Y, E, E, E, E, E, E, Y, Y, B, B, B,
    _, B, G, G, E, E, E, E, E, E, E, E, G, G, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    B, _, _, B, B, E, E, G, G, E, E, B, B, _, _, _,
    B, _, B, B, E, E, E, E, E, E, E, E, B, B, _, _,
    B, B, B, G, E, B, B, E, E, B, B, E, G, B, _, _,
    _, B, B, G, G, Y, Y, B, B, Y, Y, G, G, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, B, _, _,
];
// おすわり
const OSUWARI = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, G, B, _, _, _, _, B, G, B, _, _, _,
    _, _, B, G, G, G, B, _, _, B, G, G, G, B, _, _,
    _, _, B, G, p, E, B, B, B, B, E, p, G, B, _, _,
    _, B, G, E, E, E, G, G, G, G, E, E, E, G, B, _,
    _, B, G, G, E, B, E, G, G, E, B, E, G, G, B, _,
    B, B, B, G, E, B, E, E, E, E, B, E, G, B, B, B,
    _, B, G, Y, Y, E, E, E, E, E, E, Y, Y, G, B, _,
    B, B, B, Y, Y, E, E, E, E, E, E, Y, Y, B, B, B,
    _, B, G, G, E, E, E, E, E, E, E, E, G, G, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    B, _, _, B, B, E, E, G, G, E, E, B, B, _, _, _,
    B, _, B, B, E, E, E, G, G, E, E, E, B, B, _, _,
    B, B, B, G, G, E, E, E, E, E, E, G, G, B, _, _,
    _, B, B, G, Y, Y, B, E, E, B, Y, Y, G, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, B, _, _,
];
// おて
const OTE = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, G, B, _, _, _, _, B, G, B, _, _, _,
    _, _, B, G, G, G, B, _, _, B, G, G, G, B, _, _,
    _, _, B, G, p, E, B, B, B, B, E, p, G, B, _, _,
    _, B, G, E, E, E, G, G, G, G, E, E, E, G, B, _,
    _, B, G, G, E, B, E, G, G, E, B, E, G, G, B, _,
    B, B, B, G, E, B, E, E, E, E, B, E, G, B, B, B,
    _, B, G, Y, Y, E, E, E, E, E, E, Y, Y, G, B, _,
    B, B, B, Y, Y, E, E, E, E, E, B, B, Y, B, B, B,
    _, B, G, G, E, E, E, E, E, B, Y, Y, B, G, B, _,
    _, B, B, B, B, B, B, B, B, B, E, E, B, B, _, _,
    B, _, _, B, B, E, E, G, G, E, E, G, B, B, _, _,
    B, _, B, B, E, E, E, G, G, E, E, G, G, B, _, _,
    B, B, B, G, G, E, E, E, E, E, E, G, G, B, _, _,
    _, B, B, G, Y, Y, B, E, E, B, Y, Y, B, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, _, _, _,
];
// うしろすがた
const USHIRO = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, G, B, _, _, _, _, B, G, B, _, _, _,
    _, _, B, G, G, G, B, _, _, B, G, G, G, B, _, _,
    _, _, B, G, E, E, B, B, B, B, E, E, G, B, _, _,
    _, B, G, G, E, E, E, G, G, E, E, E, G, G, B, _,
    _, B, G, E, E, E, E, E, E, E, E, E, E, G, B, _,
    B, B, E, E, E, E, E, B, E, E, E, E, E, E, B, B,
    _, B, E, E, E, E, E, E, B, E, E, E, E, E, B, _,
    B, B, G, G, E, E, E, E, B, E, E, E, G, G, B, B,
    _, B, G, G, G, E, E, B, E, E, E, G, G, G, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    _, _, _, _, B, B, E, B, E, E, B, B, _, _, _, _,
    _, _, _, B, B, G, E, B, B, E, G, B, B, _, _, _,
    _, _, B, G, E, E, E, E, E, E, E, E, G, B, _, _,
    _, _, B, G, G, E, E, B, B, E, E, G, G, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, B, _, _,
];

/**
 * 変換ロジックたち
 */
const NECONV = {};

/**
 * デコたち
 */
const HITAI = {
    // まばたき
    tsumurime1 : {
        width  : 3,
        height : 2,
        image  : [
            E, E, E,
            B, B, B,
        ],
    },
    tsumurime2 : {
        width  : 3,
        height : 2,
        image  : [
            E, E, E,
            B, B, B,
        ],
    },
    // つり目
    tsurime1 : {
        width  : 2,
        height : 2,
        image  : [
            B, E,
            E, B,
        ],
    },
    tsurime2 : {
        width  : 2,
        height : 2,
        image  : [
            E, B,
            B, E,
        ],
    },
    // よわり目
    yowarime1 : {
        width  : 2,
        height : 3,
        image  : [
            B, E,
            E, B,
            B, E,
        ],
    },
    yowarime2 : {
        width  : 2,
        height : 3,
        image  : [
            E, B,
            B, E,
            E, B,
        ],
    },
};

/**
 * ぬこのポーズ
 */
const POSE = {
    banzai1  :  BANZAI,                 // バンザイ
    banzai2  : [BANZAI, 'nagiso'],      // バンザイ (反転)
    fuse1    :  FUSE,                   // ふせ
    fuse2    : [FUSE, 'nagiso'],        // ふせ (反転)
    hesoten1 :  HESOTEN,                // へそ天
    hesoten2 : [HESOTEN, 'nagiso'],     // へそ天 (反転)
    hoihoi1  :  HOIHOI,                 // 段ボールホイホイ
    hoihoi2  : [HOIHOI, 'nagiso'],      // 段ボールホイホイ (反転)
    kobako1  :  KOBAKO,                 // 香箱座り
    kobako2  : [KOBAKO, 'nagiso'],      // 香箱座り (反転)
    osuwari1 :  OSUWARI,                // おすわり
    osuwari2 : [OSUWARI, 'nagiso'],     // おすわり (反転)
    ote1     :  OTE,                    // おて
    ote2     : [OTE, 'nagiso'],         // おて (反転)
    ushiro1  :  USHIRO,                 // うしろすがた
    ushiro2  : [USHIRO, 'nagiso'],      // うしろすがた (反転)
};

/**
 * ぬこのしぐさ
 */
const SHIGUSA = {};

/***************************
 * ここまで編集OKにゃん ฅˆ•ﻌ•ˆฅ
 ***************************/
