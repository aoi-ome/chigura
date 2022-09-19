import { Nekogami } from './Nekogami.js';
/*
 * Chigula.js
 * しろぬこ ฅˆ•ﻌ•ˆฅ
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
const BALLOON = 'yellow';               // 吹き出しの色み

// 色たち
const _ = Nekogami.ELIZABETH._;             // null
const B = Nekogami.ELIZABETH.B;             // Black
const N = Nekogami.ELIZABETH.N;             // saddlebrowN
const P = Nekogami.ELIZABETH.P;             // hotPink
const R = Nekogami.ELIZABETH.R;             // Red
const W = Nekogami.ELIZABETH.W;             // White
const Y = Nekogami.ELIZABETH.Y;             // Yellow (ほんとはgold)

/**
 * ドット絵たち
 */
// バンザイ
const BANZAI = [
    _, _, _, B, B, B, _, _, _, _, B, B, B, _, _, _,
    _, _, B, Y, Y, Y, B, _, _, B, Y, Y, Y, B, _, _,
    _, _, B, Y, W, W, B, B, B, B, W, W, Y, B, _, _,
    _, B, W, W, W, W, W, W, W, W, W, W, W, W, B, _,
    _, B, W, W, W, B, W, W, W, W, B, W, W, W, B, _,
    B, B, B, W, W, B, W, W, W, W, B, W, W, B, B, B,
    _, B, W, P, B, W, W, W, W, W, W, B, P, W, B, _,
    B, B, P, B, Y, B, W, W, W, W, B, Y, B, P, B, B,
    _, B, W, B, W, B, W, W, W, W, B, W, B, W, B, _,
    _, B, W, B, W, W, W, Y, Y, W, W, W, B, W, B, _,
    B, _, B, Y, W, W, W, Y, Y, W, W, W, Y, B, _, _,
    B, _, B, W, W, W, W, W, W, W, W, W, W, B, _, _,
    B, B, B, W, W, W, W, W, W, W, W, W, W, B, _, _,
    _, B, B, W, Y, W, W, B, B, W, W, Y, W, B, _, _,
    _, _, B, B, Y, Y, B, _, _, B, Y, Y, B, _, _, _,
    _, _, _, B, B, B, _, _, _, _, B, B, B, _, _, _,
];
// ふせ
const FUSE  = [
    _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, Y, B, _, _, _, _, B, Y, B, _, _, _,
    _, _, B, Y, Y, Y, B, _, _, B, Y, Y, Y, B, _, _,
    _, _, B, Y, W, W, B, B, B, B, W, W, Y, B, _, _,
    _, B, W, W, W, W, W, W, W, W, W, W, W, W, B, _,
    _, B, W, W, W, B, W, W, W, W, B, W, W, W, B, _,
    B, B, B, W, W, B, W, W, W, W, B, W, W, B, B, B,
    _, B, W, P, P, W, W, W, W, W, W, P, P, W, B, _,
    B, B, B, P, P, W, W, W, W, W, W, P, P, B, B, B,
    _, B, Y, W, W, W, W, W, W, W, W, W, W, Y, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    B, _, _, B, B, W, W, R, R, W, W, B, B, _, _, _,
    B, _, B, W, W, W, W, W, W, W, W, W, W, B, _, _,
    _, B, B, Y, Y, W, W, B, B, W, W, Y, Y, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, B, _, _,
];
// へそ天
const HESOTEN = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, Y, B, _, _, _, _, B, Y, B, _, _, _,
    _, _, B, Y, Y, Y, B, _, _, B, Y, Y, Y, B, _, _,
    _, _, B, Y, W, W, B, B, B, B, W, W, Y, B, _, _,
    _, B, W, W, W, W, W, W, W, W, W, W, W, W, B, _,
    _, B, W, W, W, B, W, W, W, W, B, W, W, W, B, _,
    B, B, B, W, W, B, W, W, W, W, B, W, W, B, B, B,
    _, B, W, P, P, W, W, W, W, W, W, P, P, W, B, _,
    B, B, B, P, P, W, W, W, W, W, W, P, P, B, B, B,
    _, B, Y, W, W, W, W, W, W, W, W, W, W, Y, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    B, _, _, _, B, B, W, R, R, W, B, B, _, _, _, _,
    B, _, _, B, B, W, W, W, W, W, W, B, B, _, _, _,
    B, B, B, Y, Y, B, W, W, W, W, B, Y, Y, B, _, _,
    _, B, B, W, W, B, W, W, W, W, B, W, W, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, B, _, _,
];
// 段ボールホイホイ
const HOIHOI = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, Y, B, _, _, _, _, B, Y, B, _, _, _,
    _, _, B, Y, Y, Y, B, _, _, B, Y, Y, Y, B, _, _,
    _, _, B, Y, W, W, B, B, B, B, W, W, Y, B, _, _,
    _, B, W, W, W, W, W, W, W, W, W, W, W, W, B, _,
    _, B, W, W, W, B, W, W, W, W, B, W, W, W, B, _,
    B, B, B, W, W, B, W, W, W, W, B, W, W, B, B, B,
    _, B, W, P, P, W, W, W, W, W, W, P, P, W, B, _,
    B, B, B, P, P, W, W, W, W, W, W, P, P, B, B, B,
    _, B, Y, W, W, W, W, W, W, W, W, W, W, Y, B, _,
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
    _, _, _, B, Y, B, _, _, _, _, B, Y, B, _, _, _,
    _, _, B, Y, Y, Y, B, _, _, B, Y, Y, Y, B, _, _,
    _, _, B, Y, W, W, B, B, B, B, W, W, Y, B, _, _,
    _, B, W, W, W, W, W, W, W, W, W, W, W, W, B, _,
    _, B, W, W, W, B, W, W, W, W, B, W, W, W, B, _,
    B, B, B, W, W, B, W, W, W, W, B, W, W, B, B, B,
    _, B, W, P, P, W, W, W, W, W, W, P, P, W, B, _,
    B, B, B, P, P, W, W, W, W, W, W, P, P, B, B, B,
    _, B, Y, W, W, W, W, W, W, W, W, W, W, Y, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    B, _, _, B, B, W, W, R, R, W, W, B, B, _, _, _,
    B, _, B, B, W, W, W, W, W, W, W, W, B, B, _, _,
    B, B, B, W, W, B, B, W, W, B, B, W, W, B, _, _,
    _, B, B, Y, W, W, Y, B, B, Y, W, W, Y, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, B, _, _,
];
// おすわり
const OSUWARI = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, Y, B, _, _, _, _, B, Y, B, _, _, _,
    _, _, B, Y, Y, Y, B, _, _, B, Y, Y, Y, B, _, _,
    _, _, B, Y, W, W, B, B, B, B, W, W, Y, B, _, _,
    _, B, W, W, W, W, W, W, W, W, W, W, W, W, B, _,
    _, B, W, W, W, B, W, W, W, W, B, W, W, W, B, _,
    B, B, B, W, W, B, W, W, W, W, B, W, W, B, B, B,
    _, B, W, P, P, W, W, W, W, W, W, P, P, W, B, _,
    B, B, B, P, P, W, W, W, W, W, W, P, P, B, B, B,
    _, B, Y, W, W, W, W, W, W, W, W, W, W, Y, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    B, _, _, B, B, Y, W, R, R, W, Y, B, B, _, _, _,
    B, _, B, B, W, W, W, W, W, W, W, W, B, B, _, _,
    B, B, B, W, W, W, W, W, W, W, W, W, W, B, _, _,
    _, B, B, W, Y, Y, B, W, W, B, Y, Y, W, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, B, _, _,
];
// おて
const OTE = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, Y, B, _, _, _, _, B, Y, B, _, _, _,
    _, _, B, Y, Y, Y, B, _, _, B, Y, Y, Y, B, _, _,
    _, _, B, Y, W, W, B, B, B, B, W, W, Y, B, _, _,
    _, B, W, W, W, W, W, W, W, W, W, W, W, W, B, _,
    _, B, W, W, W, B, W, W, W, W, B, W, W, W, B, _,
    B, B, B, W, W, B, W, W, W, W, B, W, W, B, B, B,
    _, B, W, P, P, W, W, W, W, W, W, P, P, W, B, _,
    B, B, B, P, P, W, W, W, W, W, B, B, P, B, B, B,
    _, B, Y, W, W, W, W, W, W, B, Y, Y, B, Y, B, _,
    _, B, B, B, B, B, B, B, B, B, W, W, B, B, _, _,
    B, _, _, B, B, W, W, R, R, W, W, W, B, B, _, _,
    B, _, B, B, W, W, W, W, W, W, W, W, W, B, _, _,
    B, B, B, W, W, W, W, W, W, W, W, W, W, B, _, _,
    _, B, B, W, Y, Y, B, W, W, B, Y, Y, B, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, _, _, _,
];
// うしろすがた
const USHIRO = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, Y, B, _, _, _, _, B, Y, B, _, _, _,
    _, _, B, Y, Y, Y, B, _, _, B, Y, Y, Y, B, _, _,
    _, _, B, Y, W, W, B, B, B, B, W, W, Y, B, _, _,
    _, B, W, W, W, W, W, W, W, W, W, W, W, W, B, _,
    _, B, W, W, W, W, W, W, W, W, W, W, W, W, B, _,
    B, B, W, W, W, W, W, B, W, W, W, W, W, W, B, B,
    _, B, W, W, W, W, W, W, B, W, W, W, W, W, B, _,
    B, B, Y, Y, W, W, W, W, B, W, W, W, Y, Y, B, B,
    _, B, Y, Y, W, W, W, B, W, W, W, W, Y, Y, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    _, _, _, _, B, B, W, B, W, W, B, B, _, _, _, _,
    _, _, _, B, B, W, W, B, B, W, W, B, B, _, _, _,
    _, _, B, Y, Y, W, W, W, W, W, W, Y, Y, B, _, _,
    _, _, B, Y, Y, W, W, B, B, W, W, Y, Y, B, _, _,
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
