import videos from "../data/videos.json";

export default function Catalogo() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Cinéva - Catálogo</h1>
      <p>Escolhe um filme para assistir:</p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        marginTop: "20px"
      }}>
        {videos.map((video) => (
          <div key={video.id} style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
          }}>
            <img src={video.thumbnail} alt={video.title} style={{ width: "100%" }} />
            <div style={{ padding: "10px" }}>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
              <a
                href={`/video/${video.id}`}
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  padding: "8px 12px",
                  backgroundColor: "#111",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "6px"
                }}
              >
                Assistir
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
