import BusinessSideView from "../../components/business-side-view";
import { getCMSData } from "../../actions/cmsActions";
import { slugify } from "../../utils/slugify";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = await getCMSData();

    const service = data?.services?.items?.find((item: any) => slugify(item.title) === slug);

    if (!service) {
        redirect("/services");
    }

    return <BusinessSideView service={service} />;
}
