import { Nekogami } from './Nekogami.js';
/*
 * Chigula.js
 * ちゃとらぬこ ฅˆ•ﻌ•ˆฅ
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
const BALLOON = 'orange';               // 吹き出しの色み

// 色たち
const _ = Nekogami.ELIZABETH._;             // null
const B = Nekogami.ELIZABETH.B;             // Black
const C = Nekogami.ELIZABETH.C;             // moCcasin
const G = Nekogami.ELIZABETH.G;             // dimGray
const N = Nekogami.ELIZABETH.N;             // saddlebrowN
const O = Nekogami.ELIZABETH.O;             // burlywOod
const o = Nekogami.ELIZABETH.o;             // burlywOod
const P = Nekogami.ELIZABETH.P;             // hotPink
const R = Nekogami.ELIZABETH.R;             // Red
const W = Nekogami.ELIZABETH.W;             // White

/**
 * ドット絵たち
 */
// バンザイ
const BANZAI = [
    _, _, _, B, B, B, _, _, _, _, B, B, B, _, _, _,
    _, _, B, O, O, O, B, _, _, B, O, O, O, B, _, _,
    _, _, B, o, G, o, B, B, B, B, o, G, o, B, _, _,
    _, B, o, o, C, C, C, o, o, C, C, C, o, o, B, _,
    _, B, o, C, C, B, C, C, C, C, B, C, C, o, B, _,
    B, B, B, C, C, B, C, o, o, C, B, C, C, B, B, B,
    _, B, C, P, B, C, C, C, C, C, C, B, P, C, B, _,
    B, B, P, B, W, B, C, C, C, C, B, W, B, P, B, B,
    _, B, C, B, W, B, C, C, C, C, B, W, B, C, B, _,
    _, B, O, B, C, o, C, C, C, C, o, C, B, O, B, _,
    B, _, B, o, C, C, o, C, C, o, C, C, o, B, _, _,
    B, _, B, o, o, C, C, o, o, C, C, o, o, B, _, _,
    B, B, B, C, o, C, C, C, C, C, C, o, C, B, _, _,
    _, B, B, C, C, o, o, B, B, o, o, C, C, B, _, _,
    _, _, B, B, W, W, B, _, _, B, W, W, B, _, _, _,
    _, _, _, B, B, B, _, _, _, _, B, B, B, _, _, _,
];
// ふせ
const FUSE  = [
    _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, O, B, _, _, _, _, B, O, B, _, _, _,
    _, _, B, O, o, O, B, _, _, B, O, o, O, B, _, _,
    _, _, B, o, G, C, B, B, B, B, C, G, o, B, _, _,
    _, B, o, o, C, C, C, o, o, C, C, C, o, o, B, _,
    _, B, C, C, C, B, C, C, C, C, B, C, C, C, B, _,
    B, B, B, C, C, B, C, o, o, C, B, C, C, B, B, B,
    _, B, o, P, P, C, C, C, C, C, C, P, P, o, B, _,
    B, B, B, P, P, C, C, C, C, C, C, P, P, B, B, B,
    _, B, O, C, C, C, C, C, C, C, C, C, C, O, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    B, _, _, B, B, C, R, R, R, R, C, B, B, _, _, _,
    B, _, B, o, o, C, C, o, o, C, C, o, o, B, _, _,
    _, B, B, C, C, o, o, B, B, o, o, C, C, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, B, _, _,
];
// へそ天
const HESOTEN = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, O, B, _, _, _, _, B, O, B, _, _, _,
    _, _, B, O, o, O, B, _, _, B, O, o, O, B, _, _,
    _, _, B, o, G, C, B, B, B, B, C, G, o, B, _, _,
    _, B, o, o, C, C, C, o, o, C, C, C, o, o, B, _,
    _, B, C, C, C, B, C, C, C, C, B, C, C, C, B, _,
    B, B, B, C, C, B, C, o, o, C, B, C, C, B, B, B,
    _, B, o, P, P, C, C, C, C, C, C, P, P, o, B, _,
    B, B, B, P, P, C, C, C, C, C, C, P, P, B, B, B,
    _, B, O, C, C, C, C, C, C, C, C, C, C, O, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    B, _, _, _, B, B, R, R, R, R, B, B, _, _, _, _,
    B, _, _, B, B, C, C, o, o, C, C, B, B, _, _, _,
    B, B, B, W, W, B, o, C, C, o, B, W, W, B, _, _,
    _, B, B, C, C, B, C, o, o, C, B, C, C, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, B, _, _,
];
// 段ボールホイホイ
const HOIHOI = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, O, B, _, _, _, _, B, O, B, _, _, _,
    _, _, B, O, o, O, B, _, _, B, O, o, O, B, _, _,
    _, _, B, o, G, C, B, B, B, B, C, G, o, B, _, _,
    _, B, o, o, C, C, C, o, o, C, C, C, o, o, B, _,
    _, B, C, C, C, B, C, C, C, C, B, C, C, C, B, _,
    B, B, B, C, C, B, C, o, o, C, B, C, C, B, B, B,
    _, B, o, P, P, C, C, C, C, C, C, P, P, o, B, _,
    B, B, B, P, P, C, C, C, C, C, C, P, P, B, B, B,
    _, B, O, C, C, C, C, C, C, C, C, C, C, O, B, _,
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
    _, _, _, B, O, B, _, _, _, _, B, O, B, _, _, _,
    _, _, B, O, o, O, B, _, _, B, O, o, O, B, _, _,
    _, _, B, o, G, C, B, B, B, B, C, G, o, B, _, _,
    _, B, o, o, C, C, C, o, o, C, C, C, o, o, B, _,
    _, B, C, C, C, B, C, C, C, C, B, C, C, C, B, _,
    B, B, B, C, C, B, C, o, o, C, B, C, C, B, B, B,
    _, B, o, P, P, C, C, C, C, C, C, P, P, o, B, _,
    B, B, B, P, P, C, C, C, C, C, C, P, P, B, B, B,
    _, B, O, C, C, C, C, C, C, C, C, C, C, O, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    B, _, _, B, B, C, R, R, R, R, C, B, B, _, _, _,
    B, _, B, B, o, C, o, C, C, o, C, o, B, B, _, _,
    B, B, B, o, C, B, B, o, o, B, B, C, o, B, _, _,
    _, B, B, o, C, W, W, B, B, W, W, C, o, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, B, _, _,
];
// おすわり
const OSUWARI = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, O, B, _, _, _, _, B, O, B, _, _, _,
    _, _, B, O, o, O, B, _, _, B, O, o, O, B, _, _,
    _, _, B, o, G, C, B, B, B, B, C, G, o, B, _, _,
    _, B, o, o, C, C, C, o, o, C, C, C, o, o, B, _,
    _, B, C, C, C, B, C, C, C, C, B, C, C, C, B, _,
    B, B, B, C, C, B, C, o, o, C, B, C, C, B, B, B,
    _, B, o, P, P, C, C, C, C, C, C, P, P, o, B, _,
    B, B, B, P, P, C, C, C, C, C, C, P, P, B, B, B,
    _, B, O, C, C, C, C, C, C, C, C, C, C, O, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    B, _, _, B, B, C, R, R, R, R, C, B, B, _, _, _,
    B, _, B, B, o, C, C, o, o, C, C, o, B, B, _, _,
    B, B, B, o, C, C, o, C, C, o, C, C, o, B, _, _,
    _, B, B, o, W, W, B, o, o, B, W, W, o, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, B, _, _,
];
// おて
const OTE = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, O, B, _, _, _, _, B, O, B, _, _, _,
    _, _, B, O, o, O, B, _, _, B, O, o, O, B, _, _,
    _, _, B, o, G, C, B, B, B, B, C, G, o, B, _, _,
    _, B, o, o, C, C, C, o, o, C, C, C, o, o, B, _,
    _, B, C, C, C, B, C, C, C, C, B, C, C, C, B, _,
    B, B, B, C, C, B, C, o, o, C, B, C, C, B, B, B,
    _, B, o, P, P, C, C, C, C, C, C, P, P, o, B, _,
    B, B, B, P, P, C, C, C, C, C, B, B, P, B, B, B,
    _, B, O, C, C, C, C, C, C, B, W, W, B, O, B, _,
    _, B, B, B, B, B, B, B, B, B, C, C, B, B, _, _,
    B, _, _, B, B, C, R, R, R, R, C, o, B, B, _, _,
    B, _, B, B, C, C, C, o, o, C, C, C, o, B, _, _,
    B, B, B, o, C, C, o, C, C, o, C, C, o, B, _, _,
    _, B, B, o, W, W, B, o, o, B, W, W, B, B, _, _,
    _, _, B, B, B, B, B, B, B, B, B, B, B, _, _, _,
];
// うしろすがた
const USHIRO = [
    _, _, _, _, B, _, _, _, _, _, _, B, _, _, _, _,
    _, _, _, B, O, B, _, _, _, _, B, O, B, _, _, _,
    _, _, B, O, o, O, B, _, _, B, O, o, O, B, _, _,
    _, _, B, o, o, C, B, B, B, B, C, o, o, B, _, _,
    _, B, o, C, C, C, C, o, o, C, C, C, C, o, B, _,
    _, B, o, o, C, C, C, C, C, C, C, C, o, o, B, _,
    B, B, o, C, C, C, o, B, o, o, C, C, C, o, B, B,
    _, B, C, C, C, C, C, C, B, C, C, C, C, C, B, _,
    B, B, o, o, C, C, o, o, B, o, C, C, o, o, B, B,
    _, B, O, o, o, C, C, B, C, C, C, o, o, O, B, _,
    _, B, B, B, B, B, B, B, B, B, B, B, B, B, B, _,
    _, _, _, _, B, B, o, B, o, o, B, B, _, _, _, _,
    _, _, _, B, B, C, o, B, B, o, C, B, B, _, _, _,
    _, _, B, o, C, C, C, o, o, C, C, C, o, B, _, _,
    _, _, B, o, o, C, C, B, B, C, C, o, o, B, _, _,
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
            C, C, C,
            B, B, B,
        ],
    },
    tsumurime2 : {
        width  : 3,
        height : 2,
        image  : [
            C, C, C,
            B, B, B,
        ],
    },
    // つり目
    tsurime1 : {
        width  : 2,
        height : 2,
        image  : [
            B, C,
            C, B,
        ],
    },
    tsurime2 : {
        width  : 2,
        height : 2,
        image  : [
            C, B,
            B, C,
        ],
    },
    // よわり目
    yowarime1 : {
        width  : 2,
        height : 3,
        image  : [
            B, C,
            C, B,
            B, C,
        ],
    },
    yowarime2 : {
        width  : 2,
        height : 3,
        image  : [
            C, B,
            B, C,
            C, B,
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
