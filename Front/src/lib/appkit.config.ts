import {sepolia} from '@reown/appkit/networks'
import {createAppKit} from "@reown/appkit/react";
import {wagmiAdapter} from '@/lib/wagmi.config'

const metadata = {
    name: 'Billetterie NFT',
    description: 'Simplifiez et sécurisez la vente de vos billets avec la blockchain.',
    url: 'http://localhost', // origin must match your domain & subdomain
    icons: ['https://assets.reown.com/reown-profile-pic.png']
}

export default function AppKit() {
    return createAppKit({
        adapters: [wagmiAdapter],
        projectId: process.env.NEXT_PUBLIC_APP_KIT_PROJECT_ID as string,
        networks: [sepolia],
        defaultNetwork: sepolia,
        metadata: metadata,
        features: {
            analytics: true,
            email: true,
            socials: false,
            collapseWallets: true,
        },
        themeMode: 'light',
    })
}
