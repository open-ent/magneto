import { memo } from "react";
import { useTranslation } from "react-i18next";

import LockIcon from "@mui/icons-material/Lock";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Tooltip,
  Typography,
  CardHeader as MuiCardHeader,
  Avatar,
  IconButton,
} from "@mui/material";

import {
  styledAvatar,
  styledCardHeader,
  styledIconButton,
  styledTypographySubheader,
} from "./style";
import { CardHeaderProps } from "./types";
import { POINTER_TYPES } from "~/core/constants/pointerTypes.const";
import { useElapsedTime } from "~/hooks/useElapsedTime";

const TimestampDisplay = memo(
  ({ modificationDate }: { modificationDate: string }) => {
    const { label, tooltip } = useElapsedTime(modificationDate);

    return (
      <Tooltip title={tooltip} placement="bottom-start">
        <Typography sx={styledTypographySubheader}>{label}</Typography>
      </Tooltip>
    );
  },
  (prevProps, nextProps) =>
    prevProps.modificationDate === nextProps.modificationDate,
);

/** Cadenas d'un tableau partagé en lecture seule, avec son infobulle (comme dans l'ancienne interface). */
const LockedIndicator = () => {
  const { t } = useTranslation("magneto");
  const label = t("magneto.card.locked.tooltip");
  return (
    <Tooltip title={label}>
      <LockIcon aria-label={label} data-testid="card-locked" />
    </Tooltip>
  );
};

export const CardHeader = memo(
  ({
    avatarUrl,
    ownerName,
    modificationDate,
    onToggleDropdown,
    isLocked,
  }: CardHeaderProps) => (
    <MuiCardHeader
      sx={styledCardHeader}
      avatar={<Avatar sx={styledAvatar} aria-label="recipe" src={avatarUrl} />}
      action={
        <div>
          {isLocked && <LockedIndicator />}
          <IconButton
            sx={styledIconButton}
            aria-label="settings"
            onClick={onToggleDropdown}
            data-type={POINTER_TYPES.NON_SELECTABLE}
          >
            <MoreVertIcon />
          </IconButton>
        </div>
      }
      title={ownerName}
      subheader={<TimestampDisplay modificationDate={modificationDate} />}
    />
  ),
);

CardHeader.displayName = "CardHeader";
