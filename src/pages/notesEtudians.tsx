
import { useParams } from "react-router-dom";
import { studentsData } from "../data/studentsData";

const StudentNotesPage = () => {
  const { id } = useParams<{ id: string }>();
  const student = studentsData.find((s) => s.id === Number(id));

  if (!student) return <p>Étudiant introuvable</p>;

  return (
    <div className="p-6 bg-gray-100 w-full overflow-scroll min-h-screen">
      <h1 className="text-2xl font-bold mb-4">{student.nom}</h1>
      <p className="mb-6">
        <span className="font-semibold">Classe:</span> {student.classe} |{" "}
        <span className={`font-semibold ${student.aPaye ? "text-green-600" : "text-red-600"}`}>
          {student.aPaye ? "Payé" : "Non payé"}
        </span>
      </p>

      <div className="space-y-6 flex items-center space-x-24 flex-wrap w-full ">
        {student.semestres.map((semestre) => (
          <div key={semestre.nom} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{semestre.nom}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {semestre.notes.map((note) => (
                <div
                  key={note.matiere}
                  className="bg-indigo-50 p-3 rounded-lg text-center"
                >
                  <p className="font-semibold">{note.matiere}</p>
                  <p className="text-lg">{note.note}/20</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentNotesPage;
