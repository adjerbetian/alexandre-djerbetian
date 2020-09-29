import { buildVideo } from "@alex/entities";
import { µ } from "@alex/micro";
import * as db from "@alex/db";
import { VideoRepository } from "./videos";

export const videoRepository: VideoRepository = {
    fetchAll() {
        return db.videos.map((dbModel) =>
            buildVideo({
                ...dbModel,
                id: dbModel.youtubeId,
                comments: µ.trimCommonIndentation(dbModel.comments || ""),
                moments: dbModel.moments || [],
            })
        );
    },
};
