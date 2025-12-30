import { getImage } from "astro:assets";
import centralizeDataImage from "@/assets/mockups/centralize-data.jpg";
import createAgentsImage from "@/assets/mockups/create-agents.jpg";
import buildWorkflowsImage from "@/assets/mockups/build-workflows.jpg";
import monitorResultsImage from "@/assets/mockups/monitor-results.jpg";
import boostAnalyticsImage from "@/assets/mockups/boost-analytics.jpg";

export const platformSteps = [
  "centralize-data",
  "create-agents",
  "build-workflows",
  "monitor-results",
  "boost-analytics",
] as const;

export const platformStepImages: Record<string, typeof centralizeDataImage> = {
  "centralize-data": centralizeDataImage,
  "create-agents": createAgentsImage,
  "build-workflows": buildWorkflowsImage,
  "monitor-results": monitorResultsImage,
  "boost-analytics": boostAnalyticsImage,
};

// Get optimized image URLs for JavaScript switching
export async function getPlatformImageUrls(): Promise<Record<string, string>> {
  const urls: Record<string, string> = {};
  for (const [id, imageSrc] of Object.entries(platformStepImages)) {
    urls[id] = (await getImage({ src: imageSrc })).src;
  }
  return urls;
}

