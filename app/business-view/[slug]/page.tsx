import BusinessSideView from "../../components/business-side-view";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <BusinessSideView slug={slug} />;
}
