import { asControllers } from "../utils";
import { Domain } from "../domain";

export function buildVideoControllers(domain: Domain) {
    return asControllers({
        getAllVideos(req, res) {
            res.json(domain.videos.getAllVideos());
        }
    });
}
