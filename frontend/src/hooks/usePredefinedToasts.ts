import { useCallback } from "react";

import { toast } from "react-toastify";

interface UsePredefinedToastsProps {
  func: (...args: any[]) => Promise<any>;
  successMessage?: string;
  failureMessage?: string;
}

/**
 * Les déclencheurs de mutation RTK Query ne lèvent jamais : ils renvoient
 * `{ error }`. On lève nous-mêmes pour que le message d'échec s'affiche.
 * Ex. : une restauration refusée en 403 ne dit plus « Operation successful ».
 */
export const runAndCheck = async (promise: Promise<any>) => {
  const result = await promise;
  if (result && typeof result === "object" && "error" in result && result.error) {
    throw result.error;
  }
  return result;
};

export const usePredefinedToasts = ({
  func,
  successMessage,
  failureMessage,
}: UsePredefinedToastsProps) => {
  const executeFunction = useCallback(
    async (parameter: any) => {
      try {
        await runAndCheck(func(parameter));
        toast.success(successMessage || "Operation successful!");
      } catch {
        toast.error(failureMessage || "Operation failed!");
      }
    },
    [func, successMessage, failureMessage, toast],
  );

  return executeFunction;
};
