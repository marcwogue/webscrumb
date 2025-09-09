export interface Note {
    matiere: string;
    note: number;
  }
  
  export interface Semester {
    nom: string; 
    notes: Note[];
  }
  
  export interface StudentData {
    id: number;
    nom: string;
    classe: string;
    matricule: string;
    aPaye: boolean;
    semestres: Semester[];
  }
  
  export const studentsData: StudentData[] = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    nom: `Étudiant ${i + 1}`,
    classe: `Classe ${((i % 6) + 1)}`,
    matricule: `M${1000 + i + 1}`,
    aPaye: Math.random() > 0.3,
    semestres: [
      {
        nom: "trimestre 1",
        notes: [
          { matiere: "Mathématiques", note: Math.floor(Math.random() * 21) },
          { matiere: "informatique", note: Math.floor(Math.random() * 21) },
          { matiere: "Anglais", note: Math.floor(Math.random() * 21) },
          { matiere: "Svt", note: Math.floor(Math.random() * 21) },
          { matiere: "geographie", note: Math.floor(Math.random() * 21) },
          { matiere: "histoire", note: Math.floor(Math.random() * 21) },
          { matiere: "ECM", note: Math.floor(Math.random() * 21) },
          { matiere: "Physique", note: Math.floor(Math.random() * 21) },
          { matiere: "Français", note: Math.floor(Math.random() * 21) },
        ],
      },
      {
        nom: "trimestre  2",
        notes: [
          { matiere: "Mathématiques", note: Math.floor(Math.random() * 21) },
          { matiere: "informatique", note: Math.floor(Math.random() * 21) },
          { matiere: "Anglais", note: Math.floor(Math.random() * 21) },
          { matiere: "Svt", note: Math.floor(Math.random() * 21) },
          { matiere: "geographie", note: Math.floor(Math.random() * 21) },
          { matiere: "histoire", note: Math.floor(Math.random() * 21) },
          { matiere: "ECM", note: Math.floor(Math.random() * 21) },
          { matiere: "Physique", note: Math.floor(Math.random() * 21) },
          { matiere: "Français", note: Math.floor(Math.random() * 21) },
        ],
      },
      {
        nom: "trimestre  3",
        notes: [
          { matiere: "Mathématiques", note: Math.floor(Math.random() * 21) },
          { matiere: "informatique", note: Math.floor(Math.random() * 21) },
          { matiere: "Anglais", note: Math.floor(Math.random() * 21) },
          { matiere: "Svt", note: Math.floor(Math.random() * 21) },
          { matiere: "geographie", note: Math.floor(Math.random() * 21) },
          { matiere: "histoire", note: Math.floor(Math.random() * 21) },
          { matiere: "ECM", note: Math.floor(Math.random() * 21) },
          { matiere: "Physique", note: Math.floor(Math.random() * 21) },
          { matiere: "Français", note: Math.floor(Math.random() * 21) },
        ],
      },
    ],
  }));
  