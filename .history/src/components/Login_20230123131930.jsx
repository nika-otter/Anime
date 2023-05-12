const Login = () => {
  return (
    <>
      {user != null ? (
        <button>Logout</button>
      ) : (
        <button>Login by Google</button>
      )}
    </>
  );
};

export default Login;
