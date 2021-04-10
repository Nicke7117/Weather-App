import { Form } from "./components/Form"

export const App = () => {
  return (
    <div className="w-full h-full bg-gradient-to-t from-yellow-200 to-yellow-600 absolute">
      <p className="ml-2">Weather app</p>
      <Form />
      
    </div>
  );
}


