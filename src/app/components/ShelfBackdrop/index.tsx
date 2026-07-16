/**
 * Left-side vector bookshelves — grounded shelves with clearer props.
 */
export default function ShelfBackdrop() {
  const shelves = [40, 120, 200, 280, 360, 440, 520, 600, 680, 760, 840];
  const left = 22;
  const right = 118;
  const mid = (left + right) / 2;

  return (
    <div className="shelf-backdrop" aria-hidden>
      <svg
        className="shelf-svg"
        viewBox="0 0 140 880"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMid meet"
      >
        <g className="shelf-frame" fill="none" strokeWidth="1.55" strokeLinecap="square" strokeLinejoin="miter">
          <path d={`M${left} 20 V860`} />
          <path d={`M${right} 20 V860`} />
          {shelves.map((y) => (
            <path key={`s-${y}`} d={`M${left} ${y} H${right}`} />
          ))}
          {[0, 2, 4, 7].map((i) => {
            const y0 = shelves[i];
            const y1 = shelves[i + 1];
            return (
              <path
                key={`v-${i}`}
                d={`M${left + 6} ${y0} L${mid} ${y1} L${right - 6} ${y0}`}
              />
            );
          })}
          <path d={`M${left + 10} ${shelves[9]} L${right - 14} ${shelves[10]}`} />
        </g>

        <g className="shelf-books">
          {/* Shelf 0 — uprights */}
          <Book x={32} shelfY={shelves[0]} w={8} h={28} tone="sb-red" />
          <Book x={42} shelfY={shelves[0]} w={7} h={32} tone="sb-ink" />
          <Book x={51} shelfY={shelves[0]} w={8} h={24} tone="sb-sand" />
          <Book x={78} shelfY={shelves[0]} w={9} h={30} tone="sb-gold" />
          <Book x={89} shelfY={shelves[0]} w={7} h={22} tone="sb-green" />

          {/* Shelf 1 — stack with visible pages + plant */}
          <LyingStack
            x={34}
            shelfY={shelves[1]}
            layers={[
              { w: 28, tone: 'sb-ink' },
              { w: 24, tone: 'sb-gold' },
              { w: 20, tone: 'sb-red' },
            ]}
          />
          <Book x={82} shelfY={shelves[1]} w={8} h={28} tone="sb-sand" />
          <Plant x={96} shelfY={shelves[1]} />

          {/* Shelf 2 — uprights + hot coffee */}
          <Book x={34} shelfY={shelves[2]} w={8} h={26} tone="sb-gold" />
          <Book x={44} shelfY={shelves[2]} w={9} h={30} tone="sb-ink" />
          <Book x={55} shelfY={shelves[2]} w={7} h={22} tone="sb-red" />
          <CoffeeMug x={84} shelfY={shelves[2]} hot />

          {/* Shelf 3 — uprights + teapot */}
          <Book x={34} shelfY={shelves[3]} w={7} h={24} tone="sb-green" />
          <Book x={43} shelfY={shelves[3]} w={9} h={30} tone="sb-ink" />
          <Book x={54} shelfY={shelves[3]} w={8} h={26} tone="sb-gold" />
          <Teapot x={78} shelfY={shelves[3]} />

          {/* Shelf 4 — open book + upright */}
          <OpenBook x={34} shelfY={shelves[4]} />
          <Book x={90} shelfY={shelves[4]} w={8} h={28} tone="sb-red" />

          {/* Shelf 5 — uprights + normal cup */}
          <Book x={34} shelfY={shelves[5]} w={9} h={28} tone="sb-ink" />
          <Book x={45} shelfY={shelves[5]} w={8} h={24} tone="sb-gold" />
          <Book x={55} shelfY={shelves[5]} w={7} h={30} tone="sb-green" />
          <CoffeeMug x={84} shelfY={shelves[5]} />

          {/* Shelf 6 — uprights */}
          <Book x={36} shelfY={shelves[6]} w={8} h={26} tone="sb-red" />
          <Book x={46} shelfY={shelves[6]} w={9} h={30} tone="sb-ink" />
          <Book x={57} shelfY={shelves[6]} w={7} h={22} tone="sb-gold" />
          <Book x={86} shelfY={shelves[6]} w={8} h={28} tone="sb-green" />

          {/* Shelf 7 — lying stack with pages + glasses (only pair) */}
          <LyingStack
            x={34}
            shelfY={shelves[7]}
            layers={[
              { w: 26, tone: 'sb-gold' },
              { w: 22, tone: 'sb-red' },
              { w: 18, tone: 'sb-ink' },
            ]}
          />
          <Glasses x={80} shelfY={shelves[7]} />

          {/* Shelf 8 — uprights */}
          <Book x={36} shelfY={shelves[8]} w={9} h={28} tone="sb-green" />
          <Book x={47} shelfY={shelves[8]} w={8} h={24} tone="sb-ink" />
          <Book x={57} shelfY={shelves[8]} w={8} h={30} tone="sb-gold" />
          <Book x={86} shelfY={shelves[8]} w={9} h={26} tone="sb-red" />

          {/* Shelf 9 — open book */}
          <OpenBook x={36} shelfY={shelves[9]} wide />
          <Book x={96} shelfY={shelves[9]} w={8} h={26} tone="sb-green" />

          {/* Shelf 10 — lying stack + uprights */}
          <LyingStack
            x={36}
            shelfY={shelves[10]}
            layers={[
              { w: 24, tone: 'sb-sand' },
              { w: 20, tone: 'sb-ink' },
            ]}
          />
          <Book x={78} shelfY={shelves[10]} w={8} h={24} tone="sb-red" />
          <Book x={88} shelfY={shelves[10]} w={9} h={28} tone="sb-gold" />
        </g>

        <g className="shelf-spines" strokeWidth="0.7">
          <path d={`M36 ${shelves[0] - 24} V${shelves[0] - 4}`} />
          <path d={`M45.5 ${shelves[0] - 28} V${shelves[0] - 4}`} />
          <path d={`M82.5 ${shelves[0] - 26} V${shelves[0] - 4}`} />
          <path d={`M48.5 ${shelves[2] - 26} V${shelves[2] - 4}`} />
          <path d={`M49.5 ${shelves[5] - 24} V${shelves[5] - 4}`} />
          <path d={`M51.5 ${shelves[8] - 20} V${shelves[8] - 4}`} />
        </g>
      </svg>
    </div>
  );
}

function Book({
  x,
  shelfY,
  w,
  h,
  tone,
}: {
  x: number;
  shelfY: number;
  w: number;
  h: number;
  tone: string;
}) {
  return (
    <rect
      x={x}
      y={shelfY - h}
      width={w}
      height={h}
      className={`shelf-book ${tone}`}
      rx="0.6"
    />
  );
}

/** Horizontal stack — cover + visible page edges */
function LyingStack({
  x,
  shelfY,
  layers,
}: {
  x: number;
  shelfY: number;
  layers: { w: number; tone: string }[];
}) {
  const thickness = 5;
  const pageH = 1.4;
  return (
    <g>
      {layers.map((layer, i) => {
        const y = shelfY - thickness * (i + 1);
        const pageY = y + thickness - pageH - 0.3;
        return (
          <g key={i}>
            <rect
              x={x + i}
              y={y}
              width={layer.w}
              height={thickness}
              className={`shelf-book ${layer.tone}`}
              rx="0.5"
            />
            {/* Page block peeking from the right edge */}
            <rect
              x={x + i + layer.w - 3.2}
              y={pageY}
              width={3.2}
              height={pageH}
              className="shelf-pages"
              rx="0.2"
            />
            {/* Thin page lines */}
            <path
              d={`M${x + i + layer.w - 2.6} ${pageY + 0.35} V${pageY + pageH - 0.2}`}
              className="shelf-page-line"
            />
            <path
              d={`M${x + i + layer.w - 1.6} ${pageY + 0.35} V${pageY + pageH - 0.2}`}
              className="shelf-page-line"
            />
          </g>
        );
      })}
    </g>
  );
}

/** Open book lying on the shelf */
function OpenBook({
  x,
  shelfY,
  wide,
}: {
  x: number;
  shelfY: number;
  wide?: boolean;
}) {
  const w = wide ? 52 : 44;
  const h = 11;
  const mid = x + w / 2;
  const top = shelfY - h;
  return (
    <g className="shelf-open-book">
      {/* Left cover */}
      <path
        d={`M${x} ${shelfY}
           L${x - 1} ${top + 2}
           L${mid - 1} ${top}
           L${mid} ${shelfY} Z`}
        className="shelf-book sb-ink"
      />
      {/* Right cover */}
      <path
        d={`M${mid} ${shelfY}
           L${mid + 1} ${top}
           L${x + w + 1} ${top + 2}
           L${x + w} ${shelfY} Z`}
        className="shelf-book sb-ink"
      />
      {/* Pages left */}
      <path
        d={`M${x + 2} ${shelfY - 1}
           L${x + 1.5} ${top + 3}
           L${mid - 0.5} ${top + 1.5}
           L${mid} ${shelfY - 1} Z`}
        className="shelf-pages"
      />
      {/* Pages right */}
      <path
        d={`M${mid} ${shelfY - 1}
           L${mid + 0.5} ${top + 1.5}
           L${x + w - 1.5} ${top + 3}
           L${x + w - 2} ${shelfY - 1} Z`}
        className="shelf-pages"
      />
      {/* Text lines */}
      <g className="shelf-page-line" strokeWidth="0.55">
        <path d={`M${x + 6} ${top + 5} H${mid - 3}`} />
        <path d={`M${x + 6} ${top + 7} H${mid - 4}`} />
        <path d={`M${x + 6} ${top + 9} H${mid - 3.5}`} />
        <path d={`M${mid + 3} ${top + 5} H${x + w - 6}`} />
        <path d={`M${mid + 4} ${top + 7} H${x + w - 6}`} />
        <path d={`M${mid + 3} ${top + 9} H${x + w - 6}`} />
      </g>
      {/* Spine gutter */}
      <path d={`M${mid} ${top} V${shelfY}`} className="shelf-gutter" strokeWidth="1.2" />
    </g>
  );
}

function Plant({ x, shelfY }: { x: number; shelfY: number }) {
  return (
    <g className="shelf-prop">
      {/* Pot */}
      <path
        d={`M${x + 1} ${shelfY} H${x + 15} L${x + 13} ${shelfY - 10} H${x + 3} Z`}
        className="shelf-pot"
      />
      <ellipse cx={x + 8} cy={shelfY - 10} rx={6} ry={1.8} className="shelf-pot-rim" />

      {/* Stems */}
      <path
        d={`M${x + 8} ${shelfY - 10} C${x + 7} ${shelfY - 18}, ${x + 5} ${shelfY - 24}, ${x + 4} ${shelfY - 30}`}
        className="shelf-stem"
        fill="none"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d={`M${x + 8} ${shelfY - 10} C${x + 9} ${shelfY - 17}, ${x + 12} ${shelfY - 22}, ${x + 14} ${shelfY - 28}`}
        className="shelf-stem"
        fill="none"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d={`M${x + 8} ${shelfY - 10} V${shelfY - 26}`}
        className="shelf-stem"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Leaves — filled shapes so they read clearly */}
      <path
        d={`M${x + 4} ${shelfY - 30}
           C${x - 2} ${shelfY - 32}, ${x - 3} ${shelfY - 26}, ${x + 2} ${shelfY - 24}
           C${x + 4} ${shelfY - 26}, ${x + 5} ${shelfY - 28}, ${x + 4} ${shelfY - 30} Z`}
        className="shelf-leaf-fill"
      />
      <path
        d={`M${x + 14} ${shelfY - 28}
           C${x + 20} ${shelfY - 30}, ${x + 21} ${shelfY - 24}, ${x + 16} ${shelfY - 22}
           C${x + 14} ${shelfY - 24}, ${x + 13} ${shelfY - 26}, ${x + 14} ${shelfY - 28} Z`}
        className="shelf-leaf-fill"
      />
      <path
        d={`M${x + 8} ${shelfY - 26}
           C${x + 3} ${shelfY - 29}, ${x + 2} ${shelfY - 22}, ${x + 7} ${shelfY - 20}
           C${x + 8.5} ${shelfY - 22}, ${x + 9} ${shelfY - 24}, ${x + 8} ${shelfY - 26} Z`}
        className="shelf-leaf-fill"
      />
      <path
        d={`M${x + 8} ${shelfY - 26}
           C${x + 13} ${shelfY - 29}, ${x + 14} ${shelfY - 22}, ${x + 9} ${shelfY - 20}
           C${x + 7.5} ${shelfY - 22}, ${x + 7} ${shelfY - 24}, ${x + 8} ${shelfY - 26} Z`}
        className="shelf-leaf-fill"
      />
      {/* Leaf veins */}
      <g className="shelf-leaf-vein" fill="none" strokeWidth="0.7" strokeLinecap="round">
        <path d={`M${x + 3.5} ${shelfY - 28.5} C${x + 1} ${shelfY - 29}, ${x} ${shelfY - 26.5}, ${x + 2} ${shelfY - 25}`} />
        <path d={`M${x + 14.5} ${shelfY - 26.5} C${x + 17} ${shelfY - 27}, ${x + 18} ${shelfY - 24.5}, ${x + 16} ${shelfY - 23}`} />
        <path d={`M${x + 7.5} ${shelfY - 24.5} C${x + 5} ${shelfY - 25}, ${x + 4.5} ${shelfY - 22}, ${x + 6.5} ${shelfY - 21}`} />
        <path d={`M${x + 8.5} ${shelfY - 24.5} C${x + 11} ${shelfY - 25}, ${x + 11.5} ${shelfY - 22}, ${x + 9.5} ${shelfY - 21}`} />
      </g>
    </g>
  );
}

/** Teapot with a clear pointed spout */
function Teapot({ x, shelfY }: { x: number; shelfY: number }) {
  return (
    <g className="shelf-prop">
      {/* Larger body */}
      <ellipse cx={x + 10} cy={shelfY - 10} rx={11} ry={8.5} className="shelf-cup-body" />
      {/* Lid */}
      <ellipse cx={x + 10} cy={shelfY - 18} rx={5.5} ry={2.2} className="shelf-cup-body" />
      <path
        d={`M${x + 10} ${shelfY - 20} V${shelfY - 23.5}`}
        className="shelf-cup-line"
        fill="none"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Handle */}
      <path
        d={`M${x - 0.5} ${shelfY - 13} C${x - 7} ${shelfY - 15}, ${x - 7} ${shelfY - 5}, ${x + 1} ${shelfY - 6}`}
        className="shelf-cup-line"
        fill="none"
        strokeWidth="2"
      />
      {/* Spout — moderate length */}
      <path
        d={`M${x + 19} ${shelfY - 12}
           C${x + 23.5} ${shelfY - 15}, ${x + 25.5} ${shelfY - 14.5}, ${x + 27.5} ${shelfY - 13}
           L${x + 26.2} ${shelfY - 11.4}
           C${x + 24} ${shelfY - 12.6}, ${x + 21.5} ${shelfY - 11}, ${x + 20} ${shelfY - 9}
           Z`}
        className="shelf-cup-body"
      />
      <path
        d={`M${x + 25.8} ${shelfY - 13.1} L${x + 27.7} ${shelfY - 12.9}`}
        className="shelf-spout-tip"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </g>
  );
}

function CoffeeMug({ x, shelfY, hot }: { x: number; shelfY: number; hot?: boolean }) {
  return (
    <g className="shelf-prop">
      <path
        d={`M${x} ${shelfY} H${x + 14} V${shelfY - 14} H${x} Z`}
        className="shelf-cup-body"
      />
      <path
        d={`M${x + 14} ${shelfY - 11} C${x + 20} ${shelfY - 12}, ${x + 20} ${shelfY - 4}, ${x + 14} ${shelfY - 3}`}
        className="shelf-cup-line"
        fill="none"
        strokeWidth="1.8"
      />
      <path
        d={`M${x + 2} ${shelfY - 12} H${x + 12}`}
        className="shelf-cup-rim"
        strokeWidth="1.2"
      />
      {hot && (
        <g className="shelf-steam" fill="none" strokeWidth="1.4" strokeLinecap="round">
          <path d={`M${x + 3.5} ${shelfY - 16} C${x + 2} ${shelfY - 20}, ${x + 5.5} ${shelfY - 22}, ${x + 3.5} ${shelfY - 27}`} />
          <path d={`M${x + 7} ${shelfY - 16} C${x + 5.5} ${shelfY - 21}, ${x + 9} ${shelfY - 23}, ${x + 7} ${shelfY - 28}`} />
          <path d={`M${x + 10.5} ${shelfY - 16} C${x + 9} ${shelfY - 20}, ${x + 12.5} ${shelfY - 22}, ${x + 10.5} ${shelfY - 26}`} />
        </g>
      )}
    </g>
  );
}

function Glasses({ x, shelfY }: { x: number; shelfY: number }) {
  const cy = shelfY - 8;
  return (
    <g className="shelf-glasses" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx={x + 6} cy={cy} r={5.5} strokeWidth="2" />
      <circle cx={x + 20} cy={cy} r={5.5} strokeWidth="2" />
      <path d={`M${x + 11.5} ${cy} H${x + 14.5}`} strokeWidth="2" />
      <path d={`M${x} ${cy - 1} H${x + 0.5}`} strokeWidth="1.8" />
      <path d={`M${x + 25.5} ${cy - 1} H${x + 27}`} strokeWidth="1.8" />
      <circle cx={x + 6} cy={cy} r={3.2} className="shelf-lens-fill" stroke="none" />
      <circle cx={x + 20} cy={cy} r={3.2} className="shelf-lens-fill" stroke="none" />
    </g>
  );
}
