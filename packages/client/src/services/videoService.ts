import { buildVideo, Video } from "entities";
import { api } from "@/services/api";

export async function fetchAllVideos() {
    const dtos: Video[] = await api.get("/videos");
    return dtos.map((dto) => buildVideo(dto));
}
