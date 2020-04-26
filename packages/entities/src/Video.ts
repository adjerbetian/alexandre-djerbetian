export function buildVideo(dto: VideoDTO): Video {
    return Object.freeze(dto);
}

export interface Video extends Readonly<VideoDTO> {}

export interface VideoDTO {
    id: string;
    title: string;
    youtubeId: string;
    year: number;
    speaker: string;
    comments?: string;
    moments: MomentDTO[];
}

export interface MomentDTO {
    time: string;
    content: string;
}
