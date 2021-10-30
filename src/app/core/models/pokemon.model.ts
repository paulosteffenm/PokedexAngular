export class Pokemon {
  public Id?: number;

  public Name?: string;

  public BaseExperience?: number;

  public Height?: number;

  public Weight?: number;

  public Image?: string;

  public Types?: Array<string>;

  constructor(data?: Partial<Pokemon>) {
    Object.assign(this, data);
  }
}
