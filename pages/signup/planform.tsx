import { CheckIcon } from '@heroicons/react/outline'
import { getProducts, Product } from '@stripe/firestore-stripe-payments'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { planState } from '../../atoms/modalAtom'
import Loader from '../../components/loader'
import Table from '../../components/table'
import useAuth from '../../hooks/useAuth'
import UseSubscription from '../../hooks/useSubscription'
import payments, { loadCheckout } from '../../lib/stripe'

interface PlanFormProps {
  products: Product[] | null
}

const PlanForm: NextPage<PlanFormProps> = ({ products }) => {
  const { logout, user, loading } = useAuth()
  const [selectedPlan, setSelectedPlan] = useRecoilState(planState)
  const [isBillingLoading, setBillingLoading] = useState(false)
  const subscription = UseSubscription(user)
  const router = useRouter()

  useEffect(() => {
    if (!selectedPlan) {
      setSelectedPlan(products![2])
    }
  }, [])

  if (loading || subscription === null) return null

  if (subscription) {
    router.push('/')
    return null
  }

  const subscribeToPlan = () => {
    if (!user) return

    loadCheckout(selectedPlan?.prices[0].id!)
    setBillingLoading(true)
  }

  const plans = (plans: string[]) =>
    plans.map((plan, index) => (
      <li key={index} className="flex items-center gap-x-2 text-lg">
        <CheckIcon className="h-7 w-7 text-[#E50914]" /> {plan}
      </li>
    ))

  return (
    <div>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="border-b border-white/10 bg-[#141414]">
        <Link href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt=""
            width={150}
            height={90}
            className="cursor-pointer object-contain"
          />
        </Link>

        <button
          className="text-lg font-medium hover:underline"
          onClick={logout}
        >
          Sign Out
        </button>
      </header>

      <main className="mx-auto max-w-5xl px-5 pt-28 pb-12 transition-all md:px-10">
        <h1 className="mb-3 text-3xl font-medium">
          Choose the plan that's right for you
        </h1>
        <ul>
          {plans([
            'Watch all you want. Ad-free.',
            'Recommendations just for you.',
            'Change or cancel your plan anytime.',
          ])}
        </ul>

        <div className="mt-4 flex flex-col space-y-4">
          <div className="flex w-full items-center justify-end self-end md:w-3/5">
            {products?.map((product) => (
              <div
                key={product.id}
                className={`planBox ${
                  selectedPlan?.id === product.id
                    ? 'opacity-100 after:border-opacity-100'
                    : 'opacity-60'
                }`}
                onClick={() => setSelectedPlan(product)}
              >
                {product.name}
              </div>
            ))}
          </div>

          <Table products={products} />

          <button
            disabled={!selectedPlan || isBillingLoading}
            className={`mx-auto w-11/12 rounded bg-[#E50914] py-4 text-xl shadow hover:bg-[#f6121d] md:w-[420px] ${
              isBillingLoading && 'opacity-60'
            }`}
            onClick={subscribeToPlan}
          >
            {isBillingLoading ? (
              <Loader color="dark:fill-gray-300" />
            ) : (
              'Subscribe'
            )}
          </button>
        </div>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await getProducts(payments, {
    includePrices: true,
    activeOnly: true,
  })
    .then((res) => res)
    .catch((error) => console.log(error.message))

  return {
    props: {
      products,
    },
  }
}

export default PlanForm
