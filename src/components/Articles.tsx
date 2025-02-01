
interface Article {

	Imagehref : string;
	tags : string[]; 
	title : string; 
	content : string;

}

function ArticleCard(props:Article){
	return (
		<div className="p-4 w-full xl:w-1/4 md:w-1/2 rounded-md ring-2 ring-gray-100 shadow-md flow-hiddens">
			<img src={props.Imagehref} alt="Article cover" className="w-full rounded-md "/>
			<h5 className="p-2 m-2 text-2xl font-bold">{props.title}</h5>
			<div className="flex flex-wrap gap-2 p-2 m-2">
			{props.tags.map((item) => (
				<div className=" bg-bilbao-700 text-white rounded-md font-bold text-md p-2 " key={item}>
					{item}
				</div>
			))}
			</div>
			<p className="p-2 m-2 font-normal text-md text-justify">
				{props.content}
			</p>
		</div>
	
	
	);


}


export default function Articles(){
return (
	<div>
	<h2 className="font-bold text-center text-5xl p-4 m-6">Artikel dari Anugerah Cipta Arsitektur</h2>
		<div className="flex flex-col xl:flex-row  gap-8 items-center justify-center">

			<ArticleCard 
			Imagehref="../Article_thumbnail.jpg" 
			tags={["design","planning","architecture"]}
			title="Bagaimana cara arsitek mendesain suatu bangunan?"
			content="Lorem Ipsum dolor sit amet" 
			/>


			<ArticleCard 
			Imagehref="../Article_thumbnail.jpg" 
			tags={["design","planning","architecture"]}
			title="Bagaimana cara arsitek mendesain suatu bangunan?"
			content="Lorem Ipsum dolor sit amet" 
			/>


			<ArticleCard 
			Imagehref="../Article_thumbnail.jpg" 
			tags={["design","planning","architecture"]}
			title="Bagaimana cara arsitek mendesain suatu bangunan?"
			content="Lorem Ipsum dolor sit amet" 
			/>

		</div>
	</div>




);}