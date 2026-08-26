import { MediaLibraryType } from "@open-ent/react";

import { MediaProps } from "../board-view/types";

export interface ImageContainerProps {
  media: MediaProps | null;
  handleClickMedia: (type: MediaLibraryType) => void;
}
