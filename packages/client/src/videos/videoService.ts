import { buildVideo, VideoDTO } from "@alex/entities";
import { api } from "@/utils";

export async function fetchAllVideos() {
    const dtos: VideoDTO[] = await api.get("/videos");
    return dtos.map((dto) => buildVideo(dto));
}
