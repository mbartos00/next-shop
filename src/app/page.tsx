import FeatureList from './components/FeatureList';
import HomeHero from './components/Hero/HomeHero';

const Home = () => {
	return (
		<main>
			<HomeHero />
			<div className='xl:px-[15vw]'>
				<FeatureList />
			</div>
		</main>
	);
};

export default Home;
