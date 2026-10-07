import { MediaLibraryType } from "@open-ent/react";

export interface VideoPlayerProps {
  modifyFile: (type: MediaLibraryType) => void;
}
