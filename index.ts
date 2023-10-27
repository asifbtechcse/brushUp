import { Observable } from 'rxjs';

const observable$ = new Observable<string>((subscriber) => {
  subscriber.next('Kazi');
  subscriber.next('Asif');
  subscriber.next('Hossain');
});

const observer$ = {
  next: (value) => console.log(value),
};

observable$.subscribe(observer$);
