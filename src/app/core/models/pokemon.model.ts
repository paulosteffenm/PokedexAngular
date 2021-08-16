export class Pokemon {
  public Id?: number;

  public Name?: string;

  public baseExperience?: number;

  public Height?: number;

  public Weight?: number;

  constructor(data?: Partial<Pokemon>) {
    Object.assign(this, data);
  }
}
