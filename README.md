# select-pref
 
都道府県選択タグ, select-prefタグ

## sample

https://code4fukui.github.io/select-pref/

## usage

```html
<script type="module" src="https://code4fukui.github.io/select-pref/select-pref.js"></script>

<select-pref id="pref"></select-pref><br>

<p><input id="selected"></p>
<p><button id="set">福井県をセット</button></p>

<script type="module">
pref.onchange = () => {
  selected.value = pref.value ? pref.value + "が選択されました" : "都道府県を選択してください";
};
set.onclick = () => {
  pref.value = "福井県";
};
</script>
```

## code

```js
const prefhex = [
  15, 14, "HKD",
  14, 12, "AOM",
  15, 11, "IWT",
  14, 11, "AKT",
  14, 10, "MYG",
  13, 10, "YGT",
  14, 9, "FKS",
  13, 9, "IBR",
  12, 9, "NGT",
  14, 8, "GNM",
  13, 8, "SIT",
  12, 8, "TCG",
  11, 8, "TYM",
  10, 8, "ISK",
  14, 7, "CHB",
  13, 7, "TKY",
  12, 7, "YMN",
  11, 7, "NGN",
  10, 7, "FKI",
  9, 7, "KYT",
  8, 7, "HYO",
  7, 7, "TTR",
  6, 7, "SMN",
  13, 6, "KNG",
  12, 6, "SZO",
  11, 6, "AIC",
  10, 6, "GIF",
  9, 6, "SIG",
  8, 6, "OSK",
  7, 6, "OKY",
  6, 6, "HRS",
  5, 6, "YMG",
  10, 5, "MIE",
  9, 5, "NAR",
  9, 4, "WKY",
  7, 4, "KGW",
  6, 4, "EHM",
  7, 3, "TKS",
  6, 3, "KUC",
  4, 5, "FKO",
  3, 5, "SAG",
  2, 5, "NGS",
  3, 4, "OIT",
  2, 4, "KUM",
  3, 3, "MYZ",
  2, 3, "KGS",
  1, 1, "OKN",
];
```

```js
for (let i = 0; i < 47; i++) p.push(prefhex[i * 3 + 2]);
import { JAPAN_PREF } from "https://js.sabae.cc/JAPAN_PREF.js";
JAPAN_PREF
```

手で並び替えたアルファベット表記都道府県
```js
const JAPAN_PREF_ALPHA = [
  "HKD", "AOM", "IWT", "MYG",
  "AKT", "YGT", "FKS", "IBR",
  "TCG", "GNM", "SIT", "CHB",
  "TKY", "KNG", "NGT", "TYM",
  "ISK", "FKI", "YMN", "NGN",
  "GIF", "SZO", "AIC", "MIE",
  "SIG", "KYT", "OSK", "HYO",
  "NAR", "WKY", "TTR", "SMN",
  "OKY", "HRS", "YMG", "TKS",
  "KGW", "EHM", "KUC", "FKO",
  "SAG", "NGS", "KUM", "OIT",
  "MYZ", "KGS", "OKN",
];
```

```js
const res = [];
for (const a of JAPAN_PREF_ALPHA) {
  const n = p.indexOf(a);
  res.push([prefhex[n * 3], prefhex[n * 3 + 1]]);
}
console.log(res);
[
  [ 15, 14 ], [ 14, 12 ], [ 15, 11 ], [ 14, 10 ],
  [ 14, 11 ], [ 13, 10 ], [ 14, 9 ],  [ 13, 9 ],
  [ 12, 8 ],  [ 14, 8 ],  [ 13, 8 ],  [ 14, 7 ],
  [ 13, 7 ],  [ 13, 6 ],  [ 12, 9 ],  [ 11, 8 ],
  [ 10, 8 ],  [ 10, 7 ],  [ 12, 7 ],  [ 11, 7 ],
  [ 10, 6 ],  [ 12, 6 ],  [ 11, 6 ],  [ 10, 5 ],
  [ 9, 6 ],   [ 9, 7 ],   [ 8, 6 ],   [ 8, 7 ],
  [ 9, 5 ],   [ 9, 4 ],   [ 7, 7 ],   [ 6, 7 ],
  [ 7, 6 ],   [ 6, 6 ],   [ 5, 6 ],   [ 7, 3 ],
  [ 7, 4 ],   [ 6, 4 ],   [ 6, 3 ],   [ 4, 5 ],
  [ 3, 5 ],   [ 2, 5 ],   [ 2, 4 ],   [ 3, 4 ],
  [ 3, 3 ],   [ 2, 3 ],   [ 1, 1 ]
]
const HEX = res;
```