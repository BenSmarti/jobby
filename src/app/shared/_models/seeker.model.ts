export class Seeker {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}
