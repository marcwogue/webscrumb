
import { Link } from "react-router-dom";
import { studentsData } from "../data/studentsData"; // import de la base JSON

const StudentsPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Liste des étudiants</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {studentsData.map((student) => (
          <Link
            key={student.id}
            to={`/etudiant/${student.id}`}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-lg font-semibold mb-2 text-indigo-600">{student.nom}</h2>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Classe:</span> {student.classe}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Matricule:</span> {student.matricule}
            </p>
            <p className={`font-semibold ${student.aPaye ? "text-green-600" : "text-red-600"}`}>
              {student.aPaye ? "Payé" : "Non payé"}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StudentsPage;
