import FeatureList from './components/FeatureList';
import HomeHero from './components/Hero/HomeHero';
import ProductSection from './components/ProductSection';
import Sales from './components/Sales';

const mockedContent = [
	{
		id: 1,
		title: 'Iphone',
		price: 1234,
		image: '/mockImages/phone.jpg',
	},
	{
		id: 2,
		title: 'Iphone2',
		price: 1234,
		image: '/mockImages/phone.png',
	},
	{
		id: 3,
		title: 'Iphone3',
		price: 1234,
		image: '/mockImages/phone.png',
	},
	{
		id: 4,
		title: 'Iphone4',
		price: 1234,
		image: '/mockImages/phone.png',
	},
	{
		id: 5,
		title: 'Iphone5',
		price: 1234,
		image: '/mockImages/phone.png',
	},
	{
		id: 6,
		title: 'Iphone6',
		price: 1234,
		image: '/mockImages/phone.png',
	},
];

const Home = () => {
	return (
		<main>
			<HomeHero />
			<div className='xl:px-[15vw]'>
				<FeatureList />
				<ProductSection content={mockedContent} heading='mobile products' />
				<ProductSection content={mockedContent} heading='smart watches' />
			</div>
			<Sales heading='new year sale' discount={10} />
		</main>
	);
};

export default Home;
