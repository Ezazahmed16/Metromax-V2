import KeyLine from '@/components/KeyLine'
import MessageDirector from '@/components/MessageDirector'
import MessageMDirector from '@/components/MessageMDirector'
import OurExpertise from '@/components/OurExpertise'
import OurMission from '@/components/OurMission'
import Sustainability from '@/components/Sustainability'
const page = () => {
    return (
        <div>
            <div className="hero h-96 image-full" style={{ backgroundImage: 'url(https://bnz05pap002files.storage.live.com/y4mZ2Y0mY6TuK7ZC2K_7XJ0BLiKt9tmLyQj1VFYpz3MSksDvk5mDYmRVPNCfH6EJx4BEt0jO5aMRewyN9Cx_4MeIiG3rIZWhiYYvrDeqhgchwuMy3pMJMbviZD8SfbdHJE3GEvW34GNoHHnMu-iPabFiU_JT1T-cu_Bkr0TqfqNrLzZenH-zg2SkvLRCk3uGyYcxSeBpkRnP4yDu93cqedQGA?encodeFailures=1&width=1324&height=501)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content w-full text-white">
                    <div className="w-full mt-64">
                        <h1 className="mb-5 text-5xl">About Us</h1>
                    </div>
                </div>
            </div>
            <div className="">
                <KeyLine />
                <OurMission />
                <MessageMDirector />
                <MessageDirector />
                <OurExpertise />
                <Sustainability />
            </div>
        </div>
    )
}

export default page