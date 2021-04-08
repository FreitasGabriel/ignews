import { GetStaticProps } from 'next'
import Head from 'next/head'
import { stripe } from '../services/stripe'
import { SubscribeButton } from '../components/SubscribeButton'
import styles from './home.module.scss'

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer} >
        <section className={styles.hero} >
          <span>🚀 Hey, welcome!</span>
          <h1>News about the <span>React</span> world</h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}

//ESSA FUNÇÃO É UTILIZADA PARA BUSCAR INFORMAÇÕES NO ESTILO SERVER-SIDE RENDERING
//ELA PRECISA SER EM FORMATO DE CONST E PRECISA TER ESSE NOME

//UTILIZANDO O GETSTATICPROPS PASSA A UTILIZAR O MÉTODO DE STATIC SITE GENERATION
export const getStaticProps: GetStaticProps = async () => {

  const price = await stripe.prices.retrieve('price_1IaSusLqJjlFcYE0kDKCNiDj')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100),

  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24, //24 hours
  }
}