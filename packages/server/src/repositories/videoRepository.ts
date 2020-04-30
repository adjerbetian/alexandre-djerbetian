import { buildVideo } from "entities";
import { µ } from "micro";
import * as db from "db";
import { VideoRepository } from "../domain";

export const videoRepository: VideoRepository = {
    fetchAll() {
        return db.videos.map((dbModel) =>
            buildVideo({
                ...dbModel,
                id: dbModel.youtubeId,
                comments: µ.trimCommonIndentation(dbModel.comments || ""),
                moments: dbModel.moments || []
            })
        );
    }
};
