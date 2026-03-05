export function timeToMin(t) {
    if (!t) return 0;
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m;
}

export function overlaps(a, b) {
    return timeToMin(a.inicio) < timeToMin(b.fim) && timeToMin(b.inicio) < timeToMin(a.fim);
}

export function findRoomConflicts(schedules) {
    const out = [];
    for (let i = 0; i < schedules.length; i++) {
        for (let j = i + 1; j < schedules.length; j++) {
            const a = schedules[i], b = schedules[j];
            for (const aa of a.aulas) {
                for (const bb of b.aulas) {
                    const salaA = aa.lab || a.sala;
                    const salaB = bb.lab || b.sala;
                    if (salaA === salaB && salaA && !salaA.includes("ver") && !salaB.includes("ver")) {
                        if (aa.dia === bb.dia && overlaps(aa, bb)) {
                            out.push({ tipo: "sala", sala: salaA, dia: aa.dia, turmaA: a.turma, turmaB: b.turma, discA: aa.disciplina, discB: bb.disciplina, horaA: `${aa.inicio}–${aa.fim}`, horaB: `${bb.inicio}–${bb.fim}`, docenteA: aa.docente || "", docenteB: bb.docente || "" });
                        }
                    }
                }
            }
        }
    }
    return out;
}

export function findTeacherConflicts(schedules) {
    const out = [];
    for (let i = 0; i < schedules.length; i++)
        for (let j = i + 1; j < schedules.length; j++) {
            const a = schedules[i], b = schedules[j];
            if (a.turma === b.turma) continue;
            for (const aa of a.aulas)
                for (const bb of b.aulas) {
                    if (aa.docente && bb.docente && aa.docente === bb.docente && aa.dia === bb.dia && overlaps(aa, bb)) {
                        out.push({ tipo: "docente", docente: aa.docente, dia: aa.dia, turmaA: a.turma, turmaB: b.turma, discA: aa.disciplina, discB: bb.disciplina, horaA: `${aa.inicio}–${aa.fim}`, horaB: `${bb.inicio}–${bb.fim}` });
                    }
                }
        }
    return out;
}

const DISC_PALETTE = ["#3b82f6", "#10b981", "#f59e0b", "#ec4899", "#8b5cf6", "#06b6d4", "#f97316", "#14b8a6", "#ef4444", "#84cc16", "#6366f1", "#a78bfa"];

export function discColor(d) {
    let h = 0;
    for (let i = 0; i < d.length; i++) h = (h * 31 + d.charCodeAt(i)) % DISC_PALETTE.length;
    return DISC_PALETTE[h];
}

export function toCSV(data) {
    const rows = [["Turma", "Curso", "Ano", "Semestre", "Periodo", "Turno", "Sala", "Dia", "Inicio", "Fim", "Disciplina", "Docente", "Laboratorio"]];
    data.forEach(s => s.aulas.forEach(a => rows.push([s.turma, s.curso, s.ano, s.semestre, s.periodo, s.turno, s.sala, a.dia, a.inicio, a.fim, a.disciplina, a.docente || "", a.lab || ""])));
    return rows.map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(",")).join("\n");
}

export function toJSON(data) { return JSON.stringify(data, null, 2); }

export function toXML(data) {
    let x = '<?xml version="1.0" encoding="UTF-8"?>\n<horarios>\n';
    data.forEach(s => {
        x += `  <turma id="${s.turma}" curso="${s.curso}" ano="${s.ano}" semestre="${s.semestre}">\n`;
        s.aulas.forEach(a => { x += `    <aula dia="${a.dia}" inicio="${a.inicio}" fim="${a.fim}" disciplina="${a.disciplina}" docente="${a.docente || ""}" lab="${a.lab || ""}"/>\n`; });
        x += `  </turma>\n`;
    });
    return x + '</horarios>';
}

export function download(content, filename, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = filename; a.click();
    URL.revokeObjectURL(url);
}
