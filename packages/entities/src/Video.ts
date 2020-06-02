import { asEntityFactory } from "./entity";

export const buildVideo = asEntityFactory((dto: VideoDTO) => {
    return Object.freeze({
        id: dto.id,
        title: dto.title,
        youtubeId: dto.youtubeId,
        year: dto.year,
        speaker: dto.speaker,
        comments: dto.comments || "",
        moments: Object.freeze(
            dto.moments.map((m) =>
                Object.freeze({
                    time: m.time,
                    content: m.content
                })
            )
        ),

        isSmall() {
            return !this.comments && this.moments.length === 0;
        }
    });
});

export interface Video extends ReturnType<typeof buildVideo> {}

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
