import { Video } from "entities";
import { api } from "@/services/api";

export async function fetchAllVideos(): Promise<Video[]> {
    return api.get("/videos");
}
