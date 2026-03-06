import { useState, useMemo } from 'react';
import { Building2, User, Clock, CheckCircle, AlertTriangle, MapPin, ChevronDown, ChevronUp, Info, Filter } from 'lucide-react';
import { discColor } from '../utils/utils';

function ConflictLegend() {
    return (
        <div className="conflict-legend">
            <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", marginBottom: 10, display: "flex", alignItems: "center", gap: 6 }}>
                <Info size={14} /> Como interpretar os conflitos
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10 }}>
                <div className="legend-item">
                    <span className="legend-dot" style={{ background: "var(--conflict-room)" }}></span>
                    <div>
                        <div style={{ fontWeight: 600, fontSize: 12, color: "var(--text)" }}>Conflito de Sala</div>
                        <div style={{ fontSize: 11, color: "var(--muted)" }}>Duas turmas na mesma sala ao mesmo tempo</div>
                    </div>
                </div>
                <div className="legend-item">
                    <span className="legend-dot" style={{ background: "var(--conflict-teacher)" }}></span>
                    <div>
                        <div style={{ fontWeight: 600, fontSize: 12, color: "var(--text)" }}>Conflito de Docente</div>
                        <div style={{ fontSize: 11, color: "var(--muted)" }}>Um docente escalado em duas turmas ao mesmo tempo</div>
                    </div>
                </div>
                <div className="legend-item">
                    <span className="legend-dot" style={{ background: "var(--conflict-both)" }}></span>
                    <div>
                        <div style={{ fontWeight: 600, fontSize: 12, color: "var(--text)" }}>Conflito Duplo</div>
                        <div style={{ fontSize: 11, color: "var(--muted)" }}>Conflito de sala e docente simultaneamente</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ConflictStats({ roomConflicts, teacherConflicts }) {
    const roomBySala = {};
    roomConflicts.forEach(c => {
        roomBySala[c.sala] = (roomBySala[c.sala] || 0) + 1;
    });

    const teacherByDocente = {};
    teacherConflicts.forEach(c => {
        teacherByDocente[c.docente] = (teacherByDocente[c.docente] || 0) + 1;
    });

    const topRooms = Object.entries(roomBySala).sort((a, b) => b[1] - a[1]).slice(0, 5);
    const topTeachers = Object.entries(teacherByDocente).sort((a, b) => b[1] - a[1]).slice(0, 5);

    return (
        <div className="conflict-stats-grid">
            <div className="conflict-stat-card">
                <div className="stat-number" style={{ color: "var(--conflict-room)" }}>{roomConflicts.length}</div>
                <div className="stat-label">Conflitos de Sala</div>
                {topRooms.length > 0 && (
                    <div className="stat-detail">
                        {topRooms.map(([sala, count]) => (
                            <div key={sala} className="stat-bar">
                                <span className="stat-bar-label">Sala {sala}</span>
                                <div className="stat-bar-track">
                                    <div className="stat-bar-fill room-bar" style={{ width: `${(count / roomConflicts.length) * 100}%` }}></div>
                                </div>
                                <span className="stat-bar-count">{count}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="conflict-stat-card">
                <div className="stat-number" style={{ color: "var(--conflict-teacher)" }}>{teacherConflicts.length}</div>
                <div className="stat-label">Conflitos de Docente</div>
                {topTeachers.length > 0 && (
                    <div className="stat-detail">
                        {topTeachers.map(([doc, count]) => (
                            <div key={doc} className="stat-bar">
                                <span className="stat-bar-label">{doc.split(" ")[doc.split(" ").length - 1]}</span>
                                <div className="stat-bar-track">
                                    <div className="stat-bar-fill teacher-bar" style={{ width: `${(count / teacherConflicts.length) * 100}%` }}></div>
                                </div>
                                <span className="stat-bar-count">{count}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="conflict-stat-card total">
                <div className="stat-number" style={{ color: "var(--conflict-both)" }}>{roomConflicts.length + teacherConflicts.length}</div>
                <div className="stat-label">Total de Conflitos</div>
                <div className="stat-detail" style={{ marginTop: 10 }}>
                    <div style={{ fontSize: 11, color: "var(--muted)", lineHeight: 1.5 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 4 }}>
                            <Building2 size={11} style={{ color: "var(--conflict-room)" }} />
                            {Object.keys(roomBySala).length} sala(s) com conflito
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                            <User size={11} style={{ color: "var(--conflict-teacher)" }} />
                            {Object.keys(teacherByDocente).length} docente(s) com conflito
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function RoomConflictCard({ conflict, index, onSelectTurma }) {
    const [expanded, setExpanded] = useState(false);

    const items = [
        { t: conflict.turmaA, d: conflict.discA, h: conflict.horaA, doc: conflict.docenteA },
        { t: conflict.turmaB, d: conflict.discB, h: conflict.horaB, doc: conflict.docenteB }
    ];

    return (
        <div className="conflict-card-enhanced room-conflict" onClick={() => setExpanded(!expanded)}>
            <div className="conflict-card-top-bar room-bar-color"></div>
            <div className="conflict-card-header-enhanced">
                <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1 }}>
                    <span className="conflict-index room-index">#{index + 1}</span>
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                            <span className="conflict-type-badge room-badge">
                                <Building2 size={11} /> Sala {conflict.sala}
                            </span>
                            <span className="conflict-day-badge">{conflict.dia}</span>
                        </div>
                        <div className="conflict-turmas-preview">
                            {conflict.turmaA.replace(/ - (Não existe|Recém-criada)/, "")} ↔ {conflict.turmaB.replace(/ - (Não existe|Recém-criada)/, "")}
                        </div>
                    </div>
                </div>
                {expanded ? <ChevronUp size={16} style={{ color: "var(--muted)" }} /> : <ChevronDown size={16} style={{ color: "var(--muted)" }} />}
            </div>

            {expanded && (
                <div className="conflict-card-detail">
                    <div className="conflict-detail-grid">
                        {items.map((item, idx) => (
                            <div key={idx} className="conflict-detail-item room-detail"
                                onClick={(e) => { e.stopPropagation(); onSelectTurma(item.t); }}>
                                <div className="conflict-turma-name">{item.t.replace(/ - (Não existe|Recém-criada)/, "")}</div>
                                <div className="conflict-disc-badge" style={{ background: `${discColor(item.d)}18`, color: discColor(item.d), borderColor: `${discColor(item.d)}40` }}>
                                    {item.d}
                                </div>
                                <div className="conflict-time-info"><Clock size={11} /> {item.h}</div>
                                {item.doc && <div className="conflict-doc-info"><User size={11} /> {item.doc}</div>}
                            </div>
                        ))}
                    </div>
                    <div className="conflict-suggestion">
                        <Info size={12} />
                        <span>Sugestão: Mover uma das turmas para outra sala neste horário.</span>
                    </div>
                </div>
            )}
        </div>
    );
}

function TeacherConflictCard({ conflict, index, onSelectTurma }) {
    const [expanded, setExpanded] = useState(false);

    const items = [
        { t: conflict.turmaA, disc: conflict.discA, h: conflict.horaA },
        { t: conflict.turmaB, disc: conflict.discB, h: conflict.horaB }
    ];

    return (
        <div className="conflict-card-enhanced teacher-conflict" onClick={() => setExpanded(!expanded)}>
            <div className="conflict-card-top-bar teacher-bar-color"></div>
            <div className="conflict-card-header-enhanced">
                <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1 }}>
                    <span className="conflict-index teacher-index">#{index + 1}</span>
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                            <span className="conflict-type-badge teacher-badge">
                                <User size={11} /> {conflict.docente}
                            </span>
                            <span className="conflict-day-badge">{conflict.dia}</span>
                        </div>
                        <div className="conflict-turmas-preview">
                            {conflict.turmaA.replace(/ - (Não existe|Recém-criada)/, "")} ↔ {conflict.turmaB.replace(/ - (Não existe|Recém-criada)/, "")}
                        </div>
                    </div>
                </div>
                {expanded ? <ChevronUp size={16} style={{ color: "var(--muted)" }} /> : <ChevronDown size={16} style={{ color: "var(--muted)" }} />}
            </div>

            {expanded && (
                <div className="conflict-card-detail">
                    <div className="conflict-detail-grid">
                        {items.map((item, idx) => (
                            <div key={idx} className="conflict-detail-item teacher-detail"
                                onClick={(e) => { e.stopPropagation(); onSelectTurma(item.t); }}>
                                <div className="conflict-turma-name">{item.t.replace(/ - (Não existe|Recém-criada)/, "")}</div>
                                <div className="conflict-disc-badge" style={{ background: `${discColor(item.disc)}18`, color: discColor(item.disc), borderColor: `${discColor(item.disc)}40` }}>
                                    {item.disc}
                                </div>
                                <div className="conflict-time-info"><Clock size={11} /> {item.h}</div>
                            </div>
                        ))}
                    </div>
                    <div className="conflict-suggestion teacher-suggestion">
                        <Info size={12} />
                        <span>Sugestão: Reagendar uma das aulas ou atribuir outro docente.</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function ConflictsView({ roomConflicts, teacherConflicts, conflictTab, setConflictTab, onSelectTurma }) {
    const [filterDay, setFilterDay] = useState("Todos");
    const [showLegend, setShowLegend] = useState(true);

    const dias = ["Todos", "Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

    const filteredRoom = useMemo(() =>
        filterDay === "Todos" ? roomConflicts : roomConflicts.filter(c => c.dia === filterDay),
        [roomConflicts, filterDay]
    );

    const filteredTeacher = useMemo(() =>
        filterDay === "Todos" ? teacherConflicts : teacherConflicts.filter(c => c.dia === filterDay),
        [teacherConflicts, filterDay]
    );

    // Group room conflicts by sala
    const roomGrouped = useMemo(() => {
        const groups = {};
        filteredRoom.forEach(c => {
            const key = c.sala;
            if (!groups[key]) groups[key] = [];
            groups[key].push(c);
        });
        return Object.entries(groups).sort((a, b) => b[1].length - a[1].length);
    }, [filteredRoom]);

    // Group teacher conflicts by docente
    const teacherGrouped = useMemo(() => {
        const groups = {};
        filteredTeacher.forEach(c => {
            const key = c.docente;
            if (!groups[key]) groups[key] = [];
            groups[key].push(c);
        });
        return Object.entries(groups).sort((a, b) => b[1].length - a[1].length);
    }, [filteredTeacher]);

    return (
        <div className="conflicts-view">
            <ConflictStats roomConflicts={roomConflicts} teacherConflicts={teacherConflicts} />

            <div style={{ marginBottom: 16 }}>
                <button
                    className="legend-toggle"
                    onClick={() => setShowLegend(!showLegend)}
                >
                    <Info size={13} />
                    {showLegend ? "Ocultar legenda" : "Mostrar legenda"}
                    {showLegend ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                </button>
                {showLegend && <ConflictLegend />}
            </div>

            <div className="conflict-day-filter">
                <Filter size={13} style={{ color: "var(--muted)" }} />
                {dias.map(d => (
                    <button
                        key={d}
                        className={`conflict-day-filter-btn${filterDay === d ? " active" : ""}`}
                        onClick={() => setFilterDay(d)}
                    >
                        {d === "Todos" ? "Todos" : d.slice(0, 3)}
                    </button>
                ))}
            </div>

            <div className="conflict-tabs">
                <button className={`conflict-tab-btn${conflictTab === "salas" ? " active room-tab" : ""}`} onClick={() => setConflictTab("salas")}>
                    <Building2 size={14} />
                    <span>Conflitos de Sala</span>
                    <span className={`conflict-tab-count${conflictTab === "salas" ? " room-count" : ""}`}>{filteredRoom.length}</span>
                </button>
                <button className={`conflict-tab-btn${conflictTab === "docentes" ? " active teacher-tab" : ""}`} onClick={() => setConflictTab("docentes")}>
                    <User size={14} />
                    <span>Conflitos de Docente</span>
                    <span className={`conflict-tab-count${conflictTab === "docentes" ? " teacher-count" : ""}`}>{filteredTeacher.length}</span>
                </button>
            </div>

            {conflictTab === "salas" && (
                filteredRoom.length === 0
                    ? <div className="conflict-empty-state">
                        <CheckCircle size={24} />
                        <div>Sem conflitos de sala{filterDay !== "Todos" ? ` na ${filterDay}` : ""}</div>
                    </div>
                    : <div className="conflict-list">
                        {roomGrouped.map(([sala, conflicts]) => (
                            <div key={sala} className="conflict-group">
                                <div className="conflict-group-header room-group">
                                    <MapPin size={13} />
                                    <span>Sala {sala}</span>
                                    <span className="conflict-group-count">{conflicts.length} conflito{conflicts.length > 1 ? "s" : ""}</span>
                                </div>
                                {conflicts.map((c, i) => (
                                    <RoomConflictCard key={i} conflict={c} index={i} onSelectTurma={onSelectTurma} />
                                ))}
                            </div>
                        ))}
                    </div>
            )}

            {conflictTab === "docentes" && (
                filteredTeacher.length === 0
                    ? <div className="conflict-empty-state">
                        <CheckCircle size={24} />
                        <div>Sem conflitos de docente{filterDay !== "Todos" ? ` na ${filterDay}` : ""}</div>
                    </div>
                    : <div className="conflict-list">
                        {teacherGrouped.map(([docente, conflicts]) => (
                            <div key={docente} className="conflict-group">
                                <div className="conflict-group-header teacher-group">
                                    <User size={13} />
                                    <span>{docente}</span>
                                    <span className="conflict-group-count">{conflicts.length} conflito{conflicts.length > 1 ? "s" : ""}</span>
                                </div>
                                {conflicts.map((c, i) => (
                                    <TeacherConflictCard key={i} conflict={c} index={i} onSelectTurma={onSelectTurma} />
                                ))}
                            </div>
                        ))}
                    </div>
            )}
        </div>
    );
}
