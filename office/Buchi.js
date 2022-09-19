import { Nekogami } from './Nekogami.js';
/*
 * Chigula.js
 * くろぶちぬこ ฅˆ•ﻌ•ˆฅ
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
const BALLOON = 'green';                // 吹き出しの色み

// 色たち
const _ = Nekogami.ELIZABETH._;             // null
const B = Nekogami.ELIZABETH.B;             // Black
const G = Nekogami.ELIZABETH.G;             // dimGray
const g = Nekogami.ELIZABETH.g;             // lightGray
const O = Nekogami.ELIZABETH.O;             // Orange
const p = Nekogami.ELIZABETH.p;             // lightPink
const R = Nekogami.ELIZABETH.R;             // Red
const T = Nekogami.ELIZABETH.T;             // Tan
const W = Nekogami.ELIZABETH.W;             // White

/**
 * ドット絵たち
 */
// バンザイ
const BANZAI = [
    _, _, _, B, B, B, _, _, _, _, B, B, B, _, _, _,
    _, _, B, G, G, G, B, _, _, B, G, G, G, B, _, _,
    _, _, B, G, p, G, B, B, B, B, G, p, G, B, _, _,
    _, B, G, p, p, W, G, G, G, G, W, p, p, G, B, _,
    _, B, G, W, W, B, W, G, G, W, B, W, W, G, B, _,
    B, B, B, W, W, B, W, g, g, W, B, W, W, B, B, B,
    _, B, W, O, B, W, W, W, W, W, W, B, O, W, B, _,
    B, B, O, B, p, B, W, W, W, W, B, p, B, O, B, B,
    _, B, W, B, W, B, W, W, W, W, B, W, B, W, B, _,
    _, B, W, B, W, W, W, W, W, W, W, W, B, W, B, _,
    B, _, B, G, W, W, G, G, G, G, W, W, G, B, _, _,
    B, _, B, G, W, W, W, G, G, W, W, W, G, B, _, _,
    B, B, B, G, G, W, W, W, W, W, W, G, G, B, _, _,
    _, B, B, G, G, G, W, B, B, W, G, G, G, B, _, _,
    _, _, B, B, p, p, B, _, _, B, p, p, B, _, _, _,
    _, _, _, B, B, B, _, _, _, _, B, B, B, _, _, _,
];
// ふせ
const FUSE  = [
    _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, G, B, _, _, _, _, B, G, B, _, _, _,
    _, _, B, G, p, G, B, _, _, B, G, p, G, B, _, _,
    _, _, B, p, p, G, B, B, B, B, G, p, p, B, _, _,
    _, B, G, G, W, W, G, G, G, G, W, W, G, G, B, _,
    _, B, G, W, W, B, W, G, G, W, B, W, W, G, B, _,
    B, B, B, W, W, B, W, g, g, W, B, W, W, B, B, B,
    _, B, G, O, O, W, W, W, W, W, W, O, O, G, B, _,
    B, B, B, O, O, W, W, W, W, W, W, O, O, B, B, B,
    _, B, G, G, W, W, W, W, W, W, W, W, G, G, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    B, _, _, B, B, G, W, R, R, W, G, B, B, _, _, _,
    B, _, B, G, W, W, W, W, W, W, W, W, G, B, _, _,
    _, B, B, G, G, p, p, B, B, p, p, G, G, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, B, _, _,
];
// へそ天
const HESOTEN = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, G, B, _, _, _, _, B, G, B, _, _, _,
    _, _, B, G, p, G, B, _, _, B, G, p, G, B, _, _,
    _, _, B, p, p, G, B, B, B, B, G, p, p, B, _, _,
    _, B, G, G, W, W, G, G, G, G, W, W, G, G, B, _,
    _, B, G, W, W, B, W, G, G, W, B, W, W, G, B, _,
    B, B, B, W, W, B, W, g, g, W, B, W, W, B, B, B,
    _, B, G, O, O, W, W, W, W, W, W, O, O, G, B, _,
    B, B, B, O, O, W, W, W, W, W, W, O, O, B, B, B,
    _, B, G, G, W, W, W, W, W, W, W, W, G, G, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    B, _, _, _, B, B, W, R, R, W, B, B, _, _, _, _,
    B, _, _, B, B, G, G, W, W, G, G, B, B, _, _, _,
    B, B, B, W, W, B, G, W, W, G, B, W, W, B, _, _,
    _, B, B, G, G, B, W, W, W, W, B, G, G, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, B, _, _,
];
// 段ボールホイホイ
const HOIHOI = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, G, B, _, _, _, _, B, G, B, _, _, _,
    _, _, B, G, p, G, B, _, _, B, G, p, G, B, _, _,
    _, _, B, p, p, G, B, B, B, B, G, p, p, B, _, _,
    _, B, G, G, W, W, G, G, G, G, W, W, G, G, B, _,
    _, B, G, W, W, B, W, G, G, W, B, W, W, G, B, _,
    B, B, B, W, W, B, W, g, g, W, B, W, W, B, B, B,
    _, B, G, O, O, W, W, W, W, W, W, O, O, G, B, _,
    B, B, B, O, O, W, W, W, W, W, W, O, O, B, B, B,
    _, B, G, G, W, W, W, W, W, W, W, W, G, G, B, _,
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
    _, _, B, G, p, G, B, _, _, B, G, p, G, B, _, _,
    _, _, B, p, p, G, B, B, B, B, G, p, p, B, _, _,
    _, B, G, G, W, W, G, G, G, G, W, W, G, G, B, _,
    _, B, G, W, W, B, W, G, G, W, B, W, W, G, B, _,
    B, B, B, W, W, B, W, g, g, W, B, W, W, B, B, B,
    _, B, G, O, O, W, W, W, W, W, W, O, O, G, B, _,
    B, B, B, O, O, W, W, W, W, W, W, O, O, B, B, B,
    _, B, G, G, W, W, W, W, W, W, W, W, G, G, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    B, _, _, B, B, G, W, R, R, W, G, B, B, _, _, _,
    B, _, B, B, W, W, W, W, W, W, W, W, B, B, _, _,
    B, B, B, G, W, B, B, W, W, B, B, W, G, B, _, _,
    _, B, B, G, G, p, p, B, B, p, p, G, G, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, B, _, _,
];
// おすわり
const OSUWARI = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, G, B, _, _, _, _, B, G, B, _, _, _,
    _, _, B, G, p, G, B, _, _, B, G, p, G, B, _, _,
    _, _, B, p, p, G, B, B, B, B, G, p, p, B, _, _,
    _, B, G, G, W, W, G, G, G, G, W, W, G, G, B, _,
    _, B, G, W, W, B, W, G, G, W, B, W, W, G, B, _,
    B, B, B, W, W, B, W, g, g, W, B, W, W, B, B, B,
    _, B, G, O, O, W, W, W, W, W, W, O, O, G, B, _,
    B, B, B, O, O, W, W, W, W, W, W, O, O, B, B, B,
    _, B, G, G, W, W, W, W, W, W, W, W, G, G, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    B, _, _, B, B, G, W, R, R, W, G, B, B, _, _, _,
    B, _, B, B, G, W, W, W, W, W, W, G, B, B, _, _,
    B, B, B, G, G, W, W, W, W, W, W, G, G, B, _, _,
    _, B, B, G, p, p, B, W, W, B, p, p, G, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, B, _, _,
];
// おて
const OTE = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, G, B, _, _, _, _, B, G, B, _, _, _,
    _, _, B, G, p, G, B, _, _, B, G, p, G, B, _, _,
    _, _, B, p, p, G, B, B, B, B, G, p, p, B, _, _,
    _, B, G, G, W, W, G, G, G, G, W, W, G, G, B, _,
    _, B, G, W, W, B, W, G, G, W, B, W, W, G, B, _,
    B, B, B, W, W, B, W, g, g, W, B, W, W, B, B, B,
    _, B, G, O, O, W, W, W, W, W, W, O, O, G, B, _,
    B, B, B, O, O, W, W, W, W, W, B, B, O, B, B, B,
    _, B, G, G, W, W, W, W, W, B, p, p, B, G, B, _,
    _, B, B, B, B, B, B, B, B, B, G, G, B, B, _, _,
    B, _, _, B, B, W, W, R, R, W, G, G, B, B, _, _,
    B, _, B, B, G, W, W, W, W, W, W, G, G, B, _, _,
    B, B, B, G, G, W, W, W, W, W, W, G, G, B, _, _,
    _, B, B, G, p, p, B, W, W, B, p, p, B, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, _, _, _,
];
// うしろすがた
const USHIRO = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, G, B, _, _, _, _, B, G, B, _, _, _,
    _, _, B, G, G, G, B, _, _, B, G, G, G, B, _, _,
    _, _, B, G, W, W, B, B, B, B, W, W, G, B, _, _,
    _, B, G, W, W, W, W, G, G, W, W, W, W, G, B, _,
    _, B, W, W, W, W, W, W, W, W, W, W, W, W, B, _,
    B, B, W, W, W, W, G, B, G, G, W, W, W, W, B, B,
    _, B, G, W, W, G, G, G, B, G, G, W, W, G, B, _,
    B, B, G, G, W, W, G, G, B, G, W, W, G, G, B, B,
    _, B, G, G, W, W, W, B, W, W, W, W, G, G, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    _, _, _, _, B, B, W, B, W, W, B, B, _, _, _, _,
    _, _, _, B, B, G, W, B, B, W, G, B, B, _, _, _,
    _, _, B, G, G, G, W, W, W, W, G, G, G, B, _, _,
    _, _, B, G, G, W, W, B, B, W, W, G, G, B, _, _,
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
            W, W, W,
            B, B, B,
        ],
    },
    tsumurime2 : {
        width  : 3,
        height : 2,
        image  : [
            W, W, W,
            B, B, B,
        ],
    },
    // つり目
    tsurime1 : {
        width  : 2,
        height : 2,
        image  : [
            B, W,
            W, B,
        ],
    },
    tsurime2 : {
        width  : 2,
        height : 2,
        image  : [
            W, B,
            B, W,
        ],
    },
    // よわり目
    yowarime1 : {
        width  : 2,
        height : 3,
        image  : [
            B, W,
            W, B,
            B, W,
        ],
    },
    yowarime2 : {
        width  : 2,
        height : 3,
        image  : [
            W, B,
            B, W,
            W, B,
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
