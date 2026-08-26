import { FunctionComponent } from "react";

import { RightStringified } from "@open-ent/client";
import { useEdificeClient } from "@open-ent/react";

import { ShareModal } from "~/common/ShareModal";
import { RESOURCE_BIG_TYPE } from "~/core/enums/resource-big-type.enum";

type props = {
  isOpen: boolean;
  toggle: () => void;
  shareOptions: {
    resourceId: string;
    resourceRights: RightStringified[];
    resourceCreatorId: string;
  };
  resourceType: RESOURCE_BIG_TYPE;
};

export const ShareModalMagneto: FunctionComponent<props> = ({
  isOpen,
  toggle,
  shareOptions,
  resourceType,
}: props) => {
  const { appCode } = useEdificeClient();
  const handleShareClose = (): void => {
    toggle();
  };

  const handleShareSuccess = (): void => {
    toggle();
  };

  const formatAppPath = `${appCode}/${resourceType}`;
  return (
    <>
      {isOpen && (
        <ShareModal
          appCode={formatAppPath}
          isOpen={isOpen}
          shareOptions={shareOptions}
          onCancel={handleShareClose}
          onSuccess={handleShareSuccess}
        />
      )}
    </>
  );
};
