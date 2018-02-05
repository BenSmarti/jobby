export class Interview {
  id: number;
  date: string;
  location: string;
  status: 'scheduled' | 'cancelled' | 'conducted';
  comments: string;
}
