
interface Article {

	Imagehref : string;
	tags : string[]; 
	title : string; 
	content : string;
	articlehref : string;

}

function ArticleCard(props:Article){
	return (
		<div className="h-[38rem] p-2 w-9/10 xl:w-1/4 md:w-1/2 rounded-md ring-2 ring-gray-100 shadow-md flow-hiddens">
			<img src={props.Imagehref} alt="Article cover" className="w-full rounded-md "/>
			<h5 className="p-2 text-md xl:text-2xl md:text-xl font-bold">{props.title}</h5>
			<div className="flex flex-wrap gap-2 p-1 m-2">
			{props.tags.map((item) => (
				<div className=" bg-gray-50 text-gray-500 rounded-md font-bold text-md p-2 text-sm" key={item}>
					{item}
				</div>
			))}
			</div>
			<p className="p-2 m-2 font-normal text-md text-gray-400 text-justify">
				{props.content}
			</p>
			<div className="flex px-3 my-4 item-end justify-end">
				<a href={props.articlehref} className=" bg-bilbao-700 p-2 rounded-md text-md text-white font-semibold">Baca artikel</a>			
			</div>
			
		</div>
	
	
	);


}


export default function Articles(){
return (
	<div className="m-12">
	<h2 className="font-bold text-center text-4xl tracking-tight p-4 m-6">Artikel dari Anugerah Cipta Arsitektur</h2>
		<div className="flex flex-col xl:flex-row  gap-8 items-center justify-center">

			<ArticleCard 
			Imagehref="../Article_thumbnail.jpg" 
			tags={["design","planning","architecture"]}
			title="Bagaimana cara arsitek mendesain suatu bangunan?"
			content="Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet"  
			articlehref="/bagaimana-cara-arsitek-mendesain-suatu-bangunan"
			/>

			<ArticleCard 
			Imagehref="../Article_thumbnail.jpg" 
			tags={["design","planning","architecture"]}
			title="Bagaimana cara arsitek mendesain suatu bangunan?"
			content="Lorem Ipsum dolor sit amet" 
			articlehref="/bagaimana-cara-arsitek-mendesain-suatu-bangunan"
			/>


			<ArticleCard 
			Imagehref="../Article_thumbnail.jpg" 
			tags={["design","planning","architecture"]}
			title="Bagaimana cara arsitek mendesain suatu bangunan?"
			content="Lorem Ipsum dolor sit amet" 
			articlehref="/bagaimana-cara-arsitek-mendesain-suatu-bangunan"
			/>

		</div>
	</div>




);}
