import Testimonial from "@/Components/Testimonial";

const Alltestimo = () => {

	const data = [
		{
			img: "https://placehold.co/100x100/brown/white",
			heading:
				"ntities were described in the previous heloo iugsduiy iugsudg uiqdiusg iudisg oiwh9owuie ioqiheoui oweihfoieh woiehf9owuieh chapte",
			name: "hammad",
			post: "ceo and founder",
		},
		{
			img: "https://placehold.co/100x100/black/white",
			heading:
				"ntities were described in the previous heloo iugsduiy iugsudg uiqdiusg iudisg oiwh9owuie ioqiheoui oweihfoieh woiehf9owuieh chapte",
			name: "sabtain",
			post: "certified mochii",
		},
		{
			img: "https://placehold.co/100x100/blue/white",
			heading:
				"ntities were described in the previous heloo iugsduiy iugsudg uiqdiusg iudisg oiwh9owuie ioqiheoui oweihfoieh woiehf9owuieh chapte",
			name: "mustafa",
			post: "gali ka chor",
		},
	];
	return (
		<>
			<h1>hello</h1>

			<div className="flex">
				{data.map((item, index) => (
					<Testimonial
						key={index}
						heading={item.heading}
						img={item.img}
						name={item.name}
						post={item.post}
					/>
				))}
			</div>
		</>
	);

};

export default Alltestimo;
