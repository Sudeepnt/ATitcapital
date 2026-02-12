import Services from "../components/services";
import { getCMSData } from "../actions/cmsActions";

export const revalidate = 60;

export default async function Page() {
    const data = await getCMSData();
    return <Services initialData={data} />;
}
