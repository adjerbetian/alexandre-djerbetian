import { videoRepository } from "./videoRepository";
import { buildVideoControllers } from "./videoControllers";
import { buildVideoUseCases } from "./videos";

const videoUseCases = buildVideoUseCases({ videoRepository });
export const videoControllers = buildVideoControllers(videoUseCases);
