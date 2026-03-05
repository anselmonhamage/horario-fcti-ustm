import { Calendar, Download, Sun, Moon } from 'lucide-react';
import { SCHEDULES } from '../data/schedules';
import { toCSV, toJSON, toXML, download } from '../utils/utils';

export default function Header({ dark, setDark, totalConflicts }) {
    const ldsCount = SCHEDULES.filter(s => s.curso === "LDS").length;
    const lasirCount = SCHEDULES.filter(s => s.curso === "LASIR").length;

    const handleExport = (fmt) => {
        const content = fmt === "csv" ? toCSV(SCHEDULES) : fmt === "json" ? toJSON(SCHEDULES) : toXML(SCHEDULES);
        const type = fmt === "csv" ? "text/csv" : fmt === "json" ? "application/json" : "text/xml";
        download(content, `horarios_fcti.${fmt}`, type);
    };

    return (
        <header className="app-header">
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div className="header-logo">
                    <Calendar size={18} />
                </div>
                <div>
                    <div className="header-title">Horários FCTI</div>
                    <div className="header-subtitle">USTM · 2026A</div>
                </div>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                <span className="badge" style={{ background: "var(--lds-bg)", color: "var(--lds-tx)" }}>{ldsCount} LDS</span>
                <span className="badge" style={{ background: "var(--lasir-bg)", color: "var(--lasir-tx)" }}>{lasirCount} LASIR</span>
                {totalConflicts > 0 && (
                    <span className="badge conflict-pulse" style={{ background: "var(--warn-bg)", color: "var(--warn)" }}>
                        {totalConflicts} conflito{totalConflicts > 1 ? "s" : ""}
                    </span>
                )}
                <div style={{ display: "flex", gap: 4 }}>
                    {["csv", "json", "xml"].map(fmt => (
                        <button key={fmt} className="icon-btn" onClick={() => handleExport(fmt)}>
                            <Download size={13} /> {fmt.toUpperCase()}
                        </button>
                    ))}
                </div>
                <button className="icon-btn" onClick={() => setDark(!dark)} style={{ padding: "7px 10px" }}>
                    {dark ? <Sun size={16} /> : <Moon size={16} />}
                </button>
            </div>
        </header>
    );
}
