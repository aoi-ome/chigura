import { Nekogami } from './Nekogami.js';
/*
 * Chigula.js
 * さばとらぬこ ฅˆ•ﻌ•ˆฅ
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
const BALLOON = 'blue';                 // 吹き出しの色み

// 色たち
const _ = Nekogami.ELIZABETH._;             // null
const B = Nekogami.ELIZABETH.B;             // Black
const E = Nekogami.ELIZABETH.E;             // pEru
const G = Nekogami.ELIZABETH.G;             // dimGray
const g = Nekogami.ELIZABETH.g;             // lightGray
const O = Nekogami.ELIZABETH.O;             // Orange
const p = Nekogami.ELIZABETH.p;             // lightPink
const W = Nekogami.ELIZABETH.W;             // White
const Y = Nekogami.ELIZABETH.Y;             // Yellow (ほんとはgold)

/**
 * ドット絵たち
 */
// バンザイ
const BANZAI = [
    _, _, _, B, B, B, _, _, _, _, B, B, B, _, _, _,
    _, _, B, G, G, G, B, _, _, B, G, G, G, B, _, _,
    _, _, B, G, Y, g, B, B, B, B, g, Y, G, B, _, _,
    _, B, g, g, g, g, g, G, G, g, g, g, g, g, B, _,
    _, B, G, G, g, B, g, G, G, g, B, g, G, G, B, _,
    B, B, B, G, g, B, g, g, g, g, B, g, G, B, B, B,
    _, B, g, p, B, g, g, g, g, g, g, B, p, g, B, _,
    B, B, p, B, Y, B, g, g, g, g, B, Y, B, p, B, B,
    _, B, G, B, g, B, g, g, g, g, B, g, B, G, B, _,
    _, B, g, B, g, g, g, g, g, g, g, g, B, g, B, _,
    B, _, B, g, g, g, g, G, G, g, g, g, g, B, _, _,
    B, _, B, G, G, g, g, g, g, g, g, G, G, B, _, _,
    B, B, B, G, G, g, g, G, G, g, g, G, G, B, _, _,
    _, B, B, g, g, g, G, B, B, G, g, g, g, B, _, _,
    _, _, B, B, Y, Y, B, _, _, B, Y, Y, B, _, _, _,
    _, _, _, B, B, B, _, _, _, _, B, B, B, _, _, _,
];
// ふせ
const FUSE  = [
    _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, G, B, _, _, _, _, B, G, B, _, _, _,
    _, _, B, G, G, g, B, _, _, B, g, G, G, B, _, _,
    _, _, B, G, Y, g, B, B, B, B, g, Y, G, B, _, _,
    _, B, g, g, g, g, g, G, G, g, g, g, g, g, B, _,
    _, B, G, G, g, B, g, G, G, g, B, g, G, G, B, _,
    B, B, B, G, g, B, g, g, g, g, B, g, G, B, B, B,
    _, B, g, O, O, g, g, g, g, g, g, O, O, g, B, _,
    B, B, B, O, O, g, g, g, g, g, g, O, O, B, B, B,
    _, B, G, G, G, g, g, g, g, g, g, G, G, G, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    B, _, _, B, B, g, g, G, G, g, g, B, B, _, _, _,
    B, _, B, g, g, g, g, g, g, g, g, g, g, B, _, _,
    _, B, B, G, G, g, g, B, B, g, g, G, G, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, B, _, _,
];
// へそ天
const HESOTEN = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, G, B, _, _, _, _, B, G, B, _, _, _,
    _, _, B, G, G, g, B, _, _, B, g, G, G, B, _, _,
    _, _, B, G, Y, g, B, B, B, B, g, Y, G, B, _, _,
    _, B, g, g, g, g, g, G, G, g, g, g, g, g, B, _,
    _, B, G, G, g, B, g, G, G, g, B, g, G, G, B, _,
    B, B, B, G, g, B, g, g, g, g, B, g, G, B, B, B,
    _, B, g, O, O, g, g, g, g, g, g, O, O, g, B, _,
    B, B, B, O, O, g, g, g, g, g, g, O, O, B, B, B,
    _, B, G, G, G, g, g, g, g, g, g, G, G, G, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    B, _, _, _, B, B, G, g, g, G, B, B, _, _, _, _,
    B, _, _, B, B, g, g, g, g, g, g, B, B, _, _, _,
    B, B, B, Y, Y, B, g, G, G, g, B, Y, Y, B, _, _,
    _, B, B, G, G, B, g, G, G, g, B, G, G, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, B, _, _,
];
// 段ボールホイホイ
const HOIHOI = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, G, B, _, _, _, _, B, G, B, _, _, _,
    _, _, B, G, G, g, B, _, _, B, g, G, G, B, _, _,
    _, _, B, G, Y, g, B, B, B, B, g, Y, G, B, _, _,
    _, B, g, g, g, g, g, G, G, g, g, g, g, g, B, _,
    _, B, G, G, g, B, g, G, G, g, B, g, G, G, B, _,
    B, B, B, G, g, B, g, g, g, g, B, g, G, B, B, B,
    _, B, g, O, O, g, g, g, g, g, g, O, O, g, B, _,
    B, B, B, O, O, g, g, g, g, g, g, O, O, B, B, B,
    _, B, G, G, G, g, g, g, g, g, g, G, G, G, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    _, _, _, B, E, E, E, W, E, E, E, E, B, _, _, _,
    B, _, _, B, E, E, E, E, W, E, E, E, B, _, _, _,
    B, _, _, B, E, E, E, W, E, E, E, E, B, _, _, _,
    _, B, B, B, E, E, E, E, W, E, E, E, B, _, _, _,
    _, _, _, B, B, B, B, B, B, B, B, B, B, _, _, _,
];
// 香箱座り
const KOBAKO = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, G, B, _, _, _, _, B, G, B, _, _, _,
    _, _, B, G, G, g, B, _, _, B, g, G, G, B, _, _,
    _, _, B, G, Y, g, B, B, B, B, g, Y, G, B, _, _,
    _, B, g, g, g, g, g, G, G, g, g, g, g, g, B, _,
    _, B, G, G, g, B, g, G, G, g, B, g, G, G, B, _,
    B, B, B, G, g, B, g, g, g, g, B, g, G, B, B, B,
    _, B, g, O, O, g, g, g, g, g, g, O, O, g, B, _,
    B, B, B, O, O, g, g, g, g, g, g, O, O, B, B, B,
    _, B, G, G, G, g, g, g, g, g, g, G, G, G, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    B, _, _, B, B, g, g, g, g, g, g, B, B, _, _, _,
    B, _, B, B, g, g, g, G, G, g, g, g, B, B, _, _,
    B, B, B, G, g, B, B, g, g, B, B, g, G, B, _, _,
    _, B, B, G, G, Y, Y, B, B, Y, Y, G, G, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, B, _, _,
];
// おすわり
const OSUWARI = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, G, B, _, _, _, _, B, G, B, _, _, _,
    _, _, B, G, G, g, B, _, _, B, g, G, G, B, _, _,
    _, _, B, G, Y, g, B, B, B, B, g, Y, G, B, _, _,
    _, B, g, g, g, g, g, G, G, g, g, g, g, g, B, _,
    _, B, G, G, g, B, g, G, G, g, B, g, G, G, B, _,
    B, B, B, G, g, B, g, g, g, g, B, g, G, B, B, B,
    _, B, g, O, O, g, g, g, g, g, g, O, O, g, B, _,
    B, B, B, O, O, g, g, g, g, g, g, O, O, B, B, B,
    _, B, G, G, G, g, g, g, g, g, g, G, G, G, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    B, _, _, B, B, g, g, g, g, g, g, B, B, _, _, _,
    B, _, B, B, g, g, g, G, G, g, g, g, B, B, _, _,
    B, B, B, G, G, g, g, g, g, g, g, G, G, B, _, _,
    _, B, B, G, Y, Y, B, g, g, B, Y, Y, G, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, B, _, _,
];
// おて
const OTE = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, G, B, _, _, _, _, B, G, B, _, _, _,
    _, _, B, G, G, g, B, _, _, B, g, G, G, B, _, _,
    _, _, B, G, Y, g, B, B, B, B, g, Y, G, B, _, _,
    _, B, g, g, g, g, g, G, G, g, g, g, g, g, B, _,
    _, B, G, G, g, B, g, G, G, g, B, g, G, G, B, _,
    B, B, B, G, g, B, g, g, g, g, B, g, G, B, B, B,
    _, B, g, O, O, g, g, g, g, g, g, O, O, g, B, _,
    B, B, B, O, O, g, g, g, g, g, B, B, O, B, B, B,
    _, B, G, G, G, g, g, g, g, B, Y, Y, B, G, B, _,
    _, B, B, B, B, B, B, B, B, B, g, g, B, B, _, _,
    B, _, _, B, B, g, g, g, g, g, g, G, B, B, _, _,
    B, _, B, B, g, g, g, G, G, g, g, G, G, B, _, _,
    B, B, B, G, G, g, g, g, g, g, g, G, G, B, _, _,
    _, B, B, G, Y, Y, B, g, g, B, Y, Y, B, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, _, _, _,
];
// うしろすがた
const USHIRO = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, G, B, _, _, _, _, B, G, B, _, _, _,
    _, _, B, G, G, G, B, _, _, B, G, G, G, B, _, _,
    _, _, B, G, g, g, B, B, B, B, g, g, G, B, _, _,
    _, B, g, g, g, g, g, G, G, g, g, g, g, g, B, _,
    _, B, G, G, g, g, g, g, g, g, g, g, G, G, B, _,
    B, B, G, G, g, g, g, B, g, g, g, g, G, G, B, B,
    _, B, g, g, g, g, g, g, B, g, g, g, g, g, B, _,
    B, B, G, G, g, g, g, g, B, g, g, g, G, G, B, B,
    _, B, G, G, G, g, g, B, g, g, g, G, G, G, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    _, _, _, _, B, B, g, B, g, g, B, B, _, _, _, _,
    _, _, _, B, B, G, g, B, B, g, G, B, B, _, _, _,
    _, _, B, G, g, g, g, g, g, g, g, g, G, B, _, _,
    _, _, B, G, G, g, g, B, B, g, g, G, G, B, _, _,
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
            g, g, g,
            B, B, B,
        ],
    },
    // まばたき
    tsumurime2 : {
        width  : 3,
        height : 2,
        image  : [
            g, g, g,
            B, B, B,
        ],
    },
    // つり目
    tsurime1 : {
        width  : 2,
        height : 2,
        image  : [
            B, g,
            g, B,
        ],
    },
    tsurime2 : {
        width  : 2,
        height : 2,
        image  : [
            g, B,
            B, g,
        ],
    },
    // よわり目
    yowarime1 : {
        width  : 2,
        height : 3,
        image  : [
            B, g,
            g, B,
            B, g,
        ],
    },
    yowarime2 : {
        width  : 2,
        height : 3,
        image  : [
            g, B,
            B, g,
            g, B,
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
