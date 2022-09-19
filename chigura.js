/**
 * Chigura.js v1.0.0
 * (c)あおい図書 https://aoi-ome.tokyo
 * MIT License ฅˆ•ﻌ•ˆฅ にゃーん
 */
const isFunction  = (nya) => (typeof nya === 'function' );                                      // 関数の判定
const isUndefined = (nya) => (typeof nya === 'undefined');                                      // 未定義の判定
const toArray     = (nya) => (nya ? (Array.isArray(nya) ? nya : [nya]) : []);                   // 配列へのキャスト
const randomArray = (nya) => (Array.isArray(nya) ? nya[~~(nya.length * Math.random())] : nya);  // 配列からランダム取り出し

// 定数たち
const CHIGURA     = 'chigura';                  // ちぐら
const NEKOZE      = 1;                          // z-index
const NAWABARI    = '100%';                     // ちぐらの広袤
const ATSU        = 2;                          // ぬこのデカさ (ぬこ圧)
const NEKOASHI    = 5;                          // ぬこの歩幅
const NEKOME      = 15;                         // ぬこの描画レート
const KIMAGURE    = 0.05;                       // ぬこのKi・Ma・Guレート
const SOPPO       = 3000;                       // じゃらすタイムアウト
const SUKIMA      = 2;                          // padding
const SHIGUSA     = {                           // デフォルトのしぐさ
    default : 'default',
    naderu  : ['furifuriu', 'pechipechik', 'aseaseh', 'pachipachif', 'kurukuruo'],
    jarasu  : ['nobikiraf', 'kurukyunb'  , 'punpunu', 'suyasuyaho' , 'furifurih', 'pechipechih'],
};
const NAKU        = 'naku';
const YAMU        = 'yamu';

// callbackたち
const NADERU = function(nuko, e) {
    if (nuko.jaenokorore) return;                               // じゃれてるときはそのまま
    switch (~~(10 * Math.random())) {
        case 0:
            nuko.shigusa(null, YAMU);                           // しぐさを戻す
            nuko.katte();                                       // Ka-t-teアルゴリズム
            break;
        case 1:
            break;                                              // 無反応
        default:
            nuko.shigusa(SHIGUSA.naderu);                       // しぐさを変更
            break;
    }
    e.preventDefault();
}
const KIGASUMU = function(nuko) {
    if (nuko.enokoro) return;                                   // じゃれてるときはそのまま
    nuko.shigusa();                                             // しぐさを戻す
}
const JARASU = function(nuko, e) {
    nuko.shigusa(SHIGUSA.jarasu, NAKU);                         // しぐさを変更
    e.preventDefault();
}
const AKIRU = function(nuko) {
    nuko.shigusa(null, YAMU);                                   // しぐさを戻すして鳴きやむ
}

// 変数たち
let chiguras = new Map();                                       // ちぐらたち
let byobus   = new Map();                                       // ドット絵たち

// 全体的にゃオプション
let options = {
    debug : false,                                              // デバッグログの出力
    error : false,                                              // エラーログの出力
};

/**
 * ちぐらクラス
 */
let Chigura = class {
    #root;                                                      // root (ねっこ)
    #nukos       = new Map();                                   // ぬこぬこマップ
    #koban       = 0;                                           // ぬこ描画用のカウンタ
    #mrMoonLight = null;                                        // ムーちゃん
    #width       = window.innerWidth;                           // 画面幅

    // ちぐら単位で参照するオプション
    #options = {
        kaburu   : false,                                       // ちぐらを親要素にかぶせる
        nekoze   : NEKOZE,                                      // z-index
        nawabari : NAWABARI,                                    // ちぐらの広袤
        nekome   : NEKOME,                                      // ぬこの描画レート
    }

    // ゲッタたち
    get id      () { return this.#root.getAttribute('id');  };  // id
    get root    () { return this.#root;                     };  // root (ねっこ)
    get options () { return this.#options;                  };  // オプション

    /**
     * ちぐらを編む
     * @param  string marie   ちぐらのid
     * @param  string duchess 親要素
     * @param  Object option  オプション
     * @return bool
     */
    weave(marie, duchess = null, option = {}) {
        // すでにタグタグがあるとき
        if (document.getElementById(marie) !== null) {
            error(`[${marie}]すでにちぐらのタグタグがあるにゃん！`);
            return false;
        }

        // 親要素を取得 (指定されてにゃければbodyにする)
        duchess = (duchess === null) ? document.body : document.getElementById(duchess);
        if (duchess === null) {
            error(`[${marie}]ちぐらの親要素がにゃいにゃん！`);
            return false;
        }

        // オプションをセット
        Object.assign(this.#options, option);                                                   // 単純にまじマージ
        this.#options.nawabari = toArray(this.#options.nawabari);                               // ちぐらの広袤を配列にキャスト

        // rootを生成
        debug(`[${marie}]rootを作成するにゃん！`, { class:CHIGURA, kaburu:this.#options.kaburu });
        this.#root = document.createElement('div');                                             // rootを作成
        this.#root.setAttribute('id'   , marie);                                                // id追加
        this.#root.setAttribute('class', CHIGURA);                                              // class追加
        this.#root.style.width         = this.#options.nawabari[0];                             // 横幅
        this.#root.style.height        = this.#options.nawabari[1] ?? this.#options.nawabari[0];// 縦幅
        this.#root.style.pointerEvents = 'none';                                                // イベントを抑止
        this.#root.style.position      = 'relative';                                            // ぬこの基底にする

        // ちぐらを親要素にかぶせるとき
        if (this.#options.kaburu === true) {
            debug(`[${marie}]ちぐらをかぶせるにゃん！`, { parent:duchess.getAttribute('id'), nekoze:this.#options.nekoze });
            duchess.style.position    = 'relative';                 // 親要素を基底にする
            this.#root.style.position = 'absolute';                 // ぬこかぶる
            this.#root.style.top      = 0;                          // 上下位置をセット
            this.#root.style.left     = 0;                          // 左右位置をセット
            this.#root.style.zIndex   = this.#options.nekoze;       // z-indexを設定
        }
        duchess.appendChild(this.#root)                             // rootをdocumentに追加
        this.stretch();                                             // ぬこぬこ再配置

        // イベント
        window.addEventListener('resize', () => {                   // Windowリサイズ
            if (this.#width === window.innerWidth) return;          // 横幅が変わったときだけ発火させる (iOS対応)
            this.#width = window.innerWidth;
            this.stretch();
        });
        chiguras.set(marie, this);                                  // ちぐらMapに追加
        return true;
    }

    /**
     * ちぐらをほどく
     * @return void
     */
    unweave() {
        debug(`[${this.id}]rootを削除するにゃん！`);
        chiguras.delete(this.id);                                   // ちぐらを空っぽに
        this.root.remove();                                         // documentからrootを削除
    }

    /**
     * ぬこ、歩く
     * @return void
     */
    walk() {
        if (this.#mrMoonLight !== null) return;

        let mrMoonlight = () => {
            // カウンタが閾値を超えたときだけ描画する (にゃるたけ軽くしたき)
            if (this.#koban >= this.#options.nekome) {
                this.#nukos.forEach((nuko) => nuko.kimama());           // ぬこぬこループからの描画
                this.#koban = 0;                                        // カウンタリセット
            }
            this.#koban++;                                              // ちゃりんちゃりん
            this.#mrMoonLight = requestAnimationFrame(mrMoonlight);     // キャンセル用にidをムーちゃんしておく
        }
        mrMoonlight();
        debug(`[${this.id}]requestAnimationFrameしたにゃん`, { requestID:this.#mrMoonLight });
    }

    /**
     * ぬこ、止まる
     * @return void
     */
    waiting() {
        cancelAnimationFrame(this.#mrMoonLight);    // アニメーション停止
        debug(`[${this.id}]cancelAnimationFrameしたにゃん`, { requestID:this.#mrMoonLight });
        this.#mrMoonLight = null;                   // ムーちゃん初期化
    }

    /**
     * ぬこをちぐらに注ぐ
     * @param  Nuko nuko ぬこ
     * @return void
     */
    pour(nuko) {
        debug(`[${this.id}]ぬこを注ぐにゃん！`, { nuko:nuko.wagahai });
        this.root.appendChild(nuko.nekovas);        // canvasをrootに追加
        this.root.appendChild(nuko.balloon);        // 風船をrootに追加
        this.#nukos.set(nuko.wagahai, nuko);        // ぬこぬこマップにセット
        nuko.katte();                               // Ka-t-Teアルゴリズム
    }

    /**
     * ぬこをちぐらからこぼす
     * @param  string name ぬこ
     * @return bool
     */
    drop(name) {
        debug(`[${this.id}]ぬこをこぼすにゃん！`, { nuko:name });
        let nuko = this.#nukos.get(name);           // ぬこ取得

        if (isUndefined(nuko)) {
            error(`[${this.id}]こぼこうとしたぬこがにゃかったにゃん！`, { nuko:name });
            return false;
        }
        nuko.nekovas.remove();                      // canvasを削除
        nuko.balloon.remove();                      // 風船を削除
        this.#nukos.delete(nuko.wagahai);           // ぬこぬこマップからぬこを削除
        return true;
    }

    /**
     * ぬことあそぶ
     * @param  string   name  ぬこの名は
     * @param  callback asobu あそぶcallback
     * @return bool
     */
     asobu(name, asobu) {
        debug(`[${this.id}]ぬことあそぶにゃん！`, { nuko:name });
        let nuko = this.#nukos.get(name);           // ぬこ取得

        if (isUndefined(nuko)) {
            error(`[${this.id}]あそぼうとしたぬこがいにゃかったにゃん！`, { nuko:name });
            return false;
        }
        nuko.asobu(asobu);                          // canvasを削除
        return true;
    }

    /**
     * ちぐら伸縮
     * @return void
     */
    stretch() {
        this.#nukos.forEach((nuko) => { nuko.katte(); });   // ぬこぬこループからのKa-t-Teアルゴリズム
        debug(`[${this.id}]ちぐらを伸縮したにゃん！`, { width:this.root.clientWidth, height:this.root.clientHeight });
    }
}

/**
 * ぬこクラス
 */
let Nuko = class {
    #root;                                                  // root (ねっこ)
    #wagahai = 'nukodearu';                                 // ぬこの名は
    #breed;                                                 // ぬこの品種
    #nuko;                                                  // ぬこの素
    #nekovas;                                               // ぬこ専用のcanvas
    #tamage;                                                // ぬこ専用の2Dコンテキスト
    #balloon;                                               // ぬこ専用の風船
    #x; #y;                                                 // 現在地
    #shigusa = null;                                        // 現在のしぐさ
    #shigusas;                                              // しぐさリスト          (Ki・Ma・Maアルゴリズムの参照先)
    #kimagure;                                              // ぬこのKi・Ma・Guレート (Ki・Ma・Maアルゴリズムの参照先)
    #enokoro = null;                                        // じゃらすタイマー

    // ぬこ単位で参照するオプション
    #options = {
        atsu      : ATSU,                                   // ぬこのデカさ (ぬこ圧)
        nekoashi  : NEKOASHI,                               // ぬこの歩幅
        kimagure  : KIMAGURE,                               // ぬこのKi・Ma・Guレート
        shigusa   : SHIGUSA.default,                        // しぐさ
        naderu    : NADERU,                                 // にゃでる
        kigasumu  : KIGASUMU,                               // 気が済む
        jarasu    : JARASU,                                 // じゃらす
        akiru     : AKIRU,                                  // あきる
        soppo     : SOPPO,                                  // じゃらすタイムアウト
        balloon   : undefined,                              // 風船
        innyaText : true,                                   // 風船の書き出し方式
    };

    // setter
    set x(x) { this.#x = x; this.#nekovas.style.left = `${this.#x}px`; };
    set y(y) { this.#y = y; this.#nekovas.style.top  = `${this.#y}px`; };

    // getter
    get id       () { return this.#root.getAttribute('id'); };
    get wagahai  () { return this.#wagahai; };
    get breed    () { return this.#breed; };
    get taicho   () { return this.#nuko.taicho * this.#options.atsu };
    get taiko    () { return this.#nuko.taiko  * this.#options.atsu };
    get x        () { return this.#x; };
    get y        () { return this.#y; };
    get right    () { return [`${this.#x + this.taicho + SUKIMA}px`, `${this.#y + Math.ceil(this.taiko / 2)}px`, 'translate(0, -50%)'    ]};
    get left     () { return [`${this.#x - SUKIMA}px`              , `${this.#y + Math.ceil(this.taiko / 2)}px`, 'translate(-100%, -50%)']};
    get top      () { return [`${this.#x + Math.ceil(this.taicho / 2)}px`, `${this.#y - SUKIMA}px`             , 'translate(-50%, -100%)']};
    get bottom   () { return [`${this.#x + Math.ceil(this.taicho / 2)}px`, `${this.#y + this.taiko + SUKIMA}px`, 'translate(-50%, 0)'    ]};
    get nekovas  () { return this.#nekovas; };
    get balloon  () { return this.#balloon; };
    get enokoro  () { return this.#enokoro !== null };
    get options  () { return this.#options; };

    /**
     * ぬこを借りてくる
     * @param  Chigura chigura ちぐら
     * @param  string  name    ぬこの名は
     * @param  string  breed   ぬこの品種
     * @param  Object  option  オプション
     * @return Promise
     */
    async borrow(chigura, name = 'madanai', breed, option = {}) {
        this.#root    = chigura.root;   // root (ねっこ)
        this.#wagahai = name;           // ぬこの名は
        this.#breed   = breed;          // ぬこの品種
        if (!byobus.has(breed)) byobus.set(breed, new Map());                                   // ドット絵マップを初期化

        try {
            let nuko   = await import(`./office/${breed}.js`);                                  // ぬこの素をimport
            this.#nuko = new nuko.Nuko();                                                       // ぬこの素をセット
        } catch (error) {
            error(`[${this.id}][${this.wagahai}]ぬこの素が見つからにゃいにゃ！`, { breed:breed, error:error });
            throw new Error();
        }
        if (this.#nuko.atsu) this.#options.atsu = this.#nuko.atsu;                              // ぬこ圧をセット
        Object.assign(this.#options, option);                                                   // オプションをセット
        this.shigusa();                                                                         // しぐさをセット

        // canvasを作成
        let [id, classname] = [`${chigura.id}-nekovas-${this.wagahai}`, `${CHIGURA}-nekovas ${chigura.id}-nekovas`];
        debug(`[${this.id}][${this.wagahai}]canvasを作成するにゃん！`, { id:id, class:classname });
        this.#nekovas                      = document.createElement('canvas');                  // canvasを生成
        this.#nekovas.setAttribute('id'   , id);                                                // id追加
        this.#nekovas.setAttribute('class', classname);                                         // class追加
        this.#nekovas.width                = this.taicho;                                       // canvasの縦
        this.#nekovas.height               = this.taiko;                                        // canvasの横
        this.#nekovas.style.position       = 'absolute';                                        // ぬこをあちらこちらに
        this.#nekovas.style.cursor         = 'pointer';                                         // カーソルをポインタに
        this.#nekovas.style.pointerEvents  = 'auto';                                            // イベントを有効化
        this.#tamage                       = this.#nekovas.getContext('2d');                    // 2Dコンテキストを取得
        this.#tamage.scale(this.#options.atsu, this.#options.atsu);                             // ぬこ圧をセット
        this.#tamage.imageSmoothingEnabled = false;                                             // アンチエイリアスを無効に (canvasを重ねるときに縁がはみでる)

        // ぬこに風船
        [id, classname] = [`${chigura.id}-balloon-${this.wagahai}`, `${CHIGURA}-balloon ${chigura.id}-balloon`];
        debug(`[${this.id}][${this.wagahai}]風船を作成するにゃん！`, { id:id, class:classname, balloon:this.#options.balloon });
        this.#balloon                     = document.createElement('div');                      // 風船を作成
        this.#balloon.setAttribute('id'   , id);                                                // id追加
        this.#balloon.setAttribute('class', classname);                                         // class追加
        this.#balloon.style.display       = 'none';                                             // 非表示にしておく
        this.#balloon.style.position      = 'absolute';                                         // 重ねる
        // 風船のスタイルを設定
        if (this.#options.balloon !== null) {
            let balloon = this.#nuko.balloon(this.#options.balloon);
            this.#balloon.style.padding      = '1px';                                           // パディング
            this.#balloon.style.color        = balloon.color       ?? '';                       // 文字色
            this.#balloon.style.background   = balloon.background  ?? '';                       // 背景色
            this.#balloon.style.border       = 'solid';                                         // 枠線
            this.#balloon.style.borderColor  = balloon.borderColor ?? '';                       // 枠線色
            this.#balloon.style.borderRadius = '5px';                                           // 枠線の丸み
        }

        // イベントを設定
        this.#nekovas.addEventListener('click'     , (e) => this.#jarasu(e));                   // click
        this.#nekovas.addEventListener('mouseenter', (e) => this.#naderu(e));                   // mouseenter
        this.#nekovas.addEventListener('mouseleave', (e) => this.#kigasumu(e));                 // mouseleave
    }

    /**
     * Ka-t-Teアルゴリズム (ぬこをランダムに配置してるだけ)
     * @return void
     */
    katte() {
        this.x = ~~(Math.random() * (this.#root.clientWidth  - this.taicho ));
        this.y = ~~(Math.random() * (this.#root.clientHeight - this.taiko  ));
    }

    /**
     * Ki・Ma・Maアルゴリズム
     * @return void
     */
    kimama() {
        // 一定の確率で新しいしぐさを選択する
        if (this.#shigusa === null || this.#kimagure > Math.random()) {
            this.#shigusa = randomArray(this.#shigusas);                                        // ランダムにしぐさを決定
            this.#drew(this.#shigusa.pose);                                                     // 基本ポーズを描画

            let hitai = toArray(this.#shigusa.hitai);                                           // デコを取得
            hitai.forEach((hitai) => { this.#drew(hitai.e, false, hitai.x, hitai.y); });        // デコループからの描画

            // こいつ・・・動くぞ！
            let x = this.#x + (this.#shigusa.x * this.#options.nekoashi);
            let y = this.#y + (this.#shigusa.y * this.#options.nekoashi);
            if (x > 0 && (this.#root.clientWidth  - this.taicho ) > x) this.x = x;              // はみ出にゃければ東西に移動
            if (y > 0 && (this.#root.clientHeight - this.taiko  ) > y) this.y = y;              // はみ出にゃければ南北に移動
        }
    }

    /**
     * ぬこを描く
     * @param  string pose  ぬこのポーズ
     * @param  bool   clear canvasの初期化判定
     * @param  x      int   描画位置 (横)
     * @param  y      int   描画位置 (縦)
     * @return void
     */
    #drew(pose, clear = true, x = 0, y = 0) {
        // まだドット絵が作成されてにゃいとき
        if (!byobus.get(this.breed).has(pose)) {
            let byobu     = document.createElement('canvas');                   // 描画用canvasを生成
            let tamage    = byobu.getContext('2d');                             // 描画用2Dコンテキストを取得
            let image     = this.#nuko.drew(pose);                              // ドット絵を取得
            byobu.width   = image.width  ?? this.#nuko.taicho;                  // canvasの縦
            byobu.height  = image.height ?? this.#nuko.taiko;                   // canvasの横
            image         = image.image  ?? image;
            let imageData = tamage.createImageData(byobu.width, byobu.height);  // imageData生成

            debug(`[${this.id}][${this.wagahai}]ぬこを描くにゃん！`, { pose:pose });
            // ドット絵を描画
            for (let i = 0; i < image.length; i++) {
                tamage.fillStyle = image[i];                                    // color名をRGBに変換
                let color = tamage.fillStyle;

                imageData.data[i * 4 + 0] = parseInt(image[i] === null ? 255 : color.slice(1, 3), 16);      // R
                imageData.data[i * 4 + 1] = parseInt(image[i] === null ? 255 : color.slice(3, 5), 16);      // G
                imageData.data[i * 4 + 2] = parseInt(image[i] === null ? 255 : color.slice(5, 7), 16);      // B
                imageData.data[i * 4 + 3] = image[i] === null ? 0 : 255;                                    // アルファ
            }
            tamage.putImageData(imageData, 0, 0);
            byobus.get(this.breed).set(pose, byobu);
        }
        if (clear) this.#tamage.clearRect(0, 0, this.taicho, this.taiko);       // canvasを初期化
        this.#tamage.drawImage(byobus.get(this.breed).get(pose), x, y);         // ドット絵を描画
    }

    /**
     * ぬこをにゃでる
     * @param  Event event クリックイベント
     * @return void
     */
    #naderu(event) {
        if (isFunction(this.#options.naderu)) {
            debug(`[${this.id}][${this.wagahai}]にゃでるにゃん！`);
            this.#options.naderu(this, event);
        }
    }

    /**
     * ぬこの気が済む
     * @param  Event event クリックイベント
     * @return void
     */
    #kigasumu(event) {
        if (isFunction(this.#options.kigasumu)) {
            debug(`[${this.id}][${this.wagahai}]気が済むにゃん！`);
            this.#options.kigasumu(this, event);
        }
    }

    /**
     * ぬこをじゃらす
     * @param  Event event クリックイベント
     * @return void
     */
    #jarasu(event) {
        let jarasu = this.#options.jarasu;
        let akiru  = this.#options.akiru;

        if (isFunction(jarasu)) {
            debug(`[${this.id}][${this.wagahai}]じゃらすにゃん！`);
            jarasu(this, event);

            if (isFunction(akiru)) {
                debug(`[${this.id}][${this.wagahai}]飽きるにゃん！`);
                this.akiru(() => akiru(this, event));
            }
        }
    }

    /**
     * 飽きる
     * @param  callback akiru 飽きるcallback
     * @return void
     */
    akiru(akiru) {
        debug(`[${this.id}][${this.wagahai}]飽きるにゃん！`, { enokoro:this.#enokoro, soppo:this.#options.soppo });
        clearTimeout(this.#enokoro);
        this.#enokoro = isFunction(akiru) ? setTimeout(() => { akiru(); this.akiru(); }, this.#options.soppo) : null;
    }

    /**
     * ぬことあそぶ
     * @param  callback asobu あそぶcallback
     * @return void
     */
    asobu(asobu) {
        if (isFunction(asobu)) {
            debug(`[${this.id}][${this.wagahai}]あそぶにゃん！`);
            asobu(this);
        }
    }

    /**
     * ぬこのしぐさをセット
     * @param  string shigusa しぐさ
     * @param  string naku    鳴く/やむ
     * @return void
     */
    shigusa(shigusa = null, tsuide) {
        shigusa = this.#nuko.shigusa(randomArray(shigusa ?? this.#options.shigusa));    // ぬこからしぐさ定義を取得 (配列のときはランダム)
        this.#shigusas = shigusa.shigusa;                                               // しぐさリストをセット
        this.#shigusa  = null;                                                          // 現在のしぐさを初期化
        this.kimagure(shigusa.kimagure);                                                // Ki・Ma・Guレートを変更

        if (tsuide === NAKU && shigusa.nadegoe) this.naku(shigusa.nadegoe);             // 鳴く
        if (tsuide === YAMU)                    this.yamu();                            // やむ
    }

    /**
     * ぬこのKi・Ma・Guレートをセット
     * @param  float kimagure Ki・Ma・Guレート
     * @return void
     */
    kimagure(kimagure = null) {
        this.#kimagure = kimagure ?? this.#options.kimagure;    // Ki・Ma・Guレート
    }

    /**
     * 鳴きつく
     * @param  string|array meow 鳴き声
     * @return void
     */
    naku(meow) {
        if (!this.#balloon) return;
        this.#meow(randomArray(meow));                          // 風船文字列をセット

        // バルーン表示 (極東にいるとき:左側)
        if (this.#x > (this.#root.clientWidth * 3 / 4)) {
            [this.#balloon.style.left, this.#balloon.style.top, this.#balloon.style.transform] = this.left;
            this.#balloon.classList.add('left');
        // バルーン表示 (西洋にいるとき:右側)
        } else if ((this.#x + this.taicho) < (this.#root.clientWidth * 1 / 4)) {
            [this.#balloon.style.left, this.#balloon.style.top, this.#balloon.style.transform] = this.right;
            this.#balloon.classList.add('right');
        // バルーン表示 (北国にいるとき:下側)
        } else if (this.#y < (this.#root.clientHeight * 1 / 4)) {
            [this.#balloon.style.left, this.#balloon.style.top, this.#balloon.style.transform] = this.bottom;
            this.#balloon.classList.add('bottom');
        // バルーン表示 (デフォルト:頭上)
        } else {
            [this.#balloon.style.left, this.#balloon.style.top, this.#balloon.style.transform] = this.top;
            this.#balloon.classList.add('top');
        }
    }

    /**
     * 鳴きやむ
     * @return void
     */
    yamu() {
        if (!this.#balloon) return;
        this.#balloon.classList.remove('left', 'right', 'bottom', 'top');
        this.#meow('');
    }

    /**
     * 風船の書き出し
     * @param  string meow 鳴き声
     * @return void
     */
    #meow(meow = '') {
        this.#balloon[this.#options.innyaText ? 'innerText' : 'innerHTML'] = meow;  // 風船文字列をセット
        this.#balloon.style.display = (meow !== '') ? 'block' : 'none';             // 風船を表示/非表示
    }
};

/**
 * デバッグログ出力
 * @param  string message ログメッセージ
 * @param  Object extra   追加パラメータ
 * @return void
 */
const debug = function(message, extra) {
    if (!options.debug) return;

    console.log(`にゃーん ฅ^•ω•^ฅ[${message}]`);
    if (extra) console.log(extra);
};

/**
 * エラーログ出力
 * @param  string message ログメッセージ
 * @param  Object extra   追加パラメータ
 * @return void
 */
const error = function(message, extra) {
    if (!options.error) return;

    console.error(`エラーにゃん ฅ(๑•̀ω•́๑)ฅ[${message}]`);
    if (extra) console.error(extra);
};

/**
 * ฅ^•ﻌ•^ฅ ฅˆ•ﻌ•ˆฅ ฅˆ•ﻌ•ˆฅ ฅˆ•
 * •^ฅ ฅ^•ﻌ•^ฅ ฅˆ•ﻌ•ˆฅ ฅˆ•ﻌ•ˆฅ
 * ฅ^•ﻌ•^ฅ ฅˆ•ﻌ•ˆฅ ฅˆ•ﻌ•ˆฅ ฅˆ•
 */
export default {
    /**
     * ちぐらを編む
     * @param  string chigura ちぐらのid
     * @param  string duchess 親要素のid
     * @param  Objcet option  ちぐらのオプション
     * @return bool
     */
    weave : function(chigura = null, duchess = null, option = {}) {
        if (!window.HTMLCanvasElement) {
            error('ブラウザがcanvasをサポートしてにゃいにゃん！');
            return false;
        }

        // ちぐらを編む
        chigura = chigura ?? `${CHIGURA}-${chiguras.size}`;             // idがにゃいときは採番する
        debug('ちぐらを編むにゃん！', { chigura:chigura, parent:duchess });

        if ((new Chigura()).weave(chigura, duchess, {...options, ...option}) === false) {
            error('ちぐらが編めにゃかったにゃん！', { chigura:chigura, parent:duchess });
            return false;
        }
        // ぬこ、歩く
        chiguras.get(chigura).walk();
        return true;
    },

    /**
     * ちぐらをほどく
     * @param  string id ちぐらのid
     * @return bool
     */
    unweave : function(id = null) {
        debug('ちぐらをほどくにゃん！', { chigura:id });
        let chigura = chiguras.get(id);

        if (isUndefined(chigura)) {
            error('ほどこうとしたちぐらがにゃかったにゃん！', { chigura:id });
            return false;
        }

        chigura.waiting();      // ぬこ、止まる
        chigura.unweave();      // ちぐらをほどく
        return true;
    },

    /**
     * ぬこお招き
     * @param  string name    ぬこの名は
     * @param  string breed   ぬこの品種
     * @param  string chigura お招きするちぐら
     * @param  Object option  ぬこのオプション
     * @return bool
     */
    maneku : function(name, breed, chigura = null, option = {}) {
        chigura = (chigura === null) ? chiguras.values().next().value : chiguras.get(chigura);  // ちぐらが指定されてにゃいときは先頭を採用
        debug('ぬこをお招きするにゃん！', { name:name, breed:breed, chigura:chigura });

        // ちぐらがにゃかったとき
        if (isUndefined(chigura)) {
            error('ちぐらがにゃいにゃん！', { chigura:chigura });
            return false;
        }

        let nuko = new Nuko();                                                                  // ぬこ錬成
        nuko.borrow(chigura, name, breed, { ...chigura.options, ...option }).then(() => {       // ぬこを借りる
            chigura.pour(nuko);                                                                 // ぬこをちぐらに注ぐ
            return true;
        }).catch((message) => {
            error('ぬこがお招きできにゃかったにゃん！', { name:name, breed:breed, error:message});
            return false;
        });
    },

    /**
     * ぬこバイバイ
     * @param  string nuko ぬこの名は
     * @param  string id   バイバイするちぐら
     * @return bool
     */
    banban : function(nuko, id) {
        debug('ぬことバイバイするにゃん！', { name:nuko, chigura:id });
        let chigura = chiguras.get(id);

        if (isUndefined(chigura)) {
            error('バイバイするちぐらがにゃかったにゃん！', { chigura:id });
            return false;
        }
        return chigura.drop(nuko);              // ぬこをちぐらからこぼす
    },

    /**
     * ぬことあそぶ
     * @param  string   nuko  ぬこの名は
     * @param  string   id    ぬこのいるちぐら
     * @param  callback asobu あそぶcallback
     * @return bool
     */
     asobu : function(nuko, id, asobu) {
        debug('ぬことあそぶにゃん！', { name:nuko, chigura:id });
        let chigura = chiguras.get(id);

        if (isUndefined(chigura)) {
            error('ちぐらがにゃかったにゃん！', { chigura:id });
            return false;
        }
        return chigura.asobu(nuko, asobu);      // ぬことあそぶ
    },

    /**
     * オプション設定
     * @param  Objcet option オプション
     * @return void
     */
    option : function(option) {
        Object.assign(options, option);         // オプションをまじマージ
        debug('オプションにゃん！', options);
    },
}
