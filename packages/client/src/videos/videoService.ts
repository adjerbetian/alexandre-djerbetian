import { api } from "@/utils";
import type { VideoDTO } from "@alex/entities";
import { buildVideo } from "@alex/entities";

export async function fetchAllVideos() {
    const dtos: VideoDTO[] = await api.get("/videos");
    return dtos.map((dto) => buildVideo(dto));
}
