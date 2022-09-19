import { Nekogami } from './Nekogami.js';
/*
 * Chigula.js
 * くろぬこ ฅˆ•ﻌ•ˆฅ
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
const BALLOON = 'gray';                 // 吹き出しの色み

// 色たち
const _ = Nekogami.ELIZABETH._;             // null
const B = Nekogami.ELIZABETH.B;             // Black
const E = Nekogami.ELIZABETH.E;             // pEru
const G = Nekogami.ELIZABETH.G;             // dimGray
const p = Nekogami.ELIZABETH.p;             // lightPink
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
    _, _, B, U, Y, G, B, B, B, B, G, Y, U, B, _, _,
    _, B, G, G, G, G, G, G, G, G, G, G, G, G, B, _,
    _, B, G, G, G, B, G, G, G, G, B, G, G, G, B, _,
    B, B, B, G, G, B, G, G, G, G, B, G, G, B, B, B,
    _, B, G, p, B, G, G, G, G, G, G, B, p, G, B, _,
    B, B, G, B, Y, B, G, G, G, G, B, Y, B, G, B, B,
    _, B, G, B, G, B, G, G, G, G, B, G, B, G, B, _,
    _, B, G, B, G, G, G, G, G, G, G, G, B, G, B, _,
    B, _, B, G, G, G, G, U, U, G, G, G, G, B, _, _,
    B, _, B, B, G, G, G, U, U, G, G, G, B, B, _, _,
    B, B, B, G, G, G, G, G, G, G, G, G, G, B, _, _,
    _, B, B, U, G, G, G, B, B, G, G, G, U, B, _, _,
    _, _, B, B, U, G, B, _, _, B, G, U, B, _, _, _,
    _, _, _, B, B, B, _, _, _, _, B, B, B, _, _, _,
];
// ふせ
const FUSE  = [
    _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, U, B, _, _, _, _, B, U, B, _, _, _,
    _, _, B, U, U, U, B, _, _, B, U, U, U, B, _, _,
    _, _, B, U, Y, G, B, B, B, B, G, Y, U, B, _, _,
    _, B, G, G, G, G, G, G, G, G, G, G, G, G, B, _,
    _, B, G, G, G, B, G, G, G, G, B, G, G, G, B, _,
    B, B, B, G, G, B, G, G, G, G, B, G, G, B, B, B,
    _, B, G, p, p, G, G, G, G, G, G, p, p, G, B, _,
    B, B, B, p, p, G, G, G, G, G, G, p, p, B, B, B,
    _, B, U, G, G, G, G, G, G, G, G, G, G, U, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    B, _, _, B, B, G, G, R, R, G, G, B, B, _, _, _,
    B, _, B, G, G, G, G, G, G, G, G, G, G, B, _, _,
    _, B, B, U, U, G, G, B, B, G, G, U, U, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, B, _, _,
];
// へそ天
const HESOTEN = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, U, B, _, _, _, _, B, U, B, _, _, _,
    _, _, B, U, U, U, B, _, _, B, U, U, U, B, _, _,
    _, _, B, U, Y, G, B, B, B, B, G, Y, U, B, _, _,
    _, B, G, G, G, G, G, G, G, G, G, G, G, G, B, _,
    _, B, G, G, G, B, G, G, G, G, B, G, G, G, B, _,
    B, B, B, G, G, B, G, G, G, G, B, G, G, B, B, B,
    _, B, G, p, p, G, G, G, G, G, G, p, p, G, B, _,
    B, B, B, p, p, G, G, G, G, G, G, p, p, B, B, B,
    _, B, U, G, G, G, G, G, G, G, G, G, G, U, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    B, _, _, _, B, B, G, R, R, G, B, B, _, _, _, _,
    B, _, _, B, B, G, G, G, G, G, G, B, B, _, _, _,
    B, B, B, Y, Y, B, G, G, G, G, B, Y, Y, B, _, _,
    _, B, B, G, G, B, G, G, G, G, B, G, G, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, B, _, _,
];
// 段ボールホイホイ
const HOIHOI = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, U, B, _, _, _, _, B, U, B, _, _, _,
    _, _, B, U, U, U, B, _, _, B, U, U, U, B, _, _,
    _, _, B, U, Y, G, B, B, B, B, G, Y, U, B, _, _,
    _, B, G, G, G, G, G, G, G, G, G, G, G, G, B, _,
    _, B, G, G, G, B, G, G, G, G, B, G, G, G, B, _,
    B, B, B, G, G, B, G, G, G, G, B, G, G, B, B, B,
    _, B, G, p, p, G, G, G, G, G, G, p, p, G, B, _,
    B, B, B, p, p, G, G, G, G, G, G, p, p, B, B, B,
    _, B, U, G, G, G, G, G, G, G, G, G, G, U, B, _,
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
    _, _, _, B, U, B, _, _, _, _, B, U, B, _, _, _,
    _, _, B, U, U, U, B, _, _, B, U, U, U, B, _, _,
    _, _, B, U, Y, G, B, B, B, B, G, Y, U, B, _, _,
    _, B, G, G, G, G, G, G, G, G, G, G, G, G, B, _,
    _, B, G, G, G, B, G, G, G, G, B, G, G, G, B, _,
    B, B, B, G, G, B, G, G, G, G, B, G, G, B, B, B,
    _, B, G, p, p, G, G, G, G, G, G, p, p, G, B, _,
    B, B, B, p, p, G, G, G, G, G, G, p, p, B, B, B,
    _, B, U, G, G, G, G, G, G, G, G, G, G, U, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    B, _, _, B, B, G, G, R, R, G, G, B, B, _, _, _,
    B, _, B, B, G, G, G, G, G, G, G, G, B, B, _, _,
    B, B, B, G, G, B, B, G, G, B, B, G, G, B, _, _,
    _, B, B, U, G, G, Y, B, B, Y, G, G, U, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, B, _, _,
];
// おすわり
const OSUWARI = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, U, B, _, _, _, _, B, U, B, _, _, _,
    _, _, B, U, U, U, B, _, _, B, U, U, U, B, _, _,
    _, _, B, U, Y, G, B, B, B, B, G, Y, U, B, _, _,
    _, B, G, G, G, G, G, G, G, G, G, G, G, G, B, _,
    _, B, G, G, G, B, G, G, G, G, B, G, G, G, B, _,
    B, B, B, G, G, B, G, G, G, G, B, G, G, B, B, B,
    _, B, G, p, p, G, G, G, G, G, G, p, p, G, B, _,
    B, B, B, p, p, G, G, G, G, G, G, p, p, B, B, B,
    _, B, U, G, G, G, G, G, G, G, G, G, G, U, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    B, _, _, B, B, U, G, R, R, G, U, B, B, _, _, _,
    B, _, B, B, G, G, G, G, G, G, G, G, B, B, _, _,
    B, B, B, G, G, G, G, G, G, G, G, G, G, B, _, _,
    _, B, B, G, U, U, B, G, G, B, U, U, G, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, B, _, _,
];
// おて
const OTE = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, U, B, _, _, _, _, B, U, B, _, _, _,
    _, _, B, U, U, U, B, _, _, B, U, U, U, B, _, _,
    _, _, B, U, Y, G, B, B, B, B, G, Y, U, B, _, _,
    _, B, G, G, G, G, G, G, G, G, G, G, G, G, B, _,
    _, B, G, G, G, B, G, G, G, G, B, G, G, G, B, _,
    B, B, B, G, G, B, G, G, G, G, B, G, G, B, B, B,
    _, B, G, p, p, G, G, G, G, G, G, p, p, G, B, _,
    B, B, B, p, p, G, G, G, G, G, B, B, p, B, B, B,
    _, B, U, G, G, G, G, G, G, B, Y, Y, B, U, B, _,
    _, B, B, B, B, B, B, B, B, B, G, G, B, B, _, _,
    B, _, _, B, B, G, G, R, R, G, G, G, B, B, _, _,
    B, _, B, B, G, G, G, G, G, G, G, G, G, B, _, _,
    B, B, B, G, G, G, G, G, G, G, G, G, G, B, _, _,
    _, B, B, G, U, U, B, G, G, B, U, U, B, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, _, _, _,
];
// うしろすがた
const USHIRO = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, U, B, _, _, _, _, B, U, B, _, _, _,
    _, _, B, U, U, U, B, _, _, B, U, U, U, B, _, _,
    _, _, B, U, G, G, B, B, B, B, G, G, U, B, _, _,
    _, B, G, G, G, G, G, G, G, G, G, G, G, G, B, _,
    _, B, G, G, G, G, G, G, G, G, G, G, G, G, B, _,
    B, B, G, G, G, G, G, B, G, G, G, G, G, G, B, B,
    _, B, G, G, G, G, G, G, B, G, G, G, G, G, B, _,
    B, B, U, U, G, G, G, G, B, G, G, G, U, U, B, B,
    _, B, U, U, G, G, G, B, G, G, G, G, U, U, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    _, _, _, _, B, B, G, B, G, G, B, B, _, _, _, _,
    _, _, _, B, B, G, G, B, B, G, G, B, B, _, _, _,
    _, _, B, U, U, G, G, G, G, G, G, U, U, B, _, _,
    _, _, B, U, U, G, G, B, B, G, G, U, U, B, _, _,
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
            G, G, G,
            B, B, B,
        ],
    },
    tsumurime2 : {
        width  : 3,
        height : 2,
        image  : [
            G, G, G,
            B, B, B,
        ],
    },
    // つり目
    tsurime1 : {
        width  : 2,
        height : 2,
        image  : [
            B, G,
            G, B,
        ],
    },
    tsurime2 : {
        width  : 2,
        height : 2,
        image  : [
            G, B,
            B, G,
        ],
    },
    // よわり目
    yowarime1 : {
        width  : 2,
        height : 3,
        image  : [
            B, G,
            G, B,
            B, G,
        ],
    },
    yowarime2 : {
        width  : 2,
        height : 3,
        image  : [
            G, B,
            B, G,
            G, B,
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
