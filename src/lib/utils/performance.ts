"use client";

import { useMemo } from "react";

export function trackPerformance(componentName: string) {
  return function <T extends (...args: any[]) => any>(fn: T): T {
    return function (this: any, ...args: any[]) {
      const startTime = performance.now();

      try {
        const result = fn.apply(this, args);
        const endTime = performance.now();
        const duration = endTime - startTime;
        return result;
      } catch (error) {
        throw error;
      }
    } as T;
  };
}

export function useMemoizedData<T, R>(
  data: T,
  processFn: (data: T) => R,
  deps: React.DependencyList = []
): R {
  return useMemo(() => {
    const startTime = performance.now();
    const result = processFn(data);
    const endTime = performance.now();

    console.log(
      `[Performance] Data processing: ${(endTime - startTime).toFixed(2)}ms`
    );

    return result;
  }, [data, ...deps]);
}
