import { Nekogami } from './Nekogami.js';
/*
 * Chigula.js
 * ハチワレぬこ ฅˆ•ﻌ•ˆฅ
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
const BALLOON = 'purple';               // 吹き出しの色み

// 色たち
const _ = Nekogami.ELIZABETH._;             // null
const B = Nekogami.ELIZABETH.B;             // Black
const g = Nekogami.ELIZABETH.g;             // lightGray
const N = Nekogami.ELIZABETH.N;             // saddlebrowN
const P = Nekogami.ELIZABETH.P;             // hotPink
const R = Nekogami.ELIZABETH.R;             // Red
const U = Nekogami.ELIZABETH.U;             // mediumpUrple
const W = Nekogami.ELIZABETH.W;             // White
const Y = Nekogami.ELIZABETH.Y;             // Yellow (ほんとはgold)

/**
 * ドット絵たち
 */
// バンザイ
const BANZAI = [
    _, _, _, B, B, B, _, _, _, _, B, B, B, _, _, _,
    _, _, B, U, U, U, B, _, _, B, U, U, U, B, _, _,
    _, _, B, U, Y, g, B, B, B, B, g, Y, U, B, _, _,
    _, B, g, g, g, g, g, W, W, g, g, g, g, g, B, _,
    _, B, g, g, g, B, W, W, W, W, B, g, g, g, B, _,
    B, B, B, g, W, B, W, W, W, W, B, W, g, B, B, B,
    _, B, g, P, B, W, W, W, W, W, W, B, P, g, B, _,
    B, B, P, B, W, B, W, W, W, W, B, W, B, P, B, B,
    _, B, g, B, g, B, W, W, W, W, B, g, B, g, B, _,
    _, B, g, B, g, g, W, W, W, W, g, g, B, g, B, _,
    B, _, B, g, g, W, W, g, g, W, W, g, g, B, _, _,
    B, _, B, B, g, g, W, W, W, W, g, g, B, B, _, _,
    B, B, B, g, g, g, g, W, W, g, g, g, g, B, _, _,
    _, B, B, g, g, g, g, B, B, g, g, g, g, B, _, _,
    _, _, B, B, W, W, B, _, _, B, W, W, B, _, _, _,
    _, _, _, B, B, B, _, _, _, _, B, B, B, _, _, _,
];
// ふせ
const FUSE  = [
    _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, U, B, _, _, _, _, B, U, B, _, _, _,
    _, _, B, U, U, U, B, _, _, B, U, U, U, B, _, _,
    _, _, B, U, Y, g, B, B, B, B, g, Y, U, B, _, _,
    _, B, g, g, g, g, g, W, W, g, g, g, g, g, B, _,
    _, B, g, g, g, B, W, W, W, W, B, g, g, g, B, _,
    B, B, B, g, W, B, W, W, W, W, B, W, g, B, B, B,
    _, B, g, P, P, W, W, W, W, W, W, P, P, g, B, _,
    B, B, B, P, P, W, W, W, W, W, W, P, P, B, B, B,
    _, B, Y, g, W, W, W, W, W, W, W, W, g, Y, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    B, _, _, B, B, g, g, R, R, g, g, B, B, _, _, _,
    B, _, B, g, g, g, g, W, W, g, g, g, g, B, _, _,
    _, B, B, W, W, g, g, B, B, g, g, W, W, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, B, _, _,
];
// へそ天
const HESOTEN = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, U, B, _, _, _, _, B, U, B, _, _, _,
    _, _, B, U, U, U, B, _, _, B, U, U, U, B, _, _,
    _, _, B, U, Y, g, B, B, B, B, g, Y, U, B, _, _,
    _, B, g, g, g, g, g, W, W, g, g, g, g, g, B, _,
    _, B, g, g, g, B, W, W, W, W, B, g, g, g, B, _,
    B, B, B, g, W, B, W, W, W, W, B, W, g, B, B, B,
    _, B, g, P, P, W, W, W, W, W, W, P, P, g, B, _,
    B, B, B, P, P, W, W, W, W, W, W, P, P, B, B, B,
    _, B, Y, g, W, W, W, W, W, W, W, W, g, Y, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    B, _, _, _, B, B, g, R, R, g, B, B, _, _, _, _,
    B, _, _, B, B, g, g, W, W, g, g, B, B, _, _, _,
    B, B, B, W, W, B, g, W, W, g, B, W, W, B, _, _,
    _, B, B, g, g, B, g, g, g, g, B, g, g, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, B, _, _,
];
// 段ボールホイホイ
const HOIHOI = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, U, B, _, _, _, _, B, U, B, _, _, _,
    _, _, B, U, U, U, B, _, _, B, U, U, U, B, _, _,
    _, _, B, U, Y, g, B, B, B, B, g, Y, U, B, _, _,
    _, B, g, g, g, g, g, W, W, g, g, g, g, g, B, _,
    _, B, g, g, g, B, W, W, W, W, B, g, g, g, B, _,
    B, B, B, g, W, B, W, W, W, W, B, W, g, B, B, B,
    _, B, g, P, P, W, W, W, W, W, W, P, P, g, B, _,
    B, B, B, P, P, W, W, W, W, W, W, P, P, B, B, B,
    _, B, Y, g, W, W, W, W, W, W, W, W, g, Y, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    _, _, _, B, N, N, N, W, N, N, N, N, B, _, _, _,
    B, _, _, B, N, N, N, N, W, N, N, N, B, _, _, _,
    B, _, _, B, N, N, N, W, N, N, N, N, B, _, _, _,
    _, B, B, B, N, N, N, N, W, N, N, N, B, _, _, _,
    _, _, _, B, B, B, B, B, B, B, B, B, B, _, _, _,
];
// 香箱座り
const KOBAKO = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, U, B, _, _, _, _, B, U, B, _, _, _,
    _, _, B, U, U, U, B, _, _, B, U, U, U, B, _, _,
    _, _, B, U, Y, g, B, B, B, B, g, Y, U, B, _, _,
    _, B, g, g, g, g, g, W, W, g, g, g, g, g, B, _,
    _, B, g, g, g, B, W, W, W, W, B, g, g, g, B, _,
    B, B, B, g, W, B, W, W, W, W, B, W, g, B, B, B,
    _, B, g, P, P, W, W, W, W, W, W, P, P, g, B, _,
    B, B, B, P, P, W, W, W, W, W, W, P, P, B, B, B,
    _, B, Y, g, W, W, W, W, W, W, W, W, g, Y, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    B, _, _, B, B, g, g, R, R, g, g, B, B, _, _, _,
    B, _, B, B, g, g, g, W, W, g, g, g, B, B, _, _,
    B, B, B, g, g, B, B, g, g, B, B, g, g, B, _, _,
    _, B, B, W, g, g, W, B, B, W, g, g, W, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, B, _, _,
];
// おすわり
const OSUWARI = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, U, B, _, _, _, _, B, U, B, _, _, _,
    _, _, B, U, U, U, B, _, _, B, U, U, U, B, _, _,
    _, _, B, U, Y, g, B, B, B, B, g, Y, U, B, _, _,
    _, B, g, g, g, g, g, W, W, g, g, g, g, g, B, _,
    _, B, g, g, g, B, W, W, W, W, B, g, g, g, B, _,
    B, B, B, g, W, B, W, W, W, W, B, W, g, B, B, B,
    _, B, g, P, P, W, W, W, W, W, W, P, P, g, B, _,
    B, B, B, P, P, W, W, W, W, W, W, P, P, B, B, B,
    _, B, Y, g, W, W, W, W, W, W, W, W, g, Y, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    B, _, _, B, B, g, g, R, R, g, g, B, B, _, _, _,
    B, _, B, B, g, g, g, W, W, g, g, g, B, B, _, _,
    B, B, B, g, g, g, g, W, W, g, g, g, g, B, _, _,
    _, B, B, g, W, W, B, g, g, B, W, W, g, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, B, _, _,
];
// おて
const OTE = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, U, B, _, _, _, _, B, U, B, _, _, _,
    _, _, B, U, U, U, B, _, _, B, U, U, U, B, _, _,
    _, _, B, U, Y, g, B, B, B, B, g, Y, U, B, _, _,
    _, B, g, g, g, g, g, W, W, g, g, g, g, g, B, _,
    _, B, g, g, g, B, W, W, W, W, B, g, g, g, B, _,
    B, B, B, g, W, B, W, W, W, W, B, W, g, B, B, B,
    _, B, g, P, P, W, W, W, W, W, W, P, P, g, B, _,
    B, B, B, P, P, W, W, W, W, W, B, B, P, B, B, B,
    _, B, Y, g, W, W, W, W, W, B, W, W, B, Y, B, _,
    _, B, B, B, B, B, B, B, B, B, g, g, B, B, _, _,
    B, _, _, B, B, g, g, R, R, g, g, g, B, B, _, _,
    B, _, B, B, g, g, g, W, W, g, g, g, g, B, _, _,
    B, B, B, g, g, g, g, g, g, g, g, g, g, B, _, _,
    _, B, B, g, W, W, B, g, g, B, W, W, B, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, _, _, _,
];
// うしろすがた
const USHIRO = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, U, B, _, _, _, _, B, U, B, _, _, _,
    _, _, B, U, U, U, B, _, _, B, U, U, U, B, _, _,
    _, _, B, U, g, g, B, B, B, B, g, g, U, B, _, _,
    _, B, g, g, g, g, W, W, W, W, g, g, g, g, B, _,
    _, B, g, g, g, g, g, W, W, g, g, g, g, g, B, _,
    B, B, g, g, g, g, g, B, g, g, g, g, g, g, B, B,
    _, B, W, g, g, g, g, g, B, g, g, g, g, W, B, _,
    B, B, W, W, g, g, g, g, B, g, g, g, W, W, B, B,
    _, B, W, W, W, g, g, B, g, g, g, W, W, W, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    _, _, _, _, B, B, g, B, g, g, B, B, _, _, _, _,
    _, _, _, B, B, g, g, B, B, g, g, B, B, _, _, _,
    _, _, B, W, W, g, g, g, g, g, g, W, W, B, _, _,
    _, _, B, W, W, W, g, B, B, g, W, W, W, B, _, _,
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
            g, g, W,
            B, B, B,
        ],
    },
    tsumurime2 : {
        width  : 3,
        height : 2,
        image  : [
            W, g, g,
            B, B, B,
        ],
    },
    // つり目
    tsurime1 : {
        width  : 2,
        height : 2,
        image  : [
            B, g,
            W, B,
        ],
    },
    tsurime2 : {
        width  : 2,
        height : 2,
        image  : [
            g, B,
            B, W,
        ],
    },
    // よわり目
    yowarime1 : {
        width  : 2,
        height : 3,
        image  : [
            B, g,
            W, B,
            B, W,
        ],
    },
    yowarime2 : {
        width  : 2,
        height : 3,
        image  : [
            g, B,
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
