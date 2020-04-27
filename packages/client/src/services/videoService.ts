import { buildVideo, VideoDTO } from "entities";
import { api } from "@/services/api";

export async function fetchAllVideos() {
    const dtos: VideoDTO[] = await api.get("/videos");
    return dtos.map((dto) => buildVideo(dto));
}
