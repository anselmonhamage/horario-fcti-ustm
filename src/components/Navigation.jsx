import { List, Building2, User, AlertTriangle } from 'lucide-react';

export default function Navigation({ view, setView, totalConflicts, onViewChange }) {
    const tabs = [
        { id: "turmas", label: "Turmas", icon: List },
        { id: "salas", label: "Salas", icon: Building2 },
        { id: "docentes", label: "Docentes", icon: User },
        { id: "conflicts", label: `Conflitos${totalConflicts > 0 ? ` (${totalConflicts})` : ""}`, icon: AlertTriangle },
    ];

    return (
        <nav className="app-nav">
            {tabs.map(({ id, label, icon: Icon }) => (
                <button
                    key={id}
                    className={`nav-btn${view === id ? " active" : ""}`}
                    onClick={() => onViewChange(id)}
                >
                    <Icon size={15} />
                    {label}
                </button>
            ))}
        </nav>
    );
}
