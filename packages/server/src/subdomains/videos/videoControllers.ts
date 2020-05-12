import { asControllers } from "../../utils";
import { VideoUseCases } from "./videos";

export function buildVideoControllers(useCases: VideoUseCases) {
    return asControllers({
        getAllVideos(req, res) {
            res.json(useCases.getAllVideos());
        }
    });
}
