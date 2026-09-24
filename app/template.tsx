// A template (unlike a layout) is re-created on every navigation, so this
// fade replays each time the route changes.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-fade">{children}</div>;
}
