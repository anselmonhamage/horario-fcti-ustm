export const SCHEDULES = [
  {
    turma: "1L1LDS1", curso: "LDS", ano: 1, semestre: 1, periodo: "Laboral", turno: "Manhã", sala: "9",
    disciplinas: { IL: "Amade Monteiro", LP: "Chinica Razão", II: "Armando Chuma", IT: "Rafael Malombe", ALGA: "Boaventura Maxlhope" },
    aulas: [
      { dia: "Segunda", inicio: "7:30", fim: "9:50", disciplina: "IT", docente: "Rafael Malombe" },
      { dia: "Segunda", inicio: "9:50", fim: "11:25", disciplina: "ALGA", docente: "Boaventura Maxlhope" },
      { dia: "Terça", inicio: "7:30", fim: "9:50", disciplina: "II", docente: "Armando Chuma", lab: "Lab2" },
      { dia: "Terça", inicio: "9:50", fim: "11:25", disciplina: "IL", docente: "Amade Monteiro" },
      { dia: "Quarta", inicio: "9:50", fim: "11:25", disciplina: "LP", docente: "Chinica Razão", lab: "Lab3" },
      { dia: "Quinta", inicio: "8:15", fim: "9:50", disciplina: "IL", docente: "Amade Monteiro" },
      { dia: "Quinta", inicio: "9:50", fim: "11:25", disciplina: "II", docente: "Armando Chuma", lab: "Lab2" },
      { dia: "Quinta", inicio: "11:25", fim: "13:25", disciplina: "ALGA", docente: "Boaventura Maxlhope" },
      { dia: "Sexta", inicio: "7:30", fim: "9:50", disciplina: "LP", docente: "Chinica Razão" }
    ]
  },
  {
    turma: "1L1LDS2", curso: "LDS", ano: 1, semestre: 1, periodo: "Laboral", turno: "Manhã", sala: "12",
    disciplinas: { IL: "Eisten Bomba", LP: "Chinica Razão", II: "Armando Chuma", IT: "Jesé Manjate", ALGA: "Oleksander Kalashinikov" },
    aulas: [
      { dia: "Segunda", inicio: "8:15", fim: "9:50", disciplina: "ALGA", docente: "Oleksander Kalashinikov" },
      { dia: "Segunda", inicio: "9:50", fim: "12:10", disciplina: "IT", docente: "Jesé Manjate" },
      { dia: "Terça", inicio: "8:15", fim: "9:50", disciplina: "IL", docente: "Eisten Bomba" },
      { dia: "Terça", inicio: "9:50", fim: "12:10", disciplina: "II", docente: "Armando Chuma", lab: "Lab2" },
      { dia: "Quarta", inicio: "7:30", fim: "9:00", disciplina: "LP", docente: "Chinica Razão", lab: "Lab2" },
      { dia: "Quinta", inicio: "9:05", fim: "10:35", disciplina: "ALGA", docente: "Oleksander Kalashinikov" },
      { dia: "Quinta", inicio: "10:40", fim: "12:10", disciplina: "IL", docente: "Eisten Bomba" },
      { dia: "Sexta", inicio: "9:05", fim: "10:35", disciplina: "II", docente: "Armando Chuma", lab: "Lab2" },
      { dia: "Sexta", inicio: "10:40", fim: "13:25", disciplina: "LP", docente: "Chinica Razão" }
    ]
  },
  {
    turma: "1L1LDS1T", curso: "LDS", ano: 1, semestre: 1, periodo: "Laboral", turno: "Tarde", sala: "16",
    disciplinas: { IL: "Eisten Bomba", LP: "Godinho Quissico", II: "Duarte Bila", IT: "Jesé Manjate", ALGA: "Oleksander Kalashinikov" },
    aulas: [
      { dia: "Segunda", inicio: "12:30", fim: "14:00", disciplina: "ALGA", docente: "Oleksander Kalashinikov" },
      { dia: "Segunda", inicio: "14:05", fim: "15:35", disciplina: "IL", docente: "Eisten Bomba" },
      { dia: "Segunda", inicio: "15:40", fim: "17:10", disciplina: "II", docente: "Duarte Bila", lab: "Lab3" },
      { dia: "Terça", inicio: "12:30", fim: "14:50", disciplina: "LP", docente: "Godinho Quissico", lab: "Lab4" },
      { dia: "Terça", inicio: "14:50", fim: "16:25", disciplina: "IT", docente: "Jesé Manjate" },
      { dia: "Quarta", inicio: "12:30", fim: "14:50", disciplina: "II", docente: "Duarte Bila", lab: "Lab3" },
      { dia: "Quarta", inicio: "14:50", fim: "16:25", disciplina: "ALGA", docente: "Oleksander Kalashinikov" },
      { dia: "Sexta", inicio: "12:30", fim: "14:50", disciplina: "LP", docente: "Godinho Quissico" },
      { dia: "Sexta", inicio: "14:50", fim: "16:25", disciplina: "IL", docente: "Eisten Bomba" }
    ]
  },
  {
    turma: "1P1LDS1", curso: "LDS", ano: 1, semestre: 1, periodo: "Pós-Laboral", turno: "Noite", sala: "16",
    disciplinas: { IL: "Amade Monteiro", LP: "Godinho Quissico", II: "Armando Chuma", IT: "Jesé Manjate", ALGA: "Boaventura Maxlhope" },
    aulas: [
      { dia: "Segunda", inicio: "17:30", fim: "19:50", disciplina: "LP", docente: "Godinho Quissico", lab: "Lab4" },
      { dia: "Segunda", inicio: "19:50", fim: "21:25", disciplina: "ALGA", docente: "Boaventura Maxlhope" },
      { dia: "Terça", inicio: "17:30", fim: "19:50", disciplina: "IT", docente: "Jesé Manjate" },
      { dia: "Terça", inicio: "19:50", fim: "21:25", disciplina: "IL", docente: "Amade Monteiro" },
      { dia: "Quarta", inicio: "17:30", fim: "19:50", disciplina: "II", docente: "Armando Chuma", lab: "Lab2" },
      { dia: "Quinta", inicio: "17:30", fim: "19:00", disciplina: "II", docente: "Armando Chuma", lab: "Lab2" },
      { dia: "Quinta", inicio: "19:05", fim: "20:35", disciplina: "ALGA", docente: "Boaventura Maxlhope" },
      { dia: "Sexta", inicio: "17:30", fim: "19:50", disciplina: "LP", docente: "Godinho Quissico" },
      { dia: "Sexta", inicio: "19:50", fim: "21:25", disciplina: "IL", docente: "Amade Monteiro" }
    ]
  },
  {
    turma: "2L3LDS1", curso: "LDS", ano: 2, semestre: 3, periodo: "Laboral", turno: "Manhã", sala: "7",
    disciplinas: { AMII: "Eisten Bomba", MD: "Rosário Gudo", PII: "Fernando Nhanice", EST: "Salmina Mendes", IRC: "Gracinda Bucar" },
    aulas: [
      { dia: "Segunda", inicio: "7:30", fim: "9:50", disciplina: "PII", docente: "Fernando Nhanice" },
      { dia: "Segunda", inicio: "9:50", fim: "11:25", disciplina: "IRC", docente: "Gracinda Bucar" },
      { dia: "Terça", inicio: "7:30", fim: "9:00", disciplina: "EST", docente: "Salmina Mendes" },
      { dia: "Terça", inicio: "9:05", fim: "10:35", disciplina: "MD", docente: "Rosário Gudo" },
      { dia: "Quarta", inicio: "8:15", fim: "9:50", disciplina: "AMII", docente: "Eisten Bomba" },
      { dia: "Quarta", inicio: "9:50", fim: "12:10", disciplina: "PII", docente: "Fernando Nhanice", lab: "Lab4" },
      { dia: "Quinta", inicio: "7:30", fim: "9:00", disciplina: "IRC", docente: "Gracinda Bucar" },
      { dia: "Quinta", inicio: "9:05", fim: "10:35", disciplina: "MD", docente: "Rosário Gudo" },
      { dia: "Sexta", inicio: "7:30", fim: "9:50", disciplina: "AMII", docente: "Eisten Bomba" },
      { dia: "Sexta", inicio: "9:50", fim: "11:25", disciplina: "EST", docente: "Salmina Mendes" }
    ]
  },
  {
    turma: "2L3LDS2 - Recém-criada", curso: "LDS", ano: 2, semestre: 3, periodo: "Laboral", turno: "Manhã", sala: "8",
    disciplinas: { AMII: "Nelson Nhiuana", MD: "Helder Machava", PII: "Agnaldo Massango", EST: "Salmina Mendes", IRC: "Paulino Muebe" },
    aulas: [
      { dia: "Segunda", inicio: "8:15", fim: "10:35", disciplina: "PII", docente: "Agnaldo Massango" },
      { dia: "Segunda", inicio: "10:40", fim: "12:10", disciplina: "IRC", docente: "Paulino Muebe" },
      { dia: "Terça", inicio: "9:05", fim: "10:35", disciplina: "EST", docente: "Salmina Mendes" },
      { dia: "Terça", inicio: "10:40", fim: "12:10", disciplina: "MD", docente: "Helder Machava" },
      { dia: "Quarta", inicio: "7:30", fim: "9:50", disciplina: "PII", docente: "Agnaldo Massango", lab: "Lab4" },
      { dia: "Quarta", inicio: "9:50", fim: "11:25", disciplina: "AMII", docente: "Nelson Nhiuana" },
      { dia: "Quinta", inicio: "9:05", fim: "10:35", disciplina: "MD", docente: "Helder Machava" },
      { dia: "Quinta", inicio: "10:40", fim: "12:10", disciplina: "EST", docente: "Salmina Mendes" },
      { dia: "Sexta", inicio: "8:15", fim: "9:50", disciplina: "IRC", docente: "Paulino Muebe" },
      { dia: "Sexta", inicio: "9:50", fim: "12:10", disciplina: "AMII", docente: "Nelson Nhiuana" }
    ]
  },
  {
    turma: "2L3LDS1T", curso: "LDS", ano: 2, semestre: 3, periodo: "Laboral", turno: "Tarde", sala: "15",
    disciplinas: { AMII: "Augusto Inguane", MD: "Rosário Gudo", PII: "Godinho Quissico", EST: "Salmina Mendes", IRC: "Gracinda Bucar" },
    aulas: [
      { dia: "Segunda", inicio: "13:15", fim: "15:35", disciplina: "PII", docente: "Godinho Quissico" },
      { dia: "Segunda", inicio: "15:40", fim: "17:10", disciplina: "AMII", docente: "Augusto Inguane" },
      { dia: "Terça", inicio: "12:30", fim: "14:00", disciplina: "EST", docente: "Salmina Mendes" },
      { dia: "Terça", inicio: "14:05", fim: "15:35", disciplina: "MD", docente: "Rosário Gudo" },
      { dia: "Terça", inicio: "15:40", fim: "17:10", disciplina: "IRC", docente: "Gracinda Bucar" },
      { dia: "Quarta", inicio: "12:30", fim: "14:50", disciplina: "PII", docente: "Godinho Quissico", lab: "Lab1" },
      { dia: "Quarta", inicio: "14:50", fim: "17:10", disciplina: "AMII", docente: "Augusto Inguane" },
      { dia: "Sexta", inicio: "12:30", fim: "14:00", disciplina: "MD", docente: "Rosário Gudo" },
      { dia: "Sexta", inicio: "14:05", fim: "15:35", disciplina: "EST", docente: "Salmina Mendes" },
      { dia: "Sexta", inicio: "15:40", fim: "17:10", disciplina: "IRC", docente: "Gracinda Bucar" }
    ]
  },
  {
    turma: "2P3LDS1", curso: "LDS", ano: 2, semestre: 3, periodo: "Pós-Laboral", turno: "Noite", sala: "11",
    disciplinas: { AMII: "Augusto Inguane", MD: "Rosário Gudo", PII: "Amilcar González", EST: "Egidio Cassamo", IRC: "Gracinda Bucar" },
    aulas: [
      { dia: "Segunda", inicio: "17:30", fim: "19:00", disciplina: "IRC", docente: "Gracinda Bucar" },
      { dia: "Segunda", inicio: "19:05", fim: "21:25", disciplina: "AMII", docente: "Augusto Inguane" },
      { dia: "Terça", inicio: "17:30", fim: "19:50", disciplina: "PII", docente: "Amilcar González" },
      { dia: "Terça", inicio: "19:50", fim: "21:25", disciplina: "EST", docente: "Egidio Cassamo" },
      { dia: "Quarta", inicio: "17:30", fim: "19:00", disciplina: "IRC", docente: "Gracinda Bucar" },
      { dia: "Quarta", inicio: "19:05", fim: "20:35", disciplina: "MD", docente: "Rosário Gudo" },
      { dia: "Quinta", inicio: "18:15", fim: "19:50", disciplina: "EST", docente: "Egidio Cassamo" },
      { dia: "Quinta", inicio: "19:50", fim: "21:25", disciplina: "AMII", docente: "Augusto Inguane" },
      { dia: "Sexta", inicio: "17:30", fim: "19:50", disciplina: "PII", docente: "Amilcar González", lab: "Lab3" },
      { dia: "Sexta", inicio: "19:50", fim: "21:25", disciplina: "MD", docente: "Rosário Gudo" }
    ]
  },
  {
    turma: "3L5LDS1", curso: "LDS", ano: 3, semestre: 5, periodo: "Laboral", turno: "Manhã", sala: "5",
    disciplinas: { SD: "Genoveva Bene", "PC#": "Mário Sitoe", GAE: "Luca Enzo", SO: "Queirós Mburine", BD: "Nelton Viana" },
    aulas: [
      { dia: "Segunda", inicio: "7:30", fim: "9:00", disciplina: "GAE", docente: "Luca Enzo" },
      { dia: "Segunda", inicio: "9:05", fim: "10:35", disciplina: "BD", docente: "Nelton Viana" },
      { dia: "Segunda", inicio: "10:40", fim: "12:10", disciplina: "SD", docente: "Genoveva Bene" },
      { dia: "Quarta", inicio: "7:30", fim: "9:00", disciplina: "GAE", docente: "Luca Enzo" },
      { dia: "Quarta", inicio: "9:05", fim: "10:35", disciplina: "PC#", docente: "Mário Sitoe" },
      { dia: "Quarta", inicio: "10:40", fim: "12:10", disciplina: "SO", docente: "Queirós Mburine" },
      { dia: "Quinta", inicio: "7:30", fim: "9:50", disciplina: "BD", docente: "Nelton Viana", lab: "Lab2" },
      { dia: "Quinta", inicio: "9:50", fim: "12:10", disciplina: "SD", docente: "Genoveva Bene" },
      { dia: "Sexta", inicio: "7:30", fim: "9:00", disciplina: "PC#", docente: "Mário Sitoe", lab: "Lab2" },
      { dia: "Sexta", inicio: "9:05", fim: "10:35", disciplina: "SO", docente: "Queirós Mburine" }
    ]
  },
  {
    turma: "3L5LDS2", curso: "LDS", ano: 3, semestre: 5, periodo: "Laboral", turno: "Manhã", sala: "6",
    disciplinas: { SD: "Genoveva Bene", "PC#": "Mário Sitoe", GAE: "Eugénio de Jesus", SO: "Horácio Nhantumbo", BD: "Nelton Viana" },
    aulas: [
      { dia: "Segunda", inicio: "7:30", fim: "9:00", disciplina: "SD", docente: "Genoveva Bene" },
      { dia: "Segunda", inicio: "9:05", fim: "10:35", disciplina: "GAE", docente: "Eugénio de Jesus" },
      { dia: "Segunda", inicio: "10:40", fim: "12:10", disciplina: "SO", docente: "Horácio Nhantumbo" },
      { dia: "Terça", inicio: "9:05", fim: "10:35", disciplina: "GAE", docente: "Eugénio de Jesus" },
      { dia: "Terça", inicio: "10:40", fim: "12:10", disciplina: "BD", docente: "Nelton Viana" },
      { dia: "Quarta", inicio: "7:30", fim: "9:00", disciplina: "SD", docente: "Genoveva Bene" },
      { dia: "Quarta", inicio: "9:50", fim: "11:25", disciplina: "SO", docente: "Horácio Nhantumbo" },
      { dia: "Quinta", inicio: "7:30", fim: "9:00", disciplina: "PC#", docente: "Mário Sitoe" },
      { dia: "Sexta", inicio: "7:30", fim: "9:50", disciplina: "BD", docente: "Nelton Viana", lab: "Lab1" },
      { dia: "Sexta", inicio: "10:40", fim: "12:10", disciplina: "PC#", docente: "Mário Sitoe", lab: "Lab1" }
    ]
  },
  {
    turma: "3L5LDS1T", curso: "LDS", ano: 3, semestre: 5, periodo: "Laboral", turno: "Tarde", sala: "11",
    disciplinas: { SD: "Calado Fijamo", "PC#": "Mário Sitoe", GAE: "Eugénio de Jesus", SO: "Queirós Mburine", BD: "Simão Langa" },
    aulas: [
      { dia: "Segunda", inicio: "12:30", fim: "14:50", disciplina: "SD", docente: "Calado Fijamo" },
      { dia: "Segunda", inicio: "14:50", fim: "17:10", disciplina: "BD", docente: "Simão Langa", lab: "Lab1" },
      { dia: "Terça", inicio: "12:30", fim: "14:00", disciplina: "SO", docente: "Queirós Mburine" },
      { dia: "Terça", inicio: "14:05", fim: "15:35", disciplina: "GAE", docente: "Eugénio de Jesus" },
      { dia: "Quarta", inicio: "12:30", fim: "14:00", disciplina: "BD", docente: "Simão Langa" },
      { dia: "Quarta", inicio: "14:05", fim: "15:35", disciplina: "SD", docente: "Calado Fijamo" },
      { dia: "Quarta", inicio: "15:40", fim: "17:10", disciplina: "PC#", docente: "Mário Sitoe" },
      { dia: "Quinta", inicio: "13:15", fim: "14:50", disciplina: "GAE", docente: "Eugénio de Jesus" },
      { dia: "Quinta", inicio: "14:50", fim: "16:25", disciplina: "SO", docente: "Queirós Mburine" },
      { dia: "Sexta", inicio: "12:30", fim: "14:50", disciplina: "PC#", docente: "Mário Sitoe", lab: "Lab2" }
    ]
  },
  {
    turma: "3P5LDS1", curso: "LDS", ano: 3, semestre: 5, periodo: "Pós-Laboral", turno: "Noite", sala: "11",
    disciplinas: { SD: "Calado Fijamo", "PC#": "Graçane Muhate", GAE: "Luca Enzo", SO: "Queirós Mburine", BD: "Ligia Magalhães" },
    aulas: [
      { dia: "Segunda", inicio: "17:30", fim: "19:00", disciplina: "SO", docente: "Queirós Mburine" },
      { dia: "Segunda", inicio: "19:05", fim: "20:35", disciplina: "BD", docente: "Ligia Magalhães" },
      { dia: "Terça", inicio: "17:30", fim: "19:00", disciplina: "GAE", docente: "Luca Enzo" },
      { dia: "Terça", inicio: "19:05", fim: "20:35", disciplina: "PC#", docente: "Graçane Muhate", lab: "Lab1" },
      { dia: "Quarta", inicio: "17:30", fim: "19:50", disciplina: "BD", docente: "Ligia Magalhães", lab: "Lab1" },
      { dia: "Quarta", inicio: "19:50", fim: "21:25", disciplina: "SD", docente: "Calado Fijamo" },
      { dia: "Quinta", inicio: "17:30", fim: "19:00", disciplina: "GAE", docente: "Luca Enzo" },
      { dia: "Quinta", inicio: "19:05", fim: "20:35", disciplina: "PC#", docente: "Graçane Muhate" },
      { dia: "Sexta", inicio: "17:30", fim: "19:00", disciplina: "SO", docente: "Queirós Mburine" },
      { dia: "Sexta", inicio: "19:05", fim: "21:25", disciplina: "SD", docente: "Calado Fijamo" }
    ]
  },
  {
    turma: "4L7LDS1", curso: "LDS", ano: 4, semestre: 7, periodo: "Laboral", turno: "Manhã", sala: "ver abaixo",
    disciplinas: { ESA: "Elisio Macia", RAP: "Joseph Katame", APM: "Leonardo Manjate", POOA: "Fernando Langa", PFI: "Rodolfo Malagissa" },
    aulas: [
      { dia: "Segunda", inicio: "7:30", fim: "9:00", disciplina: "POOA", docente: "Fernando Langa", lab: "Sala 10" },
      { dia: "Segunda", inicio: "9:05", fim: "11:25", disciplina: "APM", docente: "Leonardo Manjate" },
      { dia: "Terça", inicio: "7:30", fim: "9:00", disciplina: "RAP", docente: "Joseph Katame" },
      { dia: "Terça", inicio: "9:05", fim: "10:35", disciplina: "PFI", docente: "Rodolfo Malagissa" },
      { dia: "Terça", inicio: "10:40", fim: "12:10", disciplina: "ESA", docente: "Elisio Macia" },
      { dia: "Quarta", inicio: "7:30", fim: "9:50", disciplina: "APM", docente: "Leonardo Manjate", lab: "Lab1" },
      { dia: "Quinta", inicio: "10:40", fim: "12:10", disciplina: "RAP", docente: "Joseph Katame", lab: "Lab1" },
      { dia: "Quinta", inicio: "12:30", fim: "14:00", disciplina: "ESA", docente: "Elisio Macia", lab: "Lab1" },
      { dia: "Quinta", inicio: "14:05", fim: "15:35", disciplina: "POOA", docente: "Fernando Langa", lab: "Lab1" }
    ]
  },
  {
    turma: "4L7LDS2", curso: "LDS", ano: 4, semestre: 7, periodo: "Laboral", turno: "Manhã", sala: "ver abaixo",
    disciplinas: { ESA: "Elisio Macia", RAP: "Joseph Katame", APM: "Leonardo Manjate", POOA: "Fernando Langa", PFI: "Lucia Ginger" },
    aulas: [
      { dia: "Segunda", inicio: "8:15", fim: "10:35", disciplina: "APM", docente: "Leonardo Manjate" },
      { dia: "Segunda", inicio: "10:40", fim: "12:10", disciplina: "POOA", docente: "Fernando Langa", lab: "Lab1" },
      { dia: "Terça", inicio: "7:30", fim: "9:00", disciplina: "RAP", docente: "Joseph Katame", lab: "Lab1" },
      { dia: "Terça", inicio: "9:05", fim: "10:35", disciplina: "PFI", docente: "Lucia Ginger" },
      { dia: "Terça", inicio: "10:40", fim: "12:10", disciplina: "ESA", docente: "Elisio Macia" },
      { dia: "Quarta", inicio: "9:50", fim: "12:10", disciplina: "APM", docente: "Leonardo Manjate", lab: "Lab1" },
      { dia: "Quinta", inicio: "7:30", fim: "9:00", disciplina: "ESA", docente: "Elisio Macia", lab: "Lab1" },
      { dia: "Quinta", inicio: "9:05", fim: "10:35", disciplina: "RAP", docente: "Joseph Katame" },
      { dia: "Quinta", inicio: "10:40", fim: "12:10", disciplina: "POOA", docente: "Fernando Langa" }
    ]
  },
  {
    turma: "4P7LDS1", curso: "LDS", ano: 4, semestre: 7, periodo: "Pós-Laboral", turno: "Noite", sala: "8",
    disciplinas: { ESA: "Duarte Bila", RAP: "Moisés Ribeiro", APM: "Alírio Rungo", POOA: "Fernando Nhanice", PFI: "M Momade" },
    aulas: [
      { dia: "Segunda", inicio: "17:30", fim: "19:00", disciplina: "ESA", docente: "Duarte Bila", lab: "Lab1" },
      { dia: "Segunda", inicio: "19:05", fim: "21:25", disciplina: "APM", docente: "Alírio Rungo", lab: "Lab1" },
      { dia: "Terça", inicio: "17:30", fim: "19:00", disciplina: "POOA", docente: "Fernando Nhanice", lab: "Lab1" },
      { dia: "Terça", inicio: "19:05", fim: "20:35", disciplina: "RAP", docente: "Moisés Ribeiro" },
      { dia: "Quarta", inicio: "17:30", fim: "19:50", disciplina: "APM", docente: "Alírio Rungo" },
      { dia: "Quinta", inicio: "17:30", fim: "19:00", disciplina: "ESA", docente: "Duarte Bila" },
      { dia: "Quinta", inicio: "19:05", fim: "20:35", disciplina: "POOA", docente: "Fernando Nhanice" },
      { dia: "Sexta", inicio: "17:30", fim: "19:00", disciplina: "PFI", docente: "M Momade" },
      { dia: "Sexta", inicio: "19:50", fim: "21:25", disciplina: "RAP", docente: "Moisés Ribeiro", lab: "Lab1" }
    ]
  },
  {
    turma: "1L1LASIR1", curso: "LASIR", ano: 1, semestre: 1, periodo: "Laboral", turno: "Manhã", sala: "10",
    disciplinas: { IL: "Kriss Zimba", LP: "Ivan Mandane", SDG: "Benilde Nhanala", IT: "Rafael Malombe", ALGA: "Ilencia Martins" },
    aulas: [
      { dia: "Segunda", inicio: "7:30", fim: "9:50", disciplina: "LP", docente: "Ivan Mandane", lab: "Lab4" },
      { dia: "Segunda", inicio: "9:50", fim: "12:10", disciplina: "IT", docente: "Rafael Malombe" },
      { dia: "Terça", inicio: "7:30", fim: "9:00", disciplina: "ALGA", docente: "Ilencia Martins" },
      { dia: "Quarta", inicio: "7:30", fim: "9:00", disciplina: "IL", docente: "Kriss Zimba" },
      { dia: "Quarta", inicio: "9:05", fim: "9:35", disciplina: "SDG", docente: "Benilde Nhanala" },
      { dia: "Quinta", inicio: "7:30", fim: "9:50", disciplina: "LP", docente: "Ivan Mandane" },
      { dia: "Sexta", inicio: "7:30", fim: "9:00", disciplina: "SDG", docente: "Benilde Nhanala" },
      { dia: "Sexta", inicio: "10:40", fim: "12:10", disciplina: "IL", docente: "Kriss Zimba" },
      { dia: "Sexta", inicio: "12:30", fim: "14:00", disciplina: "ALGA", docente: "Ilencia Martins" }
    ]
  },
  {
    turma: "1L1LASIR2", curso: "LASIR", ano: 1, semestre: 1, periodo: "Laboral", turno: "Manhã", sala: "13",
    disciplinas: { IL: "Kriss Zimba", LP: "Ivan Mandane", SDG: "Benilde Nhanala", IT: "José Manjate", ALGA: "Ilencia Martins" },
    aulas: [
      { dia: "Segunda", inicio: "10:40", fim: "12:10", disciplina: "IT", docente: "José Manjate" },
      { dia: "Terça", inicio: "7:30", fim: "9:50", disciplina: "IL", docente: "Kriss Zimba" },
      { dia: "Terça", inicio: "9:50", fim: "12:10", disciplina: "LP", docente: "Ivan Mandane" },
      { dia: "Quarta", inicio: "9:05", fim: "10:35", disciplina: "IL", docente: "Kriss Zimba" },
      { dia: "Quarta", inicio: "10:40", fim: "12:10", disciplina: "SDG", docente: "Benilde Nhanala" },
      { dia: "Quinta", inicio: "8:15", fim: "9:50", disciplina: "ALGA", docente: "Ilencia Martins", lab: "Sala 12" },
      { dia: "Quinta", inicio: "9:50", fim: "12:10", disciplina: "LP", docente: "Ivan Mandane", lab: "Lab3" },
      { dia: "Sexta", inicio: "7:30", fim: "9:00", disciplina: "IL", docente: "Kriss Zimba" },
      { dia: "Sexta", inicio: "9:05", fim: "10:35", disciplina: "SDG", docente: "Benilde Nhanala" }
    ]
  },
  {
    turma: "1L1LASIR3", curso: "LASIR", ano: 1, semestre: 1, periodo: "Laboral", turno: "Manhã", sala: "14",
    disciplinas: { IL: "", LP: "Simião Langa", SDG: "Calisto Come", IT: "Luisa Almeida", ALGA: "Estêvão Mulungo" },
    aulas: [
      { dia: "Segunda", inicio: "7:30", fim: "9:50", disciplina: "LP", docente: "Simião Langa" },
      { dia: "Segunda", inicio: "9:50", fim: "12:10", disciplina: "IT", docente: "Luisa Almeida" },
      { dia: "Terça", inicio: "7:30", fim: "9:00", disciplina: "IL", docente: "" },
      { dia: "Terça", inicio: "9:05", fim: "10:35", disciplina: "SDG", docente: "Calisto Come" },
      { dia: "Terça", inicio: "10:40", fim: "12:10", disciplina: "ALGA", docente: "Estêvão Mulungo" },
      { dia: "Quarta", inicio: "7:30", fim: "9:50", disciplina: "LP", docente: "Simião Langa", lab: "Lab3" },
      { dia: "Quinta", inicio: "9:05", fim: "10:35", disciplina: "SDG", docente: "Calisto Come" },
      { dia: "Sexta", inicio: "7:30", fim: "9:00", disciplina: "IL", docente: "" },
      { dia: "Sexta", inicio: "9:05", fim: "10:35", disciplina: "ALGA", docente: "Estêvão Mulungo" }
    ]
  },
  {
    turma: "1L1LASIR1T", curso: "LASIR", ano: 1, semestre: 1, periodo: "Laboral", turno: "Tarde", sala: "10",
    disciplinas: { IL: "Kriss Zimba", LP: "Ednilson Dava", SDG: "Benilde Nhanala", IT: "Rafael Malombe", ALGA: "Ilencia Martins" },
    aulas: [
      { dia: "Segunda", inicio: "12:30", fim: "14:50", disciplina: "LP", docente: "Ednilson Dava", lab: "Lab4" },
      { dia: "Segunda", inicio: "14:50", fim: "17:10", disciplina: "IT", docente: "Rafael Malombe" },
      { dia: "Terça", inicio: "14:05", fim: "15:35", disciplina: "ALGA", docente: "Ilencia Martins" },
      { dia: "Terça", inicio: "15:40", fim: "17:10", disciplina: "IL", docente: "Kriss Zimba" },
      { dia: "Quarta", inicio: "13:15", fim: "14:50", disciplina: "SDG", docente: "Benilde Nhanala" },
      { dia: "Quarta", inicio: "14:50", fim: "17:10", disciplina: "LP", docente: "Ednilson Dava" },
      { dia: "Quinta", inicio: "12:30", fim: "14:00", disciplina: "IL", docente: "Kriss Zimba" },
      { dia: "Quinta", inicio: "15:40", fim: "17:10", disciplina: "ALGA", docente: "Ilencia Martins" },
      { dia: "Sexta", inicio: "14:05", fim: "15:35", disciplina: "SDG", docente: "Benilde Nhanala" }
    ]
  },
  {
    turma: "1P1LASIR1", curso: "LASIR", ano: 1, semestre: 1, periodo: "Pós-Laboral", turno: "Noite", sala: "10",
    disciplinas: { IL: "Amade Monteiro", LP: "Ednilson Dava", SDG: "Calisto Comé", IT: "Rafael Malombe", ALGA: "Anselmo Cossa" },
    aulas: [
      { dia: "Segunda", inicio: "17:30", fim: "19:50", disciplina: "LP", docente: "Ednilson Dava" },
      { dia: "Segunda", inicio: "19:50", fim: "21:25", disciplina: "IL", docente: "Amade Monteiro" },
      { dia: "Terça", inicio: "17:30", fim: "19:00", disciplina: "SDG", docente: "Calisto Comé" },
      { dia: "Terça", inicio: "19:05", fim: "20:35", disciplina: "ALGA", docente: "Anselmo Cossa" },
      { dia: "Quarta", inicio: "17:30", fim: "19:50", disciplina: "IT", docente: "Rafael Malombe" },
      { dia: "Quinta", inicio: "17:30", fim: "19:00", disciplina: "ALGA", docente: "Anselmo Cossa" },
      { dia: "Quinta", inicio: "19:05", fim: "20:35", disciplina: "IL", docente: "Amade Monteiro" },
      { dia: "Sexta", inicio: "17:30", fim: "19:00", disciplina: "SDG", docente: "Calisto Comé" },
      { dia: "Sexta", inicio: "19:05", fim: "21:25", disciplina: "LP", docente: "Ednilson Dava", lab: "Lab4" }
    ]
  },
  {
    turma: "1P1LASIR2", curso: "LASIR", ano: 1, semestre: 1, periodo: "Pós-Laboral", turno: "Noite", sala: "9",
    disciplinas: { IL: "", LP: "", SDG: "", IT: "Rafael Malombe", ALGA: "" },
    aulas: [
      { dia: "Segunda", inicio: "19:05", fim: "21:25", disciplina: "IT", docente: "Rafael Malombe" },
      { dia: "Terça", inicio: "17:30", fim: "19:00", disciplina: "IL", docente: "" },
      { dia: "Terça", inicio: "19:05", fim: "20:35", disciplina: "SDG", docente: "" },
      { dia: "Quarta", inicio: "17:30", fim: "19:50", disciplina: "LP", docente: "" },
      { dia: "Quarta", inicio: "19:50", fim: "21:25", disciplina: "ALGA", docente: "" },
      { dia: "Quinta", inicio: "17:30", fim: "19:00", disciplina: "ALGA", docente: "" },
      { dia: "Quinta", inicio: "19:05", fim: "20:35", disciplina: "SDG", docente: "" },
      { dia: "Sexta", inicio: "17:30", fim: "19:50", disciplina: "LP", docente: "", lab: "Lab4" },
      { dia: "Sexta", inicio: "19:50", fim: "21:25", disciplina: "IL", docente: "" }
    ]
  },
  {
    turma: "2L3LASIR1", curso: "LASIR", ano: 2, semestre: 3, periodo: "Laboral", turno: "Manhã", sala: "16",
    disciplinas: { AMII: "Augusto Inguane", MD: "Joaquim Sewane", PII: "Israel Matavel", EST: "Mauro Langa", IRC: "Gracinda Bucar" },
    aulas: [
      { dia: "Segunda", inicio: "7:30", fim: "9:00", disciplina: "AMII", docente: "Augusto Inguane", lab: "Sala9" },
      { dia: "Terça", inicio: "7:30", fim: "9:00", disciplina: "MD", docente: "Joaquim Sewane" },
      { dia: "Terça", inicio: "9:05", fim: "10:35", disciplina: "IRC", docente: "Gracinda Bucar" },
      { dia: "Terça", inicio: "10:40", fim: "11:25", disciplina: "EST", docente: "Mauro Langa" },
      { dia: "Quarta", inicio: "7:30", fim: "9:50", disciplina: "AMII", docente: "Augusto Inguane" },
      { dia: "Quarta", inicio: "9:50", fim: "12:10", disciplina: "PII", docente: "Israel Matavel" },
      { dia: "Quinta", inicio: "7:30", fim: "9:00", disciplina: "MD", docente: "Joaquim Sewane" },
      { dia: "Quinta", inicio: "9:05", fim: "10:35", disciplina: "IRC", docente: "Gracinda Bucar" },
      { dia: "Sexta", inicio: "8:15", fim: "9:50", disciplina: "EST", docente: "Mauro Langa" },
      { dia: "Sexta", inicio: "9:50", fim: "12:10", disciplina: "PII", docente: "Israel Matavel", lab: "Lab4" }
    ]
  },
  {
    turma: "2L3LASIR2", curso: "LASIR", ano: 2, semestre: 3, periodo: "Laboral", turno: "Manhã", sala: "15",
    disciplinas: { AMII: "Nelson Nhiuane", MD: "Joaquim Sewane", PII: "Israel Matavel", EST: "Mauro Langa", IRC: "Gracinda Bucar" },
    aulas: [
      { dia: "Segunda", inicio: "7:30", fim: "9:50", disciplina: "PII", docente: "Israel Matavel" },
      { dia: "Segunda", inicio: "9:50", fim: "11:25", disciplina: "AMII", docente: "Nelson Nhiuane" },
      { dia: "Terça", inicio: "7:30", fim: "9:00", disciplina: "MD", docente: "Joaquim Sewane" },
      { dia: "Terça", inicio: "9:05", fim: "10:35", disciplina: "EST", docente: "Mauro Langa" },
      { dia: "Terça", inicio: "10:40", fim: "12:10", disciplina: "IRC", docente: "Gracinda Bucar" },
      { dia: "Quarta", inicio: "9:50", fim: "12:10", disciplina: "AMII", docente: "Nelson Nhiuane" },
      { dia: "Quinta", inicio: "7:30", fim: "9:00", disciplina: "EST", docente: "Mauro Langa" },
      { dia: "Quinta", inicio: "9:05", fim: "10:35", disciplina: "MD", docente: "Joaquim Sewane" },
      { dia: "Quinta", inicio: "10:40", fim: "12:10", disciplina: "IRC", docente: "Gracinda Bucar" },
      { dia: "Sexta", inicio: "7:30", fim: "9:50", disciplina: "PII", docente: "Israel Matavel", lab: "Lab4" }
    ]
  },
  {
    turma: "2L3LASIR1T", curso: "LASIR", ano: 2, semestre: 3, periodo: "Laboral", turno: "Tarde", sala: "13",
    disciplinas: { AMII: "Nelson Nhiuane", MD: "Joaquim Sewane", PII: "Godinho Quissico", EST: "Mauro Langa", IRC: "Paulino Muebe" },
    aulas: [
      { dia: "Terça", inicio: "12:30", fim: "14:00", disciplina: "EST", docente: "Mauro Langa" },
      { dia: "Terça", inicio: "14:05", fim: "15:35", disciplina: "IRC", docente: "Paulino Muebe" },
      { dia: "Terça", inicio: "15:40", fim: "17:10", disciplina: "MD", docente: "Joaquim Sewane" },
      { dia: "Quarta", inicio: "12:30", fim: "14:50", disciplina: "PII", docente: "Godinho Quissico", lab: "Lab4" },
      { dia: "Quarta", inicio: "14:50", fim: "17:10", disciplina: "AMII", docente: "Nelson Nhiuane" },
      { dia: "Quinta", inicio: "12:30", fim: "14:00", disciplina: "MD", docente: "Joaquim Sewane" },
      { dia: "Quinta", inicio: "14:05", fim: "15:35", disciplina: "IRC", docente: "Paulino Muebe" },
      { dia: "Quinta", inicio: "15:40", fim: "17:10", disciplina: "EST", docente: "Mauro Langa" },
      { dia: "Sexta", inicio: "13:15", fim: "14:50", disciplina: "AMII", docente: "Nelson Nhiuane" },
      { dia: "Sexta", inicio: "14:50", fim: "17:10", disciplina: "PII", docente: "Godinho Quissico" }
    ]
  },
  {
    turma: "2L3LASIR2T - Não existe", curso: "LASIR", ano: 2, semestre: 3, periodo: "Laboral", turno: "Tarde", sala: "14",
    disciplinas: { AMII: "", MD: "", PII: "Fernando Langa", EST: "Anselmo Cossa", IRC: "Crimildo Garrine" },
    aulas: [
      { dia: "Terça", inicio: "12:30", fim: "14:00", disciplina: "EST", docente: "Anselmo Cossa" },
      { dia: "Terça", inicio: "14:05", fim: "15:35", disciplina: "MD", docente: "" },
      { dia: "Terça", inicio: "15:40", fim: "17:10", disciplina: "IRC", docente: "Crimildo Garrine" },
      { dia: "Quarta", inicio: "13:15", fim: "14:50", disciplina: "AMII", docente: "" },
      { dia: "Quarta", inicio: "14:50", fim: "17:10", disciplina: "PII", docente: "Fernando Langa", lab: "Lab4" },
      { dia: "Quinta", inicio: "12:30", fim: "14:00", disciplina: "EST", docente: "Anselmo Cossa" },
      { dia: "Quinta", inicio: "14:05", fim: "15:35", disciplina: "MD", docente: "" },
      { dia: "Quinta", inicio: "15:40", fim: "17:10", disciplina: "IRC", docente: "Crimildo Garrine" },
      { dia: "Sexta", inicio: "12:30", fim: "14:50", disciplina: "AMII", docente: "" },
      { dia: "Sexta", inicio: "14:50", fim: "17:10", disciplina: "PII", docente: "Fernando Langa" }
    ]
  },
  {
    turma: "2P3LASIR1", curso: "LASIR", ano: 2, semestre: 3, periodo: "Pós-Laboral", turno: "Noite", sala: "14",
    disciplinas: { AMII: "Augusto Inguane", MD: "Rosário Gudo", PII: "Amilcar González", EST: "Estevão Mulungo", IRC: "Paulino Muebe" },
    aulas: [
      { dia: "Segunda", inicio: "17:30", fim: "19:00", disciplina: "AMII", docente: "Augusto Inguane" },
      { dia: "Segunda", inicio: "19:05", fim: "20:35", disciplina: "EST", docente: "Estevão Mulungo" },
      { dia: "Terça", inicio: "17:30", fim: "19:50", disciplina: "PII", docente: "Amilcar González", lab: "Lab4" },
      { dia: "Terça", inicio: "19:50", fim: "21:25", disciplina: "MD", docente: "Rosário Gudo" },
      { dia: "Quarta", inicio: "17:30", fim: "19:00", disciplina: "IRC", docente: "Paulino Muebe" },
      { dia: "Quarta", inicio: "19:05", fim: "20:35", disciplina: "EST", docente: "Estevão Mulungo" },
      { dia: "Quinta", inicio: "17:30", fim: "19:50", disciplina: "AMII", docente: "Augusto Inguane" },
      { dia: "Quinta", inicio: "19:50", fim: "21:25", disciplina: "MD", docente: "Rosário Gudo" },
      { dia: "Sexta", inicio: "17:30", fim: "19:00", disciplina: "IRC", docente: "Paulino Muebe" },
      { dia: "Sexta", inicio: "19:05", fim: "21:25", disciplina: "PII", docente: "Amilcar González" }
    ]
  },
  {
    turma: "2P3LASIR2", curso: "LASIR", ano: 2, semestre: 3, periodo: "Pós-Laboral", turno: "Noite", sala: "15",
    disciplinas: { AMII: "Anselmo Cossa", MD: "Boaventura Maxlhope", PII: "Agnaldo Massango", EST: "Egidio Cassamo", IRC: "Moutinho Ciporo" },
    aulas: [
      { dia: "Segunda", inicio: "17:30", fim: "19:00", disciplina: "AMII", docente: "Anselmo Cossa" },
      { dia: "Segunda", inicio: "19:05", fim: "20:35", disciplina: "IRC", docente: "Moutinho Ciporo" },
      { dia: "Terça", inicio: "17:30", fim: "19:50", disciplina: "AMII", docente: "Anselmo Cossa" },
      { dia: "Terça", inicio: "19:05", fim: "21:25", disciplina: "EST", docente: "Egidio Cassamo" },
      { dia: "Quarta", inicio: "17:30", fim: "19:00", disciplina: "MD", docente: "Boaventura Maxlhope" },
      { dia: "Quarta", inicio: "19:05", fim: "20:35", disciplina: "IRC", docente: "Moutinho Ciporo" },
      { dia: "Quinta", inicio: "17:30", fim: "19:50", disciplina: "PII", docente: "Agnaldo Massango", lab: "Lab4" },
      { dia: "Quinta", inicio: "19:50", fim: "21:25", disciplina: "EST", docente: "Egidio Cassamo" },
      { dia: "Sexta", inicio: "17:30", fim: "19:00", disciplina: "MD", docente: "Boaventura Maxlhope" },
      { dia: "Sexta", inicio: "19:05", fim: "21:25", disciplina: "PII", docente: "Agnaldo Massango" }
    ]
  },
  {
    turma: "3L5LASIR1T", curso: "LASIR", ano: 3, semestre: 5, periodo: "Laboral", turno: "Tarde", sala: "5",
    disciplinas: { SSC: "Lázaro Compeu", SD: "Horácio Nhantumbo", SGBD: "Anselmo Wanse", LR: "Tomé Jamal", GAE: "Angélica Cossa" },
    aulas: [
      { dia: "Segunda", inicio: "12:30", fim: "14:50", disciplina: "SGBD", docente: "Anselmo Wanse", lab: "Lab2" },
      { dia: "Segunda", inicio: "14:50", fim: "17:10", disciplina: "SD", docente: "Horácio Nhantumbo" },
      { dia: "Terça", inicio: "12:30", fim: "14:00", disciplina: "SSC", docente: "Lázaro Compeu" },
      { dia: "Terça", inicio: "14:05", fim: "15:35", disciplina: "LR", docente: "Tomé Jamal", lab: "Lab2" },
      { dia: "Terça", inicio: "15:40", fim: "17:10", disciplina: "GAE", docente: "Angélica Cossa" },
      { dia: "Quarta", inicio: "12:30", fim: "14:00", disciplina: "SGBD", docente: "Anselmo Wanse" },
      { dia: "Quarta", inicio: "14:05", fim: "15:35", disciplina: "SD", docente: "Horácio Nhantumbo" },
      { dia: "Quinta", inicio: "14:05", fim: "15:35", disciplina: "LR", docente: "Tomé Jamal" },
      { dia: "Quinta", inicio: "15:40", fim: "17:10", disciplina: "GAE", docente: "Angélica Cossa" },
      { dia: "Sexta", inicio: "12:30", fim: "14:50", disciplina: "SSC", docente: "Lázaro Compeu", lab: "Lab1" }
    ]
  },
  {
    turma: "3L5LASIR2T", curso: "LASIR", ano: 3, semestre: 5, periodo: "Laboral", turno: "Tarde", sala: "6",
    disciplinas: { SSC: "Lázaro Compeu", SD: "Horácio Nhantumbo", SGBD: "Anselmo Wanse", LR: "Tomé Jamal", GAE: "Angélica Cossa" },
    aulas: [
      { dia: "Segunda", inicio: "12:30", fim: "14:50", disciplina: "SD", docente: "Horácio Nhantumbo" },
      { dia: "Segunda", inicio: "14:50", fim: "17:10", disciplina: "SGBD", docente: "Anselmo Wanse", lab: "Lab2" },
      { dia: "Terça", inicio: "12:30", fim: "14:00", disciplina: "LR", docente: "Tomé Jamal" },
      { dia: "Terça", inicio: "14:05", fim: "15:35", disciplina: "GAE", docente: "Angélica Cossa" },
      { dia: "Terça", inicio: "15:40", fim: "17:10", disciplina: "SSC", docente: "Lázaro Compeu" },
      { dia: "Quarta", inicio: "12:30", fim: "14:00", disciplina: "SD", docente: "Horácio Nhantumbo" },
      { dia: "Quarta", inicio: "14:05", fim: "15:35", disciplina: "SGBD", docente: "Anselmo Wanse", lab: "Lab2" },
      { dia: "Quinta", inicio: "14:05", fim: "15:35", disciplina: "GAE", docente: "Angélica Cossa" },
      { dia: "Quinta", inicio: "15:40", fim: "17:10", disciplina: "LR", docente: "Tomé Jamal", lab: "Lab2" },
      { dia: "Sexta", inicio: "14:50", fim: "17:10", disciplina: "SSC", docente: "Lázaro Compeu", lab: "Lab1" }
    ]
  },
  {
    turma: "3L5LASIR3T", curso: "LASIR", ano: 3, semestre: 5, periodo: "Laboral", turno: "Tarde", sala: "8",
    disciplinas: { SSC: "Lázaro Compeu", SD: "Horácio Nhantumbo", SGBD: "Anselmo Wanse", LR: "Tomé Jamal", GAE: "Angélica Cossa" },
    aulas: [
      { dia: "Segunda", inicio: "12:30", fim: "14:00", disciplina: "GAE", docente: "Angélica Cossa" },
      { dia: "Segunda", inicio: "14:50", fim: "16:25", disciplina: "LR", docente: "Tomé Jamal", lab: "Lab4" },
      { dia: "Terça", inicio: "12:30", fim: "14:50", disciplina: "SD", docente: "Horácio Nhantumbo" },
      { dia: "Terça", inicio: "14:50", fim: "17:10", disciplina: "SGBD", docente: "Anselmo Wanse", lab: "Lab1" },
      { dia: "Quarta", inicio: "12:30", fim: "14:00", disciplina: "SSC", docente: "Lázaro Compeu" },
      { dia: "Quarta", inicio: "14:05", fim: "15:35", disciplina: "LR", docente: "Tomé Jamal" },
      { dia: "Quarta", inicio: "15:40", fim: "17:10", disciplina: "GAE", docente: "Angélica Cossa" },
      { dia: "Quinta", inicio: "12:30", fim: "14:00", disciplina: "SD", docente: "Horácio Nhantumbo" },
      { dia: "Quinta", inicio: "14:05", fim: "15:35", disciplina: "SGBD", docente: "Anselmo Wanse" },
      { dia: "Quinta", inicio: "15:40", fim: "17:10", disciplina: "SSC", docente: "Lázaro Compeu" },
      { dia: "Sexta", inicio: "12:30", fim: "14:50", disciplina: "SSC", docente: "Lázaro Compeu", lab: "Lab4" }
    ]
  },
  {
    turma: "3L5LASIR4T", curso: "LASIR", ano: 3, semestre: 5, periodo: "Laboral", turno: "Tarde", sala: "9",
    disciplinas: { SSC: "Justino Gome", SD: "Horácio Nhantumbo", SGBD: "Anselmo Wanse", LR: "Jossefa Levene", GAE: "Luisa Vilanculo" },
    aulas: [
      { dia: "Segunda", inicio: "12:30", fim: "14:00", disciplina: "LR", docente: "Jossefa Levene" },
      { dia: "Segunda", inicio: "14:05", fim: "15:35", disciplina: "GAE", docente: "Luisa Vilanculo" },
      { dia: "Terça", inicio: "13:15", fim: "14:50", disciplina: "SGBD", docente: "Anselmo Wanse" },
      { dia: "Quarta", inicio: "12:30", fim: "14:00", disciplina: "SSC", docente: "Justino Gome" },
      { dia: "Quarta", inicio: "14:05", fim: "15:35", disciplina: "GAE", docente: "Luisa Vilanculo" },
      { dia: "Quarta", inicio: "15:40", fim: "17:10", disciplina: "LR", docente: "Jossefa Levene", lab: "Lab4" },
      { dia: "Quinta", inicio: "12:30", fim: "14:50", disciplina: "SGBD", docente: "Anselmo Wanse", lab: "Lab2" },
      { dia: "Quinta", inicio: "14:50", fim: "16:25", disciplina: "SD", docente: "Horácio Nhantumbo" },
      { dia: "Sexta", inicio: "14:50", fim: "17:10", disciplina: "SSC", docente: "Justino Gome", lab: "Lab4" }
    ]
  },
  {
    turma: "3P5LASIR1", curso: "LASIR", ano: 3, semestre: 5, periodo: "Pós-Laboral", turno: "Noite", sala: "5",
    disciplinas: { SSC: "Justino Gome", SD: "Horácio Nhantumbo", SGBD: "Anselmo Wanse", LR: "Jossefa Levene", GAE: "Luisa Vilanculo" },
    aulas: [
      { dia: "Segunda", inicio: "17:30", fim: "19:00", disciplina: "LR", docente: "Jossefa Levene", lab: "Lab2" },
      { dia: "Segunda", inicio: "19:05", fim: "21:25", disciplina: "SGBD", docente: "Anselmo Wanse", lab: "Lab2" },
      { dia: "Terça", inicio: "18:15", fim: "19:50", disciplina: "SD", docente: "Horácio Nhantumbo" },
      { dia: "Terça", inicio: "19:50", fim: "21:25", disciplina: "SSC", docente: "Justino Gome" },
      { dia: "Quarta", inicio: "17:30", fim: "19:00", disciplina: "GAE", docente: "Luisa Vilanculo" },
      { dia: "Quarta", inicio: "19:05", fim: "20:35", disciplina: "SGBD", docente: "Anselmo Wanse" },
      { dia: "Quinta", inicio: "17:30", fim: "19:00", disciplina: "LR", docente: "Jossefa Levene" },
      { dia: "Quinta", inicio: "19:05", fim: "21:25", disciplina: "SD", docente: "Horácio Nhantumbo" },
      { dia: "Sexta", inicio: "17:30", fim: "19:00", disciplina: "GAE", docente: "Luisa Vilanculo" },
      { dia: "Sexta", inicio: "19:05", fim: "21:25", disciplina: "SSC", docente: "Justino Gome", lab: "Lab2" }
    ]
  },
  {
    turma: "3P5LASIR2", curso: "LASIR", ano: 3, semestre: 5, periodo: "Pós-Laboral", turno: "Noite", sala: "4",
    disciplinas: { SSC: "Justino Gome", SD: "Horácio Nhantumbo", SGBD: "Lígia Magalhães", LR: "Jossefa Levene", GAE: "Luisa Vilanculo" },
    aulas: [
      { dia: "Segunda", inicio: "17:30", fim: "19:50", disciplina: "SD", docente: "Horácio Nhantumbo" },
      { dia: "Segunda", inicio: "19:50", fim: "20:35", disciplina: "SGBD", docente: "Lígia Magalhães" },
      { dia: "Terça", inicio: "17:30", fim: "19:50", disciplina: "SSC", docente: "Justino Gome", lab: "Lab2" },
      { dia: "Terça", inicio: "19:50", fim: "21:25", disciplina: "LR", docente: "Jossefa Levene", lab: "Lab2" },
      { dia: "Quarta", inicio: "17:30", fim: "19:50", disciplina: "SGBD", docente: "Lígia Magalhães", lab: "Lab3" },
      { dia: "Quarta", inicio: "19:50", fim: "21:25", disciplina: "GAE", docente: "Luisa Vilanculo" },
      { dia: "Quinta", inicio: "17:30", fim: "19:50", disciplina: "SD", docente: "Horácio Nhantumbo" },
      { dia: "Quinta", inicio: "19:50", fim: "21:25", disciplina: "LR", docente: "Jossefa Levene" },
      { dia: "Sexta", inicio: "17:30", fim: "19:00", disciplina: "SSC", docente: "Justino Gome" },
      { dia: "Sexta", inicio: "19:05", fim: "20:35", disciplina: "GAE", docente: "Luisa Vilanculo" }
    ]
  },
  {
    turma: "4L7LASIR1", curso: "LASIR", ano: 4, semestre: 7, periodo: "Laboral", turno: "Manhã", sala: "11",
    disciplinas: { TFRC: "Omar Muando", SRC: "Mauro Salimo", GSI: "Esmeralda Calengue", PDR: "João Mapisse", PFI: "Rodolfo Malagissa" },
    aulas: [
      { dia: "Segunda", inicio: "7:30", fim: "9:00", disciplina: "TFRC", docente: "Omar Muando", lab: "Lab1" },
      { dia: "Segunda", inicio: "9:05", fim: "10:35", disciplina: "PDR", docente: "João Mapisse" },
      { dia: "Segunda", inicio: "10:40", fim: "12:10", disciplina: "PFI", docente: "Rodolfo Malagissa" },
      { dia: "Terça", inicio: "7:30", fim: "9:00", disciplina: "SRC", docente: "Mauro Salimo", lab: "Lab4" },
      { dia: "Terça", inicio: "9:05", fim: "10:35", disciplina: "GSI", docente: "Esmeralda Calengue" },
      { dia: "Quinta", inicio: "9:05", fim: "10:35", disciplina: "TFRC", docente: "Omar Muando" },
      { dia: "Quinta", inicio: "10:40", fim: "12:10", disciplina: "PDR", docente: "João Mapisse" },
      { dia: "Sexta", inicio: "7:30", fim: "9:00", disciplina: "GSI", docente: "Esmeralda Calengue" },
      { dia: "Sexta", inicio: "9:05", fim: "10:35", disciplina: "SRC", docente: "Mauro Salimo" }
    ]
  },
  {
    turma: "4L7LASIR2", curso: "LASIR", ano: 4, semestre: 7, periodo: "Laboral", turno: "Manhã", sala: "ver abaixo",
    disciplinas: { TFRC: "Omar Muando", SRC: "Mauro Salimo", GSI: "Esmeralda Calengue", PDR: "João Mapisse", PFI: "Rodolfo Malagissa" },
    aulas: [
      { dia: "Segunda", inicio: "7:30", fim: "9:00", disciplina: "PDR", docente: "João Mapisse", lab: "Sala 11" },
      { dia: "Segunda", inicio: "9:05", fim: "10:35", disciplina: "PFI", docente: "Rodolfo Malagissa", lab: "Sala 13" },
      { dia: "Segunda", inicio: "10:40", fim: "12:10", disciplina: "GSI", docente: "Esmeralda Calengue", lab: "Sala 16" },
      { dia: "Terça", inicio: "9:05", fim: "10:35", disciplina: "TFRC", docente: "Omar Muando", lab: "Lab1" },
      { dia: "Terça", inicio: "10:40", fim: "12:10", disciplina: "SRC", docente: "Mauro Salimo", lab: "Lab1" },
      { dia: "Quarta", inicio: "7:30", fim: "9:00", disciplina: "PDR", docente: "João Mapisse", lab: "Sala 14" },
      { dia: "Quarta", inicio: "9:05", fim: "10:35", disciplina: "GSI", docente: "Esmeralda Calengue", lab: "Sala 14" },
      { dia: "Quinta", inicio: "7:30", fim: "9:00", disciplina: "TFRC", docente: "Omar Muando", lab: "Sala 12" },
      { dia: "Quinta", inicio: "10:40", fim: "12:10", disciplina: "SRC", docente: "Mauro Salimo", lab: "Sala 16" }
    ]
  },
  {
    turma: "4L7LASIR3", curso: "LASIR", ano: 4, semestre: 7, periodo: "Laboral", turno: "Manhã", sala: "ver abaixo",
    disciplinas: { TFRC: "Omar Muando", SRC: "Mauro Salimo", GSI: "Esmeralda Calengue", PDR: "João Mapisse", PFI: "Miguel Momade" },
    aulas: [
      { dia: "Segunda", inicio: "9:05", fim: "10:35", disciplina: "TFRC", docente: "Omar Muando", lab: "Lab2" },
      { dia: "Quarta", inicio: "7:30", fim: "9:00", disciplina: "PDR", docente: "João Mapisse", lab: "Sala 09" },
      { dia: "Quarta", inicio: "9:05", fim: "10:35", disciplina: "SRC", docente: "Mauro Salimo", lab: "Sala 09" },
      { dia: "Quarta", inicio: "10:40", fim: "12:10", disciplina: "PFI", docente: "Miguel Momade", lab: "Sala 09" },
      { dia: "Quinta", inicio: "7:30", fim: "9:00", disciplina: "TFRC", docente: "Omar Muando", lab: "Sala 5" },
      { dia: "Quinta", inicio: "9:05", fim: "10:35", disciplina: "GSI", docente: "Esmeralda Calengue", lab: "Sala 6" },
      { dia: "Sexta", inicio: "7:30", fim: "9:00", disciplina: "GSI", docente: "Esmeralda Calengue", lab: "Sala 6" },
      { dia: "Sexta", inicio: "9:05", fim: "10:35", disciplina: "PDR", docente: "João Mapisse", lab: "Sala 6" },
      { dia: "Sexta", inicio: "10:40", fim: "12:10", disciplina: "SRC", docente: "Mauro Salimo", lab: "Lab2" }
    ]
  },
  {
    turma: "4L7LASIR4", curso: "LASIR", ano: 4, semestre: 7, periodo: "Laboral", turno: "Manhã", sala: "ver abaixo",
    disciplinas: { TFRC: "", SRC: "Simião Chave", GSI: "Helder Nhampule", PDR: "Moutinho Ciporo", PFI: "Miguel Momade" },
    aulas: [
      { dia: "Segunda", inicio: "9:05", fim: "10:35", disciplina: "TFRC", docente: "", lab: "Lab1" },
      { dia: "Quarta", inicio: "7:30", fim: "9:00", disciplina: "PFI", docente: "Miguel Momade", lab: "Sala 11" },
      { dia: "Quarta", inicio: "9:05", fim: "10:35", disciplina: "PDR", docente: "Moutinho Ciporo", lab: "Sala 11" },
      { dia: "Quarta", inicio: "10:40", fim: "12:10", disciplina: "SRC", docente: "Simião Chave", lab: "Lab2" },
      { dia: "Quinta", inicio: "7:30", fim: "9:00", disciplina: "GSI", docente: "Helder Nhampule", lab: "Sala 8" },
      { dia: "Quinta", inicio: "9:05", fim: "10:35", disciplina: "TFRC", docente: "", lab: "Sala 9" },
      { dia: "Sexta", inicio: "7:30", fim: "9:00", disciplina: "GSI", docente: "Helder Nhampule", lab: "Sala 11" },
      { dia: "Sexta", inicio: "9:05", fim: "10:35", disciplina: "PDR", docente: "Moutinho Ciporo", lab: "Sala 11" },
      { dia: "Sexta", inicio: "10:40", fim: "12:10", disciplina: "SRC", docente: "Simião Chave", lab: "Sala 11" }
    ]
  },
  {
    turma: "4L7LASIR1T", curso: "LASIR", ano: 4, semestre: 7, periodo: "Laboral", turno: "Tarde", sala: "7",
    disciplinas: { TFRC: "Omar Muando", SRC: "Simião Chave", GSI: "M Momade", PDR: "Moutinho Ciporo", PFI: "Lúcia Ginger" },
    aulas: [
      { dia: "Terça", inicio: "12:30", fim: "14:00", disciplina: "SRC", docente: "Simião Chave" },
      { dia: "Terça", inicio: "14:05", fim: "15:35", disciplina: "TFRC", docente: "Omar Muando" },
      { dia: "Quarta", inicio: "12:30", fim: "14:00", disciplina: "PFI", docente: "Lúcia Ginger" },
      { dia: "Quarta", inicio: "14:05", fim: "15:35", disciplina: "PDR", docente: "Moutinho Ciporo" },
      { dia: "Quarta", inicio: "15:40", fim: "17:10", disciplina: "GSI", docente: "M Momade" },
      { dia: "Quinta", inicio: "12:30", fim: "14:00", disciplina: "TFRC", docente: "Omar Muando", lab: "Lab4" },
      { dia: "Quinta", inicio: "14:05", fim: "15:35", disciplina: "SRC", docente: "Simião Chave", lab: "Lab4" },
      { dia: "Sexta", inicio: "12:30", fim: "14:00", disciplina: "GSI", docente: "M Momade" },
      { dia: "Sexta", inicio: "14:05", fim: "15:35", disciplina: "PDR", docente: "Moutinho Ciporo" }
    ]
  },
  {
    turma: "4L7LASIR2T", curso: "LASIR", ano: 4, semestre: 7, periodo: "Laboral", turno: "Tarde", sala: "7",
    disciplinas: { TFRC: "Hermenegildo Langa", SRC: "Crimildo Garrine", GSI: "M Momade", PDR: "Moutinho Ciporo", PFI: "Rodolfo Malagissa" },
    aulas: [
      { dia: "Segunda", inicio: "12:30", fim: "14:00", disciplina: "GSI", docente: "M Momade", lab: "Sala 5" },
      { dia: "Segunda", inicio: "15:40", fim: "17:10", disciplina: "PDR", docente: "Moutinho Ciporo", lab: "Sala 6" },
      { dia: "Terça", inicio: "12:30", fim: "14:00", disciplina: "TFRC", docente: "Hermenegildo Langa", lab: "Lab3" },
      { dia: "Terça", inicio: "15:40", fim: "17:10", disciplina: "SRC", docente: "Crimildo Garrine", lab: "Lab2" },
      { dia: "Quarta", inicio: "12:30", fim: "14:00", disciplina: "GSI", docente: "M Momade" },
      { dia: "Quarta", inicio: "14:05", fim: "15:35", disciplina: "PDR", docente: "Moutinho Ciporo" },
      { dia: "Quinta", inicio: "12:30", fim: "14:00", disciplina: "TFRC", docente: "Hermenegildo Langa" },
      { dia: "Quinta", inicio: "14:05", fim: "15:35", disciplina: "PFI", docente: "Rodolfo Malagissa" },
      { dia: "Quinta", inicio: "15:40", fim: "17:10", disciplina: "SRC", docente: "Crimildo Garrine" }
    ]
  },
  {
    turma: "4P7LASIR1", curso: "LASIR", ano: 4, semestre: 7, periodo: "Pós-Laboral", turno: "Noite", sala: "6",
    disciplinas: { TFRC: "Hermenegildo Langa", SRC: "Crimildo Garrine", GSI: "M Momade", PDR: "Felizardo Munguambe", PFI: "Rodolfo Malagissa" },
    aulas: [
      { dia: "Segunda", inicio: "18:15", fim: "19:50", disciplina: "GSI", docente: "M Momade" },
      { dia: "Segunda", inicio: "19:50", fim: "21:25", disciplina: "TFRC", docente: "Hermenegildo Langa" },
      { dia: "Terça", inicio: "17:30", fim: "19:00", disciplina: "PDR", docente: "Felizardo Munguambe" },
      { dia: "Terça", inicio: "19:05", fim: "20:35", disciplina: "PFI", docente: "Rodolfo Malagissa" },
      { dia: "Quarta", inicio: "18:15", fim: "19:50", disciplina: "SRC", docente: "Crimildo Garrine" },
      { dia: "Quarta", inicio: "19:50", fim: "21:25", disciplina: "TFRC", docente: "Hermenegildo Langa", lab: "Lab1" },
      { dia: "Quinta", inicio: "17:30", fim: "19:00", disciplina: "PDR", docente: "Felizardo Munguambe" },
      { dia: "Quinta", inicio: "19:05", fim: "20:35", disciplina: "GSI", docente: "M Momade" },
      { dia: "Sexta", inicio: "17:30", fim: "19:00", disciplina: "SRC", docente: "Crimildo Garrine", lab: "Lab4" }
    ]
  },
  {
    turma: "4P7LASIR2", curso: "LASIR", ano: 4, semestre: 7, periodo: "Pós-Laboral", turno: "Noite", sala: "12",
    disciplinas: { TFRC: "Hermenegildo Langa", SRC: "Crimildo Garrine", GSI: "M Momade", PDR: "Felizardo Munguambe", PFI: "Rodolfo Malagissa" },
    aulas: [
      { dia: "Segunda", inicio: "17:30", fim: "19:00", disciplina: "TFRC", docente: "Hermenegildo Langa", lab: "Lab3" },
      { dia: "Segunda", inicio: "19:05", fim: "20:35", disciplina: "GSI", docente: "M Momade" },
      { dia: "Terça", inicio: "17:30", fim: "19:00", disciplina: "PFI", docente: "Rodolfo Malagissa" },
      { dia: "Terça", inicio: "19:05", fim: "20:35", disciplina: "PDR", docente: "Felizardo Munguambe" },
      { dia: "Quarta", inicio: "17:30", fim: "19:00", disciplina: "TFRC", docente: "Hermenegildo Langa" },
      { dia: "Quarta", inicio: "19:05", fim: "20:35", disciplina: "SRC", docente: "Crimildo Garrine" },
      { dia: "Quinta", inicio: "17:30", fim: "19:00", disciplina: "GSI", docente: "M Momade" },
      { dia: "Quinta", inicio: "19:05", fim: "20:35", disciplina: "PDR", docente: "Felizardo Munguambe" },
      { dia: "Sexta", inicio: "17:30", fim: "19:00", disciplina: "SRC", docente: "Crimildo Garrine", lab: "Lab2" }
    ]
  }
];

export const DIAS = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

export const DIA_SHORT = { "Segunda": "Seg", "Terça": "Ter", "Quarta": "Qua", "Quinta": "Qui", "Sexta": "Sex" };
