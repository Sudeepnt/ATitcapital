import Pitch from "../components/pitch";
import { getCMSData } from "../actions/cmsActions";

export const revalidate = 60;

export default async function Page() {
    const data = await getCMSData();
    return <Pitch initialContent={data?.contact} />;
}
