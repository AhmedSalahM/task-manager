import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authguardGuard: CanActivateFn = (route, state) => {
  const email=localStorage.getItem('email')
  const router =inject (Router)
  if(!email){
    //programatic routing
    router.navigate(['/signin']);
    return false;
  }
  
  return true;
};
