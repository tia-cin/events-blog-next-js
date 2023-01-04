export interface City {
  city: string;
  desc: string;
  events: Event[];
}

export interface Event {
  name: string;
  description: string;
  image: any;
}
