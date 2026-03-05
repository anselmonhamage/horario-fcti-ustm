import { X, Sun, Sunset, Moon, MapPin, FlaskConical, Building2, User, Clock, AlertTriangle } from 'lucide-react';
import { DIAS, DIA_SHORT } from '../data/schedules';
import { discColor, timeToMin } from '../utils/utils';

const turnoIcons = { Manhã: Sun, Tarde: Sunset, Noite: Moon };

export default function TurmaDetail({ selected, roomConflicts, teacherConflicts, onClose }) {
    const TurnoIcon = turnoIcons[selected.turno];
    const cursoClass = selected.curso === "LDS" ? "lds" : "lasir";
    const turnoClass = selected.turno === "Manhã" ? "morning" : selected.turno === "Tarde" ? "afternoon" : "night";
    const cursoFull = selected.curso === "LDS" ? "Licenciatura em Desenvolvimento de Software" : "Licenciatura em Administração de Sistemas de Informação e Redes";

    return (
        <div className="detail-panel">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                <div>
                    <div style={{ fontSize: 22, fontWeight: 700, color: "var(--text)" }}>{selected.turma}</div>
                    <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>{cursoFull}</div>
                </div>
                <button className="close-btn" onClick={onClose}><X size={18} /></button>
            </div>

            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
                <span className="badge" style={{ background: `var(--${turnoClass}-bg)`, color: `var(--${turnoClass}-tx)` }}><TurnoIcon size={12} /> {selected.turno}</span>
                <span className="badge" style={{ background: `var(--${cursoClass}-bg)`, color: `var(--${cursoClass}-tx)` }}>{selected.curso}</span>
                <span className="badge" style={{ background: "var(--pill)", color: "var(--pill-text)" }}>{selected.ano}º Ano · {selected.semestre}º Semestre</span>
                <span className="badge" style={{ background: "var(--pill)", color: "var(--amber)" }}><MapPin size={12} /> Sala {selected.sala}</span>
                <span className="badge" style={{ background: "var(--pill)", color: "var(--muted)" }}>{selected.periodo}</span>
                <span className="badge" style={{ background: "var(--pill)", color: "var(--pill-text)" }}>{selected.aulas.length} aulas/sem</span>
            </div>

            {(roomConflicts.length > 0 || teacherConflicts.length > 0) && (
                <div className="alert-box" style={{ background: "var(--warn-bg)", border: "1px solid var(--warn-border)" }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "var(--warn)", marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}>
                        <AlertTriangle size={14} /> {roomConflicts.length + teacherConflicts.length} conflito(s) detectado(s)
                    </div>
                    {roomConflicts.map((c, i) => (
                        <div key={`r${i}`} style={{ fontSize: 12, color: "var(--sub)", marginBottom: 4, display: "flex", alignItems: "center", gap: 5 }}>
                            <Building2 size={12} /> <b>Sala {c.sala}</b> — {c.dia}: {c.turmaA.replace(/ - (Não existe|Recém-criada)/, "")} ({c.discA}, {c.horaA}) ↔ {c.turmaB.replace(/ - (Não existe|Recém-criada)/, "")} ({c.discB}, {c.horaB})
                        </div>
                    ))}
                    {teacherConflicts.map((c, i) => (
                        <div key={`t${i}`} style={{ fontSize: 12, color: "var(--sub)", marginBottom: 4, display: "flex", alignItems: "center", gap: 5 }}>
                            <User size={12} /> <b>{c.docente}</b> — {c.dia}: {c.turmaA.replace(/ - (Não existe|Recém-criada)/, "")} ({c.discA}) ↔ {c.turmaB.replace(/ - (Não existe|Recém-criada)/, "")} ({c.discB})
                        </div>
                    ))}
                </div>
            )}

            <div style={{ marginBottom: 20, border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden" }}>
                <div className="section-label" style={{ padding: "10px 14px", margin: 0, background: "var(--subtle-bg)", borderBottom: "1px solid var(--border)" }}>Disciplinas & Docentes</div>
                <div style={{ overflowX: "auto" }}>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Docente</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(selected.disciplinas).map(([sig, doc]) => (
                                <tr key={sig}>
                                    <td>
                                        <span style={{ background: `${discColor(sig)}22`, color: discColor(sig), padding: "3px 10px", borderRadius: 5, fontWeight: 600, fontSize: 12 }}>{sig}</span>
                                    </td>
                                    <td style={{ color: doc ? "var(--text)" : "var(--muted)", fontStyle: doc ? "normal" : "italic" }}>{doc || "não atribuído"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="section-label">Grade Semanal</div>
            <div className="week-grid">
                {DIAS.map(dia => {
                    const aulas = [...selected.aulas].filter(a => a.dia === dia).sort((a, b) => timeToMin(a.inicio) - timeToMin(b.inicio));
                    return (
                        <div key={dia} className="day-column">
                            <div className="day-header">{DIA_SHORT[dia] || dia.slice(0, 3)}</div>
                            {aulas.length === 0
                                ? <div style={{ color: "var(--dash-color)", fontSize: 12, textAlign: "center", padding: "8px 0" }}>—</div>
                                : aulas.map((a, i) => (
                                    <div key={i} className="class-block" style={{ background: `${discColor(a.disciplina)}12`, borderColor: `${discColor(a.disciplina)}30`, borderLeftColor: discColor(a.disciplina) }}>
                                        <div style={{ fontWeight: 600, color: discColor(a.disciplina), fontSize: 12, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{a.disciplina}</div>
                                        <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 2, display: "flex", alignItems: "center", gap: 3 }}><Clock size={10} /> {a.inicio}–{a.fim}</div>
                                        {a.docente && <div style={{ fontSize: 10, color: "var(--sub)", marginTop: 3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{a.docente.split(" ")[0]}</div>}
                                        {a.lab && <div style={{ marginTop: 4, display: "inline-flex", alignItems: "center", gap: 3, background: "var(--lab-bg)", color: "var(--lab-tx)", padding: "2px 6px", borderRadius: 4, fontSize: 10 }}><FlaskConical size={10} /> {a.lab}</div>}
                                    </div>
                                ))
                            }
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
