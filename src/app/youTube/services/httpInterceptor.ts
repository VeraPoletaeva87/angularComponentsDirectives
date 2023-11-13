import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ShortUrlInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<string>> {
        const modifiedReq = req.clone({
            params: req.params.set( 'key', 'AIzaSyB0fgxbiZ__2ZQKwB-Wa7kqEsq5cIVOi4Q')
        });

        return next.handle(modifiedReq);
    }
}