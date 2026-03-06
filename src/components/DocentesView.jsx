import { FlaskConical, AlertTriangle, BookOpen, Calendar } from 'lucide-react';
import { SCHEDULES } from '../data/schedules';

export default function DocentesView({ teacherConflicts, onSelectTurma }) {
    const docenteMap = {};
    SCHEDULES.forEach(s => s.aulas.forEach(a => {
        if (!a.docente) return;
        if (!docenteMap[a.docente]) docenteMap[a.docente] = { docente: a.docente, turmas: new Set(), aulas: [], conflitos: 0 };
        docenteMap[a.docente].turmas.add(s.turma);
        docenteMap[a.docente].aulas.push({ ...a, turma: s.turma });
    }));
    teacherConflicts.forEach(c => { if (docenteMap[c.docente]) docenteMap[c.docente].conflitos++; });
    const docentes = Object.values(docenteMap).sort((a, b) => b.aulas.length - a.aulas.length);

    return (
        <div>
            <div style={{ fontSize: 12, color: "var(--muted)", marginBottom: 16 }}>{docentes.length} docentes · clique numa turma para ver horário</div>

            <div className="docentes-cards">
                {docentes.map(dc => {
                    const dias = [...new Set(dc.aulas.map(a => a.dia))];
                    const labs = dc.aulas.filter(a => a.lab).length;
                    return (
                        <div key={dc.docente} className="docente-card">
                            <div className="docente-card-header">
                                <div className="docente-card-name">{dc.docente}</div>
                                <div className="docente-card-stats">
                                    <span className="badge" style={{ background: "var(--pill)", color: "var(--accent)", fontWeight: 600 }}>
                                        <BookOpen size={11} /> {dc.aulas.length} aulas
                                    </span>
                                    {dc.conflitos > 0 && (
                                        <span className="badge" style={{ background: "var(--warn-bg)", color: "var(--warn)", border: "1px solid var(--warn-border)" }}>
                                            <AlertTriangle size={11} /> {dc.conflitos}
                                        </span>
                                    )}
                                    {labs > 0 && (
                                        <span className="badge" style={{ background: "var(--lab-bg)", color: "var(--lab-tx)" }}>
                                            <FlaskConical size={11} /> {labs}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="docente-card-turmas">
                                {[...dc.turmas].map(t => {
                                    const curso = SCHEDULES.find(s => s.turma === t)?.curso || "LDS";
                                    const cls = curso === "LDS" ? "lds" : "lasir";
                                    return (
                                        <span key={t} className="badge" style={{ background: `var(--${cls}-bg)`, color: `var(--${cls}-tx)`, cursor: "pointer", fontSize: 10 }}
                                            onClick={() => onSelectTurma(t)}>{t.split(" ")[0]}</span>
                                    );
                                })}
                            </div>
                            <div className="docente-card-dias">
                                <Calendar size={11} style={{ color: "var(--muted)" }} />
                                {dias.map(dia => <span key={dia} className="badge" style={{ background: "var(--pill)", color: "var(--pill-text)", fontSize: 10 }}>{dia.slice(0, 3)}</span>)}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="docentes-table-wrapper">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Docente</th>
                            <th>Turmas</th>
                            <th>Aulas/sem</th>
                            <th>Dias</th>
                            <th>Labs</th>
                            <th>Conflitos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {docentes.map(dc => {
                            const dias = [...new Set(dc.aulas.map(a => a.dia))];
                            const labs = dc.aulas.filter(a => a.lab).length;
                            return (
                                <tr key={dc.docente}>
                                    <td style={{ fontWeight: 600, color: "var(--text)", whiteSpace: "nowrap" }}>{dc.docente}</td>
                                    <td style={{ maxWidth: 260 }}>
                                        <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                                            {[...dc.turmas].map(t => {
                                                const curso = SCHEDULES.find(s => s.turma === t)?.curso || "LDS";
                                                const cls = curso === "LDS" ? "lds" : "lasir";
                                                return (
                                                    <span key={t} className="badge" style={{ background: `var(--${cls}-bg)`, color: `var(--${cls}-tx)`, cursor: "pointer", fontSize: 10 }}
                                                        onClick={() => onSelectTurma(t)}>{t.split(" ")[0]}</span>
                                                );
                                            })}
                                        </div>
                                    </td>
                                    <td><span style={{ fontWeight: 600, color: "var(--accent)" }}>{dc.aulas.length}</span></td>
                                    <td>
                                        <div style={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                                            {dias.map(dia => <span key={dia} className="badge" style={{ background: "var(--pill)", color: "var(--pill-text)" }}>{dia.slice(0, 3)}</span>)}
                                        </div>
                                    </td>
                                    <td>
                                        {labs > 0 ? <span style={{ color: "var(--lab-tx)", fontWeight: 500, display: "flex", alignItems: "center", gap: 4 }}><FlaskConical size={13} /> {labs}</span> : <span style={{ color: "var(--dash-color)" }}>—</span>}
                                    </td>
                                    <td>
                                        {dc.conflitos > 0
                                            ? <span style={{ color: "var(--warn)", fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}><AlertTriangle size={13} /> {dc.conflitos}</span>
                                            : <span style={{ color: "var(--dash-color)" }}>—</span>}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
