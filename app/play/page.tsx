export default function Play() {
  return (
    <main style={{ padding: 24 }}>
      <h1>MISORIA Demo</h1>

      <iframe
        src="/misoria/index.html"
        style={{
          width: "100%",
          height: "80vh",
          border: "none",
        }}
      />
    </main>
  );
}
