import { Sun, Sunset, Moon, AlertTriangle } from 'lucide-react';
import { SCHEDULES } from '../data/schedules';

const turnoIcons = { Manhã: Sun, Tarde: Sunset, Noite: Moon };

export default function SalasView({ hasConflict, onSelectTurma }) {
    const salaMap = {};
    SCHEDULES.forEach(s => {
        if (!salaMap[s.sala]) salaMap[s.sala] = [];
        salaMap[s.sala].push(s);
    });

    const sorted = Object.entries(salaMap).sort(([a], [b]) => {
        if (a.includes("ver")) return 1;
        if (b.includes("ver")) return -1;
        return parseInt(a) - parseInt(b);
    });

    return (
        <div>
            <div style={{ fontSize: 12, color: "var(--muted)", marginBottom: 16 }}>{Object.keys(salaMap).length} salas em uso</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 14 }}>
                {sorted.map(([sala, turmas]) => {
                    const anyConflict = turmas.some(t => hasConflict(t.turma));
                    return (
                        <div key={sala} className="sala-card" style={anyConflict ? { borderColor: "var(--warn-border)" } : {}}>
                            <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <span style={{ fontSize: 16, fontWeight: 700, color: "var(--text)" }}>Sala {sala}</span>
                                <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                                    <span className="badge" style={{ background: "var(--pill)", color: "var(--muted)" }}>{turmas.length} turma{turmas.length > 1 ? "s" : ""}</span>
                                    {anyConflict && <AlertTriangle size={14} style={{ color: "var(--warn)" }} />}
                                </div>
                            </div>
                            <div style={{ overflowX: "auto" }}>
                                <table className="data-table">
                                    <tbody>
                                        {turmas.map((t, idx) => {
                                            const hc = hasConflict(t.turma);
                                            const TurnoIcon = turnoIcons[t.turno];
                                            const turnoClass = t.turno === "Manhã" ? "morning" : t.turno === "Tarde" ? "afternoon" : "night";
                                            const isLast = idx === turmas.length - 1;
                                            return (
                                                <tr key={t.turma} style={{ cursor: "pointer" }} onClick={() => onSelectTurma(t.turma)}>
                                                    <td style={{ fontWeight: 500, color: "var(--text)", borderBottom: isLast ? "none" : undefined }}>
                                                        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                                            {t.turma} {hc && <AlertTriangle size={12} style={{ color: "var(--warn)" }} />}
                                                        </div>
                                                    </td>
                                                    <td style={{ borderBottom: isLast ? "none" : undefined }}>
                                                        <span className="badge" style={{ background: `var(--${turnoClass}-bg)`, color: `var(--${turnoClass}-tx)` }}>
                                                            <TurnoIcon size={11} /> {t.turno}
                                                        </span>
                                                    </td>
                                                    <td style={{ color: "var(--muted)", textAlign: "right", borderBottom: isLast ? "none" : undefined }}>{t.aulas.length} aulas</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
