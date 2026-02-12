import People from "../components/people";
import { getCMSData } from "../actions/cmsActions";

export const revalidate = 60;

export default async function Page() {
    const data = await getCMSData();
    return <People initialContent={data?.people} />;
}
