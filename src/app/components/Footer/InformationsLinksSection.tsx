import Link from 'next/link';

type Props = {
	text: string;
	links: {
		title: string;
		path: string;
	}[];
};

const InformationsLinksSection = ({ text, links }: Props) => {
	return (
		<section className='flex flex-col items-center text-primary xl:items-start'>
			<h3 className='text-xl font-medium'>{text.toUpperCase()}</h3>
			<ul className='flex flex-col'>
				{links.map((link) => (
					<li
						key={link.path}
						className='flex justify-center text-base font-medium tracking-wide hover:text-secondary xl:justify-start'
					>
						<Link href={link.path}>{link.title.toUpperCase()}</Link>
					</li>
				))}
			</ul>
		</section>
	);
};

export default InformationsLinksSection;
