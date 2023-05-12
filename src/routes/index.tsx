import {
  component$,
  createContextId,
  useContext,
  useContextProvider,
  useStore,
} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Example from '~/components/starter/example/example';

export interface ExampleContextState {
  text?: string;
}

export const ExampleContext = createContextId<ExampleContextState>(
  'example.example-context'
);

export default component$(() => {
  const exampleStore = useStore<ExampleContextState>({}, { deep: true });
  useContextProvider<ExampleContextState>(ExampleContext, exampleStore);

  return (
    <>
      <Example />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
