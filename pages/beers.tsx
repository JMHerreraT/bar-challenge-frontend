import LandingTemplate from '@/components/templates/LandingTemplate/LandingTemplate'
import BeersTemplate from '@/components/templates/BeersTemplate/BeersTemplate'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
const queryClient = new QueryClient();

export default function Home() {
  return (
      <LandingTemplate>
        <QueryClientProvider client={queryClient}>
          <BeersTemplate />
        </QueryClientProvider>
      </LandingTemplate>
  )
}
