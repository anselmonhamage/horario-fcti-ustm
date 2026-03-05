import { Sun, Sunset, Moon, AlertTriangle } from 'lucide-react';

const turnoIcons = { Manhã: Sun, Tarde: Sunset, Noite: Moon };

export default function TurmaCard({ turma, selected, hasConflict, onClick }) {
    const TurnoIcon = turnoIcons[turma.turno];
    const cursoClass = turma.curso === "LDS" ? "lds" : "lasir";
    const turnoClass = turma.turno === "Manhã" ? "morning" : turma.turno === "Tarde" ? "afternoon" : "night";

    return (
        <div
            className={`turma-card${selected ? " selected" : ""}`}
            onClick={onClick}
        >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                <div style={{ fontWeight: 600, fontSize: 13, color: "var(--text)", lineHeight: 1.4, display: "flex", alignItems: "center", gap: 6 }}>
                    {turma.turma}
                    {hasConflict && <AlertTriangle size={13} style={{ color: "var(--warn)" }} />}
                </div>
                <span className="badge" style={{ background: `var(--${cursoClass}-bg)`, color: `var(--${cursoClass}-tx)` }}>{turma.curso}</span>
            </div>
            <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
                <span className="badge" style={{ background: `var(--${turnoClass}-bg)`, color: `var(--${turnoClass}-tx)` }}>
                    <TurnoIcon size={12} /> {turma.turno}
                </span>
                <span className="badge" style={{ background: "var(--pill)", color: "var(--pill-text)" }}>
                    {turma.ano}A · {turma.semestre}S
                </span>
                <span className="badge" style={{ background: "var(--pill)", color: "var(--amber)" }}>
                    Sala {turma.sala}
                </span>
            </div>
        </div>
    );
}
