export function BeeIcon({ size = 24 }: { size?: number }) {
  return (
    <img
      src="/icons/bee-favicon.gif" // or /favicon.svg or wherever your vector lives
      alt="Bee icon"
      width={size}
      height={size}
      className="inline-block align-middle"
    />
  );
}
