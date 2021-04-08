import { useSession, signIn } from 'next-auth/client'
import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripe.js'
import styles from './styles.module.scss'

interface SubscribeButtonProps {
    priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {

    const [session] = useSession()

    async function handleSubscribe() {
        if (!session) {
            signIn('github')
            return
        }
        //criação da checkout session

        try {
            const response = await api.post('/subscribe')

            const { sessionID } = response.data

            const stripe = await getStripeJs()

            await stripe.redirectToCheckout({ sessionId: sessionID })
        } catch (error) {
            console.log(error.message)
        }

    }

    return (
        <button
            type="button"
            className={styles.subscribeButton}
            onClick={handleSubscribe}
        >
            Subscribe Now
        </button>
    )
}

function alert() {
    throw new Error('Function not implemented.')
}
