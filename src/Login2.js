import { useLoginForm } from "./useLoginForm";

export function Login2() {
  const { username, password, onLogin } = useLoginForm();

  return (
    <form>
      <input name="username" value={username} onChange={onLogin} />
      <input
        name="password"
        type="password"
        value={password}
        onChange={onLogin}
      />
    </form>
  );
}
