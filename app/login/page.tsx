// app/login/page.tsx

export default function LoginPage() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Login Page</h1>
      <form>
        <input type="email" placeholder="Email" className="border p-2 m-2" />
        <input type="password" placeholder="Password" className="border p-2 m-2" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Login</button>
      </form>
    </div>
  );
}