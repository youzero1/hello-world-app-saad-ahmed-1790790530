type GreetingProps = {
  title?: string;
  subtitle?: string;
};

export function Greeting({
  title = 'Hello, World!',
  subtitle = 'Welcome to your new app — happy building!',
}: GreetingProps) {
  return (
    <section className="rounded-3xl border border-white/60 bg-white/60 px-10 py-14 text-center shadow-xl shadow-indigo-200/50 backdrop-blur-sm sm:px-16">
      <h1 className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl">
        {title}
      </h1>
      <p className="mt-5 text-lg text-slate-500 sm:text-xl">{subtitle}</p>
    </section>
  );
}
