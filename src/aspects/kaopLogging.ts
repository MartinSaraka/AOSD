import { beforeMethod, afterMethod } from 'kaop-ts';

export const LogBefore = beforeMethod((meta) => {
  console.log(`[Before] Executing ${meta.method.name} with args:`, meta.args);
});

export const LogAfter = afterMethod((meta) => {
  console.log(
    `[After] Completed ${meta.method.name} with result:`,
    meta.result
  );
});

export const LogError = afterMethod((meta) => {
  if (meta.exception) {
    console.error(`[Error] Exception in ${meta.method.name}:`, meta.exception);
  }
});
