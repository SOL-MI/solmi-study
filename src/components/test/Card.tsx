import { makePlugOf, withOutlet } from "./withOutletTest";

const CardWithSlots = withOutlet(
  ["Header", "Body", "Footer"],
  ({ outlets, className }) => (
    <div
      className={className}
      style={{ border: "1px solid #ddd", borderRadius: "8px" }}
    >
      <div style={{ padding: "16px", borderBottom: "1px solid #ddd" }}>
        {outlets.Header}
      </div>
      <div style={{ padding: "16px" }}>{outlets.Body}</div>
      <div style={{ padding: "16px", borderTop: "1px solid #ddd" }}>
        {outlets.Footer}
      </div>
    </div>
  )
);

const HeaderPlug = makePlugOf("Header");
const BodyPlug = makePlugOf("Body");
const FooterPlug = makePlugOf("Footer");

export const Card = Object.assign(CardWithSlots, {
  Header: HeaderPlug,
  Body: BodyPlug,
  Footer: FooterPlug,
});
