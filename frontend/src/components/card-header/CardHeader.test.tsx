import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { CardHeader } from "./CardHeader";

// La clé est rendue telle quelle : on vérifie que le cadenas porte son infobulle, pas le texte traduit.
vi.mock("react-i18next", () => ({ useTranslation: () => ({ t: (key: string) => key }) }));

const base = { avatarUrl: "", ownerName: "A", modificationDate: "2026-11-25T08:00:00Z", onToggleDropdown: () => {} };

describe("CardHeader", () => {
  it("un tableau en lecture seule affiche un cadenas avec son infobulle", () => {
    render(<CardHeader {...base} isLocked />);
    expect(screen.getByLabelText("magneto.card.locked.tooltip")).toBeTruthy();
  });
  it("un tableau modifiable n'affiche pas de cadenas", () => {
    render(<CardHeader {...base} isLocked={false} />);
    expect(screen.queryByTestId("card-locked")).toBeNull();
  });
});
