import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { take, tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  const isLoggedIn = authService.isLoggedIn();

  if (isLoggedIn) {
    return true; // El usuario está logueado, permite el acceso
  } else {
    // Redirige al componente de login y guarda la URL actual para redirigir después del login
    router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
};
