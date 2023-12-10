import { createSVG, createPolygonHex, createText } from "./svgutil.js";
import { JAPAN_PREF_EN, JAPAN_PREF_SHORT } from "https://js.sabae.cc/JAPAN_PREF.js";

// 世界を六角形で表したい - cucumber flesh
// https://uribo.hatenablog.com/entry/2017/10/20/100717
const HEX = [
  [ 15, 14 ], [ 14, 12 ], [ 15, 11 ], [ 14, 10 ],
  [ 14, 11 ], [ 13, 10 ], [ 14, 9 ],  [ 14, 8 ],
  [ 13, 8 ],  [ 13, 9 ],  [ 12, 8 ],  [ 14, 7 ],
  [ 13, 7 ],  [ 13, 6 ],  [ 12, 9 ],  [ 11, 8 ],
  [ 10, 8 ],  [ 10, 7 ],  [ 12, 7 ],  [ 11, 7 ],
  [ 10, 6 ],  [ 12, 6 ],  [ 11, 6 ],  [ 10, 5 ],
  [ 9, 6 ],   [ 9, 7 ],   [ 8, 6 ],   [ 8, 7 ],
  [ 9, 5 ],   [ 9, 4 ],   [ 7, 7 ],   [ 6, 7 ],
  [ 7, 6 ],   [ 6, 6 ],   [ 5, 6 ],   [ 7, 3 ],
  [ 7, 4 ],   [ 6, 4 ],   [ 6, 3 ],   [ 4, 5 ],
  [ 3, 5 ],   [ 2, 5 ],   [ 2, 4 ],   [ 3, 4 ],
  [ 3, 3 ],   [ 2, 3 ],   [ 1, 1 ]
];

export class SelectPrefHex extends HTMLElement {
  constructor() {
    super();
    const svg = createSVG();
    const w = 20;
    const wx = Math.cos(Math.PI / 6) * w * 2;
    const wy = Math.sin(Math.PI / 6) * w + w;
    const ty = Math.sin(Math.PI / 6) * w / 2;
    svg.setAttribute("width", wx * 16);
    svg.setAttribute("height", wy * 15);
    //svg.style.background = "red";
    this.appendChild(svg);
    const cx = wx / 4;
    const cy = 0;
    const tw = wx * .7;
    const tw3 = wx * .9;
    for (let i = 0; i < HEX.length; i++) {
      const h = HEX[i];
      const x = cx + h[0] * wx + (h[1] % 2 == 0 ? 0 : -wx / 2);
      const y = cy + (15 - h[1]) * wy;
      const p = createPolygonHex(x, y, w);
      p.setAttribute("stroke-width", 2);
      svg.appendChild(p);
      p.pref = JAPAN_PREF_SHORT[i];

      const tw0 = p.pref.length == 3 ? tw3 : tw;
      const t = createText(x - tw0 / 2, y + ty, tw0, w / 2, p.pref);
      svg.appendChild(t);
      p.style.cursor = t.style.cursor = "pointer";

      t.onclick = p.onclick = () => {
        const en = JAPAN_PREF_EN[i];
        location.hash = en;
      };
      p.onmouseenter = t.onmouseenter = () => {
        p.setAttribute("fill", "black");
        t.setAttribute("fill", "white");
      };
      p.onmouseleave = t.onmouseleave = () => {
        p.setAttribute("fill", "white");
        t.setAttribute("fill", "black");
      };
    }
  }
};

customElements.define("select-pref-hex", SelectPrefHex);
