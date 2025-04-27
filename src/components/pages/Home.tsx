import Hero from '../ui/sections/Hero'
import Faq from '../ui/sections/Faq'
import Clients from '../ui/sections/Clients'
import Categories from '../ui/sections/Categories'

const Home = () => {
    return (
        <>
            <Hero />
            <Categories />
            <Faq />
            <Clients />
        </>
    )
}

export default Home