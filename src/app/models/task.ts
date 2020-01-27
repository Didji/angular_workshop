export class Task {
  /**
   * Identifier of the task
   */
  public id: number;
  /**
   * Description of the task
   */
  public description: string;

  /**
   * Date of creation
   */
  public dateCreation: Date;

  constructor(id: number, description: string) {
    this.id = id;
    this.description = description;
    this.dateCreation = new Date();
  }
}
