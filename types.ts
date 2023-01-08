export interface City {
  city: string;
  image: string;
  desc: string;
  events: Event[];
}

export interface Event {
  name: string;
  description: string;
  image: any;
  suscription: string[];
}
