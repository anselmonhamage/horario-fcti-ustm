import { Search } from 'lucide-react';

export default function FilterBar({ search, setSearch, filterCurso, setFilterCurso, filterAno, setFilterAno, filterTurno, setFilterTurno, count, onFilterChange }) {
    const filters = [
        { val: filterCurso, set: setFilterCurso, opts: ["Todos", "LDS", "LASIR"], labels: { Todos: "Todos cursos" } },
        { val: filterAno, set: setFilterAno, opts: ["Todos", "1", "2", "3", "4"], labels: { Todos: "Todos anos", "1": "1º Ano", "2": "2º Ano", "3": "3º Ano", "4": "4º Ano" } },
        { val: filterTurno, set: setFilterTurno, opts: ["Todos", "Manhã", "Tarde", "Noite"], labels: { Todos: "Todos turnos" } },
    ];

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 14 }}>
            <div className="search-wrapper">
                <Search size={15} />
                <input
                    className="search-input"
                    placeholder="Pesquisar turma..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {filters.map((f, i) => (
                    <select
                        key={i}
                        className="filter-select"
                        value={f.val}
                        onChange={e => { f.set(e.target.value); onFilterChange(); }}
                    >
                        {f.opts.map(o => <option key={o} value={o}>{f.labels?.[o] || o}</option>)}
                    </select>
                ))}
            </div>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>{count} turma(s)</div>
        </div>
    );
}
