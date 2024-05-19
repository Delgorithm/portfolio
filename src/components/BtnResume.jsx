import { TbCloudDownload } from "react-icons/tb";

function BtnResume() {
	return (
		<button className="flex items-center gap-2 py-2 px-3 border xsl:text-xl md:text-3xl border-mineshaft rounded-3xl hover:bg-mineshaft hover:text-cararra active:opacity-55">
			<TbCloudDownload className="text-2xl md:text-4xl" /> Obtenir mon CV
		</button>
	);
}

export default BtnResume;
