export interface City {
  city: string;
  events: Event[];
}

export interface Event {
  name: string;
  description: string;
  image: any;
}
