export const createSVG = (tag) => document.createElementNS("http://www.w3.org/2000/svg", tag || "svg");

export const createPolygon = (points) => {
  const p = createSVG("polygon");
  p.setAttribute("points", points.map(i => i.join(",")).join(" "));
  p.setAttribute("fill", "white");
  p.setAttribute("stroke", "black");
  return p;
};

//const p = createPolygon([[0, 0], [100, 0], [100, 100], [0, 100]]);

export const createPolygonHex = (cx, cy, r) => {
  const points = [];
  for (let i = 0; i < 6; i++) {
    const th = Math.PI * 2 / 6 * i + Math.PI / 6;
    const x = cx + Math.cos(th) * r;
    const y = cy + Math.sin(th) * r;
    points.push([x, y]);
  }
  return createPolygon(points);
};

export const createText = (x, y, len, size, text) => {
  const p = createSVG("text");
  p.setAttribute("x", x);
  p.setAttribute("y", y);
  p.setAttribute("textLength", len);
  p.setAttribute("font-size", size);
  p.setAttribute("fill", "black");
  p.textContent = text;
  return p;
};