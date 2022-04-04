import FreePlanEmptyState from '@/components/FreePlanEmptyState'
import PaidPlanEmptyState from '@/components/PaidPlanEmptyState'
import { useAuth } from '@/lib/auth'

export default function Sites() {
    const auth = useAuth()

    return (
        <div>
            {auth.user ? (
                // <FreePlanEmptyState />
                <PaidPlanEmptyState />
            ) : null}
        </div>
    )
}
