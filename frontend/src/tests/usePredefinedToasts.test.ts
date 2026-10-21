import { describe, expect, it } from "vitest";

import { runAndCheck } from "~/hooks/usePredefinedToasts";

describe("runAndCheck", () => {
  it("laisse passer un résultat sans erreur", async () => {
    await expect(runAndCheck(Promise.resolve({ data: 1 }))).resolves.toEqual({ data: 1 });
  });

  it("lève quand le déclencheur RTK renvoie { error } (ex. restauration refusée en 403)", async () => {
    await expect(runAndCheck(Promise.resolve({ error: { status: 403 } }))).rejects.toEqual({ status: 403 });
  });
});
