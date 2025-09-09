


export default function Dash() {

  return (
      /* Main Content */
      <div className="flex-1 p-6 overflow-y-auto">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">Tableau de bord</h1>
          <div className="flex items-center space-x-8">
            <span>Bonjour, Admin</span>
            <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">A_D</div>
          </div>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-gray-600">Étudiants inscrits</p>
            <p className="text-2xl font-bold text-blue-600">1 240</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-gray-600">Enseignants</p>
            <p className="text-2xl font-bold text-green-600">85</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-gray-600">Paiements reçus</p>
            <p className="text-2xl font-bold text-purple-600">45.6M FCFA</p>
          </div>
        </div>

        {/* Bottom Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="font-semibold mb-2">Dernières inscriptions</h2>
            <div className="text-gray-500">Aucune donnée pour l'instant</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="font-semibold mb-2">Activités récentes</h2>
            <div className="text-gray-500">Aucune donnée pour l'instant</div>
          </div>
        </div>
      </div>
  );
}
