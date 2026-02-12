import Home from "./components/home";
import { getCMSData } from "./actions/cmsActions";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Page() {
  const data = await getCMSData();
  // Ensure we pass only the home data, or the full object if Home needs more
  const homeContent = data?.home || null;

  return <Home initialContent={homeContent} />;
}
