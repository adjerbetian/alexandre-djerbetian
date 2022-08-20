import type { Video } from "@alex/entities";

export function buildVideoUseCases({ videoRepository }: Dependencies) {
    return {
        getAllVideos(): Video[] {
            return videoRepository.fetchAll();
        },
    };
}

export type VideoUseCases = ReturnType<typeof buildVideoUseCases>;
interface Dependencies {
    videoRepository: VideoRepository;
}
export interface VideoRepository {
    fetchAll(): Video[];
}
