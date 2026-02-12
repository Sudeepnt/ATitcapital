import Principles from "../components/principles";
import { getCMSData } from "../actions/cmsActions";

export const revalidate = 60;

export default async function Page() {
    const data = await getCMSData();
    return <Principles initialContent={data?.principles} />;
}
