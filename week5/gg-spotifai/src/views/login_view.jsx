const LoginView = ({ onClick }) => {
  return (
      <div className="flex flex-col items-center justify-center mt-80">
        <h2 className="text-3xl font-bold text-white">SPOTIFAI</h2>
        <div className="h-6"></div>
        <button onClick={onClick} className="btn-primary bg-appGreen">Login</button>
      </div>
  );
};

export default LoginView;
