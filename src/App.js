import { Main } from "./components/Main"

export const App = () => {
  return (
    <div className="w-full h-full bg-gradient-to-t from-yellow-200 to-yellow-600 absolute px-2">
      <p className="ml-2">Weather app</p>
      <Main />
      
    </div>
  );
}


