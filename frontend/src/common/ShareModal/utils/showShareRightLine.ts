import { ShareRight } from "@open-ent/client";

export const showShareRightLine = (
  shareRight: ShareRight,
  showBookmarkMembers: boolean,
): boolean =>
  (shareRight.isBookmarkMember && showBookmarkMembers) ||
  !shareRight.isBookmarkMember;
