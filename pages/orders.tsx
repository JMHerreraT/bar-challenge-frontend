import LandingTemplate from '@/components/templates/LandingTemplate/LandingTemplate'
import OrdersTemplate from '@/components/templates/OrdersTemplate/OrdersTemplate'

export default function Home() {
  return (
      <LandingTemplate>
        <OrdersTemplate />
      </LandingTemplate>
  )
}
