import { ImageResponse } from "next/og";

export const alt = "Kayque Miqueias | Desenvolvedor Full-Stack";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    background: "#171717",
                    color: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "80px",
                }}
            >
                <div
                    style={{
                        fontSize: "72px",
                        fontWeight: 700,
                        letterSpacing: "-2px",
                    }}
                >
                    Kayque Miqueias
                </div>

                <div
                    style={{
                        marginTop: "20px",
                        fontSize: "40px",
                        color: "#a3a3a3",
                    }}
                >
                    Desenvolvedor Full-Stack
                </div>

                <div
                    style={{
                        marginTop: "40px",
                        fontSize: "26px",
                        color: "#737373",
                    }}
                >
                    Portfólio • Projetos • Tecnologias • Certificados
                </div>
            </div>
        ),
        size,
    );
}