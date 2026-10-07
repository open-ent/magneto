import { ShareRight, ShareRightAction } from "@open-ent/client";

export const hasRight = (
  shareRight: ShareRight,
  shareAction: ShareRightAction,
): boolean => {
  return (
    shareRight.actions.filter((a: { id: any }) => shareAction.id === a.id)
      .length > 0
  );
};
