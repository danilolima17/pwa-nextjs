import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import('../components/Header'), {
  loading: () => <p>Loading</p>
})

const DynamicMain = dynamic(() => import('../components/Main'), {
  loading: () => <p>Loading</p>
})

const DynamicSection = dynamic(() => import('../components/Section'), {
  loading: () => <p>Loading</p>
})

const DynamicServices = dynamic(() => import('../components/Services'), {
  loading: () => <p>Loading</p>
})

const DynamicFooter = dynamic(() => import('../components/Footer'), {
  loading: () => <p>Loading</p>
})



export default function Home() {
  return (
    <>
      <DynamicHeader />
      <DynamicMain />
      <DynamicSection />
      <DynamicServices />
      <DynamicFooter />
    </>
  )
}
