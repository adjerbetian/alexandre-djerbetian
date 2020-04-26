export interface VideoDBModel {
    title: string;
    youtubeId: string;
    year: number;
    speaker: string;
    comments?: string;
    moments?: MomentDBModel[];
}

interface MomentDBModel {
    time: string;
    content: string;
}
