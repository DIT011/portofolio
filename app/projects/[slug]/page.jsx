import jsonData from "@/json/data.json";
import ProjectDetail from "./ProjectDetail";

export function generateStaticParams() {
	return jsonData.Projects.map((project) => ({
		slug: project.slug,
	}));
}

export default async function Page({ params }) {
	const { slug } = await params;
	return <ProjectDetail slug={slug} />;
}