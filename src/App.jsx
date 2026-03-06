import { useState, useMemo } from "react";
import { SCHEDULES, DIAS } from "./data/schedules";
import { findRoomConflicts, findTeacherConflicts, discColor } from "./utils/utils";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import FilterBar from "./components/FilterBar";
import TurmaCard from "./components/TurmaCard";
import TurmaDetail from "./components/TurmaDetail";
import SalasView from "./components/SalasView";
import DocentesView from "./components/DocentesView";
import ConflictsView from "./components/ConflictsView";
import { Sun, Sunset, Moon, AlertTriangle, FlaskConical, ChevronDown } from "lucide-react";

const turnoIcons = { Manhã: Sun, Tarde: Sunset, Noite: Moon };

export default function App() {
  const [dark, setDark] = useState(false);
  const [view, setView] = useState("turmas");
  const [filterCurso, setFilterCurso] = useState("Todos");
  const [filterAno, setFilterAno] = useState("Todos");
  const [filterTurno, setFilterTurno] = useState("Todos");
  const [selectedTurma, setSelectedTurma] = useState(null);
  const [conflictTab, setConflictTab] = useState("salas");
  const [search, setSearch] = useState("");
  const [resumoOpen, setResumoOpen] = useState(false);

  const roomConflicts = useMemo(() => findRoomConflicts(SCHEDULES), []);
  const teacherConflicts = useMemo(() => findTeacherConflicts(SCHEDULES), []);
  const totalConflicts = roomConflicts.length + teacherConflicts.length;

  const hasConflict = (t) =>
    roomConflicts.some(c => c.turmaA === t || c.turmaB === t) ||
    teacherConflicts.some(c => c.turmaA === t || c.turmaB === t);

  const filtered = SCHEDULES.filter(s =>
    (filterCurso === "Todos" || s.curso === filterCurso) &&
    (filterAno === "Todos" || s.ano === parseInt(filterAno)) &&
    (filterTurno === "Todos" || s.turno === filterTurno) &&
    (!search || s.turma.toLowerCase().includes(search.toLowerCase()))
  );

  const selected = selectedTurma ? SCHEDULES.find(s => s.turma === selectedTurma) : null;
  const myRoomConflicts = selected ? roomConflicts.filter(c => c.turmaA === selected.turma || c.turmaB === selected.turma) : [];
  const myTeacherConflicts = selected ? teacherConflicts.filter(c => c.turmaA === selected.turma || c.turmaB === selected.turma) : [];

  const handleViewChange = (v) => {
    setView(v);
    if (v !== "turmas") setSelectedTurma(null);
  };

  const handleSelectFromOtherView = (turma) => {
    setView("turmas");
    setSelectedTurma(turma);
  };

  return (
    <div data-theme={dark ? "dark" : "light"}>
      <Header dark={dark} setDark={setDark} totalConflicts={totalConflicts} />
      <Navigation view={view} totalConflicts={totalConflicts} onViewChange={handleViewChange} />

      <main className="main-content">
        {view === "turmas" && (
          <>
            <div className={`turmas-layout${selected ? "" : " no-detail"}`}>
              <div>
                <FilterBar
                  search={search} setSearch={setSearch}
                  filterCurso={filterCurso} setFilterCurso={setFilterCurso}
                  filterAno={filterAno} setFilterAno={setFilterAno}
                  filterTurno={filterTurno} setFilterTurno={setFilterTurno}
                  count={filtered.length}
                  onFilterChange={() => setSelectedTurma(null)}
                />
                <div className="turma-list-scroll">
                  {filtered.map(s => (
                    <TurmaCard
                      key={s.turma}
                      turma={s}
                      selected={selectedTurma === s.turma}
                      hasConflict={hasConflict(s.turma)}
                      onClick={() => setSelectedTurma(selectedTurma === s.turma ? null : s.turma)}
                    />
                  ))}
                  {filtered.length === 0 && (
                    <div style={{ textAlign: "center", color: "var(--muted)", padding: 32, fontSize: 13 }}>Nenhuma turma encontrada</div>
                  )}
                </div>
              </div>

              {selected && (
                <div className="detail-overlay" onClick={(e) => { if (e.target === e.currentTarget) setSelectedTurma(null); }}>
                  <TurmaDetail
                    selected={selected}
                    roomConflicts={myRoomConflicts}
                    teacherConflicts={myTeacherConflicts}
                    onClose={() => setSelectedTurma(null)}
                  />
                </div>
              )}
            </div>

            <div style={{ marginTop: 20 }}>
              <div className="resumo-header">
                <div className="section-label" style={{ marginBottom: 0 }}>Resumo Geral</div>
                <button
                  className={`resumo-toggle-btn${resumoOpen ? " expanded" : ""}`}
                  onClick={() => setResumoOpen(!resumoOpen)}
                >
                  {resumoOpen ? "Ocultar" : "Expandir"}
                  <ChevronDown size={14} />
                </button>
              </div>
              <div className={`resumo-content${resumoOpen ? " open" : ""}`}>
                <div style={{ overflowX: "auto", border: "1px solid var(--border)", borderRadius: 10, background: "var(--surface)" }}>
                  <table className="data-table">
                    <thead>
                      <tr>
                        {["Turma", "Curso", "Ano", "Turno", "Sala"].map(h => <th key={h}>{h}</th>)}
                        {DIAS.map(d => <th key={d} className="hide-sm">{d.slice(0, 3)}</th>)}
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SCHEDULES.map(s => {
                        const hc = hasConflict(s.turma);
                        const cursoClass = s.curso === "LDS" ? "lds" : "lasir";
                        const turnoClass = s.turno === "Manhã" ? "morning" : s.turno === "Tarde" ? "afternoon" : "night";
                        const TurnoIcon = turnoIcons[s.turno];
                        return (
                          <tr key={s.turma} style={{ cursor: "pointer" }} onClick={() => setSelectedTurma(s.turma)}>
                            <td style={{ fontWeight: 600, color: "var(--text)", whiteSpace: "nowrap" }}>{s.turma}</td>
                            <td><span className="badge" style={{ background: `var(--${cursoClass}-bg)`, color: `var(--${cursoClass}-tx)` }}>{s.curso}</span></td>
                            <td style={{ color: "var(--muted)" }}>{s.ano}</td>
                            <td><span className="badge" style={{ background: `var(--${turnoClass}-bg)`, color: `var(--${turnoClass}-tx)` }}><TurnoIcon size={11} /> {s.turno}</span></td>
                            <td style={{ color: "var(--amber)" }}>{s.sala}</td>
                            {DIAS.map(dia => {
                              const aulas = s.aulas.filter(a => a.dia === dia);
                              return (
                                <td key={dia} className="hide-sm">
                                  {aulas.length === 0
                                    ? <span style={{ color: "var(--dash-color)" }}>—</span>
                                    : aulas.map((a, i) => (
                                      <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 2, background: `${discColor(a.disciplina)}18`, color: discColor(a.disciplina), border: `1px solid ${discColor(a.disciplina)}35`, borderRadius: 4, padding: "2px 7px", fontSize: 10, fontWeight: 600, margin: "1px 2px" }}>
                                        {a.disciplina}{a.lab && <FlaskConical size={9} />}
                                      </span>
                                    ))
                                  }
                                </td>
                              );
                            })}
                            <td>
                              {hc ? <AlertTriangle size={14} style={{ color: "var(--warn)" }} /> : <span style={{ color: "var(--dash-color)" }}>—</span>}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        )}

        {view === "salas" && <SalasView hasConflict={hasConflict} onSelectTurma={handleSelectFromOtherView} />}
        {view === "docentes" && <DocentesView teacherConflicts={teacherConflicts} onSelectTurma={handleSelectFromOtherView} />}
        {view === "conflicts" && <ConflictsView roomConflicts={roomConflicts} teacherConflicts={teacherConflicts} conflictTab={conflictTab} setConflictTab={setConflictTab} onSelectTurma={handleSelectFromOtherView} />}
      </main>
    </div>
  );
}
