import { CanActivateFn } from '@angular/router';

export const authChildGuard: CanActivateFn = (route, state) => {
  return true;
};
