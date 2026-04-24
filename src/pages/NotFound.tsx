import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Página não encontrada</p>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-3 bg-black text-white rounded hover:opacity-80 transition"
      >
        Voltar ao início
      </button>
    </div>
  );
};

export default NotFound;
