import {HttpInterceptorFn} from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('/login') || req.url.includes('/register')) {
    return next(req);
  }
  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  });

  return next(req)
}
