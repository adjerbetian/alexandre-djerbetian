import { Video } from "@alex/entities";
import { VideoRepository } from "./repositories";

interface Dependencies {
    videoRepository: VideoRepository;
}

export function buildVideoUseCases({ videoRepository }: Dependencies) {
    return {
        getAllVideos(): Video[] {
            return videoRepository.fetchAll();
        }
    };
}
