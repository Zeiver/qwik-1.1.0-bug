import { component$, useContext } from "@builder.io/qwik";
import { ExampleContext } from "~/routes";

export default component$(() => {
  const exampleContext = useContext(ExampleContext);

  return (
    <>
      <button
        onClick$={() => {
          exampleContext.text = "was clicked";
        }}
      >
        Click me to show the context text value!
      </button>
      {exampleContext.text !== undefined && <>Hi</>}
    </>
  );
});
