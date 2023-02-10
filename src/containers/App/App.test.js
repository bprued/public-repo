import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from "react-query";
import App from './App';

jest.mock('react-query', () => {
  const original = jest.requireActual("react-query")
  return {
    ...original,
    useQuery: () => ({
      data: [
        {
          id: 1,
          name: 'test1',
          owner: {
            login: 'user1'
          }
        },
      ]
    }),
  }
})

const queryClient = new QueryClient();

const AppComponent = (
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)

test('Should match snapshot', () => {
  const { asFragment } = render(AppComponent)
  const titleText = screen.getByText(/Github Public Repositories/i);
  expect(titleText).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot()
})
