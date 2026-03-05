import { Building2, User, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import { discColor } from '../utils/utils';

export default function ConflictsView({ roomConflicts, teacherConflicts, conflictTab, setConflictTab, onSelectTurma }) {
    return (
        <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 24, borderBottom: "1px solid var(--border)" }}>
                <button className={`tab-btn${conflictTab === "salas" ? " active" : ""}`} onClick={() => setConflictTab("salas")}>
                    <Building2 size={14} /> Sala ({roomConflicts.length})
                </button>
                <button className={`tab-btn${conflictTab === "docentes" ? " active" : ""}`} onClick={() => setConflictTab("docentes")}>
                    <User size={14} /> Docentes ({teacherConflicts.length})
                </button>
            </div>

            {conflictTab === "salas" && (
                roomConflicts.length === 0
                    ? <div className="alert-box" style={{ background: "var(--ok-bg)", border: "1px solid var(--ok-border)", color: "var(--ok)", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: 24 }}><CheckCircle size={16} /> Sem conflitos de sala</div>
                    : <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                        {roomConflicts.map((c, i) => (
                            <div key={i} className="conflict-card" style={{ background: "var(--warn-bg)", border: "1px solid var(--warn-border)" }}>
                                <div className="conflict-card-header" style={{ borderBottom: "1px solid var(--warn-border)" }}>
                                    <span className="badge" style={{ background: "var(--warn-bg)", color: "var(--warn)" }}><Building2 size={12} /> Sala {c.sala}</span>
                                    <span style={{ color: "var(--sub)", fontSize: 12 }}>{c.dia}</span>
                                </div>
                                <div className="conflict-card-body">
                                    {[{ t: c.turmaA, d: c.discA, h: c.horaA, doc: c.docenteA }, { t: c.turmaB, d: c.discB, h: c.horaB, doc: c.docenteB }].map((item, idx) => (
                                        <div key={idx} className="conflict-item" onClick={() => onSelectTurma(item.t)}>
                                            <div style={{ fontWeight: 600, color: "var(--accent)", fontSize: 13, marginBottom: 3 }}>{item.t.replace(/ - N existe/, "")}</div>
                                            <div style={{ color: discColor(item.d), fontWeight: 500, fontSize: 12 }}>{item.d}</div>
                                            <div style={{ color: "var(--muted)", fontSize: 11, marginTop: 3, display: "flex", alignItems: "center", gap: 4 }}><Clock size={11} /> {item.h}</div>
                                            {item.doc && <div style={{ color: "var(--sub)", fontSize: 11, marginTop: 3, display: "flex", alignItems: "center", gap: 4 }}><User size={11} /> {item.doc}</div>}
                                        </div>
                                    ))}
                                    <div style={{ textAlign: "center", color: "var(--warn)", fontSize: 18 }}>↔</div>
                                </div>
                            </div>
                        ))}
                    </div>
            )}

            {conflictTab === "docentes" && (
                teacherConflicts.length === 0
                    ? <div className="alert-box" style={{ background: "var(--ok-bg)", border: "1px solid var(--ok-border)", color: "var(--ok)", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: 24 }}><CheckCircle size={16} /> Sem conflitos de docentes</div>
                    : <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                        {teacherConflicts.map((c, i) => (
                            <div key={i} className="conflict-card" style={{ background: "var(--amber-bg)", border: "1px solid var(--amber-border)" }}>
                                <div className="conflict-card-header" style={{ borderBottom: "1px solid var(--amber-border)" }}>
                                    <span className="badge" style={{ background: "var(--amber-bg)", color: "var(--amber)" }}><User size={12} /> {c.docente}</span>
                                    <span style={{ color: "var(--sub)", fontSize: 12 }}>{c.dia}</span>
                                </div>
                                <div className="conflict-card-body">
                                    {[{ t: c.turmaA, disc: c.discA, h: c.horaA }, { t: c.turmaB, disc: c.discB, h: c.horaB }].map((item, idx) => (
                                        <div key={idx} className="conflict-item" onClick={() => onSelectTurma(item.t)}>
                                            <div style={{ fontWeight: 600, color: "var(--amber)", fontSize: 13, marginBottom: 3 }}>{item.t.replace(/ - N existe/, "")}</div>
                                            <div style={{ color: discColor(item.disc), fontWeight: 500, fontSize: 12 }}>{item.disc}</div>
                                            <div style={{ color: "var(--muted)", fontSize: 11, marginTop: 3, display: "flex", alignItems: "center", gap: 4 }}><Clock size={11} /> {item.h}</div>
                                        </div>
                                    ))}
                                    <div style={{ textAlign: "center", color: "var(--amber)", fontSize: 18 }}>↔</div>
                                </div>
                            </div>
                        ))}
                    </div>
            )}
        </div>
    );
}
